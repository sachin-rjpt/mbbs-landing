import AdmissionProcess from "../sections/AdmissionProcess";
import AIChatbot from "../sections/AIChatbot";
import Counselling from "../sections/Conselling";
import Countries from "../sections/Countries";
import FAQ from "../sections/FAQ";
import FeeScholarship from "../sections/FeeScholarship";
import FloatingButtons from "../sections/FloatingButtons";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import SuccessStories from "../sections/SuccessStories";
import Universities from "../sections/Universities";
import WhyChooseUs from "../sections/WhyChooseUs";
export default function Home(){
    return(
        <>  
           <section id="hero">
            <Hero/>
            </section>
            <WhyChooseUs/>
            <Countries/>
            <section id="process">
            <AdmissionProcess/>
            </section>
            <Universities/>
            <FeeScholarship/>
            <SuccessStories/>
            <section id="faq">
            <FAQ/>
            </section>
            <Counselling/>
            <Footer/>
            <FloatingButtons/>
            <AIChatbot/>
         </>
    );
}