import { MouseEventHandler } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputsExpense } from "../interfaces/expense.type";
import { schemaExpense } from "../helpers/schemaValidationExpense";

const AddExpense = ({
  closeInviteResident,
  isInviteResident,
}: {
  closeInviteResident: MouseEventHandler;
  isInviteResident: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<InputsExpense>({
    resolver: yupResolver(schemaExpense),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<InputsExpense> = (data) => {
    console.log(data);
  };

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
        <form
          className="w-9/12 mx-auto mt-5 py-4 px-2 overflow-x-hidden"
          onSubmit={handleSubmit(onSubmit)}
        >
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
                {...register("nameExpense")}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
                  errors.nameExpense
                    ? "border-roman-500"
                    : "border-viridian-green-200"
                }`}
              />
              {errors.nameExpense && (
                <div className="text-roman-500 text-sm">
                  {errors?.nameExpense.message}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="private"
                className="p-1 dark:text-viridian-green-50"
              >
                Privada <span className="text-roman-500 text-lg">*</span>
              </label>
              <select
                id="private"
                {...register("private")}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
                  errors.private
                    ? "border-roman-500"
                    : "border-viridian-green-200"
                }`}
              >
                <option disabled defaultValue={""}>
                  -- Selecciona --
                </option>
                <option value="general">General</option>
                <option value="valle_oriental">Valle oriental</option>
                <option value="asturias">Asturias</option>
              </select>
              {errors.private && (
                <div className="text-roman-500 text-sm">
                  {errors?.private.message}
                </div>
              )}
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
                {...register("amount")}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
                  errors.amount
                    ? "border-roman-500"
                    : "border-viridian-green-200"
                }`}
              />
              {errors.amount && (
                <div className="text-roman-500 text-sm">
                  {errors?.amount.message}
                </div>
              )}
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
                {...register("quantity")}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
                  errors.quantity
                    ? "border-roman-500"
                    : "border-viridian-green-200"
                }`}
              />
              {errors.quantity && (
                <div className="text-roman-500 text-sm">
                  {errors?.quantity.message}
                </div>
              )}
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
                {...register("description")}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
                  errors.description
                    ? "border-roman-500"
                    : "border-viridian-green-200"
                }`}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="mt-4 mx-auto p-2 w-4/6 bg-zuccini-800 hover:bg-zuccini-600 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1 disabled:opacity-50 disabled:hover:bg-zuccini-800 cursor-pointer"
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
