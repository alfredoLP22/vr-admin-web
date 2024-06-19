import * as yup from "yup";

export const schemaResident = yup
  .object({
    fullname: yup.string().required('El nombre del residente es un valor requerido'),
    private: yup.string().required('La privada es un valor requerido'),
    numberOfHouse: yup.string().required('El numero de casa es un valor requerido'),
    email: yup.string().required('El email es un valor requerido').email('No es un email valido'),
    phoneNumber: yup.string().required('El numero de telefono es ub valor requerido')
  })
  .required();
