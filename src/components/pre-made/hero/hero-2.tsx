import { Button } from "@/components/common/button";
import Image from "next/image";
import React from "react";
interface Props {
  title: string;
  titleSpecialText: string;
  description: string;
  cta: string;
  image: string;
}

export default function Hero2({
  cta,
  image,
  title,
  description,
  titleSpecialText,
}: Props) {
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
          {title}
          <span className="text-indigo-600">{titleSpecialText}</span>
        </h1>
        <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          {description}
        </p>
        <div>
          <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
            />
            <Button className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
              {cta}
            </Button>
          </form>
        </div>
      </div>
      <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
        <Image
          width={1200}
          height={1200}
          src={image}
          className="w-full mx-auto sm:w-10/12  lg:w-full"
          alt="hero image"
        />
      </div>
    </section>
  );
}
