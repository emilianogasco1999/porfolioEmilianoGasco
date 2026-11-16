"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "En Desarrollo", href: "#development" },
  { name: "Contacto", href: "#contact" },
];

export const HeaderNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <div className="max-w-[1416px] mx-auto h-[68px] px-6 rounded-2xl bg-[#191919]/90 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-2xl">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center text-lg sm:text-xl font-bold font-sora tracking-tight">
          <span className="text-[#F8F8F8]">EmilianoGasco</span>
          <span className="text-[#DDFF46]">.dev</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 px-6 py-2 rounded-xl bg-[#212121]/60 border border-white/5 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#D1D6D9] hover:text-[#FFFFFF] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://github.com/emilianogasco1999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#D1D6D9] hover:text-[#F8F8F8] transition-colors flex items-center gap-1"
          >
            GitHub <ArrowUpRight className="w-4 h-4 text-[#939598]" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#DDFF46] text-[#191919] font-semibold text-sm hover:brightness-105 active:scale-95 transition-all shadow-sm"
          >
            <span>Contactarme</span>
            <span className="text-base font-bold">→</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-[#D1D6D9] hover:text-white bg-[#212121]"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 p-6 rounded-2xl bg-[#191919] border border-white/10 shadow-2xl flex flex-col gap-4">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[#D1D6D9] hover:text-white py-1"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://github.com/emilianogasco1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#D1D6D9] flex items-center justify-between"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-[#939598]" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-[#DDFF46] text-[#191919] font-semibold text-sm"
            >
              Contactarme →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
