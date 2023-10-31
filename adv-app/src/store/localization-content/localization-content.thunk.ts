import { createAsyncThunk } from '@reduxjs/toolkit';
import { dal } from '../../DAL/DAL';
import { LocalizationContent } from '../../models/localization-content.type';

export const fetchLocalizationContent = createAsyncThunk<LocalizationContent[], string>(
    'localization/getLocalizationContent',
    async(localizationShortPrefix) => {
        const response = await dal.getLocalization(localizationShortPrefix);
        return response.content;
    }
);