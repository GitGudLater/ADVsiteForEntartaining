import { FC } from "react";
import { useSelector } from "react-redux";
import { blogSelectors } from "../../store/blog-content/blog-content.selector";
import './HomePage.scss';
import { Button } from "../buttons/button/Button";
import { LocalizationProps } from "../../models/localization-props.type";
import { ButtonStyle } from "../../models/button-style.enum";
import { ReactComponent as CrownLong} from "../../logos/animated/crown-long.svg";
import { ReactComponent as Crown} from "../../logos/animated/crown.svg";
import { ReactComponent as DollarLong} from "../../logos/animated/dollar-long.svg";
import { ReactComponent as M} from "../../logos/animated/m.svg";
import { ReactComponent as Shield} from "../../logos/animated/shield.svg";
import { ReactComponent as Soccer} from "../../logos/animated/soccer.svg";
import { ReactComponent as Timer} from "../../logos/animated/timer.svg";
import { ReactComponent as WorldLong} from "../../logos/animated/world-long.svg";

export const HomePage: FC<LocalizationProps> = ({localizationContent}) => {
    const blog = useSelector(blogSelectors.blogEntitySelectors.selectAll);

    return (
        <section className="home-page">
            <div className="home-page-headings_container">
                <div className="home-page-headings_gradient-bkg-up"></div>
                <h1 className="home-page-headings_element upper-heading">{localizationContent.get("project_name_body_h1_up")}</h1>
                <h1  className="home-page-headings_element lower-heading">{localizationContent.get("project_name_body_h1_btm")}</h1>
                <h2  className="home-page-headings_element sub-heading">{localizationContent.get("project_name_body_h2")}</h2>
                <Button localizationContent={localizationContent.get("become_a_partner_body_btn") as string} buttonStyle={ButtonStyle.LightCapital} />
            </div>
            <div className="home-page-logos"> 
                <div className="home-page-logos_container">

                </div>
                <div className="home-page-logos_container">

                </div>
                <div className="home-page-logos_container">

                </div>
            </div>
            <div className="home-page-blog">
                <h1 className="home-page-blog_heading">{localizationContent.get("blog_body_h1")}</h1>
                <div className="home-page-blog_content">
                   <ul className="home-page-blog_container">
                    {blog.map( blogCard => 
                        <li key={blogCard.id}  className="home-page-blog_element">
                            <p className="blog-content">{blogCard.content}</p>
                            <time className="blog-date" dateTime="DD.MM.YYYY">{blogCard.date}</time>
                        </li>    
                    )} 
                    </ul>
                </div>
            </div>
        </section>
    );
}