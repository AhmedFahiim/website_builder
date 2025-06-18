import { cva } from "class-variance-authority";

const buttonLinkVariants = cva(
  "cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none",

  {
    variants: {
      variant: {
        default: "bg-indigo-500 text-white hover:bg-indigo-600",

        outline:
          "bg-transparent text-gray-900 border-[1px] border-gray-900/15 hover:bg-gray-900/5",

        soft: "bg-indigo-50 text-indigo-500 hover:bg-indigo-100",

        text: "bg-transparent text-[var(--grayscale-900)] hover:bg-gray-900/5 hover:bg-transparent !p-0",
      },

      size: {
        lg: "py-[14px] px-8 text-base gap-2 h-12",

        md: "py-2 px-6 text-sm gap-2 h-10",

        sm: "py-[6px] px-5 text-sm gap-[6px] h-9",
      },
    },

    defaultVariants: {
      variant: "default",

      size: "md",
    },
  }
);

export { buttonLinkVariants };
