import { CategoryGrid } from "@/components/category-grid";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:px-6 md:py-14">
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
            TopFiveHQ · D&amp;L Etail Inc
          </span>

          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Simple, fast{" "}
            <span className="bg-gradient-to-r from-brand-300 to-emerald-300 bg-clip-text text-transparent">
              Top 5 product rankings
            </span>{" "}
            for everyday decisions.
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-200 md:text-base">
            TopFiveHQ is an informational and affiliate website that highlights
            concise Top 5 product shortlists. We focus on clarity, relevance,
            and transparent affiliate disclosure—so you can decide faster.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
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

          <p className="mt-4 text-xs text-slate-400">
            This site may contain affiliate links. If you click and purchase, we
            may earn a commission at no additional cost to you. Rankings are
            informational only and not professional advice.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">What to expect from TopFiveHQ</h2>
          <ul className="space-y-3 text-sm text-slate-200">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
              <p>
                <span className="font-semibold">Top 5 lists only.</span>{" "}
                Concise rankings for product categories, no endless scrolling.
              </p>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-300" />
              <p>
                <span className="font-semibold">Affiliate transparency.</span>{" "}
                Some links are affiliate links, clearly disclosed on each page
                when applicable.
              </p>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-300" />
              <p>
                <span className="font-semibold">Informational only.</span> We
                do not provide medical, legal, or financial advice. Always
                verify product details and consult professionals when needed.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="categories">
        <CategoryGrid />
      </section>
    </div>
  );
}
