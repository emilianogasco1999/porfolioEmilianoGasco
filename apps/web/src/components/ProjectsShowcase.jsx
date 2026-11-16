"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Github, Lock, Eye, Server, Layers, Cpu } from "lucide-react";
import Image from "next/image";

const projectsData = [
  {
    id: "01",
    tabName: "01 • Generador de Recibos Pepita",
    mobileTabName: "01 • Recibos Pepita",
    title: "Generador de Recibos Pepita",
    tags: "Next.js 16 • TypeScript • Tailwind • React Hook Form",
    badgeColor: "#DDFF46",
    badgeTextColor: "#191919",
    domain: "recibo-pepita.vercel.app",
    demoUrl: "https://recibo-pepita.vercel.app/",
    githubUrl: "https://github.com/emilianogasco1999/recibo-pepita",
    githubDisplay: "github.com/emilianogasco1999/recibo-pepita",
    description:
      "Aplicación web liviana orientada a la generación rápida, vista previa interactiva y exportación automática a PDF / impresión de recibos de alquiler y reserva de vestidos para PEPITA.",
    metricLabel: "Tiempo de emisión y PDF",
    metricValue: "< 30 seg",
    metricColor: "#DDFF46",
    image: "/projects/pepita.webp",
  },
  {
    id: "02",
    tabName: "02 • Control AgroTech – Finca Don Osvaldo SAS",
    mobileTabName: "02 • Finca Don Osvaldo",
    title: "Sistema de Control para Finca Don Osvaldo SAS",
    tags: "Next.js 16 • TypeScript • Tailwind • Docker • Node.js / Express",
    badgeColor: "#3DD6F5",
    badgeTextColor: "#0C0C0C",
    domain: "fincadonosvaldosas.local (Sistema Privado)",
    demoUrl: null,
    githubUrl: null,
    githubDisplay: "Repositorio Privado (Cliente)",
    description:
      "Sistema integral para la administración, trazabilidad y gestión comercial de producción, cosecha, tránsito (DTVE), liquidación y facturación electrónica de papa en el sector agroindustrial.",
    techDetails: {
      frontend: "Next.js 16 • TypeScript • Tailwind CSS • Dashboard de Gestión y Liquidación",
      backend: "Node.js (TypeScript) • Express • API REST • Módulo DTVE & Facturación Electrónica",
      infra: "Docker & Docker Compose • Despliegue en Servidor Local y Red Corporativa",
    },
    metricLabel: "Arquitectura & Sockets",
    metricValue: "Clean Arch + Real-time",
    metricColor: "#3DD6F5", 
    image: "/projects/fincaSAS.webp",
  },
  {
    id: "03",
    tabName: "03 • Virtu-OS (Gestión Escolar)",
    mobileTabName: "03 • Virtu-OS",
    title: "Virtu-OS • Plataforma de Gestión Escolar e Institucional",
    tags: "Next.js 16 • Node.js • Prisma / PostgreSQL • Socket.io • Docker",
    badgeColor: "#7084FF",
    badgeTextColor: "#FFFFFF",
    domain: "virtu-os-demo.vercel.app",
    demoUrl: "https://virtu-os-demo.vercel.app/",
    githubUrl: null,
    githubDisplay: "Repositorio Privado (Cliente)",
    description:
      "Plataforma integral para la administración y gestión académica escolar. Estructurada bajo una arquitectura modular desacoplada y orientada al dominio (DDD), con comunicaciones bidireccionales en tiempo real y despliegue contenerizado optimizado para servidores institucionales dedicados.",
    techDetails: {
      frontend: "Next.js 16 (React 19) • TypeScript • Tailwind v4 • Shadcn UI • Zustand • Axios",
      backend: "Node.js (TypeScript) • Express • Prisma ORM • PostgreSQL • Socket.io • env-var",
      infra: "Docker & Docker Compose con asignación optimizada de memoria/CPU en servidor local",
    },
    metricLabel: "Arquitectura & Sockets",
    metricValue: "Clean Arch + Real-time",
    metricColor: "#7084FF",
    image: "/projects/virtuOS.webp",
  },
];

export const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Native IntersectionObserver for automatic scroll spy
  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-project-index"));
          if (!isNaN(index)) {
            setActiveTab(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.15,
    });

    const cards = document.querySelectorAll("[data-project-index]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const scrollToProject = (id) => {
    const el = document.getElementById(`project-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentProject = projectsData[activeTab] || projectsData[0];

  return (
    <section id="projects" className="py-12 sm:py-20 px-3 sm:px-6">
      <div className="max-w-[1416px] mx-auto rounded-2xl sm:rounded-3xl bg-[#F8F8F8] p-5 sm:p-8 lg:p-14 text-[#191919] shadow-2xl">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-[#191919]/10">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191919] text-[#DDFF46] text-[11px] font-bold tracking-wider">
              <span>✦ PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-sora text-[#191919] tracking-tight">
              Mis Proyectos Destacados.
            </h2>
            <p className="text-[#414042] text-xs sm:text-sm lg:text-base leading-relaxed">
              Soluciones de software construidas con Clean Architecture, rendimiento de producción,
              interfaces intuitivas y despliegue contenerizado.
            </p>
          </div>

          <a
            href="https://github.com/emilianogasco1999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#191919] text-[#F8F8F8] text-xs sm:text-sm font-semibold hover:bg-[#212121] transition-all self-stretch sm:self-start lg:self-auto shrink-0 shadow-md active:scale-95"
          >
            <Github className="w-4 h-4 text-[#DDFF46]" />
            <span>Ver mi GitHub (@emilianogasco1999)</span>
          </a>
        </div>

        {/* Mobile Quick-Navigation Chips (Visible only on < lg) */}
        <div className="lg:hidden pt-6 pb-2">
          <div className="flex items-center justify-between text-xs font-bold tracking-wider text-[#414042] uppercase pb-2.5 px-1">
            <span>Explorar Proyectos</span>
            <span className="font-mono text-[#191919]">
              0{activeTab + 1} / 0{projectsData.length}
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x -mx-1 px-1">
            {projectsData.map((project, idx) => {
              const isSelected = idx === activeTab;
              return (
                <button
                  key={`mobile-${project.id}`}
                  type="button"
                  onClick={() => scrollToProject(project.id)}
                  className={`snap-start shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-all border ${
                    isSelected
                      ? "bg-[#191919] text-[#DDFF46] border-[#191919] shadow-md scale-[1.02]"
                      : "bg-white text-[#191919] border-[#191919]/15 hover:bg-white/90"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? "bg-[#DDFF46]" : "bg-black/30"
                    }`}
                  />
                  <span>{project.mobileTabName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 lg:pt-12 items-start">
          {/* Left Column: Sticky Navigator (Desktop only) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-6">
            <div className="flex items-center justify-between text-xs font-bold tracking-wider text-[#414042] uppercase px-1">
              <span>Proyectos en Vitrina</span>
              <span className="font-mono text-[#191919]">
                0{activeTab + 1} / 0{projectsData.length}
              </span>
            </div>

            {/* Project List Buttons */}
            <div className="flex flex-col gap-3">
              {projectsData.map((project, idx) => {
                const isSelected = idx === activeTab;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => scrollToProject(project.id)}
                    className={`group text-left p-4 rounded-2xl transition-all border flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#191919] text-[#F8F8F8] border-[#DDFF46]/60 shadow-xl scale-[1.01]"
                        : "bg-white/80 hover:bg-white text-[#191919] border-[#191919]/10 hover:border-[#191919]/25 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3 pr-2">
                      <span
                        className={`w-2 h-2 rounded-full transition-all ${
                          isSelected
                            ? "bg-[#DDFF46] scale-125"
                            : "bg-black/20 group-hover:bg-black/40"
                        }`}
                      />
                      <span className="font-semibold text-xs sm:text-sm tracking-tight">
                        {project.tabName}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#DDFF46] text-[#191919]"
                          : "bg-black/5 text-black/60 group-hover:bg-black/10"
                      }`}
                    >
                      {project.id}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Telemetry Box (Desktop) */}
            <div className="p-5 rounded-2xl bg-[#191919] text-white border border-white/5 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#A6A6A6]">
                  Proyecto Activo
                </span>
                <span
                  className="w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: currentProject.badgeColor }}
                />
              </div>

              <h4 className="text-base font-bold font-sora text-white line-clamp-1">
                {currentProject.title}
              </h4>

              <div className="flex items-center justify-between pt-1 border-t border-white/10 text-xs text-[#D1D6D9]">
                <span>{currentProject.metricLabel}:</span>
                <strong
                  className="font-sora text-sm"
                  style={{ color: currentProject.metricColor }}
                >
                  {currentProject.metricValue}
                </strong>
              </div>

              <p className="text-[11px] text-[#A6A6A6] pt-1 leading-relaxed">
                ↓ Scrolleá hacia abajo para recorrer cada proyecto en detalle.
              </p>
            </div>
          </div>

          {/* Right Column: Scrollable Cards Stack */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-14 lg:gap-16">
            {projectsData.map((project, idx) => {
              return (
                <article
                  key={project.id}
                  id={`project-${project.id}`}
                  data-project-index={idx}
                  className="scroll-mt-24 sm:scroll-mt-28 rounded-2xl sm:rounded-3xl bg-[#191919] text-white border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between transition-all group"
                >
                  {/* Browser Window Header */}
                  <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-[#141414] border-b border-white/5 flex items-center justify-between gap-2 sm:gap-3">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F]/80" />
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/40 border border-white/5 text-[10px] sm:text-[11px] font-mono text-[#A6A6A6] min-w-0">
                      <Lock className="w-3 h-3 text-[#00DA7B] shrink-0" />
                      <span className="truncate max-w-[170px] sm:max-w-[320px]">
                        {project.domain}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-[#DDFF46] shrink-0">
                      #{project.id}
                    </span>
                  </div>

                  {/* Image Preview Container */}
                  {project.image && (
                    <div className="relative w-full aspect-video sm:h-80 overflow-hidden bg-[#0C0C0C] border-b border-white/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        priority={idx === 0}
                      />
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    {/* Header: ID + Title + Tags */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span
                          className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold"
                          style={{
                            backgroundColor: `${project.badgeColor}20`,
                            color: project.badgeColor,
                            border: `1px solid ${project.badgeColor}40`,
                          }}
                        >
                          {project.tags}
                        </span>
                        <span className="text-[11px] sm:text-xs text-[#939598] font-mono hidden sm:inline">
                          {project.domain}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-sora text-[#F8F8F8] leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm lg:text-base text-[#D1D6D9] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architectural Breakdown (If techDetails provided) */}
                    {project.techDetails && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs">
                        <div className="flex items-start gap-2 text-[#D1D6D9]">
                          <Layers className="w-3.5 h-3.5 text-[#DDFF46] mt-0.5 shrink-0" />
                          <span>
                            <strong className="text-white">Frontend:</strong> {project.techDetails.frontend}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-[#D1D6D9]">
                          <Server className="w-3.5 h-3.5 text-[#3DD6F5] mt-0.5 shrink-0" />
                          <span>
                            <strong className="text-white">Backend:</strong> {project.techDetails.backend}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-[#D1D6D9]">
                          <Cpu className="w-3.5 h-3.5 text-[#00DA7B] mt-0.5 shrink-0" />
                          <span>
                            <strong className="text-white">Infra:</strong> {project.techDetails.infra}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Metric Feature Box */}
                    <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0C0C0C] border border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4">
                      <div>
                        <span className="text-[11px] sm:text-xs text-[#939598] block">
                          {project.metricLabel}
                        </span>
                        <div
                          className="text-xl sm:text-2xl lg:text-3xl font-bold font-sora mt-0.5"
                          style={{ color: currentProject.id === project.id ? project.metricColor : "#FFFFFF" }}
                        >
                          {project.metricValue}
                        </div>
                      </div>
                      <div className="sm:text-right">
                        <span className="text-[10px] sm:text-[11px] text-[#00DA7B] font-mono block truncate">
                          ● {project.githubDisplay}
                        </span>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#DDFF46] text-[#191919] font-bold text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all shadow-md w-full sm:w-auto"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Ver Proyecto Live</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="px-4 py-2.5 rounded-full bg-[#212121] text-[#939598] text-xs font-semibold text-center w-full sm:w-auto">
                          Demo Privada (Acceso Restringido)
                        </span>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#212121] hover:bg-[#2E2E2E] text-[#F8F8F8] font-semibold text-xs sm:text-sm transition-all w-full sm:w-auto"
                        >
                          <Github className="w-4 h-4 text-[#DDFF46]" />
                          <span>Código en GitHub</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#939598]" />
                        </a>
                      ) : (
                        <span className="text-[11px] sm:text-xs text-[#939598] text-center sm:text-left py-1">
                          ● Repositorio Privado del Cliente
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
