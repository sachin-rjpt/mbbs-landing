import {
  FaRupeeSign,
  FaCalculator,
  FaAward,
  FaPiggyBank,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";

const plans = [
  {
    title: "Budget Friendly",
    price: "₹18L - ₹25L",
    subtitle: "Complete MBBS Cost",
    items: [
      "Tuition Fee",
      "Hostel Included",
      "Low Living Cost",
      "No Donation",
    ],
  },
  {
    title: "Most Popular",
    price: "₹25L - ₹35L",
    subtitle: "Top Universities",
    featured: true,
    items: [
      "NMC Approved",
      "Modern Campus",
      "Indian Food Available",
      "High FMGE Success",
    ],
  },
  {
    title: "Premium Choice",
    price: "₹35L+",
    subtitle: "Europe Options",
    items: [
      "Scholarship Support",
      "International Exposure",
      "Advanced Facilities",
      "Career Guidance",
    ],
  },
];

export default function FeeScholarship() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            FEES & SCHOLARSHIPS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
            Study Within
            <span className="block text-blue-600">Your Budget</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Compare estimated MBBS costs and explore scholarship opportunities
            before making your decision.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-cyan-500 bg-gradient-to-b from-blue-600 to-cyan-500 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >

              <div className="flex items-center justify-between">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                  plan.featured ? "bg-white/20" : "bg-cyan-100"
                }`}>
                  <FaPiggyBank className={`text-3xl ${
                    plan.featured ? "text-white" : "text-cyan-600"
                  }`} />
                </div>

                {plan.featured && (
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700">
                    RECOMMENDED
                  </span>
                )}
              </div>

              <h3 className={`mt-6 text-2xl font-bold ${plan.featured ? "text-white" : "text-slate-900"}`}>
                {plan.title}
              </h3>

              <div className="mt-5 flex items-center text-4xl font-black">
                <FaRupeeSign className="mr-1 text-2xl" />
                {plan.price.replace("₹","")}
              </div>

              <p className={`mt-2 ${plan.featured ? "text-slate-100" : "text-slate-600"}`}>
                {plan.subtitle}
              </p>

              <div className="mt-8 space-y-4">
                {plan.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("counselling")}
                className={`mt-8 w-full rounded-full py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-white text-blue-700 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-blue-700"
                }`}
              >
                Get Fee Details
              </button>
            </div>
          ))}

        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">

          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">
              <FaCalculator className="text-3xl" />
            </div>

            <h3 className="mt-6 text-3xl font-bold">
              Need A Personalized Cost Estimate?
            </h3>

            <p className="mt-4 text-slate-300 leading-7">
              Our counsellors calculate your expected tuition, hostel,
              living expenses and travel cost based on your preferred country.
            </p>

            <button
              onClick={() => scrollToSection("counselling")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3 font-semibold hover:bg-cyan-600"
            >
              Calculate My Budget
              <FaArrowRight />
            </button>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
              <FaAward className="text-3xl" />
            </div>

            <h3 className="mt-6 text-3xl font-bold">
              Scholarship Guidance
            </h3>

            <p className="mt-4 leading-7 text-slate-100">
              Learn about merit-based scholarships, country-specific grants,
              and fee-saving opportunities with our admission experts.
            </p>

            <button
              onClick={() => scrollToSection("counselling")}
              className="mt-8 rounded-full bg-white px-7 py-3 font-semibold text-blue-700 hover:bg-slate-100"
            >
              Check Eligibility
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
