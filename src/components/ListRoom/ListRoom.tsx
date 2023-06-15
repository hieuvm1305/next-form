"use client";
import React from "react";
import { ListRoomProps } from "@/ultis/types";
import Link from "next/link";
import Image from "next/image";
import { VNDFORMAT } from "@/ultis/contanst";
const ListRoom: React.FC<ListRoomProps> = ({ rooms }) => {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 ">
        {rooms.map((data: any) => (
          <div key={data.id} className="border rounded-md">
            <div className="h-[250px] flex justify-center mt-2">
              {data.images.length > 0 && (
                <Image
                  src={data.images[0]?.image_url}
                  alt=""
                  height="250"
                  width="250"
                  className="rounded-md"
                />
              )}
            </div>
            <div className="my-4 px-2">
              <div>
                <p>{data.title}</p>
              </div>
              <div className="">
                <p className="text-base">Price: {VNDFORMAT.format(data.price)}</p>
                <p className="text-base">Square: {data.square} m2</p>
              </div>
              <div>
                <p>
                  Location: {data.house?.district}, {data.house?.city}
                </p>
              </div>
              <div>
                <p>Description: {data?.description}</p>
              </div>
              <div>
                <p>House Owner: {data.house?.owner?.username}</p>
              </div>
              <Link href={`roomdetail/${data.id}`}>
                <p className="text-sky-500">See More</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListRoom;
