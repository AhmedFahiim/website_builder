import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonLinkVariants } from "@/utils/shared-variants";

type LinkProps = React.ComponentProps<"a"> &
  VariantProps<typeof buttonLinkVariants> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };

export default function LinkComponent({
  size,
  variant,
  endIcon,
  children,
  href,
  className,
  startIcon,
  ...props
}: LinkProps) {
  return (
    <Link
      data-slot="link"
      href={href as string}
      className={cn(buttonLinkVariants({ variant, size, className }))}
      {...props}
    >
      {startIcon && startIcon}

      {children}

      {endIcon && endIcon}
    </Link>
  );
}
