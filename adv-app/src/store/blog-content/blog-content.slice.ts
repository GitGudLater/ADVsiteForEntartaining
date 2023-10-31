import { BlogContent } from "../../models/blog.type";
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchBlogContent } from "./blog-content.thunk";

export const blogAdapter = createEntityAdapter<BlogContent>({
    selectId: (blog) => blog.id,
});

export const blogSlice = createSlice({
    name: 'blog',
    initialState: blogAdapter.getInitialState({
      loading: 'idle'
    }),
    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchBlogContent.fulfilled, (state, action:PayloadAction<BlogContent[]>) => {
          blogAdapter.setAll(state, action.payload);
          state.loading = 'fulfilled';
      })
      .addCase(fetchBlogContent.rejected, (state) => {
        state.loading = 'rejected';
      })
      .addCase(fetchBlogContent.pending, (state) => {
        state.loading = 'pending';
      })
  },
});

  
export const blogActions = blogSlice.actions;
export default blogSlice.reducer;