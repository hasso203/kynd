import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        <div className="mb-10">
          <div className="text-5xl font-bold tracking-tight">KYND</div>

          <p className="mt-3 text-xl text-slate-300">
            Tell us what&apos;s happening. We&apos;ll tell you what to do next.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
          <label className="block text-lg font-semibold mb-3">
            What&apos;s going on?
          </label>

          <textarea
            className="w-full min-h-48 resize-none rounded-xl border border-slate-300 p-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="I'm 61 and live alone in Pike County. I'm behind on my electric bill, groceries are getting too expensive, and I'm having trouble paying for my prescriptions."
          />

          <button className="mt-5 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700">
            Find Help →
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          KYND helps connect Kentuckians with government and community resources.
          Final eligibility is determined by the administering organization.
        </p>
      </div>
    </main>
  );
}