import Hero from "../../components/home/Hero/Hero";
import Companies from "../../components/home/Companies/Companies";
import Features from "../../components/home/Features/Features";
import HowItWorks from "../../components/home/HowItWorks/HowItWorks";
import FeaturedJobs from "../../components/home/FeaturedJobs/FeaturedJobs";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import Pricing from "../../components/home/Pricing/Pricing";
import CTA from "../../components/home/CTA/CTA";

function Home() {
    return (
        <>
            <Hero />
            <Companies />
            <Features />
            <HowItWorks />
            <FeaturedJobs />
            <Testimonials />
            <Pricing />
            <CTA />
        </>
    );
}

export default Home;