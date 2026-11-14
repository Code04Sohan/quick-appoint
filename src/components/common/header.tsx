'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Menu, Calendar, Building2, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/clinics', label: 'Find Clinics' },
    { href: '/patient', label: 'For Patients' },
    { href: '/#how-it-works', label: 'How it Works' },
    { href: '/onboarding', label: 'For Clinics' },
    { href: '/#for-partners', label: 'For Partners' },
    { href: '/#faq', label: 'FAQ' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-border/60 transition-colors">
      <div className="h-16 max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img
            alt="QuickAppoint Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsw7KHnSflAeOaNNX5FU8qJBK8qCRTGaC94uQUy41fuegBh5yEGfHqZLSCaSAs2upm8oVBbamb6w1aEgT31AO1YjGdLNYGj1nb_KBIOz4Q_JGIUUdQnzw6LqqPeRLmYjnZy9zXt6r0zx976rVZmDzhHLPFo0ILvRukX118u6pVsO7rm83lJVUou7MAkbuxf-r9vg5CKcMMU2tMY8Gn3tvtrgG39lkPTmEB6g3nYot8IoDF7DYr2FwQ"
          />
          <span className="text-[20px] leading-[28px] font-bold text-primary tracking-tight">QuickAppoint</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/60 py-1 px-2 rounded-full border border-outline-variant/30">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] leading-[20px] font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container-lowest px-3 py-1.5 rounded-full transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-sm">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button asChild className="hidden md:inline-flex h-10 px-5 text-[14px] font-semibold rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Link href="/clinics">
                <span>Find Clinic</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
          </motion.div>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 p-0 hover:ring-2 hover:ring-primary/20 transition-all cursor-pointer">
                <Avatar className="h-8 w-8 bg-primary ring-2 ring-primary/20">
                  <AvatarFallback className="bg-primary text-white font-semibold">
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 shadow-lg border-border">
              <DropdownMenuLabel className="font-bold text-primary">Quick Portals</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/clinics" className="flex items-center gap-2 cursor-pointer font-medium">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Find & Book Clinics</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/patient" className="flex items-center gap-2 cursor-pointer font-medium">
                  <User className="w-4 h-4 text-emerald-600" />
                  <span>For Patients</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/patient/register" className="flex items-center gap-2 cursor-pointer font-medium text-xs text-on-surface-variant pl-7">
                  <span>↳ Patient Registration</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login" className="flex items-center gap-2 cursor-pointer font-medium">
                  <Building2 className="w-4 h-4 text-sky-600" />
                  <span>Doctor / Clinic Login</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/onboarding" className="flex items-center gap-2 cursor-pointer font-medium">
                  <Shield className="w-4 h-4 text-indigo-600" />
                  <span>Register Your Clinic</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Navigation Drawer */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-on-surface hover:bg-surface-container">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between">
                <div>
                  <SheetHeader className="text-left mb-6 pb-4 border-b border-border/60">
                    <SheetTitle className="text-primary font-bold text-lg flex items-center gap-2">
                      <img
                        alt="QuickAppoint Logo"
                        className="h-6 w-auto object-contain"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsw7KHnSflAeOaNNX5FU8qJBK8qCRTGaC94uQUy41fuegBh5yEGfHqZLSCaSAs2upm8oVBbamb6w1aEgT31AO1YjGdLNYGj1nb_KBIOz4Q_JGIUUdQnzw6LqqPeRLmYjnZy9zXt6r0zx976rVZmDzhHLPFo0ILvRukX118u6pVsO7rm83lJVUou7MAkbuxf-r9vg5CKcMMU2tMY8Gn3tvtrgG39lkPTmEB6g3nYot8IoDF7DYr2FwQ"
                      />
                      QuickAppoint
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="text-base font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container px-3 py-2.5 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="pt-4 border-t border-border flex flex-col gap-3">
                  <Button asChild className="w-full h-11 text-base font-semibold shadow-md" onClick={handleLinkClick}>
                    <Link href="#cta">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-on-surface-variant">
                    Real-time clinic token & queue tracking
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
