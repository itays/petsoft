import AppFooter from "@/app/components/AppFooter";
import AppHeader from "@/app/components/AppHeader";
import BackgroundPattern from "@/app/components/BackgroundPattern";
import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <BackgroundPattern />
      <div className="max-w-7xl mx-auto px-4">
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
}
