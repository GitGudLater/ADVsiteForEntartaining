import { RootState } from "../store";
import { localizationContentAdapter } from "./localization-content.slice";
import { createSelector } from "reselect";
import { BL } from "../../BL/BL";

const localizationContentState = (state:RootState) => state.localizationContent;

const localizationContentEntitySelectors = localizationContentAdapter.getSelectors(localizationContentState);

const getLocalizationContent = createSelector(localizationContentEntitySelectors.selectAll, (localizationContent) => {
    return BL.transformLocalizationDTOtoViewContent(localizationContent);
});

export const localizationContentSelectors = {
    getLocalizationContent,
}