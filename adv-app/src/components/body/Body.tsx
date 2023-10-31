import { FC } from "react";
import { useSelector } from "react-redux";
import { blogSelectors } from "../../store/blog-content/blog-content.selector";
import './Body.scss';
import { Button } from "../buttons/button/Button";
import { LocalizationProps } from "../../models/localization-props.type";
import { ButtonStyle } from "../../models/button-style.enum";

export const Body: FC<LocalizationProps> = ({localizationContent}) => {
    const blog = useSelector(blogSelectors.blogEntitySelectors.selectAll);

    return (
        <div>
            {localizationContent.get("project_name_body_h1_up")}
            {localizationContent.get("project_name_body_h1_btm")}
            {localizationContent.get("project_name_body_h2")}
            <Button {...{localizationContent:localizationContent.get("become_a_partner_body_btn") as string, buttonStyle: ButtonStyle.Light}}/>
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