import { FC } from "react";
import { DropDownProps } from "../../../models/drop-down-props.type";
import "./DropDown.scss";

export const DropDown: FC<DropDownProps> = (props) => {
    const handleButtonClick = () => {
        // TODO: implement handler logic
    }

    return(
        <div className={props.buttonStyle} onClick={() => handleButtonClick()}>
            {props.selected}
        </div>
    );
}