'use client';

import { useEffect, useState } from 'react';
import { testimonials } from '@/utils/mockData';

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary">Testimonials</p>
        <h2 className="mt-2 text-3xl font-semibold text-dark">
          Voices from our community
        </h2>
        <div className="mt-8 rounded-xl bg-light p-8 shadow-soft">
          <p className="text-lg text-gray-600">“{testimonial.quote}”</p>
          <p className="mt-6 text-sm font-semibold text-dark">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, idx) => (
              <button
                key={item.name}
                className={`h-2 w-2 rounded-full ${
                  idx === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setIndex(idx)}
                aria-label={`Show testimonial from ${item.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
