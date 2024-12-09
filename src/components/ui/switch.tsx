"use client";
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { IconBrightnessUp, IconMoon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, checked, onCheckedChange, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-20 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-950 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      checked ? "bg-green-350" : "bg-indigo-650",
      className
    )}
    checked={checked}
    onCheckedChange={onCheckedChange}
    {...props}
    ref={ref}
  >
    <span
      className={cn(
        "flex items-center justify-center h-5 w-5 rounded-full transition-transform",
        checked ? "translate-x-14" : "translate-x-0"
      )}
    >
      {checked ? (
        <IconMoon size={30} stroke={2} className="text-black" />
      ) : (
        <IconBrightnessUp size={30} className="text-white" />
      )}
    </span>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
