export const FrontendSkillsSection = () => {
  const cards = [
    {
      num: "01",
      title: "Next.js 16 & React 19",
      desc: "App Router moderno, Server & Client Components, Turbopack y renderizado híbrido SSR/SSG.",
    },
    {
      num: "02",
      title: "TypeScript Estricto",
      desc: "Tipado estricto de dominio, interfaces genéricas, inferencia avanzada y cero deuda técnica en compilación.",
    },
    {
      num: "03",
      title: "Tailwind CSS v4 & Shadcn UI",
      desc: "Estilos atómicos rápidos, variables CSS nativas, temas oscuros y componentes accesibles basados en Radix UI.",
    },
    {
      num: "04",
      title: "Estado Cliente & APIs",
      desc: "Gestión global reactiva con Zustand, consumo eficiente con Axios, interceptores JWT y sincronización de estado.",
    },
  ];

  const standards = [
    "✦ Turbopack Engine",
    "✦ Tipado Estricto",
    "✦ Zero-Runtime CSS",
    "✦ SSR / SSG Híbrido",
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-[1416px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#212121] text-[#FF9D29] text-xs font-bold tracking-wider">
            <span>02 • FRONTEND ENGINEERING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-sora text-[#F8F8F8] tracking-tight leading-tight">
            Dominio del <span className="text-[#FF9D29]">frontend</span> reactivo y de alto rendimiento.
          </h2>

          <p className="text-sm sm:text-base text-[#D1D6D9] leading-relaxed">
            Construcción de aplicaciones web fluidas y tipadas de punta a punta. Enfoque en código desacoplado, tiempos de carga mínimos, accesibilidad y experiencia de usuario optimizada en cualquier dispositivo.
          </p>

          {/* Technical Standards & Key Tools */}
          <div className="pt-2 space-y-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#939598] block">
              Estándares &amp; Principios Clave
            </span>
            <div className="flex flex-wrap gap-2">
              {standards.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-xl bg-[#191919] border border-white/5 hover:border-[#FF9D29]/40 text-xs font-mono text-[#D1D6D9] transition-all shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.num}
              className="p-6 sm:p-7 rounded-2xl bg-[#191919] border border-white/5 hover:border-[#FF9D29]/40 transition-all duration-300 space-y-3 group shadow-lg"
            >
              <span className="text-xs font-bold font-mono tracking-wider text-[#FF9D29] block">
                {card.num}
              </span>
              <h3 className="text-lg font-semibold font-sora text-[#F8F8F8] group-hover:text-white transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D1D6D9] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
