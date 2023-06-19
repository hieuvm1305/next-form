import instance from "./instance";
import { FormRegisterValues, FormLogin, User, Password } from "@/ultis/types";
import QueryString from 'qs'

export const getHomePage = () => {
  return instance.request({
    method: "GET",
    url: "homepage",
    params: { page: 1 },
  });
};
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

export const loginWithGoogle = (credential: string) => {
  return instance.request({
    method: "POST",
    url: "login-google/",
    data: { token: credential },
  });
};

export const getUserList = (pageNum: number) => {
  return instance.request({
    method: "GET",
    url: "manageuser/",
    params: { page: pageNum },
  });
};

export const deleteUserAccount = (userId: number) => {
  return instance.delete(`manageuser/${userId}`);
};

export const changeUserInfo = (params: User) => {
  return instance.request({
    method: "PUT",
    url: "userinfo/",
    data: params,
  });
};
export const changeNewPassword = (newPasswordData : Password) => {
  return instance.request({
    method: "PUT",
    url: "changepassword",
    data: newPasswordData,
  });
};

export const createHouse = (params: any) => {
  return instance.request({
    method: "POST",
    url: "house/",
    data: params,
  });
};
export const getListofHouses = (pageNum : number) => {
  return instance.request({
    method: "GET",
    url: "house/",
    params: {page: pageNum}
  });
};

export const updateHouseInfo = (houseId : number, params : any) => {
  return instance.request({
    method: "PUT",
    url: `house/${houseId}`,
    data: params,
  });
};

//api delete house
export const deleteHouse = (houseId : number) => {
  return instance.delete(`house/${houseId}`);
};
//api create room
export const createRoom = (houseId : number, params : any) => {
  return instance.request({
    method: "POST",
    url: `room/house=${houseId}`,
    data: params,
  });
};

export const getListRoom = (houseId : number, pageNum : number) => {
  return instance.request({
    method: "GET",
    url: `room/house=${houseId}`,
    params: {page : pageNum}
  });
};
export const getRoomDetail = (roomId : number) => {
  return instance.get(`room/${roomId}`);
};
//api update room
export const updateRoomInfo = (roomId : number, params : any) => {
  return instance.request({
    method: "PUT",
    url: `room/${roomId}`,
    data: params,
  });
};
// api delete room 
export const deleteRoom = (roomId : number) => {
  return instance.delete(`room/${roomId}`)
}

//api search room
export const searchRoom = (pageNum : number, paramsSearch : any) => {
  return instance.request({
    method : "GET",
    url : "search/",
    params : {page: pageNum, ...paramsSearch},
    paramsSerializer: function (params) {
      return QueryString.stringify(params, { encodeValuesOnly: true });
    },
  })
}
//API post Notice
export const createNotification = (NotiData : any) => {
  return instance.request({
    method: "POST",
    url: `notice`,
    data: NotiData
  })
}
// API get notice
export const getNotification = () => {
  return instance.get('notice')
}

//APi change is_read

export const updateNotification = (id : number) => {
  return instance.delete(`notice/${id}`)
}

