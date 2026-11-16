export const InfraSkillsSection = () => {
  const cards = [
    {
      num: "01",
      title: "Docker & Docker Compose",
      desc: "Contenerización de microservicios, compilaciones multi-stage y orquestación con límites controlados de CPU y memoria.",
    },
    {
      num: "02",
      title: "Linux & Administración de Servidores",
      desc: "Servidores Ubuntu/Debian bare-metal, configuración SSH segura, systemd daemons, Nginx reverse proxy y firewall.",
    },
    {
      num: "03",
      title: "Redes & Cableado Estructurado",
      desc: "Diseño y armado de racks, patch panels, switches gestionables, routing, subredes VLAN y diagnóstico físico/lógico.",
    },
    {
      num: "04",
      title: "CI/CD & Despliegue Híbrido",
      desc: "Flujos de integración continua con Git, despliegues serverless en Vercel/Netlify y servidores dedicados institucionales.",
    },
  ];

  const standards = [
    "✦ Docker Multi-Stage",
    "✦ Linux Bare-Metal",
    "✦ VLANs & Routing",
    "✦ Nginx Reverse Proxy",
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-[1416px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#212121] text-[#00DA7B] text-xs font-bold tracking-wider">
            <span>04 • INFRAESTRUCTURA, DEVOPS &amp; REDES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-sora text-[#F8F8F8] tracking-tight leading-tight">
            Control total desde el <span className="text-[#00DA7B]">cableado</span> hasta el servidor en producción.
          </h2>

          <p className="text-sm sm:text-base text-[#D1D6D9] leading-relaxed">
            Como Técnico Superior en Computación y Redes, no dependo de configuraciones mágicas. Entiendo la física y la arquitectura lógica donde corre el software: diseño redes locales, configuro servidores dedicados y despliego entornos contenerizados estables y optimizados.
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
                  className="px-3 py-1.5 rounded-xl bg-[#191919] border border-white/5 hover:border-[#00DA7B]/40 text-xs font-mono text-[#D1D6D9] transition-all shadow-sm"
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
              className="p-6 sm:p-7 rounded-2xl bg-[#191919] border border-white/5 hover:border-[#00DA7B]/40 transition-all duration-300 space-y-3 group shadow-lg"
            >
              <span className="text-xs font-bold font-mono tracking-wider text-[#00DA7B] block">
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
