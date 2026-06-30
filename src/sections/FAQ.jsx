import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqSection, faqs } from "../content/faq";
export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-slate-100 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
           {faqSection.badge}
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
           {faqSection.title}
            <span className="block text-blue-600">{faqSection.highlight}</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
           {faqSection.description}
          </p>
        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((item, index) => (

            <div
              key={item.question}
             className={`overflow-hidden rounded-3xl border transition-all duration-300 shadow-lg ${
  open === index
    ? "border-cyan-500 shadow-cyan-100"
    : "border-slate-200 hover:border-cyan-200"
}`}
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
              >

                <h3 className={`text-lg md:text-xl font-semibold transition-colors ${
    open === index ? "text-cyan-700" : "text-slate-900"
  }`}
> {item.question} </h3>

               <FaChevronDown
  className={`text-lg transition-all duration-300 ${
    open === index
      ? "rotate-180 text-cyan-600"
      : "text-slate-400"
  }`}
/>

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
