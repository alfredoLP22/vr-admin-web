import { useState } from "react";

const PayMaintenance = () => {
  const [isMultiPeriod, setIsMultiPeriod] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChangeMonths = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
    if (event.target.value !== "1") {
      setIsMultiPeriod(true);
    } else {
      setIsMultiPeriod(false);
    }
  };

  return (
    <section className="w-10/12 mx-auto mt-5 flex flex-col flex-wrap gap-7 py-2 px-0 overflow-x-hidden">
      <div className="p-2 flex items-center gap-2 justify-start">
        <span className="w-3 h-3 bg-zuccini-950 rounded-full ring-2 ring-viridian-green-400"></span>
        <h3 className="font-bold text-2xl text-rock-blue-900 dark:text-viridian-green-50">
          Pagar mantenimiento
        </h3>
      </div>
      <form className="w-9/12 mx-auto py-2 overflow-x-hidden">
        <div className="p-3">
          <h3 className="font-bold text-xl text-rock-blue-900 dark:text-viridian-green-50 mb-5">
            Datos de residente
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="flex flex-col">
              <label
                htmlFor="exterior"
                className="p-1 dark:text-viridian-green-50"
              >
                Numero casa <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="exterior"
                type="number"
                min={1}
                autoComplete="address-level2"
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="private"
                className="p-1 dark:text-viridian-green-50"
              >
                Privada <span className="text-roman-500 text-lg">*</span>
              </label>
              <select
                name="private"
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              >
                <option disabled defaultValue={""}>
                  -- Selecciona --
                </option>
                <option value="">Valle oriental</option>
                <option value="">Asturias</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="p-1 dark:text-viridian-green-50"
              >
                Correo <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="correo@correo.com"
                min={1}
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="count-months"
                className="p-1 dark:text-viridian-green-50"
              >
                Cantidad de meses a pagar <span className="text-roman-500 text-lg">*</span>
              </label>
              <select
                name="count-months"
                value={selectedOption}
                onChange={handleChangeMonths}
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              >
                <option disabled defaultValue={""}>
                  -- Selecciona --
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="amount"
                className="p-1 dark:text-viridian-green-50"
              >
                $ Monto <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="amount"
                type="number"
                min={1}
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="start-month"
                className="p-1 dark:text-viridian-green-50"
              >
                Periodo {isMultiPeriod && "inicial"} <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="start-month"
                type="month"
                required
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
            {isMultiPeriod && (
              <div className="flex flex-col">
                <label
                  htmlFor="end-month"
                  className="p-1 dark:text-viridian-green-50"
                >
                  Periodo final <span className="text-roman-500 text-lg">*</span>
                </label>
                <input
                  id="end-month"
                  type="month"
                  required
                  className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
                />
              </div>
            )}
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-bold text-xl text-rock-blue-900 dark:text-viridian-green-50 my-8">
            Datos de pago
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="flex flex-col">
              <label
                htmlFor="resident-name"
                className="p-1 dark:text-viridian-green-50"
              >
                Nombre <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="resident-name"
                type="text"
                min={1}
                placeholder="Ej: Jose"
                autoComplete="address-level2"
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="last-name"
                className="p-1 dark:text-viridian-green-50"
              >
                Apellido <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="last-name"
                type="text"
                min={1}
                placeholder="Ej: Lopez"
                autoComplete="address-level2"
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="card-number"
                className="p-1 dark:text-viridian-green-50"
              >
                Numero tarjeta <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="card-number"
                type="text"
                min={1}
                autoComplete="address-level2"
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cvv" className="p-1 dark:text-viridian-green-50">
                CVV <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="cvv"
                type="text"
                min={1}
                autoComplete="address-level2"
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="expiration"
                className="p-1 dark:text-viridian-green-50"
              >
                Fecha expiracion <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="expiration"
                type="text"
                required
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 mx-auto p-2 w-[100%] md:w-4/6 bg-zuccini-800 hover:bg-zuccini-600 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1"
        >
          Pagar
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
        </button>
      </form>
    </section>
  );
};

export default PayMaintenance;
