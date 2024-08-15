import React, { MouseEventHandler } from "react";
// import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { addUser } from "../../../../features/user/userSlice";
import { AddResidentProps, InputsResident } from "../interfaces/resident.type";
import { schemaResident } from "../helpers/schemaValidation";

const AddResident: React.FC<AddResidentProps> = ({
  closeInviteResident,
  isInviteResident,
}: {
  closeInviteResident: MouseEventHandler;
  isInviteResident: boolean;
}) => {
  // const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<InputsResident>({
    resolver: yupResolver(schemaResident),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<InputsResident> = (data) => {
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
              Invitar residente
            </h3>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <label
                htmlFor="fullname"
                className="p-1 dark:text-viridian-green-50"
              >
                Nombre residente{" "}
                <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Jose Lopez"
                {...register("fullname")}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
                  errors.fullname
                    ? "border-roman-500"
                    : "border-viridian-green-200"
                }`}
              />
              {errors.fullname && (
                <div className="text-roman-500 text-sm">
                  {errors?.fullname.message}
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
                htmlFor="numberOfHouse"
                className="p-1 dark:text-viridian-green-50"
              >
                Numero casa <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="numberOfHouse"
                type="text"
                min={1}
                placeholder="10"
                autoComplete="address-level2"
                {...register("numberOfHouse")}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
                  errors.numberOfHouse
                    ? "border-roman-500"
                    : "border-viridian-green-200"
                }`}
              />
              {errors.numberOfHouse && (
                <div className="text-roman-500 text-sm">
                  {errors?.numberOfHouse.message}
                </div>
              )}
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
                {...register("email")}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
                  errors.email
                    ? "border-roman-500"
                    : "border-viridian-green-200"
                }`}
              />
              {errors.email && (
                <div className="text-roman-500 text-sm">
                  {errors?.email.message}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="p-1 dark:text-viridian-green-50"
              >
                Telefono <span className="text-roman-500 text-lg">*</span>
              </label>
              <input
                id="phoneNumber"
                type="tel"
                {...register("phoneNumber")}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
                  errors.email
                    ? "border-roman-500"
                    : "border-viridian-green-200"
                }`}
              />
              {errors.phoneNumber && (
                <div className="text-roman-500 text-sm">
                  {errors?.phoneNumber.message}
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="mt-4 mx-auto p-2 w-4/6 bg-zuccini-800 hover:bg-zuccini-600 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1 disabled:opacity-50 disabled:hover:bg-zuccini-800 cursor-pointer"
          >
            Invitar residente
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
  );
};

export default AddResident;
