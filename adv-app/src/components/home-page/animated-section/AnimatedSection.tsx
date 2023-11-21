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
                <div className="left_first">
                    <Shield />
                    <DollarLong />
                    <Soccer />
                    <M />
                    <Shield />
                    <DollarLong />
                    <Soccer />
                    <M />
                </div>
                <div className="left_second">
                    <Shield />
                    <DollarLong />
                    <Soccer />
                    <M />
                    <Shield />
                    <DollarLong />
                    <Soccer />
                    <M />
                </div>
            </div>
            <div className="animated-section_container center">
                <div className="center_first">
                    <M />
                    <Timer />
                    <Crown />
                    <WorldLong />
                    <M />
                    <Timer />
                    <Crown />
                    <WorldLong />
                </div>
                <div className="center_second">
                    <M />
                    <Timer />
                    <Crown />
                    <WorldLong />
                    <M />
                    <Timer />
                    <Crown />
                    <WorldLong />
                </div>
            </div>
            <div className="animated-section_container right">
                <div className="right_first">
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
                <div className="right_second">
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
            </div>

        </section>
    );
}