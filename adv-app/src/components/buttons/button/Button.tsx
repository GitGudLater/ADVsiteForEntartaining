import { FC } from "react";
import { ButtonProps } from "../../../models/button-props.type";

export const Button: FC<ButtonProps> = ({localizationContent}) => {
    const handleButtonClick = () => {
        // TODO: implement handler logic
    }

    return(
        <div onClick={() => handleButtonClick()}>
            {localizationContent}
        </div>
    );
}