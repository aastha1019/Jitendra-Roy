'use client';

import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

import {
  ArrowRight,
  Building2,
  MapPin,
  Search,
  Sparkles,
} from 'lucide-react';

const discoveryItems = [
  {
    label: 'Location',
    value: 'Satna & Madhya Pradesh',
    icon: MapPin,
  },
  {
    label: 'Property',
    value: 'Residential, Agricultural',
    icon: Building2,
  },
  {
    label: 'Looking for',
    value: 'Land Opportunities',
    icon: Sparkles,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAF8]">

      {/* =====================================================
          SUBTLE BACKGROUND PATTERN
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.32]
        "
      >
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[650px]
            w-[650px]
            rounded-full
            border
            border-[#064E3B]/[0.07]
          "
        />

        <div
          className="
            absolute
            -left-24
            -top-24
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#064E3B]/[0.06]
          "
        />

        <div
          className="
            absolute
            -right-52
            top-[180px]
            h-[700px]
            w-[700px]
            rounded-full
            border
            border-[#C59B27]/[0.07]
          "
        />
      </div>

      {/* =====================================================
          HERO WRAPPER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1240px]
          px-5
          pb-16
        
          sm:px-8
          sm:pt-12
          lg:px-6
          lg:pb-0
        
        "
      >

        {/* =================================================
            HERO INTRO
        ================================================== */}

        <div className="mx-auto max-w-[820px] text-center">

          {/* Eyebrow */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#0F766E]
              sm: pt-12
            "
          >
            {/* <span className="h-px w-6 bg-[#C59B27]" /> */}

            Trusted Land Brokerage

            {/* <span className="h-px w-6 bg-[#C59B27]" /> */}
          </div>

          {/* Heading */}
          <h1
            className="
              text-[38px]
              font-bold
              leading-[1.08]
              tracking-[-0.045em]
              text-[#111827]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[62px]
            "
          >
            Discover and invest in
            <br />

            <span className="text-[#064E3B]">
              land with confidence.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-[680px]
              text-[14px]
              leading-6
              text-[#6B7280]
              sm:text-[15px]
              sm:leading-7
            "
          >
            Explore carefully selected residential, agricultural and
            commercial land opportunities across Satna and Madhya Pradesh —
            supported by local expertise and transparent guidance.
          </p>

          {/* =================================================
              ACTIONS
          ================================================== */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >
            <Link
              href="/properties"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-[7px]
                bg-[#064E3B]
                px-5
                py-3
                text-[13px]
                font-semibold
                text-white
                shadow-[0_4px_14px_rgba(6,78,59,0.14)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#053F30]
              "
            >
              Explore Properties

              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>

            <a
              href="https://wa.me/918462097970?text=Hello%20Jitendra%20Roy%20Land%20Brokers%2C%20I%20would%20like%20to%20know%20more%20about%20your%20land%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-[7px]
                border
                border-[#D1D5DB]
                bg-white
                px-5
                py-3
                text-[13px]
                font-semibold
                text-[#064E3B]
                transition-all
                duration-200
                hover:border-[#064E3B]/30
                hover:bg-[#F8FAF8]
              "
            >
              Book a Site Visit
            </a>
          </div>

        </div>

        {/* =====================================================
            MAIN LAND IMAGE
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-10
            max-w-[1120px]
            sm:mt-12
            lg:mt-14
          "
        >

          {/* Image container */}
          <div
            className="
              relative
              aspect-[16/8.2]
              overflow-hidden
              rounded-[14px]
              bg-[#DDE7E1]
              shadow-[0_18px_50px_-15px_rgba(17,24,39,0.18)]
              sm:rounded-[16px]
            "
          >
            <AppImage
              src="https://images.unsplash.com/photo-1594928635573-292d47012c42"
              alt="Agricultural land and countryside"
              fill
              priority
              className="
                object-cover
                object-center
                transition-transform
                duration-700
                hover:scale-[1.02]
              "
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 90vw,
                1120px
              "
            />

            {/* Very subtle image overlay */}
            <div
              className="
                absolute
                inset-0
                bg-[#022C22]/[0.10]
              "
            />

            {/* =================================================
                IMAGE TEXT
            ================================================== */}

            <div
              className="
                absolute
                inset-x-0
                top-1/2
                -translate-y-1/2
                px-5
                text-center
              "
            >
              <p
                className="
                  text-[13px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/85
                  drop-shadow-sm
                "
              >
                Land opportunities, made simpler
              </p>

              <h2
                className="
                  mt-2
                  text-xl
                  font-bold
                  tracking-[-0.025em]
                  text-white
                  drop-shadow-md
                  sm:text-2xl
                  md:text-3xl
                "
              >
                See the potential in every piece of land.
              </h2>
            </div>

            {/* =================================================
                LOCATION BADGE
            ================================================== */}

            <div
              className="
                absolute
                left-4
                top-4
                flex
                items-center
                gap-2
                rounded-[7px]
                border
                border-white/20
                bg-[#022C22]/60
                px-3
                py-2
                text-white
                backdrop-blur-sm
                sm:left-5
                sm:top-5
              "
            >
              <MapPin
                size={14}
                strokeWidth={1.8}
                className="text-[#E5C85A]"
              />

              <span className="text-[10px] font-semibold sm:text-9px]">
                Satna, Madhya Pradesh
              </span>
            </div>

            

          </div>

          {/* =================================================
              DISCOVERY BAR
          ================================================== */}

          <div
            className="
              relative
               bottom-44
              z-20
              mx-4
              -mt-5
              rounded-[40px]
              border
               border-white/20
               text-white
              
              shadow-[0_12px_35px_-10px_rgba(17,24,39,0.18)]
              sm:mx-8
              lg:mx-12
              sm:display: hidden
            
            "
          >

            <div className="flex flex-col lg:flex-row">

              {/* Discovery items */}
              <div
                className="
                  grid
                  flex-1
                  grid-cols-1
                  divide-y
                  divide-[#E5E7EB]
                  sm:grid-cols-3
                  sm:divide-x
                  sm:divide-y-0
                "
              >
                {discoveryItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href="/properties"
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3.5
                        transition-colors
                        
                        sm:px-5
                      "
                    >
                      <span
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-[6px]
                          bg-[#F0F5F2]
                          text-[#064E3B]
                        "
                      >
                        <Icon
                          size={15}
                          strokeWidth={1.8}
                        />
                      </span>

                      <span className="min-w-0 text-left">
                        <span
                          className="
                            block
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.1em]
                            text-[#white]/[0.75]
                          "
                        >
                          {item.label}
                        </span>

                        <span
                          className="
                            mt-0.5
                            block
                            truncate
                            text-[11px]
                            font-semibold
                              text-[#white]/[0.75]
                          "
                        >
                          {item.value}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Explore button */}
              <Link
                href="/properties"
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  bg-[#064E3B]
                  px-6
                  py-4
                  text-[12px]
                  font-semibold
                    rounded-[30px]
                  text-white
                  transition-colors
                  hover:bg-[#053F30]
                  lg:min-w-[145px]
                "
              >
                <Search
                  size={15}
                  strokeWidth={1.9}
                />

                Explore Land
              </Link>

            </div>
          </div>

        </div>

       

      </div>
    </section>
  );
}