import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-28 right-4 md:right-6 z-[999] flex flex-col items-end gap-4">

      {/* Phone */}
      <a
        href="tel:+919044442989"
        className={`group relative transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 backdrop-blur-md px-4 py-2 text-sm font-medium text-white shadow-xl">
          Call Us
        </span>

        <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-red-400/20 bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-[0_10px_35px_rgba(239,68,68,.45)] hover:scale-110 transition">
          <FaPhoneAlt size={22} />
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919044442989?text=Hello%20I%20want%20to%20know%20more%20about%20MBBS%20Abroad"
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative transition-all duration-300 delay-100 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 backdrop-blur-md px-4 py-2 text-sm font-medium text-white shadow-xl">
          WhatsApp
        </span>

        <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-green-400/20 bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-[0_10px_35px_rgba(34,197,94,.45)] hover:scale-110 transition">
          <FaWhatsapp size={26} />
        </div>
      </a>

      {/* Main Contact Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-[0_12px_35px_rgba(59,130,246,.45)] transition-all duration-300 hover:scale-110"
      >
        {open ? <FaTimes size={22} /> : <MdContactPhone size={30} />}
      </button>
    </div>
  );
}