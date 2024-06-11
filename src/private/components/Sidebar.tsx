import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../../assets/Logo.png";

const Sidebar = () => {
  const [close, setIsClose] = useState(true);
  const toggleMenu = () => {
    setIsClose(!close);
  };

  return (
    <aside
      className={`flex flex-col gap-10 h-screen px-5 py-10 bg-viridian-green-50 transition-all duration-300 shadow-lg ${
        close ? "w-20" : "md:w-1/3 lg:w-1/5 xl:w-1/5"
      }`}
    >
      <div className="flex justify-between items-center">
        {!close && (
          <figure>
            <img src={LogoImg} alt="logo" className="w-15 h-14 rounded-full" />
          </figure>
        )}
        <button onClick={toggleMenu} className="hover:text-viridian-green-500">
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
        <NavLink
          to="/admin"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 p-3 rounded-sm"
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
          to="/admin"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 p-3 rounded-sm"
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
          to="privates"
          className="flex items-center gap-2 hover:bg-viridian-green-500 hover:text-viridian-green-50 p-3 rounded-sm"
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
      </div>
    </aside>
  );
};

export default Sidebar;
