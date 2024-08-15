import Logo from "../../../../assets/Logo.png";

const CardComunity = () => {
  return (
    <div className="md:w-[50vw] lg:w-[20vw] flex flex-col flex-wrap items-center shadow-md cursor-pointer transition-all hover:opacity-90 rounded-md">
      <figure>
        <img className="h-[20rem] w-full" src={Logo} alt="logo" loading="lazy" />
      </figure>
      <div className="flex flex-col w-full p-5">
        <h3 className="text-viridian-green-700 dark:text-viridian-green-200 text-3xl font-semibold py-3">Titulo comunicado</h3>
        <p className="text-rock-blue-800 dark:text-viridian-green-50 ellipsis-multiline">Descripcion del evento o comunicado para los residentes de valle real, valle oriental y otras partes involucradas, como lo son el comite o cualquier persona mas</p>
      </div>
      <div className="flex justify-between items-center w-full bg-rock-blue-100 dark:bg-viridian-green-500 px-3 py-1">
        <p className="text-zuccini-800 dark:text-zuccini-300">Evento</p>
        <div className="flex flex-col">
          <p className="text-rock-blue-950 dark:text-viridian-green-50">Dia 20/06/2024</p>
          <p className="text-rock-blue-950 dark:text-viridian-green-50">Hora 19:00 hrs</p>
        </div>
      </div>
    </div>
  );
};

export default CardComunity;
