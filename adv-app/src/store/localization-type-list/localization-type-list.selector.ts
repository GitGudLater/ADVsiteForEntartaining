import { RootState } from "../store";
import { LocalizationTypeListAdapter } from "./localization-type-list.slice";

const localizationTypeState = (state:RootState) => state.localizationTypes;

export const localizationTypeEntitySelectors = LocalizationTypeListAdapter.getSelectors(localizationTypeState)