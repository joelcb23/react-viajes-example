function ContactInfo() {
  return (
    <div className="bg-[#ed5c3f] text-white text-center mt-32 p-10 flex flex-col gap-y-5 lg:pt-20">
      <h4>LOGO</h4>
      <ul className="hidden md:flex md:flex-row md:gap-x-8 md:justify-center cursor-pointer">
        <li>Inicio</li>
        <li>Acerca de</li>
        <li>Destinos</li>
        <li>Habitaciones</li>
        <li>Aviso legal</li>
      </ul>
      <h4>Copyright. Todos los derechos reservados.</h4>
      <a href="" className="underline">
        Politica de privacidad
      </a>
    </div>
  );
}

export default ContactInfo;
