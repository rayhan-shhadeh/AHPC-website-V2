import Link from 'next/link';
import Container from './Container';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
      <Container className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-3xl font-semibold">Be the reason a child feels safe today</h2>
          <p className="mt-2 text-sm text-white/80">
            Your support delivers education, healthcare, and shelter for orphan children in
            Palestine.
          </p>
        </div>
        <Link
          href="/donate"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary"
        >
          Donate Now
        </Link>
      </Container>
    </section>
  );
}
