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
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
export default function Home(){
    return(
        <>  
        <ScrollProgress/>
          <Navbar/>
           <section id="hero">
            <Hero/>
            </section>
            <section id="why-choose-us">
            <WhyChooseUs/>
            </section>
            <span id="countries">
            <Countries/>
            </span>
            <section id="admission-process">
            <AdmissionProcess/>
            </section>
            <section id="universities">
            <Universities/>
            </section>
            <section id="fee-scholarship">
            <FeeScholarship/>
            </section>
            <section id="success-stories">
            <SuccessStories/>
            </section>
            <section id="faq">
            <FAQ/>
            </section>
            <section id="counselling">
            <Counselling/>
            </section>
            <Footer/>
            <FloatingButtons/>
            <AIChatbot/>
         </>
    );
}