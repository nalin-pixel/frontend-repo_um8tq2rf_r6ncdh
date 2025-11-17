import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#story", label: "Story" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 mt-3 rounded-2xl bg-slate-900/70 backdrop-blur border border-white/10">
        <div className="flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-white">
            <span className="text-red-500">SPDR</span> • UX
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>
            ))}
          </nav>

          <button className="sm:hidden p-2" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden mx-4 mt-2 rounded-xl bg-slate-900/80 backdrop-blur border border-white/10 p-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
