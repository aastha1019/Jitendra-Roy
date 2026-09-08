'use client';

import React, { useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  UserRound,
  MapPin,
  Clock3,
  User,
} from 'lucide-react';

export default function PropertyInquiry() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const msg = `Hello Jitendra Roy Land Brokers,

I am interested in:

Property: Green Valley Residential Plot
Location: Dhawari, Satna
Price: ₹12.5 Lakh

Name: ${form.name}
Phone: ${form.phone}

Message: ${form.message || 'I would like to know more about this property.'}`;

    window.open(
      `https://wa.me/918462097970?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setSent(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <aside className="sticky top-24 space-y-5">
      {/* =========================================================
          PROPERTY ACTION CARD
      ========================================================= */}
      <section className="overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-sm">
        <div className="border-b border-border/60 p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
              <MapPin className="h-4 w-4" />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              Property Inquiry
            </span>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-3xl font-extrabold tracking-tight text-primary">
                ₹12.5 Lakh
              </p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Green Valley Residential Plot
              </p>

              <p className="text-xs text-muted-foreground">
                2400 Sq.ft · Dhawari, Satna
              </p>
            </div>

            <div className="hidden shrink-0 rounded-xl border border-primary/10 bg-primary/[0.04] px-3 py-2 text-right sm:block">
              <p className="text-[10px] font-medium text-muted-foreground">
                Approx.
              </p>

              <p className="text-xs font-bold text-foreground">
                ₹521 / Sq.ft
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 p-5 sm:p-6">
          {/* Primary CTA */}
          <a
            href="https://wa.me/918462097970?text=Hello%2C%20I%20want%20to%20book%20a%20site%20visit%20for%20Green%20Valley%20Residential%20Plot%20in%20Dhawari%2C%20Satna."
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            <CalendarDays className="h-4 w-4" />
            Book a Site Visit
          </a>

          {/* Secondary CTA */}
          <a
            href="https://wa.me/918462097970?text=Hello%2C%20I%20am%20interested%20in%20Green%20Valley%20Residential%20Plot%20at%20%E2%82%B912.5%20Lakh%20in%20Dhawari%2C%20Satna."
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary/15 bg-primary/[0.05] px-4 py-3 text-sm font-bold text-primary transition-all hover:border-primary/25 hover:bg-primary/[0.08]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Inquiry
          </a>

          {/* Call */}
          <a
            href="tel:+918462097970"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border/70 bg-muted/40 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Phone className="h-4 w-4 text-primary" />
            Call +91 84620 97970
          </a>

          <div className="flex items-center justify-center gap-2 pt-1 text-[10px] font-medium text-muted-foreground">
            <Clock3 className="h-3.5 w-3.5 text-primary" />
            Mon–Sat · 9:00 AM–7:00 PM
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INQUIRY FORM
      ========================================================= */}
      <section className="rounded-[28px] border border-border/70 bg-card p-5 shadow-sm sm:p-6">
        <div className="mb-5">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
            <Send className="h-4 w-4" />
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
            Quick Contact
          </p>

          <h2 className="mt-1 text-lg font-bold text-foreground">
            Send an Inquiry
          </h2>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Share your details and we&apos;ll connect with you on WhatsApp.
          </p>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-primary/10 bg-primary/[0.04] p-5 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/[0.08] text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>

            <h3 className="mt-3 text-sm font-bold text-foreground">
              Inquiry prepared successfully
            </h3>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              WhatsApp has been opened with your property inquiry.
            </p>

            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-4 text-xs font-bold text-primary transition-colors hover:text-primary/80"
            >
              Send another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-[11px] font-bold text-foreground"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/10"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-[11px] font-bold text-foreground"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="Enter your phone number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/10"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-[11px] font-bold text-foreground"
              >
                Message
                <span className="ml-1 font-medium text-muted-foreground">
                  (Optional)
                </span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="What would you like to know?"
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-border/70 bg-muted/40 px-3.5 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </form>
        )}
      </section>

      {/* =========================================================
          BROKER CARD
      ========================================================= */}
      <section className="rounded-[28px] border border-border/70 bg-card p-5 shadow-sm sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              Contact Person
            </p>

            <h2 className="mt-1 text-base font-bold text-foreground">
              Listed By
            </h2>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
            <UserRound className="h-4 w-4" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-extrabold text-primary-foreground">
            <User className="h-6 w-6" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-bold text-foreground">
              Jitendra Roy
            </p>

            <p className="mt-0.5 text-xs text-muted-foreground">
              Land Broker
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />

              <span className="text-[10px] font-semibold text-muted-foreground">
                Local property assistance
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            href="tel:+918462097970"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2.5 text-xs font-bold text-white transition-colors hover:bg-primary/90"
          >
            <Phone className="h-3.5 w-3.5" />
            Call
          </a>

          <a
            href="https://wa.me/918462097970"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl border border-primary/15 bg-primary/[0.05] px-3 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary/[0.08]"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </section>

      {/* =========================================================
          TRUST INFORMATION
      ========================================================= */}
      <section className="rounded-[24px] border border-primary/10 bg-primary/[0.035] p-4">
        <div className="mb-3 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />

          <span className="text-xs font-bold text-foreground">
            Before You Purchase
          </span>
        </div>

        <div className="space-y-2.5">
          {[
            {
              icon: FileCheck2,
              text: 'Review available property documents',
            },
            {
              icon: ShieldCheck,
              text: 'Verify title and land records',
            },
            {
              icon: CheckCircle2,
              text: 'Confirm pricing and transaction terms',
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-start gap-2.5"
              >
                <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />

                <span className="text-[11px] leading-4 text-muted-foreground">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
}