import { Metadata } from 'next';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { ClinicAuthSplitLayout } from '@/components/auth/clinic-auth-split-layout';

export const metadata: Metadata = {
  title: 'Clinic Owner Portal & Sign In | QuickAppoint',
  description: 'Sign in to your QuickAppoint clinic dashboard or register a new clinical practice.',
};

export default function ClinicLoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-16">
        <ClinicAuthSplitLayout />
      </main>
      <Footer />
    </div>
  );
}

