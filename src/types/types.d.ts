import { Props } from "astro";

type HashWithString = `#${string}`;

interface Technology {
    label: string,
    color: HashWithString
}

export type Technologies = {
    [key: string]: Technology;
};

export interface LinkData {
    elementId: HashWithString
    label: string
}

export interface SkillData {
    label: string
    Icon: ((_props: Props) => any) & ImageMetadata
}

export interface ExperienceData {
    date: string;
    title: string;
    description: string;
    technologies: Technology[]
}

export interface Project {
    src: string;
    alt: string;
    titulo: string;
    git: string;
    web: string;
    technologies: Technology[];
    description: string;
}