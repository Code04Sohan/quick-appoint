'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OnboardingStepper } from './onboarding-stepper';
import { StepBusinessInfo } from './step-business-info';
import { StepLicenseVerification } from './step-license-verification';
import { StepClinicSetup } from './step-clinic-setup';
import { useOnboarding } from '@/hooks/useOnboarding';
import {
  OnboardingState,
  OnboardingStepNumber,
  BusinessInfoPayload,
  LicenseVerificationPayload,
  ClinicSetupPayload,
} from '@/types/onboarding';

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState<OnboardingStepNumber>(1);
  const [maxCompletedStep, setMaxCompletedStep] = useState<number>(1);

  const [businessInfo, setBusinessInfo] = useState<BusinessInfoPayload>({
    clinicName: '',
    contactEmail: '',
    contactPhone: '',
    clinicAddress: '',
  });
  const [licenseVerification, setLicenseVerification] = useState<LicenseVerificationPayload>({
    licenseNumber: '',
    issuingAuthority: '',
    licenseFileName: '',
  });
  const [clinicSetup, setClinicSetup] = useState<ClinicSetupPayload>({
    specialties: '',
    acceptTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const onboardingMutation = useOnboarding();

  const handleBusinessInfoChange = (field: keyof BusinessInfoPayload, value: string) => {
    setBusinessInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleLicenseChange = (field: keyof LicenseVerificationPayload, value: string) => {
    setLicenseVerification((prev) => ({ ...prev, [field]: value }));
  };

  const handleSetupChange = (field: keyof ClinicSetupPayload, value: string | boolean) => {
    setClinicSetup((prev) => ({ ...prev, [field]: value }));
  };

  // Safe navigation: users can freely click any current or previously visited/unlocked step
  const handleStepClick = (step: number) => {
    if (step <= Math.max(currentStep, maxCompletedStep)) {
      setCurrentStep(step as OnboardingStepNumber);
    }
  };

  const goToNextStep = (next: OnboardingStepNumber) => {
    setCurrentStep(next);
    setMaxCompletedStep((prev) => Math.max(prev, next));
  };

  const handleSubmit = async () => {
    const payload: OnboardingState = {
      currentStep,
      businessInfo,
      licenseVerification,
      clinicSetup,
      isSubmitted: true,
    };

    try {
      await onboardingMutation.mutateAsync(payload);
      setSubmitted(true);
      toast.success('Clinic onboarding submitted for verification!');
    } catch {
      toast.error('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center">
      {/* Centered Page Header */}
      <div className="mb-8 text-center max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-on-surface mb-2 tracking-tight">
          Register Your Clinic
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant font-normal leading-relaxed">
          Join QuickAppoint and streamline your patient booking experience. Please provide your clinic details below for verification.
        </p>
      </div>

      {submitted ? (
        <div className="w-full bg-surface-container-lowest rounded-3xl shadow-xl p-8 sm:p-12 border border-outline-variant/60 text-center flex flex-col items-center gap-5 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-inner">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-on-surface">Application Submitted!</h2>
          <p className="text-sm text-on-surface-variant max-w-md font-normal leading-relaxed">
            Thank you for registering <strong>{businessInfo.clinicName}</strong>. Our clinical verification team will review your registration within 24 hours. You will receive an activation notification via email and SMS.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
            <Button asChild className="bg-primary text-on-primary rounded-xl font-semibold px-6 h-11">
              <Link href="/login">Go to Owner Portal</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl font-semibold px-6 h-11 border-outline-variant">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full bg-surface-container-lowest rounded-3xl shadow-xl p-6 sm:p-10 border border-outline-variant/60 flex flex-col gap-8">
          
          {/* Centered & Interactive Stepper */}
          <div className="w-full flex justify-center border-b border-outline-variant/40 pb-6">
            <OnboardingStepper 
              currentStep={currentStep} 
              onStepClick={handleStepClick} 
            />
          </div>

          {/* Animated Step Form Body */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                >
                  <StepBusinessInfo
                    data={businessInfo}
                    onChange={handleBusinessInfoChange}
                    onNext={() => goToNextStep(2)}
                  />
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                >
                  <StepLicenseVerification
                    data={licenseVerification}
                    onChange={handleLicenseChange}
                    onNext={() => goToNextStep(3)}
                    onBack={() => setCurrentStep(1)}
                  />
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                >
                  <StepClinicSetup
                    data={clinicSetup}
                    onChange={handleSetupChange}
                    onSubmit={handleSubmit}
                    onBack={() => setCurrentStep(2)}
                    isSubmitting={onboardingMutation.isPending}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      )}
    </div>
  );
}