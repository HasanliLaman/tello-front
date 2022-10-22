import React, { useState } from "react";
import eye from "../../../assets/images/icon-eye.svg";
import { logInSchema } from "../../../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { getToken } from "../../../asyncThunk";
import { Link } from "react-router-dom";

interface InputTypes {
  email: string;
  password: string;
}

const LogInForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>({
    resolver: yupResolver(logInSchema),
  });

  const dispacth = useDispatch<AppDispatch>();

  const submitHandler = async function (data: {
    email: string;
    password: string;
  }) {
    dispacth(getToken({ url: "login", body: data }));

    reset({
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
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
      <p>
        <Link to="../forgetpassword">Şifrəni unutmusunuz?</Link>
      </p>
      <button>Daxil ol</button>
    </form>
  );
};

export default LogInForm;
