import { FC } from "react";
import { useSelector } from "react-redux";
import { localizationTypesSelectors } from "../../store/localization-type-list/localization-type-list.selector";
import './Header.scss';
import { DropDown } from "../buttons/drop-down/Drop-down";
import { Button } from "../buttons/button/Button";
import { LocalizationProps } from "../../models/localization-props.type";
import { DropDownProps } from "../../models/drop-down-props.type";
import { ButtonStyle } from "../../models/button-style.enum";

export const Header: FC<LocalizationProps> = ({localizationContent}) => {
    const localizationTypes = useSelector(localizationTypesSelectors.localizationTypeEntitySelectors.selectAll);
    return (
        <div>
            {localizationContent.get("about_us_header_ancor")}
            {localizationContent.get("brands_header_ancor")}
            {localizationContent.get("commissions_header_ancor")}
            {localizationContent.get("news_header_ancor")}
            {localizationContent.get("contact_us_header_ancor")}
            <DropDown {...{selected:localizationContent.get("lang_header_btn"), content:localizationTypes, buttonStyle: ButtonStyle.Dark} as DropDownProps}/>
            <Button {...{localizationContent:localizationContent.get("log_in_header_btn") as string, buttonStyle: ButtonStyle.Dark}}/>
            <Button {...{localizationContent:localizationContent.get("sign_up_header_btn") as string, buttonStyle: ButtonStyle.Light}}/>
        </div>
    );
}