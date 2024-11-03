"use client";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Image from "next/image";
import Dubai from "../../../public/assets/dubai.jpg";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import AXIOS_API from "@/utils/axiosAPI";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    if (Object.keys(errors)?.length > 0) {
      toast.error("Enter Valid Data");
      return;
    }
    setIsLoading(true);
    try {
      await AXIOS_API.post("/register", data);
      toast.success("Success! Redirect to login");
      setTimeout(() => {
        router.push("/login");
      }, 2500);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <div className="relative h-screen w-full">
      <div className="relative h-full w-full">
        <Image
          src={Dubai}
          className="brightness-50 h-full w-full object-cover"
          alt="DubaiImage"
        />
        <div className="h-[450px] w-[400px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
          <h2 className="text-center p-4 font-semibold text-slate-800 text-2xl border-b border-slate-500">
            Create an account
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col  items-center w-full gap-8"
          >
            <Input
              className={
                "w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              }
              type={"text"}
              placeholder={"John123"}
              register={register("username")}
            />
            <Input
              className={
                "w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              }
              type={"email"}
              placeholder={"John@gmail.com"}
              register={register("email")}
            />{" "}
            <Input
              className={
                "w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              }
              type={"password"}
              placeholder={"****"}
              register={register("password")}
            />
            <Button
              className={
                "w-full mt-12 mx-auto cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600"
              }
              label={"Submit"}
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
