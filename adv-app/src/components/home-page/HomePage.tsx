import { FC } from "react";
import { useSelector } from "react-redux";
import { blogSelectors } from "../../store/blog-content/blog-content.selector";
import './HomePage.scss';
import { Button } from "../buttons/button/Button";
import { LocalizationProps } from "../../models/localization-props.type";
import { ButtonStyle } from "../../models/button-style.enum";

export const HomePage: FC<LocalizationProps> = ({localizationContent}) => {
    const blog = useSelector(blogSelectors.blogEntitySelectors.selectAll);

    return (
        <section className="home-page">
            <div className="home-page headings_container">
                <div className="home-page headings_element">
                    <h1>{localizationContent.get("project_name_body_h1_up")}</h1>
                </div>
                <div className="home-page headings_element">
                    <h1>{localizationContent.get("project_name_body_h1_btm")}</h1>
                </div>
                <div className="home-page headings_element">
                    <h2>{localizationContent.get("project_name_body_h2")}</h2>
                </div>
                <div className="home-page headings_element">
                    <Button {...{localizationContent:localizationContent.get("become_a_partner_body_btn") as string, buttonStyle: ButtonStyle.Light}}/>
                </div>
            </div>
            <div className="home-page blog">
                <h1>{localizationContent.get("blog_body_h1")}</h1>
                <ul  className="home-page blog_container">
                {blog.map( blogCard => 
                    <li key={blogCard.id}  className="home-page blog_element">
                        {blogCard.content}
                        {blogCard.date}
                    </li>    
                )} 
                </ul>
            </div>
        </section>
    );
}