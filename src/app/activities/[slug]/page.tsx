import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDonate from '@/components/FloatingDonate';
import Container from '@/components/Container';
import { activities } from '@/utils/mockData';
import Image from 'next/image';

export default function ActivityDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const activity = activities.find((item) => item.id === params.slug);

  if (!activity) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-light py-16">
        <Container>
          <div className="overflow-hidden rounded-xl bg-white shadow-soft">
            <div className="relative h-72 w-full">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                {activity.category}
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-dark">{activity.title}</h1>
              <p className="mt-2 text-sm text-gray-500">
                {new Date(activity.date).toLocaleDateString()}
              </p>
              <p className="mt-6 text-sm text-gray-600">{activity.content}</p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
