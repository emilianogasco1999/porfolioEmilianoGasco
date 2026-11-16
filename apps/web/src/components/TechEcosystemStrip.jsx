"use client";

import { LogosReact } from "@/assets/img/svg/ReactJsxLogo";
import { LogosNextjs } from "@/assets/img/svg/Nextjs";
import { LogosDocker } from "@/assets/img/svg/Docker";
import { LogosNodejsIcon } from "@/assets/img/svg/NodeJs";
import { LineiconsExpressjs } from "@/assets/img/svg/ExpressjsIcon";
import { LogosPostgresql } from "@/assets/img/svg/Postgresql";
import { LogosMongodb } from "@/assets/img/svg/MongoDb";
import { LogosTypescript } from "@/assets/img/svg/Typescript";
import { LogosJavascript } from "@/assets/img/svg/Javascript";
import { LogosTailwindcssIcon } from "@/assets/img/svg/TailwindcssIcon";
import { LogosLinux } from "@/assets/img/svg/Linux";
import { LogosFigma } from "@/assets/img/svg/Figma";
import { LogosPenpot } from "@/assets/img/svg/Penpot";
import { LogosPrisma, LogosNestjs } from "@/assets/img/svg/PrismaAndNest";
import { LogosGithubIcon } from "@/assets/img/svg/GithubIcon";
import { LogosFirebaseIcon } from "@/assets/img/svg/Firebase";
import { LogosPostmanIcon } from "@/assets/img/svg/Postman";
import { LogosBootstrap } from "@/assets/img/svg/Bootsrtap";
import { LogosJira } from "@/assets/img/svg/Jira";
import { LogosLinearIcon } from "@/assets/img/svg/LinearIcon";

const technologies = [
  { name: "Docker", role: "Containers & DevOps", icon: LogosDocker },
  { name: "React 19", role: "Frontend UI", icon: LogosReact },
  { name: "Next.js 16", role: "Full Stack SSR", icon: LogosNextjs },
  { name: "Node.js", role: "Runtime Backend", icon: LogosNodejsIcon },
  { name: "NestJS", role: "Enterprise Architecture", icon: LogosNestjs },
  { name: "PostgreSQL", role: "Relational Database", icon: LogosPostgresql },
  { name: "Prisma ORM", role: "Type-Safe ORM", icon: LogosPrisma },
  { name: "MongoDB", role: "NoSQL Database", icon: LogosMongodb },
  { name: "TypeScript", role: "Type Safety", icon: LogosTypescript },
  { name: "Tailwind CSS v4", role: "Design Tokens", icon: LogosTailwindcssIcon },
  { name: "Linux", role: "Servers & OS", icon: LogosLinux },
  { name: "Express.js", role: "REST APIs", icon: LineiconsExpressjs },
  { name: "Penpot", role: "Open Source UX/UI", icon: LogosPenpot },
  { name: "Figma", role: "Design System", icon: LogosFigma },
  { name: "JavaScript", role: "Core Language", icon: LogosJavascript },
  { name: "GitHub", role: "Git & CI/CD", icon: LogosGithubIcon },
  { name: "Firebase", role: "Cloud Services", icon: LogosFirebaseIcon },
  { name: "Postman", role: "API Testing", icon: LogosPostmanIcon },
  { name: "Bootstrap", role: "Responsive UI", icon: LogosBootstrap },
  { name: "Jira", role: "Agile & Scrum", icon: LogosJira },
  { name: "Linear", role: "Issue Tracking", icon: LogosLinearIcon },
];

export const TechEcosystemStrip = () => {
  return (
    <section className="relative w-full py-10 bg-[#0C0C0C] border-y border-white/10 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1416px] mx-auto px-4 sm:px-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DDFF46] animate-pulse" />
          <span className="text-xs font-bold text-[#DDFF46] tracking-wider uppercase font-inter">
            Ecosistema Tecnológico &bull; Stack en Producción
          </span>
        </div>
        <p className="text-xs text-[#939598]">
          Frontend, Backend, Bases de Datos, DevOps, Sistemas y Diseño
        </p>
      </div>

      {/* Edge Fading Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10" />

      {/* Infinite Marquee Track */}
      <div className="flex select-none">
        <div className="animate-marquee flex items-center gap-4 py-2">
          {/* First sequence */}
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={`tech-1-${idx}`}
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#191919] border border-white/5 hover:border-white/20 transition-all shadow-md shrink-0 cursor-default hover:bg-[#212121]"
              >
                <div className="w-7 h-7 flex items-center justify-center shrink-0">
                  <Icon width="28" height="28" className="w-7 h-7 object-contain" />
                </div>
                <div className="text-left">
                  <div className="font-sora font-bold text-sm text-[#F8F8F8] tracking-tight group-hover:text-[#DDFF46] transition-colors whitespace-nowrap">
                    {tech.name}
                  </div>
                  <div className="text-[11px] text-[#939598] font-inter whitespace-nowrap">
                    {tech.role}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Duplicated sequence for seamless looping */}
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={`tech-2-${idx}`}
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#191919] border border-white/5 hover:border-white/20 transition-all shadow-md shrink-0 cursor-default hover:bg-[#212121]"
              >
                <div className="w-7 h-7 flex items-center justify-center shrink-0">
                  <Icon width="28" height="28" className="w-7 h-7 object-contain" />
                </div>
                <div className="text-left">
                  <div className="font-sora font-bold text-sm text-[#F8F8F8] tracking-tight group-hover:text-[#DDFF46] transition-colors whitespace-nowrap">
                    {tech.name}
                  </div>
                  <div className="text-[11px] text-[#939598] font-inter whitespace-nowrap">
                    {tech.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
