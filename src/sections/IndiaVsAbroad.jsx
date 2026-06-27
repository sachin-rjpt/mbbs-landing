export default function IndiaVsAbroad() {
    const comparisonData = [
  {
    label: "TOTAL COST",
    indiaTitle: "₹80 L – ₹1.5 Crore",
    indiaDesc:
      "Tuition + capitation + management quota fees over 5.5 years",
    abroadTitle: "₹18 L – ₹55 Lakhs",
    abroadDesc:
      "All-inclusive over 6 years depending on country; Kyrgyzstan from ₹18L",
    indiaHighlight: true,
    abroadHighlight: true,
  },
  {
    label: "SEATS & COMPETITION",
    indiaTitle: "20 Lakh+ compete for ~1 Lakh seats",
    indiaDesc: "Acceptance rate under 5% in government colleges",
    abroadTitle: "Open admissions with NEET + PCB 50%",
    abroadDesc: "No rank cut-offs, no management quota battles",
    indiaHighlight: true,
    abroadHighlight: true,
  },
  {
    label: "HIDDEN FEES",
    indiaTitle: "Donations up to ₹50–80 Lakhs",
    indiaDesc: "Unofficial capitation fees are common in private colleges",
    abroadTitle: "Zero. No capitation, no donation",
    abroadDesc:
      "Fee structure is fixed, transparent, and published upfront",
    indiaHighlight: true,
    abroadHighlight: true,
  },
  {
    label: "DURATION",
    indiaTitle: "5.5 Years",
    indiaDesc: "Plus 1 year mandatory rotating internship",
    abroadTitle: "6 Years",
    abroadDesc:
      "Internship can be completed in India after returning",
  },
  {
    label: "DEGREE VALIDITY",
    indiaTitle: "India only",
    indiaDesc:
      "Degree valid in India; additional exams needed for global practice",
    abroadTitle: "India + Global (NMC + WHO recognised)",
    abroadDesc:
      "Valid for FMGE/NExT in India; pathway to practice in USA, UK, EU",
    abroadHighlight: true,
  },
  {
    label: "ADMISSION STRESS",
    indiaTitle: "Extreme stress, high rejection risk",
    indiaDesc:
      "NEET rank pressure, limited seats, repeated attempts common",
    abroadTitle: "Simple, merit-based, stress-free",
    abroadDesc:
      "NEET + documents — offer letter in 7–15 days, no repeat attempts",
    indiaHighlight: true,
    abroadHighlight: true,
  },
  {
    label: "GLOBAL EXPOSURE",
    indiaTitle: "Single-country exposure",
    indiaDesc:
      "Classmates from same region; limited global network",
    abroadTitle: "50+ nationalities in class",
    abroadDesc:
      "Global medical network, international clinical mindset from day one",
    abroadHighlight: true,
  },
];
  return (
    <section className="bg-[#f7f9fc] py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-[11px] font-semibold tracking-[3px] text-red-700 uppercase mb-4">
            India vs Abroad
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1f4d] leading-tight">
            MBBS in India vs
            <br />
            MBBS Abroad — The Real Picture
          </h2>

          <p className="mt-5 text-slate-500 leading-relaxed">
            Before you decide, see what the numbers and ground realities
            actually say. No bias — just facts.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block border border-slate-200 bg-white overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_80px_1fr]">
            <div className="p-6 border-r border-slate-200 bg-white">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-serif text-[#0b1f4d]">
                  IN
                </span>

                <div>
                  <h3 className="text-2xl font-serif text-[#0b1f4d]">
                    MBBS in India
                  </h3>
                  <p className="text-xs text-slate-500">
                    Private Medical Colleges • 2026 Reality
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center border-r border-slate-200 bg-slate-50 font-serif text-xl text-slate-500">
              VS
            </div>

            <div className="p-6 bg-[#fff7f7]">
              <div className="flex items-center gap-4">
                <span className="text-3xl">🌍</span>

                <div>
                  <h3 className="text-2xl font-serif text-[#0b1f4d]">
                    MBBS Abroad
                  </h3>
                  <p className="text-xs text-orange-600">
                    NMC-Approved • Russia, Georgia, Kyrgyzstan & More
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_80px_1fr] border-t border-slate-200"
            >
              <div className="p-6">
                <h4
                  className={`font-medium ${
                    item.indiaHighlight
                      ? "text-red-600"
                      : "text-[#0b1f4d]"
                  }`}
                >
                  {item.indiaTitle}
                </h4>

                <p className="text-sm text-slate-500 mt-1">
                  {item.indiaDesc}
                </p>
              </div>

              <div className="border-x border-slate-200 bg-slate-50 flex items-center justify-center px-2">
                <span className="text-[10px] font-bold tracking-[2px] text-center text-slate-600">
                  {item.label}
                </span>
              </div>

              <div className="p-6 bg-[#f5fdff]">
                <h4
                  className={`font-medium ${
                    item.abroadHighlight
                      ? "text-green-700"
                      : "text-[#0b1f4d]"
                  }`}
                >
                  {item.abroadTitle}
                </h4>

                <p className="text-sm text-slate-500 mt-1">
                  {item.abroadDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-5">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="px-4 py-3 bg-slate-100 text-center text-xs font-bold tracking-[2px] text-slate-600">
                {item.label}
              </div>

              <div className="grid md:grid-cols-2">
                <div className="p-5 border-b md:border-b-0 md:border-r border-slate-200">
                  <span className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-700">
                    INDIA
                  </span>

                  <h4
                    className={`font-semibold ${
                      item.indiaHighlight
                        ? "text-red-600"
                        : "text-[#0b1f4d]"
                    }`}
                  >
                    {item.indiaTitle}
                  </h4>

                  <p className="text-sm text-slate-500 mt-2">
                    {item.indiaDesc}
                  </p>
                </div>

                <div className="p-5 bg-cyan-50">
                  <span className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                    ABROAD
                  </span>

                  <h4
                    className={`font-semibold ${
                      item.abroadHighlight
                        ? "text-green-700"
                        : "text-[#0b1f4d]"
                    }`}
                  >
                    {item.abroadTitle}
                  </h4>

                  <p className="text-sm text-slate-500 mt-2">
                    {item.abroadDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-xs text-center text-slate-500 mt-8 leading-relaxed">
          * India fee data based on average private medical college costs
          2025–26. Abroad data based on partner university estimates.
          Government MBBS seats in India are excellent but extremely
          limited — this comparison focuses on the route most students
          eventually take.
        </p>
      </div>
    </section>
  );
}