import { FC } from "react";
import { useSelector } from "react-redux";
import { LocalizationContent } from "../../models/localization-content.type";
import { blogSelectors } from "../../store/blog-content/blog-content.selector";
import './Body.scss';

export const Body: FC<LocalizationContent[]> = (localizationContent) => {
    const blog = useSelector(blogSelectors.blogEntitySelectors.selectAll);

    return (
        <div>Body component</div>
    );
}