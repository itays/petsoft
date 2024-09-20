import React, { PropsWithChildren } from "react";

export default function ContentBlock({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray-50 shadow-sm rounded-md overflow-hidden h-full w-full">
      {children}
    </div>
  );
}
