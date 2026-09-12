import Anthropic from "@anthropic-ai/sdk";
import {
  resources,
  medicalTransportationByCounty,
} from "../../../data/resources";;
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const story = body.story;

    if (!story || typeof story !== "string") {
      return Response.json(
        { error: "Please describe what is happening." },
        { status: 400 }
      );
    }

    const message = await anthropic.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1200,
      messages: [
        {
          role: "user",
          content: `
You are the analysis engine for KYND, a Kentucky assistance navigator.

Analyze the person's situation below.

Return ONLY valid JSON. Do not include markdown or commentary.

Use this exact structure:

{
  "facts": {
    "age": number or null,
    "county": string or null,
    "household_size": number or null,
    "monthly_income": number or null
  },
  "issues": [
    {
      "type": "utility_assistance" | "food_assistance" or "medical_transportation",
      "urgency": number,
      "summary": string,
      "evidence": string
    }
  ],
  "summary": string
}

Urgency must be from 1 to 100, where 100 means immediate danger or crisis.

Do not determine official eligibility for any government program.
Only extract facts and identify the person's needs.

Only include needs that are explicitiy stated or directly implied by the person's words.
Do not invent additional problems, risks, diagnoses, financial needs, or assistance categories.

For each issue, evidence must be s short exact quote or close paraphrase from the person's own words that supports that issue.

Person's situation:

${story}
          `,
        },
      ],
    });

    const firstBlock = message.content[0];

    if (firstBlock.type !== "text") {
      throw new Error("Claude did not return text.");
    }

    const cleaned = firstBlock.text
  .replace(/^```json\s*/i, "")
  .replace(/^```\s*/i, "")
  .replace(/```$/i, "")
  .trim();

const result = JSON.parse(cleaned);
const issuesWithResources = result.issues.map((issue: any) => {
  const resource =
    resources[issue.type as keyof typeof resources] ?? null;

  if (issue.type === "medical_transportation" && result.facts.county) {
  const countyResource =
    medicalTransportationByCounty[
      result.facts.county as keyof typeof medicalTransportationByCounty
    ];

  if (countyResource) {
    return {
      ...issue,
      resource: {
        ...resource,
        ...countyResource,
      },
    };
  }
  }
  return {
    ...issue,
    resource,
  };
});
    return Response.json({
  ...result,
  issues: issuesWithResources,
});
  } catch (error) {
    console.error("KYND analyze error:", error);

    return Response.json(
      { error: "KYND could not analyze the situation." },
      { status: 500 }
    );
  }
}