"use client";

import { useState } from "react";
import { Download, ArrowRight, Copy, Check, MapPin, GraduationCap, Layers, Server, Database, Container } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const HeroSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("emilianogasco99@gmail.com");
    setCopied(true);
    toast({
      title: "¡Email copiado!",
      description: "emilianogasco99@gmail.com guardado en el portapapeles.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-10 pb-20 px-4 sm:px-6">
      <div className="max-w-[1416px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (Hero Content) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#212121] border border-[#7084FF]/30 text-[#7084FF] text-[11px] font-bold tracking-wider">
            <span>✦</span>
            <span>FULL STACK DEVELOPER • CLEAN ARCHITECTURE &amp; DDD</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl xl:text-[72px] font-bold font-sora tracking-tight leading-[1.08] text-[#F8F8F8]">
            Hola, soy <br />
            <span className="text-[#F8F8F8]">Emiliano Gasco.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-semibold font-sora text-[#DDFF46] leading-snug">
            Interfaces sólidas, arquitecturas escalables y control total.
          </p>

          {/* Bio text */}
          <p className="text-base sm:text-lg text-[#D1D6D9] leading-relaxed max-w-2xl">
            Desarrollador Full Stack con doble titulación técnica:{" "}
            <strong className="text-white font-semibold">Técnico Superior en Programación</strong> y{" "}
            <strong className="text-white font-semibold">Técnico Superior en Computación y Redes</strong>.
            Especializado en el diseño e implementación de arquitecturas escalables (Clean Architecture, DDD)
            y desarrollo end-to-end con Next.js, React 19, Node.js, Express, NestJS, PostgreSQL y Docker.
          </p>

          {/* Email quick copy */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="flex-1 flex items-center justify-between px-4 py-3 rounded-xl bg-[#191919] border border-white/10 text-sm">
              <span className="text-[#D1D6D9] font-mono select-all text-xs sm:text-sm truncate">
                emilianogasco99@gmail.com
              </span>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-2 text-xs font-semibold text-[#DDFF46] hover:text-white flex items-center gap-1 transition-colors"
                title="Copiar email"
              >
                {copied ? <Check className="w-4 h-4 text-[#00DA7B]" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? "Copiado" : "Copiar"}</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#DDFF46] text-[#191919] font-bold text-sm sm:text-base hover:brightness-105 active:scale-95 transition-all shadow-lg"
            >
              <span>Ver proyectos</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/CV_Emiliano_Augusto_Gasco.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#191919] hover:bg-[#212121] border border-[#414042] text-[#F8F8F8] font-semibold text-sm sm:text-base active:scale-95 transition-all"
            >
              <Download className="w-4 h-4 text-[#DDFF46]" />
              <span>Descargar CV.pdf</span>
            </a>
          </div>

          {/* Location & Academic Badges */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3 text-xs text-[#939598]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#DDFF46] shrink-0" />
              <span>Salta / Tucumán, Argentina</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-[#D1D6D9]">
              <GraduationCap className="w-4 h-4 text-[#7084FF] shrink-0" />
              <span>Téc. Sup. en Programación &amp; Téc. Sup. en Computación y Redes</span>
            </span>
          </div>
        </div>

        {/* Right Column (Technical Stack & Capabilities Matrix — No Percentages) */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0C0C] border border-white/10 shadow-2xl space-y-6">
            {/* Header Telemetry */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold font-inter text-[#F8F8F8] flex items-center gap-2">
                  <span>Stack Tecnológico &amp; Arquitectura</span>
                </h2>
                <p className="text-xs text-[#939598] mt-0.5">
                  Clean Architecture • Domain-Driven Design (DDD) • Monorepo
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#212121] text-[#00DA7B] text-[10px] font-bold border border-[#00DA7B]/20 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00DA7B] animate-pulse" />
                PRODUCTION READY
              </span>
            </div>

            {/* Titulaciones Académicas Destacadas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#191919] border border-white/5 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#DDFF46] shrink-0" />
                <div>
                  <div className="text-[11px] text-[#939598]">Título Profesional</div>
                  <div className="text-xs font-bold text-white leading-tight">
                    Téc. Superior en Programación
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#191919] border border-white/5 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#3DD6F5] shrink-0" />
                <div>
                  <div className="text-[11px] text-[#939598]">Título Graduado</div>
                  <div className="text-xs font-bold text-white leading-tight">
                    Téc. Superior en Computación y Redes
                  </div>
                </div>
              </div>
            </div>

            {/* Categorized Stack Matrix */}
            <div className="space-y-4 pt-1">
              {/* Category 1: Frontend */}
              <div className="p-3.5 rounded-xl bg-[#191919] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#F8F8F8] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#DDFF46]" />
                    Frontend &amp; UI Engineering
                  </span>
                  <span className="text-[11px] text-[#DDFF46] font-mono">React 19 &bull; Next.js 16</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Zustand", "TanStack Query", "Shadcn UI", "Bootstrap"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-[#212121] text-[#D1D6D9] text-[11px] font-medium border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2: Backend & APIs */}
              <div className="p-3.5 rounded-xl bg-[#191919] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#F8F8F8] flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#405BFF]" />
                    Backend &amp; Distributed APIs
                  </span>
                  <span className="text-[11px] text-[#405BFF] font-mono">Node.js &bull; NestJS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "Express", "NestJS", "Socket.io (WebSockets)", "JWT", "Bcrypt", "REST APIs", "Swagger"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-[#212121] text-[#D1D6D9] text-[11px] font-medium border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3: Databases & ORM */}
              <div className="p-3.5 rounded-xl bg-[#191919] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#F8F8F8] flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#00DA7B]" />
                    Bases de Datos &amp; Modelado
                  </span>
                  <span className="text-[11px] text-[#00DA7B] font-mono">SQL &bull; NoSQL</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["PostgreSQL", "Prisma ORM", "MongoDB", "MySQL", "Firebase Firestore"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-[#212121] text-[#D1D6D9] text-[11px] font-medium border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 4: DevOps & Architecture */}
              <div className="p-3.5 rounded-xl bg-[#191919] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#F8F8F8] flex items-center gap-2">
                    <Container className="w-4 h-4 text-[#3DD6F5]" />
                    Arquitectura, DevOps &amp; Cloud
                  </span>
                  <span className="text-[11px] text-[#3DD6F5] font-mono">Docker &bull; AWS S3</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Clean Architecture", "DDD", "Docker", "Docker Compose", "AWS S3", "Zod", "Git / GitHub", "Scrum"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-[#212121] text-[#D1D6D9] text-[11px] font-medium border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
