import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate('/');
  };
  return (
    <div className="flex flex-col justify-center items-center px-7 gap-2">
      <Avatar className="bg-viridian-green-200 text-viridian-green-500 w-20 h-20 ring-2 ring-viridian-green-500">
        <span className="text-2xl font-bold">CA</span>
      </Avatar>
      <div className="text-center">
        <p className="text-viridian-green-600 font-semibold">Alfredo Lozano</p>
        <span className="text-viridian-green-400 font-medium">Casa #71</span>
        <p className="opacity-80">correo@correo.com</p>
      </div>
      <button
        className="bg-viridian-green-500 hover:bg-viridian-green-600 px-4 py-2 rounded-sm text-viridian-green-50 flex gap-1"
        onClick={() => logOut()}
      >
        Cerrar sesion
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
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
      </button>
    </div>
  );
};

export default Logout;
