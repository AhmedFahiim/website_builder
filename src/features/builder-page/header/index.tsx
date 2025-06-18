import { Button } from "@/components/common/button";
import Link from "@/components/common/link";
import React from "react";

interface Props {
  isOpen: boolean;
  setOpenSideSheet: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuilderHeader = React.memo(function BuilderHeader({
  isOpen,
  setOpenSideSheet,
}: Props) {
  return (
    <header
      className="flex justify-between items-center p-4"
      style={{
        background:
          "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
      }}
    >
      <div className="flex items-center gap-4">
        <Button
          variant={"outline"}
          className="px-2"
          onClick={() => setOpenSideSheet(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </Button>

        <Link href={"/"} variant={"text"} className="text-sm">
          Back Home
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline">Import Design</Button>
        <Button variant="default">Save Design</Button>
      </div>
    </header>
  );
});

export default BuilderHeader;
