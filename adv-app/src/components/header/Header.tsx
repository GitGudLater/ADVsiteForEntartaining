import { FC } from "react";
import { useSelector } from "react-redux";
import { LocalizationContent } from "../../models/localization-content.type";
import { localizationTypesSelectors } from "../../store/localization-type-list/localization-type-list.selector";
import './Header.scss';

export const Header: FC<LocalizationContent[]> = (localizationContent) => {
    const localizationTypes = useSelector(localizationTypesSelectors.localizationTypeEntitySelectors.selectAll);

    return (
        <div>Header component</div>
    );
}