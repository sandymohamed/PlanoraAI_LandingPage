'use client';

import { motion } from 'framer-motion';

export function AIShowcase() {
  return (
    <section id="ai" className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold md:text-4xl"
      >
        Turn goals into{' '}
        <span className="gradient-text">actionable daily plans</span>
      </motion.h2>
      <p className="mt-4 max-w-xl text-zinc-400">
        AI generates roadmaps, milestones, and tasks — then adapts with weekly reviews and overload detection.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {['Roadmap generation', 'Smart scheduling', 'Motivational coaching'].map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-semibold text-white">{t}</h3>
            <p className="mt-2 text-sm text-zinc-500">Supportive, intelligent, never robotic.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
