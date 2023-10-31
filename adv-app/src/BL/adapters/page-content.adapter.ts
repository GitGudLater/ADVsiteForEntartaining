import { LocalizationContent } from "../../models/localization-content.type";
import { Adapter } from "./interfaces/adapter.interface";

const convertForwardToBackwardModel = (values: LocalizationContent[]): Map<string, string> => {
    const structuredContent = new Map<string, string>();
    values.map(value => structuredContent.set(value.id, value.content));
    return structuredContent;
} 

export const pageContentAdapter: Adapter<LocalizationContent[], Map<string, string>> = {
    convertForwardToBackwardModel,
}