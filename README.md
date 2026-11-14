This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Project Architecture & Tech Stack

This project follows a strict architectural pattern designed to streamline development and maintain scalability.

### Architecture & Directory Structure
* **`src/app/`**: Contains the Next.js App Router layout, server components, and routing logic.
* **`src/components/ui/`**: Houses all generated `shadcn/ui` components built on top of accessible Radix UI primitives.
* **`src/components/providers/`**: Dedicated location for client-side context wrappers, specifically the TanStack Query provider and Sonner toaster.
* **`src/lib/`**: Stores the Axios instance configured for FastAPI communication, Zod validation schemas, and general utility functions.

### Core Technologies
* **Frontend Framework:** Next.js 14/15 (App Router) initialized with TypeScript, styled with Tailwind CSS, and linted via ESLint.
* **Data Synchronization:** TanStack React Query manages asynchronous state and caching, utilizing Axios to communicate with the FastAPI backend.
* **UI System & Animations:** `shadcn/ui` handles core interface elements, styled alongside Lucide React icons and Framer Motion for complex layout animations.
* **Form Management:** React Hook Form controls form state and submissions, natively bound to Zod for strict type-safe validation.

### Specialized Integrations
* **Geolocation & Maps:** React-Leaflet renders interactive maps (requires the global import of `leaflet/dist/leaflet.css` in `layout.tsx`), while Geolib calculates spatial coordinates.
* **Optical Data:** `qrcode.react` handles dynamic SVG/Canvas QR generation, and `html5-qrcode` implements camera-based scanning logic.
* **Progressive Web App:** Built with `@ducanh2912/next-pwa` for offline caching. *Note: PWA caching is currently hardcoded to `disable: true` in `next.config.ts` during active development.*
* **Auxiliary Data:** `@supabase/ssr` is included for isolated database or storage requirements that fall outside the scope of the primary FastAPI architecture.

---

## 🏛️ Application Codebase Structure & Portals

The application implements a domain-driven Next.js App Router architecture following the **"Thin `page.tsx`, Rich Feature Component"** pattern, dividing business logic, state management, and UI presentation into dedicated layers:

```text
src/
├── app/                                     # Next.js App Router (File-Based Routes)
│   ├── (marketing)/                         # Public marketing pages
│   │   └── page.tsx                         # Landing Page (/)
│   ├── (discovery)/                         # 1. Clinic Discovery Portal
│   │   └── clinics/
│   │       └── page.tsx                     # /clinics (Search, filters & clinic cards)
│   ├── (clinic-admin)/                      # 2. Clinic Owner Onboarding
│   │   └── onboarding/
│   │       └── page.tsx                     # /onboarding (3-step clinic registration wizard)
│   ├── (patient)/                           # 3. Patient Registration Portal
│   │   └── patient/register/
│   │       └── page.tsx                     # /patient/register (Phone/Email OTP registration)
│   └── (auth)/                              # 4. Clinic Owner Authentication
│       └── login/
│           └── page.tsx                     # /login (Split layout: Register Clinic & Owner Login)
│
├── components/                              # Modular Component System
│   ├── ui/                                  # shadcn/ui base primitives (Radix UI)
│   │   ├── button.tsx, card.tsx, badge.tsx, input.tsx, label.tsx, textarea.tsx
│   │   ├── select.tsx, tabs.tsx, input-otp.tsx, dialog.tsx, sheet.tsx, progress.tsx
│   │   ├── dropdown-menu.tsx, scroll-area.tsx, separator.tsx, accordion.tsx, sonner.tsx
│   │   └── avatar.tsx
│   ├── common/                              # Universal application components
│   │   ├── header.tsx                       # Global header with navigation & portal switcher
│   │   └── footer.tsx                       # Global footer with brand links & legal
│   ├── landing/                             # Landing page domain components
│   │   ├── hero-section.tsx                 # Hero banner with floating queue status card
│   │   ├── value-proposition-section.tsx    # Live tracking, wait time savings & WhatsApp perks
│   │   ├── for-business-section.tsx         # Interactive Digital Clipboard simulation
│   │   ├── partner-network-section.tsx      # Hyper-local pharmacy/lab monetization promo
│   │   ├── faq-section.tsx                  # Collapsible FAQ accordion
│   │   └── cta-section.tsx                  # High-contrast action banner
│   ├── discovery/                           # Clinic Discovery domain components
│   │   ├── discovery-view.tsx               # Client state coordinator for search & filters
│   │   ├── discovery-hero.tsx               # Search banner with specialty & distance selectors
│   │   ├── specialty-filter-carousel.tsx    # Snap-scrolling specialty chips & quick filters
│   │   ├── clinic-card.tsx                  # Clinic card with wait badge, rating & doctor list
│   │   └── clinic-filter-sheet.tsx          # Slide-out filter drawer
│   ├── onboarding/                          # Clinic Onboarding domain components
│   │   ├── onboarding-wizard.tsx            # Multi-step state machine coordinator
│   │   ├── onboarding-stepper.tsx           # Step 1 -> Step 2 -> Step 3 progress bar
│   │   ├── step-business-info.tsx           # Clinic name, email, phone & physical address
│   │   ├── step-license-verification.tsx    # Drag-and-drop license/registration document upload
│   │   └── step-clinic-setup.tsx            # Specialties setup & Trust & Safety agreement
│   ├── patient/                             # Patient Registration domain components
│   │   └── patient-registration-card.tsx    # Phone/Email auth, 6-digit OTP & profile creation
│   └── auth/                                # Clinic Owner Auth domain components
│       └── clinic-auth-split-layout.tsx     # Split-screen value prop + tabbed auth form
│
├── types/                                   # Domain TypeScript Interfaces
│   ├── clinic.ts                            # Clinic, Doctor, WaitStatus, ClinicFilterParams
│   ├── onboarding.ts                        # OnboardingStep, BusinessInfo, LicenseVerification, ClinicSetup
│   ├── patient.ts                           # PatientProfile, AuthRegistrationMethod
│   └── auth.ts                              # ClinicLoginInput, ClinicRegisterInput, ClinicOwnerUser
│
├── lib/validations/                         # Zod Validation Schemas
│   ├── clinic-search.schema.ts              # Search & filter parameters schema
│   ├── onboarding.schema.ts                 # 3-step onboarding validation schemas
│   ├── patient.schema.ts                    # OTP request, verify, and patient profile schemas
│   └── auth.schema.ts                       # Clinic owner login & registration schemas
│
├── services/                                # API & Mock Data Service Layer
│   ├── clinic.service.ts                    # Clinic dataset & search/filter algorithms
│   ├── onboarding.service.ts                # Application submission & license upload API
│   ├── patient.service.ts                   # OTP dispatch, verification, and profile API
│   └── auth.service.ts                      # Owner login & registration authentication API
│
└── hooks/                                   # TanStack Query Custom Hooks
    ├── useClinics.ts                        # Queries: fetch & filter clinics with caching
    ├── useOnboarding.ts                     # Mutation: step-wise onboarding submission
    ├── usePatientRegistration.ts            # Mutations: request OTP, verify, register profile
    └── useClinicAuth.ts                     # Mutations: clinic owner login & registration
```

