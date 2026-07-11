import Image from 'next/image';
import Link from 'next/link';

const LOGO_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABqA//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAEFAqf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/ASP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/Al//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/IV//2gAMAwEAAgADAAAAEP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QH//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEAAT8QH//Z';

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Planora home">
          <Image
            src="/logo.jpg"
            alt="Planora"
            width={40}
            height={40}
            className="rounded-xl"
            placeholder="blur"
            blurDataURL={LOGO_BLUR}
            priority
          />
          <span className="text-lg font-bold tracking-tight">
            Planora <span className="gradient-text">AI</span>
          </span>
        </Link>
        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a href="#ai">AI Planning</a>
          <a href="#routines">Routines</a>
          <a href="#pricing">Pricing</a>
          <a href="#premium">Premium</a>
          <a href="#faq">FAQ</a>
        </div>
        <a
          href="#waitlist"
          className="rounded-full bg-planora-primary px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
