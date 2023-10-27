import { RootState } from "../store";
import { LocalizationTypeListAdapter } from "./localization-type-list.slice";
import { createSelector } from "reselect";

const localizationTypeState = (state:RootState) => state.localizationTypes;

const localizationTypeEntitySelectors = LocalizationTypeListAdapter.getSelectors(localizationTypeState);

const selectCurrentLanguage = createSelector(localizationTypeState , (state) => state.selected);

export const localizationTypesSelectors = {
    localizationTypeEntitySelectors,
    selectCurrentLanguage,
}