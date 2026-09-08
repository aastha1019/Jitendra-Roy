'use client';

import React from 'react';
import {
  MapPin,
  IndianRupee,
  Ruler,
  Route,
  Building2,
  Droplets,
  TrendingUp,
  Scale,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  School,
  Hospital,
  ShoppingCart,
  Bus,
  TrainFront,
  Fuel,
  ArrowUpRight,
} from 'lucide-react';

const stats = [
  {
    icon: IndianRupee,
    label: 'Price',
    value: '₹12.5 Lakh',
  },
  {
    icon: Ruler,
    label: 'Area',
    value: '2400 Sq.ft',
  },
  {
    icon: Route,
    label: 'Road Width',
    value: '30 ft',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhawari, Satna',
  },
  {
    icon: Building2,
    label: 'Category',
    value: 'Residential',
  },
  {
    icon: Droplets,
    label: 'Water',
    value: 'Available',
  },
];

const nearbyPlaces = [
  {
    icon: School,
    type: 'School',
    name: 'Govt. Higher Secondary School',
    distance: '0.5 km',
  },
  {
    icon: Hospital,
    type: 'Hospital',
    name: 'District Hospital Satna',
    distance: '2.2 km',
  },
  {
    icon: ShoppingCart,
    type: 'Market',
    name: 'Dhawari Main Market',
    distance: '0.3 km',
  },
  {
    icon: Bus,
    type: 'Bus Stand',
    name: 'Dhawari Bus Stand',
    distance: '0.8 km',
  },
  {
    icon: TrainFront,
    type: 'Railway',
    name: 'Satna Railway Station',
    distance: '5 km',
  },
  {
    icon: Fuel,
    type: 'Petrol Pump',
    name: 'HP Petrol Pump',
    distance: '0.4 km',
  },
];

const legalInfo = [
  {
    label: 'Title Type',
    value: 'Freehold',
  },
  {
    label: 'Revenue Record',
    value: 'Clear Khasra / Khatauni',
  },
  {
    label: 'Encumbrance',
    value: 'Nil',
  },
  {
    label: 'Mutation Status',
    value: 'Completed',
  },
  {
    label: 'Registry',
    value: 'Ready for Registry',
  },
  {
    label: 'Dispute Status',
    value: 'No Disputes',
  },
];

const investmentScores = [
  {
    label: 'Growth Potential',
    score: 88,
  },
  {
    label: 'Legal Clarity',
    score: 95,
  },
  {
    label: 'Connectivity',
    score: 82,
  },
  {
    label: 'ROI Potential',
    score: 79,
  },
];

export default function PropertyOverview() {
  return (
    <div className="space-y-6">
      {/* Property Summary */}
      <section className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Property
            </div>

            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
              Green Valley Residential Plot
            </h1>

            <div className="mt-2 flex items-start gap-2 text-sm leading-6 text-muted-foreground">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />

              <span>
                Shop No. 7 Area, Dhawari, Satna, Madhya Pradesh
              </span>
            </div>
          </div>

          <div className="shrink-0 sm:text-right">
            <div className="text-3xl font-extrabold tracking-tight text-primary">
              ₹12.5 Lakh
            </div>

            <div className="mt-1 text-xs font-medium text-muted-foreground">
              Approx. ₹521 / Sq.ft
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/60 bg-muted/40 p-3.5 transition-colors hover:border-primary/20 hover:bg-primary/[0.03]"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
                  <Icon className="h-4 w-4" />
                </div>

                <p className="text-[11px] font-medium text-muted-foreground">
                  {stat.label}
                </p>

                <p className="mt-0.5 text-sm font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Description */}
      <section className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
            <Building2 className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              Property Details
            </p>

            <h2 className="mt-0.5 text-lg font-bold text-foreground">
              Property Description
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            This residential plot is located in Dhawari, Satna, with convenient
            access to local amenities and surrounding residential areas.
          </p>

          <p>
            The property offers 30 ft road frontage along with access to water
            and electricity. Its location makes it suitable for residential
            construction and long-term land investment.
          </p>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/[0.04] p-4">
          <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

          <div>
            <p className="text-sm font-bold text-foreground">
              Documentation available
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Property documentation and legal details can be reviewed with
              the broker before proceeding with the transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
              <TrendingUp className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                Property Assessment
              </p>

              <h2 className="mt-0.5 text-lg font-bold text-foreground">
                Investment Overview
              </h2>
            </div>
          </div>

          <div className="hidden items-center gap-1 text-xs font-semibold text-muted-foreground sm:flex">
            Indicative
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {investmentScores.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border/60 bg-muted/40 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-foreground">
                  {item.label}
                </span>

                <span className="text-sm font-extrabold text-primary">
                  {item.score}
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border/60">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{
                    width: `${item.score}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-[10px] font-medium text-muted-foreground">
                Score out of 100
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-border/60 bg-background p-4">
          <div className="flex items-start gap-3">
            <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

            <p className="text-xs leading-5 text-muted-foreground">
              Investment scores are indicative assessments based on property
              characteristics, accessibility, documentation, and location
              factors. They should not be considered a guaranteed return.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
            <Scale className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              Documentation
            </p>

            <h2 className="mt-0.5 text-lg font-bold text-foreground">
              Legal Status
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {legalInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-muted/40 p-3.5"
            >
              <span className="text-sm text-muted-foreground">
                {item.label}
              </span>

              <span className="flex items-center gap-1.5 text-right text-sm font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/[0.04] p-4">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

          <div>
            <p className="text-sm font-bold text-foreground">
              Legal verification
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Please verify original property documents and records with the
              appropriate authorities before completing the purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
            <MapPin className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              Location Advantage
            </p>

            <h2 className="mt-0.5 text-lg font-bold text-foreground">
              Nearby Places
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {nearbyPlaces.map((place) => {
            const Icon = place.icon;

            return (
              <div
                key={place.name}
                className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/40 p-3.5 transition-all hover:border-primary/20 hover:bg-primary/[0.03]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    {place.type}
                  </p>

                  <p className="mt-0.5 truncate text-sm font-semibold text-foreground">
                    {place.name}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-primary/10 bg-primary/[0.06] px-2.5 py-1 text-[11px] font-bold text-primary">
                  {place.distance}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}