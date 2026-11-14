import { Metadata } from 'next';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { PatientRegistrationCard } from '@/components/patient/patient-registration-card';

export const metadata: Metadata = {
  title: 'Patient Registration | QuickAppoint',
  description: 'Create your QuickAppoint patient profile to book clinic tokens and track live doctor queues in real time.',
};

export default function PatientRegisterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-20 pb-16 flex flex-col items-center justify-center w-full px-4 sm:px-6">
        <PatientRegistrationCard />
      </main>
      <Footer />
    </div>
  );
}
