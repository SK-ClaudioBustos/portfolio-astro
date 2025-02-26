import { getI18N } from "@i18n/index";
import { LinkData } from "@type/types";

export const getLinks = (currentLocale: string) => {
    const i18n = getI18N({ currentLocale });

    const LINKS: LinkData[] = [
        {
            elementId: "#skills",
            label: i18n.NAV_LINKS.L1,
        },
        {
            elementId: "#experiencie",
            label: i18n.NAV_LINKS.L2,
        },
        {
            elementId: "#projects",
            label: i18n.NAV_LINKS.L3,
        },
        {
            elementId: "#about-me",
            label: i18n.NAV_LINKS.L4,
        },
        {
            elementId: "#training",
            label: i18n.TRAINING.TITLE,
        },
        {
            elementId: "#cv",
            label: "CV",
        },
        {
            elementId: "#contact",
            label: i18n.CONTACT.TITLE,
        },
    ];
    return LINKS;
}