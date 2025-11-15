import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-semibold text-slate-200">
            D&amp;L Etail Inc – TopFiveHQ
          </p>
          <p>40 Lotowana Lane, Stony Brook, NY 11790</p>
          <p>northshoreretailco@gmail.com · 631-767-8299</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <p className="text-slate-500">
            © {new Date().getFullYear()} D&amp;L Etail Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
