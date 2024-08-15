import * as yup from "yup";

export const schemaResident = yup
  .object({
    fullname: yup
      .string()
      .required("El nombre del residente es un valor requerido")
      .trim(),
    private: yup.string().required("La privada es un valor requerido").trim(),
    numberOfHouse: yup
      .string()
      .required("El numero de casa es un valor requerido")
      .trim(),
    email: yup
      .string()
      .required("El email es un valor requerido")
      .email("No es un email valido")
      .trim(),
    phoneNumber: yup
      .string()
      .required("El numero de telefono es ub valor requerido")
      .trim(),
  })
  .required();
