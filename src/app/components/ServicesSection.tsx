'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  FileCheck2,
  FileText,
  Home,
  Landmark,
  MapPinned,
  Ruler,
  Sprout,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Plots',
    desc: 'Premium residential plots in prime localities with clear titles and essential amenities.',
    span: 'md:col-span-1',
  },
  {
    icon: Building2,
    title: 'Commercial Land',
    desc: 'High-visibility commercial land on main roads and highway corridors for business ventures.',
    span: 'md:col-span-1',
  },
  {
    icon: Sprout,
    title: 'Agricultural Land',
    desc: 'Fertile agricultural land with water sources, canal access, and clear revenue records.',
    span: 'md:col-span-1',
  },
  {
    icon: Landmark,
    title: 'Farm House Land',
    desc: 'Scenic land across Maihar Road and highway belts — ideal for weekend retreats, farm houses, or long-term investment.',
    span: 'md:col-span-2',
    featured: true,
  },
  {
    icon: TrendingUp,
    title: 'Investment Consulting',
    desc: 'Make informed land investment decisions with market insights, location analysis, and growth potential.',
    span: 'md:col-span-1',
  },
  {
    icon: Ruler,
    title: 'Property Valuation',
    desc: 'Accurate valuation based on location, current market rates, land characteristics, and demand.',
    span: 'md:col-span-1',
  },
  {
    icon: FileText,
    title: 'Legal Documentation',
    desc: 'Assistance with sale deeds, mutation, registry, revenue records, and essential paperwork.',
    span: 'md:col-span-1',
  },
  {
    icon: FileCheck2,
    title: 'Registration Support',
    desc: 'End-to-end guidance for registration, stamp duty, and Sub-Registrar Office procedures.',
    span: 'md:col-span-1',
  },
];

export default function ServicesSection() {
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
      id="services"
      className="relative overflow-hidden bg-muted/40 py-20 sm:py-24 lg:py-0"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/[0.035] blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <div className="animate-on-scroll animate-fade-up">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              <MapPinned className="h-3.5 w-3.5" />
              Our Services
            </span>
          </div>

          <h2 className="animate-on-scroll animate-fade-up text-section-title font-extrabold leading-[1.05] tracking-tight text-foreground">
            Complete land solutions,{' '}
            <span className="text-primary">
              from search to registry.
            </span>
          </h2>

          <p className="animate-on-scroll animate-fade-up mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Whether you are buying, selling, or investing, we help you navigate
            every important step with local expertise and dependable guidance.
          </p>
        </div>

        {/* ================================================== */}
        {/* SERVICES BENTO */}
        {/* ================================================== */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`animate-on-scroll animate-fade-up group relative overflow-hidden rounded-[22px] border border-border/70 bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-xl ${service.span}`}
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >
                {/* Hover background */}
                <div className="pointer-events-none absolute inset-0 bg-primary/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/10 bg-primary/[0.07] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Number */}
                <span className="absolute right-5 top-5 text-[11px] font-bold tracking-widest text-muted-foreground/40">
                  0{index + 1}
                </span>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                    {service.desc}
                  </p>

                  {/* Learn more */}
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 transition-all duration-300 -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore service
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Featured indicator */}
                {service.featured && (
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* CONSULTATION CTA */}
        {/* ================================================== */}

        <div className="animate-on-scroll animate-fade-up mt-10">
          <div className="relative overflow-hidden rounded-[24px] bg-primary px-6 py-8 shadow-lg sm:px-8 lg:px-10">
            
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-5 -top-12 h-40 w-40 rounded-full border border-white/10" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* CTA content */}
              <div className="max-w-2xl">
                <div className="mb-2 flex items-center gap-2 text-white/70">
                  <FileCheck2 className="h-4 w-4" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                    Need Expert Guidance?
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Let&apos;s find the right property for you.
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                  Tell us what you&apos;re looking for and our team will help
                  you find suitable land based on your location, budget, and
                  purpose.
                </p>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/918462097970?text=${encodeURIComponent(
                  'Hello, I need help with land services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-lg"
              >
                Get Free Consultation

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* SMALL TRUST LINE */}
        {/* ================================================== */}

        <div className="animate-on-scroll animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <FileCheck2 className="h-3.5 w-3.5 text-primary" />
            Documentation assistance
          </span>

          <span className="hidden h-3 w-px bg-border sm:block" />

          <span className="flex items-center gap-1.5">
            <MapPinned className="h-3.5 w-3.5 text-primary" />
            Local market knowledge
          </span>

          <span className="hidden h-3 w-px bg-border sm:block" />

          <span className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-primary" />
            Investment guidance
          </span>
        </div>

      </div>
    </section>
  );
}