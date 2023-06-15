'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserInfo, clearUserInfo } from "@/reducers/userSlice";
import Cookies from "js-cookie";

function UserMenu() {
  const user = useSelector(getUserInfo);
  const dispatch = useDispatch();
  const router = useRouter();
  const UserLogOut = () => {
    dispatch(clearUserInfo());
    Cookies.remove("token");
    Cookies.remove("refresh_token");
    router.push('/')
  };
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="border-b">
        <p className="text-end">
          <Link href="/updateinfo">Update Information</Link>
        </p>
      </div>
      <div className="border-b">
        <p className="text-end">
          <Link href="/changepassword">Change Password</Link>
        </p>
      </div>
      {user?.is_owner && (
        <div className="border-b">
          <p className="text-end">
            <Link href="/housemanage">Manage House</Link>
          </p>
        </div>
      )}
      <div>
        {user?.is_superuser ? (
          <div>
            <div className="border-b">
              <p className="text-end">
                <Link href="/manageuser">Manage User</Link>
              </p>
            </div>
            <div className="border-b">
              <p className="text-end">
                <Link href="/verifyuser">Verify User Account</Link>
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="border-b cursor-pointer">
        <p onClick={UserLogOut} className="text-end">Thoat</p>
      </div>
    </div>
  );
}

export default UserMenu;
