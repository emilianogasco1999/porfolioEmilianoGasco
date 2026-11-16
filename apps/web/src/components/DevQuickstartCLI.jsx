"use client";

import { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const DevQuickstartCLI = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const command =
    "git clone https://github.com/emilianogasco1999/porfolioEmilianoGasco.git && pnpm install && pnpm dev";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    toast({
      title: "¡Comando copiado!",
      description: "Pegalo en tu terminal para clonar e iniciar el monorepo en local.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-[1416px] mx-auto rounded-3xl bg-[#0C0C0C] p-8 sm:p-14 border border-white/10 shadow-2xl space-y-6">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold font-sora text-[#F8F8F8] tracking-tight">
            Copy, paste, collaborate.
          </h2>
          <p className="text-sm sm:text-base text-[#D1D6D9] mt-2 max-w-2xl">
            Cloná mi repositorio del monorepo o agendá una charla técnica directamente desde tu terminal o
            por WhatsApp/Email.
          </p>
        </div>

        {/* CLI Terminal Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#191919] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto">
            <span className="text-[#DDFF46] font-bold text-lg">&gt;_</span>
            <span className="text-xs sm:text-sm text-[#F8F8F8] whitespace-nowrap select-all">
              {command}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#212121] hover:bg-[#2E2E2E] text-white text-xs sm:text-sm font-semibold transition-all border border-white/10 shrink-0 self-end md:self-auto"
          >
            {copied ? <Check className="w-4 h-4 text-[#00DA7B]" /> : <Copy className="w-4 h-4 text-[#DDFF46]" />}
            <span>{copied ? "¡Copiado!" : "Copiar comando"}</span>
          </button>
        </div>

        <p className="text-xs text-[#939598]">
          Stack del Monorepo: pnpm workspaces • Next.js 16 • React 19 • Tailwind CSS v4 • Radix UI • Lucide Icons
        </p>
      </div>
    </section>
  );
};
