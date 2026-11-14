import { Metadata } from 'next';
import Link from 'next/link';
import { UserPlus, Building2, Clock, ShieldCheck, ArrowRight, Activity, Smartphone } from 'lucide-react';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Patient Portal Hub | QuickAppoint',
  description: 'Manage your appointments, track real-time queue tokens, and discover certified clinics near you.',
};

export default function PatientPortalHubPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface overflow-x-hidden">
      <Header />

      <main className="flex-1 pt-24 pb-16 w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col gap-10">
          {/* Hero Section */}
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-secondary" />
              Patient Care Portal
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-on-background tracking-tight">
              Simplified Clinic Queuing & Fast-Track Booking
            </h1>
            <p className="text-sm sm:text-base text-on-surface-variant font-normal leading-relaxed">
              Book certified specialists, track your live token position from home, and eliminate waiting room delays with real-time notifications.
            </p>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Register */}
            <div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-outline-variant/60 p-6 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                  <UserPlus className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-on-surface mb-2">New Patient Profile</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Create your profile with rapid phone or email verification to start booking appointment tokens across our entire clinic network.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/30">
                <Button asChild className="w-full bg-primary text-on-primary hover:bg-primary-container font-semibold text-sm rounded-xl py-2.5">
                  <Link href="/patient/register" className="flex items-center justify-center gap-2">
                    <span>Register Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Card 2: Find Clinics */}
            <div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-outline-variant/60 p-6 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-on-surface mb-2">Find Nearby Clinics</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Discover top-rated local practices, review doctor availability, compare live queue waiting times, and book immediate consults.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/30">
                <Button asChild variant="outline" className="w-full font-semibold text-sm rounded-xl py-2.5 hover:bg-surface-container">
                  <Link href="/clinics" className="flex items-center justify-center gap-2">
                    <span>Explore Clinics</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Card 3: Track Live Queue */}
            <div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-outline-variant/60 p-6 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-on-surface mb-2">Live Token Queue Tracking</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Active consultation token holders receive live queue countdowns, estimated entry times, and automatic SMS alerts when the doctor is ready.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/30">
                <Button asChild variant="outline" className="w-full font-semibold text-sm rounded-xl py-2.5 hover:bg-surface-container">
                  <Link href="/clinics" className="flex items-center justify-center gap-2">
                    <span>View Live Clinics</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Trust & Features Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-outline-variant/40">
            <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <ShieldCheck className="w-6 h-6 text-tertiary shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-on-surface">HIPAA & Privacy Protected</h4>
                <p className="text-xs text-on-surface-variant">End-to-end encrypted medical data</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <Clock className="w-6 h-6 text-secondary shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-on-surface">Zero Wait Time Anxiety</h4>
                <p className="text-xs text-on-surface-variant">Arrive right when your number is called</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <Smartphone className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-on-surface">Instant SMS Notifications</h4>
                <p className="text-xs text-on-surface-variant">Real-time status updates to your phone</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
