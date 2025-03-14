import muniAppMockup from "@/assets/images/png/muni-app-mockup.png";
import { PiCheckCircleFill } from "react-icons/pi";
function SectionThree() {
  return (
    <section className="py-17.5">
      <div className="px-5 lg:px-0 container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-10 w-full lg:w-[60%]">
            <h1 className="text-primary text-[clamp(32px,5vw,75px)] font-bold w-full lg:w-[80%] text-center lg:text-left lg:leading-20.5">
              Fácil adaptación a tu negocio o empresa
            </h1>
            <ul className="font-light text-body">
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 lg:items-center">
                <div>
                  <PiCheckCircleFill className="text-xl text-primary" />
                </div>
                <span>Administra tu negocio desde tu celular.</span>
              </li>
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 lg:items-center">
                <div>
                  <PiCheckCircleFill className="text-xl text-primary" />
                </div>
                <span>
                  Diferentes roles en el sistema por cada integrante de tu
                  equipo.
                </span>
              </li>
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 lg:items-center">
                <div>
                  <PiCheckCircleFill className="text-xl text-primary" />
                </div>
                <span>Soporte 24/7.</span>
              </li>
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 lg:items-center">
                <div>
                  <PiCheckCircleFill className="text-xl text-primary" />
                </div>
                <span>Actualizaciones en tiempo real.</span>
              </li>
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 lg:items-center">
                <div>
                  <PiCheckCircleFill className="text-xl text-primary" />
                </div>
                <span>Análisis y reportes detallados.</span>
              </li>
              <li className="text-white grid grid-cols-[24px_1fr] gap-2 lg:items-center">
                <div>
                  <PiCheckCircleFill className="text-xl text-primary" />
                </div>
                <span>Integración con múltiples plataformas.</span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[40%] rounded-4xl bg-accent overflow-hidden">
            <img
              loading="lazy"
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
