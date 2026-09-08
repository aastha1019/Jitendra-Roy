'use client';

import React, { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  FileCheck2,
  FileText,
  Handshake,
  MapPinned,
  Scale,
  SearchCheck,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: Scale,
    title: 'Legal Verification',
    desc: 'Property documents are carefully reviewed, including title deeds, encumbrance records, and mutation details.',
  },
  {
    icon: Banknote,
    title: 'Fair Market Pricing',
    desc: 'We help buyers find competitive opportunities while ensuring sellers receive fair market value.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    desc: 'Deep knowledge of Satna and surrounding markets, localities, growth corridors, and property trends.',
  },
  {
    icon: SearchCheck,
    title: 'Transparent Deals',
    desc: 'Clear information about property details, documentation, pricing, and transaction requirements.',
  },
  {
    icon: MapPinned,
    title: 'Site Visit Assistance',
    desc: 'We coordinate property visits and help you evaluate location, accessibility, surroundings, and suitability.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Guidance',
    desc: 'Practical insights based on location potential, infrastructure development, demand, and market trends.',
  },
  {
    icon: FileCheck2,
    title: 'Documentation Support',
    desc: 'Assistance throughout sale deed, registry, mutation, and other important documentation processes.',
  },
  {
    icon: Handshake,
    title: 'After-Sale Support',
    desc: 'Our assistance does not stop at the transaction. We remain available for post-sale requirements.',
  },
];

const stats = [
  {
    value: '500+',
    label: 'Properties Sold',
    icon: Building2,
  },
  {
    value: '15+',
    label: 'Years of Experience',
    icon: BadgeCheck,
  },
  {
    value: '450+',
    label: 'Happy Clients',
    icon: Users,
  },
  {
    value: '100%',
    label: 'Verified Listings',
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    const elements =
      sectionRef.current?.querySelectorAll('.animate-on-scroll');

    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* ================================================== */}
      {/* BACKGROUND */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-primary/[0.035] blur-3xl" />

        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">

          <div className="animate-on-scroll animate-fade-up">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              Why Choose Us
            </span>
          </div>

          <h2 className="animate-on-scroll animate-fade-up text-section-title font-extrabold leading-[1.05] tracking-tight text-foreground">
            A smarter way to{' '}
            <span className="text-primary">
              buy and sell land.
            </span>
          </h2>

          <p className="animate-on-scroll animate-fade-up mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            From property discovery to documentation and beyond, we combine
            local market knowledge with a transparent, client-first approach.
          </p>

        </div>

        {/* ================================================== */}
        {/* STATS */}
        {/* ================================================== */}

        <div className="animate-on-scroll animate-fade-up mb-12 grid grid-cols-2 overflow-hidden rounded-[22px] border border-border/70 bg-card shadow-sm sm:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`relative flex flex-col items-center justify-center px-4 py-6 text-center sm:py-7 ${
                  index !== stats.length - 1
                    ? 'border-b border-border/70 sm:border-b-0 sm:border-r'
                    : ''
                } ${
                  index === 1
                    ? 'border-r sm:border-r'
                    : ''
                } ${
                  index === 2
                    ? 'sm:border-r'
                    : ''
                }`}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/[0.07] text-primary">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </div>

                <div className="mt-1 text-[11px] font-medium text-muted-foreground sm:text-xs">
                  {stat.label}
                </div>
              </div>
            );
          })}

        </div>

        {/* ================================================== */}
        {/* TRUST FEATURE GRID */}
        {/* ================================================== */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="animate-on-scroll animate-fade-up group relative rounded-[20px] border border-border/70 bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >

                {/* Number */}
                <span className="absolute right-5 top-5 text-[10px] font-bold tracking-[0.15em] text-muted-foreground/30">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/10 bg-primary/[0.06] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="text-[15px] font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {feature.desc}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-primary/40 transition-transform duration-500 group-hover:scale-x-100" />

              </div>
            );
          })}

        </div>

        {/* ================================================== */}
        {/* TRUST STATEMENT */}
        {/* ================================================== */}

        <div className="animate-on-scroll animate-fade-up mt-10">

          <div className="relative overflow-hidden rounded-[24px] border border-primary/10 bg-primary/[0.045] p-6 sm:p-8">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                    Built on Trust
                  </p>

                  <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">
                    Your property decision deserves complete clarity.
                  </h3>

                  <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted-foreground">
                    We believe a successful property transaction starts with
                    honest information, proper documentation, and the right
                    guidance.
                  </p>
                </div>

              </div>

              <a
                href={`https://wa.me/918462097970?text=${encodeURIComponent(
                  'Hello Jitendra Roy Land Brokers, I would like to discuss a property.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
              >
                Talk to an Expert

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}