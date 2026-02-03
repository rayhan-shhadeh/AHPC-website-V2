'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { setAdminLoggedIn } from '@/utils/adminAuth';
import { useToast } from '@/context/ToastContext';

const demoAdmin = {
  email: process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? 'admin@ahpc.org',
  password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'AHPC2024!'
};

export default function AdminLoginPage() {
  const router = useRouter();
  const { notify } = useToast();
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      formState.email === demoAdmin.email &&
      formState.password === demoAdmin.password
    ) {
      setAdminLoggedIn(true);
      notify('Welcome back!');
      router.push('/admin');
    } else {
      notify('Invalid credentials. Please try again.', 'error');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-light">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <Container className="max-w-md">
          <div className="rounded-xl bg-white p-8 shadow-soft">
            <h1 className="text-2xl font-semibold text-dark">Admin Login</h1>
            <p className="mt-2 text-sm text-gray-600">
              Use the demo credentials provided in the documentation to access the dashboard.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-500">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, email: event.target.value }))
                  }
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500">Password</label>
                <input
                  type="password"
                  required
                  value={formState.password}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, password: event.target.value }))
                  }
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">
                Sign In
              </button>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
