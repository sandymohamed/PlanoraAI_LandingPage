'use client';

import { useState } from 'react';
import { postJson } from '@/lib/api';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({
  source = 'landing',
  compact = false,
}: {
  source?: 'landing' | 'paywall' | 'popup';
  compact?: boolean;
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    const res = await postJson('/waitlist/', { email: trimmed, source });
    if (res.ok) {
      setStatus('done');
      setMessage("You're on the list! We'll email you when Premium launches.");
      setEmail('');
    } else {
      setStatus('error');
      setMessage(res.error || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'done') {
    return (
      <div className="mx-auto max-w-sm rounded-2xl border border-planora-accent/40 bg-planora-accent/10 px-5 py-6 text-center text-sm text-planora-accent">
        <video
          src="/logo.mp4"
          className="mx-auto mb-4 size-32 rounded-3xl object-cover"
          autoPlay
          muted
          playsInline
          aria-label="Planora celebration"
        />
        <h3 className="text-xl font-bold text-white">You&apos;re on the list!</h3>
        <p className="mt-2">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={compact ? 'flex flex-col gap-3 sm:flex-row' : 'mx-auto flex max-w-md flex-col gap-3 sm:flex-row'}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        aria-label="Email address"
        className="flex-1 rounded-xl border border-zinc-700 bg-planora-surface px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-planora-primary"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-xl bg-planora-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === 'loading' ? 'Joining…' : 'Join waitlist'}
      </button>
      {status === 'error' ? (
        <p className="basis-full text-xs text-red-400">{message}</p>
      ) : null}
    </form>
  );
}
