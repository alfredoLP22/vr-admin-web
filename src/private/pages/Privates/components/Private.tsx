import { Link } from "react-router-dom";

const Private = () => {
  return (
    <div className="w-56 flex flex-col flex-wrap items-center justify-center rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 hover:opacity-90">
      <div className="text-viridian-green-100 p-6 w-full bg-viridian-green-500 dark:bg-viridian-green-600 text-2xl rounded-t-md flex flex-wrap gap-3 items-center">
        <div className="rounded-full p-3 bg-viridian-green-50 text-viridian-green-500 dark:bg-rock-blue-950 dark:text-viridian-green-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
            />
          </svg>
        </div>
        <p className="font-semibold">
          Privada: <span className="font-light">valle oriental</span>
        </p>
      </div>
      <div className="bg-viridian-green-50 dark:bg-rock-blue-950 w-full p-4 flex justify-center">
        <Link
          to="/"
          className="p-2 hover:bg-viridian-green-100 text-viridian-green-400 flex items-center gap-2 rounded-sm border border-viridian-green-400 dark:bg-viridian-green-600 dark:text-viridian-green-50"
        >
          Ver detalles
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
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Private;
