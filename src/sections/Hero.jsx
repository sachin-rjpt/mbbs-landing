import { MdHandshake } from 'react-icons/md';
import { FaRupeeSign } from "react-icons/fa";
import { scrollToSection } from '../utils/scrollToSection';
export default function Hero(){
    const cardStyle="bg-white/10 p-8";
    const countryStyle=" flex items-center justify-center flex-wrap bg-red-900/10  border text-white/70 text-xs m-1 px-2 w-30"
    const cardh="text-3xl text-white"
    const cardspan="text-red-200"
    const cardp="text-xs md:text-l lg:text-xl text-white/50"
    return (
        <div className="w-full grid grid-cols-2 p-8 pt-16 bg-[#07144D]">
           <div className="flex flex-col   gap-4">
            <h4 className="text-red-300 ">EDUABROAD -- MBBS -- ABROAD COUNSELLING . 8 COUNTRIES</h4>
            <h1 className="text-white text-3xl font-semibold w-30">MBBS in <i className="text-red-300">Kyrgyzstan</i> & Beyond</h1>
            <p className="text-white opacity-70">We counsel students for MBBS across 8 countries — Russia, Georgia, Italy, Poland, China, Kazakhstan, Uzbekistan, and Kyrgyzstan. We hold a direct institutional partnership with Bishkek International Medical Institute, giving students from UP, MP & Uttarakhand priority access.</p>
            <div className="flex flex-wrap items-center mx-1 border p-4 border-red-800 border-l-8 bg-red-800/20">
                <div className='flex justify-center items-center m-4 text-3xl text-yellow-100'><MdHandshake/></div>
                <div className="flex flex-col  flex-wrap gap-2">
                    <h4 className="text-red-800">*OFFICIAL EDUABROAD PARTNER UNIVERSITY</h4>
                    <h3 className="text-white">Bishkek International Medical Institute</h3>
                    <div className='flex flex-col md:flex-row'>
                     <div className={countryStyle}>UTTAR PRADESH</div>
                     <div className={countryStyle}>MADHYA PRADESH</div>
                     <div className={countryStyle}>UTTARAKHAND</div>
                     </div>
                </div>
            </div>
            <div className="flex m-4 gap-4 flex-wrap">
                <div className="flex justify-center items-center bg-red-800 text-white p-4 hover:scale-105 transition-all duration-300" onClick={()=>scrollToSection("counselling")}>GET FREE COUNSELLING</div>
                <div className="flex justify-center items-center border p-4 text-white opacity-80 hover:scale-105 transition-all duration-300" onClick={()=>scrollToSection("universities")}>VIEW UNIVERSITIES</div>
            </div>
           </div>
           <div className="flex justify-center items-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5  p-4">
                <div className={cardStyle}>
                    <h2 className={`${cardh} flex items-start`}><FaRupeeSign/>25<span className={cardspan}>L</span></h2>
                    <p className={cardp}>MAX. TOTAL COST (6YRS) </p>
                    </div>
                <div className={cardStyle}>
                    <h2 className={cardh}>4<span className={cardspan}>+</span></h2>
                    <p className={cardp}>NMC- APPROVED UNIVERSITIES</p>
                </div>
                <div className={cardStyle}>
                    <h2 className={cardh}>6<span className={cardspan}>yr</span></h2>
                    <p className={cardp}>FULL PROGRAM DURATION</p>
                    </div>
                <div className={cardStyle}>
                    <h2 className={`${cardh} flex items-start`}><FaRupeeSign/><span className={cardspan}>0</span></h2>
                    <p className={cardp}>DONATION / CAPITATION FEES</p>
                </div>
            </div>
           </div>
        </div>
    )
}