// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// export default function FloatingButtons() {
//   return (
//      <div className="fixed flex flex-col  bottom-22 right-6 gap-3 md:gap-6 z-[9999] ">
//         <a href="tel:+919044442989" className="border text-white bg-red-700 p-2 md:p-4 rounded-full hover:scale-110 transition-all duration-300"><FaPhoneAlt size={30}/></a>
//         <a href="https://wa.me/919044442989?text=Hello%20I%20want%20to%20know%20more%20about%20MBBS%20Abroad" target="_blank" rel="noopener noreferrer" className="border text-white bg-green-500 p-2 md:p-4 rounded-full hover:scale-110 transition-all duration-300"><FaWhatsapp size={30}/></a>
//      </div>
   
//   );
// }
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { LuBotMessageSquare } from "react-icons/lu";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-[998] flex flex-col items-end gap-4">

      {/* Phone */}
      <a
        href="tel:+919044442989"
        className="group relative"
      >
        <span className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 backdrop-blur-md px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 group-hover:right-24">
          Call Us
        </span>

        <div className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-red-400/20 bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-[0_10px_35px_rgba(239,68,68,.45)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
          <FaPhoneAlt size={22} />
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919044442989?text=Hello%20I%20want%20to%20know%20more%20about%20MBBS%20Abroad"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <span className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 backdrop-blur-md px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 group-hover:right-24">
          WhatsApp
        </span>

        <div className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-green-400/20 bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-[0_10px_35px_rgba(34,197,94,.45)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
          <FaWhatsapp size={26} />
        </div>
      </a>

    </div>
  );
}