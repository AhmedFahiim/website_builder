import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog-component";
import { cn } from "@/lib/utils";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  onOpenChange: () => void;
}

export default function Modal({
  isOpen,
  title,
  children,
  titleClassName,
  contentClassName,
  descriptionClassName,
  description,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "bg-white border-none outline-0 !max-w-full",
          contentClassName
        )}
      >
        {(title || description) && (
          <DialogHeader>
            {title && (
              <DialogTitle className={cn("text-start", titleClassName)}>
                {title}
              </DialogTitle>
            )}

            {description && (
              <DialogDescription className={descriptionClassName}>
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}

        <div className="max-h-[600px] overflow-auto">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
