import { DropdownStyle } from "./drop-down-style.enum";
import { LocalizationTypeListElement } from "./localization-type-list-element.type";

export interface DropDownProps {
    selected: string;
    content: LocalizationTypeListElement[];
    buttonStyle: DropdownStyle;
    clickHandler?: any;
}