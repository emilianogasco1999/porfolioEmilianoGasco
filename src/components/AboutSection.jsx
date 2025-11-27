import { Code, Cpu, Download, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mi</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer con base técnica en Sistemas, Redes y
              Programación
            </h3>
            <p className="text-muted-foregound">
              Soy desarrollador Full Stack con formación técnica en sistemas y
              redes. Combino mi experiencia en programación, soporte técnico y
              diseño gráfico para crear soluciones digitales modernas,
              funcionales y pensadas para el usuario.
            </p>
            <p className="text-muted-foregound">
              Tambien soy Técnico en Computación y Redes, y actualmente estoy
              formándome como Técnico en Programación, ampliando mi base en
              desarrollo de software y arquitectura de aplicaciones.
            </p>
            <p className="text-muted-foregound">
              Disfruto transformar ideas en productos reales: desde interfaces
              intuitivas hasta aplicaciones completas construidas con
              tecnologías del ecosistema MERN. También tengo un fuerte enfoque
              visual gracias a mi background en diseño y mi emprendimiento
              creativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Ponte en contacto
              </a>
              <a
                href="/CV-Emilianogasco.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10  transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="flex items-center gap-2 justify-center">
                  Descargar CV <Download size={20} />
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Desarrollo Full Stack
                  </h4>
                  <p className="text-muted-foregound">
                    Creo sitios web responsivos y aplicaciones completas
                    utilizando el stack MERN, enfocándome en rendimiento,
                    escalabilidad y buenas prácticas de desarrollo.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Diseño y Experiencia de Usuario
                  </h4>
                  <p className="text-muted-foregound">
                    Combino diseño gráfico e interfaz para crear experiencias
                    visuales claras, intuitivas y coherentes, aplicando
                    principios de UX/UI en cada proyecto.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Tecnología, Redes y Programación{" "}
                  </h4>
                  <p className="text-muted-foregound">
                    Soy Técnico en Computación y Redes y futuro Técnico en
                    Programación. Tengo una mirada integral para resolver
                    problemas, optimizar equipos y construir soluciones técnicas
                    sólidas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
