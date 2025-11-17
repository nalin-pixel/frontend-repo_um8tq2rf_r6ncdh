import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const webOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.4]);

  const chapters = [
    {
      title: "Origin Story",
      text: "From sketchbook webs to production-grade systems — the journey begins.",
      accent: "#ef4444",
    },
    {
      title: "Senses Tingling",
      text: "User signals, data, and research weave together into insights.",
      accent: "#60a5fa",
    },
    {
      title: "Swing into Prototypes",
      text: "Rapid iterations, motion studies, and micro-interactions come alive.",
      accent: "#f59e0b",
    },
    {
      title: "Ship and Protect",
      text: "Accessible, performant, resilient design — because great power...",
      accent: "#10b981",
    },
  ];

  return (
    <section id="story" ref={ref} className="relative py-32 sm:py-40 bg-slate-950 text-white">
      <motion.div style={{ opacity: webOpacity }} className="pointer-events-none absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {[...Array(12)].map((_, i) => (
            <path key={i} d={`M 0 ${i * 80} Q 50 ${i * 80 + 40}, 1000 ${i * 80}`} stroke={i % 3 === 0 ? "#ef4444" : "#334155"} strokeWidth="0.5" fill="none" />
          ))}
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.h2 style={{ scale, y }} className="text-4xl sm:text-5xl font-black tracking-tight text-center">
          Story Mode
        </motion.h2>
        <p className="text-slate-300/80 text-center mt-3 max-w-2xl mx-auto">
          Scroll to journey through the way I think, design, and deliver.
        </p>

        <div className="mt-16 space-y-24">
          {chapters.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="grid sm:grid-cols-7 gap-6 items-center"
            >
              <div className="sm:col-span-3">
                <div className="text-sm uppercase tracking-widest text-slate-400">Chapter {i + 1}</div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-1" style={{ color: c.accent }}>
                  {c.title}
                </h3>
                <p className="text-slate-300 mt-3">{c.text}</p>
              </div>
              <div className="sm:col-span-4">
                <div className="aspect-[16/9] rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    style={{ background: `radial-gradient(600px 200px at 20% 30%, ${c.accent}22, transparent)` }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 grid place-items-center"
                  >
                    <div className="text-center p-6">
                      <div className="text-xs tracking-widest text-slate-400 uppercase">Selected Work</div>
                      <div className="mt-2 font-semibold">Case studies, flows, and motion samples slot here.</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
