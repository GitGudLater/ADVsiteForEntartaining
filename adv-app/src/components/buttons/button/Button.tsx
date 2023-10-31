import { FC } from "react";
import { ButtonProps } from "../../../models/button-props.type";
import "./Button.scss";

export const Button: FC<ButtonProps> = ({localizationContent, buttonStyle}) => {
    const handleButtonClick = () => {
        // TODO: implement handler logic
    }

    return(
        <div className={buttonStyle} onClick={() => handleButtonClick()}>
            {localizationContent}
        </div>
    );
}