import { ExperienceData } from "@type/types";
import { TECHNOLOGIES } from "./technologies";

export const EXPERIENCIES: ExperienceData[] = [
    {
        date: "November 2024 - Present",
        title: "Freelancer Fullstack Developer on You Send We Print",
        description: "As a freelance developer, I design and develop new sections and controllers tailored to the specific needs of my clients. I work with a PHP-based system that utilizes a custom framework and an MVC architecture, enabling me to deliver efficient, scalable solutions aligned with the project's objectives.",
        technologies: [TECHNOLOGIES.PHP]
    },
    {
        date: "March 2023 - October 2024",
        title: "Freelancer Fullstack Developer on Gloria Montoya Library",
        description: "One of my last works is based on the development of a website that allows to visualize the works and books of a museum, you can also consult information about the artists and authors, the website will evolve over time.",
        technologies: [TECHNOLOGIES.PHP, TECHNOLOGIES.Laravel, TECHNOLOGIES.Livewire, TECHNOLOGIES.MySQL]
    },
    {
        date: "April 2023 - October 2024",
        title: "Fullstack Developer in Public Prosecutor's Office",
        description: "In this internship I was in charge of developing new functionalities, defining interfaces and generic functional components, with Mui Component Library + JsonForms + React js, which were then incorporated into the main system which communicates with different microservices, mainly using Graphql with a Nest Js server in which we additionally configured a login service with Keycloak and a service to store files with MinioJS. I also helped to develop an application that will serve to streamline the taking of reports of each person who comes to each police station in Entre Rios.",
        technologies: [TECHNOLOGIES.Typescript, TECHNOLOGIES.MUI, TECHNOLOGIES.React, TECHNOLOGIES.Next, TECHNOLOGIES.Nest, TECHNOLOGIES.MongoDb, TECHNOLOGIES.Graphql]
    },
    {
        date: "March 2023 - Present",
        title: "Fullstack Developer on Kinefitness",
        description: "I am developing a multi-user web system with client/server architecture using Laravel, this is the final project that I have to present in order to graduate from my career.",
        technologies: [TECHNOLOGIES.PHP, TECHNOLOGIES.Laravel, TECHNOLOGIES.Livewire, TECHNOLOGIES.MySQL]
    }
];