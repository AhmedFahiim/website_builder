import { Button } from "@/components/common/button";
import Image from "next/image";
import React from "react";

export default function Hero2() {
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
          Optimize your website for
          <span className="text-indigo-600"> Search engine</span>
        </h1>
        <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </p>
        <div>
          <p className="text-gray-800 py-3">
            Subscribe to our newsletter and we&apos;ll save your time
          </p>
          <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
            />
            <Button className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
        <Image
          width={1200}
          height={1200}
          src="https://i.postimg.cc/kgd4WhyS/container.png"
          className="w-full mx-auto sm:w-10/12  lg:w-full"
          alt="hero image"
        />
      </div>
    </section>
  );
}
