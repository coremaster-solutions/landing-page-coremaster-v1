import muniAppMockup from "@/assets/images/png/muni-app-mockup.png";
import { PiCheckCircleFill } from "react-icons/pi";
function SectionThree() {
  return (
    <section className="py-17.5">
      <div className="px-5 lg:px-0 container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-10 w-full md:w-[50%] lg:w-[60%]">
            <h1 className="text-primary text-[clamp(32px,5vw,75px)] font-bold w-full lg:w-[80%] text-center lg:text-left leading-20.5">
              Fácil adaptación a tu negocio o empresa
            </h1>
            <ul className="font-light">
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 items-center text-xl">
                <PiCheckCircleFill className="text-primary" />
                <span>Administra tu negocio desde tu celular.</span>
              </li>
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 items-center text-xl">
                <PiCheckCircleFill className="text-primary" />
                <span>
                  Diferentes roles en el sistema por cada integrante de tu
                  equipo.
                </span>
              </li>
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 items-center text-xl">
                <PiCheckCircleFill className="text-primary" />
                <span>Soporte 24/7.</span>
              </li>
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 items-center text-xl">
                <PiCheckCircleFill className="text-primary" />
                <span>Actualizaciones en tiempo real.</span>
              </li>
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 items-center text-xl">
                <PiCheckCircleFill className="text-primary" />
                <span>Análisis y reportes detallados.</span>
              </li>
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 items-center text-xl">
                <PiCheckCircleFill className="text-primary" />
                <span>Integración con múltiples plataformas.</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[50%] lg:w-[40%] rounded-4xl bg-accent overflow-hidden">
            <img
              src={muniAppMockup.src}
              alt="An application mobile with system list"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
