import { Metadata } from 'next';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { OnboardingWizard } from '@/components/onboarding/onboarding-wizard';

export const metadata: Metadata = {
  title: 'Register Your Clinic | QuickAppoint Provider Portal',
  description: 'Onboard your clinic to QuickAppoint to modernize your patient queues and streamline daily clinic flow.',
};

export default function ClinicOnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-container overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-20">
        <OnboardingWizard />
      </main>
      <Footer />
    </div>
  );
}

