import { LocalizationContent } from "../models/localization-content.type"
import { pageContentAdapter } from "./adapters/page-content.adapter"

const transformLocalizationDTOtoViewContent = (localizationContentDTO: LocalizationContent[]):Map<string, string> => {
    return pageContentAdapter.convertForwardToBackwardModel(localizationContentDTO);
}

export const BL = {
    transformLocalizationDTOtoViewContent,
}