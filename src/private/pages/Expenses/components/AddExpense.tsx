import { MouseEventHandler } from "react";

const AddExpense = ({
  closeInviteResident,
  isInviteResident,
}: {
  closeInviteResident: MouseEventHandler;
  isInviteResident: boolean;
}) => {
  return (
    <div className="fixed inset-0 z-40">
      <div
        className={`fixed inset-0 bg-rock-blue-950 dark:bg-viridian-green-500 transition-opacity duration-300 ${
          isInviteResident ? "opacity-50" : "opacity-0"
        }`}
        onClick={closeInviteResident}
      ></div>

      <div
        className={`bg-viridian-green-50 dark:bg-rock-blue-950 fixed top-0 right-0 z-50 w-[100vw] md:w-[50vw] h-screen transition-transform duration-300 ${
          isInviteResident
            ? "transform translate-x-0"
            : "transform translate-x-full"
        }`}
      >
        <button
          onClick={closeInviteResident}
          className="absolute top-3 right-5 p-1 bg-viridian-green-200 dark:bg-viridian-green-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <form className="w-9/12 mx-auto mt-5 py-4 px-2 overflow-x-hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-zuccini-950 rounded-full ring-2 ring-viridian-green-400"></span>
            <h3 className="font-bold text-2xl my-6 text-rock-blue-900 dark:text-viridian-green-50">
              Agregar egreso
            </h3>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <label
                htmlFor="name-expense"
                className="p-1 dark:text-viridian-green-50"
              >
                Nombre gasto <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                type="text"
                id="name-expense"
                placeholder="Ej: plantas"
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
                <option disabled defaultValue={""} defaultChecked selected>
                  -- Selecciona --
                </option>
                <option value="">General</option>
                <option value="">Valle oriental</option>
                <option value="">Asturias</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="amount"
                className="p-1 dark:text-viridian-green-50"
              >
                Monto <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="amount"
                type="number"
                min={1}
                placeholder="10"
                autoComplete="address-level2"
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="quantity"
                className="p-1 dark:text-viridian-green-50"
              >
                Cantidad <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="quantity"
                type="number"
                min={1}
                placeholder="2"
                autoComplete="address-level2"
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="p-1 dark:text-viridian-green-50"
              >
                Descripcion
              </label>
              <textarea
                id="description"
                placeholder="Descripcion del gasto es opcional"
                autoComplete="address-level2"
                className="w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 mx-auto p-2 w-4/6 bg-zuccini-800 hover:bg-zuccini-600 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1"
          >
            Agregar egreso
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
    ////
  );
};

export default AddExpense;
