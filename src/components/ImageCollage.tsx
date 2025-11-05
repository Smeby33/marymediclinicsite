import { useEffect, useRef, useState } from "react";

const img1 = new URL(
  "../assets/medecin-surveillant-symptomes-patients-malades.avif",
  import.meta.url
).href;
const img2 = new URL("../assets/enfant-et-medecin.avif", import.meta.url).href;
const img3 = new URL("../assets/img-femme-ecnt.jpg", import.meta.url).href;
const img4 = new URL(
  "../assets/african-american-female-doctor.webp",
  import.meta.url
).href;

const images = [img1, img2, img3, img4];

const ImageCollage = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState<boolean[]>(() => images.map(() => false));

  useEffect(() => {
    setLoaded(images.map(() => false));
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleLoad = (index: number) => {
    setLoaded((prev) => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });
  };

  return (
    <section ref={ref} aria-hidden className="mt-12">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -left-6 -top-6 w-14 h-14 bg-primary rounded-tr-2xl pointer-events-none" />
        <div className="absolute -right-6 -bottom-6 w-14 h-14 bg-primary rounded-bl-2xl pointer-events-none" />

        <div className="grid grid-cols-2 gap-4 bg-white/80 p-4 rounded-2xl shadow-lg overflow-hidden">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl bg-gray-100"
              style={{
                transition: "transform 500ms cubic-bezier(.22,.9,.3,1), opacity 500ms",
                transitionDelay: `${i * 80}ms`,
                transform: inView ? "translateY(0) scale(1)" : "translateY(6px) scale(.995)",
                opacity: inView ? 1 : 0,
              }}
            >
              {/* subtle apparition icon when image ready */}
              <div
                aria-hidden
                className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-400 ${
                  loaded[i] && inView ? "opacity-60" : "opacity-0"
                }`}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-scale-up opacity-80"
                >
                  <defs>
                    <linearGradient id={`g-${i}`} x1="0" x2="1">
                      <stop offset="0" stopColor="#1e40af" />
                      <stop offset="1" stopColor="#0891b2" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="9" stroke={`url(#g-${i})`} strokeWidth="1.2" />
                </svg>
              </div>

              {/* gentle blurred background while loading */}
              <div
                className={`absolute inset-0 bg-gray-100 transition-opacity duration-400 ${
                  loaded[i] ? "opacity-0" : "opacity-100"
                }`}
                aria-hidden
              />

              <img
                src={src}
                alt={`collage-${i + 1}`}
                onLoad={() => handleLoad(i)}
                className="w-full h-44 object-cover relative"
                style={{
                  display: "block",
                  transform: loaded[i] ? "scale(1)" : "scale(1.01)",
                  transition: "transform 420ms ease, filter 420ms ease, opacity 420ms",
                  filter: loaded[i] ? "none" : "blur(4px) grayscale(12%)",
                  opacity: loaded[i] ? 1 : 0.98,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scaleUp {
          0% { transform: scale(.92); opacity: 0; }
          60% { transform: scale(1.03); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up { animation: scaleUp 540ms cubic-bezier(.22,.9,.3,1) both; }
      `}</style>
    </section>
  );
};

export default ImageCollage;