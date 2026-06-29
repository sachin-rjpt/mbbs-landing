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

const quickLinks=[
"Home",
"Countries",
"Universities",
"Admission Process",
"FAQ",
"Contact",
];

const countries=[
"Kyrgyzstan",
"Russia",
"Kazakhstan",
"Georgia",
"China",
"Italy",
];

export default function Footer(){

const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"});

return(
<footer className="bg-slate-950 text-white">

<div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

<div>
<h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
EduAbroad
</h2>

<p className="mt-5 leading-7 text-slate-400">
Helping students achieve their dream of studying MBBS abroad through trusted guidance, transparent admissions and complete support.
</p>

<div className="mt-6 flex gap-3">
{[
<FaFacebookF/>,
<FaInstagram/>,
<FaLinkedinIn/>,
<FaYoutube/>
].map((icon,index)=>(
<button key={index} className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 transition">
{icon}
</button>
))}
</div>
</div>

<div>
<h3 className="text-xl font-bold">Quick Links</h3>
<ul className="mt-5 space-y-3">
{quickLinks.map(link=>(
<li key={link}>
<button className="text-slate-400 hover:text-cyan-400 transition">
{link}
</button>
</li>
))}
</ul>
</div>

<div>
<h3 className="text-xl font-bold">Study Destinations</h3>
<ul className="mt-5 space-y-3">
{countries.map(country=>(
<li key={country} className="text-slate-400">
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
<p className="text-slate-400">+91 XXXXX XXXXX</p>
</div>
</div>

<div className="flex gap-3">
<FaEnvelope className="mt-1 text-cyan-400"/>
<div>
<p className="text-slate-400">info@eduabroad.com</p>
</div>
</div>

<div className="flex gap-3">
<FaMapMarkerAlt className="mt-1 text-cyan-400"/>
<div>
<p className="text-slate-400">
Your Office Address
</p>
</div>
</div>

</div>

</div>

</div>

<div className="mt-14 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

<p className="text-slate-500 text-center md:text-left">
© {new Date().getFullYear()} EduAbroad. All Rights Reserved.
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
