"use client";
import React, { useEffect, useState } from "react";
import { getHomePage } from "@/service";
import { Header } from "@/components/header/Header";
import ListRoom from "@/components/ListRoom/ListRoom";
import UserMenu from "@/components/userMenu/UserMenu";

function Index() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const getRoomsAPI = async () => {
      try {
        const response = await getHomePage();
        if(response.status === 200){
          setRooms(response.data.results)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getRoomsAPI();
  }, []);
  return (
    <div>
      <Header />
      <div className="bg-banner py-[90px]">
        <div className="container w-[70%] lg:w-10/12 mx-auto">
          <h1 className="text-white font-semibold text-5xl font-sans text-center mb-[10px]">
            Best Naukri Search here
          </h1>
          <div className="flex w-full sm:w-4/5 lg:w-3/5 h-[50px] mx-auto mt-[30px] justify-center">
            <input
              type=""
              className="w-3/5 lg:w-4/5 rounded-l-xl px-2"
              placeholder="Search Job"
              name=""
            />
            <button className="w-2/5 lg:w-1/5 px-3 py-1 bg-indigo-600 text-white text-lg font-semibold rounded-r-xl">
              <a href="#">Subscribe</a>
            </button>
          </div>
          <div className="mx-auto mt-[50px] w-6.5/10 lg:w-1/2 ">
            <p className="text-center text-white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alterationThere are many variations
              of passages of Lorem Ipsum available, but the majority have
              suffered alteration
            </p>
          </div>
          <div className="flex justify-center mt-[50px]">
            <button className="py-[10px] w-3/5 md:w-1/5 lg:w-1/6 bg-black hover:bg-white text-white text-lg hover:text-black rounded-md"><a href="" className="">Discover More</a></button>
          </div>
        </div>
      </div>
      <div>
        <ListRoom rooms={rooms}/>
      </div>
    </div>
  );
}

export default Index;
