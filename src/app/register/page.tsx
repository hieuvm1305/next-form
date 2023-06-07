"use client";
import React, { ChangeEvent } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { type } from "os";

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phonenumber: string;
  is_user?: boolean | null;
  is_owner?: boolean | null;
}
function UserRegister() {
  const schema = yup.object({
    username: yup.string().required("Username is required!"),
    email: yup.string().email("Invalid Email!").required("Email Is required!"),
    password: yup
      .string()
      .required("Password Is required!")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    phonenumber: yup.string().min(8, "phonenumber is least 8 digits"),
  });
  type FormValue = yup.InferType<typeof schema>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const [typeOfUser, settypeOfUser] = useState("");
  const handleChange = (event: SelectChangeEvent) =>
    settypeOfUser(event.target.value as string);
  const onSubmit = (data: FormValues) => {
    let requestdata = { ...data };
    if(typeOfUser === "" || typeOfUser === "user" ){
      requestdata = { ...requestdata, is_user: true };
    }
     else {
      requestdata = { ...requestdata, is_owner: true };
    }
    console.log(requestdata);
  };

  return (
    <div>
      <div className="w-3/5 mx-auto border rounded-md px-5 py-3 mt-10">
        <h2 className="text-2xl font-semibold">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4">
            <p className="my-2">
              Email <i className="text-red-600">*</i>
            </p>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
            />
          </div>
          <div className="my-4">
            <p className="my-2">
              Password <i className="text-red-600">*</i>
            </p>
            <TextField
              fullWidth
              type="password"
              size="small"
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
            />
          </div>
          <div className="my-4">
            <p className="my-2">
              Confirm Password <i className="text-red-600">*</i>
            </p>
            <TextField
              fullWidth
              type="password"
              size="small"
              variant="outlined"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword && errors.confirmPassword.message
              }
            />
          </div>
          <div className="my-4">
            <p className="my-2">
              UserName <i className="text-red-600">*</i>
            </p>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username && errors.username.message}
            />
          </div>
          <div className="my-4">
            <p className="my-2">
              PhoneNumber <i className="text-red-600">*</i>
            </p>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              {...register("phonenumber")}
              error={!!errors.phonenumber}
              helperText={errors.phonenumber && errors.phonenumber.message}
            />
          </div>
          <div className="my-4">
            <p className="my-2">
              Type of Account <i className="text-red-600">*</i>
            </p>
            <FormControl fullWidth>
              <Select value={typeOfUser} onChange={handleChange} size="small">
                {" "}
                <MenuItem value={"user"} selected>User</MenuItem>
                <MenuItem value={"owner"}>Owner</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="my-4 flex justify-center">
            <Button
              variant="outlined"
              type="submit"
              color="error"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
