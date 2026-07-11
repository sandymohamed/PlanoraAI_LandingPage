const FAQS = [
  {
    q: 'Is Planora AI free?',
    a: 'Yes. The public beta is free and includes 3 AI-generated plans per month, goals, tasks, routines, calendar, and alarms.',
  },
  {
    q: 'What does the AI do?',
    a: 'Describe a goal and Planora breaks it into milestones and scheduled tasks, then keeps you on track with reminders and weekly reviews.',
  },
  {
    q: 'When is Premium launching?',
    a: 'Premium (unlimited AI, advanced analytics, and smart reports) is coming soon. Join the waitlist and we\u2019ll email you at launch.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'Android is available now. iOS is planned. The same account syncs your data across devices.',
  },
  {
    q: 'How is my data handled?',
    a: 'Your data is private and never sold. You can export or delete everything from the app at any time. See our Privacy Policy for details.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-zinc-800/60 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold">Frequently asked questions</h2>
        <div className="mt-12 space-y-4">
          {FAQS.map((item) => (
            <details key={item.q} className="glass rounded-xl p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-white">
                {item.q}
              </summary>
              <p className="mt-3 text-sm text-zinc-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
