import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Global parallax values for the section
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.06]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const webOpacity = useTransform(scrollYProgress, [0, 1], [0.12, 0.45]);

  // Swing animation (simulate Spidey swing) — oscillates as you scroll
  const swingRotate = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [-14, 10, -8, 6, -3, 0]);
  const swingX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-80, 60, -46, 28, 0]);
  const swingY = useTransform(scrollYProgress, [0, 1], [-10, 6]);
  const haloOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.35]);

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
    <section id="story" ref={ref} className="relative py-32 sm:py-40 bg-slate-950 text-white overflow-hidden">
      {/* Dynamic webbing backdrop */}
      <motion.div style={{ opacity: webOpacity, y }} className="pointer-events-none absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {[...Array(14)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${i * 80} Q ${i % 2 ? 70 : 40} ${i * 80 + 40}, 1000 ${i * 80}`}
              stroke={i % 3 === 0 ? "#ef4444" : i % 2 === 0 ? "#1d4ed8" : "#334155"}
              strokeWidth="0.5"
              fill="none"
              opacity={i % 3 === 0 ? 0.5 : 0.28}
            />
          ))}
        </svg>
      </motion.div>

      {/* Swinging Spidey silhouette */}
      <motion.div
        style={{ x: swingX, y: swingY, rotate: swingRotate }}
        className="hidden sm:block absolute -top-10 right-[10%] origin-top left-auto z-10"
      >
        {/* Web line */}
        <div className="h-24 w-px bg-gradient-to-b from-slate-300/60 to-slate-300/10 mx-auto" />
        {/* Spidey capsule */}
        <div className="relative -mt-1">
          <motion.div
            style={{ opacity: haloOpacity }}
            className="absolute -inset-6 rounded-full bg-red-500/10 blur-xl"
          />
          <div className="w-14 h-14 rounded-full grid place-items-center bg-slate-900/80 border border-white/10 shadow-[0_8px_40px_-8px_rgba(239,68,68,0.5)]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C9 5 7.5 8.5 7 12c-.5 3.5.5 6 5 10 4.5-4 5.5-6.5 5-10-.5-3.5-2-7-5-10Z" stroke="#ef4444" strokeWidth="1.3" />
              <path d="M12 4v16M5 9.5h14M6.5 14.5h11" stroke="#60a5fa" strokeWidth="1" />
              <circle cx="9.5" cy="9.5" r="1.1" fill="#fff" />
              <circle cx="14.5" cy="9.5" r="1.1" fill="#fff" />
            </svg>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.h2 style={{ scale, y }} className="text-4xl sm:text-5xl font-black tracking-tight text-center">
          Story Mode
        </motion.h2>
        <p className="text-slate-300/80 text-center mt-3 max-w-2xl mx-auto">
          Scroll to journey through the way I think, design, and deliver.
        </p>

        {/* Chapters */}
        <div className="mt-16 space-y-24">
          {chapters.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
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
                  {/* Ambient accent glow */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1, opacity: 0.6 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    style={{ background: `radial-gradient(600px 220px at 20% 30%, ${c.accent}22, transparent)` }}
                  />

                  {/* Parallax layers */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ y: useTransform(scrollYProgress, [0, 1], [12, -12]) }}
                  >
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      {[...Array(6)].map((_, k) => (
                        <path
                          key={k}
                          d={`M 0 ${k * 28} Q ${k % 2 ? 50 : 30} ${k * 28 + 14}, 1000 ${k * 28}`}
                          stroke={k % 2 ? c.accent : "#334155"}
                          strokeWidth={k % 2 ? 0.9 : 0.5}
                          opacity={k % 2 ? 0.55 : 0.35}
                          fill="none"
                        />
                      ))}
                    </svg>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
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
