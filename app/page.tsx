"use client";

import { useState } from "react";

type Result = {
  title: string;
  urgency: string;
  description: string;
  actions: string[];
};

export default function Home() {
  const [story, setStory] = useState(
    "I'm 61 and live alone in Pike County. I'm behind on my electric bill, groceries are getting too expensive, and I'm having trouble paying for my prescriptions."
  );

  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

  function findHelp() {
    setLoading(true);

    setTimeout(() => {
      setResults([
        {
          title: "Prevent your electricity from being disconnected",
          urgency: "DO THIS FIRST",
          description:
            "You may qualify for emergency utility assistance through LIHEAP or your local Community Action Agency.",
          actions: [
            "Gather your utility bill",
            "Gather your shutoff notice",
            "Bring photo identification",
            "Bring proof of household income",
          ],
        },
        {
          title: "Get help paying for groceries",
          urgency: "NEXT",
          description:
            "You may qualify for Kentucky SNAP benefits based on your household situation and income.",
          actions: [
            "Gather identification",
            "Gather income information",
            "Gather housing and utility expenses",
            "Start a kynect benefits application",
          ],
        },
        {
          title: "Lower your prescription costs",
          urgency: "ALSO CONSIDER",
          description:
            "There may be prescription assistance programs that can reduce your out-of-pocket medication costs.",
          actions: [
            "Make a list of your prescriptions",
            "Gather insurance information",
            "Check Kentucky and manufacturer assistance programs",
          ],
        },
      ]);

      setLoading(false);
    }, 900);
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

                <h3 className="mt-2 text-2xl font-bold">{result.title}</h3>

                <p className="mt-3 text-slate-300">{result.description}</p>

                <div className="mt-5">
                  <div className="font-semibold">What to do:</div>

                  <ul className="mt-2 space-y-2 text-slate-300">
                    {result.actions.map((action, actionIndex) => (
                      <li key={actionIndex}>✓ {action}</li>
                    ))}
                  </ul>
                </div>
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