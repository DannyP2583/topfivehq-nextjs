import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – TopFiveHQ",
  description:
    "Privacy Policy for TopFiveHQ.com, an informational and affiliate product-ranking website."
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
      <h1 className="text-2xl font-semibold text-white md:text-3xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-xs text-slate-400">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="card mt-6 space-y-4 text-sm text-slate-100">

        <p>
          This Privacy Policy describes how TopFiveHQ.com (“TopFiveHQ”, “we”,
          “us”, or “our”) collects, uses, and shares information when you visit
          or use our website at https://topfivehq.com. TopFiveHQ is operated by
          D&L Etail Inc.
        </p>

        <section>
          <h2 className="font-semibold text-white">1. Information We Collect</h2>
          <p className="mt-2">
            We may collect the following categories of information:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-slate-200">
            <li>Information you voluntarily provide when contacting us.</li>
            <li>Device and usage data including IP address and browser details.</li>
            <li>
              Click and referral data related to affiliate links on the Site.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            2. How We Use Your Information
          </h2>
          <p className="mt-2">We use information to:</p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-slate-200">
            <li>Operate and improve the Site</li>
            <li>Respond to your messages</li>
            <li>Analyze traffic and interactions</li>
            <li>Prevent abuse or fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            3. Cookies and Tracking
          </h2>
          <p className="mt-2">
            We may use cookies and similar technologies to understand usage,
            measure performance, and improve user experience. You may disable
            cookies in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            4. Affiliate Links and Third Parties
          </h2>
          <p className="mt-2">
            Some links on the Site are affiliate links. If you click them or
            make a purchase, we may earn a commission. We do not control the
            privacy practices of third-party websites. Their own policies apply.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            5. How We Share Information
          </h2>
          <ul className="mt-2 list-disc list-inside space-y-1 text-slate-200">
            <li>Service providers assisting with analytics or hosting</li>
            <li>Affiliate networks for referral tracking</li>
            <li>Legal authorities when required</li>
            <li>In connection with business transfers</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            6. Data Retention and Security
          </h2>
          <p className="mt-2">
            We retain personal data only as long as necessary and apply
            reasonable security safeguards. No system is completely secure.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">7. Your Rights</h2>
          <p className="mt-2">
            Depending on your location, you may have rights to access, update,
            or delete your personal information. Contact us to submit a request.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            8. Children’s Privacy
          </h2>
          <p className="mt-2">
            The Site is not intended for children under 13. We do not knowingly
            collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            9. International Users
          </h2>
          <p className="mt-2">
            If you access the Site outside the U.S., your information may be
            processed in the United States, where privacy laws may differ.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            10. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy at any time. Continued use of the
            Site indicates acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">11. Contact Us</h2>
          <p className="mt-2">For privacy-related questions, contact:</p>
          <div className="mt-2 space-y-1">
            <p>D&L Etail Inc</p>
            <p>40 Lotowana Lane</p>
            <p>Stony Brook, NY 11790</p>
            <p>Email: northshoreretailco@gmail.com</p>
            <p>Phone: 631-767-8299</p>
          </div>
        </section>

      </div>
    </div>
  );
}
