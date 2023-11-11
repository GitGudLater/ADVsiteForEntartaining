import { FC } from "react";
import { ReactComponent as CrownLong} from "../../../logos/animated/crown-long.svg";
import { ReactComponent as Crown} from "../../../logos/animated/crown.svg";
import { ReactComponent as DollarLong} from "../../../logos/animated/dollar-long.svg";
import { ReactComponent as M} from "../../../logos/animated/m.svg";
import { ReactComponent as Shield} from "../../../logos/animated/shield.svg";
import { ReactComponent as Soccer} from "../../../logos/animated/soccer.svg";
import { ReactComponent as Timer} from "../../../logos/animated/timer.svg";
import { ReactComponent as WorldLong} from "../../../logos/animated/world-long.svg";
import './AnimatedSection.scss';

export const AnimatedSection:FC = () => {
    return(
        <section className="animated-section">
            <div className="animated-section_container left">
                <Shield />
                <DollarLong />
                <Soccer />
                <M />
                <Shield />
                <DollarLong />
                <Soccer />
                <M />
            </div>
            <div className="animated-section_container center">
                <M />
                <Timer />
                <Crown />
                <WorldLong />
                <M />
                <Timer />
                <Crown />
                <WorldLong />
            </div>
            <div className="animated-section_container right">
                <DollarLong />
                <M />
                <Shield />
                <Soccer />
                <Shield />
                <Crown />
                <M />
                <Shield />
                <Soccer />
            </div>
        </section>
    );
}