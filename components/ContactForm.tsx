'use client';

import { useState } from 'react';
import { postJson } from '@/lib/api';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  'w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-violet-500';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    const res = await postJson('/contact', {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });
    if (res.ok) {
      setStatus('done');
      setForm({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
      setError(res.error || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'done') {
    return (
      <div className="mt-8 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-300">
        Thanks for reaching out! We&apos;ve received your message and will get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClass} placeholder="Your name" value={form.name} onChange={update('name')} aria-label="Name" />
        <input
          className={inputClass}
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={update('email')}
          aria-label="Email"
        />
      </div>
      <input className={inputClass} placeholder="Subject" value={form.subject} onChange={update('subject')} aria-label="Subject" />
      <textarea
        className={`${inputClass} min-h-[140px] resize-y`}
        placeholder="How can we help?"
        value={form.message}
        onChange={update('message')}
        aria-label="Message"
      />
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-xl bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
