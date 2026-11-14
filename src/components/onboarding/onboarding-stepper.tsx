'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StepItem {
  number: number;
  title: string;
  description?: string;
}

interface OnboardingStepperProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
  steps?: StepItem[];
}

const DEFAULT_STEPS: StepItem[] = [
  { number: 1, title: 'Business Info' },
  { number: 2, title: 'Verification' },
  { number: 3, title: 'Clinic Setup' },
];

export function OnboardingStepper({
  currentStep,
  onStepClick,
  steps = DEFAULT_STEPS,
}: OnboardingStepperProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between w-full">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.number;
          const isActive = currentStep === step.number;
          const isLast = index === steps.length - 1;
          const isClickable = !!onStepClick;

          return (
            <div
              key={step.number}
              className={cn(
                'flex items-center',
                isLast ? 'flex-none' : 'flex-1'
              )}
            >
              {/* Clickable Step Circle & Title */}
              <button
                type="button"
                onClick={() => isClickable && onStepClick(step.number)}
                disabled={!isClickable}
                className={cn(
                  'flex flex-col items-center relative text-center group transition-transform focus:outline-none',
                  isClickable ? 'cursor-pointer' : 'cursor-default'
                )}
              >
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-xs border-2',
                    isCompleted &&
                      'bg-primary text-on-primary border-primary shadow-sm group-hover:opacity-90',
                    isActive &&
                      'bg-surface-container-lowest text-primary border-primary ring-4 ring-primary/15 shadow-sm',
                    !isCompleted &&
                      !isActive &&
                      'bg-surface-container-high text-on-surface-variant/70 border-outline-variant/50 group-hover:border-primary/50'
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-on-primary stroke-[2.5]" />
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>

                <span
                  className={cn(
                    'absolute top-12 whitespace-nowrap text-xs font-semibold tracking-tight transition-colors duration-200',
                    isActive && 'text-on-surface font-bold',
                    isCompleted && 'text-primary font-semibold',
                    !isCompleted && !isActive && 'text-on-surface-variant/60 group-hover:text-on-surface'
                  )}
                >
                  {step.title}
                </span>
              </button>

              {/* Connecting Line between steps */}
              {!isLast && (
                <div className="flex-1 mx-3 sm:mx-6 h-[2px] rounded-full bg-outline-variant/30 overflow-hidden relative">
                  <div
                    className={cn(
                      'h-full bg-primary transition-all duration-500 ease-out',
                      isCompleted ? 'w-full' : 'w-0'
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Spacing buffer for absolute titles */}
      <div className="h-6" />
    </div>
  );
}