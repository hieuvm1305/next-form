import React from "react";
import { useRef, useState, useEffect } from "react";
import { MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, clearUserInfo } from "@/reducers/userSlice";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { cookies } from "next/headers";
// import Cookies from "js-cookie";

function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userdata = useSelector(getUserInfo);
  const [isOpenDropdown, setisOpenDropdown] = useState(false);
  const menuRef: React.RefObject<HTMLElement> = useRef<HTMLElement>(null);
  const cookieStore = cookies();
  const createNew = () => {
    if (userdata) {
      router.push("/housecreate");
    }
  };

  useEffect(() => {
    const token = cookieStore.get("token");
    if (!token) {
      dispatch(clearUserInfo());
    }
  }, [dispatch, cookieStore]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent<Document, MouseEvent>) => {
      if (
        menuRef.current &&
        !menuRef.current.contains((event.target as Node)!)
      ) {
        setisOpenDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);
  return (
    <div className="h-[70px] ">
      <div className="w-full h-full flex flex-row justify-between items-center bg-white">
        <div className="mx-8">
          <h1
            className="text-4xl font-bold stroke-1 stroke-black text-sky-600 cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            PhongTro.com
          </h1>
        </div>
        <div className="mx-8 flex flex-row justify-between items-center gap-5">
          {userdata ? (
            <div className="flex flex-row items-center gap-5">
              <div className="relative">
                <div className="px-3 py-1">
                  <p
                    className="border-b cursor-pointer"
                    onClick={() => {
                      setisOpenDropdown(!isOpenDropdown);
                    }}
                  >
                    Hello, {userdata.username}
                  </p>
                </div>
                {isOpenDropdown && (
                  <div
                    className="inline-block absolute top-10 w-40 bg-gray-300 px-1 py-1 rounded-md z-20"
                    ref={menuRef}
                  >
                    <UserMenu />
                  </div>
                )}
              </div>
              <div className="cursor-pointer">
                <Notification />
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-between items-center gap-5">
              <Button
                className="px-3 py-2"
                variant="contained"
                color="primary"
                onClick={() => {
                  router.push("/signin");
                }}
              >
                Sign in
              </Button>
              <Button
                className="px-3 py-2"
                variant="contained"
                color="primary"
                onClick={() => {
                  router.push("/register");
                }}
              >
                Sign up
              </Button>
            </div>
          )}
          {userdata?.is_owner && (
            <div>
              <Button
                className="px-3 py-2"
                variant="contained"
                color="warning"
                onClick={createNew}
              >
                New House +
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
