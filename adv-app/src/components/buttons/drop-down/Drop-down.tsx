import { FC } from "react";
import { LocalizationTypeListElement } from "../../../models/localization-type-list-element.type";

export interface DropDownProps {
    selected: string;
    content: LocalizationTypeListElement[];
}

export const DropDown: FC<DropDownProps> = (props) => {
    return(
        <div>
            DropDown component
        </div>
    );
}