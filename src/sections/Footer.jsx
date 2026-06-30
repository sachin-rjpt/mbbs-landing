import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { footerContent } from "../content/footer";
export default function Footer(){

const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"});

return(
<footer className="bg-slate-950 text-white">

<div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

<div>
<h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
{footerContent.brand.name}
</h2>

<p className="mt-5 leading-7 text-slate-400">
{footerContent.brand.tagline}
</p>

<div className="mt-6 flex gap-3">
{[
<FaFacebookF/>,
<FaInstagram/>,
<FaLinkedinIn/>,
<FaYoutube/>
].map((icon,index)=>(
<a
  href="#"
  className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:-translate-y-1 hover:bg-cyan-500"
>
  {icon}
</a>
))}
</div>
</div>

<div>
<h3 className="text-xl font-bold">Quick Links</h3>
<ul className="mt-5 space-y-3">
{footerContent.quickLinks.map(link=>(
<li key={link}>
<button className="group flex items-center gap-2 text-slate-400 transition hover:text-cyan-400">
  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 opacity-0 transition group-hover:opacity-100"></span>
  {link}
</button>
</li>
))}
</ul>
</div>

<div>
<h3 className="text-xl font-bold">Study Destinations</h3>
<ul className="mt-5 space-y-3">
{footerContent.countries.map(country=>(
<li className="flex items-center gap-2 text-slate-400">
  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
  {country}
</li>
))}
</ul>
</div>

<div>
<h3 className="text-xl font-bold">Contact</h3>

<div className="mt-5 space-y-4">

<div className="flex gap-3">
<FaPhoneAlt className="mt-1 text-cyan-400"/>
<div>
<p className="text-slate-400">{footerContent.contact.phone}</p>
</div>
</div>

<div className="flex gap-3">
<FaEnvelope className="mt-1 text-cyan-400"/>
<div>
<p className="text-slate-400">{footerContent.contact.email}</p>
</div>
</div>

<div className="flex gap-3">
<FaMapMarkerAlt className="mt-1 text-cyan-400"/>
<div>
<p className="text-slate-400">
{footerContent.contact.address}
</p>
</div>
</div>

</div>

</div>

</div>

<div className="mt-14 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

<p className="text-slate-500 text-center md:text-left">
© {new Date().getFullYear()}{footerContent.copyright}
</p>

<button
onClick={scrollTop}
className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold hover:scale-105 transition"
>
Back To Top
<FaArrowUp/>
</button>

</div>

</div>

</footer>
);
}
