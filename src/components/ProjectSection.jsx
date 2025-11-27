import { ArrowRight, ArrowUp, ExternalLink, Github, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Generador de Recibos de Venta",
    description:
      "Aplicación web que permite generar recibos de venta de forma rápida y sencilla. Permite generar recibos de venta (no válidos como factura) utilizando los datos de la compañía ya integrados, ofreciendo una forma rápida y práctica de emitir comprobantes para entregar a sus clientes.",
    image: "/projects/sistemaVentas.webp",
    tags: ["React", "Boostrap"],
    demoUrl: "https://reciboventaschrisdei.netlify.app/",
    githubUrl: "https://github.com/emilianogasco1999/reciboVentas",
  },
  {
    id: 2,
    title: "Sitio Web Institucional – IES Concepción",
    description:
      "Desarrollo de una página web informativa para el Instituto de Enseñanza Superior de Concepción. El sitio presenta la oferta académica, datos institucionales del terciario, brindando a estudiantes y docentes un acceso sencillo y organizado a la información relevante.",
    image: "/projects/ies.webp",
    tags: ["React", "Boostrap", "React Router Dom"],
    demoUrl: "https://iesconcepcion.edu.ar/",
    githubUrl: "https://github.com/emilianogasco1999/ies/tree/main",
  },
  {
    id: 3,
    title: "Página Web Interactiva para Cumpleaños",
    description:
      "Desarrollo de una página web one-page personalizada para un evento de cumpleaños. Incluye galería de fotos, mensajes dedicados cargados por el cliente, animaciones, música integrada y diseño dinámico pensado para ofrecer una experiencia emotiva y celebratoria. Por motivos de privacidad del cliente, el contenido completo no se muestra públicamente.",
    image: "/projects/anto.webp",
    tags: ["React", "Boostrap"],
    // demoUrl: "#",
    // githubUrl: "#",
  },
];
const projectsInDeveloper = [
  {
    id: 1,
    title: "Chapatita – Identidad Digital para Mascotas",
    description:
      "Aplicación web diseñada para crear una “DNI digital” para mascotas. Permite a los usuarios registrarse mediante correo electrónico o autenticación con Firebase y vincular sus mascotas a un código QR único. El producto incluye un dije con QR que, al ser escaneado, muestra la información registrada de la mascota. Para activarlo, el usuario debe crear una cuenta en la aplicacion y completar los datos del animal, facilitando su identificación en caso de extravío.",
    image: "/projects/chapatita.webp",
    tags: [
      "React",
      "React Hook Form",
      "React Router Dom",
      "Boostrap",
      "Aos",
      "Axios",
      "Firebase",
      "Qrcode",
      "Leaflet",
      "Swiper",
    ],
    demoUrl: "",
    githubUrl: "",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Mis <span className="text-primary">Proyectos</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-x-2xl mx-auto">
          Aquí se muestran algunos de mis proyectos recientes. Cada proyecto fue
          elaborado cuidadosamente con atención al detalle, el rendimiento y la
          experiencia del usuario.
        </p>

        <div className="grid grid-cols-1 md:grid-col2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, key) => (
            <div
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              key={key}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        <GithubIcon size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          {" "}
          En <span className="text-primary">Desarrollo</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-x-2xl mx-auto">
          Aquí presento algunos de los proyectos en los que estoy trabajando
          actualmente. Cada uno está siendo desarrollado con dedicación,
          enfocándome en la funcionalidad, la experiencia del usuario y la
          implementación de buenas prácticas.
        </p>

        <div className="grid grid-cols-1 md:grid-col2 lg:grid-cols-3 gap-8 mb-4">
          {projectsInDeveloper.map((project, key) => (
            <div
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              key={key}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        <GithubIcon size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/emilianogasco1999/" className="cosmic-button w-fit flex items-center  mx-auto  gap-2" target="_blank">
            {" "}
            Ver mi GitHub <ArrowRight size={16} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
