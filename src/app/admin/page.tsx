'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { isAdminLoggedIn, setAdminLoggedIn } from '@/utils/adminAuth';
import { useToast } from '@/context/ToastContext';
import { activities, galleryImages } from '@/utils/mockData';

export default function AdminDashboardPage() {
  const router = useRouter();
  const { notify } = useToast();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.push('/admin/login');
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-light">
      <Header />
      <main className="flex-1 py-16">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-secondary">Admin</p>
              <h1 className="mt-2 text-3xl font-semibold text-dark">Dashboard Overview</h1>
            </div>
            <button
              onClick={() => {
                setAdminLoggedIn(false);
                notify('Logged out successfully');
                router.push('/');
              }}
              className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600"
            >
              Log Out
            </button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-soft">
              <p className="text-xs uppercase text-gray-400">Activities</p>
              <p className="mt-2 text-2xl font-semibold text-primary">
                {activities.length}
              </p>
              <p className="mt-2 text-sm text-gray-600">Published activities</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-soft">
              <p className="text-xs uppercase text-gray-400">Gallery</p>
              <p className="mt-2 text-2xl font-semibold text-primary">
                {galleryImages.length}
              </p>
              <p className="mt-2 text-sm text-gray-600">Images uploaded</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-soft">
              <p className="text-xs uppercase text-gray-400">Messages</p>
              <p className="mt-2 text-2xl font-semibold text-primary">24</p>
              <p className="mt-2 text-sm text-gray-600">Unread submissions</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-dark">Add Activity</h2>
              <form className="mt-4 grid gap-4 text-sm">
                <input className="rounded-lg border border-gray-200 px-4 py-2" placeholder="Title" />
                <input type="date" className="rounded-lg border border-gray-200 px-4 py-2" />
                <select className="rounded-lg border border-gray-200 px-4 py-2">
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Shelter</option>
                  <option>Community</option>
                </select>
                <textarea
                  rows={3}
                  className="rounded-lg border border-gray-200 px-4 py-2"
                  placeholder="Short description"
                />
                <textarea
                  rows={4}
                  className="rounded-lg border border-gray-200 px-4 py-2"
                  placeholder="Full description (markdown supported)"
                />
                <input type="file" className="text-xs" />
                <button className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white">
                  Save Activity
                </button>
              </form>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-dark">Gallery Management</h2>
              <form className="mt-4 grid gap-4 text-sm">
                <label className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-200 p-6 text-xs text-gray-500">
                  Drag & drop images here or click to upload
                  <input type="file" className="mt-2 text-xs" multiple />
                </label>
                <input className="rounded-lg border border-gray-200 px-4 py-2" placeholder="Caption" />
                <select className="rounded-lg border border-gray-200 px-4 py-2">
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Shelter</option>
                  <option>Community</option>
                </select>
                <button className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white">
                  Upload Images
                </button>
              </form>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-soft lg:col-span-2">
              <h2 className="text-lg font-semibold text-dark">Messages Inbox</h2>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3">
                  <div>
                    <p className="font-semibold text-dark">New sponsorship inquiry</p>
                    <p>supporter@example.com</p>
                  </div>
                  <button className="rounded-full border border-gray-200 px-3 py-1 text-xs">
                    Mark read
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3">
                  <div>
                    <p className="font-semibold text-dark">Volunteer application</p>
                    <p>volunteer@example.com</p>
                  </div>
                  <button className="rounded-full border border-gray-200 px-3 py-1 text-xs">
                    Mark read
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
