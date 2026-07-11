import Image from 'next/image';
import { WaitlistForm } from '@/components/WaitlistForm';

const LOGO_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABqA//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAEFAqf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/ASP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/Al//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/IV//2gAMAwEAAgADAAAAEP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QH//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEAAT8QH//Z';

const FEATURES = [
  { title: 'Unlimited AI Plans', desc: 'Generate as many AI goal plans as you need — no monthly cap.' },
  { title: 'Advanced Analytics', desc: 'Understand your goals, routines, and where your time really goes.' },
  { title: 'Smart Productivity Reports', desc: 'Personalized weekly reviews with actionable recommendations.' },
  { title: 'Future Premium Features', desc: 'Early access to collaboration, themes, and everything we ship next.' },
];

export function PremiumComingSoon() {
  return (
    <section id="premium" className="border-t border-zinc-800/60 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full border border-planora-primary/50 bg-planora-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-planora-primary">
            Premium — Coming Soon
          </span>
          <h2 className="mt-6 text-3xl font-bold">The most powerful version of Planora</h2>
          <p className="mt-4 text-zinc-400">
            We&apos;re building Premium. It&apos;s not available yet — join the waitlist to get it first.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6">
              <Image
                src="/logo.jpg"
                alt=""
                width={32}
                height={32}
                className="mb-4 rounded-lg"
                placeholder="blur"
                blurDataURL={LOGO_BLUR}
              />
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-md">
          <WaitlistForm source="landing" compact />
        </div>
      </div>
    </section>
  );
}
