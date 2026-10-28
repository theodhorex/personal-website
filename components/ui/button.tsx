import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-sm font-bold transition-[transform,box-shadow,background-color,color] duration-150 ease-[var(--ease)] outline-none focus-visible:outline-3 focus-visible:outline-accent focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-on-accent border border-accent hover:bg-ink hover:border-ink hover:-translate-y-px active:translate-y-px",
        primary:
          "bg-accent text-on-accent border border-accent hover:bg-ink hover:border-ink hover:-translate-y-px active:translate-y-px",
        accent:
          "bg-accent text-on-accent border border-accent hover:bg-ink hover:border-ink hover:-translate-y-px active:translate-y-px",
        outline:
          "bg-transparent text-ink border border-line hover:border-ink hover:bg-bg-2 active:translate-y-px",
        secondary:
          "bg-bg-2 text-ink border border-line hover:bg-panel hover:border-ink active:translate-y-px",
        ghost: "hover:bg-bg-2 hover:text-ink",
        link: "text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs rounded-[5px]",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
