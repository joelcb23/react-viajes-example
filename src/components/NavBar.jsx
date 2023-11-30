import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";

function NavBar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full relative top-0 left-0">
      <div className="bg-white items-center justify-between px-7 py-4 text-2xl md:flex md:px-10 md:text-xl">
        <h4 className="font-bold cursor-pointer">LOGO</h4>
        <div
          onClick={() => setOpen(!open)}
          className="text-gray-600 absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {open ? <FaWindowClose /> : <FaBars />}
        </div>
        <ul
          className={`bg-white text-gray-600 w-full absolute left-0 pl-7 pb-5 md:w-auto md:static md:pl-3 md:pb-0 md:flex md:items-center md:gap-x-4 lg:gap-x-10 ${
            open ? "top-19" : "top-[-490px]"
          }`}
        >
          <li className="cursor-pointer my-5">Inicio</li>
          <li className="cursor-pointer my-5">Acerca de</li>
          <li className="cursor-pointer my-5">Destinos</li>
          <li className="cursor-pointer my-5">Habitaciones</li>
          <li className="cursor-pointer my-5">Aviso legal</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
