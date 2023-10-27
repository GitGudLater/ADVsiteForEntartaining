import { createAsyncThunk } from '@reduxjs/toolkit';
import { dal } from '../../DAL/DAL';
import { BlogContent } from '../../models/blog.type';

export const fetchBlogContent = createAsyncThunk<BlogContent[]>(
    'blog/getBlogContent',
    async() => {
        const response = await dal.getBlog();
        return response;
    }
);