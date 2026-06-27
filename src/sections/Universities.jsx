export default function Universities(){
    const universities = [
  {
    id: 1,
    name: "Bishkek International Medical Institute",
    badges: ["NMC", "WHO", "ENGLISH", "EDUABROAD PARTNER"],
    description:
      "One of Kyrgyzstan's premier NMC-recognised medical universities, BIMI is renowned for its structured English-medium MBBS program, strong FMGE/NExT preparation support, and modern teaching infrastructure. The university's teaching hospital provides early clinical exposure that builds exam-ready doctors.",
    isPartner: true,
    states: [
      "UTTAR PRADESH",
      "MADHYA PRADESH",
      "UTTARAKHAND",
    ],
  },
  {
    id: 2,
    name: "Osh State University – Medical Faculty",
    badges: ["NMC", "WHO", "ENGLISH", "GOVT."],
    description:
      "A government university with decades of experience in medical education, Osh State University's medical faculty offers a well-structured, NMC-aligned MBBS program. Located in Osh — Kyrgyzstan's second-largest city — with strong clinical training facilities and an active Indian student association.",
  },
  {
    id: 3,
    name: "International School of Medicine, Bishkek",
    badges: ["NMC", "WHO", "ENGLISH"],
    description:
      "ISM Bishkek is known for its modern campus, international faculty, and a globally-oriented medical curriculum. Affiliated with the University of Central Asia, it attracts students from across Asia and has a strong track record for FMGE pass rates among Indian graduates.",
  },
  {
    id: 4,
    name: "Kyrgyz State Medical Academy",
    badges: ["NMC", "WHO", "GOVT.", "ENGLISH"],
    description:
      "The oldest and most established medical institution in Kyrgyzstan, KSMA has been training doctors since 1939. A government institution with the highest clinical training exposure in the country, strong infrastructure, and NMC approval making it a reliable and respected choice.",
  },
];
const badgeColors = {
  NMC: "bg-[#E7F6EC] text-[#0B8A43] border-[#A7D8B8]",

  WHO: "bg-[#EEF3FF] text-[#2453D4] border-[#BFD0FF]",

  ENGLISH:
    "bg-[#FFF5E5] text-[#A56A00] border-[#E8C88B]",

  "GOVT.":
    "bg-[#FFF0F0] text-[#C62828] border-[#F0B6B6]",

  "EDUABROAD PARTNER":
    "bg-[#FFF0F0] text-[#B71C1C] border-[#F0B6B6]",
};
const badgeColors2 = {
  NMC: "bg-green-50 text-green-700 border-green-300",
  WHO: "bg-blue-50 text-blue-700 border-blue-300",
  ENGLISH: "bg-yellow-50 text-yellow-700 border-yellow-300",
  PUBLIC: "bg-red-50 text-red-700 border-red-300",
  GOVT: "bg-red-50 text-red-700 border-red-300",
};
const countries = [
  {
    code: "RU",
    country: "Russia",
    tagline: "MOST POPULAR • TOP FMGE TRACK RECORD",

    universities: [
      {
        name: "Orenburg State Medical University",
        badges: ["NMC", "WHO", "ENGLISH"]
      },
      {
        name: "Tver State Medical University",
        badges: ["NMC", "WHO", "ENGLISH"]
      },
      {
        name: "Perm State Medical University",
        badges: ["NMC", "WHO", "ENGLISH"]
      },
      {
        name: "Kursk State Medical University",
        badges: ["NMC", "WHO", "ENGLISH"]
      },
      {
        name: "Kazan Federal University",
        badges: ["NMC", "WHO", "GOVT."]
      }
    ],

    cost: "₹22–30 L",
    duration: "6 Years",
    language: "English"
  },

  {
    code: "GE",
    country: "Georgia",
    tagline: "EUROPEAN FEEL • SAFE • STUDENT FRIENDLY",

    universities: [
      {
        name: "SEU — Georgian National University",
        badges: ["NMC", "WHO", "ENGLISH"]
      },
      {
        name: "SEU Avicenna Medical College",
        badges: ["NMC", "WHO", "ENGLISH"]
      },
      {
        name: "East West University of Georgia",
        badges: ["NMC", "WHO", "ENGLISH"]
      },
      {
        name: "Caucasus International University",
        badges: ["NMC", "WHO", "ENGLISH"]
      }
    ],

    cost: "₹30–40 L",
    duration: "6 Years",
    language: "English"
  },

  {
    code: "PL",
    country: "Poland",
    tagline: "EU DEGREE • CENTRAL EUROPEAN HUB",

    universities: [
      {
        name: "Medical University of Gdańsk",
        badges: ["NMC", "WHO", "PUBLIC"]
      },
      {
        name: "Medical University of Warsaw",
        badges: ["NMC", "WHO", "PUBLIC"]
      },
      {
        name: "Jagiellonian University Medical College",
        badges: ["NMC", "WHO", "PUBLIC"]
      },
      {
        name: "Medical University of Wrocław",
        badges: ["NMC", "WHO", "PUBLIC"]
      }
    ],

    cost: "₹40–55 L",
    duration: "6 Years",
    language: "English"
  },

  {
    code: "CN",
    country: "China",
    tagline: "WORLD-CLASS INFRASTRUCTURE • RESEARCH-DRIVEN",

    universities: [
      {
        name: "Zhejiang University School of Medicine",
        badges: ["NMC", "WHO", "ENGLISH"]
      },
      {
        name: "Dalian Medical University",
        badges: ["NMC", "WHO", "ENGLISH"]
      },
      {
        name: "Nanjing Medical University",
        badges: ["NMC", "WHO", "ENGLISH"]
      },
      {
        name: "China Medical University",
        badges: ["NMC", "WHO", "GOVT."]
      }
    ],

    cost: "₹28–42 L",
    duration: "6 Years",
    language: "English"
  },

  {
    code: "IT",
    country: "Italy",
    tagline: "EU STANDARD • PUBLIC UNIVERSITIES • IMAT",

    universities: [
      {
        name: "University of Bologna",
        badges: ["WHO", "PUBLIC", "ENGLISH"]
      },
      {
        name: "University of Milan",
        badges: ["WHO", "PUBLIC", "ENGLISH"]
      },
      {
        name: "University of Padua",
        badges: ["WHO", "PUBLIC", "ENGLISH"]
      },
      {
        name: "Sapienza University of Rome",
        badges: ["WHO", "PUBLIC", "ENGLISH"]
      },
      {
        name: "University of Turin",
        badges: ["WHO", "PUBLIC", "ENGLISH"]
      },
      {
        name: "University of Naples Federico II",
        badges: ["WHO", "PUBLIC", "ENGLISH"]
      }
    ],

    cost: "₹35–50 L",
    duration: "6 Years",
    language: "IMAT Req."
  },
  {
  code: "UZ",
  country: "Uzbekistan",
  tagline: "MOST AFFORDABLE • RISING FAST",

  universities: [
    {
      name: "Samarkand State Medical University",
      badges: ["NMC", "WHO", "GOVT."]
    },
    {
      name: "Tashkent Medical Academy",
      badges: ["NMC", "WHO", "GOVT."]
    },
    {
      name: "Bukhara State Medical Institute",
      badges: ["NMC", "WHO", "GOVT."]
    }
  ],

  cost: "₹18–24 L",
  duration: "6 Years",
  language: "English"
},

{
  code: "KZ",
  country: "Kazakhstan",
  tagline: "AFFORDABLE • GOVT. UNIVERSITIES • STABLE",

  universities: [
    {
      name: "Kazakh National Medical University",
      badges: ["NMC", "WHO", "GOVT."]
    },
    {
      name: "Al-Farabi Kazakh National University",
      badges: ["NMC", "WHO", "GOVT."]
    },
    {
      name: "Astana Medical University",
      badges: ["NMC", "WHO", "GOVT."]
    }
  ],

  cost: "₹20–28 L",
  duration: "5–6 Years",
  language: "English"
}
];
    return (
        <>
         <div className="flex flex-col bg-blue-100/40 py-16">
        <div className="flex flex-col items-start justify-center gap-4 px-8">
            <h3 className="text-red-800">PARTNER UNIVERSITIES</h3>
            <h1 className="text-3xl font-bold font-serif">NMC-Approved Universities in Kyrgyzstan</h1>
            <p className="text-gray-700/70">All universities listed are recognised by India's NMC and the WHO. EduAbroad holds a direct institutional partnership with Bishkek International Medical Institute.</p>
        </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 m-8">

          {universities.map((university, index) => (
            <div
              key={university.id}
              className={`
                relative
                bg-white
                p-8
                border
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                ${
                  university.isPartner
                    ? "border-red-300 border-t-4"
                    : "border-slate-200"
                }
              `}
            >

              {/* Number */}
              <span
                className="
                  absolute
                  top-4
                  right-6
                  text-6xl
                  text-slate-100
                  italic
                "
              >
                {index + 1}
              </span>

              {/* Title */}
              <h2 className="text-3xl font-serif text-slate-900">
                {university.name}
              </h2>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-5">
                {university.badges.map((badge) => (
                  <span
                    key={badge}
                    className={`
                        px-3
                        py-2
                        text-xs
                        font-semibold
                        border
                        ${badgeColors[badge]}
                        `}
                        >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mt-6 text-slate-500 leading-8">
                {university.description}
              </p>

              {/* Partner Section */}
              {university.isPartner && (
                <div className="mt-8 p-6 border border-red-200 border-dashed bg-red-50">

                  <h4 className="text-red-600 text-sm tracking-widest font-semibold">
                    ★ OFFICIAL EDUABROAD DIRECT PARTNERSHIP
                  </h4>

                  <p className="mt-4 text-slate-600 leading-8">
                  EduAbroad holds <b>a direct institutional partnership</b> with BIMI — giving students from select states exclusive access to <b>priority seat allocation, dedicated counsellor support, assisted documentation, and on-ground liaison </b>throughout the 6-year program.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-5">
                    {university.states.map((state) => (
                      <span
                        key={state}
                        className="
                          px-4
                          py-2
                          border
                          border-red-300
                          text-red-600
                          text-sm
                          bg-red-800/10
                        "
                      >
                        {state}
                      </span>
                    ))}
                  </div>

                </div>
              )}
            </div>
          ))}

        </div>
      </div> 
         <div className="flex flex-col bg-blue-100/40 py-16">
        <div className="flex flex-col items-start justify-center gap-4 px-8">
            <h3 className="text-red-800">All Destinations</h3>
            <h1 className="text-3xl font-bold font-serif">Universities Across All 8 Countries We Counsel For</h1>
            <p className="text-gray-700/70">EduAbroad guides students to NMC-approved, WHO-recognised universities across 8 countries. Here are the institutions we actively counsel for — find the right fit for your profile and budget.</p>
        </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-8 gap-2">

        {countries.map((country) => (
          <div
            key={country.code}
            className="
              bg-white
              border
              border-slate-200
              p-8
              min-h-[450px]
            "
          >

            {/* HEADER */}

            <div className="pb-4 border-b border-slate-200">

              <div className="flex items-center gap-3">

                <span
                  className="
                    text-lg
                    font-medium
                    text-slate-800
                  "
                >
                  {country.code}
                </span>

                <h3
                  className="
                    text-2xl
                    font-serif
                    text-slate-900
                  "
                >
                  {country.country}
                </h3>

              </div>

              <p
                className="
                  mt-2
                  text-[11px]
                  tracking-[2px]
                  uppercase
                  text-red-700
                  font-semibold
                "
              >
                {country.tagline}
              </p>

            </div>

            {/* UNIVERSITIES */}

            <div className="mt-6">

              {country.universities.map((university) => (

                <div
                  key={university.name}
                  className="
                    py-4
                    border-b
                    border-slate-200
                  "
                >

                  <h4
                    className="
                      text-sm
                      text-slate-700
                    "
                  >
                    {university.name}
                  </h4>

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-3
                    "
                  >

                    {university.badges.map((badge) => (

                      <span
                        key={badge}
                        className={`
                          px-2
                          py-1
                          text-[10px]
                          font-semibold
                          border
                          tracking-wide
                          ${badgeColors2[badge]}
                        `}
                      >
                        {badge}
                      </span>

                    ))}

                  </div>

                </div>

              ))}
            </div>

            {/* FOOTER */}

            <div
              className="
                flex
                flex-wrap
                gap-4
                mt-5
                text-xs
                text-slate-500
              "
            >

              <span>
                🔥 {country.cost}
              </span>

              <span>
                ⏱ {country.duration}
              </span>

              <span>
                🌐 {country.language}
              </span>

            </div>

          </div>
        ))}

      </div>
      <p className="text-gray-700/70 p-8 ">Not sure which country suits your NEET score and budget? Our counsellors will guide you to the right fit — free of charge. <span className="text-red-800 font-semibold">Book a session →</span></p>
         </div>
      </>
    )
}