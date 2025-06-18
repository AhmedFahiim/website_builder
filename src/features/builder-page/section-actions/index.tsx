import { Edit2, Trash } from "lucide-react";
import React from "react";

interface Props {
  onEditSection: () => void;
  onDeleteSectionWithFly: () => void;
}

export default function SectionActions({
  onEditSection,
  onDeleteSectionWithFly,
}: Props) {
  return (
    <div className="flex items-center gap-2 absolute -top-2 -left-2 z-[10]">
      <button
        className="size-6 rounded-full border border-gray-200 text-red-400 hover:bg-red-400 hover:text-white duration-300 cursor-pointer grid place-items-center"
        onClick={onDeleteSectionWithFly}
      >
        <Trash size={16} />
      </button>

      <button
        className="size-6 rounded-full border border-gray-200 hover:bg-gray-300 duration-300 cursor-pointer grid place-items-center"
        onClick={onEditSection}
      >
        <Edit2 className="text-indigo-500" size={16} />
      </button>
    </div>
  );
}
