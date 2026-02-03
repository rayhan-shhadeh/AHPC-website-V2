import Container from './Container';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h3 className="text-lg font-semibold">AHPC</h3>
          <p className="mt-3 text-sm text-gray-300">
            Association of Happiness of the Palestinian Child supports orphan children in
            Palestine with education, healthcare, and shelter.
          </p>
          <div className="mt-4 text-sm text-gray-300">
            <p>Nablus, Palestine</p>
            <p>+970 599 116 582</p>
            <p>isaadtefelfalastini@gmail.com</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase text-gray-200">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/activities" className="hover:text-white">
                Activities
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase text-gray-200">Donate</h4>
          <p className="mt-3 text-sm text-gray-300">
            Support our mission through bank transfer or planned giving. Online transfer is
            limited in the West Bank, so we also welcome in-person donations.
          </p>
          <Link
            href="/donate"
            className="mt-4 inline-flex rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
          >
            Donation Options
          </Link>
        </div>
      </Container>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} AHPC. All rights reserved.
      </div>
    </footer>
  );
}
