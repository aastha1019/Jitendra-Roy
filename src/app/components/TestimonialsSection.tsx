'use client';

import React, { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Quote,
  Star,
  Users,
} from 'lucide-react';

import AppImage from '@/components/ui/AppImage';

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Tiwari',
    location: 'Satna, MP',
    rating: 5,
    review:
      'Jitendra bhai helped me find the perfect residential plot in Dhawari within my budget of ₹10 lakh. All documents were verified and registration was done in just 2 days. Highly recommended!',
    property: 'Residential Plot, Dhawari',
    avatar:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1b48d0a1c-1763296743407.png',
    avatarAlt:
      'Indian middle-aged man smiling in business casual attire',
    date: 'January 2025',
  },

  {
    id: 2,
    name: 'Sunita Patel',
    location: 'Rewa, MP',
    rating: 5,
    review:
      'We were looking for agricultural land near Satna. Jitendra Roy Land Brokers showed us 5 properties and helped us select the best one with canal access. The process was smooth and transparent.',
    property: 'Agricultural Land, Ramnagar',
    avatar:
      'https://images.unsplash.com/photo-1624354865912-fdf2f0e09a21',
    avatarAlt:
      'Indian woman in her forties with warm smile in traditional attire',
    date: 'March 2025',
  },

  {
    id: 3,
    name: 'Amit Gupta',
    location: 'Jabalpur, MP',
    rating: 5,
    review:
      'I was investing from Jabalpur and was worried about fraud. Jitendra ji personally verified all documents and arranged a site visit. Got a great commercial plot at the right price. Excellent service!',
    property: 'Commercial Plot, NH-30',
    avatar:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1b5906c02-1763296133413.png',
    avatarAlt:
      'Young Indian professional man with confident expression in formal shirt',
    date: 'April 2025',
  },

  {
    id: 4,
    name: 'Meena Shukla',
    location: 'Satna, MP',
    rating: 5,
    review:
      'After retirement we wanted to sell our old agricultural land. Jitendra bhai got us the best market price and handled all the mutation and registry work. Very honest and professional.',
    property: 'Agricultural Land Sale',
    avatar:
      'https://images.unsplash.com/photo-1632110287190-7b6807b7ad2e',
    avatarAlt:
      'Senior Indian woman with gentle expression wearing saree',
    date: 'May 2025',
  },

  {
    id: 5,
    name: 'Vikram Singh Parihar',
    location: 'Bhopal, MP',
    rating: 5,
    review:
      'Invested in a farm house plot on Maihar Road based on their recommendation. The area has grown 40% in 2 years. Best investment decision! Their market knowledge is unmatched.',
    property: 'Farm House Plot, Maihar Road',
    avatar:
      'https://img.rocket.new/generatedImages/rocket_gen_img_110ce9b39-1763295413245.png',
    avatarAlt:
      'Indian businessman in formal suit with professional demeanor',
    date: 'June 2025',
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

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
      },
    );

    const elements =
      section.querySelectorAll('.testimonial-reveal');

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`
        relative
        overflow-hidden
        bg-[#f7faf8]
        py-14

        sm:py-16

        lg:py-[76px]
      `}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Technical grid */}

        <div
          className={`
            absolute
            inset-0
            opacity-[0.45]
          `}
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,92,73,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,92,73,0.035) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage:
              'linear-gradient(to bottom, black, transparent 85%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black, transparent 85%)',
          }}
        />

        {/* Left green glow */}

        <div
          className={`
            absolute
            -left-48
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#075c49]/[0.035]
            blur-[100px]
          `}
        />

        {/* Right gold glow */}

        <div
          className={`
            absolute
            -right-48
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#d5b45a]/[0.045]
            blur-[100px]
          `}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className={`
          relative
          mx-auto
          max-w-[1500px]
        `}
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className={`
            testimonial-reveal
            mx-auto
            max-w-[760px]
            px-5
            text-center
            opacity-0

            sm:px-8
          `}
        >
          {/* Eyebrow */}

          <div
            className={`
              mb-4
              flex
              items-center
              justify-center
              gap-3
            `}
          >
            <span
              className={`
                h-px
                w-8
                bg-[#075c49]/40

                sm:w-10
              `}
            />

            <span
              className={`
                inline-flex
                items-center
                gap-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#075c49]

                sm:text-[10px]
              `}
            >
              <Quote className="h-3.5 w-3.5" />

              Client Stories
            </span>

            <span
              className={`
                h-px
                w-8
                bg-[#075c49]/40

                sm:w-10
              `}
            />
          </div>

          {/* Heading */}

          <h2
            className={`
              text-[30px]
              font-semibold
              leading-[1.08]
              tracking-[-0.045em]
              text-[#172033]

              sm:text-[38px]

              lg:text-[44px]
            `}
          >
            Real people.
            <br className="sm:hidden" />

            <span className="text-[#075c49]">
              {' '}
              Real property journeys.
            </span>
          </h2>

          {/* Description */}

          <p
            className={`
              mx-auto
              mt-4
              max-w-[620px]
              text-[12px]
              leading-6
              text-[#71807b]

              sm:text-[14px]
            `}
          >
            Honest experiences from people who trusted us with
            buying, selling, and investing in land.
          </p>

          {/* Rating */}

          <div
            className={`
              mt-5
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#dce7e2]
              bg-white
              px-4
              py-2
              shadow-[0_8px_25px_rgba(7,92,73,0.05)]
            `}
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`
                    h-3.5
                    w-3.5
                    fill-[#d5b45a]
                    text-[#d5b45a]
                  `}
                />
              ))}
            </div>

            <span className="h-4 w-px bg-[#dce7e2]" />

            <span
              className={`
                text-[11px]
                font-bold
                text-[#172033]
              `}
            >
              5.0
            </span>

            <span
              className={`
                text-[10px]
                text-[#7f8c88]
              `}
            >
              Client rating
            </span>
          </div>
        </div>

        {/* ===================================================
            CAROUSEL
        ==================================================== */}

        <div
          className={`
            testimonial-reveal
            relative
            mt-9
            opacity-0

            sm:mt-11
          `}
        >
          {/* Left fade */}

          <div
            className={`
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-8
              bg-gradient-to-r
              from-[#f7faf8]
              to-transparent

              sm:w-16

              lg:w-28
            `}
          />

          {/* Right fade */}

          <div
            className={`
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-8
              bg-gradient-to-l
              from-[#f7faf8]
              to-transparent

              sm:w-16

              lg:w-28
            `}
          />

          {/* Carousel viewport */}

          <div
            className={`
              overflow-hidden
              py-4
            `}
          >
            <div
              className={`
                testimonial-marquee
                flex
                w-max
                gap-4
                px-4

                sm:gap-5
              `}
            >
              {/* Original cards */}

              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={`first-${testimonial.id}`}
                  testimonial={testimonial}
                />
              ))}

              {/* Duplicate cards for infinite loop */}

              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={`second-${testimonial.id}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

        <div
          className={`
            testimonial-reveal
            mx-5
            mt-7
            flex
            flex-col
            gap-4
            rounded-[18px]
            border
            border-[#dbe7e2]
            bg-white
            px-4
            py-4
            shadow-[0_10px_35px_rgba(7,92,73,0.05)]
            opacity-0

            sm:mx-8
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-5

            lg:mx-12
          `}
        >
          {/* CTA content */}

          <div
            className={`
              flex
              items-center
              gap-3
            `}
          >
            <div
              className={`
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#e7f2ed]
                text-[#075c49]
              `}
            >
              <Users className="h-4 w-4" />
            </div>

            <div>
              <p
                className={`
                  text-[11px]
                  font-semibold
                  text-[#172033]

                  sm:text-[12px]
                `}
              >
                Looking for your next property?
              </p>

              <p
                className={`
                  mt-0.5
                  text-[9px]
                  text-[#87938f]

                  sm:text-[10px]
                `}
              >
                Let&apos;s help you find the right opportunity.
              </p>
            </div>
          </div>

          {/* CTA button */}

          <a
            href={`https://wa.me/918462097970?text=${encodeURIComponent(
              'Hello Jitendra Roy Land Brokers, I want to buy land in Satna.',
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group
              inline-flex
              w-full
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#075c49]
              px-5
              py-2.5
              text-[10px]
              font-semibold
              text-white
              shadow-[0_7px_18px_rgba(7,92,73,0.16)]
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#064d3e]

              sm:w-auto
              sm:text-[11px]
            `}
          >
            Start Your Land Journey

            <ArrowUpRight
              className={`
                h-3.5
                w-3.5
                transition-transform
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              `}
            />
          </a>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx>{`
        .testimonial-reveal {
          transform: translateY(20px);
          transition:
            opacity 700ms ease,
            transform 700ms ease;
        }

        .testimonial-reveal.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .testimonial-marquee {
          animation: testimonial-scroll 48s linear infinite;
          will-change: transform;
        }

        .testimonial-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes testimonial-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        @media (max-width: 640px) {
          .testimonial-marquee {
            animation-duration: 40s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-marquee {
            animation-play-state: paused;
          }

          .testimonial-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article
      className={`
        group
        relative
        flex
        w-[305px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-[20px]
        border
        border-[#dce7e2]
        bg-white
        p-5
        shadow-[0_8px_28px_rgba(23,32,51,0.045)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#075c49]/25
        hover:shadow-[0_18px_42px_rgba(7,92,73,0.10)]

        sm:w-[345px]
        sm:p-5.5
      `}
    >
      {/* ===================================================
          TOP ACCENT
      ==================================================== */}

      <div
        className={`
          absolute
          left-0
          right-0
          top-0
          h-[3px]
          bg-gradient-to-r
          from-[#075c49]
          via-[#d5b45a]
          to-transparent
          opacity-80
        `}
      />

      {/* ===================================================
          QUOTE ICON
      ==================================================== */}

      <div
        className={`
          absolute
          right-4
          top-4
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-[#edf5f1]
          text-[#075c49]
          transition-all
          duration-300

          group-hover:bg-[#075c49]
          group-hover:text-white
        `}
      >
        <Quote className="h-3.5 w-3.5" />
      </div>

      {/* ===================================================
          RATING
      ==================================================== */}

      <div
        className={`
          flex
          items-center
          gap-2
        `}
      >
        <div className="flex items-center gap-0.5">
          {Array.from({
            length: testimonial.rating,
          }).map((_, index) => (
            <Star
              key={index}
              className={`
                h-3.5
                w-3.5
                fill-[#d5b45a]
                text-[#d5b45a]
              `}
            />
          ))}
        </div>

        <span
          className={`
            text-[10px]
            font-semibold
            text-[#7d8985]
          `}
        >
          {testimonial.rating}.0
        </span>
      </div>

      {/* ===================================================
          REVIEW
      ==================================================== */}

      <p
        className={`
          mt-4
          min-h-[112px]
          pr-5
          text-[12px]
          leading-[1.75]
          text-[#56645f]

          sm:text-[13px]
        `}
      >
        &ldquo;{testimonial.review}&rdquo;
      </p>

      {/* ===================================================
          PROPERTY TAG
      ==================================================== */}

      <div className="mt-4">
        <span
          className={`
            inline-flex
            max-w-full
            items-center
            gap-1.5
            rounded-full
            border
            border-[#dbe7e2]
            bg-[#f3f8f5]
            px-2.5
            py-1.5
            text-[8px]
            font-semibold
            text-[#075c49]

            sm:text-[9px]
          `}
        >
          <MapPin className="h-3 w-3 shrink-0" />

          <span className="truncate">
            {testimonial.property}
          </span>
        </span>
      </div>

      {/* ===================================================
          DIVIDER
      ==================================================== */}

      <div
        className={`
          my-4
          h-px
          bg-[#e8eeeb]
        `}
      />

      {/* ===================================================
          AUTHOR
      ==================================================== */}

      <div
        className={`
          flex
          items-center
          gap-3
        `}
      >
        {/* Avatar */}

        <div
          className={`
            h-9
            w-9
            shrink-0
            overflow-hidden
            rounded-full
            border-2
            border-white
            bg-[#edf3f0]
            shadow-[0_3px_12px_rgba(23,32,51,0.10)]
          `}
        >
          <AppImage
            src={testimonial.avatar}
            alt={testimonial.avatarAlt}
            width={36}
            height={36}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Name */}

        <div className="min-w-0">
          <p
            className={`
              truncate
              text-[11px]
              font-semibold
              text-[#172033]

              sm:text-[12px]
            `}
          >
            {testimonial.name}
          </p>

          <p
            className={`
              mt-0.5
              truncate
              text-[8px]
              text-[#899590]

              sm:text-[9px]
            `}
          >
            {testimonial.location} · {testimonial.date}
          </p>
        </div>

        {/* Verified */}

        <div
          className={`
            ml-auto
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#e9f4ef]
            text-[#075c49]
          `}
        >
          <CheckCircle2 className="h-3.5 w-3.5" />
        </div>
      </div>
    </article>
  );
}