import { ButtonStyle } from "./button-style.enum";

export interface ButtonProps {
    localizationContent?: string;
    buttonStyle: ButtonStyle;
    clickHandler?: any;
    clickHandlerArgs?: any;
    svgIcon?: any; 
}