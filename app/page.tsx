import { CategoryGrid } from "@/components/category-grid";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      {/* HERO SECTION */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Left Column */}
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
            TopFiveHQ · D&amp;L Etail Inc
          </span>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-5xl">
            Simple, fast product rankings for everyday decisions.
          </h1>

          <p className="max-w-xl text-sm text-slate-200 md:text-base">
            TopFiveHQ is an informational and affiliate website offering concise
            Top 5 product shortlists. We focus on clarity, relevance, and transparent
            affiliate disclosure — helping you make smarter decisions, faster.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="#categories"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-2 font-medium text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-400"
            >
              View product categories
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-slate-100 hover:border-white/30 hover:bg-white/5"
            >
              Contact us
            </Link>
          </div>

          <p className="mt-2 text-xs text-slate-400 max-w-xl">
            This site may contain affiliate links. If you click and purchase, we may
            earn a commission at no additional cost to you. Rankings are informational
            only and not professional advice.
          </p>
        </div>

        {/* Right Column */}
        <div className="card space-y-4">
          <h2 className="card-title">What to expect from TopFiveHQ</h2>
          <ul className="space-y-3 text-sm text-slate-200">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
              <p>
                <strong>Top 5 lists only.</strong> No endless scrolling — just concise
                rankings for popular product categories.
              </p>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-300" />
              <p>
                <strong>Affiliate transparency.</strong> Some links are affiliate links,
                clearly disclosed on each page when applicable.
              </p>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-300" />
              <p>
                <strong>Informational only.</strong> We do not provide medical, legal,
                or financial advice. Always verify product information independently.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section id="categories" className="mt-16">
        <CategoryGrid />
      </section>
    </div>
  );
}
