import Link from 'next/link';
import { Share2, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="w-full bg-surface-container py-xl">
      <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg mb-lg">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-xs mb-sm">
              <img
                alt="QuickAppoint Logo"
                className="h-6 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsw7KHnSflAeOaNNX5FU8qJBK8qCRTGaC94uQUy41fuegBh5yEGfHqZLSCaSAs2upm8oVBbamb6w1aEgT31AO1YjGdLNYGj1nb_KBIOz4Q_JGIUUdQnzw6LqqPeRLmYjnZy9zXt6r0zx976rVZmDzhHLPFo0ILvRukX118u6pVsO7rm83lJVUou7MAkbuxf-r9vg5CKcMMU2tMY8Gn3tvtrgG39lkPTmEB6g3nYot8IoDF7DYr2FwQ"
              />
              <span className="text-[20px] leading-[28px] font-bold text-primary">QuickAppoint</span>
            </div>
            <p className="text-[14px] leading-[20px] font-normal text-on-surface-variant">
              Bridging the gap between patient care and modern efficiency.
            </p>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-bold text-on-surface uppercase">Company</span>
            <Link href="#how-it-works" className="text-[14px] leading-[20px] font-normal text-on-surface-variant hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="#for-clinics" className="text-[14px] leading-[20px] font-normal text-on-surface-variant hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="#cta" className="text-[14px] leading-[20px] font-normal text-on-surface-variant hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-bold text-on-surface uppercase">Legal</span>
            <Link href="#" className="text-[14px] leading-[20px] font-normal text-on-surface-variant hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[14px] leading-[20px] font-normal text-on-surface-variant hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-[14px] leading-[20px] font-normal text-on-surface-variant hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-bold text-on-surface uppercase">Connect</span>
            <div className="flex gap-xs">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-on-surface-variant hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-on-surface-variant hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
                <span className="sr-only">Website</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-on-surface-variant hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-md bg-outline-variant/30" />
        <div className="text-center text-[14px] leading-[20px] font-normal text-on-surface-variant">
          © {new Date().getFullYear()} QuickAppoint. Clinical clarity for the digital age.
        </div>
      </div>
    </footer>
  );
}
