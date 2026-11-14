'use client';

import { Activity, Heart, Eye, Brain, Baby, Sparkles, SlidersHorizontal } from 'lucide-react';

interface SpecialtyFilterCarouselProps {
  selectedSpecialty: string;
  onSelectSpecialty: (specialty: string) => void;
  activeQuickFilter: 'all' | 'top-rated' | 'shortest-wait' | 'open-now';
  onSelectQuickFilter: (filter: 'all' | 'top-rated' | 'shortest-wait' | 'open-now') => void;
  onOpenAllFilters: () => void;
}

const SPECIALTIES = [
  { name: 'All', icon: Activity },
  { name: 'Cardiology', icon: Heart },
  { name: 'Dentistry', icon: Sparkles },
  { name: 'Neurology', icon: Brain },
  { name: 'Pediatrics', icon: Baby },
  { name: 'Urgent Care', icon: Eye },
];

export function SpecialtyFilterCarousel({
  selectedSpecialty,
  onSelectSpecialty,
  activeQuickFilter,
  onSelectQuickFilter,
  onOpenAllFilters,
}: SpecialtyFilterCarouselProps) {
  return (
    <div className="flex flex-col gap-4 w-full shrink-0">
      {/* Section Header and Quick Filter Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 w-full">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-tight leading-tight">
            Available Clinics Near You
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1 font-normal">
            Verified healthcare practices offering real-time queue tracking & instant tokens.
          </p>
        </div>

        {/* Filter Badges Carousel (Horizontally scrollable on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto scrollbar-none py-1">
          <button
            type="button"
            onClick={onOpenAllFilters}
            className="px-3.5 py-2 bg-surface-container-lowest border border-outline-variant/70 rounded-full text-xs font-semibold text-on-surface hover:bg-surface-container hover:text-primary transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 shadow-2xs cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-secondary" />
            <span>All Filters</span>
          </button>

          <button
            type="button"
            onClick={() =>
              onSelectQuickFilter(activeQuickFilter === 'top-rated' ? 'all' : 'top-rated')
            }
            className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer shadow-2xs ${
              activeQuickFilter === 'top-rated'
                ? 'bg-primary text-on-primary border border-primary shadow-xs'
                : 'bg-surface-container-lowest border border-outline-variant/70 text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
          >
            Top Rated
          </button>

          <button
            type="button"
            onClick={() =>
              onSelectQuickFilter(activeQuickFilter === 'shortest-wait' ? 'all' : 'shortest-wait')
            }
            className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 shadow-2xs ${
              activeQuickFilter === 'shortest-wait'
                ? 'bg-primary text-on-primary border border-primary shadow-xs'
                : 'bg-surface-container-lowest border border-outline-variant/70 text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
          >
            Shortest Wait
          </button>

          <button
            type="button"
            onClick={() =>
              onSelectQuickFilter(activeQuickFilter === 'open-now' ? 'all' : 'open-now')
            }
            className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 shadow-2xs ${
              activeQuickFilter === 'open-now'
                ? 'bg-primary text-on-primary border border-primary shadow-xs'
                : 'bg-surface-container-lowest border border-outline-variant/70 text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
          >
            Open Now
          </button>
        </div>
      </div>

      {/* Specialty Chips Carousel */}
      <div className="flex overflow-x-auto gap-2 sm:gap-2.5 pb-2 pt-1 w-full scrollbar-none snap-x">
        {SPECIALTIES.map((spec) => {
          const Icon = spec.icon;
          const isSelected =
            selectedSpecialty === spec.name || (spec.name === 'All' && !selectedSpecialty);

          return (
            <button
              key={spec.name}
              type="button"
              onClick={() => onSelectSpecialty(spec.name)}
              className={`snap-start shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-2xs ${
                isSelected
                  ? 'bg-secondary text-on-secondary border border-secondary shadow-sm scale-102'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:border-secondary/40 border border-outline-variant/70 hover:bg-surface-container-low'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{spec.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
