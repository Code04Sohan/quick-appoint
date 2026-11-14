'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BadgeCheck, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function CtaSection() {
  return (
    <section id="cta" className="w-full py-xl lg:py-[120px] bg-primary relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:24px_24px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-margin-mobile text-center relative z-10 flex flex-col items-center gap-md">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/25 shadow-lg">
            <BadgeCheck className="w-9 h-9 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-3 w-full"
        >
          <h2 className="text-[28px] leading-[36px] sm:text-[38px] sm:leading-[46px] lg:text-[48px] lg:leading-[56px] font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Transform Your Clinic Waiting Experience Today.
          </h2>
          <p className="text-[16px] leading-[26px] sm:text-[18px] sm:leading-[30px] lg:text-[20px] font-normal text-sky-100 w-full max-w-4xl mx-auto">
            Join clinics delivering a stress-free experience for their patients while cutting crowd chaos and optimizing daily operations.
          </p>
        </motion.div>

        {/* Action Buttons with high contrast and zero styling conflicts */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full sm:w-auto"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Button asChild size="lg" className="h-14 px-8 bg-white text-primary hover:bg-slate-100 text-base font-extrabold rounded-xl shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto">
              <Link href="#how-it-works">
                <span>Get Started for Free</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Button asChild size="lg" className="h-14 px-8 border-2 border-white/60 text-white bg-white/10 hover:bg-white/20 hover:text-white transition-all w-full sm:w-auto rounded-xl font-bold shadow-sm backdrop-blur-sm">
              <Link href="#for-clinics">Contact Sales</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Badge variant="outline" className="text-white/90 bg-white/10 border-white/30 text-[12px] font-semibold uppercase mt-4 py-1.5 px-4 gap-2 backdrop-blur-sm">
            <Lock className="w-3.5 h-3.5 text-sky-200" />
            <span>100% DPDP Act Compliant • Encrypted Patient Data</span>
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}
