import { useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobeAsia,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import {
  counsellingSection,
  counsellingBenefits,
  preferredCountries,
  counsellingForm,
} from "../content/counselling";

export default function Counselling(){

const [form,setForm]=useState({
name:"",
phone:"",
email:"",
country:"",
message:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit=(e)=>{
e.preventDefault();
console.log(form);
// TODO: API Call
};

return(
<section id="counselling" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6 lg:px-10">

<div className="grid lg:grid-cols-2 gap-14 items-center">

<div>
<span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
{counsellingSection.badge}
</span>

<h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">
{counsellingSection.title}
<span className="block text-cyan-400">{counsellingSection.highlight}</span>
</h2>

<p className="mt-6 text-lg text-slate-300 leading-8">
 {counsellingSection.description}
</p>

<div className="mt-10 space-y-5">
{counsellingBenefits.map(item=>(
<div key={item} className="flex items-center gap-3 text-slate-200">
<FaCheckCircle className="text-cyan-400"/>
<span>{item}</span>
</div>
))}
</div>
</div>

<div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl">

<h3 className="text-3xl font-bold text-white">
{counsellingForm.title}
</h3>

<p className="mt-2 text-slate-300">
{counsellingForm.description}
</p>

<form onSubmit={handleSubmit} className="mt-8 space-y-5">

<div className="relative">
<FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"/>
<input
name="name"
value={form.name}
onChange={handleChange}
placeholder="Full Name"
className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
/>
</div>

<div className="relative">
<FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"/>
<input
name="phone"
value={form.phone}
onChange={handleChange}
placeholder="Phone Number"
className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
/>
</div>

<div className="relative">
<FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"/>
<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Email Address"
className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
/>
</div>

<div className="relative">
<FaGlobeAsia className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"/>
<select
name="country"
value={form.country}
onChange={handleChange}
className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
>
<option value="" className="text-black">Preferred Study Destination</option>
{preferredCountries.map(c=><option key={c} value={c} className="text-black">{c}</option>)}
</select>
</div>

<textarea
rows="4"
name="message"
value={form.message}
onChange={handleChange}
placeholder="Tell us about your NEET qualification, preferred destination, budget, or any questions you have..."
className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 resize-none"
/>

<button
type="submit"
className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white transition hover:scale-[1.02]"
>
{counsellingForm.button}
<FaPaperPlane/>
</button>
</form>
<div className="flex flex-col items-center justify-center my-2">
<p className="text-white">Our counsellor will contact you shortly.</p>
<div className="mt-5 flex flex-wrap gap-2">
  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
    Free Guidance
  </span>

  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
    No Hidden Charges
  </span>

  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
    Fast Response
  </span>
</div>
</div>
</div>
</div>
</div>
</section>
);
}
