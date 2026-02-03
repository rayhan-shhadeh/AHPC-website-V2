'use client';

import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDonate from '@/components/FloatingDonate';
import Container from '@/components/Container';
import ActivityCard from '@/components/ActivityCard';
import SkeletonCard from '@/components/SkeletonCard';
import usePagination from '@/hooks/usePagination';
import { activities } from '@/utils/mockData';

export default function ActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading] = useState(false);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(activities.map((activity) => activity.category)));
    return ['All', ...unique];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return activities;
    return activities.filter((activity) => activity.category === activeCategory);
  }, [activeCategory]);

  const { page, totalPages, paginatedItems, nextPage, prevPage, setPage } =
    usePagination(filtered, 6);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-light py-16">
        <Container>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Activities</p>
            <h1 className="mt-2 text-4xl font-semibold text-dark">Latest initiatives</h1>
            <p className="mt-4 text-sm text-gray-600">
              Explore recent programs supporting orphan children with education, healthcare,
              and shelter. Filter by category to focus on what matters most to you.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setPage(1);
                }}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
              : paginatedItems.map((activity) => (
                  <ActivityCard key={activity.id} {...activity} />
                ))}
          </div>
          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={prevPage}
              disabled={page === 1}
              className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 disabled:opacity-50"
            >
              Previous
            </button>
            <p className="text-xs text-gray-500">
              Page {page} of {totalPages}
            </p>
            <button
              onClick={nextPage}
              disabled={page === totalPages}
              className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </Container>
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
