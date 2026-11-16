import { ArrowUpRight, Github, MapPin, QrCode, Server, Database, Layers, Radio, ShieldCheck, Calendar, Activity, Users } from "lucide-react";
import Image from "next/image";

export const InDevelopmentSection = () => {
  return (
    <section id="development" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1416px] mx-auto rounded-3xl bg-[#F8F8F8] p-6 sm:p-10 lg:p-14 text-[#0C0C0C] shadow-2xl space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#191919]/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191919] text-[#DDFF46] text-[11px] font-bold tracking-wider">
              <span>✦ INGENIERÍA &amp; STARTUP LABS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sora text-[#191919] tracking-tight">
              Proyectos en Desarrollo Activo.
            </h2>
            <p className="text-[#414042] text-xs sm:text-sm lg:text-base leading-relaxed">
              Iniciativas de base tecnológica enfocadas en impacto real, modelos SaaS y soluciones escalables: desde arquitecturas multi-tenant y monorepos desacoplados hasta productos físicos con integración cloud.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#191919] bg-black/5 px-4 py-2 rounded-full self-start lg:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#00DA7B] animate-pulse" />
            <span>3 Proyectos en Construcción (2026)</span>
          </div>
        </div>

        {/* 3 Cards Grid: Mi Alberdi + DocSlot + Chapatita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Mi Alberdi */}
          <article className="rounded-2xl sm:rounded-3xl bg-[#141414] text-white p-6 sm:p-7 border border-white/10 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00DA7B]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00DA7B]/15 transition-all" />

            <div className="space-y-4">
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00DA7B]/10 border border-[#00DA7B]/30 text-[#00DA7B] text-[10px] font-bold tracking-wider uppercase font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00DA7B] animate-pulse" />
                  Iniciativa Regional • Stealth
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#A6A6A6] font-mono">
                  <MapPin className="w-3 h-3 text-[#00DA7B]" />
                  <span>J. B. Alberdi, Tucumán</span>
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-sora text-white flex items-center gap-2">
                  <span>Mi Alberdi</span>
                  <span className="text-lg">🏙️</span>
                </h3>
                <p className="text-xs font-semibold text-[#00DA7B] mt-0.5">
                  Conectividad Local &amp; Servicios Geodistribuidos
                </p>
              </div>

              <p className="text-xs text-[#D1D6D9] leading-relaxed">
                Ecosistema digital orientado a la conectividad local y servicios geodistribuidos en el sur tucumano. Diseñado bajo una arquitectura monorepo desacoplada con almacenamiento de objetos S3, base de datos relacional y servicios contenerizados para entornos de producción de alta disponibilidad.
              </p>

              {/* Architecture Breakdown Box */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2 text-[11px]">
                <div className="flex items-start gap-2 text-[#D1D6D9]">
                  <Layers className="w-3.5 h-3.5 text-[#3DD6F5] mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Frontend:</strong> Next.js (App Router), Tailwind CSS v4, Clean Architecture.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-[#D1D6D9]">
                  <Server className="w-3.5 h-3.5 text-[#DDFF46] mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Backend:</strong> Node.js, Express, Prisma ORM, Clean Architecture (<code className="text-[#3DD6F5]">apps/api</code>).
                  </span>
                </div>
                <div className="flex items-start gap-2 text-[#D1D6D9]">
                  <Database className="w-3.5 h-3.5 text-[#00DA7B] mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Infra Docker:</strong> PostgreSQL, MinIO (S3) y Backups automáticos 24/7 por Cron.
                  </span>
                </div>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">Next.js 16</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">TypeScript</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">Prisma / Postgres</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">MinIO S3</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">Docker Compose</span>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
              <a
                href="https://github.com/emilianogasco1999/mi-alberdi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00DA7B] text-[#0C0C0C] font-bold text-xs hover:brightness-105 active:scale-95 transition-all shadow-md"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Monorepo GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <span className="text-[10px] text-[#A6A6A6] font-mono">
                ● Dev &amp; Prod Standalone
              </span>
            </div>
          </article>

          {/* Card 2: DocSlot */}
          <article className="rounded-2xl sm:rounded-3xl bg-[#141414] text-white p-6 sm:p-7 border border-white/10 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#3DD6F5]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3DD6F5]/15 transition-all" />

            <div className="space-y-4">
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#3DD6F5]/10 border border-[#3DD6F5]/30 text-[#3DD6F5] text-[10px] font-bold tracking-wider uppercase font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3DD6F5] animate-pulse" />
                  SaaS Health-Tech • Multi-Tenant
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#00DA7B] font-mono">
                  <Activity className="w-3 h-3" />
                  <span>En Desarrollo</span>
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-sora text-white flex items-center gap-2">
                  <span>DocSlot</span>
                  <span className="text-lg">🏥</span>
                </h3>
                <p className="text-xs font-semibold text-[#3DD6F5] mt-0.5">
                  Gestión Inteligente de Turnos Médicos y Clínicas
                </p>
              </div>

              <p className="text-xs text-[#D1D6D9] leading-relaxed">
                Solución SaaS en la nube diseñada para digitalizar la disponibilidad, reserva y administración de citas médicas en tiempo real para clínicas, consultorios y especialistas de la salud. Reduce el ausentismo y centraliza la atención.
              </p>

              {/* Architecture & Roles Breakdown Box */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2 text-[11px]">
                <div className="flex items-start gap-2 text-[#D1D6D9]">
                  <Layers className="w-3.5 h-3.5 text-[#3DD6F5] mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Frontend:</strong> React, Tailwind CSS, Zustand, TanStack Query y Axios.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-[#D1D6D9]">
                  <Server className="w-3.5 h-3.5 text-[#DDFF46] mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Backend &amp; DB:</strong> Node.js, Express, PostgreSQL / Prisma y autenticación JWT.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-[#D1D6D9]">
                  <Users className="w-3.5 h-3.5 text-[#EE5DAC] mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Roles (RBAC):</strong> Administrador de clínica, Profesional y Paciente final.
                  </span>
                </div>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">React</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">Zustand</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">TanStack Query</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">PostgreSQL</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">Multi-Tenant</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">JWT Auth</span>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#F8F8F8] font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#3DD6F5]" />
                <span>Turnos en Tiempo Real</span>
              </div>

              <span className="text-[10px] text-[#A6A6A6] font-mono">
                ● Modelo SaaS por Suscripción
              </span>
            </div>
          </article>

          {/* Card 3: Chapatita */}
          <article id="chapatita" className="rounded-2xl sm:rounded-3xl bg-[#141414] text-white p-6 sm:p-7 border border-white/10 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#DDFF46]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#DDFF46]/15 transition-all" />

            <div className="space-y-4">
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DDFF46]/10 border border-[#DDFF46]/30 text-[#DDFF46] text-[10px] font-bold tracking-wider uppercase font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DDFF46] animate-pulse" />
                  Startup • Producto Físico + Cloud
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#00DA7B] font-semibold">
                  <Radio className="w-3 h-3" />
                  <span>Beta Activa</span>
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-sora text-white flex items-center gap-2">
                  <span>Chapatita</span>
                  <span className="text-lg">🐾</span>
                </h3>
                <p className="text-xs font-semibold text-[#DDFF46] mt-0.5">
                  Identidad Digital para Mascotas (DNI + QR + Geo)
                </p>
              </div>

              <p className="text-xs text-[#D1D6D9] leading-relaxed">
                Ecosistema que combina accesorios físicos y software cloud: collares inteligentes sublimados vinculados a un código QR único con ficha médica, datos de contacto del dueño y mapa interactivo con Leaflet para rescate rápido en caso de extravío.
              </p>

              {/* Image Preview Container */}
              <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-black/50 border border-white/10">
                <Image
                  src="/projects/chapatita.webp"
                  alt="Chapatita DNI Mascotas"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">React</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">Firebase Auth</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">Leaflet Maps</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">Dynamic QR</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#D1D6D9]">Sublimación</span>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#F8F8F8] font-mono">
                <QrCode className="w-3.5 h-3.5 text-[#DDFF46]" />
                <span>Collares QR + Cloud</span>
              </div>

              <span className="text-[10px] text-[#A6A6A6] font-mono">
                ● Hardware &amp; Web
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

// Backwards compatibility alias
export const ChapatitaCaseStudy = InDevelopmentSection;
