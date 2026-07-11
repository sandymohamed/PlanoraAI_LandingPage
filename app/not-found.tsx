import Image from 'next/image';
import Link from 'next/link';

const LOGO_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABqA//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAEFAqf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/ASP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/Al//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/IV//2gAMAwEAAgADAAAAEP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QH//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEAAT8QH//Z';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-planora-bg px-6 text-center text-white">
      <Image
        src="/logo.jpg"
        alt="Planora"
        width={150}
        height={150}
        className="rounded-[2rem]"
        placeholder="blur"
        blurDataURL={LOGO_BLUR}
        priority
      />
      <h1 className="mt-8 text-3xl font-bold">Page not found</h1>
      <Link
        href="/"
        className="mt-6 rounded-full bg-planora-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Page not found - Go home
      </Link>
    </main>
  );
}
