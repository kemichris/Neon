import { Navbar } from "../../components/Navigation/Navbar";
import { HeroSection } from "../../components/home/HeroSection";
import { RateSection } from "../../components/home/RateSection";
import { ServiceSection } from "../../components/home/ServiceSection";
import { CallToActionSection } from "../../components/home/CallToActionSection";
import { FeatureSection } from "../../components/home/FeatureSection";
import { ReviewSection } from "../../components/home/ReviewSection";
import { ContactSection } from "../../components/home/ContactSection";
export function Home() {
    return (
        <>
            <title>Neon | Home</title>
            <Navbar />
            <HeroSection />
            <RateSection />
            <ServiceSection />
            <CallToActionSection />
            <FeatureSection />
            <ReviewSection />
            <ContactSection />
        </>
    )
}