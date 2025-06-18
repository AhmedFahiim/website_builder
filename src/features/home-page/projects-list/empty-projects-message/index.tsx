import Image from "next/image";
import React from "react";

export default function EmptyProjectMessage() {
  return (
    <section className="flex flex-col items-center gap-4">
      <Image
        src={"/images/start_draw.png"}
        width={400}
        height={400}
        alt="hero image"
        className="rounded-xl"
      />
      <h2 className="text-2xl capitalize">
        Create a new project and build
        <span className="text-indigo-500"> your website now!</span>
      </h2>
    </section>
  );
}
