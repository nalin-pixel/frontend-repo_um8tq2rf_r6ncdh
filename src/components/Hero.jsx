import { motion } from "framer-motion";

function WebBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#1e293b" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#glow)" />
      {[...Array(10)].map((_, i) => (
        <path
          key={i}
          d={`M -5 ${i * 120} Q ${i % 2 ? 40 : 60} ${i * 120 + 60}, 1005 ${i * 120}`}
          stroke={i % 2 ? "#60a5fa" : "#ef4444"}
          strokeWidth="0.6"
          fill="none"
          opacity="0.35"
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <WebBackground />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,.1),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(239,68,68,.12),transparent_35%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-8 w-28 h-28 rounded-full grid place-items-center bg-slate-900/60 border border-white/10 shadow-[0_0_40px_-10px_rgba(239,68,68,0.6)]"
        >
          <svg width="54" height="54" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C9 5 7.5 8.5 7 12c-.5 3.5.5 6 5 10 4.5-4 5.5-6.5 5-10-.5-3.5-2-7-5-10Z" stroke="#ef4444" strokeWidth="1.2" />
            <path d="M12 4v16M5 9.5h14M6.5 14.5h11" stroke="#60a5fa" strokeWidth="1" />
            <circle cx="9.5" cy="9.5" r="1.1" fill="#fff" />
            <circle cx="14.5" cy="9.5" r="1.1" fill="#fff" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight"
        >
          Your Friendly Neighborhood UX Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          A scroll-driven story about crafting interfaces that stick — inspired by the Spider-Verse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#story" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 transition font-semibold shadow-lg shadow-red-600/30">Enter Story Mode</a>
          <a href="#projects" className="px-5 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/30 transition font-semibold">See Work</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 text-slate-400"
        >
          <div className="text-xs uppercase tracking-widest mb-2">Scroll</div>
          <div className="w-6 h-10 rounded-full border border-slate-600 mx-auto relative overflow-hidden">
            <motion.div className="w-1 h-2 bg-slate-300 rounded-full absolute left-1/2 -translate-x-1/2"
              initial={{ y: 6 }}
              animate={{ y: 24 }}
              transition={{ repeat: Infinity, duration: 1.2, repeatType: "mirror" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
