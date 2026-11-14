'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const faqs = [
  {
    question: 'How does live token tracking work?',
    answer:
      'When you register or book an appointment, you receive a real-time tracking link via SMS or WhatsApp. This link shows the exact token number currently being seen by the doctor, estimated wait times, and alerts you when it is time to head to the clinic.',
  },
  {
    question: 'Do patients need to download or install a separate app?',
    answer:
      'No app download is needed. QuickAppoint runs seamlessly in any web browser and delivers instant updates through the Meta WhatsApp API. Patients can access their queue status with a single tap on their smartphone.',
  },
  {
    question: 'What hardware or devices does a clinic need to get started?',
    answer:
      'Zero new hardware is required. The receptionist or doctor can manage patient flow from any smartphone, tablet, laptop, or desktop computer already in the clinic.',
  },
  {
    question: 'How do neighborhood pharmacy and diagnostic lab discounts work?',
    answer:
      'When patients book a token, QuickAppoint connects them with vetted partner pharmacies and diagnostic labs in the immediate vicinity of the clinic. Patients receive exclusive coupons and discount codes via WhatsApp that they can redeem during their waiting period.',
  },
  {
    question: 'Is patient data secure and compliant with the DPDP Act?',
    answer:
      'Yes, QuickAppoint is 100% compliant with India’s Digital Personal Data Protection (DPDP) Act 2023. Patient records and contact details are end-to-end encrypted and never shared without explicit consent.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-xl bg-surface relative">
      <div className="max-w-3xl mx-auto px-margin-mobile">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-lg"
        >
          <Badge variant="outline" className="text-[12px] font-bold text-primary uppercase tracking-widest mb-xs border-primary/30 bg-primary/5">
            Got Questions?
          </Badge>
          <h2 className="text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] font-extrabold text-on-surface tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[15px] leading-[22px] sm:text-[17px] sm:leading-[26px] font-normal text-on-surface-variant mt-xs">
            Everything you need to know about QuickAppoint for patients, clinics, and partners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full bg-surface-container-lowest rounded-2xl p-4 sm:p-6 border border-border/80 shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/60 last:border-b-0 py-1">
                <AccordionTrigger className="text-[15px] sm:text-[16px] font-bold text-slate-900 hover:text-primary transition-colors py-3.5 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] sm:text-[15px] leading-[24px] text-slate-600 pb-3.5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}


