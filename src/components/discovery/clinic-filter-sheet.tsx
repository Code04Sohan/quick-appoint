'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface ClinicFilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedWait: number;
  onChangeWait: (val: number) => void;
  openNowOnly: boolean;
  onToggleOpenNow: (val: boolean) => void;
  onApply: () => void;
  onReset: () => void;
}

export function ClinicFilterSheet({
  open,
  onOpenChange,
  selectedWait,
  onChangeWait,
  openNowOnly,
  onToggleOpenNow,
  onApply,
  onReset,
}: ClinicFilterSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md sm:min-w-[360px] shrink-0 p-6 flex flex-col justify-between bg-surface-container-lowest border-l border-outline-variant/60 overflow-y-auto"
      >
        <div>
          <SheetHeader className="mb-6 text-left">
            <SheetTitle className="text-xl font-bold text-on-surface">Filter Clinics</SheetTitle>
            <SheetDescription className="text-xs text-on-surface-variant mt-1">
              Refine clinic locations by estimated wait time and live operating hours.
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-6">
            {/* Wait Time Selector */}
            <div className="flex flex-col gap-2.5">
              <Label className="text-xs font-semibold text-on-surface uppercase tracking-wider">
                Maximum Wait Time:{' '}
                <span className="text-secondary font-bold normal-case">
                  {selectedWait > 0 ? `${selectedWait} mins` : 'Any time'}
                </span>
              </Label>
              <div className="grid grid-cols-4 gap-2">
                {[0, 15, 30, 60].map((mins) => (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => onChangeWait(mins)}
                    className={`py-2 px-1 text-xs font-semibold rounded-xl border transition-all cursor-pointer text-center ${
                      selectedWait === mins
                        ? 'bg-primary text-on-primary border-primary shadow-xs'
                        : 'bg-surface-container-lowest border-outline-variant/70 text-on-surface hover:bg-surface-container-low'
                    }`}
                  >
                    {mins === 0 ? 'No Wait' : `< ${mins}m`}
                  </button>
                ))}
              </div>
            </div>

            {/* Operating Hours Toggle Card */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-outline-variant/40">
              <div>
                <span className="text-sm font-semibold text-on-surface block">Open Now Only</span>
                <span className="text-xs text-on-surface-variant">
                  Show clinics currently taking live walk-in queues
                </span>
              </div>
              <input
                type="checkbox"
                checked={openNowOnly}
                onChange={(e) => onToggleOpenNow(e.target.checked)}
                className="w-5 h-5 accent-primary rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        <SheetFooter className="flex flex-row gap-2.5 sm:gap-2.5 mt-8 pt-4 border-t border-outline-variant/30">
          <Button
            variant="outline"
            onClick={onReset}
            className="flex-1 rounded-xl font-semibold border-outline-variant/70 text-on-surface hover:bg-surface-container-low"
          >
            Reset
          </Button>
          <Button
            onClick={onApply}
            className="flex-1 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-container shadow-md"
          >
            Apply Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
