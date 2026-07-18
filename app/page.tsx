'use client';

import { Hero } from '@/components/Hero';
import { AIShowcase } from '@/components/AIShowcase';
import { RoutinesFocus } from '@/components/RoutinesFocus';
import { WeeklyReviewShowcase } from '@/components/WeeklyReviewShowcase';
import { Pricing } from '@/components/Pricing';
import { PremiumComingSoon } from '@/components/PremiumComingSoon';
import { Testimonials } from '@/components/Testimonials';
import { Waitlist } from '@/components/Waitlist';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-planora-bg">
      <Nav />
      <Hero />
      <Waitlist />
      <AIShowcase />
      <RoutinesFocus />
      <WeeklyReviewShowcase />
      <Pricing />
      <PremiumComingSoon />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
