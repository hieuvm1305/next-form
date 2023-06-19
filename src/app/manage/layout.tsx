"use client";

import { Header } from "@/components/header/Header";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FeedIcon from "@mui/icons-material/Feed";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import GradingRoundedIcon from "@mui/icons-material/GradingRounded";
interface LinkItem {
  href: string;
  name: string;
  icon?: React.ReactNode;
}

const manageLinks: LinkItem[] = [
  {
    name: "Manage Post",
    href: "/manage/post",
    icon: <FeedIcon />,
  },
  {
    name: "Manage House",
    href: "/manage/house",
    icon: <HomeIcon />,
  },
  {
    name: "Tenancy",
    href: "/manage/tenancy",
    icon: <GradingRoundedIcon />,
  },
  {
    name: "Analysis",
    href: "/manage/analysis",
    icon: <AnalyticsIcon />,
  },
];
function ManageHouseLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <div className="w-[200px] h-full border pl-4">
          <ul className="">
            {manageLinks.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <li
                  key={item.name}
                  className="my-4 py-3 px-2 rounded-md text-sm hover:bg-slate-100"
                >
                  <Link
                    href={item.href}
                    className={`${isActive ? "font-semibold" : "font-normal"} `}
                  >
                    <div className="flex gap-4">
                      {item.icon} <p>{item.name}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default ManageHouseLayout;
