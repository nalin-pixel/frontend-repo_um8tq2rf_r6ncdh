import { motion } from "framer-motion";

const projects = [
  {
    title: "City Mobility App",
    tags: ["UX", "Prototyping", "Motion"],
    color: "from-red-600/30 to-red-500/10",
  },
  {
    title: "E-commerce Accessibility",
    tags: ["Research", "A11y", "Systems"],
    color: "from-blue-600/30 to-blue-500/10",
  },
  {
    title: "Creator Tools Suite",
    tags: ["Design Systems", "Handoff"],
    color: "from-amber-500/30 to-amber-400/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Featured Projects</h2>
            <p className="text-slate-300/80 mt-2">A curated selection from recent work.</p>
          </div>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition font-semibold">Get in touch</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${p.color}`}
            >
              <div className="p-6">
                <div className="text-sm text-slate-400">Case Study</div>
                <div className="mt-1 font-bold text-xl">{p.title}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-slate-900/60 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/20 backdrop-blur-[1px] grid place-items-center"
              >
                <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">Open</button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
