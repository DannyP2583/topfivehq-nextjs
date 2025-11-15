type Category = {
  title: string;
  description: string;
  slug: string;
  badge?: string;
};

const categories: Category[] = [
  {
    title: "Home & Kitchen",
    description:
      "Top 5 product shortlists for everyday home, kitchen, and organization essentials.",
    slug: "home-kitchen",
    badge: "Coming soon"
  },
  {
    title: "Electronics & Gadgets",
    description:
      "Curated tech picks including headphones, chargers, accessories, and more.",
    slug: "electronics",
    badge: "Curating"
  },
  {
    title: "Health & Wellness",
    description:
      "Discover simple, practical products that support daily health routines.",
    slug: "health-wellness"
  },
  {
    title: "Pets",
    description:
      "Top 5 picks for pet care, toys, and accessories across popular breeds.",
    slug: "pets"
  },
  {
    title: "Outdoors & Travel",
    description:
      "Compact gear and travel-friendly essentials for trips, weekends, and getaways.",
    slug: "outdoors-travel"
  },
  {
    title: "Kids & Family",
    description:
      "Helpful products for family life, learning, playtime, and organization.",
    slug: "kids-family"
  }
];

export function CategoryGrid() {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Explore product categories
          </h2>
          <p className="text-sm text-slate-300">
            Each category will feature clear, bias-aware Top 5 product
            shortlists.
          </p>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
          Neutral, research-first rankings
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <article
            key={cat.slug}
            className="card group flex flex-col justify-between"
          >
            <div>
              <h3 className="card-title group-hover:text-brand-200">
                {cat.title}
              </h3>
              <p className="text-sm text-slate-300">{cat.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                Top 5 list ·{" "}
                <span className="font-medium text-slate-200">In progress</span>
              </span>
              {cat.badge && (
                <span className="rounded-full bg-slate-800 px-2 py-1 text-[0.65rem] uppercase tracking-wide text-slate-200">
                  {cat.badge}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
