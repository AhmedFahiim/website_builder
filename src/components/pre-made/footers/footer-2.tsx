import React from "react";
import Link from "@/components/common/link";
import { GlobeIcon } from "lucide-react";

interface Props {
  nav: TLinks;
  socialLinks: TLinks;
}

const Footer2 = ({ nav, socialLinks }: Props) => {
  return (
    <footer className="px-8 py-8 md:px-20 md:py-16 flex flex-col gap-12 w-full bg-gray-50">
      {/* Footer Bottom */}
      <div className="border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <div className="flex items-center gap-4 text-center md:text-left">
          © 2025 Airbnb, Inc. ·{" "}
          {nav?.map((link) => (
            <Link
              key={link.name}
              variant={"text"}
              href={link.href}
              className="underline"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 gap-4">
          <div className="flex items-center space-x-2">
            <GlobeIcon className="w-5 h-5" />
            <span>English (US)</span>
          </div>
          <div>
            <span>USD</span>
          </div>
          <div className="flex space-x-4">
            {socialLinks?.map((link, idx) => (
              <Link
                variant={"text"}
                key={idx}
                href={link.href}
                className="hover:underline"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
