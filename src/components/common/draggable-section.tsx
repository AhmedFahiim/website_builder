import { cn } from "@/lib/utils";
import React from "react";
import { useDrag } from "react-dnd";

interface Props {
  section: TSection;
  children: React.ReactNode;
  className?: string;
}

const DraggableSection = ({ section, children, className }: Props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "component",
    item: section,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag as unknown as React.Ref<HTMLDivElement>}
      className={cn(
        "cursor-move transition-all duration-300 ease-in-out", // 🧠 this line is key
        className,
        {
          "opacity-50 scale-95": isDragging, // smoother than scale-50
        }
      )}
    >
      {children}
    </div>
  );
};

export default DraggableSection;
