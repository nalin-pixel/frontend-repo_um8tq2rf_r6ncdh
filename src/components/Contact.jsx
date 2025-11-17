import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    // Placeholder submit - extend to backend later if needed
    setTimeout(() => setStatus("Sent! I'll swing back to you shortly."), 800);
  }

  return (
    <section id="contact" className="relative py-28 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Let’s Collaborate</h2>
        <p className="text-slate-300/80 mt-2">Have a mission? I’ve got webbing. Tell me about your project.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
          <input required placeholder="Name" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:outline-none" />
          <input required placeholder="Email" type="email" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:outline-none" />
          <textarea required placeholder="What are we building?" rows={5} className="sm:col-span-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:outline-none" />
          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 transition font-semibold">Send Signal</button>
            <div className="text-slate-400 text-sm">{status}</div>
          </div>
        </form>
      </div>
    </section>
  );
}
