import Link from "@/components/common/link";
import Image from "next/image";
import React from "react";

interface Props {
  nav: TNav;
  logo: string;
  description: string;
  cta: string;
}

export default function Footer1({ nav, cta, logo, description }: Props) {
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <Image
            width={1200}
            height={1200}
            src={logo}
            className="w-32 sm:mx-auto"
            alt="logo image"
          />
          <p>{description}</p>
          <Link href="#" className="max-w-fit mx-auto">
            {cta}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© 2025 Float UI Inc. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {nav.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-800 hover:text-gray-500 duration-150"
              >
                <Link href={item.href} variant={"text"}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
