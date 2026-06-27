 import {
  FaHospital,
  FaBook,
  FaUtensils,
  FaPlane,
  FaLock,
  FaMoneyBillWave,
} from "react-icons/fa";
export default function Benefits(){
    const card="flex flex-col py-16 px-8 bg-white items-start justify-center gap-4 hover:scale-105 transition-all duration-300";
    const Symbol="text-2xl font-semibold";
    const heading="section-card-title";
    const para="section-text";
const benefits = [
  {
    id: 1,
    title: "University Hospital Training",
    description:
      "All major Kyrgyz medical universities have affiliated teaching hospitals with high patient volume — giving students real clinical exposure from early years.",
    icon: FaHospital,
  },
  {
    id: 2,
    title: "NMC-Aligned Curriculum",
    description:
      "The MBBS curriculum in Kyrgyzstan is structured to align with NMC competency requirements, giving graduates a clear path to FMGE/NExT qualification.",
    icon: FaBook,
  },
  {
    id: 3,
    title: "Indian Community & Food",
    description:
      "Bishkek has a thriving Indian student community. Indian restaurants, grocery stores, and cultural associations ensure students feel at home from day one.",
    icon: FaUtensils,
  },
  {
    id: 4,
    title: "Easy Connectivity to India",
    description:
      "Direct and one-stop flights from Delhi, Mumbai, and other major Indian cities to Bishkek's Manas International Airport. Travel time under 5 hours.",
    icon: FaPlane,
  },
  {
    id: 5,
    title: "Safe, Stable Country",
    description:
      "Kyrgyzstan consistently ranks as one of the safest Central Asian countries for international students. Low crime, friendly locals, and stable governance.",
    icon: FaLock,
  },
  {
    id: 6,
    title: "Lowest Cost of Living",
    description:
      "Monthly living expenses in Bishkek average ₹12,000–18,000 — among the lowest of any MBBS abroad destination — making every rupee go further throughout your 6 years.",
    icon: FaMoneyBillWave,
  },
];
     const universityHighlights = [
  {
    id: 1,
    title: "TOTAL COST (6 YRS)",
    value: "₹18–25 Lakhs",
  },
  {
    id: 2,
    title: "DURATION",
    value: "6 Years",
  },
  {
    id: 3,
    title: "MEDIUM OF INSTRUCTION",
    value: "English",
  },
  {
    id: 4,
    title: "IELTS / TOEFL",
    value: "Not Required",
  },
  {
    id: 5,
    title: "NMC RECOGNITION",
    value: "Approved",
    hasIcon: true,
  },
  {
    id: 6,
    title: "INTAKE",
    value: "September / October",
  },
];
    return (
        <>
       <div className="bg-blue-100/30 p-8">
        <div className="flex flex-col items-start justify-center gap-2 m-8">
            <h5 className="section-eyebrow">WHY KYRGYZSTAN</h5>
            <h1 className="section-title">Why Kyrgyzstan is our Most Recommended Destination Right Now</h1>
            <div className="space-y-1">
            <p className="section-text">Of all the 8 countries we counsel for, Kyrgyzstan consistently offers the best value</p>
            <p className="section-text">--NMC-approved,English-medium,and under rupees 25 Lakhs total</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={card}>
                <div className={Symbol}>💰</div>
                <h2 className={heading}>₹18–25 Lakh Total</h2>
                <p className={para}>Complete your entire 6-year MBBS in Kyrgyzstan for under ₹25 Lakhs — including tuition, hostel, and food. No hidden costs, no capitation, no donation.</p>
            </div>
             <div className={card}>
                <div className={Symbol}>🏛️</div>
                <h2 className={heading}>NMC & WHO Approved</h2>
                <p className={para}>All our partner universities in Kyrgyzstan are recognised by India's National Medical Commission and the World Health Organisation — your degree is fully valid for FMGE/NExT.</p>
            </div>
             <div className={card}>
                <div className={Symbol}>🇬🇧</div>
                <h2 className={heading}>100% English Medium</h2>
                <p className={para}>Every lecture, practical, and exam in Kyrgyzstan's top medical universities is conducted entirely in English. No IELTS required. No language barrier to worry about.</p>
            </div>
             <div className={card}>
                <div className={Symbol}>📋</div>
                <h2 className={heading}>Simple Admission</h2>
                <p className={para}>NEET qualification + 10+2 PCB with 50% marks is all you need. No separate entrance exams, no interviews, no donations. The process is transparent and straightforward.</p>
            </div>
             <div className={card}>
                <div className={Symbol}>🌍</div>
                <h2 className={heading}>Indian-Friendly Environment</h2>
                <p className={para}>Bishkek has one of the largest Indian medical student communities in Central Asia. Indian food is widely available, the city is safe, and the culture is warm and welcoming.</p>
            </div>
             <div className={card}>
                <div className={Symbol}>🔬</div>
                <h2 className={heading}>Strong Clinical Training</h2>
                <p className={para}>Hands-on clinical training in university-affiliated hospitals from Year 2 onwards. Focused FMGE/NExT preparation embedded in the curriculum from final year.</p>
            </div>
        </div>
       </div>
       <div className="grid sm:grid-col-1 md:grid-cols-2  mx-4 my-8 gap-4">
           <div className="flex items-center justify-start flex-col gap-4">
            <div className="flex flex-row items-center flex-wrap justify-start gap-4">
                <h1 className="text-3xl font-semibold">KG</h1>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="section-title">Kyrgyzstan</h1>
                    <h3 className="section-eyebrow text-red-700">CENTRAL ASIA EDUABROAD PARTNER COUNTRY</h3>
                </div>
            </div>
             <p className="section-text">Kyrgyzstan is one of Central Asia's most affordable and welcoming MBBS destinations for Indian students. Located in the heart of Central Asia with the majestic Tian Shan mountains as a backdrop, the country offers a peaceful, student-focused environment. Bishkek — the capital — is a modern, safe city with a large Indian student community, Indian restaurants, and easy connectivity to India.</p>
             <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
               {universityHighlights.map((ele)=>(
                <div key={ele.id} className="flex  flex-col items-center justify-center flex-wrap  gap-2 m-1 border border-gray-200 p-2 hover:shadow-sm transition-all duration-300ms">
                    <p className="text-gray-700/70 text-sm">{ele.title}</p>
                    <h2 className="font-semibold">{ele.value}</h2>
                </div>
               ))}
             </div>
             <div className="flex items-center justify-center  border-l-red-700 border-l-4 bg-red-900/10 p-4 mr-8 ">
                <p className="section-text"><span className="section-strong text-red-700 mr-2">Bottom line</span>Kyrgyzstan delivers the NMC-approved, English-medium MBBS experience at the lowest total cost of any reputable destination — making it the smartest choice for budget-conscious Indian families who refuse to compromise on quality.</p>
             </div>
           </div>
           <div className="flex flex-col  items-center justify-center ">
             <h2 className="section-subtitle text-red-700">What Makes KYRGYZSTAN STAND OUT</h2>
             <div>
                {benefits.map((ele)=>(
                    <div className="flex flex-row gap-2 items-center justify-center m-4 border-b-1 p-4" key={ele.id}>
                      <ele.icon className="font-bold text-3xl"/>
                       <div>
                        <h2 className="font-semibold">{ele.title}</h2>
                        <p className="text-gray-700/70">{ele.description}</p>
                       </div>
                    </div>
                ))}
             </div>
           </div>
       </div>
       </>
    )
}