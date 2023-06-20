"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, clearUserInfo } from "@/reducers/userSlice";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import Image from "next/image";
import { logo } from "@/ultis/imgPath";
import Link from "next/link";
import UserMenu from "../userMenu/UserMenu";

export const Header: React.FC = () => {
  const router = useRouter();
  const userdata = useSelector(getUserInfo);
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);



  // useEffect(() => {
  //   // Function to handle clicks outside the menu
  //   const handleClickOutside: EventListener = (event: Event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //       setIsOpenMenu(false);
  //     }
  //   };
  //   // Add event listener when the component mounts
  //   document.addEventListener("mousedown", handleClickOutside);
  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleMouseLeave = () =>{
    setIsOpenMenu(false);
  }
  return (
    <div className="h-[70px]">
      <div className="w-full h-full px-8 flex flex-row justify-between items-center bg-orange-100">
        <div className="w-1/4">
          <Image
            src={logo}
            width={100}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div className="w-3/4 flex flex-row items-center">
          <div className="lg:hidden w-full">
            <div className="flex justify-end items-center">
              <div
                className="flex flex-col cursor-pointer "
                onClick={handleOpenMenu}
              >
                <div className="w-9 h-2 bg-sky-500 mt-1"></div>
                <div className="w-9 h-2 bg-sky-500 mt-1"></div>
                <div className="w-9 h-2 bg-sky-500 mt-1"></div>
              </div>
              <div
                className={`menu absolute ${
                  isOpenMenu ? "right-0" : "right-[-300px]"
                } top-16 w-[300px] rounded-md bg-white`}
                ref={menuRef}
              >
                {userdata ? (
                  <div className="w-full">
                    <div className="">
                      <div className="flex justify-end px-3 py-1 border-sky-400 border rounded-md">
                        <p
                          className="cursor-pointer font-semibold"
                          onClick={() => {
                            setisOpenDropDown(!isOpenDropDown);
                          }}
                        >
                          HELLO, {userdata.username}
                        </p>
                      </div>
                      {isOpenDropDown && (
                        <div className="w-full bg-white border px-1 py-1 rounded-md z-20" onMouseLeave={handleMouseLeave}>
                          <UserMenu />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row justify-end items-center my-2 mx-3">
                    <Button
                      className="px-3 py-2"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        router.push("/login");
                      }}
                    >
                      Log in
                    </Button>
                  </div>
                )}
                <div className="">
                  <ul className="flex flex-col items-center">
                    <li className="w-full border border-y-indigo-500 px-3">
                      <Link
                        className="hover:text-sky-500 font-semibold text-left"
                        href="/"
                      >
                        <p className="text-right text-lg">HOME</p>
                      </Link>
                    </li>
                    <li className="w-full border border-b-indigo-500 px-3">
                      <Link
                        className="hover:text-sky-500 font-semibold text-left"
                        href="/"
                      >
                        <p className="text-right text-lg">SEARCH JOBS</p>
                      </Link>
                    </li>
                    <li className="w-full border border-b-indigo-500 px-3">
                      <Link
                        className="hover:text-sky-500 font-semibold text-left"
                        href="/"
                      >
                        <p className="text-right text-lg">RECRUITERS</p>
                      </Link>
                    </li>
                    <li className="w-full border border-b-indigo-500 px-3">
                      <Link
                        className="hover:text-sky-500 font-semibold text-left"
                        href="/"
                      >
                        <p className="text-right text-lg">COMPANY</p>
                      </Link>
                    </li>
                    <li className="w-full border border-b-indigo-500 px-3">
                      <a className="hover:text-sky-500 font-semibold" href="/">
                        <p className="text-right text-lg">COMPANY</p>
                      </a>
                    </li>
                    <li className="w-full border border-b-indigo-500 px-3">
                      <a className="hover:text-sky-500 font-semibold" href="#">
                        <p className="text-right text-lg">COMPANY</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/5 hidden lg:block">
            <ul className="flex flex-row items-center justify-between">
              <li>
                <a className="hover:text-sky-500 font-semibold" href="/">
                  HOME
                </a>
              </li>
              <li>
                <a className="hover:text-sky-500 font-semibold" href="/">
                  SEARCH JOBS
                </a>
              </li>
              <li className="nav-item">
                <a className="hover:text-sky-500 font-semibold" href="/">
                  RECRUITERS
                </a>
              </li>
              <li className="nav-item">
                <a className="hover:text-sky-500 font-semibold" href="/">
                  COMPANIES
                </a>
              </li>
              <li className="nav-item">
                <a className="hover:text-sky-500 font-semibold" href="/">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="hover:text-sky-500 font-semibold" href="#">
                  MORE
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/5 hidden lg:block">
            {userdata ? (
              <div className="flex flex-row  justify-center items-center">
                <div className="relative">
                  <div className="px-3 py-1">
                    <p
                      className="border-b cursor-pointer"
                      onClick={() => {
                        setisOpenDropDown(!isOpenDropDown);
                      }}
                    >
                      Hello, {userdata.username}
                    </p>
                  </div>
                  {isOpenDropDown && (
                    <div
                      className="inline-block absolute top-10 right-0 w-[300px] border px-1 py-1 rounded-md z-20"
                      ref={menuRef}
                    >
                      <UserMenu />
                    </div>
                  )}
                </div>
                <div className="cursor-pointer">{/* <Notification /> */}</div>
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center">
                <Button
                  className="px-3 py-2"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Log in
                </Button>
              </div>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
