import { cn } from "@/app/lib/cn";
import { geist, geistMono } from "@/app/lib/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useAppContext } from "@/context";
import Menu from "./menu";

const Nav = () => {
  const { setIsOpen } = useAppContext();
  return (
    <nav className="fixed top-3 left-0 right-0 backdrop-blur-md container py-3 rounded-full overflow-hidden z-[1000] flex items-center justify-between w-full">
      <Image src="/logo.svg" width={30} height={0} alt="" />
      <div
        className={cn(
          geist.className,
          "absolute text-sm hidden lg:block left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer flex text-center text-white rounded-full font-regular space-x-5",
        )}
      >
        <Link href="/">Home</Link>
        <Link href="#services">Services</Link>
        <Link href="#showcases">Showcase</Link>
        <Link href="#aboutus">About us</Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button onClick={() => setIsOpen(true)} className="flex group gap-x-2">
          Get started
        </Button>
        <Menu />
      </div>
    </nav>
  );
};

export default Nav;
