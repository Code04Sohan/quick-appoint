'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, MessageSquare, ExternalLink, Percent, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function PartnerNetworkSection() {
  return (
    <section id="for-partners" className="w-full py-xl bg-surface-container-lowest overflow-hidden">
      <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-md"
          >
            <div>
              <Badge variant="outline" className="text-[12px] font-bold text-emerald-800 uppercase tracking-widest mb-xs border-emerald-300 bg-emerald-50">
                For Pharmacies & Diagnostic Labs
              </Badge>
              <h2 className="text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] font-extrabold text-on-surface tracking-tight">
                Hyper-Local Partner Network
              </h2>
            </div>
            <p className="text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] font-normal text-on-surface-variant">
              Monetize patient wait times by offering targeted, hyper-local healthcare promotions. Deliver timely offers for prescribed medicines and blood tests directly to patients&apos; WhatsApp while they wait for their clinic appointment.
            </p>
            <ul className="flex flex-col gap-sm mt-xs">
              <li className="flex items-start gap-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[15px] font-bold text-on-surface block">High Conversion Intent</span>
                  <span className="text-[14px] leading-[20px] font-normal text-on-surface-variant">Reach patients within 200 meters who need healthcare products and tests right now.</span>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[15px] font-bold text-on-surface block">Meta WhatsApp Official API</span>
                  <span className="text-[14px] leading-[20px] font-normal text-on-surface-variant">100% opt-in messaging with verified business green badge and 90%+ open rates.</span>
                </div>
              </li>
            </ul>
            <div className="pt-sm border-t border-outline-variant/30 mt-xs">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button asChild variant="outline" size="lg" className="h-[48px] px-lg border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white rounded-xl font-bold gap-2 transition-all shadow-xs">
                  <Link href="#cta">
                    <span>Join Partner Network</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[380px] sm:h-[420px] lg:h-[480px] flex items-center justify-center"
          >
            <div className="absolute inset-4 bg-emerald-500/10 rounded-3xl transform rotate-2 border border-emerald-500/20 pointer-events-none"></div>
            
            <div className="relative z-10 w-full max-w-[340px] px-2">
              <Card className="w-full bg-[#eefaf0] rounded-2xl p-5 border border-emerald-300 shadow-xl relative">
                {/* Floating Badge */}
                <div className="absolute -top-3.5 -right-3.5 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg text-white">
                  <Percent className="w-5 h-5" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                  </span>
                  <div className="text-[13px] font-bold text-slate-900 uppercase tracking-wider">
                    QuickAppoint • WhatsApp Alert
                  </div>
                </div>

                <p className="text-[14px] leading-[22px] font-medium text-slate-800 bg-white/90 p-3 rounded-xl border border-emerald-200 shadow-xs">
                  👋 <strong>Dr. Sharma&apos;s Clinic:</strong> Your token <strong>#24</strong> is 15 mins away!
                  <br /><br />
                  Show this message at <strong className="text-emerald-800">City Meds Pharmacy</strong> (next door) for an exclusive <strong className="text-emerald-700 underline">15% discount</strong> on all medicines while you wait.
                </p>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-emerald-200/60">
                  <span className="flex items-center gap-1 font-semibold text-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Partner Offer
                  </span>
                  <span>10:42 AM</span>
                </div>
              </Card>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
