import { RiUserAddFill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { CiBank } from "react-icons/ci";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import { Button } from "../common/Button"
import { HeroCard } from "./HeroCard";

export function HeroSection() {
    return (
        <div className="hero-section">
            <h1>Neon Bank</h1>
            <p>We do banking differently. We believe that people come first,
                and that everyone deserves a great experience every step of the way.
            </p>
            <div className="hero-buttons">
                <Button
                    icon={<RiUserAddFill />}
                    text="Open Account Today"
                    to="/register"
                />
                <Button
                    icon={<FiLogIn />}
                    text="Login"
                    to="/login"
                />
            </div>
            <div className="hero-cards">
                <HeroCard
                    text1="ROUTING #"
                    text2="251480576"
                    icon={<CiBank />}

                />
                <HeroCard
                    text1="BRANCH HOURS"
                    text2="Mon-Fri: 9AM-5PM"
                    text2="Sat: 9AM-1PM"
                    icon={<MdOutlineAccessTimeFilled />}

                />
                <HeroCard
                    text1="24/7 SUPPORT"
                    text2="1-800-BANKING"
                    text2="Always here to help"
                    icon={<IoCall />}

                />
            </div>
        </div>
    )
}