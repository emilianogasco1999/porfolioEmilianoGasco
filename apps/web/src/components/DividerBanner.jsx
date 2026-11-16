export const DividerBanner = () => {
  return (
    <section className="py-16 sm:py-24 px-1 sm:px-6 text-center border-y border-white/5 bg-[#0C0C0C]">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191919] border border-white/10 text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-[#DDFF46]">
          <span>Diseño • Frontend • Backend • Infraestructura</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-sora text-[#F8F8F8] tracking-tight leading-tight">
          Del diseño en Figma al servidor en Linux — <br className="hidden sm:inline" />
          Ingeniería de software de punta a punta.
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-[#D1D6D9] max-w-2xl mx-auto leading-relaxed">
          Doble perfil técnico para resolver el ciclo de vida completo: prototipado UX/UI, interfaces reactivas modernas, arquitecturas backend robustas y despliegues contenerizados en redes locales y nube.
        </p>
      </div>
    </section>
  );
};
