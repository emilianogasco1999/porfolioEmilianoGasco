import { ArrowUpRight } from "lucide-react";

export const FooterSection = () => {
  const actions = [
    {
      title: "Contratar / Proyecto",
      desc: "emilianogasco99@gmail.com",
      href: "mailto:emilianogasco99@gmail.com",
      highlight: true,
    },
    {
      title: "Descargar CV (PDF)",
      desc: "CV_Emiliano_Augusto_Gasco.pdf",
      href: "/CV_Emiliano_Augusto_Gasco.pdf",
      target: "_blank",
    },
    {
      title: "GitHub Repositories",
      desc: "github.com/emilianogasco1999",
      href: "https://github.com/emilianogasco1999",
      target: "_blank",
    },
    {
      title: "LinkedIn Profile",
      desc: "in/emiliano-augusto-gasco",
      href: "https://www.linkedin.com/in/emiliano-augusto-gasco/",
      target: "_blank",
    },
  ];

  return (
    <footer className="pt-24 pb-12 px-4 sm:px-6 bg-[#000000] border-t border-white/10">
      <div className="max-w-[1416px] mx-auto space-y-16">
        {/* Big Callout Title */}
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-sora text-[#F8F8F8] tracking-tight">
            ¿Listo para crear juntos?
          </h2>
        </div>

        {/* 4 Action Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((act) => (
            <a
              key={act.title}
              href={act.href}
              target={act.target || "_self"}
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl transition-all flex flex-col justify-between space-y-6 shadow-xl hover:translate-y-[-2px] ${
                act.highlight
                  ? "bg-[#DDFF46] text-[#191919] hover:brightness-105"
                  : "bg-[#191919] text-white hover:bg-[#212121] border border-white/5"
              }`}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-inter tracking-tight">
                  {act.title}
                </h3>
                <p className={`text-xs sm:text-sm mt-1 font-mono ${act.highlight ? "text-[#414042]" : "text-[#939598]"}`}>
                  {act.desc}
                </p>
              </div>

              <div className="flex justify-end">
                <ArrowUpRight className={`w-5 h-5 ${act.highlight ? "text-[#191919]" : "text-white"}`} />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Credits & Navigation Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#939598]">
          <p className="text-center md:text-left">
            © 2026 Emiliano Augusto Gasco. Todos los derechos reservados. • Desarrollador Full Stack MERN • Tucumán, Argentina.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[#D1D6D9]">
            <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
            <span>•</span>
            <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
            <span>•</span>
            <a href="#skills" className="hover:text-white transition-colors">Habilidades</a>
            <span>•</span>
            <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
            <span>•</span>
            <a href="#chapatita" className="hover:text-white transition-colors">Chapatita</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
