import { cn } from "@/app/lib/cn";
import { fregeist, geist, geistMono, inter, syne } from "@/app/lib/font";
import React from "react";
import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import { service_cards, ServiceCardProps } from "@/app/lib/data";
import SectionHeader from "./header";

const Services = () => {
  return (
    <div
      id="services"
      className={cn("container mt-10 space-y-3 w-full text-black")}
    >
      <div className="w-full h-44"></div>
      <SectionHeader
        title="our features"
        subtitle={
          <>
            Pieces connects thoughts, code,
            <br /> and context, to stay in your flow
          </>
        }
      />
      <div className="w-full h-10"></div>
      <div className="grid lg:grid-cols-3 gap-5">
        <Service_card className="col-span-2" {...service_cards[0]} />
        <Service_card className="col-span-1" {...service_cards[1]} />
        <Service_card className="col-span-1" {...service_cards[3]} />
        <Service_card className="col-span-2" {...service_cards[2]} />
      </div>
    </div>
  );
};

export default Services;

const Service_card = ({ title, desc, className, url }: ServiceCardProps) => {
  return (
    <Card
      className={cn(
        "relative group grid grid-cols-1 bg-hafton border-gray-400/10 borde-[#2B2B2B] overflow-clip transition-all duration-300",
        className!,
      )}
    >
      <div
        className={cn(
          "bg-violet-30 firefox:opacity-40",
          "z-0 blur-[110px] absolute left-1/2 -translate-x-1/2 top-[40%] h-24 w-24",
        )}
      ></div>
      <div className="relative z-10 p-5 lg:p-10 space-y-2">
        <div
          className={cn(
            geistMono.className,
            "text-xs font-light uppercase text-white",
          )}
        >
          Do something better
        </div>
        <CardHeader
          className={cn(geist.className, "text-2xl font-normal text-white")}
        >
          {title}
        </CardHeader>
        <CardHeader className="bg-gradient-to-br from-gray-300 to-gray-600 bg-clip-text text-transparent text-md">
          {desc}
        </CardHeader>
      </div>
      <div className="w-full h-full px-[3%] flex items-center justify-center relative col-span-4 transition-all duration-300">
        <Image
          className="w-full z-[100px] group-hover:flex"
          width={1200}
          height={0}
          src={url}
          alt=""
        />
      </div>
    </Card>
  );
};
