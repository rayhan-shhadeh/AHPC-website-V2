'use client';

import { useEffect, useState } from 'react';
import { impactStats } from '@/utils/mockData';

export default function ImpactStats() {
  const [counts, setCounts] = useState(impactStats.map(() => 0));

  useEffect(() => {
    const duration = 1200;
    const steps = 60;
    const interval = duration / steps;

    const timers = impactStats.map((stat, index) => {
      let current = 0;
      const increment = Math.ceil(stat.value / steps);
      return setInterval(() => {
        current = Math.min(current + increment, stat.value);
        setCounts((prev) => {
          const next = [...prev];
          next[index] = current;
          return next;
        });
      }, interval);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-4">
        {impactStats.map((stat, index) => (
          <div key={stat.label} className="rounded-xl bg-light p-6 text-center shadow-soft">
            <p className="text-3xl font-semibold text-primary">{counts[index]}+</p>
            <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
