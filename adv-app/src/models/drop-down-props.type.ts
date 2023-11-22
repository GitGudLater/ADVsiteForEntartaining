import { DropDownTypeListElement } from "./drop-down-list-element.type";
import { DropdownStyle } from "./drop-down-style.enum";

export interface DropDownProps {
    selected: string;
    content: DropDownTypeListElement[];
    buttonStyle: DropdownStyle;
    clickHandler?: any;
    svgIcon?: any;
}