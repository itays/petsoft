import AppFooter from "@/app/components/AppFooter";
import AppHeader from "@/app/components/AppHeader";
import BackgroundPattern from "@/app/components/BackgroundPattern";
import React, { PropsWithChildren } from "react";
import { StoreProvider } from "./stores/PetsProvider";
import { getPets } from "@/lib/api";

export default async function Layout({ children }: PropsWithChildren) {
  const pets = await getPets();
  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col max-w-7xl mx-auto px-4 min-h-screen">
        <AppHeader />
        <StoreProvider pets={pets}>{children}</StoreProvider>
        <AppFooter />
      </div>
    </>
  );
}
