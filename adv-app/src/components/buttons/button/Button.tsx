import { FC, useCallback } from "react";
import { ButtonProps } from "../../../models/button-props.type";
import "./Button.scss";

export const Button: FC<ButtonProps> = ({localizationContent, buttonStyle, clickHandler, clickHandlerArgs, svgIcon}) => {

    const memoizedHandler = useCallback(() => clickHandler(clickHandlerArgs), [clickHandlerArgs]);

    const handleButtonClick = () => {
        clickHandler? memoizedHandler() : console.log("Empty handler");
    }

    return(
        <div className={buttonStyle} onClick={() => handleButtonClick()}>
            {svgIcon? svgIcon : null}
            {localizationContent? localizationContent : null}
        </div>
    );
}