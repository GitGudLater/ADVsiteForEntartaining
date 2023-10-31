import { FC } from "react";
import { DropDownProps } from "../../../models/drop-down-props.type";

export const DropDown: FC<DropDownProps> = (props) => {
    const handleButtonClick = () => {
        // TODO: implement handler logic
    }

    return(
        <div onClick={() => handleButtonClick()}>
            {props.selected}
        </div>
    );
}