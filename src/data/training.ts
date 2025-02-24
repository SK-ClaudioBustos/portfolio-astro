import { getI18N } from "@i18n/index";

export const getTraining = (currentLocale: string) => {
    const i18n = getI18N({ currentLocale });
    const TRAINING = [
        {
            title: i18n.TRAINING.T1.TITLE,
            subtitle: i18n.TRAINING.T1.SUBTITLE,
            body: i18n.TRAINING.T1.BODY,
        },
        {
            title: i18n.TRAINING.T2.TITLE,
            subtitle: i18n.TRAINING.T2.SUBTITLE,
            body: i18n.TRAINING.T2.BODY,
        },
    ];

    return TRAINING;
}