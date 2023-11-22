import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blog-content/blog-content.slice';
import localizationTypesReducer from './localization-type-list/localization-type-list.slice';
import localizationContentReducer from './localization-content/localization-content.slice';

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        localizationContent: localizationContentReducer,
        localizationTypes: localizationTypesReducer,
    },
  });
  
export type RootState = ReturnType<typeof store.getState>
  
export type AppDispatch = typeof store.dispatch