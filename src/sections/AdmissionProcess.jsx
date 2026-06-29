
import {
  FaClipboardCheck,
  FaFileSignature,
  FaUniversity,
  FaPassport,
  FaPlaneDeparture,
  FaArrowRight,
} from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";

const steps = [
  {
    number: "01",
    icon: <FaClipboardCheck />,
    title: "Free Counselling",
    desc: "Understand eligibility, country options, budget and career opportunities.",
  },
  {
    number: "02",
    icon: <FaUniversity />,
    title: "Choose University",
    desc: "Select the best NMC-approved university based on your preferences.",
  },
  {
    number: "03",
    icon: <FaFileSignature />,
    title: "Admission Process",
    desc: "Application submission, offer letter and documentation support.",
  },
  {
    number: "04",
    icon: <FaPassport />,
    title: "Visa Assistance",
    desc: "Complete visa guidance with document verification and interview support.",
  },
  {
    number: "05",
    icon: <FaPlaneDeparture />,
    title: "Fly Abroad",
    desc: "Travel assistance, airport pickup and university joining support.",
  },
];

export default function AdmissionProcess() {
  return (
    <section id="process" className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300">
            ADMISSION PROCESS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-white">
            Your Journey To
            <span className="block text-cyan-400">Become A Doctor</span>
          </h2>

          <p className="mt-5 text-lg text-slate-300">
            We make the complete admission process simple, transparent and stress free.
          </p>
        </div>

        <div className="relative mt-20">

          <div className="hidden lg:block absolute left-0 right-0 top-14 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full"></div>

          <div className="grid gap-8 lg:grid-cols-5">

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative group"
              >

                <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:bg-white/10 hover:shadow-2xl">

                  <div className="absolute top-5 right-5 text-5xl font-black text-white/10">
                    {step.number}
                  </div>

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl text-white shadow-lg">
                    {step.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {step.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

        <div className="mt-20 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>
            <h3 className="text-3xl font-bold text-white">
              Start Your MBBS Admission Today
            </h3>

            <p className="mt-3 max-w-2xl text-slate-300">
              Our expert counsellors will guide you through every step—from choosing the right university to reaching your campus abroad.
            </p>
          </div>

          <button
            onClick={() => scrollToSection("counselling")}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Apply Now
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
}
