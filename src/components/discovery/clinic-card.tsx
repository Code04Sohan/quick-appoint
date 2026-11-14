'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, Clock, MapPin, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Clinic } from '@/types/clinic';

interface ClinicCardProps {
  clinic: Clinic;
}

export function ClinicCard({ clinic }: ClinicCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const getWaitBadge = () => {
    if (clinic.waitTimeMinutes === 0) {
      return (
        <div className="absolute bottom-3.5 right-3.5 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 border border-tertiary-fixed-dim/40 backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span>No Wait</span>
        </div>
      );
    }
    return (
      <div className="absolute bottom-3.5 right-3.5 bg-surface-container-lowest/95 text-primary px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-2 border border-outline-variant/60 backdrop-blur-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
        </span>
        <span>Wait: {clinic.waitTimeMinutes}m</span>
      </div>
    );
  };

  return (
    <>
      <div className="w-full min-w-[280px] shrink-0 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden group border border-outline-variant/70 h-full">
        {/* Clinic Photo Header */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-surface-container-high">
          <img
            src={clinic.imageUrl}
            alt={clinic.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Rating Pill */}
          <div className="absolute top-3.5 left-3.5 bg-surface-container-lowest/95 text-on-surface px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5 border border-outline-variant/40 backdrop-blur-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span className="font-bold">{clinic.rating}</span>
            <span className="text-on-surface-variant font-normal hidden sm:inline">({clinic.reviewCount})</span>
          </div>

          {/* Real-time Wait Pill */}
          {getWaitBadge()}
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow gap-3.5">
          <div>
            <h3 className="text-lg sm:text-[20px] font-bold text-on-surface line-clamp-1 group-hover:text-primary transition-colors tracking-tight">
              {clinic.name}
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-1 mt-1 font-normal">
              {clinic.distance} &bull; {clinic.specialties.join(', ')}
            </p>
          </div>

          {/* Available Doctors Box */}
          <div className="bg-surface-container-low p-3 rounded-xl flex flex-col gap-1 mt-auto border border-outline-variant/30">
            <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
              Available Doctors
            </span>
            <p className="text-xs sm:text-sm font-medium text-on-surface truncate">
              {clinic.availableDoctors.map((d) => `${d.name} (${d.specialty})`).join(', ')}
            </p>
          </div>

          {/* Next Available Slot */}
          <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
            <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>
              Next slot: <strong className="text-on-surface">{clinic.nextAvailableSlot}</strong>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 mt-1 pt-3 border-t border-outline-variant/40">
            <button
              type="button"
              onClick={() => setDetailsOpen(true)}
              className="w-full py-2.5 bg-surface-container-low text-primary font-semibold text-xs sm:text-sm rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/60 cursor-pointer text-center"
            >
              Details
            </button>
            <Button
              asChild
              className="w-full py-2.5 bg-primary text-on-primary font-semibold text-xs sm:text-sm rounded-xl hover:bg-primary-container hover:shadow-md transition-all shadow-xs flex items-center justify-center gap-1.5"
            >
              <Link href={`/patient/register?clinicId=${clinic.id}`}>
                <span>Book Token</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick View Details Modal */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="w-[92vw] sm:w-[520px] max-w-[540px] min-w-[320px] p-5 sm:p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col shrink-0">
          <DialogHeader className="text-left w-full">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary-container text-on-primary-container font-semibold text-xs px-2.5 py-0.5">
                <ShieldCheck className="w-3 h-3 mr-1" />
                Verified Clinic
              </Badge>
              <Badge className="bg-tertiary-container text-on-tertiary-container font-semibold text-xs px-2.5 py-0.5">
                Wait: {clinic.waitTimeMinutes}m
              </Badge>
            </div>
            <DialogTitle className="text-xl font-bold text-on-surface">{clinic.name}</DialogTitle>
            <DialogDescription className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 text-outline shrink-0" />
              <span>{clinic.address}, {clinic.city}</span>
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 my-2 w-full">
            <div className="rounded-xl overflow-hidden h-44 w-full bg-surface-container-high border border-outline-variant/40 shrink-0">
              <img src={clinic.imageUrl} alt={clinic.name} className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs w-full">
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40">
                <span className="font-semibold text-on-surface-variant uppercase tracking-wider block text-[10px]">
                  Phone Contact
                </span>
                <span className="font-medium text-on-surface flex items-center gap-1.5 mt-1 truncate">
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  {clinic.phone}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40">
                <span className="font-semibold text-on-surface-variant uppercase tracking-wider block text-[10px]">
                  Queue Status
                </span>
                <span className="font-medium text-on-surface flex items-center gap-1.5 mt-1 truncate">
                  <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
                  {clinic.nextAvailableSlot}
                </span>
              </div>
            </div>

            <div className="w-full">
              <span className="font-semibold text-on-surface text-xs uppercase tracking-wider block mb-2">
                Available Doctors & Specialists
              </span>
              <div className="flex flex-col gap-2 w-full">
                {clinic.availableDoctors.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs w-full"
                  >
                    <span className="font-semibold text-on-surface">{doc.name}</span>
                    <span className="text-secondary font-medium px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px]">
                      {doc.specialty}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 mt-4 pt-3 border-t border-outline-variant/40 w-full">
            <button
              type="button"
              onClick={() => setDetailsOpen(false)}
              className="flex-1 py-2.5 rounded-xl border border-outline-variant/60 font-semibold text-xs sm:text-sm text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            >
              Close
            </button>
            <Button
              asChild
              className="flex-1 py-2.5 bg-primary text-on-primary font-semibold text-xs sm:text-sm rounded-xl hover:bg-primary-container shadow-md"
            >
              <Link href={`/patient/register?clinicId=${clinic.id}`}>
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
