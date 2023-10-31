import { LocalizationTypeListElement } from "./localization-type-list-element.type";

export interface DropDownProps {
    selected: string;
    content: LocalizationTypeListElement[];
}