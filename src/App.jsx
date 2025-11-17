import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="bg-slate-950 text-white selection:bg-red-600/30 selection:text-white">
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <StorySection />
        <Projects />
        <Contact />
      </main>
      <footer className="py-12 text-center text-slate-400 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
          </div>
          <p className="text-sm">Designed with great power, shipped with great responsibility.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
