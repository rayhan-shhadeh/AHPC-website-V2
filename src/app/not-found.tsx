import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center bg-light px-4 py-16">
        <Container className="text-center">
          <h1 className="text-4xl font-semibold text-dark">Page not found</h1>
          <p className="mt-3 text-sm text-gray-600">
            The page you are looking for does not exist. Please return to the homepage.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
          >
            Back to Home
          </Link>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
