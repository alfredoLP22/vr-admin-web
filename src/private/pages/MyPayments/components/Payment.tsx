import { useState } from "react";
import { Popover } from "antd";
import Download from "./Download";

const Payment = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-4 justify-between items-center px-2 md:px-3 lg:px-3 py-3 dark:bg-rock-blue-950 bg-wild-sand-50 rounded-lg shadow-md">
      <div className="flex flex-col">
        <p className="font-bold text-viridian-green-800 dark:text-viridian-green-50">
          Mes
        </p>
        <span className="text-viridian-green-600 dark:text-viridian-green-200">
          Enero
        </span>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-viridian-green-800 dark:text-viridian-green-50">
          Año
        </p>
        <span className="text-viridian-green-600 dark:text-viridian-green-200">
          2024
        </span>
      </div>
      <div className="bg-zuccini-100 ring-1 ring-zuccini-800 text-zuccini-800 px-3 py-1 rounded-full flex gap-1 items-center">
        <span className="w-2 h-2 bg-zuccini-950 rounded-full ring-2 ring-viridian-green-400"></span>
        <p>Pagado</p>
      </div>
      <Popover
        placement="bottom"
        content={<Download />}
        trigger="click"
        open={open}
        onOpenChange={() => setOpen(!open)}
      >
        <button className="text-zuccini-800 dark:text-viridian-green-200 flex gap-1 items-center">
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
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </button>
      </Popover>
      {/* <div className="bg-roman-100 ring-1 ring-roman-800 text-roman-800 px-3 py-1 rounded-full flex gap-1 items-center">
        <span className="w-2 h-2 bg-roman-950 rounded-full ring-2 ring-roman-400"></span>
        <p>Sin pagar</p>
      </div> */}
    </div>
  );
};

export default Payment;
