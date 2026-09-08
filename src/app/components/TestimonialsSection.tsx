'use client';

import React, { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Quote,
  Star,
} from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

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

export default function TestimonialsSection() {
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
      id="testimonials"
      className="relative overflow-hidden bg-foreground py-20 sm:py-24 lg:py-25"
    >
      {/* ================================================== */}
      {/* BACKGROUND */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-200px] top-20 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-[-200px] bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:mb-14 lg:px-8">

          <div className="animate-on-scroll animate-fade-up">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-black/80">
              <Quote className="h-3.5 w-3.5 text-primary" />
              Client Stories
            </span>
          </div>

          <h2 className="animate-on-scroll animate-fade-up text-section-title font-extrabold leading-[1.05] tracking-tight text-black/80">
            Trusted by people who{' '}
            <span className="text-primary">
              chose with confidence.
            </span>
          </h2>

          <p className="animate-on-scroll animate-fade-up mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/75 sm:text-base">
            Real experiences from buyers, sellers, and investors who worked
            with Jitendra Roy Land Brokers.
          </p>

        </div>

        {/* ================================================== */}
        {/* CONTINUOUS TESTIMONIAL MARQUEE */}
        {/* ================================================== */}

        <div className="relative w-full overflow-hidden">

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-foreground to-transparent sm:w-24 lg:w-40" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-foreground to-transparent sm:w-24 lg:w-40" />

          {/* Track */}
          <div className="testimonial-marquee flex w-max gap-5 py-3">

            {/* First set */}
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={`first-${testimonial.id}`}
                testimonial={testimonial}
              />
            ))}

            {/* Duplicate set for seamless infinite scrolling */}
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={`second-${testimonial.id}`}
                testimonial={testimonial}
              />
            ))}

          </div>
        </div>

       

        {/* ================================================== */}
        {/* CTA */}
        {/* ================================================== */}

        <div className="animate-on-scroll animate-fade-up mt-10 px-4 text-center">

          <p className="mb-2 text-sm text-black/75">
            Looking for your next property opportunity?
          </p>

          <a
            href={`https://wa.me/918462097970?text=${encodeURIComponent(
              'Hello Jitendra Roy Land Brokers, I want to buy land in Satna.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl"
          >
            Start Your Land Journey

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

        </div>

      </div>

      {/* ================================================== */}
      {/* MARQUEE CSS */}
      {/* ================================================== */}

      <style jsx>{`
        .testimonial-marquee {
          animation: testimonial-scroll 45s linear infinite;
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
            animation-duration: 38s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-marquee {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}

/* ================================================== */
/* TESTIMONIAL CARD */
/* ================================================== */

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="group relative flex w-[320px] shrink-0 flex-col rounded-[22px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.075] sm:w-[360px] sm:p-6">

      {/* Quote icon */}
      <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-white/30">
        <Quote className="h-4 w-4" />
      </div>

      {/* Rating */}
      <div className="mb-5 flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-primary text-primary"
          />
        ))}

        <span className="ml-1 text-[10px] font-medium text-black/65">
          5.0
        </span>
      </div>

      {/* Review */}
      <p className="min-h-[120px] text-sm leading-6 text-black/70">
        &ldquo;{testimonial.review}&rdquo;
      </p>

      {/* Property */}
      <div className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-lg border border-primary/10 bg-primary/[0.08] px-2.5 py-1.5 text-[10px] font-medium text-primary">
        <MapPin className="h-3 w-3" />
        {testimonial.property}
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-white/10" />

      {/* Author */}
      <div className="flex items-center gap-3">

        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10">
          <AppImage
            src={testimonial.avatar}
            alt={testimonial.avatarAlt}
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-black/80">
            {testimonial.name}
          </p>

          <p className="mt-0.5 truncate text-[10px] text-black/60">
            {testimonial.location} · {testimonial.date}
          </p>
        </div>

        <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-primary/80" />

      </div>

    </article>
  );
}