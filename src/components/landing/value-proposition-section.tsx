'use client';

import { motion, type Variants } from 'framer-motion';
import { Target, Clock, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function ValuePropositionSection() {
  return (
    <section id="how-it-works" className="w-full py-xl bg-surface relative">
      <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop">
        
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-lg"
        >
          <Badge variant="outline" className="text-[12px] font-bold text-primary uppercase tracking-widest mb-xs border-primary/25 bg-primary/5">
            Designed for Modern Healthcare
          </Badge>
          <h2 className="text-[26px] leading-[34px] sm:text-[32px] sm:leading-[40px] font-bold text-on-surface tracking-tight">
            Why Choose QuickAppoint
          </h2>
          <p className="text-[15px] leading-[22px] sm:text-[17px] sm:leading-[26px] font-normal text-on-surface-variant mt-xs max-w-2xl mx-auto">
            A stress-free waiting experience for patients, and smooth, orderly patient flow for clinics.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-md"
        >
          {/* Value Prop 1 */}
          <motion.div variants={cardVariants} whileHover={{ y: -6, transition: { duration: 0.2 } }}>
            <Card className="h-full bg-surface-container-lowest p-md rounded-2xl shadow-sm hover:shadow-xl border border-border/80 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between">
              <CardHeader className="p-0 mb-md">
                <div className="w-14 h-14 rounded-xl bg-sky-100 text-primary flex items-center justify-center mb-xs group-hover:scale-110 transition-transform shadow-inner">
                  <Target className="w-7 h-7" />
                </div>
                <CardTitle className="text-[20px] leading-[28px] font-bold text-slate-900">Live Queue Tracking</CardTitle>
                <CardDescription className="text-[14px] leading-[22px] font-normal text-slate-600">
                  See exactly which token the doctor is currently consulting in real-time. No more guessing or calling the receptionist.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-auto">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 relative overflow-hidden">
                  <div className="relative py-1">
                    <Progress value={66} className="h-2.5 bg-slate-200" />
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-1 border-t border-slate-200/60 text-xs">
                    <span className="font-semibold text-slate-500">Token #1</span>
                    <Badge className="text-[11px] py-0 px-2 font-bold bg-primary text-white shadow-xs">
                      Current #12
                    </Badge>
                    <span className="font-semibold text-primary">Your #18</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Value Prop 2 */}
          <motion.div variants={cardVariants} whileHover={{ y: -6, transition: { duration: 0.2 } }}>
            <Card className="h-full bg-surface-container-lowest p-md rounded-2xl shadow-sm hover:shadow-xl border border-border/80 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between">
              <CardHeader className="p-0 mb-md">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-xs group-hover:scale-110 transition-transform shadow-inner">
                  <Clock className="w-7 h-7" />
                </div>
                <CardTitle className="text-[20px] leading-[28px] font-bold text-slate-900">Reduced Wait Times</CardTitle>
                <CardDescription className="text-[14px] leading-[22px] font-normal text-slate-600">
                  Arrive exactly when you need to. Spend your waiting time comfortably at home, resting or getting work done.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-auto">
                <div className="h-24 bg-slate-50 rounded-xl p-sm relative flex items-center justify-center border border-slate-200/80">
                  <div className="w-12 h-12 rounded-full border-4 border-emerald-300 relative flex items-center justify-center bg-white shadow-sm">
                    <div className="absolute w-1 h-3 bg-emerald-700 origin-bottom rounded-full top-2 left-[20px] animate-[spin_4s_linear_infinite]"></div>
                    <div className="absolute w-1 h-4 bg-emerald-600 origin-bottom rounded-full top-1 left-[20px] animate-[spin_48s_linear_infinite]"></div>
                  </div>
                  <span className="ml-3 text-xs font-bold text-emerald-800 uppercase tracking-wide">Avg. 45m Saved</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Value Prop 3 */}
          <motion.div variants={cardVariants} whileHover={{ y: -6, transition: { duration: 0.2 } }}>
            <Card className="h-full bg-surface-container-lowest p-md rounded-2xl shadow-sm hover:shadow-xl border border-border/80 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between">
              <CardHeader className="p-0 mb-md">
                <div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-xs group-hover:scale-110 transition-transform shadow-inner">
                  <Tag className="w-7 h-7" />
                </div>
                <CardTitle className="text-[20px] leading-[28px] font-bold text-slate-900">Hyper-Local Discounts</CardTitle>
                <CardDescription className="text-[14px] leading-[22px] font-normal text-slate-600">
                  Get exclusive, relevant offers from nearby pharmacies and diagnostic labs sent directly to your WhatsApp when you book.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-auto">
                <div className="bg-emerald-50/90 rounded-xl p-3 border border-emerald-300/60 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                    </svg>
                  </div>
                  <div className="text-[13px] font-bold text-emerald-950 leading-snug">
                    15% off at City Meds with Token #24
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
