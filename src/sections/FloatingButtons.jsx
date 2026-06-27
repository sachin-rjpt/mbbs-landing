import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
     <div className="fixed flex flex-col  bottom-22 right-6 gap-3 md:gap-6 z-[9999] ">
        <a href="tel:+919044442989" className="border text-white bg-red-700 p-2 md:p-4 rounded-full hover:scale-110 transition-all duration-300"><FaPhoneAlt size={30}/></a>
        <a href="https://wa.me/919044442989?text=Hello%20I%20want%20to%20know%20more%20about%20MBBS%20Abroad" target="_blank" rel="noopener noreferrer" className="border text-white bg-green-500 p-2 md:p-4 rounded-full hover:scale-110 transition-all duration-300"><FaWhatsapp size={30}/></a>
     </div>
  );
}