import React from "react";
import { GlobeIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/common/button";
import Image from "next/image";
import LinkComponent from "@/components/common/link";

interface Props {
  logo: string;
  cta: string;
  nav: TNav;
}

const Header2 = ({ logo, cta, nav }: Props) => (
  <nav className=" bg-black border-b border-gray-800">
    <div className="max-w-[2520px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 gap-3 md:gap-0">
        <div className="flex-shrink-0 text-white">
          <Image
            src={logo}
            width={1200}
            height={1200}
            className="h-8 w-fit"
            alt="logo"
          />
        </div>

        {/* Center nav */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {nav?.map((link) => (
            <LinkComponent
              variant={"text"}
              key={link.name}
              href={link.href}
              className="text-white capitalize"
            >
              {link.name}
            </LinkComponent>
          ))}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="soft"
            className="hidden md:flex text-sm font-medium text-gray-300 hover:text-gray-800 bg-gray-800"
          >
            {cta}
          </Button>
          <Button
            variant="text"
            className="text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <GlobeIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-3 rounded-full border-gray-700 px-3 py-1.5 hover:bg-gray-800 bg-black text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
            <PersonIcon className="h-6 w-6 rounded-full bg-gray-700 text-white p-1" />
          </Button>
        </div>
      </div>
    </div>
  </nav>
);

export default Header2;
