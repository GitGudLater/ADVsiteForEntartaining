import { FC } from "react";
import { ReactComponent as Crown} from "../../../logos/animated/crown.svg";
import { ReactComponent as DollarLong} from "../../../logos/animated/dollar-long.svg";
import { ReactComponent as DollarRotated} from "../../../logos/animated/dollar-rotated.svg";
import { ReactComponent as M} from "../../../logos/animated/m.svg";
import { ReactComponent as Shield} from "../../../logos/animated/shield.svg";
import { ReactComponent as Soccer} from "../../../logos/animated/soccer.svg";
import { ReactComponent as Timer} from "../../../logos/animated/timer.svg";
import { ReactComponent as WorldLong} from "../../../logos/animated/world-long.svg";
import { ReactComponent as WorldRotated} from "../../../logos/animated/world-rotated.svg";
import './AnimatedSection.scss';

export const AnimatedSection:FC = () => {
    return(
        <section className="animated-section">
            <div className="animated-section_container left">
                <div className="left_first">
                    <Shield />
                    <DollarLong className="long"/>
                    <DollarRotated className="rotated"/>
                    <Soccer />
                    <M />
                    <Shield />
                    <DollarLong className="long"/>
                    <DollarRotated className="rotated"/>
                    <Soccer />
                    <M />
                </div>
                <div className="left_second">
                    <Shield />
                    <DollarLong className="long"/>
                    <DollarRotated className="rotated"/>
                    <Soccer />
                    <M />
                    <Shield />
                    <DollarLong className="long"/>
                    <DollarRotated className="rotated"/>
                    <Soccer />
                    <M />
                </div>
            </div>
            <div className="animated-section_container center">
                <div className="center_first">
                    <M />
                    <Timer />
                    <Crown />
                    <WorldLong className="long"/>
                    <WorldRotated className="rotated"/>
                    <M />
                    <Timer />
                    <Crown />
                    <WorldLong className="long"/>
                    <WorldRotated className="rotated"/>
                </div>
                <div className="center_second">
                    <M />
                    <Timer />
                    <Crown />
                    <WorldLong className="long"/>
                    <WorldRotated className="rotated"/>
                    <M />
                    <Timer />
                    <Crown />
                    <WorldLong className="long"/>
                    <WorldRotated className="rotated"/>
                </div>
            </div>
            <div className="animated-section_container right">
                <div className="right_first">
                    <DollarLong className="long"/>
                    <DollarRotated className="rotated"/>
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
                    <DollarLong className="long"/>
                    <DollarRotated className="rotated"/>
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