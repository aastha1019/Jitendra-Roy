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

/* =========================================================
   SERVICE DATA
========================================================= */

const services = [
  {
    number: '01',
    icon: Home,
    title: 'Residential Plots',
    desc: 'Premium residential plots in prime localities with clear titles and essential amenities.',
    theme: {
      iconBg: 'bg-[#e5f2ed]',
      iconColor: 'text-[#075c49]',
      hoverBg: 'group-hover:bg-[#075c49]',
      glow: 'bg-[#075c49]/[0.07]',
      accent: 'bg-[#075c49]',
      number: 'text-[#075c49]',
    },
  },

  {
    number: '02',
    icon: Building2,
    title: 'Commercial Land',
    desc: 'High-visibility commercial land on main roads and highway corridors for business ventures.',
    theme: {
      iconBg: 'bg-[#e7eef7]',
      iconColor: 'text-[#52799d]',
      hoverBg: 'group-hover:bg-[#52799d]',
      glow: 'bg-[#52799d]/[0.07]',
      accent: 'bg-[#52799d]',
      number: 'text-[#52799d]',
    },
  },

  {
    number: '03',
    icon: Sprout,
    title: 'Agricultural Land',
    desc: 'Fertile agricultural land with water sources, canal access, and clear revenue records.',
    theme: {
      iconBg: 'bg-[#edf4df]',
      iconColor: 'text-[#789642]',
      hoverBg: 'group-hover:bg-[#789642]',
      glow: 'bg-[#91ad5b]/[0.08]',
      accent: 'bg-[#789642]',
      number: 'text-[#789642]',
    },
  },

  {
    number: '04',
    icon: Landmark,
    title: 'Farm House Land',
    desc: 'Scenic land across Maihar Road and highway belts — ideal for retreats, farm houses, or long-term investment.',
    theme: {
      iconBg: 'bg-[#f5edda]',
      iconColor: 'text-[#b08a32]',
      hoverBg: 'group-hover:bg-[#b08a32]',
      glow: 'bg-[#d5b45a]/[0.10]',
      accent: 'bg-[#b08a32]',
      number: 'text-[#b08a32]',
    },
  },

  {
    number: '05',
    icon: TrendingUp,
    title: 'Investment Consulting',
    desc: 'Informed land investment decisions with market insights, location analysis, and growth potential.',
    theme: {
      iconBg: 'bg-[#eee8f7]',
      iconColor: 'text-[#7966a6]',
      hoverBg: 'group-hover:bg-[#7966a6]',
      glow: 'bg-[#8d79b9]/[0.07]',
      accent: 'bg-[#7966a6]',
      number: 'text-[#7966a6]',
    },
  },

  {
    number: '06',
    icon: Ruler,
    title: 'Property Valuation',
    desc: 'Accurate valuation based on location, current market rates, land characteristics, and demand.',
    theme: {
      iconBg: 'bg-[#f8ebdd]',
      iconColor: 'text-[#b6763c]',
      hoverBg: 'group-hover:bg-[#b6763c]',
      glow: 'bg-[#d9965c]/[0.07]',
      accent: 'bg-[#b6763c]',
      number: 'text-[#b6763c]',
    },
  },

  {
    number: '07',
    icon: FileText,
    title: 'Legal Documentation',
    desc: 'Assistance with sale deeds, mutation, registry, revenue records, and essential paperwork.',
    theme: {
      iconBg: 'bg-[#e3f2f3]',
      iconColor: 'text-[#4b8d92]',
      hoverBg: 'group-hover:bg-[#4b8d92]',
      glow: 'bg-[#61aeb3]/[0.07]',
      accent: 'bg-[#4b8d92]',
      number: 'text-[#4b8d92]',
    },
  },

  {
    number: '08',
    icon: FileCheck2,
    title: 'Registration Support',
    desc: 'End-to-end guidance for registration, stamp duty, and Sub-Registrar Office procedures.',
    theme: {
      iconBg: 'bg-[#f7e7e9]',
      iconColor: 'text-[#a9626d]',
      hoverBg: 'group-hover:bg-[#a9626d]',
      glow: 'bg-[#c57b86]/[0.07]',
      accent: 'bg-[#a9626d]',
      number: 'text-[#a9626d]',
    },
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* =======================================================
     SCROLL ANIMATION
  ======================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const items = entry.target.querySelectorAll('.service-reveal');

          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.remove('opacity-0', 'translate-y-4');

              item.classList.add('opacity-100', 'translate-y-0');
            }, index * 60);
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#f7faf8]
        py-12

        sm:py-14

        lg:py-16
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* subtle technical grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(#075c49_1px,transparent_1px),linear-gradient(90deg,#075c49_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* green ambient glow */}

        <div
          className="
            absolute
            -left-40
            top-24
            h-80
            w-80
            rounded-full
            bg-[#075c49]/[0.035]
            blur-3xl
          "
        />

        {/* gold ambient glow */}

        <div
          className="
            absolute
            -right-40
            bottom-20
            h-80
            w-80
            rounded-full
            bg-[#d5b45a]/[0.035]
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1400px]
          px-5

          sm:px-8

          lg:px-10

          xl:px-12
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            service-reveal
            opacity-0
            translate-y-4
            transition-all
            duration-700
            mb-7

            sm:mb-8

            lg:mb-9
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            {/* =================================================
                LEFT HEADER
            ================================================= */}

            <div
              className="
                max-w-[720px]
                text-center

                lg:text-left
              "
            >
              {/* Eyebrow */}

              <div
                className="
                  mb-3
                  flex
                  items-center
                  justify-center
                  gap-2.5

                  lg:justify-start
                "
              >
                <span
                  className="
                    h-px
                    w-7
                    bg-[#075c49]
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.23em]
                    text-[#075c49]
                  "
                >
                  Our services
                </span>

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#d5b45a]
                  "
                />
              </div>

              {/* Heading */}

              <h2
                className="
                  text-[32px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.055em]
                  text-[#172033]

                  sm:text-[40px]

                  md:text-[46px]

                  lg:text-[51px]
                "
              >
                Everything you need
                <span
                  className="
                    text-[#075c49]
                  "
                >
                  {' '}
                  to move with confidence.
                </span>
              </h2>

              {/* Description */}

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[590px]
                  text-[10px]
                  leading-[1.7]
                  text-[#4a524f]

                  sm:text-[11px]

                  md:text-[12px]

                  lg:mx-0
                "
              >
                From finding the right land to valuation, documentation and registration, we help
                simplify every important step.
              </p>
            </div>

            {/* =================================================
                LOCATION META
            ================================================= */}

            <div
              className="
                hidden
                shrink-0
                flex-col
                items-end
                gap-1.5

                sm:flex
              "
            >
              <span
                className="
                  flex
                  items-center
                  gap-2
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#7d8985]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#d5b45a]
                  "
                />
                Satna & Madhya Pradesh
              </span>

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.18em]
                  text-[#a7b0ad]
                "
              >
                08 areas
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            SERVICES GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-3

            sm:grid-cols-2
            sm:gap-3.5

            lg:grid-cols-4
            lg:gap-4
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const theme = service.theme;

            return (
              <article
                key={service.title}
                className="
                  service-reveal
                  group
                  relative
                  min-h-[158px]
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#dce6e1]
                  bg-white
                  p-4
                  opacity-0
                  translate-y-4
                  transition-all
                  duration-500
                  cursor-pointer

                  hover:-translate-y-1
                  hover:border-[#b9cec6]
                  hover:shadow-[0_18px_40px_rgba(23,32,51,0.08)]

                  sm:min-h-[168px]
                  sm:p-5

                  lg:min-h-[172px]
                "
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                {/* =====================================================
                    SOFT COLOR BACKGROUND
                ===================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white
                    via-white
                    to-[#f6f9f7]
                  "
                />

                {/* =====================================================
                    TOP RIGHT COLOR GLOW
                ===================================================== */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    ${theme.glow}
                    opacity-50
                    blur-2xl
                    transition-all
                    duration-700

                    group-hover:scale-[1.6]
                    group-hover:opacity-80
                  `}
                />

                {/* =====================================================
                    DECORATIVE CIRCLE
                ===================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-20
                    w-20
                    rounded-full
                    border
                    border-[#e9efec]
                    transition-all
                    duration-500

                    group-hover:scale-110
                    group-hover:border-[#d5e2dd]
                  "
                />

                {/* =====================================================
                    CONTENT
                ===================================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                  "
                >
                  {/* =================================================
                      TOP ROW
                  ================================================= */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                    "
                  >
                    {/* ICON */}

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-[12px]
                        ${theme.iconBg}
                        ${theme.iconColor}

                        transition-all
                        duration-300

                        group-hover:scale-105
                        group-hover:-translate-y-0.5

                        sm:h-11
                        sm:w-11
                      `}
                    >
                      <Icon
                        className="
                          h-[17px]
                          w-[17px]

                          sm:h-[18px]
                          sm:w-[18px]
                        "
                      />
                    </div>

                    {/* NUMBER */}

                    <span
                      className={`
                        pt-1
                        text-[8px]
                        font-semibold
                        tracking-[0.18em]
                        ${theme.number}
                        opacity-70
                      `}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* =================================================
                      TEXT AREA

                      pr-9 reserves space for the arrow
                  ================================================= */}

                  <div
                    className="
                      mt-5
                      min-w-0
                      pr-10
                    "
                  >
                    <h3
                      className="
                        text-[14px]
                        font-semibold
                        tracking-[-0.025em]
                        text-[#172033]
                        transition-colors
                        duration-300

                        sm:text-[15px]

                        group-hover:text-[#075c49]
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        line-clamp-2
                        text-[9px]
                        leading-[1.6]
                        text-[#8a9692]

                        sm:text-[10px]
                      "
                    >
                      {service.desc}
                    </p>
                  </div>

                  {/* =================================================
                      ARROW

                      Absolutely anchored to bottom-right.
                      Text has pr-10 above so it can never overlap.
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      right-0
                    "
                  >
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#d7e2dd]
                        bg-white
                        text-[#075c49]
                        shadow-[0_3px_10px_rgba(23,32,51,0.04)]
                        transition-all
                        duration-300

                        group-hover:border-[#075c49]
                        group-hover:bg-[#edf5f1]
                        group-hover:shadow-[0_5px_14px_rgba(7,92,73,0.10)]
                      "
                    >
                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          transition-transform
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* =====================================================
                    SMALL HOVER ACCENT
                ===================================================== */}

                <div
                  className={`
                    absolute
                    bottom-0
                    left-5
                    h-[2px]
                    w-0
                    ${theme.accent}
                    transition-all
                    duration-500

                    group-hover:w-10
                  `}
                />
              </article>
            );
          })}
        </div>

        {/* ===================================================
            TRUST POINTS
        =================================================== */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-2
            text-[8px]
            font-bold
            uppercase
            tracking-[0.08em]
            text-[#033027]

            sm:text-[10px]
          "
        >
          <span className="flex items-center gap-1.5 ">
            <FileCheck2
              className="
                h-3
                w-3
                text-[#033027]
              "
            />
            Documentation assistance
          </span>

          <span className="text-[#d2dbd7]">•</span>

          <span className="flex items-center gap-1.5">
            <MapPinned
              className="
                h-3
                w-3
                text-[#033027]
              "
            />
            Local market knowledge
          </span>

          <span className="text-[#d2dbd7]">•</span>

          <span className="flex items-center gap-1.5">
            <TrendingUp
              className="
                h-3
                w-3
                text-[#033027]
              "
            />
            Investment guidance
          </span>
        </div>

        {/* ===================================================
            COMPACT CONSULTATION CTA
        =================================================== */}

        <div
          className="
            service-reveal
            mt-5
            overflow-hidden
            rounded-[18px]
            bg-[#075c49]
            px-5
            py-4
            opacity-0
            translate-y-4
            shadow-[0_8px_25px_rgba(23,32,51,0.04)]
            transition-all
            duration-700
            sm:px-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* CTA CONTENT */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e7f2ed]
                  text-[#075c49]
                "
              >
                <MapPinned className="h-4 w-4" />
              </div>

              <div>
                <p
                  className="
                    text-[12px]
                    font-bold
                    text-white
                  "
                >
                  Not sure what you need?
                </p>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    text-[#d3d8d7]

                    sm:text-[9px]
                  "
                >
                  Tell us your requirement and we&apos;ll guide you.
                </p>
              </div>
            </div>

            {/* CTA BUTTON */}

            <Link
              href="/contact"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#fcfcfc]
                px-5
                py-2.5
                text-[12px]
                font-semibold
                text-[#075c49]
                transition-all
                duration-300
                b-0
                hover:shadow-[0_8px_20px_rgba(7,92,73,0.18)]

                sm:w-auto
              "
            >
              Talk to our team
              <ArrowUpRight
                className="
                  h-3
                  w-3
                  transition-transform
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
