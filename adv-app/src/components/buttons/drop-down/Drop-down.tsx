import { FC, useCallback, useState } from "react";
import { DropDownProps } from "../../../models/drop-down-props.type";
import "./DropDown.scss";

export const DropDown: FC<DropDownProps> = (props) => {
    const memoizedHandler = useCallback((selectedListElementID:string) => props.clickHandler(selectedListElementID), []);

    const handleButtonClick = () => {
        setDropDownOpenStatus(!isDropDownOpen);
    }

    const handleSelectedClick = (selectedListElementID: string) => {
        handleButtonClick();
        delegatedFunctionHandler(selectedListElementID);
    }

    const delegatedFunctionHandler = (selectedListElementID:string) => {
        props.clickHandler? memoizedHandler(selectedListElementID) : console.log("Empty handler");
    }

    const [isDropDownOpen, setDropDownOpenStatus] = useState<boolean>(false);

    return(
        <div className={props.buttonStyle} onClick={() => handleButtonClick()}>
            {props.svgIcon? props.svgIcon : null}
            <div className="content">{props.selected}</div>
            { isDropDownOpen?
                <ul className="drop-down_container">
                    { props.content.map( contentElement => 
                        <li onClick={() => handleSelectedClick(contentElement.shortName)} key={contentElement.id} className="drop-down_element">
                            {contentElement.name}
                        </li>    
                    )}
                </ul>
                : null}
        </div>
    );
}