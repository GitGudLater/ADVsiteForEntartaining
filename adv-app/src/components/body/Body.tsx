import { FC } from "react";
import { useSelector } from "react-redux";
import { blogSelectors } from "../../store/blog-content/blog-content.selector";
import './Body.scss';
import { ButtonLight } from "../buttons/button-light/Button-light";

export const Body: FC<Map<string,string>> = (localizationContent) => {
    const blog = useSelector(blogSelectors.blogEntitySelectors.selectAll);

    return (
        <div>
            {localizationContent.get("project_name_body_h1_up")}
            {localizationContent.get("project_name_body_h1_btm")}
            {localizationContent.get("project_name_body_h2")}
            <ButtonLight {...{localizationContent:localizationContent.get("become_a_partner_body_btn") as string}}/>
            {localizationContent.get("blog_body_h1")}
            {blog.map( blogCard => 
                <div key={blogCard.id}>
                    {blogCard.content}
                    {blogCard.date}
                </div>    
            )}
        </div>
    );
}