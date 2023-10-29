import { FC } from "react";
import './Footer.scss';

export const Footer: FC<Map<string,string>> = (localizationContent) => {
    return (
        <div>
            {localizationContent.get("terms_and_conditions_footer_link")}
            {localizationContent.get("cookies_footer_link")}
            {localizationContent.get("contacts_footer_link")}
            {localizationContent.get("careers_footer_link")}
            {localizationContent.get("brand_guide_footer_link")}
            {localizationContent.get("our_social_media_footer_group_heading")}
        </div>
    );
}