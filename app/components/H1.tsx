import { PropsWithChildren } from "react";

export default function H1({ children }: PropsWithChildren) {
  return <h1 className="text-2xl font-medium leading-6">{children}</h1>;
}
