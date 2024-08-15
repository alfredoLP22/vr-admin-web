import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { InputForgotPassword } from "../../interfaces/user.type";
import { schemaValidationForgotPassword } from "../helpers/schemaValidationLogin";
import { yupResolver } from "@hookform/resolvers/yup";

const FormChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<InputForgotPassword>({
    resolver: yupResolver(schemaValidationForgotPassword),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<InputForgotPassword> = (data) => {
    console.log(data);
    navigate("/admin");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:w-2/3 h-2/3 items-center justify-center mt-[9rem] mx-auto gap-4"
    >
      <h1 className="text-3xl font-semibold text-viridian-green-700 dark:text-viridian-green-50">
        ¿Olvidaste tu contraseña?
      </h1>
      <div className="flex flex-col w-4/6">
        <label htmlFor="email" className="p-1 dark:text-viridian-green-50">
          Correo
        </label>
        <input
          type="email"
          placeholder="Ej: correo@correo.com"
          id="email"
          {...register("email")}
          className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border ${
            errors.email ? "border-roman-500" : "border-viridian-green-200"
          }`}
        />
        {errors.email && (
          <div className="text-roman-500 text-sm">{errors?.email.message}</div>
        )}
      </div>
      <div className="flex flex-col md:flex-row w-4/6 gap-2 justify-end">
        <Link
          to={"/"}
          className="text-sm hover:underline text-zuccini-800 dark:text-viridian-green-50"
        >
          Ya tengo una cuenta
        </Link>
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="mt-4 p-2 w-4/6 bg-zuccini-800 hover:bg-zuccini-600 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1 disabled:opacity-50 disabled:hover:bg-zuccini-800 cursor-pointer"
      >
        Recuperar cuenta
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

export default FormChangePassword;
