import {
  FaUniversity,
  FaGlobe,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";

const universities=[
{name:"Bishkek International Medical Institute",country:"Kyrgyzstan",fee:"₹4.5L / Year",ranking:"Top Medical University",approved:"NMC Approved"},
{name:"Kazan Federal University",country:"Russia",fee:"₹5.8L / Year",ranking:"World Ranked",approved:"NMC Approved"},
{name:"Tbilisi State Medical University",country:"Georgia",fee:"₹6.2L / Year",ranking:"Popular Among Indians",approved:"NMC Approved"},
];

export default function Universities(){
return(
<section id="universities" className="bg-slate-100 py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6 lg:px-10">

<div className="max-w-3xl mx-auto text-center">
<span className="inline-block rounded-full bg-blue-100 text-blue-700 font-semibold px-4 py-2 text-sm">TOP UNIVERSITIES</span>
<h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
Find The <span className="text-blue-600">Right University</span>
</h2>
<p className="mt-5 text-lg text-slate-600">
Compare top NMC-approved universities with transparent fees and expert guidance.
</p>
</div>

<div className="mt-16 grid gap-8 lg:grid-cols-3">
{universities.map((u)=>(
<div key={u.name} className="group rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all p-8">
<div className="flex justify-between items-start">
<div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl">
<FaUniversity/>
</div>
<span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
{u.approved}
</span>
</div>

<h3 className="mt-6 text-2xl font-bold text-slate-900 leading-snug">
{u.name}
</h3>

<div className="mt-6 space-y-4">
<div className="flex items-center gap-3 text-slate-600">
<FaGlobe className="text-cyan-600"/>
<span>{u.country}</span>
</div>

<div className="flex items-center gap-3 text-slate-600">
<FaStar className="text-yellow-500"/>
<span>{u.ranking}</span>
</div>

<div className="flex items-center gap-3 text-slate-600">
<FaCheckCircle className="text-green-600"/>
<span>{u.fee}</span>
</div>
</div>

<button
onClick={()=>scrollToSection("counselling")}
className="mt-8 w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 flex justify-center items-center gap-2 hover:scale-[1.02] transition"
>
Get Admission Guidance
<FaArrowRight/>
</button>
</div>
))}
</div>

<div className="mt-16 rounded-[32px] bg-white border border-slate-200 shadow-lg p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-3xl font-bold text-slate-900">
Not Sure Which University Fits You?
</h3>
<p className="mt-3 text-slate-600 max-w-2xl">
Our counsellors compare universities based on your NEET score, budget, preferred country and career goals.
</p>
</div>

<button
onClick={()=>scrollToSection("counselling")}
className="rounded-full bg-slate-900 hover:bg-blue-700 transition text-white px-8 py-4 font-semibold whitespace-nowrap"
>
Talk To An Expert
</button>

</div>

</div>
</section>
)}
