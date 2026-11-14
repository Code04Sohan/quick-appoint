'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest -mt-16 pt-20 lg:pt-32 pb-xl lg:pb-[120px]">
      <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-bl from-primary-fixed/40 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-gradient-to-tr from-sky-200/40 to-transparent rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg lg:gap-xl items-center">
          
          {/* Left Half: Hero Image & Doctor Queue Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="order-2 lg:order-2 lg:col-span-6 relative mt-6 lg:mt-0"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-surface-container-high border-4 border-surface-container-lowest group">
              <img
                alt="Patient relaxing at home while tracking their clinic queue on a mobile app"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu1t1GjHSwMIAapCFt5YWcoTvDmJ6goPnrTwPY7zt7ZFDB7xjau0f0LORT-jv9zCe2gj6jj-I1uVPVOqcF2ubTh8fjZbLfVYIdnsCWLZVySC7p0e5DR4JeGWGKw67lnoA__BgdVxdteQY4YHFUc0-zyHoTo-xnbfd63JPal3DsOv4bvafOYfwdbAdmQjziRFsoR1St3fKq3Ayu2D_RK1K5_-0BJ4NSd3URVftXw5lFiRaCDkISVekR"
              />

              {/* Ambient Floating Doctor Queue Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20"
              >
                <Card className="bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-xl border border-sky-100/80 flex flex-row items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-100 text-primary flex items-center justify-center shrink-0 shadow-inner">
                      <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] sm:text-[15px] font-bold text-slate-900 truncate">
                        Dr. Sharma&apos;s Clinic
                      </div>
                      <div className="text-[11px] sm:text-[13px] font-medium text-slate-600 flex items-center gap-1.5 mt-0.5 truncate">
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                        </span>
                        <span>Currently seeing: <strong className="text-slate-900">#21</strong></span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0 pl-2 border-l border-slate-200">
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Your Token
                    </div>
                    <div className="text-[18px] sm:text-[22px] font-extrabold text-primary leading-tight">#24</div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Half: Hero Content & Call to Action (Full width text) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-1 lg:col-span-6 flex flex-col gap-md pt-4 lg:pt-0"
          >
            <Badge variant="outline" className="gap-xs px-3 py-1 bg-surface-container/80 border-primary/20 text-[12px] font-bold text-primary uppercase tracking-widest w-max shadow-sm rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Live Queue Tracking</span>
            </Badge>

            <h1 className="text-[36px] leading-[44px] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[64px] text-on-surface font-extrabold tracking-tight">
              Wait at{' '}
              <span className="text-primary relative inline-block">
                Home,
                <svg
                  className="absolute w-full h-3.5 -bottom-1.5 left-0 text-sky-500 drop-shadow-sm"
                  fill="currentColor"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 20"
                >
                  <path d="M0,10 C30,20 70,0 100,10 L100,20 L0,20 Z"></path>
                </svg>
              </span>
              <br className="hidden sm:inline" />
              {' '}Not in a Crowd.
            </h1>

            {/* Full-width natural text view */}
            <p className="text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] font-normal text-on-surface-variant w-full max-w-none">
              Real-time clinic token tracking for patients and smart queue management for local doctors. Reclaim your time and reduce clinic waiting anxiety.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-sm mt-xs">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-xl shadow-md hover:shadow-xl transition-all gap-2 group w-full sm:w-auto bg-primary text-white">
                  <Link href="#cta">
                    <span>Book Your Token</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-on-surface-variant text-[14px] font-medium py-2">
                <ShieldCheck className="text-emerald-600 w-5 h-5 shrink-0" />
                <span>Verified Clinics & Doctors</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
