import { useState } from "react";
export default function Counselling() {
const data = {
  badge: "FREE COUNSELLING — MBBS ABROAD",

  heading: {
    line1: "Begin Your Journey of",
    highlight: "Becoming a Global Citizen as a Doctor",
  },

  description:
    "Our counsellors — alumni of Harvard, Cambridge & IIMs — have guided thousands of students to NMC-approved medical universities across 8 countries. Students from Uttar Pradesh, Madhya Pradesh, and Uttarakhand get direct priority access to Bishkek International Medical Institute through our exclusive partnership. Your first session is completely free.",

  highlights: [
    "Uttar Pradesh",
    "Madhya Pradesh",
    "Uttarakhand",
  ],

  info: "📍 Serving students across India | WhatsApp response within 2 hours",

  formFields: [
    {
      name: "studentName",
      placeholder: "Student Name",
      type: "text",
    },
    {
      name: "phone",
      placeholder: "Phone / WhatsApp",
      type: "tel",
    },
    {
      name: "neetScore",
      placeholder: "NEET Score",
      type: "text",
    },
    {
      name: "city",
      placeholder: "City / State",
      type: "text",
    },
    {
      name: "country",
      placeholder: "Preferred Country / University",
      type: "text",
      fullWidth: true,
    },
  ],

  buttonText: "BOOK FREE COUNSELLING FOR MBBS ABROAD →",

  footer: {
    company: "EduAbroad",
    tagline:
      "Harvard–Cambridge & IIM Alumni Run · Official Cambridge IELTS Learning Partner",

    stats: [
      "2,000+ Universities",
      "30+ Countries",
      "1,50,000+ Courses",
      "20+ Years Experience",
    ],

    copyright:
      "© 2026 EduAbroad. All rights reserved.",
  },
};
const  [formData,setFormData]=useState({
    studentName:"",
    phone:"",
    neetScore:"",
    city:"",
    country:"",
});
const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }));
}
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    alert("Submitted Successfully");
    setFormData(() => ({
      studentName: "",
      phone: "",
      neetScore: "",
      city: "",
      country: "",
    }));
};
  return (
    <section className="bg-[#0F214D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="section-eyebrow mb-8 text-red-300">
              {data.badge}
            </p>

            <h2 className="section-title text-white text-4xl lg:text-6xl">
              <span className="text-white">
              {data.heading.line1}
              </span>
              <span className="block italic text-[#D11616] mt-2">
                {data.heading.highlight}
              </span>
            </h2>

            <p className="mt-10 section-text text-slate-300">
              {data.description}
            </p>

            <p className="mt-8 text-sm md:text-base text-slate-400">
              {data.info}
            </p>
          </div>

          {/* Right Form */}
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                {data.formFields.slice(0, 4).map((field) => (
                  <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name] ?? ""}
                    onChange={handleChange}
                    className="w-full bg-[#22335E] border border-[#3B4A71] px-5 py-5 text-white placeholder:text-slate-400 outline-none focus:border-red-500"
                    required
                  />
                ))}
              </div>

              <input
                name={data.formFields[4].name}
                type="text"
                placeholder={data.formFields[4].placeholder}
                value={formData[data.formFields[4].name] ?? ""}
                onChange={handleChange}
                required
                className="w-full bg-[#22335E] border border-[#3B4A71] px-5 py-5 text-white placeholder:text-slate-400 outline-none focus:border-red-500"
              />

              <button
                type="submit"
                className="w-full bg-[#C70000] hover:bg-[#A80000] transition-all duration-300 py-5 text-sm md:text-base font-semibold tracking-[2px] uppercase"
              >
                {data.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#26385F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <h3 className="section-subtitle">
              <span className="text-white">{data.footer.company}</span>
            </h3>

            <p className="text-slate-400 mt-3 text-sm md:text-base">
              {data.footer.tagline}
            </p>
          </div>

          <div className="lg:text-right">
            <div className="flex flex-wrap justify-start lg:justify-end gap-3 text-slate-300">
              {data.footer.stats.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <p className="text-slate-500 mt-4">
              {data.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}