import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[14px] text-sm font-bold transition-[transform,box-shadow,background-color,color] duration-150 ease-[var(--ease)] outline-none focus-visible:outline-3 focus-visible:outline-accent focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-sun text-ink border-4 border-ink shadow-[0_6px_0_var(--ink)] hover:-translate-y-0.5 hover:shadow-[0_8px_0_var(--ink)] active:translate-y-1 active:shadow-[0_2px_0_var(--ink)]",
        primary:
          "bg-sun text-ink border-4 border-ink shadow-[0_6px_0_var(--ink)] hover:-translate-y-0.5 hover:shadow-[0_8px_0_var(--ink)] active:translate-y-1 active:shadow-[0_2px_0_var(--ink)]",
        accent:
          "bg-accent text-white border-4 border-ink shadow-[0_6px_0_var(--ink)] hover:-translate-y-0.5 hover:shadow-[0_8px_0_var(--ink)] active:translate-y-1 active:shadow-[0_2px_0_var(--ink)]",
        outline:
          "bg-panel text-ink border-4 border-ink shadow-[0_6px_0_var(--ink)] hover:bg-bg-2 hover:-translate-y-0.5 hover:shadow-[0_8px_0_var(--ink)] active:translate-y-1 active:shadow-[0_2px_0_var(--ink)]",
        secondary:
          "bg-bg-2 text-ink border-4 border-ink shadow-[0_6px_0_var(--ink)] hover:bg-panel hover:-translate-y-0.5 hover:shadow-[0_8px_0_var(--ink)] active:translate-y-1 active:shadow-[0_2px_0_var(--ink)]",
        ghost: "hover:bg-bg-2 hover:text-ink",
        link: "text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs rounded-[10px] border-[3px]",
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
