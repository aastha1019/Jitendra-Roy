'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Search,
} from 'lucide-react';

export default function PropertiesHero() {
  return (
    <section className="relative overflow-hidden">

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
          alt="Open land and countryside"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#071A15]/40" />

        {/* Subtle primary overlay */}
        <div className="absolute inset-0 bg-primary/[0.08]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071A15]/50 to-transparent" />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[560px]
          max-w-7xl
          items-center
          justify-center
          px-4
          pb-20
          pt-28
          sm:min-h-[600px]
          sm:px-6
          sm:pb-24
          sm:pt-32
          lg:px-8
        "
      >
        <div className="mx-auto max-w-3xl text-center">

          {/* =================================================
              EYEBROW
          ================================================== */}

          <div className="mb-5">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/[0.08]
                px-3.5
                py-1.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
                backdrop-blur-sm
              "
            >
              <Search className="h-3.5 w-3.5 text-white" />

              Explore Properties
            </span>
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <h1
            className="
              text-4xl
              font-extrabold
              leading-[1.04]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-[64px]
            "
          >
            Find land that fits
            <br />

            <span className="text-primary">
              your vision.
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-white/75
              sm:text-base
              sm:leading-7
            "
          >
            Explore residential, commercial, agricultural and investment
            land opportunities across Satna and Madhya Pradesh.
          </p>

          {/* =================================================
              QUICK INFO
          ================================================== */}

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">

            {/* Location */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.08]
                px-3.5
                py-2
                text-xs
                font-semibold
                text-white/85
                backdrop-blur-sm
              "
            >
              <MapPin className="h-3.5 w-3.5 text-white" />

              Satna & Madhya Pradesh
            </div>

            {/* Verified */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.08]
                px-3.5
                py-2
                text-xs
                font-semibold
                text-white/85
                backdrop-blur-sm
              "
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-white" />

              Verified Listings
            </div>

            {/* Documentation */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.08]
                px-3.5
                py-2
                text-xs
                font-semibold
                text-white/85
                backdrop-blur-sm
              "
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-white" />

              Clear Documentation
            </div>

          </div>

          {/* =================================================
              ACTIONS
          ================================================== */}

          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >

            {/* Primary CTA */}
            <Link
              href="#properties"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-primary
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-black/10
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-primary/90
                hover:shadow-xl
                sm:w-auto
              "
            >
              Browse Properties

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/918462097970?text=Hello%20Jitendra%20Roy%20Land%20Brokers%2C%20I%20am%20looking%20for%20a%20land%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-white/20
                bg-white/[0.08]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white/30
                hover:bg-white/[0.12]
                sm:w-auto
              "
            >
              Share Requirements
            </a>

          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM EDGE
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

    </section>
  );
}