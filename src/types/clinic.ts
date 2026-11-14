export interface DoctorSummary {
  id: string;
  name: string;
  specialty: string;
}

export type WaitStatus = 'no-wait' | 'short' | 'moderate' | 'long';

export interface Clinic {
  id: string;
  name: string;
  slug: string;
  address: string;
  city?: string;
  phone: string;
  email: string;
  rating: number;
  reviewCount: number;
  distance: string; // e.g. "1.2 miles away"
  waitTimeMinutes: number;
  waitStatus: WaitStatus;
  specialties: string[];
  availableDoctors: DoctorSummary[];
  imageUrl: string;
  nextAvailableSlot: string; // e.g. "2:30 PM"
  isOpenNow: boolean;
}

export interface ClinicFilterParams {
  search?: string;
  specialty?: string;
  maxDistance?: number;
  maxWaitTime?: number;
  minRating?: number;
  openNowOnly?: boolean;
}

