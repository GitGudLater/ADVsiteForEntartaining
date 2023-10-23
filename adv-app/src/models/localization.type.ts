import { LocalizationContent } from "./localization-content.type";

export interface localization {
    id:number;
    name: string;
    shortName: string;
    content: LocalizationContent[];
}