"use client";

import { useState } from "react";

type Result = {
  type: string;
  urgency: number;
  summary: string;
  resource: {
    name: string;
    description: string;
    action: string;
    url: string;
  } | null;
};

export default function Home() {
  const [story, setStory] = useState(
    "I'm 61 and live alone in Pike County. I'm behind on my electric bill, groceries are getting too expensive, and I'm having trouble paying for my prescriptions."
  );

  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

 async function findHelp() {
  setLoading(true);

  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ story }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    setResults(data.issues || []);
  } catch (error) {
    console.error("Find Help error:", error);
    setResults([]);
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-10">
          <div className="text-5xl font-bold tracking-tight">KYND</div>

          <p className="mt-3 text-xl text-slate-300">
            Tell us what&apos;s happening. We&apos;ll tell you what to do next.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
          <label className="mb-3 block text-lg font-semibold">
            What&apos;s going on?
          </label>

          <textarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="min-h-48 w-full resize-none rounded-xl border border-slate-300 p-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={findHelp}
            disabled={loading || story.trim().length === 0}
            className="mt-5 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Analyzing your situation..." : "Find Help →"}
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-10 space-y-5">
            <div>
              <h2 className="text-3xl font-bold">Your KYND Plan</h2>
              <p className="mt-2 text-slate-300">
                Based on what you told us, here&apos;s what to do next.
              </p>
            </div>

            {results.map((result, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
              >
                <div className="text-sm font-bold tracking-wider text-blue-400">
                  {result.urgency}
                </div>

                <h3 className="mt-2 text-2xl font-bold">{result.type}</h3>

                <p className="mt-3 text-slate-300">{result.summary}</p>

                {result.resource && (
  <div>
    <p>
      <strong>{result.resource.name}</strong>
    </p>
    <p>{result.resource.description}</p>
    <p>{result.resource.action}</p>
    <a
      href={result.resource.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Go to official resource →
    </a>
  </div>
)}
              </div>
            ))}
          </div>
        )}

        <p className="mt-8 text-sm text-slate-400">
          KYND helps connect Kentuckians with government and community
          resources. Final eligibility is determined by the administering
          organization.
        </p>
      </div>
    </main>
  );
}