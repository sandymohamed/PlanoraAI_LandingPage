import Image from 'next/image';
import Link from 'next/link';

const LOGO_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABqA//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAEFAqf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/ASP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/Al//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/IV//2gAMAwEAAgADAAAAEP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QH//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEAAT8QH//Z';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 text-center text-sm text-zinc-500">
      <div className="mb-8 flex flex-col items-center">
        <Image
          src="/logo.jpg"
          alt="Planora"
          width={80}
          height={80}
          className="rounded-2xl"
          placeholder="blur"
          blurDataURL={LOGO_BLUR}
        />
        <p className="mt-3 text-zinc-300">AI-powered productivity</p>
      </div>
      <nav className="mb-4 flex flex-wrap justify-center gap-6">
        <Link href="/privacy" className="hover:text-zinc-300">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-zinc-300">
          Terms of Service
        </Link>
        <Link href="/contact" className="hover:text-zinc-300">
          Contact
        </Link>
      </nav>
      <p>© {new Date().getFullYear()} Planora AI. Built for individuals who plan with intention.</p>
      <p className="mt-2">
        <a href="mailto:planora0ai@gmail.com" className="hover:text-zinc-300">
          planora0ai@gmail.com
        </a>
      </p>
    </footer>
  );
}
