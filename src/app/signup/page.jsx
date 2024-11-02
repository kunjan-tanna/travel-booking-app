"use client";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Image from "next/image";
import Dubai from "../../../public/assets/dubai.jpg";
import React from "react";

const SignUp = () => {
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
          <form className="mt-12 flex flex-col  items-center w-full gap-8">
            <Input
              className={
                "w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              }
              type={"text"}
              placeholder={"John123"}
            />
            <Input
              className={
                "w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              }
              type={"email"}
              placeholder={"John@gmail.com"}
            />{" "}
            <Input
              className={
                "w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              }
              type={"password"}
              placeholder={"****"}
            />
            <Button
              className={
                "w-full mt-12 mx-auto cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600"
              }
              label={"Submit"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
