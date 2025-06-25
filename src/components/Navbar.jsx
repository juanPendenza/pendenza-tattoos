import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { useEffect, useState } from "react";
import { AtSign, InspectIcon, Instagram, Send } from "lucide-react";

// COMPONENTE NAVBAR
function Navbar() {
  // ESTADO DEL BURGER
  const [burger, setBurger] = useState(false);

  // FUNCION QUE SETEA EL ESTADO DEL BURGER
  const handleBurger = () => {
    setBurger(!burger);
  };

  // RUTAS
  const routes = [
    { path: "/", label: "Inicio" },
    { path: "/trabajos", label: "Trabajos" },
    { path: "/contacto", label: "Contacto" },
  ];

  return (
    // EL NAV PUEDE ACCEDER AL CONTEXTO DEL BURGER
    <nav className="w-full sticky top-0 z-50 h-20 lg:h-24 bg-black flex place-items-center p-2 lg:p-4">
      <div className="size-full border border-white flex items-center justify-between">
        {/* LOGO DE LA PÁGINA */}
        <Link
          to={"/"}
          className="border w-16 lg:w-44 h-full flex justify-center items-center"
        >
          {/* AL HACERLE CLICK AL LOGO REDIRECCIONA A LA HOME */}
          <Logo />
        </Link>

        {/* BURGER MOBILE */}
        <button
          onClick={handleBurger}
          className="border w-16 h-full flex justify-center items-center lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 border border-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        {/* DIV QUE CUBRE TODA LA PANTALLA CUANDO CLICKEAMOS EL BURGER */}
        <div
          className={
            burger
              ? "h-screen w-screen absolute top-0 right-0 left-0 bottom-0 bg-black/50 backdrop-blur-md lg:hidden"
              : "hidden"
          }
        >
          <div className="border h-full w-2/3 absolute top-0 right-0 bottom-0 bg-base flex flex-col justify-between p-2">
            {/* BOTON PARA CERRAR EL BURGER */}
            <button
              onClick={handleBurger}
              className="border w-full flex justify-end items-center lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 border border-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* RUTAS MOBILE */}
            <ul className="border p-2 flex flex-col items-center gap-8 text-2xl">
              {routes.map(({ path, label }, index) => (
                <button
                  key={index}
                  onClick={handleBurger}
                  className="size-full"
                >
                  <Link to={path}>{label}</Link>
                </button>
              ))}
            </ul>

            {/* CONTACTO MOBILE */}
            <div className="border p-2 flex justify-start gap-4">
              <Instagram />
              <AtSign />
              <Send />
            </div>
          </div>
        </div>

        {/* RUTAS DESKTOP */}
        <ul className="hidden lg:border p-2 lg:h-full lg:flex lg:justify-between lg:gap-8 lg:text-2xl">
          {routes.map(({ path, label }, index) => (
            <button key={index} onClick={handleBurger} className="size-full">
              <Link to={path}>{label}</Link>
            </button>
          ))}
        </ul>

        {/* CONTACTO DESKTOP */}
        <div className="hidden lg:border lg:p-2 lg:h-full lg:flex place-items-center lg:gap-4">
          <Instagram size={"32"} />
          <AtSign size={"32"} />
          <Send size={"32"} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
