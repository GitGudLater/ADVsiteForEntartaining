import { FC } from "react";
import { DropDownProps } from "../../../models/drop-down-props.type";
import "./DropDown.scss";

export const DropDown: FC<DropDownProps> = (props) => {
    const handleButtonClick = () => {
        props.clickHandler? props.clickHandler() : console.log("Empty handler");
    }

    return(
        <div className={props.buttonStyle} onClick={() => handleButtonClick()}>
            {props.selected}
        </div>
    );
}