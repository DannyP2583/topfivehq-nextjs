"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/90 text-sm font-bold shadow-lg shadow-brand-500/40">
            T5
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">
              TopFiveHQ
            </span>
            <span className="text-xs text-slate-300">
              Top 5 Product Rankings
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "rounded-full px-3 py-1 text-xs font-medium transition " +
                  (active
                    ? "bg-brand-500 text-white shadow-brand-500/40 shadow-md"
                    : "text-slate-200 hover:bg-white/5 hover:text-white")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
