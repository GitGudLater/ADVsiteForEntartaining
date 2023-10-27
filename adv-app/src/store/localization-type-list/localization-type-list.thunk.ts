import { createAsyncThunk } from '@reduxjs/toolkit';
import { dal } from '../../DAL/DAL';
import { LocalizationTypeListElement } from '../../models/localization-type-list-element.type';

export const fetchLocalizationTypeList = createAsyncThunk<LocalizationTypeListElement[]>(
    'localization/getLocalizationTypeList',
    async() => {
        const response = await dal.getLocalizationsList();
        return response;
    }
);