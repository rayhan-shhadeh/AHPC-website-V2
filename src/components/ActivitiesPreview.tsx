import Container from './Container';
import ActivityCard from './ActivityCard';
import { activities } from '@/utils/mockData';
import Link from 'next/link';

export default function ActivitiesPreview() {
  return (
    <section className="bg-light py-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">
              Latest Activities
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-dark">
              What we are doing right now
            </h2>
          </div>
          <Link
            href="/activities"
            className="text-sm font-semibold text-primary hover:text-blue-700"
          >
            View All Activities
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {activities.slice(0, 3).map((activity) => (
            <ActivityCard key={activity.id} {...activity} />
          ))}
        </div>
      </Container>
    </section>
  );
}
