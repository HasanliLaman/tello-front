import React, { useEffect } from "react";
import { forgetPasswordSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../server";
import StyleForgetPassword from "./style";

interface InputTypes {
  email: string;
}

const ForgetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tello | Şifrəmi unutdum";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>({
    resolver: yupResolver(forgetPasswordSchema),
  });

  const submitHandler = async function (data: { email: string }) {
    try {
      await api.post(`/users/forgetPassword`, data);
      reset({
        email: "",
      });
      toast.success("Email hesabına link göndərilmişdir!");
    } catch (error) {
      toast.error("Bu email ünvanli istifadəçi mövcud deyil!");
      throw error;
    }
  };

  return (
    <StyleForgetPassword>
      <h1>Şifrəni yenilə</h1>
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
        <p>{/* <Link to="../signup">Qeydiyyat</Link> */}</p>
        <button>Göndər</button>
      </form>
    </StyleForgetPassword>
  );
};

export default ForgetPassword;
