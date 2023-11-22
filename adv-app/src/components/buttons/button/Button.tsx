import { FC } from "react";
import { ButtonProps } from "../../../models/button-props.type";
import "./Button.scss";

export const Button: FC<ButtonProps> = ({localizationContent, buttonStyle, clickHandler, svgIcon}) => {
    const handleButtonClick = () => {
        clickHandler? clickHandler() : console.log("Empty handler");
    }

    return(
        <div className={buttonStyle} onClick={() => handleButtonClick()}>
            {svgIcon? svgIcon : null}
            {localizationContent? localizationContent : null}
        </div>
    );
}