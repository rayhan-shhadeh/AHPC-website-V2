import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ImpactStats from '@/components/ImpactStats';
import ActivitiesPreview from '@/components/ActivitiesPreview';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingDonate from '@/components/FloatingDonate';
import Container from '@/components/Container';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section className="bg-white py-14">
          <Container className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                Our Mission
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-dark">
                Supporting orphan children with dignity and hope
              </h2>
              <p className="mt-4 text-sm text-gray-600">
                AHPC is dedicated to ensuring every orphan child in Palestine has access to
                education, healthcare, and a safe place to grow. We partner with local families
                and international donors to create lasting impact.
              </p>
            </div>
            <div className="rounded-xl bg-light p-6 shadow-soft">
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Comprehensive education sponsorships and tutoring programs.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Preventive healthcare, nutrition support, and counseling.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Safe shelter spaces with mentorship and life-skills coaching.
                </li>
              </ul>
            </div>
          </Container>
        </section>
        <ImpactStats />
        <ActivitiesPreview />
        <TestimonialsCarousel />
        <CTASection />
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
