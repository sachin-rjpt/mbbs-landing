import {
  FaArrowRight,
  FaCheckCircle,
  FaGlobeAsia,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import {
  MdWorkspacePremium,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import doctor from "../assets/images/doctor.PNG";
import { scrollToSection } from "../utils/scrollToSection";
import {
  hero,
  trustBadges,
  featuredCountries,
  highlightCard,
  floatingCards,
  heroStats,
} from "../content/hero";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200 text-sm">
              <FaGlobeAsia />
             {hero.badge}
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-white">
              {hero.title.normal}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
               {hero.title.highlight}
              </span>
              <br />
             {hero.title.line2}
              <br />
             {hero.title.line3}
            </h1>

            <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-xl leading-8">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("counselling")}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-white font-semibold flex justify-center items-center gap-2 hover:scale-105 transition"
              >
               {hero.primaryButton}<FaArrowRight />
              </button>

              <button
                onClick={() => scrollToSection("universities")}
                className="rounded-full border border-white/20 bg-white/5 backdrop-blur px-8 py-4 text-white hover:bg-white/10 transition"
              >
               {hero.secondaryButton}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((b) => (
                <div key={b} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  {b}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {featuredCountries.map((c) => (
                <span key={c} className="rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 text-cyan-100 text-sm">
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="flex gap-4">
                <div className="h-14 w-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <MdWorkspacePremium className="text-cyan-400 text-3xl"/>
                </div>
                <div>
                  <p className="text-cyan-300 uppercase text-xs tracking-widest">{highlightCard.badge}</p>
                  <h3 className="text-white text-xl font-bold mt-1">{highlightCard.title}</h3>
                  <p className="text-slate-300 mt-2">{highlightCard.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center pl-8 lg:pl-16">
            <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />
            <div className="relative">
              <img src={doctor} alt="Doctor" className="relative z-10 w-[280px] md:w-[320px] lg:w-[360px] object-contain" />
              {floatingCards.map(card=>(
                <div key={card.value} className={`absolute ${card.pos} rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl px-3 py-3`}>
                  <h3 className="text-3xl font-bold text-white">{card.value}</h3>
                  <p className="text-slate-300 text-sm">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          {heroStats.map((s)=>(
            <div key={s.label} className="p-8 border border-white/10 hover:bg-white/10 transition">
              <div className="text-cyan-400 text-3xl">{s.icon}</div>
              <h3 className="text-white text-4xl font-black mt-4">{s.value}</h3>
              <p className="text-slate-300 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
