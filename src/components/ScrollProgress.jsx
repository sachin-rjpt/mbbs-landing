import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, percentage)));

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[9999] h-[3px] w-full bg-transparent">
        <div
          style={{ width: `${progress}%` }}
          className="
            h-full
            rounded-r-full
            bg-gradient-to-r
            from-blue-600
            via-cyan-400
            to-sky-300
            transition-[width]
            duration-150
            ease-out
            shadow-[0_0_18px_rgba(37,99,235,0.6)]
        "
        />
      </div>
    </>
  );
}