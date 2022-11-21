import React from "react";
import StyleCommentForm from "./style";
import { reviewSchema } from "../../../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";
import { api } from "../../../server";
import { toast } from "react-toastify";

interface InputTypes {
  rating: string;
  content: string;
}

const CommentForm: React.FC<{
  setComments: (arr: any) => void;
  comments: any;
}> = ({ setComments, comments }) => {
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const { product } = useSelector((state: RootState) => state.product);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>({
    resolver: yupResolver(reviewSchema),
  });

  const submitHandler = async function (data: {
    rating: string;
    content: string;
  }) {
    try {
      if (!loggedIn) {
        navigate("/join/login");
        return;
      }

      const res = await api.post(
        `/products/${product.data.product._id}/review`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setComments([...comments, res.data.data.review]);

      reset({
        rating: "",
        content: "",
      });
    } catch (err) {
      toast.error("You have already commented.");
    }
  };

  return (
    <StyleCommentForm>
      <h2>Rəy Bildir</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="rating">Məhsulu 5 bal üzərindən dəyərləndirin</label>
          <select id="rating" {...register("rating")}>
            <option value="">Dəyərləndirmə</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.rating?.message && <p>{errors.rating?.message}</p>}
        </div>
        <div>
          <label htmlFor="content">Rəyinizi yazın</label>
          <textarea
            rows={5}
            id="content"
            placeholder="Rəyinizi buraya yazın"
            {...register("content")}
          ></textarea>
          {errors.content?.message && <p>{errors.content?.message}</p>}
        </div>
        <button>Rəyini bildir</button>
      </form>
    </StyleCommentForm>
  );
};

export default CommentForm;
