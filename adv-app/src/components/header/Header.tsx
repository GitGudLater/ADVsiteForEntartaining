import { FC } from "react";
import { useSelector } from "react-redux";
import { localizationTypesSelectors } from "../../store/localization-type-list/localization-type-list.selector";
import './Header.scss';
import { DropDown, DropDownProps } from "../buttons/drop-down/Drop-down";
import { ButtonLight } from "../buttons/button-light/Button-light";
import { ButtonDark } from "../buttons/button-dark/Button-dark";

export const Header: FC<Map<string,string>> = (localizationContent) => {
    const localizationTypes = useSelector(localizationTypesSelectors.localizationTypeEntitySelectors.selectAll);

    return (
        <div>
            {localizationContent.get("about_us_header_ancor")}
            {localizationContent.get("brands_header_ancor")}
            {localizationContent.get("commissions_header_ancor")}
            {localizationContent.get("news_header_ancor")}
            {localizationContent.get("contact_us_header_ancor")}
            <DropDown {...{selected:localizationContent.get("lang_header_btn"), content:localizationTypes} as DropDownProps}/>
            <ButtonLight {...{localizationContent:localizationContent.get("log_in_header_btn") as string}}/>
            <ButtonDark {...{localizationContent:localizationContent.get("sign_up_header_btn") as string}}/>
        </div>
    );
}