import React, { useEffect, useState } from "react";
import eye from "../../assets/images/icon-eye.svg";
import { resetPasswordSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { api } from "../../server";
import { useNavigate, useParams } from "react-router-dom";

interface InputTypes {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tello | Şifrəni yenilə";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const { token } = useParams();

  const navigate = useNavigate();

  const submitHandler = async function (data: {
    password: string;
    confirmPassword: string;
  }) {
    try {
      await api.patch(`/users/resetPassword/${token}`, data);
      reset({
        password: "",
        confirmPassword: "",
      });
      toast.success("Şifrə yeniləndi!");
      navigate("../login");
    } catch (error) {
      toast.error("Reset linki doğru deyil!");
      throw error;
    }
  };

  return (
    <section>
      <h1>Şifrəni yenilə</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
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
        <button className="btn-reset">Göndər</button>
      </form>
    </section>
  );
};

export default ResetPassword;
