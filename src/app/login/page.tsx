"use client";
import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function LoginForm() {
  // declare schema using yup
  const schema = yup.object({
    email: yup.string().email("Invalid Email!").required("Email Is required!"),
    password: yup.string().required("Password Is required!"),
  });
  //type for form object
  type FormData = yup.InferType<typeof schema>;
  /*
  -define useForm with yupResolver
  - register is defined field to validate
  - handleSubmit: handle submit event
  - formState: {errors}: errors when validate
  - using error and helperText of material UI to handle errors message
  */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  //onSubmit
  const onSubmit = (data: FormData) => console.log(data);
  
  return (
    <div className="mt-52">
      <div className="w-3/5 mx-auto bg-white border rounded-md px-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-3">
            <p>
              Email<i className="text-red-500">*</i>
            </p>
            <TextField
              fullWidth
              size="small"
              type="text"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
            />
          </div>
          <div className="my-3">
            <p>
              Password<i className="text-red-500">*</i>
            </p>
            <TextField
              size="small"
              type="password"
              fullWidth
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
            />
          </div>
          <div className="flex justify-center items-center my-3">
            <Button type="submit" variant="contained" className="bg-sky-500">
              <p className="text-sm font-semibold">Sign In</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
