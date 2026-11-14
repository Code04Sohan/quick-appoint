import { Header } from '@/components/common/header';
import { HeroSection } from '@/components/landing/hero-section';
import { ValuePropositionSection } from '@/components/landing/value-proposition-section';
import { ForBusinessSection } from '@/components/landing/for-business-section';
import { PartnerNetworkSection } from '@/components/landing/partner-network-section';
import { FaqSection } from '@/components/landing/faq-section';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/common/footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full font-body-md text-on-surface bg-surface min-h-screen overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="w-full pt-16 bg-surface flex-1 overflow-x-hidden">
        <HeroSection />
        <ValuePropositionSection />
        <ForBusinessSection />
        <PartnerNetworkSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}