export const metadata = {
  title: "Contact – TopFiveHQ",
  description: "Contact D&L Etail Inc, operator of TopFiveHQ.com."
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
      <h1 className="text-2xl font-semibold text-white md:text-3xl">
        Contact
      </h1>
      <p className="mt-2 text-sm text-slate-300">
        TopFiveHQ.com is operated by D&amp;L Etail Inc. For questions about the
        site, product rankings, or affiliate disclosures, please use the
        contact information below.
      </p>

      <div className="card mt-6 space-y-3 text-sm text-slate-100">
        <div>
          <p className="font-semibold">Business Name</p>
          <p>D&amp;L Etail Inc</p>
        </div>
        <div>
          <p className="font-semibold">Mailing Address</p>
          <p>40 Lotowana Lane</p>
          <p>Stony Brook, NY 11790</p>
          <p>United States</p>
        </div>
        <div>
          <p className="font-semibold">Email</p>
          <p>northshoreretailco@gmail.com</p>
        </div>
        <div>
          <p className="font-semibold">Phone</p>
          <p>631-767-8299</p>
        </div>
      </div>

      <p className="mt-6 text-xs text-slate-400">
        Please do not include sensitive personal, financial, or medical
        information in any email or message. We use your contact details only to
        respond to your inquiry, as described in our{" "}
        <a href="/privacy" className="link-muted">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
