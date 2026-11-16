export const AnnouncementBar = () => {
  return (
    <aside aria-label="Announcement" className="w-full bg-[#0C0C0C] border-b border-white/8 py-2.5 px-4 text-xs">
      <div className="max-w-[1416px] mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#212121] text-[#00DA7B] font-bold text-[11px] tracking-wide border border-[#00DA7B]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00DA7B] animate-pulse" />
          OPEN TO WORK
        </span>
        <span className="text-[#D1D6D9] font-normal">
          Full Stack Developer • Téc. Sup. en Programación &amp; Téc. Sup. en Computación y Redes —
        </span>
        <a
          href="/CV_Emiliano_Augusto_Gasco.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7084FF] hover:text-[#DDFF46] font-semibold transition-colors underline-offset-4 hover:underline"
        >
          Descargar CV →
        </a>
      </div>
    </aside>
  );
};
