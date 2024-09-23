import { cn } from "@/lib/utils";
import React, { PropsWithChildren, ComponentProps } from "react";

export default function ContentBlock({
  children,
  className,
}: PropsWithChildren<ComponentProps<"div">>) {
  return (
    <div
      className={cn(
        "bg-gray-50 shadow-sm rounded-md overflow-hidden h-full w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
