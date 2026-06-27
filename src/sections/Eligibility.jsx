export default function Eligibility(){
    const eligibilityData = [
  {
    id: 1,
    title: "NEET Qualified",
    description:
      "A valid NEET score is mandatory as per NMC regulations for all Indian students seeking to study MBBS in Kyrgyzstan or any country abroad.",
    icon: "✓",
  },
  {
    id: 2,
    title: "10+2 with PCB — 50% Marks",
    description:
      "Physics, Chemistry & Biology in Class 12 with a minimum aggregate of 50% (40% for SC/ST/OBC as per reservation norms).",
    icon: "✓",
  },
  {
    id: 3,
    title: "Age: 17 Years or Above",
    description:
      "Students must be at least 17 years of age on or before 31st December of the year of admission to Kyrgyzstan.",
    icon: "✓",
  },
  {
    id: 4,
    title: "Valid Passport",
    description:
      "A valid Indian passport with a minimum 18 months of validity at the time of application is required for Kyrgyzstan student visa processing.",
    icon: "✓",
  },
  {
    id: 5,
    title: "Medical Fitness Certificate",
    description:
      "A fitness certificate from a registered medical practitioner confirming the student is in good health — required by Kyrgyz university admissions.",
    icon: "✓",
  },
  {
    id: 6,
    title: "No IELTS / TOEFL Required",
    description:
      "Kyrgyz medical universities conduct classes entirely in English and do not require IELTS or TOEFL scores for Indian student admissions.",
    icon: "✓",
  },
];
 const admissionProcessData = [
  {
    step: 1,
    title: "Free Counselling Session",
    description:
      "We assess your NEET score, budget, and state to recommend the right Kyrgyzstan university — with priority BIMI seats for students from UP, MP, and Uttarakhand.",
  },
  {
    step: 2,
    title: "University Application",
    description:
      "We prepare and submit your complete application directly to our partner Kyrgyzstan university — including BIMI for partnered state students.",
  },
  {
    step: 3,
    title: "Offer Letter & Fee Payment",
    description:
      "Receive your official offer letter within 7–10 days. We guide you through structured fee payment and transparent cost planning for all 6 years.",
  },
  {
    step: 4,
    title: "Kyrgyzstan Visa & Travel",
    description:
      "Our team handles your Kyrgyzstan student visa documentation end-to-end, travel booking, and a detailed pre-departure orientation session.",
  },
  {
    step: 5,
    title: "On-Ground Support in Bishkek",
    description:
      "Airport pickup, university registration, hostel setup, and ongoing support throughout your 6 years — including FMGE/NExT preparation guidance in final year.",
  },
];
    return(
       <div className="grid grid-cols-1 md:grid-cols-2  px-6 gap-8 bg-blue-100/40">
        <div className="flex flex-col items-start justify-start gap-4">
          <h3 className="section-eyebrow">WHO CAN APPLY</h3>
          <h1 className="section-title">Eligibility for MBBS in Kyrgyzstan</h1>
          <div className="flex flex-col items-center justify-center gap-2">
           {eligibilityData.map((ele)=>(
            <div className="flex flex-row items-center gap-2 border-b-1 border-b-gray-300" key={ele.id}>
              <h1 className="bg-red-800">{ele.icon}</h1>
              <div className="flex flex-col items-start justify-center flex-wrap p-4 gap-4">
                <h2 className="section-card-title">{ele.title}</h2>
                <p className="section-text">{ele.description}</p>
              </div>
            </div>
           ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <h3 className="section-eyebrow">HOW IT WORKS</h3>
          <h1 className="section-title">Our Kyrgyzstan Admission Process</h1>
          <div className="flex flex-col items-center justify-center gap-2">
           {admissionProcessData.map((ele)=>(
            <div className="flex flex-row items-center gap-2 border-b-1 border-b-gray-300" key={ele.step}>
              <h1 className="text-red-800 text-xl">{ele.step}</h1>
              <div className="flex flex-col items-start justify-center flex-wrap p-4 gap-4">
                <h2 className="section-card-title">{ele.title}</h2>
                <p className="section-text">{ele.description}</p>
              </div>
            </div>
           ))}
          </div>
        </div>
       </div>
    )
}