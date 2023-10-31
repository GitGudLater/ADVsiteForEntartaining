import { LocalizationContent } from "./localization-content.type";

export interface Localization {
    id:number;
    name: string;
    shortName: string;
    content: LocalizationContent[];
}