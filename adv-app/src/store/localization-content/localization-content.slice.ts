import { LocalizationContent } from "../../models/localization-content.type";
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchLocalizationContent } from "./localization-content.thunk";

export const localizationContentAdapter = createEntityAdapter<LocalizationContent>({
    selectId: (content) => content.id,
});

export const localizationContentSlice = createSlice({
    name: 'localizationContent',
    initialState: localizationContentAdapter.getInitialState({
      loading: 'idle'
    }),
    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchLocalizationContent.fulfilled, (state, action:PayloadAction<LocalizationContent[]>) => {
          localizationContentAdapter.setAll(state, action.payload);
          state.loading = 'fulfilled';
      })
      .addCase(fetchLocalizationContent.rejected, (state) => {
        state.loading = 'rejected';
      })
      .addCase(fetchLocalizationContent.pending, (state) => {
        state.loading = 'pending';
      })
  },
});

  
export const localizationContentActions = localizationContentSlice.actions;
export default localizationContentSlice.reducer;