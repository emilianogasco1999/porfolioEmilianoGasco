export const UiDesignSkillsSection = () => {
  const cards = [
    {
      num: "01",
      title: "Figma & Penpot",
      desc: "Prototipado interactivo, wireframing de baja y alta fidelidad y design handoff hacia desarrollo.",
    },
    {
      num: "02",
      title: "Design Systems & Tokens",
      desc: "Variables semánticas de color, escalas modulares tipográficas, espaciado y consistencia multi-pantalla.",
    },
    {
      num: "03",
      title: "Atomic Design & CVA",
      desc: "Estructura modular de átomos, moléculas y organismos en componentes desacoplados con variantes CVA.",
    },
    {
      num: "04",
      title: "Accesibilidad & UX Research",
      desc: "Contraste y normativas WCAG, jerarquías visuales intuitivas y heurísticas de usabilidad aplicadas.",
    },
  ];

  const standards = [
    "✦ Penpot & Figma",
    "✦ Tokens Atómicos",
    "✦ Accesibilidad WCAG",
    "✦ Mobile-First UI",
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-[1416px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#212121] text-[#EE5DAC] text-xs font-bold tracking-wider">
            <span>01 • DISEÑO UX / UI &amp; PRODUCT DESIGN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-sora text-[#F8F8F8] tracking-tight leading-tight">
            Interfaces intuitivas y <span className="text-[#EE5DAC]">sistemas de diseño</span> consistentes.
          </h2>

          <p className="text-sm sm:text-base text-[#D1D6D9] leading-relaxed">
            Diseño centrado en la experiencia del usuario y en la viabilidad técnica: prototipado de alta resolución en Figma y Penpot, especificación de design tokens y componentes reutilizables sin fricción entre diseño y código.
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
                  className="px-3 py-1.5 rounded-xl bg-[#191919] border border-white/5 hover:border-[#EE5DAC]/40 text-xs font-mono text-[#D1D6D9] transition-all shadow-sm"
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
              className="p-6 sm:p-7 rounded-2xl bg-[#191919] border border-white/5 hover:border-[#EE5DAC]/40 transition-all duration-300 space-y-3 group shadow-lg"
            >
              <span className="text-xs font-bold font-mono tracking-wider text-[#EE5DAC] block">
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
