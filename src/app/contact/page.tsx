'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDonate from '@/components/FloatingDonate';
import Container from '@/components/Container';
import { submitContactForm } from '@/services/contactService';
import { useToast } from '@/context/ToastContext';

export default function ContactPage() {
  const { notify } = useToast();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await submitContactForm(formState);
      notify('Message sent successfully!');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      notify('Unable to send message. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-light py-16">
        <Container className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Contact</p>
            <h1 className="mt-2 text-4xl font-semibold text-dark">Let’s connect</h1>
            <p className="mt-4 text-sm text-gray-600">
              Send us a message and our team will respond as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-xl bg-white p-6 shadow-soft">
              <div>
                <label className="text-xs font-semibold text-gray-500">Full Name</label>
                <input
                  required
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500">Email</label>
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, email: event.target.value }))
                  }
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, message: event.target.value }))
                  }
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-dark">Office</h2>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p>Old Askar Camp - near Qurtuba Secondary School for Girls</p>
                <p>Nablus, Palestine</p>
                <p>+970 599 116 582</p>
                <p>isaadtefelfalastini@gmail.com</p>
                <p>Office Hours: Sun - Thu, 9:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-soft">
              <iframe
                title="AHPC location"
                src="https://maps.google.com/maps?q=Nablus%20Palestine&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-dark">Social Media</h2>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p>Facebook: facebook.com/share/1Agb8p5Xji</p>
                <p>Website: www.isaadtefelfalastini.com</p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
