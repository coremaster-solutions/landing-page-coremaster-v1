import { TbHandClick } from "react-icons/tb";

function SectionHero() {
  return (
    <section className="bg-[url(/images/png/bg-hero.png)] bg-left bg-cover lg:bg-center bg-no-repeat">
      <div className="py-17.5 min-h-screen container mx-auto grid place-items-center w-full h-full px-5 lg:px-0">
        <div className="text-center flex flex-col gap-2.5 lg:gap-10 items-center">
          <h1 className="text-white text-[clamp(32px,5vw,75px)] font-bold">
            Innovación Digital que Transforma tu Negocio
          </h1>
          <p className="text-white font-light text-xl">
            Desarrollamos herramientas digitales efectivas para potenciar tu
            empresa
          </p>
          <div className="h-23">
            <button
              type="button"
              aria-label="Ver más"
              className=" bg-primary text-black font-semibold text-2xl px-3.5 py-5.5 rounded-full max-w-[max-content] flex items-center gap-2 mt-10 hover:px-4.5 hover:py-6.5 hover:text-[26px] transition-all duration-300 ease-in cursor-pointer"
            >
              <span>Ver más</span>
              <TbHandClick />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
