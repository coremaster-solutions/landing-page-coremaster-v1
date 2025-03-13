import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const partnerLogoList = [
  {
    name: "Municipalidad Distrital de Pichari",
    imageUrl: "/images/png/muni-pichari.png",
  },
  {
    name: "Municipalidad Distrital de Kimbiri",
    imageUrl: "/images/png/muni-kimbiri.png",
  },
  {
    name: "Municipalidad Distrital de Kimbiri",
    imageUrl: "/images/png/muni-kimbiri.png",
  },
  {
    name: "Municipalidad Distrital de Pichari",
    imageUrl: "/images/png/muni-pichari.png",
  },
  {
    name: "Municipalidad Distrital de Pichari",
    imageUrl: "/images/png/muni-pichari.png",
  },
  {
    name: "Municipalidad Distrital de Pichari",
    imageUrl: "/images/png/muni-pichari.png",
  },
];

function SectionFourGsap() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideWidth = 294;

  useEffect(() => {
    if (sliderRef.current) {
      const firstClone = sliderRef.current.children[0].cloneNode(true);
      const lastClone =
        sliderRef.current.children[partnerLogoList.length - 1].cloneNode(true);
      sliderRef.current.appendChild(firstClone);
      sliderRef.current.insertBefore(lastClone, sliderRef.current.firstChild);
      gsap.set(sliderRef.current, { x: -slideWidth });
    }
  }, []);

  const handleNext = () => {
    if (!sliderRef.current) return;

    const newIndex = currentIndex + 1;
    gsap.to(sliderRef.current, {
      duration: 0.5,
      x: -slideWidth * (newIndex + 1),
      ease: "power2.easeOut",
      onComplete: () => {
        if (newIndex >= partnerLogoList.length) {
          gsap.set(sliderRef.current, { x: -slideWidth });
          setCurrentIndex(0);
        } else {
          setCurrentIndex(newIndex);
        }
      },
    });
  };

  const handlePrev = () => {
    if (!sliderRef.current) return;

    const newIndex = currentIndex - 1;
    gsap.to(sliderRef.current, {
      duration: 0.5,
      x: -slideWidth * (newIndex + 1),
      ease: "power2.easeOut",
      onComplete: () => {
        if (newIndex < 0) {
          gsap.set(sliderRef.current, {
            x: -slideWidth * partnerLogoList.length,
          });
          setCurrentIndex(partnerLogoList.length - 1);
        } else {
          setCurrentIndex(newIndex);
        }
      },
    });
  };

  return (
    <section className="py-17.5">
      <div className="px-5 lg:px-0 container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-[48%] flex flex-col gap-6">
            <h1 className="text-primary text-[clamp(32px,5vw,75px)] font-bold w-full lg:w-[80%] text-center lg:text-left lg:leading-20.5">
              Empresas que Confían en Nosotros
            </h1>
            <p className="text-white text-xl font-light">
              Administra tu negocio desde tu celular.
            </p>
            <button
              type="button"
              className="text-white text-xl w-fit flex items-center gap-2 cursor-pointer"
            >
              <span>Ver todos</span>
              <FaArrowRight className="size-6" />
            </button>
          </div>
          <div className="w-full lg:w-[52%] flex items-center gap-8 h-40">
            <div>
              <button
                className="size-9 bg-primary rounded-md grid place-items-center hover:opacity-90 cursor-pointer"
                type="button"
                onClick={handlePrev}
              >
                <FaArrowLeft className="size-6" />
              </button>
            </div>

            <div className="flex max-w-full items-center gap-5 overflow-hidden">
              <div ref={sliderRef} className="flex">
                {partnerLogoList.map((item, index) => (
                  <div
                    className="bg-white flex flex-col items-center justify-center w-[274px] h-[160px] md:h-[200px] lg:h-[227px] shrink-0 gap-2 mr-5"
                    key={`partner-${index.toString()}`}
                  >
                    <img
                      loading="lazy"
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button
                className="size-9 bg-primary rounded-md grid place-items-center hover:opacity-90 cursor-pointer"
                type="button"
                onClick={handleNext}
              >
                <FaArrowRight className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFourGsap;
