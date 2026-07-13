import { createPageMetadata } from "../lib/metadata"

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Read how Iotera collects, uses, and protects your personal information.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-6">
            We value your privacy and are committed to protecting your personal information.
          </p>
          <p className="text-base text-gray-600 mb-4">
            This page describes how we collect, use, and protect information when you use our website
            and contact our team.
          </p>
          <p className="text-base text-gray-600">
            For any privacy-related request, please contact us through the contact page.
          </p>
        </div>
      </section>
    </main>
  );
}
