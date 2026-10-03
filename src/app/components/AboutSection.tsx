'use client';

import React from 'react';
import {
  ArrowUpRight,
  Building2,
  Eye,
  Gem,
  MapPin,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';

import AppImage from '@/components/ui/AppImage';

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    value: '15+',
    label: 'Years Experience',
    icon: Users,
  },
  {
    value: '500+',
    label: 'Properties',
    icon: Building2,
  },
  {
    value: '100%',
    label: 'Verified Listings',
    icon: ShieldCheck,
  },
];

const principles = [
  {
    number: '01',
    title: 'Our Mission',
    description:
      'To make land buying and selling in Satna transparent, legally sound, and hassle-free.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Our Vision',
    description:
      'To become one of Madhya Pradesh’s trusted real estate partners through verified properties and dependable service.',
    icon: Eye,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#f7faf8]
        py-14

        sm:py-16

        lg:py-[76px]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Technical grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(#075c49_1px,transparent_1px),linear-gradient(90deg,#075c49_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* Left soft glow */}

        <div
          className="
            absolute
            -left-48
            top-[25%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#075c49]/[0.025]
            blur-3xl
          "
        />

        {/* Bottom gold glow */}

        <div
          className="
            absolute
            -right-48
            bottom-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#d5b45a]/[0.025]
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
          max-w-[1380px]
          px-5

          sm:px-8

          lg:px-10

          xl:px-12
        "
      >


        {/* ===================================================
            MAIN LAYOUT
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-9

            lg:grid-cols-[0.91fr_1.09fr]
            lg:items-start
            lg:gap-12

            xl:gap-[70px]
          "
        >
          {/* =================================================
              LEFT — IMAGE
          ================================================= */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[620px]

              lg:mx-0
              lg:pt-5
            "
          >
            {/* Decorative gold orbit */}

            <div
              className="
                pointer-events-none
                absolute
                -right-5
                -top-8
                hidden
                h-32
                w-32
                rounded-full
                border
                border-[#d5b45a]/40

                sm:block
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-9
                -top-12
                hidden
                h-44
                w-44
                rounded-full
                border
                border-[#d5b45a]/20

                sm:block
              "
            />

            {/* Image */}

            <div
              className="
                relative
                aspect-[1.08/1]
                overflow-hidden
                rounded-[25px]
                border
                border-[#dce6e1]
                bg-white
                shadow-[0_22px_55px_rgba(23,32,51,0.10)]

                sm:rounded-[30px]

                lg:aspect-[1.04/1]
              "
            >
              <AppImage
                src="/assets/images/aboutUs.png"
                alt="Jitendra Roy Land Brokers discussing property plans with clients"
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.025]
                "
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 80vw,
                  48vw
                "
              />

              {/* Image gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#172033]/35
                  via-transparent
                  to-transparent
                "
              />

              {/* Location badge */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-[#102d05]
                  px-3
                  py-2
                  backdrop-blur-md

                  sm:left-5
                  sm:top-5
                  sm:px-4
                "
              >
                <MapPin
                  className="
                    h-3.5
                    w-3.5
                    text-[#d5b45a]
                  "
                />

                <div>
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white
                    "
                  >
                    Satna & Madhya Pradesh
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[6px]
                      uppercase
                      tracking-[0.1em]
                      text-white/50
                    "
                  >
                    Local expertise · Real guidance
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                EXPERIENCE BADGE
            ================================================= */}

            <div
              className="
                absolute
                -bottom-5
                right-3
                flex
                items-center
                gap-3
                rounded-[17px]
                border
                border-white
                bg-white
                px-3
                py-2.5
                shadow-[0_14px_35px_rgba(23,32,51,0.14)]

                sm:right-5
                sm:px-4
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#075c49]
                  text-white
                "
              >
                <Gem className="h-4 w-4 text-[#d5b45a]" />
              </div>

              <div>
                <p
                  className="
                    text-[14px]
                    font-bold
                    leading-none
                    text-[#172033]
                  "
                >
                  15+
                </p>

                <p
                  className="
                    mt-1
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#8b9692]
                  "
                >
                  Years of
                </p>

                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#8b9692]
                  "
                >
                  trusted experience
                </p>
              </div>
            </div>

            {/* Gold accent */}

            <div
              className="
                absolute
                -bottom-1
                left-7
                h-[3px]
                w-12
                rounded-full
                bg-[#d5b45a]
              "
            />
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="relative">
            {/* =================================================
                EYEBROW
            ================================================= */}

            <div
              className="
                mb-4
                hidden
                items-center
                gap-2

                lg:flex
              "
            >
              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#c49a2d]
                "
              >
                Guided by experience
              </span>

              <span
                className="
                  h-px
                  w-8
                  bg-[#d5b45a]
                "
              />
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h2
              className="
                text-center
                text-[36px]
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#172033]

                sm:text-[44px]

                md:text-[50px]

                lg:text-left
                lg:text-[48px]

                xl:text-[54px]
              "
            >
              Local knowledge.
              <br />
              <span className="text-[#075c49]">Trusted guidance.</span>
            </h2>

            {/* Gold underline */}

            <div
              className="
                mx-auto
                mt-4
                h-[3px]
                w-11
                rounded-full
                bg-[#d5b45a]

                lg:mx-0
              "
            />

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mx-auto
                mt-5
                max-w-[690px]
                text-center
                text-[12px]
                leading-[1.7]
                text-[#71807a]

                sm:text-[13px]

                md:text-[14px]

                lg:mx-0
                lg:text-left
              "
            >
              Jitendra Roy Land Brokers is a land-focused real estate firm serving Satna and
              surrounding areas of Madhya Pradesh. Since 2009, we have helped buyers, families,
              landowners, and investors make property decisions with greater clarity and confidence.
            </p>

            {/* =================================================
                STATS
            ================================================= */}

            <div
              className="
                mt-6
                grid
                grid-cols-3
                border-y
                border-[#dfe8e4]
                py-3.5
              "
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-2

                      lg:justify-start
                      lg:px-3

                      ${index !== 0 ? 'border-l border-[#dfe8e4]' : ''}
                    `}
                  >
                    {/* Icon */}

                    <div
                      className="
                        hidden
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#e8f3ef]
                        text-[#075c49]

                        sm:flex
                      "
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>

                    {/* Value */}

                    <div>
                      <p
                        className="
                          text-[17px]
                          font-bold
                          leading-none
                          tracking-[-0.03em]
                          text-[#075c49]

                          sm:text-[18px]
                        "
                      >
                        {stat.value}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[6px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-[#9aa5a1]

                          sm:text-[7px]
                        "
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                APPROACH PANEL
            ================================================= */}

            <div
              className="
                relative
                mt-7
                overflow-hidden
                rounded-[22px]
                bg-[#075c49]
                p-4
                shadow-[0_18px_45px_rgba(7,92,73,0.15)]

                sm:p-5

                lg:p-5
              "
            >
              {/* Decorative circles */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-20
                  h-44
                  w-44
                  rounded-full
                  border
                  border-white/[0.08]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-2
                  -top-12
                  h-28
                  w-28
                  rounded-full
                  border
                  border-white/[0.07]
                "
              />

              {/* Since 2009 */}

              <div
                className="
                  absolute
                  right-5
                  top-5
                  hidden
                  items-center
                  gap-2

                  sm:flex
                "
              >
                <span
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white/80
                  "
                >
                  Since 2009
                </span>

                <span
                  className="
                    h-5
                    w-5
                    rounded-full
                    border
                    border-[#d5b45a]/50
                  "
                />
              </div>

              {/* Panel heading */}

              <div className="relative">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#d5b45a]
                    "
                  >
                    Our approach
                  </span>

                  <span
                    className="
                      h-px
                      w-7
                      bg-[#d5b45a]/70
                    "
                  />
                </div>

                <h3
                  className="
                    text-[17px]
                    font-semibold
                    tracking-[-0.025em]
                    text-white

                    sm:text-[19px]
                  "
                >
                  What guides our work
                </h3>
              </div>

              {/* =================================================
                  MISSION + VISION
              ================================================= */}

              <div
                className="
                  relative
                  mt-2
                  grid
                  grid-cols-1
                  gap-2.5

                  sm:grid-cols-2
                "
              >
                {principles.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="
                        group
                        relative
                        rounded-[15px]
                        border
                        border-white/10
                        bg-white/[0.065]
                        p-2
                        transition-all
                        duration-300
                        hover:border-white/20
                        hover:bg-white/[0.10]
                      "
                    >
                      {/* icon */}
                      <div className="flex gap-2 items-center">
                        <div
                          className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-[9px]
                          bg-[white]
                          text-[#075c49]
                          shadow-sm
                        "
                        >
                          <Icon className="h-3 w-3" />
                        </div>
                        {/* number */}
                        <div
                          className="
                          flex
                          align-items-center
                          justify-center
                          text-[14px]
                          font-bold
                          tracking-[0.1em]
                          text-[#ffbe0a]
                        "
                        >
                          {item.title}
                        </div>
                        
                      </div>

                      {/* title */}

                      <div
                        className="
                          mt-3
                          flex
                          items-center
                          justify-between
                        "
                      ></div>

                      {/* description */}

                      <p
                        className="
                          text-[10px]
                          leading-[1.6]
                          text-white
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                  VALUES
              ================================================= */}

              <div
                className="
                  relative
                  mt-2.5
                  flex
                  items-center
                  gap-3
                  rounded-[15px]
                  border
                  border-white/10
                  bg-[#064f40]
                  px-3
                  py-2.5
                  transition-all
                  duration-300

                  hover:bg-[#064b3d]
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-[#d5b45a]
                    text-[#075c49]
                  "
                >
                  <Gem className="h-3.5 w-3.5" />
                </div>

                <div className="min-w-0">
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <h4
                      className="
                        text-[12px]
                        font-semibold
                        text-white
                      "
                    >
                      Our Values
                    </h4>

                  </div>

                  <p
                    className="
                      mt-0.5
                      text-[8px]
                      leading-[1.5]
                      text-white
                    "
                  >
                    Transparency
                    <span className="mx-1 text-[#d5b45a]/70">•</span>
                    Integrity
                    <span className="mx-1 text-[#d5b45a]/70">•</span>
                    Legal compliance
                    <span className="mx-1 text-[#d5b45a]/70">•</span>
                    Client-first service
                  </p>
                </div>

                <ArrowUpRight
                  className="
                    ml-auto
                    h-3.5
                    w-3.5
                    shrink-0
                    text-white
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
