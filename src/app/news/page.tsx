import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDonate from '@/components/FloatingDonate';
import Container from '@/components/Container';

const news = [
  {
    title: 'AHPC expands scholarship program',
    date: '2024-09-10',
    description: 'New donors helped us double the number of scholarships this year.'
  },
  {
    title: 'Volunteer training completed',
    date: '2024-08-01',
    description: 'Social workers completed trauma-informed care workshops.'
  },
  {
    title: 'New shelter wing opens',
    date: '2024-06-15',
    description: 'A new wing adds 20 beds for children in need of safe housing.'
  }
];

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-light py-16">
        <Container>
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">News</p>
          <h1 className="mt-2 text-4xl font-semibold text-dark">Latest updates</h1>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {news.map((item) => (
              <article key={item.title} className="rounded-xl bg-white p-6 shadow-soft">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                  {new Date(item.date).toLocaleDateString()}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-dark">{item.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
