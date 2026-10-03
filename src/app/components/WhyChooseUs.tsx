'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  FileCheck2,
  Handshake,
  MapPin,
  Scale,
  SearchCheck,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';

const expertise = [
  {
    number: '01',
    icon: Scale,
    title: 'Legal Verification',
    category: 'Documents',
    description:
      'Property documents are carefully reviewed, including title deeds, encumbrance records and mutation details.',
    bullets: [
      'Sale deed & registry guidance',
      'Document verification',
      'Mutation support',
    ],
  },
  {
    number: '02',
    icon: Banknote,
    title: 'Fair Market Pricing',
    category: 'Pricing',
    description:
      'We help buyers understand competitive property pricing while helping sellers position their property appropriately.',
    bullets: [
      'Market comparison',
      'Property value guidance',
      'Transparent pricing',
    ],
  },
  {
    number: '03',
    icon: Users,
    title: 'Local Expertise',
    category: 'Local Knowledge',
    description:
      'Our understanding of Satna and surrounding markets helps clients evaluate locations, developments and property opportunities.',
    bullets: [
      'Local market knowledge',
      'Growth insights',
      'Location evaluation',
    ],
  },
  {
    number: '04',
    icon: SearchCheck,
    title: 'Transparent Deals',
    category: 'Transparency',
    description:
      'Clear information about property details, documentation, pricing and transaction requirements.',
    bullets: [
      'Clear information',
      'Transparent pricing',
      'Straightforward deals',
    ],
  },
  {
    number: '05',
    icon: MapPin,
    title: 'Site Visit Assistance',
    category: 'On Ground',
    description:
      'We coordinate property visits and help evaluate location, accessibility, surroundings and suitability.',
    bullets: [
      'Site coordination',
      'Location evaluation',
      'Ground assistance',
    ],
  },
  {
    number: '06',
    icon: TrendingUp,
    title: 'Investment Guidance',
    category: 'Investment',
    description:
      'Practical insights based on location potential, infrastructure development, demand and market trends.',
    bullets: [
      'Growth potential',
      'Infrastructure insights',
      'Market trends',
    ],
  },
  {
    number: '07',
    icon: FileCheck2,
    title: 'Documentation Support',
    category: 'Process',
    description:
      'Assistance throughout sale deed, registry, mutation and other important documentation processes, ensuring a smooth and hassle-free transaction.',
    bullets: [
      'Sale deed & registry guidance',
      'Mutation support',
      'Document verification',
      'End-to-end documentation assistance',
    ],
  },
  {
    number: '08',
    icon: Handshake,
    title: 'After-Sale Support',
    category: 'Support',
    description:
      'Our assistance continues beyond the transaction for post-sale requirements and guidance.',
    bullets: [
      'Post-sale guidance',
      'Documentation support',
      'Transaction follow-up',
    ],
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
    label: 'Years Experience',
    icon: BadgeCheck,
  },
  {
    value: '450+',
    label: 'Clients Served',
    icon: Users,
  },
  {
    value: '100%',
    label: 'Verified Listings',
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(6);

  const active = expertise[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      id="our-expertise"
      className="
        relative
        overflow-hidden
        bg-[#fbfcfa]
        text-[#172033]
      "
    >
      {/* =========================================================
          BACKGROUND GRID
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#075c49_1px,transparent_1px),linear-gradient(90deg,#075c49_1px,transparent_1px)]
          [background-size:52px_52px]
        "
      />

      {/* =========================================================
          MAIN STAGE
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1550px]
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:min-h-[830px]
          lg:overflow-hidden
          lg:px-12
          lg:py-0

          xl:px-[68px]
        "
      >
        {/* =======================================================
            LAND IMAGE

            Desktop:
            absolute background

            Tablet/Mobile:
            normal flow image AFTER content
        ======================================================= */}

        <div
          className="
            pointer-events-none
            relative
            z-0
            mt-10
            h-[250px]
            w-full
            overflow-hidden
            rounded-[24px]

            sm:h-[300px]
            sm:rounded-[28px]

            md:h-[340px]
            md:mt-12

            lg:absolute
            lg:bottom-0
            lg:left-1/2
            lg:mt-0
            lg:h-[500px]
            lg:w-[calc(100%+140px)]
            lg:-translate-x-1/2
            lg:rounded-none

            xl:h-[520px]
          "
        >
          <Image
            src="/assets/images/land-property.jpg"
            alt="Land property in Satna, Madhya Pradesh"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
            "
            style={{
              filter: 'saturate(0.95) contrast(0.96)',
            }}
          />

          {/* Top fade */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[120px]
              bg-gradient-to-b
              from-[#fbfcfa]
              via-[#fbfcfa]/70
              to-transparent

              md:h-[150px]

              lg:h-[210px]
            "
          />

          {/* Left fade */}

          <div
            className="
              absolute
              inset-y-0
              left-0
              w-[25%]
              bg-gradient-to-r
              from-[#fbfcfa]/80
              via-[#fbfcfa]/25
              to-transparent

              lg:w-[25%]
              lg:from-[#fbfcfa]/90
            "
          />

          {/* Right fade */}

          <div
            className="
              absolute
              inset-y-0
              right-0
              w-[25%]
              bg-gradient-to-l
              from-[#fbfcfa]/80
              via-[#fbfcfa]/25
              to-transparent

              lg:w-[25%]
              lg:from-[#fbfcfa]/90
            "
          />

          {/* Bottom green tint */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#075c49]/25
              via-transparent
              to-transparent
            "
          />

          <div className="absolute inset-0 bg-white/[0.04]" />
        </div>

        {/* =======================================================
            DECORATIVE CIRCLES
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-150px]
            top-[55px]
            z-[1]
            hidden
            h-[570px]
            w-[570px]
            rounded-full
            border
            border-[#075c49]/[0.055]

            lg:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-90px]
            top-[105px]
            z-[1]
            hidden
            h-[470px]
            w-[470px]
            rounded-full
            border
            border-[#d5b45a]/25

            lg:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-180px]
            top-[320px]
            z-[1]
            hidden
            h-[400px]
            w-[400px]
            rounded-full
            border
            border-[#075c49]/[0.04]

            lg:block
          "
        />

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <div
          className="
            relative
            z-20
            w-full

            lg:max-w-[690px]
            lg:pt-[76px]
          "
        >
          {/* Eyebrow */}

          <div
            className="
              flex
              items-center
              gap-3
              mt-3
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#3a4340]

              sm:text-[9px]
            "
          >
            <span className="h-px w-7 bg-[#3a4340] sm:w-9" />

            Why choose us
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              max-w-[690px]
              text-[34px]
              font-semibold
              leading-[0.98]
              tracking-[-0.06em]
              text-[#172033]

              sm:mt-6
              sm:text-[42px]

              md:max-w-[720px]
              md:text-[47px]

              lg:text-[50px]

              xl:text-[52px]
            "
          >
            Experience that makes
            <span className="block text-[#075c49]">
              property decisions clearer.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-[600px]
              text-[11px]
              leading-[1.75]
              text-[#7b8885]

              sm:mt-6
              sm:text-[12px]

              md:text-[13px]
            "
          >
            From property discovery and site visits to documentation
            and transaction support, we bring local knowledge and
            practical guidance to every decision.
          </p>

          {/* =====================================================
              STATS
          ===================================================== */}

          <div
            className="
              mt-8
              grid
              max-w-[665px]
              grid-cols-2
              gap-2.5

              sm:mt-9
              sm:gap-3

              md:grid-cols-4

              lg:mt-9
            "
          >
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="
                    group
                    relative
                    min-w-0
                    overflow-hidden
                    rounded-[15px]
                    border
                    border-[#dce6e1]
                    bg-white/[0.94]
                    px-3.5
                    py-4
                    shadow-[0_12px_35px_rgba(23,32,51,0.05)]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    cursor-pointer
                    sm:rounded-[17px]
                    sm:px-4
                    sm:py-5

                    hover:-translate-y-1
                    hover:border-[#b9cec6]
                    hover:bg-white
                    hover:shadow-[0_20px_50px_rgba(23,32,51,0.10)]
                  "
                >
                  <span
                    className="
                      pointer-events-none
                      absolute
                      right-[-18px]
                      top-[-18px]
                      h-[55px]
                      w-[55px]
                      rounded-full
                      bg-[#e8f1ed]
                      transition-transform
                      duration-500
                      group-hover:scale-[2.2]
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#e8f1ed]
                      text-[#075c49]
                      transition-all
                      duration-300

                      sm:h-9
                      sm:w-9

                      group-hover:bg-[#075c49]
                      group-hover:text-white
                    "
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>

                  <div
                    className="
                      relative
                      mt-4
                      text-[22px]
                      font-semibold
                      leading-none
                      tracking-[-0.05em]
                      text-[#075c49]

                      sm:mt-5
                      sm:text-[25px]
                    "
                  >
                    {stat.value}
                  </div>

                  <p
                    className="
                      relative
                      mt-2
                      truncate
                      text-[6px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-[#899691]

                      sm:text-[7px]
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>


        {/* =======================================================
            EXPERTISE PANEL

            Desktop:
            absolute floating card

            Tablet:
            normal centered card

            Mobile:
            full width card
        ======================================================= */}

        <div
          className="
            relative
            z-40
            mt-8
            w-full
            overflow-hidden
            rounded-[22px]
            border
            border-[#dbe5e0]
            bg-white/[0.96]
            shadow-[0_22px_60px_rgba(23,32,51,0.12)]
            backdrop-blur-xl
            sm:mt-10
            sm:rounded-[25px]

            md:mx-auto
            md:max-w-[760px]

            lg:absolute
            lg:right-[3.5%]
            lg:top-[70px]
            lg:mt-0
            lg:w-[650px]
            lg:max-w-none
            lg:rounded-[27px]

            xl:right-[4.5%]
          "
        >
          {/* =====================================================
              PANEL HEADER
          ===================================================== */}

          <div
            className="
              relative
              flex
              min-h-[58px]
              items-center
              justify-between
              border-b
              text-white
              bg-green-950
              border-[#e4ebe8]
              px-8

              sm:px-10
            "
          >
            <div>
              <p
                className="
                  text-[14px]
                  font-semibold
                  tracking-[-0.025em]
                  text-white

                  sm:text-[16px]
                "
              >
                Areas we help with
              </p>

              <p
                className="
                  mt-0.5
                  text-[6px]
                  font-semibold
                  uppercase
                  font-semibold
                  tracking-[0.18em]
                  text-[#a0aaa7]

                  sm:text-[7px]
                "
              >
                Our expertise
              </p>
            </div>

            <span
              className="
                rounded-full
                bg-[#f5f7f5]
                px-2.5
                py-1.5
                text-[6px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-green-900

                sm:px-3
                sm:text-[7px]
              "
            >
              08 Areas
            </span>
          </div>

          {/* =====================================================
              PANEL BODY

              Desktop:
              list + detail

              Mobile:
              list above detail
          ===================================================== */}

          <div
            className="
              grid
              grid-cols-1

              lg:grid-cols-[305px_1fr]
            "
          >
            {/* ===================================================
                LIST
            =================================================== */}

            <div
              className="
                grid
                grid-cols-2
                border-b
                border-[#e2e9e6]
                bg-white/[0.7]

                sm:grid-cols-2

                lg:block
                lg:border-b-0
                lg:border-r
              "
            >
              {expertise.map((item, index) => {
                const Icon = item.icon;
                const selected = index === activeIndex;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={selected}
                    className={`
                      relative
                      flex
                      min-h-[67px]
                      w-full
                      items-center
                      gap-2
                      border-b
                      border-[#e6ece9]
                      px-3
                      text-left
                      transition-all
                      duration-300

                      sm:gap-3
                      sm:px-3.5

                      lg:h-[68px]
                      lg:min-h-0

                      ${
                        selected
                          ? 'bg-[#075c49] text-white'
                          : 'bg-transparent hover:bg-[#f3f8f5]'
                      }
                    `}
                  >
                    {/* Icon */}

                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border

                        sm:h-9
                        sm:w-9

                        ${
                          selected
                            ? 'border-white/10 bg-[#648f7f] text-white'
                            : 'border-[#dce6e1] bg-[#f8faf9] text-[#075c49]'
                        }
                      `}
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>

                    {/* Text */}

                    <span className="min-w-0 flex-1">
                      <span
                        className={`
                          block
                          truncate
                          text-[10px]
                          font-semibold

                          sm:text-[11px]
                          md:text-[12px]

                          ${
                            selected
                              ? 'text-white'
                              : 'text-[#172033]'
                          }
                        `}
                      >
                        {item.title}
                      </span>

                      <span
                        className={`
                          mt-1
                          block
                          truncate
                          text-[6px]
                          uppercase
                          tracking-[0.1em]

                          sm:text-[7px]
                          md:text-[8px]

                          ${
                            selected
                              ? 'text-white/50'
                              : 'text-[#9ca8a4]'
                          }
                        `}
                      >
                        {item.category}
                      </span>
                    </span>

                    {/* Arrow */}

                    {selected && (
                      <ArrowRight
                        className="
                          hidden
                          h-3.5
                          w-3.5
                          shrink-0

                          sm:block
                        "
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ===================================================
                DETAIL
            =================================================== */}

            <div
              className="
                relative
                min-w-0
                overflow-hidden
                bg-white
                p-4

                sm:p-5

                md:p-6
              "
            >
              {/* Decorative circle */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-80px]
                  top-[190px]
                  hidden
                  h-[260px]
                  w-[260px]
                  rounded-full
                  border
                  border-[#d5b45a]/25

                  sm:block
                "
              />

              {/* Documentation image */}

              <div
                className="
                  relative
                  h-[165px]
                  overflow-hidden
                  rounded-[15px]
                  border
                  border-[#e2e9e6]

                  sm:h-[190px]
                  sm:rounded-[17px]

                  md:h-[215px]
                "
              >
                <Image
                  src="/assets/images/property-documentation.png"
                  alt="Property documentation"
                  fill
                  sizes="(max-width: 768px) 100vw, 390px"
                  className="object-cover object-center"
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/10
                    via-transparent
                    to-transparent
                  "
                />

                {/* Floating icon */}

                <div
                  className="
                    absolute
                    left-3
                    top-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/70
                    bg-[#fffdf5]/95
                    text-[#075c49]
                    shadow-[0_8px_25px_rgba(0,0,0,0.12)]

                    sm:left-4
                    sm:top-4
                    sm:h-11
                    sm:w-11
                  "
                >
                  <ActiveIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </div>

              {/* Category */}

              <p
                className="
                  mt-4
                  text-[6px]
                  font-semibold
                  uppercase
                  tracking-[0.23em]
                  text-[#c59b2f]

                  sm:mt-5
                  sm:text-[7px]
                "
              >
                {active.category}
              </p>

              {/* Title */}

              <h3
                className="
                  mt-1.5
                  text-[22px]
                  font-semibold
                  leading-none
                  tracking-[-0.05em]
                  text-[#172033]

                  sm:text-[25px]

                  md:text-[27px]
                "
              >
                {active.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-2
                  max-w-[600px]
                  text-[11px]
                  leading-[1.7]
                  text-[#7b8885]

                  sm:text-[12px]
                "
              >
                {active.description}
              </p>

              {/* Bullets */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-1
                  gap-2

                  sm:mt-5
                  sm:grid-cols-2
                  sm:gap-x-4
                  sm:gap-y-2.5

                  lg:grid-cols-1
                "
              >
                {active.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="
                      flex
                      items-center
                      gap-2.5
                      text-[10px]
                      font-medium
                      text-[#4e5f58]

                      sm:text-[11px]

                      md:text-[12px]
                    "
                  >
                    <CheckCircle2
                      className="
                        h-3.5
                        w-3.5
                        shrink-0
                        fill-[#075c49]
                        text-white
                      "
                    />

                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Learn More */}

              <button
                type="button"
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#9dbab1]
                  px-4
                  py-2.5
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#075c49]
                  transition-all
                  duration-300

                  sm:mt-6
                  sm:px-5
                  sm:text-[8px]

                  hover:border-[#075c49]
                  hover:bg-[#075c49]
                  hover:text-white
                "
              >
                Learn More

                <ArrowRight
                  className="
                    h-3
                    w-3
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* Bottom decorative circle */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-55px]
                  right-[-55px]
                  hidden
                  h-[135px]
                  w-[135px]
                  rounded-full
                  border
                  border-[#d5b45a]/20

                  sm:block
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-25px]
                  right-[-25px]
                  hidden
                  h-[85px]
                  w-[85px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f7f4e7]

                  sm:flex
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d5b45a]/20
                    text-[#075c49]
                  "
                >
                  <ActiveIcon className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}