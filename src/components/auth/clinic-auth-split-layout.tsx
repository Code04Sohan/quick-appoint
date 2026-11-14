'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import {
  ShieldCheck,
  Building2,
  TrendingUp,
  Lock,
  Mail,
  Phone,
  User,
  Eye,
  EyeOff,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useClinicLogin, useClinicRegister } from '@/hooks/useClinicAuth';
import { AuthMode, ClinicLoginInput, ClinicRegisterInput } from '@/types/auth';

export function ClinicAuthSplitLayout() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>('register');
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Form states
  const [loginData, setLoginData] = useState<ClinicLoginInput>({ email: '', password: '' });
  const [registerData, setRegisterData] = useState<ClinicRegisterInput>({
    clinicName: '',
    registrationId: '',
    contactName: '',
    email: '',
    phone: '',
    password: '',
    termsAccepted: true,
  });

  const loginMutation = useClinicLogin();
  const registerMutation = useClinicRegister();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error('Please enter your email and password');
      return;
    }

    try {
      const res = await loginMutation.mutateAsync(loginData);
      toast.success(`Welcome back, ${res.user.contactName}!`);
      router.push('/clinics');
    } catch {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerData.clinicName || !registerData.email || !registerData.password) {
      toast.error('Please fill in all required clinic details');
      return;
    }

    try {
      const res = await registerMutation.mutateAsync(registerData);
      toast.success(`Clinic account created for ${res.user.clinicName}!`);
      router.push('/onboarding');
    } catch {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-8 sm:py-12 lg:py-20 relative">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
        
        {/* Left Side: Value Prop / Trust (Order 2 on mobile, Order 1 on lg) */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center gap-6 order-2 lg:order-1">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-on-surface uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Provider Portal
            </span>
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-on-background tracking-tight leading-tight">
              Partner with <br />
              <span className="text-primary">Excellence.</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-md font-normal mt-2 leading-relaxed">
              Join our network of verified clinical providers. Streamline your patient management and secure your practice data with our enterprise-grade platform.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <div className="w-8 h-8 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-on-background">HIPAA / DPDP Compliant</h3>
                <p className="text-[11px] sm:text-xs text-on-surface-variant mt-0.5">End-to-end encryption for all patient records.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-on-background">Queue Analytics</h3>
                <p className="text-[11px] sm:text-xs text-on-surface-variant mt-0.5">Real-time insights into practice performance.</p>
              </div>
            </div>
          </div>

          {/* Image Overlay */}
          <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md hidden sm:block border border-outline-variant/40">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqE1NIKdeu8e4JlyUugtocZv9qtu9JW1MsadydMh3OUbCYtwv1dp_IwmNWx10TEYwo1aAup6xFNzkFBusvpbp27PQHDRweqLS1ky85vnAo9-o6ghERds-eGWwXEaDeM1DsJJp6230V5oLS-rAOyY9LOhFQa146oxNwBNifJWsuHGq5Gixpxe_Tmk3PdRP0OjkBr4NOVfYbNb-9lOmYRdRKAjE3lPbVlXm-Q56xHVa0_2_LhQXIqKH4"
              alt="Clinic reception"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-primary-container/40 to-transparent flex items-end p-4">
              <p className="text-xs sm:text-sm font-semibold text-on-primary flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tertiary-fixed" />
                Trusted by 500+ clinics nationwide.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Card (Order 1 on mobile, Order 2 on lg) */}
        <div className="w-full lg:w-5/12 flex-shrink-0 order-1 lg:order-2">
          <div className="bg-surface-container-lowest rounded-[24px] shadow-xl p-6 sm:p-10 border border-outline-variant/60 relative overflow-hidden transition-transform duration-300 hover:shadow-2xl">
            {/* Ambient Background Blob */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />

            {/* Toggle Header */}
            <div className="flex items-center justify-between mb-6 bg-surface-container-low p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setMode('register')}
                className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  mode === 'register'
                    ? 'bg-surface-container-lowest text-on-background shadow-sm'
                    : 'text-on-surface-variant hover:text-on-background'
                }`}
              >
                Register Clinic
              </button>
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  mode === 'login'
                    ? 'bg-surface-container-lowest text-on-background shadow-sm'
                    : 'text-on-surface-variant hover:text-on-background'
                }`}
              >
                Owner Login
              </button>
            </div>

            {/* Form */}
            <AnimatePresence mode="wait">
              {mode === 'register' ? (
                <motion.form
                  key="register-form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleRegisterSubmit}
                  className="flex flex-col gap-3.5 relative z-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-on-background" htmlFor="clinicName">
                        Clinic Name *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4 pointer-events-none" />
                        <Input
                          id="clinicName"
                          value={registerData.clinicName}
                          onChange={(e) =>
                            setRegisterData({ ...registerData, clinicName: e.target.value })
                          }
                          placeholder="e.g. Apex Health"
                          className="w-full pl-9 pr-3 h-11 bg-surface rounded-lg border-outline-variant text-sm text-on-background"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-on-background" htmlFor="regNumber">
                        Registration ID *
                      </label>
                      <Input
                        id="regNumber"
                        value={registerData.registrationId}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, registrationId: e.target.value })
                        }
                        placeholder="State License ID"
                        className="w-full px-3 h-11 bg-surface rounded-lg border-outline-variant text-sm text-on-background"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-on-background" htmlFor="contactName">
                      Primary Contact / Doctor Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4 pointer-events-none" />
                      <Input
                        id="contactName"
                        value={registerData.contactName}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, contactName: e.target.value })
                        }
                        placeholder="Dr. Jane Doe"
                        className="w-full pl-9 pr-3 h-11 bg-surface rounded-lg border-outline-variant text-sm text-on-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-on-background" htmlFor="email">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4 pointer-events-none" />
                        <Input
                          id="email"
                          type="email"
                          value={registerData.email}
                          onChange={(e) =>
                            setRegisterData({ ...registerData, email: e.target.value })
                          }
                          placeholder="contact@clinic.com"
                          className="w-full pl-9 pr-3 h-11 bg-surface rounded-lg border-outline-variant text-sm text-on-background"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-on-background" htmlFor="phone">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4 pointer-events-none" />
                        <Input
                          id="phone"
                          type="tel"
                          value={registerData.phone}
                          onChange={(e) =>
                            setRegisterData({ ...registerData, phone: e.target.value })
                          }
                          placeholder="(555) 000-0000"
                          className="w-full pl-9 pr-3 h-11 bg-surface rounded-lg border-outline-variant text-sm text-on-background"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-on-background" htmlFor="password">
                      Create Password *
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showRegisterPassword ? 'text' : 'password'}
                        value={registerData.password}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, password: e.target.value })
                        }
                        placeholder="Min. 8 characters"
                        className="w-full pr-10 h-11 bg-surface rounded-lg border-outline-variant text-sm text-on-background"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-background p-1"
                      >
                        {showRegisterPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={registerMutation.isPending}
                    className="w-full mt-2 bg-primary text-on-primary text-sm font-semibold py-3.5 px-4 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {registerMutation.isPending ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Create Clinic Account</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-on-surface-variant mt-1">
                    By registering, you agree to our{' '}
                    <Link href="#" className="text-secondary font-semibold hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="text-secondary font-semibold hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </motion.form>
              ) : (
                /* Owner Login Form */
                <motion.form
                  key="login-form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleLoginSubmit}
                  className="flex flex-col gap-4 relative z-10"
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-on-background" htmlFor="loginEmail">
                      Work Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4 pointer-events-none" />
                      <Input
                        id="loginEmail"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        placeholder="owner@clinic.com"
                        className="w-full pl-9 pr-3 h-12 bg-surface rounded-lg border-outline-variant text-sm text-on-background"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-semibold text-on-background" htmlFor="loginPassword">
                        Password *
                      </label>
                      <button
                        type="button"
                        onClick={() => toast.info('Password reset instructions sent to your email')}
                        className="text-xs font-semibold text-secondary hover:underline cursor-pointer"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div className="relative">
                      <Input
                        id="loginPassword"
                        type={showLoginPassword ? 'text' : 'password'}
                        value={loginData.password}
                        onChange={(e) =>
                          setLoginData({ ...loginData, password: e.target.value })
                        }
                        placeholder="Enter your password"
                        className="w-full pr-10 h-12 bg-surface rounded-lg border-outline-variant text-sm text-on-background"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-background p-1"
                      >
                        {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loginMutation.isPending}
                    className="w-full mt-2 bg-primary text-on-primary text-sm font-semibold py-3.5 px-4 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loginMutation.isPending ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Sign In to Clinic Dashboard</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-on-surface-variant mt-2">
                    New clinic?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('register')}
                      className="text-secondary font-semibold hover:underline cursor-pointer"
                    >
                      Register your practice
                    </button>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
