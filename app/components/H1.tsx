import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

export default function H1({
  children,
  className,
}: PropsWithChildren<ComponentProps<"h1">>) {
  return (
    <h1 className={cn("text-2xl font-medium leading-6", className)}>
      {children}
    </h1>
  );
}
