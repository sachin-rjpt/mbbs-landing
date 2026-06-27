const countries = [
  {
    id: 1,
    isPartner: true,
    notation: "KG",
    country: "Kyrgyzstan",
    slug: "kyrgyzstan",
  },
  {
    id: 2,
    isPartner: false,
    notation: "RU",
    country: "Russia",
    slug: "russia",
  },
  {
    id: 3,
    isPartner: false,
    notation: "GE",
    country: "Georgia",
    slug: "georgia",
  },
  {
    id: 4,
    isPartner: false,
    notation: "IT",
    country: "Italy",
    slug: "italy",
  },
  {
    id: 5,
    isPartner: false,
    notation: "PL",
    country: "Poland",
    slug: "poland",
  },
  {
    id: 6,
    isPartner: false,
    notation: "CN",
    country: "China",
    slug: "china",
  },
  {
    id: 7,
    isPartner: false,
    notation: "KZ",
    country: "Kazakhstan",
    slug: "kazakhstan",
  },
  {
    id: 8,
    isPartner: false,
    notation: "UZ",
    country: "Uzbekistan",
    slug: "uzbekistan",
  },
];

export default function Countries(){
    return(
       <div className="flex flex-col items-center justify-center m-4">
        <div className="flex items-center justify-center p-4">
            <p className="section-eyebrow text-center">WE COUNSEL FOR MBBS ACROSS 8 COUNTRIES -- FIND THE RIGHT FIT FOR YOUR PROFILE & BUDGET</p>
        </div>
        <div className="flex flex-wrap">
         {countries.map((ele)=>(
            <div key={ele.id} className={ele.isPartner?"flex items-center justify-center px-2 m-2 border rounded-sm bg-red-200/50 hover:scale-105 transition-all duration-300ms ":"flex items-center justify-center px-2 m-2 border rounded-sm bg-blue-100/50 hover:scale-105 transition-all duration-300ms "}>
                <span className="font-semibold m-2">{ele.notation}</span>
                <span className="section-strong">{ele.country}</span>
                 {ele.isPartner && (
        <span className="m-2 bg-red-100 text-red-600 px-2 py-1 rounded">
          ★ PARTNER
        </span>
      )}
            </div>
         ))}
        </div>
       </div>
    )
}