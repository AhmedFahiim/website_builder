"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function FormInput({
  className,
  wrapperClassName,
  type,
  name,
  label,
  ...props
}: React.ComponentProps<"input"> & {
  wrapperClassName?: string;
  label: string;
}) {
  const { register, watch } = useFormContext();

  console.log(watch());

  const value = watch(name as string);
  return (
    <div className={cn("space-y-3", wrapperClassName)}>
      <label htmlFor={name} className="capitalize">
        {label}
      </label>
      <input
        type={type}
        data-slot="input"
        value={value}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30",
          "flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none",
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "border-gray-300 focus-visible:border-gray-400 focus-visible:ring-gray-200 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...register(name as string)}
        {...props}
      />
    </div>
  );
}
