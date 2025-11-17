import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      <motion.div
        className="h-1 bg-gradient-to-r from-red-500 via-blue-500 to-amber-400 shadow-[0_0_12px_2px_rgba(239,68,68,0.35)]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
      />
    </div>
  );
}
