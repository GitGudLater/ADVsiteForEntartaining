import { RootState } from "../store";
import { blogAdapter } from "./blog-content.slice";

const blogState = (state:RootState) => state.blog;

const blogEntitySelectors = blogAdapter.getSelectors(blogState)

export const blogSelectors = {
    blogEntitySelectors,
}