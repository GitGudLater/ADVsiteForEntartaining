import axios from 'axios';
import { BlogContent } from '../models/blog.type';
import { LocalizationTypeListElement } from '../models/localization-type-list-element.type';
import { Localization } from '../models/localization.type';

const localizationsUrlFolder = '../assets/localizations/';
const blogUrlFolder = "../assets/blog/";

const getLocalization = async (localizationShortPrefix:string): Promise<Localization> => {
    const url=`${localizationsUrlFolder}${localizationShortPrefix}`;
    const response = await axios.get(url);
    return response.data;
} 

const getLocalizationsList = async (): Promise<LocalizationTypeListElement[]> => {
    const url=`${localizationsUrlFolder}localizations-list`;
    const response = await axios.get(url);
    return response.data;
}

const getBlog = async (): Promise<BlogContent[]> => {
    const url=`${blogUrlFolder}blog-content`;
    const response = await axios.get(url);
    return response.data;
}

export const dal = {
    getLocalization,
    getLocalizationsList,
    getBlog,
}