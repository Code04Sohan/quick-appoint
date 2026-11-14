'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { CheckCircle2, Store, MoreVertical, ExternalLink, PhoneCall, Clock, Check, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarGroup } from '@/components/ui/avatar';

interface QueuePatient {
  id: number;
  name: string;
  time: string;
  status: 'In Consultation' | 'Waiting' | 'Not Arrived';
}

export function ForBusinessSection() {
  const [patients, setPatients] = useState<QueuePatient[]>([
    { id: 12, name: 'Rahul V.', time: 'Arrived 10 mins ago', status: 'In Consultation' },
    { id: 13, name: 'Ananya S.', time: 'Est. 5 mins', status: 'Waiting' },
    { id: 14, name: 'Karan P.', time: 'Notified via SMS', status: 'Not Arrived' },
  ]);
  const [activeTokenId, setActiveTokenId] = useState<number>(12);

  const handleSelectToken = (patient: QueuePatient) => {
    setActiveTokenId(patient.id);
    setPatients((prev) =>
      prev.map((p) => ({
        ...p,
        status: p.id === patient.id ? 'In Consultation' : 'Waiting',
      }))
    );
    toast.success(`Active consultation switched to Token #${patient.id} (${patient.name})`);
  };

  return (
    <section id="for-clinics" className="w-full py-xl bg-surface-container overflow-hidden">
      <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          
          {/* Interactive Digital Clipboard */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 h-[420px] lg:h-[480px]"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-2 border border-primary/20 pointer-events-none"></div>
            
            <Card className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-slate-200 p-4 sm:p-5 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3">
                  <div>
                    <div className="text-[18px] sm:text-[20px] font-bold text-slate-900">Digital Clipboard</div>
                    <div className="text-xs text-slate-500 font-medium">Click any token to simulate calling patient</div>
                  </div>
                  <Badge className="bg-emerald-600 text-white px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    Live Session
                  </Badge>
                </div>
                
                <ScrollArea className="h-[230px] pr-2">
                  <div className="flex flex-col gap-2">
                    {patients.map((patient) => {
                      const isActive = patient.id === activeTokenId;
                      return (
                        <motion.div
                          key={patient.id}
                          layout
                          onClick={() => handleSelectToken(patient)}
                          className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                            isActive
                              ? 'bg-sky-50 border-sky-300 shadow-sm ring-1 ring-sky-300'
                              : 'bg-slate-50/80 hover:bg-slate-100 border-slate-200/80'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`text-[18px] font-black w-10 text-center rounded-lg py-1 ${
                              isActive ? 'bg-primary text-white' : 'bg-slate-200 text-slate-700'
                            }`}>
                              #{patient.id}
                            </div>
                            <div>
                              <div className="text-[14px] font-bold text-slate-900 flex items-center gap-2">
                                <span>{patient.name}</span>
                                {isActive && (
                                  <Badge className="text-[10px] py-0 px-1.5 bg-emerald-600 text-white font-semibold">
                                    Consulting
                                  </Badge>
                                )}
                              </div>
                              <div className="text-[12px] font-medium text-slate-500">
                                {patient.time}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-slate-200/70">
                                  <MoreVertical className="text-slate-600 w-4 h-4" />
                                  <span className="sr-only">Token actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toast.success(`Completed visit for Token #${patient.id}`);
                                  }}
                                  className="gap-2 cursor-pointer"
                                >
                                  <Check className="w-4 h-4 text-emerald-600" />
                                  <span>Complete Visit</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toast.info(`Token #${patient.id} marked as delayed`);
                                  }}
                                  className="gap-2 cursor-pointer"
                                >
                                  <Clock className="w-4 h-4 text-amber-600" />
                                  <span>Mark Delayed</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toast.success(`Calling ${patient.name} via WhatsApp API...`);
                                  }}
                                  className="gap-2 cursor-pointer"
                                >
                                  <PhoneCall className="w-4 h-4 text-primary" />
                                  <span>Notify WhatsApp</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                  3 patients in queue
                </span>
                <span className="font-semibold text-primary">Reception mode</span>
              </div>
            </Card>
            
            {/* Floating Partner Network Indicator - safely positioned */}
            <Card className="absolute -bottom-3 right-2 sm:-right-2 lg:-right-4 bg-white p-2.5 sm:p-3 rounded-xl shadow-lg border border-slate-200 max-w-[180px] sm:max-w-[200px] z-20">
              <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">Partner Network</div>
              <div className="flex items-center gap-2">
                <AvatarGroup>
                  <Avatar size="sm" className="bg-sky-100 ring-2 ring-white">
                    <AvatarFallback className="text-[10px] font-bold text-primary">Ph</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm" className="bg-emerald-100 ring-2 ring-white">
                    <AvatarFallback className="text-[10px] font-bold text-emerald-700">Lab</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm" className="bg-slate-200 ring-2 ring-white">
                    <AvatarFallback className="text-[10px] font-bold text-slate-700">+4</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
                <span className="text-[11px] font-semibold text-slate-700">Connected</span>
              </div>
            </Card>
          </motion.div>
          
          {/* Section Text & Features */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col gap-md"
          >
            <div>
              <Badge variant="outline" className="text-[12px] font-bold text-primary uppercase tracking-widest mb-xs border-primary/30 bg-primary/5">
                For Clinics & Doctors
              </Badge>
              <h2 className="text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] font-extrabold text-on-surface tracking-tight">
                Smart Queue Management, Zero Clutter
              </h2>
            </div>
            <p className="text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] font-normal text-on-surface-variant">
              Say goodbye to crowded waiting rooms and anxious patients. The digital clipboard streamlines clinic flow with zero learning curve.
            </p>
            <ul className="flex flex-col gap-sm mt-xs">
              <li className="flex items-start gap-sm">
                <CheckCircle2 className="text-primary mt-1 w-5 h-5 shrink-0" />
                <div>
                  <span className="text-[15px] font-bold text-on-surface block">Zero Hardware Needed</span>
                  <span className="text-[14px] leading-[20px] font-normal text-on-surface-variant">Runs on any smartphone, tablet, laptop, or reception PC browser.</span>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <CheckCircle2 className="text-primary mt-1 w-5 h-5 shrink-0" />
                <div>
                  <span className="text-[15px] font-bold text-on-surface block">Automated Patient Alerts</span>
                  <span className="text-[14px] leading-[20px] font-normal text-on-surface-variant">Patients receive live token alerts on WhatsApp so they arrive just in time.</span>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <Store className="text-emerald-600 mt-1 w-5 h-5 shrink-0" />
                <div>
                  <span className="text-[15px] font-bold text-on-surface block">Hyper-Local Partner Monetization</span>
                  <span className="text-[14px] leading-[20px] font-normal text-on-surface-variant">Monetize wait times by delivering targeted offers for nearby pharmacies and labs via the Meta WhatsApp API.</span>
                </div>
              </li>
            </ul>
            <div className="pt-sm border-t border-outline-variant/30 mt-xs">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button asChild variant="outline" size="lg" className="h-[48px] px-lg border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-bold gap-2 transition-all shadow-xs">
                  <Link href="#cta">
                    <span>Partner with us</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
