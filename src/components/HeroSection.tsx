import Link from 'next/link';
import Container from './Container';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-dark text-white">
      <div className="absolute inset-0 bg-[url('/images/hero.svg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/30" />
      <Container className="relative grid items-center gap-10 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Association of Happiness of the Palestinian Child
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Together we create safe, hopeful futures for orphan children in Palestine.
          </h1>
          <p className="mt-4 text-base text-gray-200">
            AHPC delivers education, healthcare, and shelter to children who need it most,
            guided by compassion, transparency, and community partnership.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/donate"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Donate Now
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="rounded-xl bg-white/10 p-8 shadow-soft backdrop-blur">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-200">Mission</p>
          <p className="mt-3 text-lg font-semibold">
            Supporting orphan children with education, healthcare, and shelter while empowering
            families and caregivers.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-gray-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Education Support</span>
              <span className="font-semibold text-white">1,250+</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Healthcare Services</span>
              <span className="font-semibold text-white">780+</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Safe Shelter Nights</span>
              <span className="font-semibold text-white">5,400+</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
