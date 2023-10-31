import { FC } from "react";
import { LocalizationProps } from "../../models/localization-props.type";
import './Footer.scss';

export const Footer: FC<LocalizationProps> = ({localizationContent}) => {
    return (
        <footer className="footer">
            <div className="footer-links_container">
                <div className="footer-links_element">
                    <a href="https://github.com/GitGudLater/ADVsiteForEntartaining">{localizationContent.get("terms_and_conditions_footer_link")}</a>
                </div>
                <div className="footer-links_element">
                    <a href="https://github.com/GitGudLater/ADVsiteForEntartaining">{localizationContent.get("cookies_footer_link")}</a>
                </div>
                <div className="footer-links_element">
                    <a href="https://github.com/GitGudLater/ADVsiteForEntartaining">{localizationContent.get("contacts_footer_link")}</a>
                </div>
                <div className="footer-links_element">
                    <a href="https://github.com/GitGudLater/ADVsiteForEntartaining">{localizationContent.get("careers_footer_link")}</a>
                </div>
                <div className="footer-links_element">
                    <a href="https://github.com/GitGudLater/ADVsiteForEntartaining">{localizationContent.get("brand_guide_footer_link")}</a>
                </div>
            </div>
            <div className="footer-social-logo">
                <div className="footer-social-logo_heading">
                    <h3>{localizationContent.get("our_social_media_footer_group_heading")}</h3>
                </div>
                <div className="footer-social-logo_container">

                </div>
            </div>
        </footer>
    );
}