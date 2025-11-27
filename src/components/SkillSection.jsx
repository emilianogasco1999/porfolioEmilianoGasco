import { useState } from "react";
import { cn } from "../lib/utils";

//Front
import { LogosReact } from "../assets/img/svg/ReactJsxLogo";
import { LogosHtml5 } from "../assets/img/svg/Html5";
import { LogosCss3 } from "../assets/img/svg/Css3";
import { LogosJavascript } from "../assets/img/svg/Javascript";
import { LogosTailwindcssIcon } from "../assets/img/svg/TailwindcssIcon";
import { LogosBootstrap } from "../assets/img/svg/Bootsrtap";
import { LogosJquery } from "../assets/img/svg/Jquery";

//back
import { LogosNodejsIcon } from "../assets/img/svg/NodeJs";
import { LineiconsExpressjs } from "../assets/img/svg/ExpressjsIcon";
import { LogosMongodb } from "../assets/img/svg/MongoDb";
import { LogosPostgresql } from "../assets/img/svg/Postgresql";
import { LogosPhp } from "../assets/img/svg/PHP";
import { LogosFirebaseIcon } from "../assets/img/svg/Firebase";

// Tools
import { LogosGithubIcon } from "../assets/img/svg/GithubIcon";
import { LogosFigma } from "../assets/img/svg/Figma";
import { LogosVisualStudioCode } from "../assets/img/svg/VisualStucioCode";
import { LogosJira } from "../assets/img/svg/Jira";
import { LogosLinearIcon } from "../assets/img/svg/LinearIcon";
import { LogosPostmanIcon } from "../assets/img/svg/Postman";

const skills = [
  // Frontend
  { name: "HTML5", icon: <LogosHtml5 width="4rem" />, category: "frontend" },
  { name: "CSS3", icon: <LogosCss3 width="4rem" />, category: "frontend" },
  {
    name: "JavaScript",
    icon: <LogosJavascript width="4rem" />,
    category: "frontend",
  },
  { name: "React JS", icon: <LogosReact width="4rem" />, category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: <LogosTailwindcssIcon width="4rem" />,
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: <LogosBootstrap width="4rem" />,
    category: "frontend",
  },
  { name: "jQuery", icon: <LogosJquery width="8rem" />, category: "frontend" },

  // Backend
  {
    name: "Node.js",
    icon: <LogosNodejsIcon width="4rem" />,
    category: "backend",
  },
  {
    name: "Express",
    icon: <LineiconsExpressjs width="4rem" />,
    category: "backend",
  },
  { name: "MongoDB", icon: <LogosMongodb width="8rem" />, category: "backend" },
  {
    name: "PostgreSQL",
    icon: <LogosPostgresql width="4rem" />,
    category: "backend",
  },
  {
    name: "PHP",
    icon: <LogosPhp width="6rem" />,
    category: "backend",
  },
  {
    name: "Firebase",
    icon: <LogosFirebaseIcon width="4rem" />,
    category: "backend",
  },

  // Tools
  {
    name: "GitHub",
    icon: <LogosGithubIcon width="4rem" />,
    category: "herramientas",
  },
  {
    name: "Figma",
    icon: <LogosFigma width="3rem" />,
    category: "herramientas",
  },
  {
    name: "VS Code",
    icon: <LogosVisualStudioCode width="4rem" />,
    category: "herramientas",
  },
  { name: "Jira", icon: <LogosJira width="4rem"/>, category: "herramientas" },
  { name: "Linear", icon: <LogosLinearIcon width="4rem"/>, category: "herramientas" },
  { name: "Postman", icon: <LogosPostmanIcon width="4rem"/>, category: "herramientas" },
];

const category = ["todas", "frontend", "backend", "herramientas"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("todas");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "todas" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary">Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {category.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {filteredSkills.map((skill, key) => (
            <div
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-center"
              key={key}
            >
              <div className="flex flex-col justify-center mb-5 items-center">
                <div className="flex items-center justify-center h-32 text-9xl">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg mt-4">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
