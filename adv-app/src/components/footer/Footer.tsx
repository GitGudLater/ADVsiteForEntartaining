import { FC } from "react";
import { LocalizationProps } from "../../models/localization-props.type";
import './Footer.scss';
import {ReactComponent as Facebook} from '../../logos/social/facebook.svg';
import {ReactComponent as Instagramm} from '../../logos/social/instagramm.svg';
import {ReactComponent as Linkedin} from '../../logos/social/linkedin.svg';
import {ReactComponent as Telegram} from '../../logos/social/telegram.svg';
import {ReactComponent as Tiktok} from '../../logos/social/tiktok.svg';
import {ReactComponent as Twitter} from '../../logos/social/twitter.svg';
import {ReactComponent as Vk} from '../../logos/social/vk.svg';
import {ReactComponent as Youtube} from '../../logos/social/youtube.svg';

export const Footer: FC<LocalizationProps> = ({localizationContent}) => {
    return (
        <footer className="footer">
            <div className="footer-links_container">
                <a className="footer-links_element" href="https://github.com/GitGudLater/ADVsiteForEntartaining">{localizationContent.get("terms_and_conditions_footer_link")}</a>
                <a className="footer-links_element" href="https://github.com/GitGudLater/ADVsiteForEntartaining">{localizationContent.get("cookies_footer_link")}</a>
                <a className="footer-links_element" href="https://github.com/GitGudLater/ADVsiteForEntartaining">{localizationContent.get("contacts_footer_link")}</a>
                <a className="footer-links_element" href="https://github.com/GitGudLater/ADVsiteForEntartaining">{localizationContent.get("careers_footer_link")}</a>
                <a className="footer-links_element" href="https://github.com/GitGudLater/ADVsiteForEntartaining">{localizationContent.get("brand_guide_footer_link")}</a>
            </div>
            <div className="footer-social-logo">
                <div className="footer-social-logo_gradient-bkg-btm"></div>
                <h3 className="footer-social-logo_heading">{localizationContent.get("our_social_media_footer_group_heading")}</h3>
                <div className="footer-social-logo_container">
                    <Facebook className="footer-social-logo_element" />
                    <Instagramm className="footer-social-logo_element" />
                    <Linkedin className="footer-social-logo_element" />
                    <Telegram className="footer-social-logo_element" />
                    <Tiktok className="footer-social-logo_element" />
                    <Twitter className="footer-social-logo_element" />
                    <Vk className="footer-social-logo_element" />
                    <Youtube className="footer-social-logo_element" />
                </div>
            </div>
        </footer>
    );
}