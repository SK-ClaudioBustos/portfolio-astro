import { Project } from "@type/types";
import { TECHNOLOGIES } from "./technologies";

export const getProjects = () => {
  const PROJECTS: Project[] = [
    {
      src: "pokemon_wiki.webp",
      alt: "project pokemon wiki",
      titulo: "Pokemon Wiki",
      git: "https://github.com/SK-ClaudioBustos/pokemon-wiki",
      web: "https://pokemon-wiki-mauve.vercel.app",
      technologies: [
        TECHNOLOGIES.Typescript,
        TECHNOLOGIES.React,
        TECHNOLOGIES.Tanstack_Query,
      ],
      description:
        "Pagina web para consultar informacion de pokemons de la POKE API, trate de lograr la mejor experiencia de usuario optimizando la carga de imagenes y de informacíon.",
    },
    {
      src: "kinefitness.webp",
      alt: "project kinefitness",
      titulo: "Kinefitness",
      git: "https://github.com/SS-Estudio-Informatico/kine",
      web: "#",
      technologies: [
        TECHNOLOGIES.PHP,
        TECHNOLOGIES.Laravel,
        TECHNOLOGIES.Livewire,
        TECHNOLOGIES.Eloquent,
        TECHNOLOGIES.MySQL,
      ],
      description:
        "Se trata de un sistema ABM capaz de administrar los pacientes de un consultorio/gimnasio llamado Kinefitness, oriundo de la localidad de General Ramírez.",
    },
    {
      src: "my_car_business.webp",
      alt: "project my car business",
      titulo: "My Car Business",
      git: "https://github.com/SK-ClaudioBustos/mycar-business-front",
      web: "#",
      technologies: [TECHNOLOGIES.Typescript, TECHNOLOGIES.React],
      description:
        'Este sistema permite administrar autos y diagnosticar su funcionamiento mediante "Issues", el sistema consta de un frontend hecho con React y un backend hecho con Spring Boot.',
    },
    {
      src: "bgm.webp",
      alt: "project Sistema para Biblioteca Gloria Montoya",
      titulo: "Sistema para Biblioteca Gloria Montoya",
      git: "https://github.com/TotiIbarra/bgm",
      web: "#",
      technologies: [
        TECHNOLOGIES.Laravel,
        TECHNOLOGIES.PHP,
        TECHNOLOGIES.Livewire,
        TECHNOLOGIES.Eloquent,
        TECHNOLOGIES.MySQL,
      ],
      description:
        'Proyecto Freelancer para adminstrar los libros, obras, y salones de la Biblioteca Gloria Montoya perteneciente a la ciudad de Paraná.',
    },
    {
      src: "mu_play.webp",
      alt: "project mu play",
      titulo: "Mu Play",
      git: "https://github.com/SK-ClaudioBustos/mu-play",
      web: "https://mu-play.vercel.app",
      technologies: [
        TECHNOLOGIES.Typescript,
        TECHNOLOGIES.React,
        TECHNOLOGIES.Next,
        TECHNOLOGIES.MUI,
      ],
      description:
        "Este proyecto trata de simular ser una pagina web similar a Spotify, Breeze, etc, basicamente es una pagina para escuchar musica.",
    },
    {
      src: "batman_quiz.webp",
      alt: "project batman quiz",
      titulo: "Batman Quiz",
      git: "https://github.com/SK-ClaudioBustos/batman-quiz",
      web: "https://batman-quiz-five.vercel.app",
      technologies: [
        TECHNOLOGIES.Typescript,
        TECHNOLOGIES.React,
        TECHNOLOGIES.Zustand,
      ],
      description:
        "Esta pagina web busca probar cuanto sabes sobre el universo de batman mediante un Quiz Multiple Choice.",
    },
  ];
  return PROJECTS;
};
