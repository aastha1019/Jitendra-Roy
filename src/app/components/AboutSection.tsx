'use client';

import React, { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Gem,
  MapPinned,
  ShieldCheck,
  Target,
} from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

const values = [
  {
    icon: Target,
    number: '01',
    title: 'Our Mission',
    desc: 'To make land buying and selling in Satna transparent, legally sound, and hassle-free for every client.',
  },
  {
    icon: Eye,
    number: '02',
    title: 'Our Vision',
    desc: 'To become one of Madhya Pradesh’s most trusted real estate partners through verified properties and dependable service.',
  },
  {
    icon: Gem,
    number: '03',
    title: 'Our Values',
    desc: 'Transparency, integrity, legal compliance, client-first service, and relationships built for the long term.',
  },
];

export default function AboutSection() {
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
      id="about"
      className="relative overflow-hidden bg-muted/40 py-20 sm:py-24 lg:py-1"
    >
      {/* ================================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-10 h-[420px] w-[420px] rounded-full bg-primary/[0.035] blur-3xl" />

        <div className="absolute -right-48 bottom-10 h-[420px] w-[420px] rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">

          {/* ================================================== */}
          {/* IMAGE SIDE */}
          {/* ================================================== */}

          <div className="animate-on-scroll animate-fade-up relative">

            {/* Main image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-xl">

              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1863d7c1e-1773569105883.png"
                alt="Professional real estate broker consulting clients about land investment in an office"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              {/* Image label */}
              {/* <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-md">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                    <MapPinned className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Local Market Expertise
                    </p>

                    <p className="mt-0.5 text-[10px] text-white/65">
                      Satna & surrounding regions
                    </p>
                  </div>

                </div>
              </div> */}
            </div>

            {/* ================================================== */}
            {/* EXPERIENCE CARD */}
            {/* ================================================== */}

            <div className="absolute -bottom-6 -right-3 z-10 rounded-2xl border border-border/70 bg-card p-3 shadow-xl sm:-right-5 sm:p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-extrabold text-white">
                  15+
                </div>

                <div>
                  <p className="text-sm font-bold text-foreground">
                    Years
                  </p>

                  <p className="text-[11px] text-muted-foreground">
                    Local expertise
                  </p>
                </div>

              </div>

            </div>

            

          </div>

          {/* ================================================== */}
          {/* CONTENT SIDE */}
          {/* ================================================== */}

          <div
            className="animate-on-scroll animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >

            {/* Eyebrow */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                <Building2Icon />
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-section-title font-extrabold leading-[1.05] tracking-tight text-foreground">
              Local knowledge.
              <br />
              <span className="text-primary">
                Trusted property guidance.
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-5 text-sm leading-6 text-muted-foreground sm:text-base">
              Jitendra Roy Land Brokers is a land-focused real estate firm
              serving Satna and surrounding areas of Madhya Pradesh. Since
              2009, we have helped buyers, families, landowners, and investors
              navigate property decisions with greater clarity and confidence.
            </p>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Our approach combines local market knowledge, property
              verification, transparent communication, and practical support
              throughout the transaction — from identifying the right land to
              completing the necessary documentation.
            </p>

            {/* ================================================== */}
            {/* VALUES */}
            {/* ================================================== */}

            <div className="mt-7 space-y-3">

              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="group relative flex gap-4 overflow-hidden rounded-2xl border border-border/70 bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md sm:p-5"
                  >

                    {/* Number */}
                    <span className="absolute right-4 top-4 text-[10px] font-bold tracking-[0.15em] text-muted-foreground/25">
                      {value.number}
                    </span>

                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.07] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    {/* Content */}
                    <div className="pr-8">
                      <h3 className="text-sm font-bold text-foreground">
                        {value.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {value.desc}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* ================================================== */}
            {/* BOTTOM CTA */}
            {/* ================================================== */}

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">

              <a
                href={`https://wa.me/918462097970?text=${encodeURIComponent(
                  'Hello, I want to know more about Jitendra Roy Land Brokers.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
              >
                Talk to Us

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Transparent & client-first
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* Small reusable icon wrapper */
function Building2Icon() {
  return (
    <span className="flex items-center">
      <svg
        className="h-3.5 w-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
        <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    </span>
  );
}