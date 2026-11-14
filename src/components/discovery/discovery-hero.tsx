'use client';

import { Search, ArrowRight, X, Sparkles, MapPin, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DiscoveryHeroProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedSpecialty: string;
  onSpecialtyChange: (value: string) => void;
  selectedDistance: string;
  onDistanceChange: (value: string) => void;
  onSearchSubmit: () => void;
}

export function DiscoveryHero({
  searchTerm,
  onSearchChange,
  selectedSpecialty,
  onSpecialtyChange,
  selectedDistance,
  onDistanceChange,
  onSearchSubmit,
}: DiscoveryHeroProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Outer Banner: Fully rounded container */}
      <section className="relative w-full overflow-hidden bg-primary text-on-primary rounded-3xl sm:rounded-[2.5rem] shadow-xl px-6 pt-12 pb-16 sm:px-12 sm:pt-16 sm:pb-20 flex flex-col items-center justify-center">
        
        {/* Original-Style Wave Curve Background */}
        <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1440 400"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96L60,117.3C120,139,240,181,360,186.7C480,192,600,160,720,138.7C840,117,960,107,1080,122.7C1200,139,1320,181,1380,202.7L1440,224L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Ambient Glows for Depth */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tertiary-fixed/15 rounded-full blur-3xl pointer-events-none" />

        {/* Text Container */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center gap-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-surface-container-high/30 text-on-primary border border-outline-variant/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-tertiary-fixed shrink-0" />
            <span>Fast-Track Your Care</span>
          </div>

          <h1 className="w-full text-3xl sm:text-5xl font-extrabold text-on-primary tracking-tight leading-tight">
            Find exceptional care,{' '}
            <span className="text-tertiary-fixed block sm:inline">without the wait.</span>
          </h1>

          <p className="w-full text-sm sm:text-base lg:text-lg text-on-primary/80 font-normal leading-relaxed">
            Discover top-rated clinics, view live queue times, and book appointments instantly with certified specialists near you.
          </p>
        </motion.div>

        {/* Authentic Pill Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="relative z-10 w-full max-w-4xl mt-8 sm:mt-10"
        >
          <div className="w-full bg-surface-container-lowest text-on-surface rounded-2xl sm:rounded-full p-2 shadow-2xl border border-outline-variant/60 flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
            
            {/* 1. Clinic or Doctor Input */}
            <div className="flex-1 w-full flex items-center px-4 py-2 sm:py-0">
              <Search className="w-4 h-4 text-outline shrink-0 mr-3 pointer-events-none" />
              <div className="flex flex-col flex-1 text-left">
                <span className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant hidden sm:block">
                  Where or Who
                </span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Clinic, doctor, or specialty..."
                  className="w-full bg-transparent text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none"
                />
              </div>
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="text-outline hover:text-on-surface p-1 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-8 bg-outline-variant/60" />

            {/* 2. Specialty Dropdown */}
            <div className="w-full sm:w-48 px-2 sm:px-3">
              <Select value={selectedSpecialty} onValueChange={onSpecialtyChange}>
                <SelectTrigger className="border-0 shadow-none bg-transparent h-11 text-on-surface text-sm focus:ring-0 focus:outline-none">
                  <div className="flex items-center gap-2 truncate">
                    <Stethoscope className="w-4 h-4 text-outline shrink-0" />
                    <SelectValue placeholder="All Specialties" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-surface-container-lowest border-outline-variant text-on-surface">
                  <SelectItem value="All">All Specialties</SelectItem>
                  <SelectItem value="Cardiology">Cardiology</SelectItem>
                  <SelectItem value="Dentistry">Dentistry</SelectItem>
                  <SelectItem value="Dermatology">Dermatology</SelectItem>
                  <SelectItem value="Neurology">Neurology</SelectItem>
                  <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="Urgent Care">Urgent Care</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-8 bg-outline-variant/60" />

            {/* 3. Distance Dropdown */}
            <div className="w-full sm:w-44 px-2 sm:px-3">
              <Select value={selectedDistance} onValueChange={onDistanceChange}>
                <SelectTrigger className="border-0 shadow-none bg-transparent h-11 text-on-surface text-sm focus:ring-0 focus:outline-none">
                  <div className="flex items-center gap-2 truncate">
                    <MapPin className="w-4 h-4 text-outline shrink-0" />
                    <SelectValue placeholder="Any distance" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-surface-container-lowest border-outline-variant text-on-surface">
                  <SelectItem value="all">Any distance</SelectItem>
                  <SelectItem value="5">Within 5 miles</SelectItem>
                  <SelectItem value="10">Within 10 miles</SelectItem>
                  <SelectItem value="25">Within 25 miles</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Submit Button */}
            <button
              onClick={onSearchSubmit}
              type="button"
              className="w-full sm:w-auto px-7 h-11 bg-secondary text-on-secondary hover:bg-secondary/90 active:scale-[0.98] font-semibold text-sm rounded-xl sm:rounded-full transition-all flex items-center justify-center gap-2 shrink-0 shadow-md cursor-pointer"
            >
              <span>Search</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </motion.div>

      </section>
    </div>
  );
}