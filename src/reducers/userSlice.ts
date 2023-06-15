"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
interface UserInfo {
  id: number;
  last_login: string | null;
  username: string;
  email: string;
  phonenumber: string;
  is_user: boolean;
  is_owner: boolean;
  is_superuser: boolean;
  is_staff: boolean;
  is_verified: boolean;
  is_deleted: boolean;
  verified_at?: string;
}

interface userState {
  userInfo: UserInfo | null;
}
const initialState: userState = {
  userInfo: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    clearUserInfo: (state) => {
      state.userInfo = null;
    },
  },
});
export const { setUserInfo, clearUserInfo } = userSlice.actions;
export const getUserInfo = (state: RootState) => state.user.userInfo;
export default userSlice.reducer;
