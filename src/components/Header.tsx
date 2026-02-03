import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import DonateButton from './DonateButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/activities', label: 'Activities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur shadow-sm">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="AHPC logo"
            width={44}
            height={44}
            priority
          />
          <div>
            <p className="text-sm font-semibold text-dark">AHPC</p>
            <p className="text-xs text-gray-500">
              Association of Happiness of the Palestinian Child
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/login"
            className="hidden rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:border-primary hover:text-primary md:inline-flex"
          >
            Admin Login
          </Link>
          <DonateButton />
        </div>
      </Container>
    </header>
  );
}
