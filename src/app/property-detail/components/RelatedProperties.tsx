'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Ruler,
} from 'lucide-react';

const related = [
  {
    id: 2,
    name: 'Commercial Corner Plot',
    location: 'Main Road, Satna',
    price: '₹45 Lakh',
    area: '5000 Sq.ft',
    category: 'Commercial',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1f5bf5666-1766710683578.png',
    imageAlt:
      'Wide commercial corner land plot on busy main road with clear visibility in urban area',
  },
  {
    id: 5,
    name: 'NH-30 Investment Plot',
    location: 'NH-30, Satna',
    price: '₹22 Lakh',
    area: '3200 Sq.ft',
    category: 'Investment',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1f5bf5666-1766710683578.png',
    imageAlt:
      'Prime highway-facing land plot with clear road frontage and development potential',
  },
  {
    id: 6,
    name: 'Budget Residential Plot',
    location: 'New Colony, Satna',
    price: '₹6.5 Lakh',
    area: '1500 Sq.ft',
    category: 'Residential',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1902373b1-1778338412915.png',
    imageAlt:
      'Affordable residential plot in new colony with nearby infrastructure',
  },
];

export default function RelatedProperties() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-20 sm:py-24 lg:py-28">
      {/* Subtle background details */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              <ArrowUpRight className="h-3.5 w-3.5" />
              Explore More
            </div>

            <h2 className="text-section-title font-extrabold leading-[1.05] tracking-tight text-foreground">
              You may also{' '}
              <span className="text-primary">like these.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Explore more land opportunities across Satna that may match your
              requirements and investment plans.
            </p>
          </div>

          <Link
            href="/properties"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-2.5 text-sm font-bold text-foreground shadow-sm transition-all hover:border-primary/20 hover:text-primary"
          >
            View All Properties
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {related.map((property) => (
            <article
              key={property.id}
              className="group overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden sm:h-60">
                <Image
                  src={property.image}
                  alt={property.imageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {/* Category */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                    {property.category}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-xl bg-black/35 px-3 py-2 text-sm font-extrabold text-white backdrop-blur-md">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="line-clamp-1 text-base font-bold text-foreground">
                  {property.name}
                </h3>

                {/* Location */}
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="truncate">{property.location}</span>
                </div>

                {/* Area */}
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                      <Ruler className="h-3.5 w-3.5" />
                    </div>

                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                        Area
                      </p>

                      <p className="text-xs font-bold text-foreground">
                        {property.area}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-medium text-muted-foreground">
                    Satna
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-2.5">
                  <Link
                    href={`/property-detail?id=${property.id}`}
                    className="group/button flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2.5 text-xs font-bold text-white transition-all hover:bg-primary/90 hover:shadow-md"
                  >
                    View Details
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                  </Link>

                  <a
                    href={`https://wa.me/918462097970?text=${encodeURIComponent(
                      `Hello, I am interested in ${property.name} in ${property.location}. Please share more details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${property.name}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.05] text-primary transition-all hover:border-primary/25 hover:bg-primary/[0.1]"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[24px] border border-border/70 bg-card p-5 shadow-sm sm:flex-row sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
              <MapPin className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-bold text-foreground">
                Looking for something specific?
              </p>

              <p className="mt-0.5 text-xs text-muted-foreground">
                Tell us your preferred location, budget, and land type.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Talk to a Broker
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}