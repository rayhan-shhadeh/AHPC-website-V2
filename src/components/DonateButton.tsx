import Link from 'next/link';

export default function DonateButton() {
  return (
    <Link
      href="/donate"
      className="rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-700"
    >
      Donate Now
    </Link>
  );
}
