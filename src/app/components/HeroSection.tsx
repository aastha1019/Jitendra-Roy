'use client';

import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import {
  ArrowRight,
  Handshake,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

const expertisePoints = [
  {
    icon: MapPin,
    title: 'Local Market',
    subtitle: 'Knowledge',
  },
  {
    icon: ShieldCheck,
    title: 'Property & Document',
    subtitle: 'Guidance',
  },
  {
    icon: Handshake,
    title: 'Transaction',
    subtitle: 'Support',
  },
];

const stats = [
  {
    value: '500+',
    label: 'Properties Sold',
  },
  {
    value: '15+',
    label: 'Years of Experience',
  },
  {
    value: '450+',
    label: 'Clients Served',
  },
  {
    value: '100%',
    label: 'Verified Listings',
  },
];

const whatsappUrl =
  'https://wa.me/918462097970?text=Hello%20Jitendra%20Roy%20Land%20Brokers%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafcf9]">

      {/* =====================================================
          HERO WRAPPER
      ====================================================== */}

      <div
        className="
          relative
          w-full
          lg:mx-auto
          lg:max-w-full

        "
      >

        <div
          className="
            relative
            w-full
            overflow-hidden
            lg:grid
            lg:min-h-[590px]
            lg:grid-cols-[48%_52%]
          "
        >

          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-20
              flex
              items-center
              bg-[#fafcf9]
              px-5
              py-10
              text-center
              sm:px-8
              sm:py-12
              md:px-10
              md:py-14
              lg:px-0
              lg:py-12
              lg:pr-10
              lg:pl-[5%]
              lg:text-left
              xl:pr-16
            "
          >

            <div
              className="
                mx-auto
                w-full
                max-w-[650px]
                lg:mx-0
              "
            >

              {/* =============================================
                  LABEL
              ============================================== */}

              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#e9f2ed]
                  px-3.5
                  py-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#075c49]
                  sm:mb-6
                  sm:px-4
                  sm:text-[10px]
                "
              >

                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                  "
                >
                  <MapPin
                    size={11}
                    strokeWidth={1.8}
                  />
                </span>

                Our Expertise

              </div>


              {/* =============================================
                  HEADING
              ============================================== */}

              <h1
                className="
                  mx-auto
                  max-w-[650px]
                  text-[35px]
                  font-semibold
                  leading-[1.04]
                  tracking-[-0.05em]
                  text-[#172033]
                  sm:text-[46px]
                  md:text-[54px]
                  lg:mx-0
                  lg:text-[52px]
                  xl:text-[54px]
                "
              >
                Local expertise for

                <span className="block text-[#075c49]">
                  better property decisions.
                </span>
              </h1>


              {/* =============================================
                  DESCRIPTION
              ============================================== */}

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[590px]
                  text-[13px]
                  leading-6
                  text-[#707b8c]
                  sm:mt-6
                  sm:text-[14px]
                  sm:leading-7
                  lg:mx-0
                "
              >
                From property discovery and site visits to documentation
                and transaction support, we help you navigate the
                land-buying process with clear, practical guidance.
              </p>


              {/* =============================================
                  CTA BUTTONS

                  Mobile:
                  always one row
              ============================================== */}

              <div
                className="
                  mx-auto
                  mt-6
                  flex
                  w-full
                  max-w-[470px]
                  flex-row
                  gap-2
                  sm:mt-7
                  sm:gap-3
                  lg:mx-0
                  lg:w-auto
                "
              >

                <Link
                  href="/expertise"
                  className="
                    group
                    inline-flex
                    min-h-[45px]
                    flex-1
                    items-center
                    justify-center
                    gap-1.5
                    rounded-[7px]
                    bg-[#075c49]
                    px-3
                    py-3
                    text-[11px]
                    font-semibold
                    text-white
                    shadow-[0_7px_18px_rgba(7,92,73,0.14)]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#064d3d]
                    sm:min-h-[48px]
                    sm:px-5
                    sm:text-[12px]
                    lg:flex-none
                  "
                >
                  <span className="whitespace-nowrap">
                    Explore Our Expertise
                  </span>

                  <ArrowRight
                    size={14}
                    strokeWidth={1.8}
                    className="
                      shrink-0
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </Link>


                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-[45px]
                    flex-1
                    items-center
                    justify-center
                    gap-1.5
                    rounded-[7px]
                    border
                    border-[#78a79b]
                    bg-white
                    px-3
                    py-3
                    text-[11px]
                    font-semibold
                    text-[#075c49]
                    transition-all
                    duration-200
                    hover:border-[#075c49]
                    hover:bg-[#f3f8f5]
                    sm:min-h-[48px]
                    sm:px-5
                    sm:text-[12px]
                    lg:flex-none
                  "
                >
                  <span className="whitespace-nowrap">
                    Talk to Our Team
                  </span>

                  <Handshake
                    size={14}
                    strokeWidth={1.7}
                    className="shrink-0"
                  />
                </a>

              </div>

              {/* =====================================================
                  EXPERTISE POINTS
              ====================================================== */}

              <div
                className="
                  mx-auto
                  mt-8
                  w-full
                  max-w-[620px]
                  border-t
                  border-[#dfe7e2]
                  pt-5
                  sm:mt-9
                  sm:pt-6
                  lg:mx-0
                "
              >
                <div
                  className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                  "
                >

                  {expertisePoints.map((item, index) => {
                    const Icon = item.icon;

                    const isLast = index === expertisePoints.length - 1;

                    return (
                      <div
                        key={item.title}
                        className={`
                          group
                          relative
                          flex
                          min-h-[66px]
                          items-center
                          justify-center
                          gap-3
                          px-2
                          py-2
                          transition-transform
                          duration-200
                          hover:-translate-y-0.5


                          ${
                            index === 1
                              ? 'border-l border-[#e1e8e4]'
                              : ''
                          }

                          ${
                            isLast
                              ? 'col-span-2 mt-2 border-t border-[#e1e8e4] pt-4 sm:col-span-1 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-2'
                              : ''
                          }

                          sm:px-4
                          sm:first:pl-0
                          sm:last:pr-0
                        `}
                      >

                        {/* =============================================
                            ICON
                        ============================================== */}

                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#d8e7df]
                            bg-[#f0f6f2]
                            text-[#075c49]
                            transition-all
                            duration-200
                            group-hover:border-[#b8d3c7]
                            group-hover:bg-[#e6f1eb]
                            sm:h-10
                            sm:w-10
                          "
                        >
                          <Icon
                            size={18}
                            strokeWidth={1.7}
                          />
                        </div>


                        {/* =============================================
                            CONTENT
                        ============================================== */}

                        <div className="min-w-0 text-left">

                          {/* Number + title */}

                          <div
                            className="
                              flex
                              items-baseline
                              gap-1.5
                            "
                          >

                            <p
                              className="
                                truncate
                                text-[10px]
                                font-semibold
                                leading-[1.35]
                                text-[#26313b]
                                sm:text-[11px]
                              "
                            >
                              {item.title}
                            </p>

                          </div>


                          {/* Subtitle */}

                          <p
                            className="
                              mt-0.5
                              text-[9px]
                              leading-[1.4]
                              text-[#78847f]
                              sm:text-[10px]
                            "
                          >
                            {item.subtitle}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>
              </div>

            </div>

          </div>


          {/* =================================================
              IMAGE
          ================================================== */}

          <div
            className="
              relative
              h-[320px]
              w-full
              overflow-hidden
              sm:h-[390px]
              md:h-[460px]
              lg:h-auto
            "
          >

            <AppImage
              src="https://images.unsplash.com/photo-1594928635573-292d47012c42"
              alt="Land and countryside in Satna"
              fill
              priority
              sizes="
                (max-width: 1023px) 100vw,
                52vw
              "
              className="
                object-cover
                object-center
              "
            />


            {/* Image tint */}

            <div
              className="
                absolute
                inset-0
                bg-[#16483b]/[0.08]
              "
            />


            {/* =============================================
                DESKTOP CURVE ONLY
            ============================================== */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-px
                hidden
                w-[145px]
                bg-[#fafcf9]
                [clip-path:ellipse(62%_58%_at_0%_50%)]
                lg:block
                xl:w-[160px]
              "
            />


            {/* =============================================
                HANDWRITTEN DETAIL
            ============================================== */}

            <div
              className="
                absolute
                right-6
                top-7
                hidden
                rotate-[-4deg]
                text-right
                text-[#176653]
                lg:block
                xl:right-10
                xl:top-8
              "
            >

              <p
                className="
                  text-[14px]
                  italic
                  leading-5
                  opacity-85
                  xl:text-[15px]
                  [font-family:cursive]
                "
              >
                Right Guidance,
              </p>

              <p
                className="
                  text-[14px]
                  italic
                  leading-5
                  opacity-85
                  xl:text-[15px]
                  [font-family:cursive]
                "
              >
                Better Decisions.
              </p>

              <span
                className="
                  ml-auto
                  mt-1.5
                  block
                  h-px
                  w-24
                  rotate-[-4deg]
                  bg-[#176653]/60
                  xl:w-28
                "
              />

            </div>


            {/* =============================================
                LOCATION
            ============================================== */}

            <div
              className="
                absolute
                bottom-4
                right-4
                flex
                items-center
                gap-2
                rounded-[7px]
                border
                border-white/20
                bg-[#245348]/90
                px-3
                py-2
                text-white
                shadow-lg
                backdrop-blur-sm
                sm:bottom-6
                sm:right-6
              "
            >

              <MapPin
                size={13}
                strokeWidth={1.8}
                className="text-[#d8b85c]"
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  sm:text-[10px]
                  md:text-[11px]
                "
              >
                Satna, Madhya Pradesh
              </span>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}


