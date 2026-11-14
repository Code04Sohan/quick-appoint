import { Clinic, ClinicFilterParams } from '@/types/clinic';

export const MOCK_CLINICS: Clinic[] = [
  {
    id: 'clinic-1',
    name: 'Apex Health Center',
    slug: 'apex-health-center',
    address: '124 Medical Plaza, Suite 300',
    city: 'New York',
    phone: '(555) 234-5678',
    email: 'info@apexhealth.com',
    rating: 4.9,
    reviewCount: 120,
    distance: '1.2 miles away',
    waitTimeMinutes: 15,
    waitStatus: 'short',
    specialties: ['General Practice', 'Cardiology', 'Dermatology'],
    availableDoctors: [
      { id: 'doc-1', name: 'Dr. E. Chen', specialty: 'Cardiology' },
      { id: 'doc-2', name: 'Dr. M. Torres', specialty: 'Dermatology' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-uBl83bkwfMrawJWIkmtZMEoeEiF_mv_7wqTw4F_1CULwQTt_Yi4adWPvFP4GP3lY39ui0hVZMwxjgaiu0BXwUuI62Zn9Ew9AvQ8WBepoxEMbWpM51knCqFXpEL4NDdWvcmHMwBILDZGckWpkmR4_E3RL0PyZ0krlyhcav8wNv2Rn4Gki5lx_gzUbNhuc3kZKRj8DiuuVV_G47eEjhx8QdTi3Q8YJDxCQavhJBSHAgUYfUJat3gyQ',
    nextAvailableSlot: '2:30 PM',
    isOpenNow: true,
  },
  {
    id: 'clinic-2',
    name: 'Bright Smiles Dental & Ortho',
    slug: 'bright-smiles-dental',
    address: '88 Riverfront Blvd, 2nd Floor',
    city: 'Brooklyn',
    phone: '(555) 876-5432',
    email: 'care@brightsmiles.com',
    rating: 4.8,
    reviewCount: 85,
    distance: '2.5 miles away',
    waitTimeMinutes: 0,
    waitStatus: 'no-wait',
    specialties: ['Dentistry', 'Orthodontics'],
    availableDoctors: [
      { id: 'doc-3', name: 'Dr. S. Miller', specialty: 'Dentistry' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkTM2Fyr2mc1rz0cY2738hT_N70m5a3PRELtp0IJxll5fMpwhFkp-VLNZjy0g7Wmueg9Ju0qbJbVLT7YRQZGTixwaiFDBO6fITIElY20CnY48MufUHHi3w2bNIO0G8hTSQTvndYK-byTt-RT4ovOlMCtLldLF7lNcmUOCO17Y9MBJCnb1ubXmAGgeR8IHIOiUQXIJIRAJM6WjI5AIwNYUCpZj9W99Od4rLHZ9-myFBbVRNJ-7EHenj',
    nextAvailableSlot: '3:00 PM',
    isOpenNow: true,
  },
  {
    id: 'clinic-3',
    name: 'Valley Care Urgent & Family Clinic',
    slug: 'valley-care-clinic',
    address: '450 West End Ave',
    city: 'Queens',
    phone: '(555) 432-1098',
    email: 'support@valleycare.com',
    rating: 4.6,
    reviewCount: 204,
    distance: '3.0 miles away',
    waitTimeMinutes: 45,
    waitStatus: 'long',
    specialties: ['Urgent Care', 'Pediatrics', 'Family Medicine'],
    availableDoctors: [
      { id: 'doc-4', name: 'Dr. R. Patel', specialty: 'Pediatrics' },
      { id: 'doc-5', name: 'Dr. K. Adams', specialty: 'Urgent Care' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwaTXaq7NbWxYMVfVbA3LpdHjoMYSh5g88js8u8EguTWvX8xIvv16IKcbQIOI55jwQfCXbmkKnFvtSimGRR4DlptJXsW6esxe5Uk1AEhcXI8E18m2j21y1EB21jIYyM0zwEhpCY_DdOEoU9lHt6YpeHmRFtVpifWyHQo4rNq-TNYo3TwDM8m1bb4YGsh1A-4Zt_eeTWah3U7Uvjnj-V8oJ73hocgaxKWhTi9J3WSNXYdXyD3aSUOFk',
    nextAvailableSlot: 'Walk-in Only',
    isOpenNow: true,
  },
  {
    id: 'clinic-4',
    name: 'Metro Neuro & Spine Institute',
    slug: 'metro-neuro-spine',
    address: '720 5th Avenue, Suite 14A',
    city: 'New York',
    phone: '(555) 901-2345',
    email: 'appointments@metroneuro.com',
    rating: 4.9,
    reviewCount: 312,
    distance: '1.8 miles away',
    waitTimeMinutes: 20,
    waitStatus: 'short',
    specialties: ['Neurology', 'Orthopedics'],
    availableDoctors: [
      { id: 'doc-6', name: 'Dr. H. Vance', specialty: 'Neurology' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIea0xyTSb5tEm_lx7FhAwsvYaB9Q55Fj1jOROu9xy7cPW_Jd2GVqbAxQ4gNE_2ZUztpvPsfxLBTP77CVc49uqFzGPcLey99bg1pLPJSRWg4S95Kc8UFo7ApX7HBiU2DsAog85eAiaHkbTtAF_42ZzWNkXjbYudmz7lUo2NIsn45rKvKmIw2mFNUK8UyZ9WZGlz_Rs908xBINtIW_TcOC4TqujD8A8rwE1Q6nB8huLDsaNpl_SWtrA',
    nextAvailableSlot: '4:15 PM',
    isOpenNow: true,
  },
];

export async function fetchClinics(filters?: ClinicFilterParams): Promise<Clinic[]> {
  // Simulate rapid API response
  await new Promise((res) => setTimeout(res, 80));

  let results = [...MOCK_CLINICS];

  if (!filters) return results;

  if (filters.search && filters.search.trim() !== '') {
    const q = filters.search.toLowerCase();
    results = results.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.specialties.some((s) => s.toLowerCase().includes(q)) ||
        c.availableDoctors.some((d) => d.name.toLowerCase().includes(q))
    );
  }

  if (filters.specialty && filters.specialty !== 'All' && filters.specialty !== 'All Specialities') {
    const spec = filters.specialty.toLowerCase();
    results = results.filter((c) =>
      c.specialties.some((s) => s.toLowerCase().includes(spec))
    );
  }

  if (filters.openNowOnly) {
    results = results.filter((c) => c.isOpenNow);
  }

  return results;
}

