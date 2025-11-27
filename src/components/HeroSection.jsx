import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 "
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hola, soy</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Emiliano
            </span>
            <span className="text-gradient ml-2  opacity-0 animate-fade-in-delay-2">
              {" "}
              Gasco
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foregund max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full-Stack Developer especializado en el stack MERN, creando
            interfaces sólidas, escalables y visualmente atractivas.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              ver mi trabajo
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
        {/* <span className="text-sm text-muted-foreground mb-2">Scroll</span> */}
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};
