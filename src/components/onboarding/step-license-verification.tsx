'use client';

import { useState, useRef } from 'react';
import { UploadCloud, ArrowRight, ArrowLeft, CheckCircle, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LicenseVerificationPayload } from '@/types/onboarding';

interface StepLicenseVerificationProps {
  data: LicenseVerificationPayload;
  onChange: (field: keyof LicenseVerificationPayload, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepLicenseVerification({
  data,
  onChange,
  onNext,
  onBack,
}: StepLicenseVerificationProps) {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange('licenseFileName', file.name);
      if (!data.licenseNumber) {
        onChange('licenseNumber', 'LIC-VERIFIED-2026');
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      onChange('licenseFileName', file.name);
      if (!data.licenseNumber) {
        onChange('licenseNumber', 'LIC-VERIFIED-2026');
      }
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('licenseFileName', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isValid = Boolean(data.licenseFileName && data.licenseNumber);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-on-surface tracking-tight">
          Medical License Verification
        </h2>
        <p className="text-sm text-on-surface-variant mt-1 font-normal">
          Upload your primary medical license or clinic registration document for verification. This ensures trust and compliance on our platform.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="licenseNumber" className="text-xs sm:text-sm font-semibold text-on-surface">
            Medical License / Clinic Registration ID *
          </Label>
          <Input
            id="licenseNumber"
            value={data.licenseNumber || ''}
            onChange={(e) => onChange('licenseNumber', e.target.value)}
            placeholder="e.g. MED-REG-NY-8910"
            className="h-12 bg-surface border-outline-variant text-on-surface text-sm rounded-lg focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>

        {/* Hidden Native File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Drag and Drop Container */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed border-outline-variant rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-200 group relative ${
            dragActive
              ? 'border-secondary bg-surface-container'
              : data.licenseFileName
              ? 'border-tertiary-container bg-surface-container-low'
              : 'bg-surface-bright hover:bg-surface-container'
          }`}
        >
          {data.licenseFileName ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-xs">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="text-sm font-semibold text-on-surface">{data.licenseFileName}</div>
              <p className="text-xs text-on-tertiary-container font-medium">Document attached successfully</p>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="text-xs text-error hover:underline flex items-center gap-1 mt-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove file</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <UploadCloud className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-on-surface mt-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-on-surface-variant font-normal">PDF, JPG, PNG (Max 5MB)</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-4 border-t border-outline-variant/30">
        <button
          type="button"
          onClick={onBack}
          className="bg-surface text-primary border border-primary px-8 py-3 rounded-lg font-semibold text-sm shadow-sm hover:bg-primary-fixed hover:scale-[1.02] transition-all duration-200 flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!isValid}
          className="bg-primary text-on-primary px-8 py-3 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 flex items-center gap-2 cursor-pointer"
        >
          <span>Next</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
