import { MapPin, CheckCircle2, Code2, Palette, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1416px] mx-auto rounded-3xl bg-[#F8F8F8] p-8 sm:p-14 text-[#191919] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191919] text-[#DDFF46] text-[11px] font-bold tracking-wider">
              <span>✦ SOBRE MÍ • PERFIL INTEGRAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-sora text-[#191919] tracking-tight leading-[1.15]">
              Full Stack con base en Sistemas, Redes y Diseño.
            </h2>

            <div className="space-y-4 text-[#414042] text-sm sm:text-base leading-relaxed">
              <p>
                Soy desarrollador Full Stack con sólida formación técnica en sistemas y redes. Combino mi
                experiencia en programación (Clean Architecture, DDD, stack MERN/Next.js), soporte de infraestructura y diseño para crear
                soluciones digitales escalables, funcionales y pensadas para resolver problemas reales.
              </p>
              <p>
                Cuento con doble titulación: <strong>Técnico Superior en Programación</strong> y{" "}
                <strong>Técnico Superior en Computación y Redes</strong>, aportando una visión completa desde la conectividad física y servidores hasta el código frontend y backend en producción.
              </p>
            </div>

            {/* PowerLink Technology Highlight Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#191919] text-white border border-black/10 shadow-xl space-y-3.5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#DDFF46]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#DDFF46]/15 transition-all" />

              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DDFF46]/10 border border-[#DDFF46]/30 text-[#DDFF46] text-[10px] font-bold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DDFF46] animate-pulse" />
                  Iniciativa Empresarial &amp; Liderazgo
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] text-[#A6A6A6]">
                  <MapPin className="w-3.5 h-3.5 text-[#DDFF46]" />
                  <span>Juan Bautista Alberdi, Tucumán</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-sora text-white">
                  PowerLink Technology
                </h3>
                <p className="text-xs font-semibold text-[#DDFF46] tracking-wide mt-0.5">
                  Fundador &amp; Lead Developer
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#D1D6D9] leading-relaxed">
                Empresa en desarrollo orientada a la transformación digital y conectividad en el sur tucumano: software a medida, automatización e infraestructura de redes confiable para empresas y comercios locales.
              </p>

              <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-medium text-[#ECEFF1]">
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#00DA7B]" />
                  Desarrollo de Software
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#00DA7B]" />
                  Redes &amp; Infraestructura
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#00DA7B]" />
                  Soluciones Digitales
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (3 Engineering Pillars Cards) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Card 1: Architecture & Scalability */}
            <div className="p-6 rounded-2xl bg-[#191919] text-white border border-white/5 space-y-3 shadow-lg hover:border-[#405BFF]/40 transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-bold tracking-wider text-[#405BFF]">
                  01 • ARQUITECTURA &amp; DESARROLLO
                </div>
                <Code2 className="w-4 h-4 text-[#405BFF] opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-semibold font-sora text-[#F8F8F8]">
                Sistemas Escalables &amp; Clean Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[#D1D6D9] leading-relaxed">
                Construcción de aplicaciones end-to-end con principios SOLID, Clean Architecture y DDD. Código desacoplado, modular y tipado con TypeScript, Next.js y PostgreSQL.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono text-[#D1D6D9]">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Clean Architecture</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Next.js 16</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Node / NestJS</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">PostgreSQL / Prisma</span>
              </div>
            </div>

            {/* Card 2: UI & Design Systems */}
            <div className="p-6 rounded-2xl bg-[#191919] text-white border border-white/5 space-y-3 shadow-lg hover:border-[#EE5DAC]/40 transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-bold tracking-wider text-[#EE5DAC]">
                  02 • DESIGN SYSTEMS &amp; PRODUCT DESIGN
                </div>
                <Palette className="w-4 h-4 text-[#EE5DAC] opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-semibold font-sora text-[#F8F8F8]">
                De Prototipos a Componentes Reutilizables
              </h3>
              <p className="text-xs sm:text-sm text-[#D1D6D9] leading-relaxed">
                Diseño y maquetación en Penpot y Figma con tokens atómicos y variantes CVA. Convierto requerimientos de negocio en experiencias intuitivas, accesibles y consistentes en código.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono text-[#D1D6D9]">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Figma &amp; Penpot</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Atomic Design</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Tailwind CSS v4</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Accessibility</span>
              </div>
            </div>

            {/* Card 3: DevOps & Networking */}
            <div className="p-6 rounded-2xl bg-[#191919] text-white border border-white/5 space-y-3 shadow-lg hover:border-[#00DA7B]/40 transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-bold tracking-wider text-[#00DA7B]">
                  03 • DEVOPS, SERVIDORES &amp; REDES
                </div>
                <Server className="w-4 h-4 text-[#00DA7B] opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-semibold font-sora text-[#F8F8F8]">
                Infraestructura, Servidores &amp; Conectividad
              </h3>
              <p className="text-xs sm:text-sm text-[#D1D6D9] leading-relaxed">
                Entornos contenerizados con Docker, administración de sistemas Linux y diagnóstico de cableado y redes físicas. Comprensión profunda del ciclo de vida del software en producción.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono text-[#D1D6D9]">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Docker</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Linux OS</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Redes &amp; Servidores</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">CI/CD &amp; Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
