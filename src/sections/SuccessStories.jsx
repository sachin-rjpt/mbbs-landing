import {
  FaUserGraduate,
  FaGlobe,
  FaUniversity,
  FaAward,
} from "react-icons/fa";
import {
  successSection,
  stats,
  testimonials,
} from "../content/successStories";
const iconMap = {
  student: <FaUserGraduate />,
  globe: <FaGlobe />,
  university: <FaUniversity />,
  award: <FaAward />,
};
export default function SuccessStories() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-cyan-100 text-cyan-700 font-semibold px-4 py-2 text-sm">
           {successSection.badge}
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
           {successSection.title}
            <span className="block text-blue-600">{successSection.highlight}</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
           {successSection.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-slate-900 p-8 text-center text-white hover:-translate-y-2 transition-all"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl">
                {iconMap[item.icon]}
              </div>

              <h3 className="mt-5 text-4xl font-black">{item.value}</h3>
              <p className="mt-2 text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xl font-bold text-white">
                  {item.country.charAt(0)}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-cyan-600">
                    MBBS in {item.country}
                  </p>
                </div>
              </div>
             <div className="mt-6 flex gap-1 text-yellow-500">
         {Array.from({ length: 5 }).map((_, i) => (
         <span key={i}>★</span> ))}
            </div>
              <p className="mt-4 leading-7 text-slate-600">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}