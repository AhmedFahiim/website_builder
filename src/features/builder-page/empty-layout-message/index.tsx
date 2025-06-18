import Image from "next/image";
import React from "react";

export default function EmptyLayoutMessage() {
  return (
    <section className="w-full h-full grid place-items-center">
      <div className="text-center">
        <Image
          src={"/images/start_draw.png"}
          width={400}
          height={400}
          alt="hero image"
        />
        <h2 className="text-2xl capitalize">
          Drag & drop a <span className="text-indigo-500">component</span> to
          get started!
        </h2>
      </div>
    </section>
  );
}
