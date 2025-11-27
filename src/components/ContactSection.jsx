import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);

    setTimeout(() => {
      toast({
        title: "mensaje enviado!",
        description:
          "Gracias por enviar el mensaje, Me pondré en contacto contigo pronto.",
      });
      setIsSubmit(false);
    }, 1500);
  };
  return (
    <section className="py-24 px-4 realtive bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Ponte En <span className="text-primary">Contacto</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-x-2xl mx-auto">
          ¿Tienes un proyecto en mente o quieres colaborar? No dudes en
          contactarme. Siempre estoy abierto a hablar sobre nuevas
          oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Informacion de Contacto
            </h3>
            <div className="space-y-6 ">
              <div className="flex space-x-4 text-start">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div className="">
                  <h4 className="font-medium ">Email </h4>
                  <a
                    href="mailto:emilianogasco99@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 "
                  >
                    emilianogasco99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex  space-x-4 text-start ">
                <div className="p-3 rounded-full bg-primary/10 flex  items-center  ">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Celular </h4>
                  <a
                    href="https://wa.me/5493865530769"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 "
                    target="_blank"
                  >
                    +54 9 3865-530769
                  </a>
                </div>
              </div>

              <div className="flex  space-x-4 text-start ">
                <div className="p-3 rounded-full bg-primary/10 flex  items-center  ">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Dirección </h4>
                  <a
                    href="https://share.google/nCXPJubbcbfBdUuTd"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 "
                    target="_blank"
                  >
                    Pasteur 537, Juan B. Alberdi, Tucumán
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 ">Contactame</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/emiliano-augusto-gasco/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/gascoemiliano/"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.facebook.com/EmilianoAGasco/"
                  target="_blank"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs ">
            <h3 className="text-2xl font-semibold mb-6"> Enviar Mensaje</h3>
            <form action="" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Tu Nombre
                </label>
                <input
                  type="text "
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary "
                  placeholder="Emiliano Gasco..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Tu Email
                </label>
                <input
                  type="email "
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary "
                  placeholder="Emiliano@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="mesaage"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Tu Mensaje
                </label>
                <textarea
                  id="mesaage"
                  name="mesaage"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary resize-none "
                  placeholder="Hola, me gustaría saber sobre"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmit}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  ""
                )}
              >
                {isSubmit ? "Enviando..." : "Enviar Mensaje"}

                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
