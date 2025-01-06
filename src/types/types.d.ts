import { Props } from "astro"

export interface LinkData {
    url: string
    label: string
}

export interface SkillData {
    label: string
    Icon: ((_props: Props) => any) & ImageMetadata
}