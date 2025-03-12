import { FaFacebookSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const cellphoneList = ["+51 930332322", "+51 930332322", "+51 930332322"];
function Footer() {
  return (
    <footer className="text-white py-7.5 bg-bg-secondary">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex items-center justify-between flex-col md:flex-row mb-10 gap-5">
          <div className="w-full">
            <p className="uppercase font-bold mb-2.5">
              ¿Necesitas ayuda? escríbe a nuestro equipo
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] lg:flex items-center flex-wrap gap-1.5">
              {cellphoneList.map((phone) => (
                <div
                  className="flex items-center font-semibold gap-1 flex-1 lg:flex-none"
                  key={phone}
                >
                  <div className="size-6 grid place-items-center">
                    <FaPhoneAlt />
                  </div>
                  <p className="text-xs">{phone}</p>
                </div>
              ))}
              <div className="flex items-center font-semibold gap-1 flex-1 lg:flex-none">
                <div className="size-6 grid place-items-center">
                  <MdOutlineEmail />
                </div>
                <p className="text-xs">soporte@coremaster.com</p>
              </div>
            </div>
          </div>

          <div className="w-full uppercase">
            <p className="font-bold lg:text-right mb-2.5">Enlaces rápidos</p>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] lg:flex flex-wrap items-center gap-2 md:gap-8 lg:justify-end text-[14px]">
              <li className="flex-1 lg:flex-none">Inicio</li>
              <li className="flex-1 lg:flex-none">Nuestros clientes</li>
              <li className="flex-1 lg:flex-none">¿Quiénes somos?</li>
              <li className="flex-1 lg:flex-none">contactos</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-5">
          <div className="w-full md:w-auto">
            <p className="font-bold text-center lg:text-left">
              © {new Date().getFullYear()} CoreMaster. Todos los derechos
              reservados
            </p>
          </div>

          <div className="flex items-center gap-5 justify-end text-[14px]">
            <a href="https://www.facebook.com" target="__blank">
              <FaFacebookSquare size={24} />
            </a>
            <a href="https://www.linkedin.com" target="__blank">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
