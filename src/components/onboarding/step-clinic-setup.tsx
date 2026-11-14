'use client';

import { ShieldCheck, CheckCircle2, ArrowLeft, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ClinicSetupPayload } from '@/types/onboarding';

interface StepClinicSetupProps {
  data: ClinicSetupPayload;
  onChange: (field: keyof ClinicSetupPayload, value: string | boolean) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export function StepClinicSetup({
  data,
  onChange,
  onSubmit,
  onBack,
  isSubmitting,
}: StepClinicSetupProps) {
  const isValid = data.specialties.trim().length >= 2 && data.acceptTerms;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-on-surface tracking-tight">
          Clinic Setup
        </h2>
        <p className="text-sm text-on-surface-variant mt-1 font-normal">
          Let patients know what medical services and specialties your practice provides.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="specialties" className="text-xs sm:text-sm font-semibold text-on-surface">
            Primary Specialties (comma-separated) *
          </Label>
          <Input
            id="specialties"
            value={data.specialties}
            onChange={(e) => onChange('specialties', e.target.value)}
            placeholder="e.g. Cardiology, Pediatrics, General Medicine"
            className="h-12 bg-surface border-outline-variant text-on-surface text-sm rounded-lg focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>

        {/* Trust & Safety Commitment Card */}
        <div className="bg-surface p-5 sm:p-6 rounded-xl shadow-sm border border-outline-variant/50 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-on-surface font-semibold text-base">
            <ShieldCheck className="w-5 h-5 text-tertiary-container shrink-0" />
            <span>Trust & Safety Commitment</span>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-normal">
            By submitting this application, you agree to our terms of service and certify that all provided clinic information and medical licensing credentials are accurate and legally authorized under national health regulations.
          </p>

          <label className="flex items-start gap-2.5 mt-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={data.acceptTerms}
              onChange={(e) => onChange('acceptTerms', e.target.checked)}
              className="mt-1 w-4 h-4 accent-primary rounded cursor-pointer"
            />
            <span className="text-xs sm:text-sm font-medium text-on-surface">
              I agree to the Provider Terms of Service and certify that all provided details are verifiable.
            </span>
          </label>
        </div>
      </div>

      <div className="flex justify-between pt-4 border-t border-outline-variant/30">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="bg-surface text-primary border border-primary px-8 py-3 rounded-lg font-semibold text-sm shadow-sm hover:bg-primary-fixed hover:scale-[1.02] transition-all duration-200 flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!isValid || isSubmitting}
          className="bg-tertiary-container text-on-tertiary-container px-8 py-3 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 flex items-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit for Approval</span>
              <CheckCircle2 className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
