'use client';

import { motion } from 'framer-motion';

export function RoutinesFocus() {
  return (
    <section id="routines" className="border-t border-zinc-800/60 bg-planora-surface/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Routines & focus that stick</h2>
        <p className="mt-4 text-zinc-400">Daily habits, Pomodoro, deep work — with native alarms you can trust.</p>
        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          <motion.div whileInView={{ scale: 1 }} className="glass flex-1 rounded-2xl p-8">
            <p className="text-5xl font-extralight text-planora-accent">25:00</p>
            <p className="mt-2 text-sm text-zinc-500">Focus timer · Pomodoro · Deep work</p>
          </motion.div>
          <motion.div className="glass flex-1 rounded-2xl p-8">
            <ul className="space-y-3 text-zinc-300">
              <li>✓ Morning routines</li>
              <li>✓ Calendar integration</li>
              <li>✓ Smart task alarms</li>
              <li>✓ Snooze & reliability</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
