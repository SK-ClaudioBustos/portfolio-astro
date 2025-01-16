import english from "./en.json";
import spanish from "./es.json";

enum LANGUAGES {
    SPANISH = "es",
    ENGLISH = "en"
}

export const getI18N = ({ currentLocale }: { currentLocale: string }) => {
    switch (currentLocale) {
        case LANGUAGES.ENGLISH:
            return english;

        default: LANGUAGES.SPANISH
            return spanish;
    }
}