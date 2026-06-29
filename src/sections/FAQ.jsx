import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Is NEET mandatory for MBBS Abroad?",
    answer:
      "Yes. As per current NMC guidelines, qualifying NEET is mandatory for Indian students planning to pursue MBBS abroad.",
  },
  {
    question: "Are the universities NMC approved?",
    answer:
      "Yes. We guide students only towards recognized universities that meet NMC eligibility requirements.",
  },
  {
    question: "What is the total cost of MBBS abroad?",
    answer:
      "The complete cost generally ranges between ₹18 Lakhs and ₹40 Lakhs depending on the country and university.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes. We help with documentation, visa application, interview preparation and travel guidance.",
  },
  {
    question: "Will I get hostel accommodation?",
    answer:
      "Yes. Most universities provide hostel facilities and we assist students with accommodation arrangements.",
  },
  {
    question: "Do you charge counselling fees?",
    answer:
      "No. Initial counselling and university guidance are completely free.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-slate-100 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
            Have Questions?
            <span className="block text-blue-600">We've Got Answers</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Find answers to the most common questions asked by students and parents.
          </p>
        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((item, index) => (

            <div
              key={item.question}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {item.question}
                </h3>

                <FaChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180 text-cyan-600" : ""
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
