import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../../../assets/Logo.png";

const Sidebar = () => {
  const [close, setIsClose] = useState(false);
  const toggleMenu = () => {
    setIsClose(!close);
  };

  return (
    <aside
      className={`flex flex-col gap-10 h-screen px-5 py-10 bg-viridian-green-50 dark:bg-rock-blue-950 transition-all duration-300 shadow-lg ${
        close ? "w-20" : "md:w-1/3 lg:w-1/5 xl:w-1/6"
      }`}
    >
      <div className="flex justify-between items-center">
        {!close && (
          <figure>
            <img
              src={LogoImg}
              alt="logo"
              className="w-15 h-14 rounded-full"
              loading="lazy"
            />
          </figure>
        )}
        <button
          onClick={toggleMenu}
          className="hover:text-viridian-green-500 dark:text-viridian-green-400"
        >
          {close ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon-size"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon-size"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="flex flex-col">
        {!close && (
          <p className="p-2 font-bold text-xl text-viridian-green-700 dark:text-viridian-green-400">
            Administracion
          </p>
        )}
        <NavLink
          to="/admin"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 text-rock-blue-900 dark:text-viridian-green-50 p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon-size"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          {!close && <span>Inicio</span>}
        </NavLink>
        <NavLink
          to="egresos"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 text-rock-blue-900 dark:text-viridian-green-50 p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          {!close && <span>Egresos</span>}
        </NavLink>
        <NavLink
          to="residentes"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 text-rock-blue-900 dark:text-viridian-green-50 p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon-size"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            />
          </svg>
          {!close && <span>Residentes</span>}
        </NavLink>
        <NavLink
          to="generar-recibos"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 text-rock-blue-900 dark:text-viridian-green-50 p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>

          {!close && <span>Generar recibo</span>}
        </NavLink>
        <hr className="text-viridian-green-300" />
        {!close && (
          <p className="p-2 font-bold text-xl text-viridian-green-700 dark:text-viridian-green-400">
            Mi espacio
          </p>
        )}
        <NavLink
          to="mis-pagos"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 text-rock-blue-900 dark:text-viridian-green-50 p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>

          {!close && <span>Mis pagos</span>}
        </NavLink>
        <NavLink
          to="privadas"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 text-rock-blue-900 dark:text-viridian-green-50 p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon-size"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
            />
          </svg>
          {!close && <span>Privadas</span>}
        </NavLink>
        <NavLink
          to="pagar-mantenimiento"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 text-rock-blue-900 dark:text-viridian-green-50 p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
          {!close && <span>Pagar mantenimiento</span>}
        </NavLink>
        <NavLink
          to="comunidad"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 text-rock-blue-900 dark:text-viridian-green-50 p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          {!close && <span>Comunidad</span>}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
