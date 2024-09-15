import Image from "next/image";
import React from "react";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col xl:flex-row items-center justify-center gap-10">
      <Image
        src="/images/petsoft_preview.png"
        alt="preview image"
        width={519}
        height={472}
      />
      <div>
        <Logo />
        <h1 className="text-5xl font-normal my-6 max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl font-medium text-muted-foreground max-w-[600px]">
          Use PetSoft to easily keep track of pets under your care. Get lifetime
          access for $299/year.
        </p>
        <div className="flex gap-4 my-4">
          <Button className="rounded-full" asChild>
            <Link href="/signup">Get started</Link>
          </Button>
          <Button className="rounded-full" variant={"secondary"} asChild>
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
