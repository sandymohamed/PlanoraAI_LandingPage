'use client';

import { motion } from 'framer-motion';

export function WeeklyReviewShowcase() {
  return (
    <section id="review" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold">AI Weekly Review</h2>
      <p className="mt-4 text-zinc-400">Beautiful, emotional, shareable — your week in one card.</p>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true }}
        className="mx-auto mt-12 max-w-md rounded-3xl bg-gradient-to-br from-planora-primary to-planora-bg p-10 text-center shadow-2xl"
      >
        <p className="text-xs uppercase tracking-widest text-white/70">Your week</p>
        <p className="mt-4 text-7xl font-bold text-white">84%</p>
        <p className="text-planora-accent">consistency</p>
        <p className="mt-6 text-sm text-white/80">
          &ldquo;You showed up 5 days this week. Tomorrow, protect one deep work block.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
