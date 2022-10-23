import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Bu sahə doldurulmalıdır."),
  email: yup
    .string()
    .email("Yanlış email formatı.")
    .required("Bu sahə doldurulmalıdır."),
  password: yup
    .string()
    .min(6, "Şifrə 6-10 simvol uzunluğunda olmalıdır.")
    .max(10, "Şifrə 6-10 simvol uzunluğunda olmalıdır.")
    .required("Bu sahə doldurulmalıdır."),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Şifrə və təkrar şifrə eyni olmalıdır."
    ),
  terms: yup.bool().oneOf([true], "Bu sahə doldurulmalıdır."),
});

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Yanlış email formatı.")
    .required("Bu sahə doldurulmalıdır."),
  password: yup
    .string()
    .min(6, "Şifrə 6-10 simvol uzunluğunda olmalıdır.")
    .max(10, "Şifrə 6-10 simvol uzunluğunda olmalıdır.")
    .required("Bu sahə doldurulmalıdır."),
});

export const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Yanlış email formatı.")
    .required("Bu sahə doldurulmalıdır."),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Şifrə 6-10 simvol uzunluğunda olmalıdır.")
    .max(10, "Şifrə 6-10 simvol uzunluğunda olmalıdır.")
    .required("Bu sahə doldurulmalıdır."),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Şifrə və təkrar şifrə eyni olmalıdır."
    ),
});

export const reviewSchema = yup.object().shape({
  rating: yup.string().required("Bu sahə doldurulmalıdır."),
  content: yup
    .string()
    .min(10, "Rəy ən azı 10 simvoldan ibarət olmalıdır.")
    .required("Bu sahə doldurulmalıdır."),
});
