import { ButtonStyle } from "./button-style.enum";

export interface ButtonProps {
    localizationContent: string;
    buttonStyle: ButtonStyle;
    clickHandler?: any;
    svgIcon?: any; 
}