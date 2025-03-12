import coreMasterLogo from "@/assets/images/svg/logo.svg";

function Navbar() {
  return (
    <nav className="text-white py-5 h-20 absolute z-10 inset-0">
      <div className="flex justify-between items-center container mx-auto px-5 lg:px-0 ">
        <div>
          <a href="/" className="flex flex-col w-50">
            <img
              src={coreMasterLogo.src}
              alt="Core Master"
              className="h-9 w-full"
            />
            <span className="text-xs text-center">
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
        <div className="flex items-center gap-10 lg:hidden">
          <button type="button" className="menu-icon">
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
