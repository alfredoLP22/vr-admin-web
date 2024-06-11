import "../styles/login.css";
import Logo from "../../assets/Logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    navigate("/admin");
  };
  return (
    <div className="container-login md:flex">
      <div className="bg-zuccini-950 flex items-center justify-center">
        <figure>
          <img className="img-login" src={Logo} alt="logo" />
        </figure>
      </div>
      <div className="md:w-4/4 w-100-vw lg:w-[100vw] h-screen">
        <form
          onSubmit={handleLoginSubmit}
          className="flex flex-col md:w-2/3 h-2/3 items-center justify-center mt-[9rem] mx-auto gap-4"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div className="flex flex-col w-4/6">
            <label htmlFor="email" className="p-1">
              Correo
            </label>
            <input
              type="email"
              placeholder="Ej: correo@correo.com"
              id="email"
              className="w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700"
            />
          </div>
          <div className="flex flex-col w-4/6">
            <label htmlFor="password" className="p-1">
              Contraseña
            </label>
            <input
              type={isVisible ? "text" : "password"}
              placeholder="********"
              id="password"
              className="w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700"
            />
          </div>
          <div className="flex w-4/6 gap-2">
            <label className="switch">
              <input
                type="checkbox"
                className="cursor-pointer"
                onClick={() => setIsVisible(!isVisible)}
              />
              <span className="slider"></span>
            </label>
            <span>Mostrar contraseña</span>
          </div>

          <button
            type="submit"
            className="mt-4 p-2 w-4/6 bg-zuccini-800 hover:bg-zuccini-600 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1"
          >
            Iniciar sesion
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
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
