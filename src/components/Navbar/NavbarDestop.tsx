"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Links = [
  { label: "หน้าหลัก", paths: [""] },
  { label: "มังงะ", paths: ["products?page=1", "product"] },
  { label: "นิยาย", paths: ["promotion?page=1", "promotion"] },
  {
    label: "บุ๊กมาร์ก",
    paths: ["about-product?page=1", "brochure", "about-product"],
  },
];

export default function NavbarDestop() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="bg-white  h-[80px] w-full grid grid-cols-3 items-center px-[100px] z-20 shadow-md fixed top-0 start-0 border-b border-gray-200">
      <div className="text-amber-500 items-center justify-start flex ">
        <Image
          alt="Logo"
          src={Logo}
          className="w-[50px]"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="w-full flex justify-center items-center flex-nowrap text-nowrap " id="navbar-sticky">
        <ul className="flex items-start whitespace-nowrap font-medium  gap-10 ">
          {Links.map((link) => (
            <PathNameLink
              pathname={pathname}
              key={link.paths[0]}
              links={link}
            />
          ))}
        </ul>
      </div>

      <div className="w-full flex justify-end ">
        <div className="bg-amber-500 rounded-full w-[50px] h-[50px] "></div>
      </div>
    </nav>
  );
}

const PathNameLink = ({
  pathname,
  links,
}: {
  pathname: string;
  links: {
    label: string;
    paths: string[];
  };
}) => {
  const isActive = links.paths.some(
    (path) =>
      pathname === `/${path.split("?")[0]}` || pathname.startsWith(`/${path}/`)
  );

  return (
    <li className="relative group">
      <Link
        href={`/${links.paths[0]}`}
        className={`text-sm 3xl:text-base md:bg-transparent md:p-0 ${
          isActive
            ? "text-amber-500"
            : "text-gray-900 hover:bg-gray-100  md:hover:text-amber-500"
        }`}
      >
        {links.label}
      </Link>
      <span
        className={`absolute left-0 right-0 bottom-0 h-[3px] bg-amber-500 transition-all duration-300 transform ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </li>
  );
};
