'use client';

import { useState } from 'react';
import { DiscoveryHero } from './discovery-hero';
import { SpecialtyFilterCarousel } from './specialty-filter-carousel';
import { ClinicCard } from './clinic-card';
import { ClinicFilterSheet } from './clinic-filter-sheet';
import { useClinics } from '@/hooks/useClinics';
import { Clinic } from '@/types/clinic';

export function DiscoveryView() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All');
  const [distance, setDistance] = useState('all');
  const [quickFilter, setQuickFilter] = useState<'all' | 'top-rated' | 'shortest-wait' | 'open-now'>('all');
  const [filterSheetOpen, setFilterSheetOpen] = useState(false);
  const [maxWait, setMaxWait] = useState(0);
  const [openNowOnly, setOpenNowOnly] = useState(false);

  const { data: clinics = [], isLoading } = useClinics({
    search,
    specialty: specialty === 'All' ? undefined : specialty,
    openNowOnly: quickFilter === 'open-now' || openNowOnly,
  });

  // Client-side quick filter refinement
  let filteredClinics = [...clinics];
  if (quickFilter === 'top-rated') {
    filteredClinics.sort((a, b) => b.rating - a.rating);
  } else if (quickFilter === 'shortest-wait') {
    filteredClinics.sort((a, b) => a.waitTimeMinutes - b.waitTimeMinutes);
  }

  if (maxWait > 0) {
    filteredClinics = filteredClinics.filter((c) => c.waitTimeMinutes <= maxWait);
  }

  const handleResetFilters = () => {
    setMaxWait(0);
    setOpenNowOnly(false);
    setQuickFilter('all');
    setFilterSheetOpen(false);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface">
      {/* Search Hero Banner */}
      <DiscoveryHero
        searchTerm={search}
        onSearchChange={setSearch}
        selectedSpecialty={specialty}
        onSpecialtyChange={setSpecialty}
        selectedDistance={distance}
        onDistanceChange={setDistance}
        onSearchSubmit={() => {}}
      />

      {/* Main Clinic Results Section */}
      <div className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12 flex flex-col gap-6">
        <SpecialtyFilterCarousel
          selectedSpecialty={specialty}
          onSelectSpecialty={setSpecialty}
          activeQuickFilter={quickFilter}
          onSelectQuickFilter={setQuickFilter}
          onOpenAllFilters={() => setFilterSheetOpen(true)}
        />

        {/* Clinic Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-surface-container-high rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : filteredClinics.length === 0 ? (
          <div className="text-center py-16 bg-surface-container-lowest rounded-2xl border border-outline-variant/60 p-8 shadow-xs w-full">
            <h3 className="text-lg font-bold text-on-surface">No clinics found matching criteria</h3>
            <p className="text-sm text-on-surface-variant mt-1">Try relaxing your search terms or specialty filters.</p>
            <button
              onClick={() => {
                setSearch('');
                setSpecialty('All');
                setQuickFilter('all');
              }}
              className="mt-4 px-5 py-2.5 bg-primary text-on-primary text-xs font-bold rounded-xl hover:bg-primary-container transition-all cursor-pointer shadow-xs"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredClinics.map((clinic: Clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))}
          </div>
        )}
      </div>

      {/* Filter Drawer */}
      <ClinicFilterSheet
        open={filterSheetOpen}
        onOpenChange={setFilterSheetOpen}
        selectedWait={maxWait}
        onChangeWait={setMaxWait}
        openNowOnly={openNowOnly}
        onToggleOpenNow={setOpenNowOnly}
        onApply={() => setFilterSheetOpen(false)}
        onReset={handleResetFilters}
      />
    </div>
  );
}

