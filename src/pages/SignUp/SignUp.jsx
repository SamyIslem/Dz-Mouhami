import React, { useState } from "react";
import Poignee from "@/images/poignee.png";
import { useTranslation } from "react-i18next";
import Eye from "@/icons/eye.svg?react";
import ClosedEye from "@/icons/closedEye.svg?react";
import Google from "@/icons/google.svg?react";
import { Langues } from "@/ui";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const schema = z
    .object({
      username: z.string().nonempty("Username is required"),
      password: z
        .string()
        .nonempty("Password is required")
        .min(6, { message: "Password must be at least 6 characters long" }),
      confirmPassword: z
        .string()
        .nonempty("Confirm Password is required")
        .min(6, {
          message: "Confirm Password must be at least 6 characters long",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("user");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.info("Submitting form...");

    try {
      const url =
        selectedOption === "user"
          ? "http://127.0.0.1:3000/create"
          : "http://127.0.0.1:3000/lawyer_account/create";
      const info = {
        name: data.username,
        password: data.password,
      };
      const response = await axios.post(url, info);

      setLoading(false);
      toast.dismiss(toastId);
      toast.success(response);
      selectedOption === "lawyer"
        ? navigate("/lawyer/dashboard")
        : navigate("/");
    } catch (error) {
      setLoading(false);
      toast.dismiss(toastId);
      toast.error("error when sign in");

      console.error(error);
    }
  };

  const [hidden, setHidden] = useState(true);

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <ToastContainer />
      <div
        className=" grid grid-cols-1 lg:grid-cols-2 relative items-center bg-white "
        dir={t("dir")}
      >
        <div className="hidden lg:block lg:h-screen  lg:overflow-hidden ">
          <img
            src={Poignee}
            alt="poignée de mains"
            className="h-full object-cover  w-full  "
          />
        </div>

        <div id="coordonées" className="flex flex-col gap-2 items-center">
          <div
            className="flex flex-col items-center justify-center gap-8 "
            dir={t("dir")}
          >
            <h1 className="font-bold text-primary text-2xl flex justify-center w-full ">
              Dz_Mouhami
            </h1>
            <div className="flex flex-col gap-5 w-ful ">
              <h1 className="font-semibold">{t("welcome")} </h1>
              <p className="text-lg text-black"> {t("register")} </p>

              <div id="typeCompte" className="flex flex-col gap-2">
                <label htmlFor="Nom" className="font-medium ">
                  {t("typeCompte")}
                </label>
                <select
                  className="cursor-pointer outline-none bg-label border-2 w-full p-2 rounded-xl pr-12"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="lawyer">{t("lawyer")}</option>
                  <option value="user"> {t("user")} </option>
                </select>
              </div>

              <div id="username" className="flex flex-col gap-2 relative ">
                <label htmlFor="username" className="font-medium ">
                  {t("username")}
                </label>
                <input
                  type="text"
                  className="outline-none bg-label border-2 w-full p-2 rounded-xl pr-12"
                  placeholder={t("username")}
                  id="username"
                  {...register("username")}
                />
              </div>
              {errors.username && (
                <p className=" text-red-600">{errors.username.message}</p>
              )}

              <div id="password" className="flex flex-col gap-2 relative ">
                <label htmlFor="Mot De Passe" className="font-medium ">
                  {t("password")}
                </label>
                <input
                  type={`${hidden ? "password" : "text"}`}
                  className="outline-none bg-label border-2 w-full p-2 rounded-xl pr-12"
                  placeholder={t("password")}
                  id="Mot De Passe"
                  {...register("password")}
                />

                <div
                  className="absolute right-[10px] bottom-[12px] cursor-pointer"
                  onClick={() => {
                    setHidden(!hidden);
                  }}
                >
                  {hidden ? <Eye /> : <ClosedEye />}
                </div>
              </div>
              {errors.password && (
                <p className=" text-red-600">{errors.password.message}</p>
              )}

              <div
                id="confirmPassword"
                className="flex flex-col gap-2 relative "
              >
                <label htmlFor="Mot De Passe" className="font-medium ">
                  {t("confirmPassword")}
                </label>
                <input
                  type={`${hidden ? "password" : "text"}`}
                  className="outline-none bg-label border-2 w-full p-2 rounded-xl pr-12"
                  placeholder={t("confirmPassword")}
                  id="Mot De Passe"
                  {...register("confirmPassword")}
                />

                <div
                  className="absolute right-[10px] bottom-[12px] cursor-pointer"
                  onClick={() => {
                    setHidden(!hidden);
                  }}
                >
                  {hidden ? <Eye /> : <ClosedEye />}
                </div>
              </div>
            </div>
          </div>
          {errors.confirmPassword && (
            <p className=" text-red-600">{errors.confirmPassword.message}</p>
          )}

          <div className="w-[280px] flex flex-col gap-4 mt-4">
            <input
              className="bg-secondaryButton w-full text-white font-bold py-2 cursor-pointer rounded-lg "
              type="submit"
              disabled={loading}
              value={t("finaliseLogIn")}
            />

            <div className="flex gap-3 items-center w-full justify-center border-2 rounded-xl p-2 cursor-pointe font-bold ">
              <Google />
              <span> {t("Google")} </span>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-0">
          <Langues cover />
        </div>
      </div>
    </form>
  );
};

export default SignUp;
