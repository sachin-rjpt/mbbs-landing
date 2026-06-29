import {
  FaGlobeAsia,FaUserGraduate,FaHandshake,FaUniversity,FaPassport,FaMoneyBillWave,FaArrowRight,
} from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";

const features=[
{icon:<FaUniversity/>,title:"NMC Approved Universities",desc:"Choose from recognized medical universities accepted for Indian students."},
{icon:<FaMoneyBillWave/>,title:"Affordable MBBS",desc:"Low tuition fees with zero donation and transparent pricing."},
{icon:<FaGlobeAsia/>,title:"8 Study Destinations",desc:"Explore top universities across Kyrgyzstan, Russia, Kazakhstan and more."},
{icon:<FaPassport/>,title:"Visa Assistance",desc:"Complete visa documentation and travel support from our experts."},
{icon:<FaHandshake/>,title:"Official Partnerships",desc:"Direct university partnerships for faster admissions and reliable guidance."},
{icon:<FaUserGraduate/>,title:"End-to-End Guidance",desc:"From counselling to joining your university, we're with you at every step."},
];

export default function WhyChooseUs(){
return(
<section className="bg-slate-50 py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6 lg:px-10">
<div className="max-w-3xl mx-auto text-center">
<span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">WHY CHOOSE EDUABROAD</span>
<h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">Everything You Need For <span className="block text-blue-600">MBBS Abroad</span></h2>
<p className="mt-5 text-lg text-slate-600">From university selection to admission, visa and travel, our experts simplify your complete MBBS journey.</p>
</div>

<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{features.map(item=>(
<div key={item.title} className="group rounded-3xl bg-white p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-2xl group-hover:rotate-6 transition">{item.icon}</div>
<h3 className="mt-6 text-2xl font-bold text-slate-900">{item.title}</h3>
<p className="mt-4 text-slate-600 leading-7">{item.desc}</p>
<button className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-cyan-600">Learn More <FaArrowRight className="text-sm"/></button>
</div>
))}
</div>

<div className="mt-20 rounded-[32px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-10 text-center">
<h3 className="text-3xl font-bold text-white">Still Confused About MBBS Abroad?</h3>
<p className="mt-3 text-slate-300">Talk to our admission experts and get personalized counselling for free.</p>
<button onClick={()=>scrollToSection("counselling")} className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white hover:scale-105 transition">Book Free Consultation</button>
</div>
</div>
</section>
)}
