import mockupApp from "@/assets/images/svg/app_mockup.svg";
function SectionSecond() {
  return (
    <section className="py-17.5">
      <div className="px-5 lg:px-0 container mx-auto">
        <h1 className="text-primary text-[clamp(32px,5vw,75px)] font-bold text-center mb-8 md:mb-6">
          Control, Innovación & tecnología.
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex flex-col gap-7.5 text-center w-full lg:w-[33%]">
            <h3 className="text-primary text-[clamp(26px,2vw,48px)] font-bold">
              Potencia tu <span className="text-white">empresa</span>
            </h3>
            <p className="text-body text-white">
              Ofrecemos solución para todo tipo de negocios, con{" "}
              <span className="font-medium text-primary">
                tecnología e innovación.
              </span>
            </p>
            <p className="text-body text-white">
              Nuestros equipos utilizan{" "}
              <span className="font-medium text-primary">
                tecnología de vanguardia{" "}
              </span>
              para crear{" "}
              <span className="font-medium text-primary">
                tecnología de vanguardia{" "}
              </span>
              y metodológicas que se adaptan a tus necesidades empresariales. Te
              ayudamos a optimizar procesos, reducir costos y aumentar la
              eficiencia con herramientas diseñadas específicamente para tu
              negocio
            </p>
          </div>
          <div className="w-full md:w-[250px] lg:w-[346px]">
            <img
              loading="lazy"
              src={mockupApp.src}
              alt="An application mobile with system list"
              className="w-full"
            />
          </div>
          <div className="w-full lg:w-[33%] flex flex-col gap-7.5 text-center">
            <h3 className="text-primary text-[clamp(26px,2vw,48px)] font-bold">
              Fácil <span className="text-white">adaptación</span>
            </h3>
            <p className="text-body text-white">
              Ofrecemos soluciones adaptables a la medida de tu{" "}
              <span className="font-medium text-primary">
                negocio, empresa y entidad publica.
              </span>
            </p>
            <p className="text-body text-white">
              Nuestras soluciones se adaptan a la medida de tu negocio, ya sea
              una pequeña empresa, una corporación o una entidad pública.
              Ofrecemos funciones innovadoras que se integran fácilmente con tus
              sistemas existentes, garantizando una transición sin problemas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSecond;
