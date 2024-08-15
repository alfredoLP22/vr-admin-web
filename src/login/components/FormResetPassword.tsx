import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputResetPassword } from "../../interfaces/user.type";
import { schemaValidationResetPassword } from "../helpers/schemaValidationLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const FormResetPassword: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<InputResetPassword>({
    resolver: yupResolver(schemaValidationResetPassword),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<InputResetPassword> = (data) => {
    console.log(data);
    navigate("/admin");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:w-2/3 h-2/3 items-center justify-center mt-[9rem] mx-auto gap-4"
    >
      <h1 className="text-3xl font-semibold text-viridian-green-700 dark:text-viridian-green-50">
        Reinicio de contraseña
      </h1>
      <div className="flex flex-col w-4/6">
        <label htmlFor="password" className="p-1 dark:text-viridian-green-50">
          Contraseña
        </label>
        <input
          type={isVisible ? "text" : "password"}
          placeholder="********"
          id="password"
          {...register("password")}
          className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
            errors.password ? "border-roman-500" : "border-viridian-green-200"
          }`}
        />
        {errors.password && (
          <div className="text-roman-500 text-sm">
            {errors?.password.message}
          </div>
        )}
      </div>
      <div className="flex flex-col w-4/6">
        <label
          htmlFor="confirm-password"
          className="p-1 dark:text-viridian-green-50"
        >
          Confirmar contraseña
        </label>
        <input
          type={isVisible ? "text" : "password"}
          placeholder="********"
          id="confirm-password"
          {...register("confirmPassword")}
          className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
            errors.confirmPassword
              ? "border-roman-500"
              : "border-viridian-green-200"
          }`}
        />
        {errors.confirmPassword && (
          <div className="text-roman-500 text-sm">
            {errors?.confirmPassword.message}
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row w-4/6 gap-2 items-center">
        <label className="switch">
          <input
            type="checkbox"
            className="cursor-pointer"
            onClick={() => setIsVisible(!isVisible)}
          />
          <span className="slider"></span>
        </label>
        <span className="dark:text-viridian-green-50">Mostrar contraseña</span>
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="mt-4 p-2 w-4/6 bg-zuccini-800 hover:bg-zuccini-600 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1 disabled:opacity-50 disabled:hover:bg-zuccini-800 cursor-pointer"
      >
        Confirmar
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
  );
};

export default FormResetPassword;
