import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingDonate from '@/components/FloatingDonate';
import { timeline } from '@/utils/mockData';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-light py-16">
          <Container className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-secondary">About AHPC</p>
              <h1 className="mt-2 text-4xl font-semibold text-dark">
                A story rooted in compassion and community
              </h1>
              <p className="mt-4 text-sm text-gray-600">
                The Association of Happiness of the Palestinian Child (AHPC) was founded in
                Nablus to ensure orphan children have access to education, healthcare, and a
                safe environment. We are licensed by the Ministry of Interior and Ministry of
                Social Development and collaborate with local leaders, families, and donors.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-dark">Mission & Vision</h2>
              <p className="mt-3 text-sm text-gray-600">
                Our mission is to uplift orphan children with holistic care, while our vision
                is a Palestine where every child grows with dignity, opportunity, and hope.
              </p>
              <div className="mt-5 grid gap-3 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-dark">Values</p>
                  <p>Compassion, transparency, empowerment, and collaboration.</p>
                </div>
                <div>
                  <p className="font-semibold text-dark">Location</p>
                  <p>Old Askar Camp, Nablus, Palestine.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="bg-white py-16">
          <Container>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-secondary">Our Story</p>
              <h2 className="mt-2 text-3xl font-semibold text-dark">
                Milestones of impact
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.year} className="rounded-xl bg-light p-6 shadow-soft">
                  <p className="text-sm font-semibold text-primary">{item.year}</p>
                  <h3 className="mt-2 text-lg font-semibold text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
