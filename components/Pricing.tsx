export function Pricing() {
  return (
    <section id="pricing" className="border-t border-zinc-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold">Simple pricing</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="glass rounded-2xl p-8 text-left">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="mt-2 text-3xl font-bold">$0</p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-400">
              <li>3 active goals</li>
              <li>3 AI plans / month</li>
              <li>Basic routines & reminders</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-planora-primary bg-planora-surface p-8 text-left">
            <h3 className="text-xl font-semibold text-planora-primary">Premium</h3>
            <p className="mt-2 text-3xl font-bold">$9.99<span className="text-base font-normal text-zinc-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-300">
              <li>Unlimited goals & AI</li>
              <li>Smart weekly reviews</li>
              <li>Advanced focus analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
