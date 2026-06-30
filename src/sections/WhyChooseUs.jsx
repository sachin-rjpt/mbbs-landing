import {
  FaGlobeAsia,FaUserGraduate,FaHandshake,FaUniversity,FaPassport,FaMoneyBillWave,FaArrowRight,
} from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";
import {
  whyChooseSection,
  features,
  whyChooseCTA,
} from "../content/whyChooseUs";
const iconMap = {
  university: <FaUniversity />,
  money: <FaMoneyBillWave />,
  globe: <FaGlobeAsia />,
  passport: <FaPassport />,
  handshake: <FaHandshake />,
  graduate: <FaUserGraduate />,
};
export default function WhyChooseUs(){
return(
<section className="bg-slate-50 py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6 lg:px-10">
<div className="max-w-3xl mx-auto text-center">
<span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">{whyChooseSection.badge}</span>
<h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">{whyChooseSection.title}<span className="block text-blue-600">{whyChooseSection.highlight}</span></h2>
<p className="mt-5 text-lg text-slate-600">{whyChooseSection.description}</p>
</div>

<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{features.map(item=>(
<div key={item.title} className="group flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl" >
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-2xl group-hover:rotate-6 transition">{iconMap[item.icon]}</div>
<h3 className="mt-6 text-2xl font-bold text-slate-900">{item.title}</h3>
<p className="mt-4 text-slate-600 leading-7">{item.desc}</p>
</div>
))}
</div>

<div className="mt-20 rounded-[32px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-10 text-center">
<h3 className="text-3xl font-bold text-white">{whyChooseCTA.title}</h3>
<p className="mt-3 text-slate-300">{whyChooseCTA.description}</p>
<button onClick={()=>scrollToSection("counselling")} className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white hover:scale-105 transition">{whyChooseCTA.button}</button>
</div>
</div>
</section>
)}
