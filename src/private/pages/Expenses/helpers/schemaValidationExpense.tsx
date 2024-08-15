import * as yup from "yup";

export const schemaExpense = yup
  .object({
    nameExpense: yup
      .string()
      .required("El nombre del residente es un valor requerido")
      .trim(),
    private: yup.string().required("La privada es un valor requerido").trim(),
    amount: yup
      .number()
      .transform((value, originalValue) => {
        return originalValue.trim() === "" ? undefined : value;
      })
      .integer("Debe ser un número válido")
      .positive("Debe ser positivo")
      .required("El monto es un valor requerido"),
    quantity: yup
      .number()
      .transform((value, originalValue) => {
        return originalValue.trim() === "" ? undefined : value;
      })
      .integer("Debe ser un número válido")
      .positive("Debe ser un número válido")
      .required("La cantidad es un valor requerido"),
  })
  .required();
