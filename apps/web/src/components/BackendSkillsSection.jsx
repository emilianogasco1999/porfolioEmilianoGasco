export const BackendSkillsSection = () => {
  const cards = [
    {
      num: "01",
      title: "Node.js, Express & NestJS",
      desc: "Arquitectura limpia (Clean Architecture), separación por capas, Domain-Driven Design y middlewares de seguridad.",
    },
    {
      num: "02",
      title: "PostgreSQL & Prisma ORM",
      desc: "Modelado relacional robusto, migraciones seguras, índices optimizados y transacciones consistentes (ACID).",
    },
    {
      num: "03",
      title: "MongoDB & Mongoose",
      desc: "Almacenamiento NoSQL documental, agregaciones complejas y esquemas flexibles para analítica y catálogos.",
    },
    {
      num: "04",
      title: "Socket.io & Real-Time APIs",
      desc: "Comunicación bidireccional por WebSockets para mensajería, eventos en vivo y sincronización distribuida.",
    },
  ];

  const standards = [
    "✦ Clean Architecture",
    "✦ Domain-Driven Design",
    "✦ Transacciones ACID",
    "✦ WebSockets Bidireccionales",
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-[1416px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#212121] text-[#405BFF] text-xs font-bold tracking-wider">
            <span>03 • BACKEND &amp; ARQUITECTURA DE DATOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-sora text-[#F8F8F8] tracking-tight leading-tight">
            Servicios <span className="text-[#405BFF]">backend</span> escalables, seguros y desacoplados.
          </h2>

          <p className="text-sm sm:text-base text-[#D1D6D9] leading-relaxed">
            Diseño e implementación de APIs RESTful y servicios en tiempo real con Node.js y TypeScript. Aplicación rigurosa de Clean Architecture y DDD para que la lógica de negocio permanezca independiente de frameworks y bases de datos.
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
                  className="px-3 py-1.5 rounded-xl bg-[#191919] border border-white/5 hover:border-[#405BFF]/40 text-xs font-mono text-[#D1D6D9] transition-all shadow-sm"
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
              className="p-6 sm:p-7 rounded-2xl bg-[#191919] border border-white/5 hover:border-[#405BFF]/40 transition-all duration-300 space-y-3 group shadow-lg"
            >
              <span className="text-xs font-bold font-mono tracking-wider text-[#405BFF] block">
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
