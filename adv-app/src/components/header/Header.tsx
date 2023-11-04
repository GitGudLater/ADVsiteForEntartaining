import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { localizationTypesSelectors } from "../../store/localization-type-list/localization-type-list.selector";
import './Header.scss';
import { DropDown } from "../buttons/drop-down/Drop-down";
import { Button } from "../buttons/button/Button";
import { LocalizationProps } from "../../models/localization-props.type";
import { ButtonStyle } from "../../models/button-style.enum";
import { DropdownStyle } from "../../models/drop-down-style.enum";
import { useAppDispatch } from "../../store/store.hooks";
import { LocalizationTypeListActions } from "../../store/localization-type-list/localization-type-list.slice";
import { fetchLocalizationContent } from "../../store/localization-content/localization-content.thunk";

export const Header: FC<LocalizationProps> = ({localizationContent}) => {
    const localizationTypes = useSelector(localizationTypesSelectors.localizationTypeEntitySelectors.selectAll);
    const selectedLangugeShortName = useSelector(localizationTypesSelectors.selectCurrentLanguage);
    const dispatch = useAppDispatch();
    const changeLocalization = (localizationShortName: string) => {
        dispatch(LocalizationTypeListActions.setSelectedLocalizationLanguage(localizationShortName));
        dispatch(fetchLocalizationContent(selectedLangugeShortName));
    }
    return (
        <header className="header">
            <nav className="header-nav-menu_container">
                <a className="header-nav-menu_element ancor" href="#about_us">{localizationContent.get("about_us_header_ancor")}</a>
                <a className="header-nav-menu_element ancor" href="#brands">{localizationContent.get("brands_header_ancor")}</a>
                <a className="header-nav-menu_element ancor" href="#commissions">{localizationContent.get("commissions_header_ancor")}</a>
                <a className="header-nav-menu_element ancor" href="#news">{localizationContent.get("news_header_ancor")}</a>
                <a className="header-nav-menu_element ancor" href="#contact_us">{localizationContent.get("contact_us_header_ancor")}</a>
            </nav>
            <div className="header-authorization_container">
                <DropDown clickHandler={(target:string) => changeLocalization(target)} selected={localizationContent.get("lang_header_btn") as string} content={localizationTypes} buttonStyle={DropdownStyle.Dark}/>
                <Button localizationContent={localizationContent.get("log_in_header_btn") as string} buttonStyle={ButtonStyle.Dark} />
                <Button localizationContent={localizationContent.get("sign_up_header_btn") as string} buttonStyle={ButtonStyle.Light}/>
            </div>
        </header>
    );
}