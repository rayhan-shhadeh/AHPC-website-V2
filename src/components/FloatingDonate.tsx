import Link from 'next/link';

export default function FloatingDonate() {
  return (
    <Link
      href="/donate"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-1"
    >
      Donate
    </Link>
  );
}
