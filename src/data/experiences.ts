import { getI18N } from "@i18n/index";
import { ExperienceData } from "@type/types";
import { TECHNOLOGIES } from "./technologies";

export const getExperiencies = (currentLocale: string) => {
    const i18n = getI18N({ currentLocale });

    const EXPERIENCIES: ExperienceData[] = [
        {
            date: i18n.EXPERIENCIES.EXP_1.DATE,
            title: i18n.EXPERIENCIES.EXP_1.TITLE,
            description: i18n.EXPERIENCIES.EXP_1.DESCRIPTION,
            technologies: [TECHNOLOGIES.PHP]
        },
        {
            date: i18n.EXPERIENCIES.EXP_2.DATE,
            title: i18n.EXPERIENCIES.EXP_2.TITLE,
            description: i18n.EXPERIENCIES.EXP_2.DESCRIPTION,
            technologies: [TECHNOLOGIES.PHP, TECHNOLOGIES.Laravel, TECHNOLOGIES.Livewire, TECHNOLOGIES.MySQL]
        },
        {
            date: i18n.EXPERIENCIES.EXP_3.DATE,
            title: i18n.EXPERIENCIES.EXP_3.TITLE,
            description: i18n.EXPERIENCIES.EXP_3.DESCRIPTION,
            technologies: [TECHNOLOGIES.Typescript, TECHNOLOGIES.MUI, TECHNOLOGIES.React, TECHNOLOGIES.Next, TECHNOLOGIES.Nest, TECHNOLOGIES.MongoDb, TECHNOLOGIES.Graphql]
        },
        {
            date: i18n.EXPERIENCIES.EXP_4.DATE,
            title: i18n.EXPERIENCIES.EXP_4.TITLE,
            description: i18n.EXPERIENCIES.EXP_4.DESCRIPTION,
            technologies: [TECHNOLOGIES.PHP, TECHNOLOGIES.Laravel, TECHNOLOGIES.Livewire, TECHNOLOGIES.MySQL]
        }
    ];
    return EXPERIENCIES;
}
