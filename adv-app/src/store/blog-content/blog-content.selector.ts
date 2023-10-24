import { RootState } from "../store";
import { blogAdapter } from "./blog-content.slice";

const blogState = (state:RootState) => state.blog;

export const blogEntitySelectors = blogAdapter.getSelectors(blogState)
