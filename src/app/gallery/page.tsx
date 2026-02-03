'use client';

import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDonate from '@/components/FloatingDonate';
import Container from '@/components/Container';
import { galleryImages } from '@/utils/mockData';
import Image from 'next/image';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(galleryImages.map((img) => img.category)));
    return ['All', ...unique];
  }, []);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-light py-16">
        <Container>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Gallery</p>
            <h1 className="mt-2 text-4xl font-semibold text-dark">Moments of impact</h1>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
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
          <div className="masonry mt-10">
            {filteredImages.map((img) => (
              <button
                key={img.id}
                className="masonry-item w-full overflow-hidden rounded-xl bg-white shadow-soft"
                onClick={() => setActiveImage(img.src)}
              >
                <div className="relative h-60 w-full">
                  <Image src={img.src} alt={img.caption} fill className="object-cover" />
                </div>
                <div className="p-4 text-left">
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                    {img.category}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{img.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </main>
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-white">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white"
            >
              Close
            </button>
            <div className="relative h-[70vh] w-full">
              <Image src={activeImage} alt="Gallery" fill className="object-cover" />
            </div>
          </div>
        </div>
      )}
      <Footer />
      <FloatingDonate />
    </div>
  );
}
