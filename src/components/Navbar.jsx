import { useEffect, useMemo, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "Why Us", id: "why-choose-us" },
  { label: "Countries", id: "countries" },
  { label: "Admission", id: "admission-process" },
  { label: "Universities", id: "universities" },
  { label: "Fees", id: "fee-scholarship" },
  { label: "Success", id: "success-stories" },
  { label: "FAQ", id: "faq" },
  { label: "Counselling", id: "counselling" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean);
      let current = active;
      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const bottom = top + sec.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) current = sec.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return ()=>window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id)=>{
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({behavior:"smooth", block:"start"});
  };

  const navLinks = useMemo(()=>NAV_ITEMS.map(item=>(
    <button
      key={item.id}
      onClick={()=>scrollTo(item.id)}
      className={`relative px-3 py-2 text-sm font-medium transition ${
        active===item.id ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
      }`}>
      {item.label}
      {active===item.id && <span className="absolute left-3 right-3 -bottom-1 h-0.5 rounded-full bg-cyan-500"/>}
    </button>
  )),[active]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled?"backdrop-blur-xl bg-white/75 shadow-lg border-b border-white/40":"bg-transparent"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button onClick={()=>scrollTo("hero")} className="text-2xl font-black tracking-tight">
            MBBS<span className="text-blue-600">Abroad</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks}
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={()=>scrollTo("counselling")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
              Apply Now
              <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </button>
          </div>

          <button
            onClick={()=>setOpen(v=>!v)}
            className="rounded-xl border border-slate-200 p-2 lg:hidden">
            {open ? <HiOutlineX size={24}/> : <HiOutlineMenuAlt3 size={24}/>}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 transition ${open?"visible":"invisible"}`}>
        <div onClick={()=>setOpen(false)} className={`absolute inset-0 bg-slate-900/40 transition ${open?"opacity-100":"opacity-0"}`}/>
        <aside className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white p-8 shadow-2xl transition-transform duration-300 ${open?"translate-x-0":"translate-x-full"}`}>
          <div className="mt-16 flex flex-col gap-2">
            {NAV_ITEMS.map(item=>(
              <button
                key={item.id}
                onClick={()=>scrollTo(item.id)}
                className={`rounded-2xl px-4 py-3 text-left font-medium transition ${active===item.id?"bg-blue-50 text-blue-600":"hover:bg-slate-100"}`}>
                {item.label}
              </button>
            ))}
            <button
              onClick={()=>scrollTo("counselling")}
              className="mt-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white">
              Apply Now
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
