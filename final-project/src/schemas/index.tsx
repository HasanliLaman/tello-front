import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("This field is required."),
  email: yup
    .string()
    .email("Wrong email format.")
    .required("This field is required."),
  phone: yup
    .string()
    .min(7, "Wrong number format.")
    .max(7, "Wrong number format.")
    .required("This field is required."),
  password: yup
    .string()
    .min(4, "Password length should be 4-15 characters.")
    .max(15, "Password length should be 4-15 characters.")
    .required("This field is required."),
  terms: yup.bool().oneOf([true], "You should agree terms and conditions."),
});

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Wrong email format.")
    .required("This field is required."),
  password: yup
    .string()
    .min(4, "Password length should be 4-15 characters.")
    .max(15, "Password length should be 4-15 characters.")
    .required("This field is required."),
});
