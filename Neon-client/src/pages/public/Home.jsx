import { Navbar } from "../../components/Navigation/Navbar"
import { HeroSection } from "../../components/home/HeroSection"
import { RateSection } from "../../components/home/RateSection"
export function Home() {
    return (
        <>
            <title>Neon | Home</title>
            <Navbar />
            <HeroSection />
            <RateSection />
        </>
    )
}