import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – TopFiveHQ",
  description:
    "Terms of Service for TopFiveHQ.com, an informational and affiliate product-ranking website."
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
      <h1 className="text-2xl font-semibold text-white md:text-3xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-xs text-slate-400">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="card mt-6 space-y-4 text-sm text-slate-100">
        <p>
          These Terms of Service (“Terms”) govern your use of the
          TopFiveHQ.com website (the “Site”), operated by D&amp;L Etail Inc
          (“TopFiveHQ,” “we,” “us,” or “our”). By accessing or using the Site,
          you agree to be bound by these Terms.
        </p>

        <section>
          <h2 className="font-semibold text-white">1. Informational Purpose</h2>
          <p className="mt-2">
            TopFiveHQ provides general product information, rankings, and
            affiliate links for convenience and informational purposes only. The
            content on the Site does not constitute professional, medical,
            legal, financial, or other specialized advice.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            2. No Guarantees or Endorsements
          </h2>
          <p className="mt-2">
            We do not control or guarantee the accuracy of third-party products
            or services linked on the Site. Availability, pricing, and product
            details may change at any time. We do not endorse or verify any
            claims made by product manufacturers or merchants.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">3. Affiliate Disclosure</h2>
          <p className="mt-2">
            Some links on the Site are affiliate links. If you click a link or
            make a purchase, we may earn a commission at no additional cost to
            you. We aim to clearly disclose affiliate relationships in
            accordance with applicable guidelines.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">4. User Responsibilities</h2>
          <p className="mt-2">By using the Site, you agree not to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-slate-200">
            <li>Use the Site for unlawful purposes</li>
            <li>
              Attempt to interfere with or compromise the Site’s functionality
            </li>
            <li>Scrape, copy, or reproduce Site content without permission</li>
            <li>Violate the rights or privacy of others</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-white">5. Intellectual Property</h2>
          <p className="mt-2">
            All text, graphics, design, and content on the Site are owned by
            D&amp;L Etail Inc or its licensors. You may not copy, modify,
            distribute, or create derivative works without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            6. Third-Party Websites
          </h2>
          <p className="mt-2">
            The Site may contain links to third-party websites. We are not
            responsible for their content, policies, or practices. Visiting any
            third-party website is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            7. Disclaimers & Limitation of Liability
          </h2>
          <p className="mt-2">
            THE SITE IS PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND. TO THE
            FULLEST EXTENT PERMITTED BY LAW, D&amp;L ETAIL INC IS NOT LIABLE
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES ARISING OUT OF YOUR USE OF THE SITE.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">8. Indemnification</h2>
          <p className="mt-2">
            You agree to indemnify and hold harmless D&amp;L Etail Inc from any
            claims, losses, liabilities, or expenses arising out of your use of
            the Site or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">
            9. Changes to These Terms
          </h2>
          <p className="mt-2">
            We may update these Terms at any time. The updated date will be
            reflected at the top of this page. Continued use of the Site
            indicates acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">10. Governing Law</h2>
          <p className="mt-2">
            These Terms are governed by the laws of the State of New York.
            Disputes will be resolved exclusively in the state or federal courts
            located in New York.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white">11. Contact</h2>
          <p className="mt-2">For questions about these Terms, contact:</p>
          <div className="mt-2 space-y-1">
            <p>D&amp;L Etail Inc</p>
            <p>40 Lotowana Lane</p>
            <p>Stony Brook, NY 11790</p>
            <p>northshoreretailco@gmail.com</p>
            <p>631-767-8299</p>
          </div>
        </section>

        <p className="mt-4 text-xs text-slate-400">
          These Terms are provided for general informational purposes only and
          do not constitute legal advice.
        </p>
      </div>
    </div>
  );
}
