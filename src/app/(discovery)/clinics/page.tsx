import { Metadata } from 'next';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { DiscoveryView } from '@/components/discovery/discovery-view';

export const metadata: Metadata = {
  title: 'Find Clinics & Real-Time Wait Times | QuickAppoint',
  description:
    'Discover top-rated clinics near you, check real-time queue wait times, and book instant appointment tokens.',
};

export default function ClinicsDiscoveryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">
        <DiscoveryView />
      </main>
      <Footer />
    </div>
  );
}

