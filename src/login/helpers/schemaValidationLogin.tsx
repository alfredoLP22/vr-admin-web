import * as yup from "yup";

export const schemaValidationLogin = yup
  .object({
    email: yup
      .string()
      .required("El email es un valor requerido")
      .email("No es un email valido")
      .trim(),
    password: yup
      .string()
      .required("La contraseña es necesaria")
      .trim()
      .min(5, "La contraseña debe ser minimo 5 caracteres"),
  })
  .required();

export const schemaValidationResetPassword = yup
  .object({
    confirmPassword: yup
      .string()
      .required("La confirmacion de contraseña es necesaria")
      .trim()
      .min(5, "La confirmacion de contraseña debe ser minimo 5 caracteres"),
    password: yup
      .string()
      .required("La contraseña es necesaria")
      .trim()
      .min(5, "La contraseña debe ser minimo 5 caracteres"),
  })
  .required();

export const schemaValidationForgotPassword = yup
  .object({
    email: yup
      .string()
      .required("El email es un valor requerido")
      .email("No es un email valido")
      .trim(),
  })
  .required();
