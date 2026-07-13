import { createPageMetadata } from "../lib/metadata"

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description: "Review the terms and conditions for using the Iotera website and services.",
  path: "/terms-conditions",
})

export default function TermsConditionsPage() {
  return (
    <main className="flex-1">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          <p className="text-lg text-gray-600 mb-6">
            By using this website, you agree to the terms and conditions described on this page.
          </p>
          <p className="text-base text-gray-600 mb-4">
            Content and product information are provided for general reference and may be updated
            without prior notice.
          </p>
          <p className="text-base text-gray-600">
            For business or legal enquiries, please contact us through the contact page.
          </p>
        </div>
      </section>
    </main>
  );
}
