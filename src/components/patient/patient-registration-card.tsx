'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { ShieldCheck, Lock, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRequestPatientOtp, useVerifyPatientOtp, useRegisterPatientProfile } from '@/hooks/usePatientRegistration';
import { AuthRegistrationMethod, PatientProfile } from '@/types/patient';

export function PatientRegistrationCard() {
  const [method, setMethod] = useState<AuthRegistrationMethod>('phone');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);

  // Profile data
  const [profile, setProfile] = useState<PatientProfile>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const requestOtpMutation = useRequestPatientOtp();
  const verifyOtpMutation = useVerifyPatientOtp();
  const registerProfileMutation = useRegisterPatientProfile();

  const handleSendOtp = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const identifier = method === 'phone' ? phone : email;
    if (
      !identifier ||
      (method === 'phone' && identifier.length < 7) ||
      (method === 'email' && !identifier.includes('@'))
    ) {
      toast.error(method === 'phone' ? 'Please enter a valid phone number' : 'Please enter a valid email address');
      return;
    }

    setIsSendingOtp(true);
    try {
      await requestOtpMutation.mutateAsync(identifier);
      setShowOtpInput(true);
      toast.success('Verification code sent! (Demo code: 123456)');
    } catch {
      toast.error('Failed to send verification code. Try again.');
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleOtpDigitChange = async (index: number, val: string) => {
    if (val.length > 1) {
      val = val.slice(-1);
    }
    const newDigits = [...otpDigits];
    newDigits[index] = val;
    setOtpDigits(newDigits);

    // Auto-advance focus to next input
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }

    // Auto-verify when 6 digits filled
    const fullCode = newDigits.join('');
    if (fullCode.length === 6) {
      try {
        const identifier = method === 'phone' ? phone : email;
        const res = await verifyOtpMutation.mutateAsync({ identifier, code: fullCode });
        if (res.valid) {
          setOtpVerified(true);
          toast.success('Verification successful!');
        } else {
          toast.error('Invalid verification code. Use 123456 for demo.');
        }
      } catch {
        toast.error('Error verifying code.');
      }
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    const identifier = method === 'phone' ? phone : email;
    if (!identifier) {
      toast.error(method === 'phone' ? 'Please enter your phone number' : 'Please enter your email address');
      return;
    }

    if (!profile.firstName.trim() || !profile.lastName.trim()) {
      toast.error('Please enter your first and last name');
      return;
    }

    if (!profile.dateOfBirth) {
      toast.error('Please select your date of birth');
      return;
    }

    try {
      await registerProfileMutation.mutateAsync({
        ...profile,
        phone: method === 'phone' ? phone : undefined,
        email: method === 'email' ? email : undefined,
      });
      setIsRegistered(true);
      toast.success('Patient profile registered successfully!');
    } catch {
      toast.error('Failed to register profile. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto shrink-0 min-w-[320px] sm:min-w-[420px]">
      {isRegistered ? (
        <div className="w-full bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/60 p-6 sm:p-8 text-center flex flex-col items-center gap-4 animate-in zoom-in-95 duration-300 shrink-0">
          <div className="w-16 h-16 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-on-surface tracking-tight">
            Welcome, {profile.firstName}!
          </h2>
          <p className="text-sm text-on-surface-variant leading-relaxed font-normal">
            Your patient profile has been registered. You can now browse verified clinics, track live queue wait times, and reserve doctor consultation tokens.
          </p>
          <div className="flex flex-col w-full gap-3 mt-4">
            <Link
              href="/clinics"
              className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-semibold text-sm shadow-md hover:bg-primary-container hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Explore Nearby Clinics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/patient"
              className="w-full py-3 text-center text-sm font-semibold text-on-surface-variant hover:text-on-surface border border-outline-variant/60 rounded-xl transition-colors"
            >
              Patient Portal Hub
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/60 relative overflow-hidden shrink-0 transition-all duration-300">
          {/* Decorative Top Ambient Elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-fixed/20 to-transparent pointer-events-none" />
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-secondary-fixed/25 rounded-full blur-2xl pointer-events-none" />

          <div className="p-6 sm:p-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-container text-on-primary-container mb-3 shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-[28px] font-bold text-on-surface tracking-tight">
                Welcome
              </h2>
              <p className="text-sm text-on-surface-variant font-normal mt-1">
                Create your patient profile to get started.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmitProfile} className="flex flex-col gap-4">
              {/* Registration Method Tabs */}
              <div className="flex p-1 bg-surface-container-low rounded-xl relative" role="tablist">
                <button
                  type="button"
                  onClick={() => {
                    setMethod('phone');
                    setShowOtpInput(false);
                    setOtpVerified(false);
                  }}
                  className={`flex-1 py-2.5 text-center text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    method === 'phone'
                      ? 'bg-surface-container-highest text-on-surface shadow-xs'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Phone Number
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMethod('email');
                    setShowOtpInput(false);
                    setOtpVerified(false);
                  }}
                  className={`flex-1 py-2.5 text-center text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    method === 'email'
                      ? 'bg-surface-container-highest text-on-surface shadow-xs'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Email Address
                </button>
              </div>

              {/* Identifier Input */}
              <div className="flex flex-col gap-2">
                {method === 'phone' ? (
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone" className="text-xs font-semibold text-on-surface-variant">
                      Phone Number *
                    </Label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-sm font-medium text-on-surface-variant pointer-events-none">
                        +1
                      </span>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(555) 000-0000"
                        className="w-full bg-surface-container-lowest text-on-surface text-sm rounded-xl py-3 pl-11 pr-4 outline-none border border-outline-variant focus-visible:ring-2 focus-visible:ring-secondary h-12 shadow-2xs"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="text-xs font-semibold text-on-surface-variant">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="patient@example.com"
                      className="w-full bg-surface-container-lowest text-on-surface text-sm rounded-xl py-3 px-4 outline-none border border-outline-variant focus-visible:ring-2 focus-visible:ring-secondary h-12 shadow-2xs"
                    />
                  </div>
                )}

                {/* Send OTP Button */}
                {!showOtpInput && !otpVerified && (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={isSendingOtp}
                    className="w-full mt-1 py-3 px-4 bg-surface-container-high text-on-surface text-xs sm:text-sm font-semibold rounded-xl hover:bg-surface-variant transition-colors active:scale-[0.98] cursor-pointer"
                  >
                    {isSendingOtp ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Code...</span>
                      </span>
                    ) : (
                      'Send OTP Code'
                    )}
                  </button>
                )}

                {/* 6-Digit OTP Verification Box */}
                {showOtpInput && !otpVerified && (
                  <div className="flex flex-col gap-2 pt-1 animate-in fade-in-50 duration-200">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-on-surface-variant">
                        Enter Verification Code
                      </span>
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="text-xs text-secondary font-semibold hover:underline cursor-pointer"
                      >
                        Resend
                      </button>
                    </div>
                    <div className="flex gap-2 justify-between">
                      {otpDigits.map((digit, idx) => (
                        <input
                          key={idx}
                          id={`otp-${idx}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpDigitChange(idx, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                          className="w-12 h-14 text-center font-bold text-lg bg-surface border border-outline-variant rounded-xl outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-[11px] text-on-surface-variant/80 text-center">
                      Demo code: <strong>123456</strong>
                    </p>
                  </div>
                )}

                {otpVerified && (
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-tertiary-container/20 border border-tertiary-container/50 text-on-tertiary-container text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-on-tertiary-container shrink-0" />
                    <span>Contact verified successfully</span>
                  </div>
                )}
              </div>

              {/* Profile Fields (First Name, Last Name, DOB) */}
              <div className="flex flex-col gap-3 pt-3 border-t border-outline-variant/30">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="firstName" className="text-xs font-semibold text-on-surface-variant">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={profile.firstName}
                      onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                      placeholder="Jane"
                      className="w-full bg-surface-container-lowest text-on-surface text-sm rounded-xl py-2.5 px-3.5 border border-outline-variant focus-visible:ring-2 focus-visible:ring-secondary h-12 shadow-2xs"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="lastName" className="text-xs font-semibold text-on-surface-variant">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={profile.lastName}
                      onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full bg-surface-container-lowest text-on-surface text-sm rounded-xl py-2.5 px-3.5 border border-outline-variant focus-visible:ring-2 focus-visible:ring-secondary h-12 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="dob" className="text-xs font-semibold text-on-surface-variant">
                    Date of Birth *
                  </Label>
                  <Input
                    id="dob"
                    type="date"
                    value={profile.dateOfBirth}
                    onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })}
                    className="w-full bg-surface-container-lowest text-on-surface text-sm rounded-xl py-2.5 px-3.5 border border-outline-variant focus-visible:ring-2 focus-visible:ring-secondary h-12 shadow-2xs"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <button
                  type="submit"
                  disabled={registerProfileMutation.isPending}
                  className="w-full bg-primary text-on-primary text-sm font-semibold py-3.5 px-4 rounded-xl shadow-md hover:bg-primary-container hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {registerProfileMutation.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Register Profile</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-on-surface-variant mt-3 font-normal">
                  Already have an account?{' '}
                  <Link href="/login" className="text-secondary font-semibold hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Trust Indicators */}
      <div className="flex items-center justify-center gap-6 mt-6 opacity-75">
        <div className="flex items-center gap-1.5 text-on-background text-xs font-medium">
          <Lock className="w-3.5 h-3.5" />
          <span>Secure</span>
        </div>
        <div className="flex items-center gap-1.5 text-on-background text-xs font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-tertiary-container" />
          <span>HIPAA Compliant</span>
        </div>
      </div>
    </div>
  );
}
