'use client';

import React from 'react';
import {
  Droplets,
  Zap,
  Route,
  Fence,
  MapPin,
  ShoppingCart,
  Bus,
  Radio,
  School,
  Waves,
  Mountain,
  Lock,
  CheckCircle2,
  XCircle,
  TrendingUp,
  FileText,
  MessageCircle,
  Phone,
  ArrowUpRight,
  Building2,
} from 'lucide-react';

const features = [
  {
    icon: Droplets,
    label: 'Water Connection',
    available: true,
  },
  {
    icon: Zap,
    label: 'Electricity',
    available: true,
  },
  {
    icon: Route,
    label: 'Road Frontage 30 ft',
    available: true,
  },
  {
    icon: Fence,
    label: 'Boundary Wall',
    available: false,
  },
  {
    icon: MapPin,
    label: 'Corner Plot',
    available: false,
  },
  {
    icon: ShoppingCart,
    label: 'Near Market',
    available: true,
  },
  {
    icon: Bus,
    label: 'Bus Stop Nearby',
    available: true,
  },
  {
    icon: Radio,
    label: 'Mobile Network',
    available: true,
  },
  {
    icon: School,
    label: 'Near School',
    available: true,
  },
  {
    icon: Waves,
    label: 'Drainage',
    available: true,
  },
  {
    icon: Mountain,
    label: 'Scenic View',
    available: false,
  },
  {
    icon: Lock,
    label: 'Gated Area',
    available: false,
  },
];

const futureGrowth = [
  {
    label: 'Ring Road Project',
    status: 'Upcoming',
    impact: 'High',
  },
  {
    label: 'Industrial Zone Expansion',
    status: 'Approved',
    impact: 'Very High',
  },
  {
    label: 'New Township Development',
    status: 'Planned',
    impact: 'High',
  },
  {
    label: 'Highway Widening NH-30',
    status: 'In Progress',
    impact: 'Medium',
  },
];

export default function PropertyFeatures() {
  return (
    <div className="space-y-6">
      {/* Property Features */}
      <section className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
            <Building2 className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              Property Details
            </p>

            <h2 className="mt-0.5 text-lg font-bold text-foreground">
              Property Features
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.label}
                className={`flex items-center gap-3 rounded-2xl border p-3.5 transition-colors ${
                  feature.available
                    ? 'border-primary/10 bg-primary/[0.035] hover:border-primary/20 hover:bg-primary/[0.05]'
                    : 'border-border/60 bg-muted/40 opacity-65'
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    feature.available
                      ? 'bg-primary/[0.07] text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <span
                  className={`min-w-0 flex-1 text-sm font-semibold ${
                    feature.available
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {feature.label}
                </span>

                {feature.available ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                ) : (
                  <XCircle className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            Available
          </div>

          <div className="flex items-center gap-1.5">
            <XCircle className="h-3.5 w-3.5 text-muted-foreground/50" />
            Not Available
          </div>
        </div>
      </section>

      {/* Future Growth */}
      <section className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
              <TrendingUp className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                Area Outlook
              </p>

              <h2 className="mt-0.5 text-lg font-bold text-foreground">
                Future Growth Potential
              </h2>
            </div>
          </div>

          <ArrowUpRight className="hidden h-4 w-4 text-muted-foreground sm:block" />
        </div>

        <div className="space-y-3">
          {futureGrowth.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/40 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="text-sm font-bold text-foreground">
                  {item.label}
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                  <span className="text-xs font-medium text-muted-foreground">
                    {item.status}
                  </span>
                </div>
              </div>

              <span
                className={`w-fit shrink-0 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${
                  item.impact === 'Very High'
                    ? 'border-primary/15 bg-primary/[0.08] text-primary'
                    : item.impact === 'High'
                      ? 'border-primary/10 bg-primary/[0.05] text-primary'
                      : 'border-border/70 bg-background text-muted-foreground'
                }`}
              >
                {item.impact} Impact
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-primary/10 bg-primary/[0.035] p-4">
          <div className="flex items-start gap-3">
            <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

            <p className="text-xs leading-5 text-muted-foreground">
              Future development information is indicative and should be
              independently verified with the relevant local authorities or
              project agencies before making an investment decision.
            </p>
          </div>
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="relative overflow-hidden rounded-[28px] bg-primary p-6 text-primary-foreground shadow-sm sm:p-8">
        {/* Subtle background detail */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/[0.06] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="relative">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white ">
              <FileText className="h-6 w-6 text-primary" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                Property Information
              </p>

              <h3 className="text-xl font-extrabold tracking-tight text-white">
                Get the complete property brochure
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                Request property details, pricing information, location
                details, and available documentation directly from our team.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/918462097970?text=Hello%2C%20I%20want%20to%20request%20the%20brochure%20for%20Green%20Valley%20Residential%20Plot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-primary transition-all hover:bg-white/90 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Request Brochure
            </a>

            <a
              href="tel:+918462097970"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call for Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}