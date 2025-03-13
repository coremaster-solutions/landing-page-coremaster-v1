import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function Navbar() {
  const menuContainer = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP(
    () => {
      gsap.to(menuContainer.current, {
        x: "-100%",
        duration: 0,
        opacity: 0,
        ease: "power2.out",
      });
      gsap.to(".menu-icon > div", {
        rotate: 45,
        y: 5,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: menuContainer }
  );

  const openMenu = contextSafe(() => {
    const isHidden = menuContainer?.current?.style.cssText.includes(
      "translate(-100%, 0px)"
    );

    gsap.to(menuContainer.current, {
      x: isHidden ? 0 : "-100%",
      duration: 0.5,
      opacity: 1,
      ease: "power2.out",
    });
  });

  return (
    <nav className="text-white py-5 h-20 absolute z-10 inset-0">
      <div className="flex justify-between items-center container mx-auto px-5 lg:px-0 ">
        <div>
          <a href="/" className="flex flex-col w-50">
            <h3 className="text-3xl font-semibold">
              <span className="text-primary">C</span>odeMaster
            </h3>
            <span className="text-xs text-center hidden lg:block">
              Desarrollo de Sistemas y Consultoría Tecnológica
            </span>
          </a>
        </div>
        <div className="hidden items-center gap-1.5 lg:flex">
          <a
            href="#home"
            className="bg-primary p-2.5 rounded-full text-black font-semibold"
          >
            Inicio
          </a>
          <a
            href="#us-client"
            className="p-2.5 rounded-full hover:text-primary font-semibold"
          >
            Nuestros clientes
          </a>
          <a
            href="#about"
            className="p-2.5 rounded-full hover:text-primary font-semibold"
          >
            ¿Quiénes somos?
          </a>
          <a
            href="#contact"
            className="p-2.5 rounded-full hover:text-primary font-semibold"
          >
            contactos
          </a>
        </div>
        {/* Menu Mobile */}
        <div
          className="fixed inset-0 bg-primary grid place-items-center"
          ref={menuContainer}
        >
          <div className="flex flex-col items-center gap-1.5 lg:flex text-2xl text-white ">
            <a href="#home" className="p-2.5 rounded-full font-semibold">
              Inicio
            </a>
            <a href="#us-client" className="p-2.5 rounded-full font-semibold">
              Nuestros clientes
            </a>
            <a href="#about" className="p-2.5 rounded-full font-semibold">
              ¿Quiénes somos?
            </a>
            <a href="#contact" className="p-2.5 rounded-full font-semibold">
              contactos
            </a>
          </div>
        </div>

        <div className="flex items-center gap-10 lg:hidden z-50">
          <button type="button" className="menu-icon" onClick={openMenu}>
            <div />
            <div />
            <div />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
