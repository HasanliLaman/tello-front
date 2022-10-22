import React, { useState } from "react";
import eye from "../../../assets/images/icon-eye.svg";
import { signUpSchema } from "../../../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { getToken } from "../../../asyncThunk";

interface InputTypes {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  terms: boolean;
}

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>({
    resolver: yupResolver(signUpSchema),
  });

  const dispacth = useDispatch<AppDispatch>();

  const submitHandler = async function (data: {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
  }) {
    dispacth(getToken({ url: "signup", body: data }));

    reset({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <label htmlFor="name">Ad, Soyad</label>
        <input
          type="text"
          placeholder="Ad və soyadınızı daxil edin"
          id="name"
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="nümunə@gmail.com"
          id="email"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Şifrə</label>
        <div className="form-password">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Şifrənizi daxil edin"
            id="password"
            {...register("password")}
          />
          <img
            onClick={() => setPasswordVisible(!passwordVisible)}
            src={eye}
            alt="password"
          />
        </div>
        {errors.password?.message && <p>{errors.password?.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Təkrar şifrə</label>
        <div className="form-password">
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            placeholder="Şifrəni təkrar daxil edin"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <img
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            src={eye}
            alt="password"
          />
        </div>
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword?.message}</p>
        )}
      </div>
      <div className="form-terms">
        <input type="checkbox" id="terms" {...register("terms")} />
        <label htmlFor="terms">
          <span>İstifadəçi şərtləri </span>ilə razıyam
        </label>
        {errors.terms?.message && <p>{errors.terms?.message}</p>}
      </div>
      <button>Qeydiyyat</button>
    </form>
  );
};

export default SignUpForm;
