import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonLinkVariants } from "@/utils/shared-variants";

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonLinkVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };

function Button({
  size,
  variant,
  endIcon,
  children,
  disabled,
  className,
  startIcon,
  asChild = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonLinkVariants({ variant, size, className }))}
      disabled={disabled || isLoading}
      {...props}
    >
      {startIcon && !isLoading && startIcon}

      {children}

      {endIcon && !isLoading && endIcon}
    </Comp>
  );
}

export { Button, buttonLinkVariants };
