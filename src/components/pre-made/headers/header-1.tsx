import React from "react";
import Image from "next/image";
import { GlobeIcon, Search } from "lucide-react";

interface Props {
  logo: string;
  cta: string;
}

const Header1 = ({ logo, cta }: Props) => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
      <div className="flex items-center">
        <Image
          width={1200}
          height={1200}
          src={logo}
          alt="Logo"
          className="h-8 w-fit"
        />
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 max-w-lg w-full">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-1 bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none px-2"
        />
        <button className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-600">
          <Search className="w-4 h-4" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span className="text-sm cursor-pointer">{cta}</span>
        <GlobeIcon className="w-5 h-5 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Header1;
