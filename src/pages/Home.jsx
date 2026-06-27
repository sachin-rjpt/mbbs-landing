import AIChatbot from "../sections/AIChatbot";
import Benefits from "../sections/Benefits";
import Counselling from "../sections/Conselling";
import Countries from "../sections/Countries";
import Eligibility from "../sections/Eligibility";
import FloatingButtons from "../sections/FloatingButtons";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import IndiaVsAbroad from "../sections/IndiaVsAbroad";
import Universities from "../sections/Universities";

export default function Home(){
    return(
        <>
            <Hero/>
            <section id="countries">
            <Countries/>
            </section>
            <Benefits/>
            <section id="universities">
            <Universities/>
            </section>
            <Eligibility/>
            <IndiaVsAbroad/>
            <section id="counselling">
            <Counselling/>
            </section>
            <Footer/>
            <FloatingButtons/>
            <AIChatbot/>
            </>
    );
}