import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchLocalizationTypeList } from "./localization-type-list.thunk";
import { LocalizationTypeListElement } from "../../models/localization-type-list-element.type";

export const LocalizationTypeListAdapter = createEntityAdapter<LocalizationTypeListElement>({
    selectId: (content) => content.id,
});

export const LocalizationTypeListSlice = createSlice({
    name: 'LocalizationTypeList',
    initialState: LocalizationTypeListAdapter.getInitialState({
      loading: 'idle'
    }),
    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchLocalizationTypeList.fulfilled, (state, action:PayloadAction<LocalizationTypeListElement[]>) => {
          LocalizationTypeListAdapter.setAll(state, action.payload);
          state.loading = 'fulfilled';
      })
      .addCase(fetchLocalizationTypeList.rejected, (state) => {
        state.loading = 'rejected';
      })
      .addCase(fetchLocalizationTypeList.pending, (state) => {
        state.loading = 'pending';
      })
  },
});

  
export const LocalizationTypeListActions = LocalizationTypeListSlice.actions;
export default LocalizationTypeListSlice.reducer;