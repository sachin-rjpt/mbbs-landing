import { FaArrowRight, FaMoneyBillWave, FaUniversity } from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";
import kyrgyzstan from "../assets/countries/kyrgyzstan.jpg";
import russia from "../assets/countries/russia.jpg";
import kazakhstan from "../assets/countries/kazakhstan.jpg";
import georgia from "../assets/countries/georgia.jpg";
import china from "../assets/countries/china.jpg";
import italy from "../assets/countries/italy.jpg";

const countries = [
  {
    name: "Kyrgyzstan",
    fee: "₹18L - ₹25L",
    duration: "6 Years",
    image: kyrgyzstan,
  },
  {
    name: "Russia",
    fee: "₹22L - ₹35L",
    duration: "6 Years",
    image: russia,
  },
  {
    name: "Kazakhstan",
    fee: "₹20L - ₹28L",
    duration: "6 Years",
    image: kazakhstan,
  },
  {
    name: "Georgia",
    fee: "₹30L - ₹42L",
    duration: "6 Years",
    image: georgia,
  },
  {
    name: "China",
    fee: "₹22L - ₹32L",
    duration: "6 Years",
    image: china,
  },
  {
    name: "Italy",
    fee: "Scholarship Available",
    duration: "6 Years",
    image: italy,
  },
];

export default function Countries() {
  return (
    <section id="countries" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            POPULAR DESTINATIONS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
            Choose Your
            <span className="block text-blue-600">Dream Destination</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Compare top countries for MBBS based on fees, quality of education and career opportunities.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {countries.map((country) => (
            <div
              key={country.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden h-60">
                <img
                  src={country.image}
                  alt={country.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900">
                  {country.name}
                </h3>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-slate-600">
                    <FaMoneyBillWave className="text-cyan-600" />
                    <span>{country.fee}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <FaUniversity className="text-cyan-600" />
                    <span>{country.duration}</span>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection("counselling")}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Apply Now
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
