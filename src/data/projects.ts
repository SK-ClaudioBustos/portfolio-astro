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
            technologies: [TECHNOLOGIES.Typescript , TECHNOLOGIES.React, TECHNOLOGIES.Tanstack_Query]
        },
        {
            src: "mu_play.webp",
            alt: "project mu play",
            titulo: "Mu Play",
            git: "https://github.com/SK-ClaudioBustos/mu-play",
            web: "https://mu-play.vercel.app",
            technologies: [TECHNOLOGIES.Typescript , TECHNOLOGIES.React, TECHNOLOGIES.Next, TECHNOLOGIES.MUI]
        },
        {
            src: "batman_quiz.webp",
            alt: "project batman quiz",
            titulo: "Batman Quiz",
            git: "https://github.com/SK-ClaudioBustos/batman-quiz",
            web: "https://batman-quiz-five.vercel.app",
            technologies: [TECHNOLOGIES.Typescript , TECHNOLOGIES.React, TECHNOLOGIES.Zustand]
        }
    ];
    return PROJECTS;
} 