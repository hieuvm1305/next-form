"use client";
import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { login } from "@/service";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/reducers/userSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";

function LoginForm() {
  const googleClientID: string = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
  const dispatch = useDispatch();
  const router = useRouter();
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
  const onSubmit = async (data: FormData) => {
    try {
      const response = await login(data);
      if (response) {
        dispatch(setUserInfo(response.data.data.user));
        Cookies.set("token", response.data.data.access_token);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-52">
      <div className="w-4/5 lg:w-2/5 mx-auto bg-white border rounded-md px-5">
        <form onSubmit={handleSubmit(onSubmit)} className="">
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
              <p className="text-base font-semibold mx-3 my-2">Sign In</p>
            </Button>
          </div>
        </form>
        <div className="flex justify-center px-5">
          <Link href="/register" className="text-sky-500">
            You do not have an account? Sign up
          </Link>
        </div>
        <div>
          <p className="text-center">Or sign in with</p>
          <div className="w:4/5 md:w-3/5 mx-auto flex justify-center my-4">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
