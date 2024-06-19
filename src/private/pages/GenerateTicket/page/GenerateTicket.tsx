import { useState } from "react";

const GenerateTicket = () => {
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
      <div className="p-3 flex items-center gap-2 justify-start">
        <span className="w-3 h-3 bg-zuccini-950 rounded-full ring-2 ring-viridian-green-400"></span>
        <h3 className="font-bold text-2xl text-rock-blue-900 dark:text-viridian-green-50">
          Generar recibo
        </h3>
      </div>
      <form className="w-9/12 mx-auto mt-5 py-4 px-2 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="flex flex-col">
            <label
              htmlFor="resident-name"
              className="p-1 dark:text-viridian-green-50"
            >
              Nombre residente <span className="text-roman-500 text-lg">*</span>
            </label>
            <select
              name="resident-name"
              className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
            >
              <optgroup label="Privada valle oriental">
                <option value="">Residente 1</option>
              </optgroup>
              <optgroup label="Privada asturias">
                <option value="">Residente 2</option>
              </optgroup>
            </select>
          </div>
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
            <label htmlFor="email" className="p-1 dark:text-viridian-green-50">
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
            <label htmlFor="amount" className="p-1 dark:text-viridian-green-50">
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
        <button
          type="submit"
          className="mt-4 mx-auto p-2 w-[100%] md:w-4/6 bg-zuccini-800 hover:bg-zuccini-600 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1"
        >
          Generar recibo
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
        </button>
      </form>
    </section>
  );
};

export default GenerateTicket;
