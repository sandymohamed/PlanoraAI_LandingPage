'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,108,246,0.25),_transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto mb-10 flex size-[200px] items-center justify-center overflow-hidden rounded-[2rem] bg-planora-surface shadow-2xl shadow-planora-primary/20 md:size-[400px] md:rounded-[3rem]"
        >
          <video
            src="/logo.mp4"
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Animated Planora logo"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-planora-accent"
        >
          AI productivity for individuals
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight md:text-6xl"
        >
          Your goals deserve a{' '}
          <span className="gradient-text">real plan.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400"
        >
          Planora AI turns goals, routines, and time into a system that keeps you moving every day.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#download"
            className="rounded-full bg-gradient-to-r from-planora-primary to-planora-accent px-8 py-4 font-semibold text-white shadow-lg shadow-planora-primary/30"
          >
            Get Started
          </a>
          <button
            type="button"
            className="rounded-full border border-zinc-700 px-8 py-4 font-semibold text-zinc-200 transition hover:border-zinc-500"
          >
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
