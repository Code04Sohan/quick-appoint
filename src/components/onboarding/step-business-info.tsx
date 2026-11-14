'use client';

import { useState } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BusinessInfoPayload } from '@/types/onboarding';

interface StepBusinessInfoProps {
  data: BusinessInfoPayload;
  onChange: (field: keyof BusinessInfoPayload, value: string) => void;
  onNext: () => void;
}

export function StepBusinessInfo({ data, onChange, onNext }: StepBusinessInfoProps) {
  const [showErrors, setShowErrors] = useState(false);

  const errors = {
    clinicName: data.clinicName.trim().length < 2,
    contactEmail: !data.contactEmail.includes('@') || !data.contactEmail.includes('.'),
    contactPhone: data.contactPhone.trim().length < 7,
    clinicAddress: data.clinicAddress.trim().length < 5,
  };

  const handleNextClick = () => {
    if (errors.clinicName || errors.contactEmail || errors.contactPhone || errors.clinicAddress) {
      setShowErrors(true);
      toast.error('Please fill in all required fields correctly to continue.');
      return;
    }
    onNext();
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
          Business Information
        </h2>
        <p className="text-sm text-on-surface-variant mt-1 font-normal">
          Provide your clinic&apos;s basic contact and physical location details for verified onboarding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Clinic Name */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="clinicName" className="text-xs sm:text-sm font-semibold text-on-surface">
            Clinic Name *
          </Label>
          <Input
            id="clinicName"
            value={data.clinicName}
            onChange={(e) => onChange('clinicName', e.target.value)}
            placeholder="e.g. City Care Clinic"
            className={`h-11 bg-surface border text-on-surface text-sm rounded-xl transition-colors ${
              showErrors && errors.clinicName
                ? 'border-destructive focus-visible:ring-destructive'
                : 'border-outline-variant focus-visible:ring-primary'
            }`}
          />
          {showErrors && errors.clinicName && (
            <span className="text-[11px] text-destructive flex items-center gap-1 mt-0.5">
              <AlertCircle className="w-3 h-3" /> Clinic name must be at least 2 characters.
            </span>
          )}
        </div>

        {/* Contact Email */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contactEmail" className="text-xs sm:text-sm font-semibold text-on-surface">
            Contact Email *
          </Label>
          <Input
            id="contactEmail"
            type="email"
            value={data.contactEmail}
            onChange={(e) => onChange('contactEmail', e.target.value)}
            placeholder="admin@citycare.com"
            className={`h-11 bg-surface border text-on-surface text-sm rounded-xl transition-colors ${
              showErrors && errors.contactEmail
                ? 'border-destructive focus-visible:ring-destructive'
                : 'border-outline-variant focus-visible:ring-primary'
            }`}
          />
          {showErrors && errors.contactEmail && (
            <span className="text-[11px] text-destructive flex items-center gap-1 mt-0.5">
              <AlertCircle className="w-3 h-3" /> Please enter a valid email address.
            </span>
          )}
        </div>

        {/* Official Phone Number */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <Label htmlFor="contactPhone" className="text-xs sm:text-sm font-semibold text-on-surface">
            Official Phone Number *
          </Label>
          <Input
            id="contactPhone"
            type="tel"
            value={data.contactPhone}
            onChange={(e) => onChange('contactPhone', e.target.value)}
            placeholder="(555) 000-0000"
            className={`h-11 bg-surface border text-on-surface text-sm rounded-xl transition-colors ${
              showErrors && errors.contactPhone
                ? 'border-destructive focus-visible:ring-destructive'
                : 'border-outline-variant focus-visible:ring-primary'
            }`}
          />
          {showErrors && errors.contactPhone && (
            <span className="text-[11px] text-destructive flex items-center gap-1 mt-0.5">
              <AlertCircle className="w-3 h-3" /> Please enter a valid contact phone number.
            </span>
          )}
        </div>

        {/* Full Physical Address */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <Label htmlFor="clinicAddress" className="text-xs sm:text-sm font-semibold text-on-surface">
            Full Physical Address *
          </Label>
          <Textarea
            id="clinicAddress"
            value={data.clinicAddress}
            onChange={(e) => onChange('clinicAddress', e.target.value)}
            placeholder="123 Health Ave, Medical District, NY 10001"
            rows={3}
            className={`bg-surface border text-on-surface text-sm rounded-xl resize-none p-3 transition-colors ${
              showErrors && errors.clinicAddress
                ? 'border-destructive focus-visible:ring-destructive'
                : 'border-outline-variant focus-visible:ring-primary'
            }`}
          />
          {showErrors && errors.clinicAddress && (
            <span className="text-[11px] text-destructive flex items-center gap-1 mt-0.5">
              <AlertCircle className="w-3 h-3" /> Please enter the complete clinic street address.
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-outline-variant/40">
        <button
          type="button"
          onClick={handleNextClick}
          className="bg-primary text-on-primary px-7 py-2.5 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Next</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}