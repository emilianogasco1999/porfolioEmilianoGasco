import { ArrowUpRight, Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";

export const ContactCardsSection = () => {
  const cards = [
    {
      pill: "● Email Directo",
      pillColor: "#DDFF46",
      title: "Escribime por correo.",
      value: "emilianogasco99@gmail.com",
      note: "También: emilianogasco@gmail.com",
      action: "Enviar correo ↗",
      href: "mailto:emilianogasco99@gmail.com",
      icon: Mail,
    },
    {
      pill: "● WhatsApp / Celular",
      pillColor: "#00DA7B",
      title: "Mensaje directo.",
      value: "+54 9 3865-530769",
      note: "Respuesta rápida en horario laboral",
      action: "Abrir WhatsApp ↗",
      href: "https://wa.me/5493865530769",
      icon: Phone,
    },
    {
      pill: "● LinkedIn & Red",
      pillColor: "#7084FF",
      title: "Perfil profesional.",
      value: "/in/emiliano-augusto-gasco",
      note: "Conectemos por oportunidades IT",
      action: "Ver LinkedIn ↗",
      href: "https://www.linkedin.com/in/emiliano-augusto-gasco/",
      icon: Linkedin,
    },
    // {
    //   pill: "● Ubicación & GitHub",
    //   pillColor: "#3DD6F5",
    //   title: "Tucumán, Argentina.",
    //   value: "Pasteur 537, J. B. Alberdi",
    //   note: "github.com/emilianogasco1999",
    //   action: "Explorar GitHub ↗",
    //   href: "https://github.com/emilianogasco1999",
    //   icon: MapPin,
    // },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1416px] mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-5xl font-bold font-sora text-[#F8F8F8] tracking-tight">
            Ponte en contacto.
          </h2>
          <p className="text-sm sm:text-base text-[#939598] max-w-xl">
            ¿Tenés un proyecto en mente o buscás sumar un desarrollador Full Stack a tu equipo?
            Hablemos.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-[#191919] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between space-y-6 shadow-xl hover:translate-y-[-3px]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#212121] border"
                      style={{ color: card.pillColor, borderColor: `${card.pillColor}30` }}
                    >
                      {card.pill}
                    </span>
                    <Icon className="w-5 h-5 text-[#939598] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold font-sora text-[#F8F8F8] group-hover:text-white">
                    {card.title}
                  </h3>

                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#D1D6D9] font-mono break-all">
                      {card.value}
                    </p>
                    <p className="text-xs text-[#939598]">{card.note}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-semibold" style={{ color: card.pillColor }}>
                  <span>{card.action}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
