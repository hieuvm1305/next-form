import instance from "./instance";
import { FormRegisterValues, FormLogin } from "@/ultis/types";
export const getHomePage = () => {
    return instance.request({
        method: "GET",
        url: 'homepage',
        params: {page : 1}
    })
}
export const userRegister = (data: FormRegisterValues) => {
    return instance.request({
      method: "POST",
      url: "register/",
      data: data,
    });
};

export const login = (data: FormLogin) => {
    return instance.request({
      method: "POST",
      url: "login/",
      data: data,
    });
  };