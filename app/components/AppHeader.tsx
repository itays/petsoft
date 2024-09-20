"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

export default function AppHeader() {
  const activePathname = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2">
      <Logo />
      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map(({ label, path }) => (
            <li key={path}>
              <Link
                className={cn(
                  "px-2 py-1 text-white/70 hover:text-white rounded-sm focus:text-white transition",
                  {
                    "bg-black/10 text-white": path === activePathname,
                  }
                )}
                href={path}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
