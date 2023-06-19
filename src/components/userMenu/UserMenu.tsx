"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserInfo, clearUserInfo } from "@/reducers/userSlice";
import Cookies from "js-cookie";
import icons from "@/ultis/icons";
const {
  AccountCircleIcon,
  KeyIcon,
  FeedIcon,
  HomeIcon,
  ManageAccountsIcon,
  HowToRegIcon,
  LogoutIcon,
} = icons;
function UserMenu() {
  const user = useSelector(getUserInfo);
  const dispatch = useDispatch();
  const router = useRouter();
  const UserLogOut = () => {
    dispatch(clearUserInfo());
    Cookies.remove("token");
    Cookies.remove("refresh_token");
    router.push("/");
  };
  return (
    <div>
      <div>
        <ul>
          <li className="my-4 py-3 px-2 rounded-md text-sm hover:bg-slate-100">
            <Link href="/updateinfo">
              <div className="flex gap-4">
                <AccountCircleIcon /> <p>Update Infomation</p>
              </div>
            </Link>
          </li>
          <li className="my-4 py-3 px-2 rounded-md text-sm hover:bg-slate-100">
            <Link href="/changepassword">
              <div className="flex gap-4">
                <KeyIcon /> <p>Change Password</p>
              </div>
            </Link>
          </li>
          <li className="my-4 py-3 px-2 rounded-md text-sm hover:bg-slate-100">
            <Link href="/manage/post">
              <div className="flex gap-4">
                <FeedIcon />
                <p>Manage Post</p>
              </div>
            </Link>
          </li>
          <li className="my-4 py-3 px-2 rounded-md text-sm hover:bg-slate-100">
            <Link href="/manage/house">
              <div className="flex gap-4">
                <HomeIcon />
                <p>Manage House</p>
              </div>
            </Link>
          </li>
          {user?.is_superuser && (
            <li className="my-4 py-3 px-2 rounded-md text-sm hover:bg-slate-100">
              <Link href="/manageuser">
                <div className="flex gap-4">
                  <ManageAccountsIcon /> <p>Manage User</p>
                </div>
              </Link>
            </li>
          )}
          {user?.is_superuser && (
            <li className="my-4 py-3 px-2 rounded-md text-sm hover:bg-slate-100">
              <Link href="/verifyuser">
                <div className="flex gap-4">
                  <HowToRegIcon />
                  <p>Verify User Account</p>
                </div>
              </Link>
            </li>
          )}
          <li className="my-4 py-3 px-2 rounded-md text-sm hover:bg-slate-100">
            <div className="flex gap-4 border-b cursor-pointer">
              <LogoutIcon />
              <p onClick={UserLogOut} className="">
                Sign Out
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserMenu;
