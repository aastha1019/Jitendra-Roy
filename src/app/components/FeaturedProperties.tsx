'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  Ruler,
  Sparkles,
} from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

const properties = [
  {
    id: 1,
    name: 'Unchehara Residential Plot',
    location: 'Unchehara, Satna',
    price: '₹450–₹500',
    priceUnit: '/ Sq.ft',
    area: '2400 Sq.ft',
    roadWidth: '40 m from Highway',
    category: 'Residential',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1d1f5eda2-1776279743397.png',
    imageAlt:
      'Residential land plot in Unchehara near railway station and highway',
    verified: true,
    featured: true,
    amenities: ['Near Railway Station', 'Highway Access', 'Road Access'],
    description:
      'Residential plot in Unchehara, located near the railway station and approximately 40 meters from the highway.',
  },
  {
    id: 2,
    name: 'Unchehara Maihar Main Road Plot',
    location: 'Unchehara Maihar Main Road, Satna',
    price: '₹800',
    priceUnit: '/ Sq.ft',
    area: '5000 Sq.ft',
    roadWidth: 'Main Road',
    category: 'Commercial',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1eaccd3d3-1765303391585.png',
    imageAlt: 'Main road property plot in Unchehara',
    verified: true,
    featured: true,
    amenities: ['Main Road', 'Water', 'Electricity'],
    description:
      'Prime property located on Unchehara Main Road, suitable for commercial or investment purposes.',
  },
  // {
  //   id: 3,
  //   name: 'Jignahat Unchehara Main Road Plot',
  //   location: 'Jignahat Unchehara, Satna',
  //   price: '₹650',
  //   priceUnit: '/ Sq.ft',
  //   area: '100 ft Frontage',
  //   roadWidth: 'Main Road',
  //   category: 'Commercial',
  //   image:
  //     'https://img.rocket.new/generatedImages/rocket_gen_img_1ae1933df-1781417520026.png',
  //   imageAlt: 'Main road plot at Jignahat Unchehara',
  //   verified: true,
  //   featured: true,
  //   amenities: ['Main Road', '100 ft Frontage', 'High Visibility'],
  //   description:
  //     'Main road property in Jignahat Unchehara with approximately 100 ft frontage.',
  // },
  {
    id: 4,
    name: 'Jignahat Unchehara Premium Plot',
    location: 'Jignahat Unchehara, Satna',
    price: '₹1,500',
    priceUnit: '/ Sq.ft',
    area: 'Available on Request',
    roadWidth: 'Main Road',
    category: 'Premium',
    image:
      'https://images.unsplash.com/photo-1641060872876-02c63ecd0e38',
    imageAlt:
      'Premium land plot on main road in Jignahat Unchehara',
    verified: true,
    featured: true,
    amenities: ['Main Road', 'Prime Location', 'High Visibility'],
    description:
      'Premium property available on the main road at Jignahat Unchehara.',
  },
];

const categoryStyles: Record<string, string> = {
  Residential: 'bg-white/95 text-primary',
  Commercial: 'bg-white/95 text-primary',
  Premium: 'bg-white/95 text-primary',
  Agricultural: 'bg-white/95 text-primary',
  'Farm House': 'bg-white/95 text-primary',
  Investment: 'bg-white/95 text-primary',
};

export default function FeaturedProperties() {
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

    const items =
      sectionRef.current?.querySelectorAll('.animate-on-scroll');

    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="properties"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-20 h-[320px] w-[320px] rounded-full bg-primary/[0.035] blur-3xl" />
        <div className="absolute right-[-180px] bottom-10 h-[320px] w-[320px] rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* -------------------------------------------------- */}
        {/* HEADER */}
        {/* -------------------------------------------------- */}

        <div className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="animate-on-scroll animate-fade-up max-w-2xl">

            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-3.5 py-1.5">
              <Building2 className="h-3.5 w-3.5 text-primary" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                Featured Properties
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-section-title font-extrabold leading-[1.05] tracking-tight text-foreground">
              Find land that fits{' '}
              <span className="text-primary">
                your vision.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Explore handpicked properties across Satna and Madhya Pradesh,
              verified for location, documentation, and investment potential.
            </p>
          </div>

          {/* View all */}
          <div className="animate-on-scroll animate-fade-up">
            <Link
              href="/properties"
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md"
            >
              View All Properties

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* -------------------------------------------------- */}
        {/* PROPERTY GRID */}
        {/* -------------------------------------------------- */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <article
              key={property.id}
              className="animate-on-scroll animate-fade-up group overflow-hidden rounded-[22px] border border-border/70 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              style={{
                animationDelay: `${index * 90}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-[230px] overflow-hidden bg-muted sm:h-[240px]">

                <AppImage
                  src={property.image}
                  alt={property.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {/* Top badges */}
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    {/* <span
                      className={`rounded-lg px-2.5 py-1 text-[11px] font-bold shadow-sm ${
                        categoryStyles[property.category] ||
                        'bg-white/95 text-primary'
                      }`}
                    >
                      {property.category}
                    </span> */}

                    {/* {property.verified && (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                        <CheckCircle2 className="h-3 w-3" />
                        Verified
                      </span>
                    )} */}
                  </div>
{/* 
                  {property.featured && (
                    <span className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </span>
                  )} */}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-extrabold tracking-tight text-white">
                      {property.price}
                    </span>

                    <span className="text-xs font-medium text-white/80">
                      {property.priceUnit}
                    </span>
                  </div>
                </div>

                {/* Image expand icon */}
                <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/35 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Title */}
                <h3 className="line-clamp-1 text-[17px] font-bold tracking-tight text-foreground">
                  {property.name}
                </h3>

                {/* Location */}
                <div className="mt-2 flex items-start gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                  <span className="line-clamp-1">
                    {property.location}
                  </span>
                </div>

                {/* Property stats */}
                <div className="my-4 grid grid-cols-2 overflow-hidden rounded-xl border border-border/70 bg-muted/30">

                  <div className="flex items-center gap-2 border-r border-border/70 px-3 py-3">
                    <Maximize2 className="h-4 w-4 text-primary" />

                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        Area
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-foreground">
                        {property.area}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-3">
                    <Ruler className="h-4 w-4 text-primary" />

                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        Road
                      </p>

                      <p className="mt-0.5 line-clamp-1 text-xs font-semibold text-foreground">
                        {property.roadWidth}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {property.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-md bg-muted px-2 py-1 text-[10px] font-medium text-muted-foreground"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">

                  <Link
                    href={`/property-detail?id=${property.id}`}
                    className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90"
                  >
                    View Details

                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </Link>

                  <a
                    href={`https://wa.me/918462097970?text=${encodeURIComponent(
                      `Hello Jitendra Roy Land Brokers, I am interested in ${property.name} at ${property.location}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp inquiry for ${property.name}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.06] hover:text-primary"
                  >
                  <MessageCircle className="h-4 w-4" />
                    
                  </a>

                  <a
                    href="tel:+918462097970"
                    aria-label="Call now"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.06] hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                  </a>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* -------------------------------------------------- */}
        {/* TRUST STRIP */}
        {/* -------------------------------------------------- */}

        {/* <div className="animate-on-scroll animate-fade-up mt-10 rounded-2xl border border-border/70 bg-card px-5 py-4 shadow-sm sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/[0.08]">
                <CheckCircle2 className="h-4 w-4 text-primary" />
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  Verified property listings
                </p>

                <p className="text-xs text-muted-foreground">
                  Location & documentation checked before listing.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Need help choosing land?
              <ArrowUpRight className="h-4 w-4" />
            </Link>

          </div>
        </div> */}

      </div>
    </section>
  );
}