import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDonate from '@/components/FloatingDonate';
import Container from '@/components/Container';
import { donationImpact, faqItems } from '@/utils/mockData';

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-light py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-secondary">Donate</p>
              <h1 className="mt-2 text-4xl font-semibold text-dark">
                Give hope to orphan children in Palestine
              </h1>
              <p className="mt-4 text-sm text-gray-600">
                Online payment options are limited in the West Bank. Please use direct bank
                transfer or visit our office for in-person donations. International donors can
                use the Donorbox embed placeholder below.
              </p>
              <div className="mt-8 rounded-xl bg-white p-6 shadow-soft">
                <h2 className="text-lg font-semibold text-dark">Donation Impact</h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  {donationImpact.map((item) => (
                    <li key={item.amount} className="flex items-center justify-between">
                      <span className="font-semibold text-primary">{item.amount}</span>
                      <span>{item.impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 rounded-xl bg-white p-6 shadow-soft">
                <h2 className="text-lg font-semibold text-dark">Donorbox Placeholder</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Paste your Donorbox embed code here when ready. This placeholder prevents any
                  errors until integration.
                </p>
                <div className="mt-4 flex h-40 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-500">
                  Donorbox Embed Placeholder
                </div>
              </div>
              <div className="mt-8 rounded-xl bg-white p-6 shadow-soft">
                <h2 className="text-lg font-semibold text-dark">Stripe Placeholder</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Stripe is included for future international expansion. Online card payments are
                  currently limited in the West Bank, so this section is disabled until approved.
                </p>
                <div className="mt-4 flex h-24 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-500">
                  Stripe Checkout Placeholder
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-dark">Bank Transfer Details</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>Bank: Bank of Palestine</li>
                  <li>Account Name: AHPC - Association of Happiness of the Palestinian Child</li>
                  <li>Account Number: 123456789</li>
                  <li>IBAN: PS00PALT000000000000000000000</li>
                  <li>Branch: Nablus Main Branch</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-dark">FAQ</h3>
                <div className="mt-3 space-y-4 text-sm text-gray-600">
                  {faqItems.map((item) => (
                    <div key={item.question}>
                      <p className="font-semibold text-dark">{item.question}</p>
                      <p className="mt-1">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
