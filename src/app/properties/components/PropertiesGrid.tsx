'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Droplets,
  FileCheck2,
  Home,
  Heart,
  MapPin,
  Phone,
  Ruler,
  MessageCircle,
  SlidersHorizontal,
  Sparkles,
  Trees,
  X,
} from 'lucide-react';
import { getWishlist, isInWishlist, toggleWishlist } from '@/lib/wishlist';

const allProperties = [
  {
    id: 1,
    name: 'Green Valley Residential Plot',
    location: 'Dhawari, Satna',
    price: '₹12.5 Lakh',
    priceNum: 1250000,
    area: '2400 Sq.ft',
    roadWidth: '30 ft',
    category: 'Residential',
    purpose: 'Buy',
    water: true,
    verified: true,
    featured: true,
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_16a7af55d-1772541661390.png',
    imageAlt:
      'Flat open residential land plot with clear boundary markings in bright daylight, lush green surroundings',
    amenities: ['Water', 'Electricity', 'Road Access'],
  },
  {
    id: 2,
    name: 'Commercial Corner Plot – Main Road',
    location: 'Main Road, Satna',
    price: '₹45 Lakh',
    priceNum: 4500000,
    area: '5000 Sq.ft',
    roadWidth: '60 ft',
    category: 'Commercial',
    purpose: 'Buy',
    water: true,
    verified: true,
    featured: true,
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1f5bf5666-1766710683578.png',
    imageAlt:
      'Wide commercial corner land plot on busy main road with clear visibility in urban area',
    amenities: ['Water', 'Electricity', 'Highway Access', 'Corner Plot'],
  },
  {
    id: 3,
    name: 'Agricultural Land – Fertile Soil',
    location: 'Ramnagar, Satna',
    price: '₹24 Lakh',
    priceNum: 2400000,
    area: '3 Acres',
    roadWidth: '20 ft',
    category: 'Agricultural',
    purpose: 'Buy',
    water: true,
    verified: true,
    featured: false,
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1ae1933df-1781417520026.png',
    imageAlt:
      'Lush green agricultural farmland with rows of crops under clear blue sky in Madhya Pradesh',
    amenities: ['Bore Well', 'Canal Water', 'Farm Road'],
  },
  {
    id: 4,
    name: 'Farm House Plot – Scenic View',
    location: 'Maihar Road, Satna',
    price: '₹18 Lakh',
    priceNum: 1800000,
    area: '4000 Sq.ft',
    roadWidth: '40 ft',
    category: 'Farm House',
    purpose: 'Buy',
    water: true,
    verified: true,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1641060872876-02c63ecd0e38',
    imageAlt:
      'Scenic farmhouse land plot surrounded by trees and greenery with mountain view in background',
    amenities: ['Scenic View', 'Water', 'Electricity', 'Gated Access'],
  },
  {
    id: 5,
    name: 'NH-30 Frontage Investment Plot',
    location: 'NH-30, Satna',
    price: '₹22 Lakh',
    priceNum: 2200000,
    area: '3200 Sq.ft',
    roadWidth: 'NH Frontage',
    category: 'Investment',
    purpose: 'Buy',
    water: false,
    verified: true,
    featured: true,
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1f5bf5666-1766710683578.png',
    imageAlt:
      'Prime highway-facing land plot with clear road frontage and high development potential',
    amenities: ['Highway Frontage', 'High Growth Zone', 'Power'],
  },
  {
    id: 6,
    name: 'Budget Residential Plot',
    location: 'New Colony, Satna',
    price: '₹6.5 Lakh',
    priceNum: 650000,
    area: '1500 Sq.ft',
    roadWidth: '24 ft',
    category: 'Residential',
    purpose: 'Buy',
    water: true,
    verified: true,
    featured: false,
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1902373b1-1778338412915.png',
    imageAlt:
      'Affordable residential plot in new colony with clear survey marks and nearby infrastructure development',
    amenities: ['Water', 'Electricity', 'Near School'],
  },
  {
    id: 7,
    name: 'Industrial Land – MIDC Zone',
    location: 'Industrial Area, Satna',
    price: '₹85 Lakh',
    priceNum: 8500000,
    area: '8000 Sq.ft',
    roadWidth: '80 ft',
    category: 'Commercial',
    purpose: 'Buy',
    water: true,
    verified: true,
    featured: false,
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_168f844d6-1766507796227.png',
    imageAlt:
      'Large industrial zone land plot with wide road access and utility connections in organized sector',
    amenities: ['3-Phase Power', 'Water', 'Wide Road', 'Industrial Zone'],
  },
  {
    id: 8,
    name: 'Residential Plot – Near Railway',
    location: 'Station Road, Satna',
    price: '₹15 Lakh',
    priceNum: 1500000,
    area: '2000 Sq.ft',
    roadWidth: '30 ft',
    category: 'Residential',
    purpose: 'Buy',
    water: true,
    verified: true,
    featured: false,
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_145c17c5b-1784136090405.png',
    imageAlt:
      'Residential land plot near railway station with good connectivity and developed neighborhood',
    amenities: ['Railway Proximity', 'Water', 'Electricity', 'Market Nearby'],
  },
];

const categories = [
  'All',
  'Residential',
  'Commercial',
  'Agricultural',
  'Farm House',
  'Investment',
];

const categoryIcons: Record<string, React.ElementType> = {
  Residential: Home,
  Commercial: Building2,
  Agricultural: Trees,
  'Farm House': Home,
  Investment: TrendingUpIcon,
};

function TrendingUpIcon(props: React.ComponentProps<typeof Sparkles>) {
  return <Sparkles {...props} />;
}

export default function PropertiesGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [waterFilter, setWaterFilter] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWishlist = () => {
      setWishlistIds(getWishlist().map((property) => property.id));
    };

    updateWishlist();
    window.addEventListener('wishlistchange', updateWishlist);
    return () => window.removeEventListener('wishlistchange', updateWishlist);
  }, []);

  const handleWishlistToggle = (property: (typeof allProperties)[number]) => {
    const next = toggleWishlist(property);
    setWishlistIds(next.map((item) => item.id));
  };

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
        threshold: 0.05,
      }
    );

    const elements =
      sectionRef.current?.querySelectorAll('.animate-on-scroll');

    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeCategory, sortBy, waterFilter, verifiedOnly]);

  let filtered = allProperties.filter((property) => {
    if (
      activeCategory !== 'All' &&
      property.category !== activeCategory
    ) {
      return false;
    }

    if (waterFilter && !property.water) {
      return false;
    }

    if (verifiedOnly && !property.verified) {
      return false;
    }

    return true;
  });

  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort(
      (a, b) => a.priceNum - b.priceNum
    );
  }

  if (sortBy === 'price-desc') {
    filtered = [...filtered].sort(
      (a, b) => b.priceNum - a.priceNum
    );
  }

  const clearFilters = () => {
    setActiveCategory('All');
    setWaterFilter(false);
    setVerifiedOnly(false);
    setSortBy('default');
  };

  const hasActiveFilters =
    activeCategory !== 'All' ||
    waterFilter ||
    verifiedOnly ||
    sortBy !== 'default';

  return (
    <section
      ref={sectionRef}
      id="properties"
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-32 h-80 w-80 rounded-full bg-primary/[0.025] blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-primary/10
                bg-primary/[0.06]
                px-3.5
                py-1.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              <Building2 className="h-3.5 w-3.5" />
              Property Listings
            </span>

            <h2
              className="
                mt-4
                text-2xl
                font-extrabold
                tracking-tight
                text-foreground
                sm:text-3xl
              "
            >
              Explore available land
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Browse properties based on location, category, budget and
              essential land features.
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">
              {filtered.length}
            </span>{' '}
            {filtered.length === 1 ? 'property' : 'properties'} available
          </div>
        </div>

        {/* =====================================================
            FILTER BAR
        ====================================================== */}

        <div
          className="
            mb-8
            rounded-[22px]
            border
            border-border/70
            bg-card
            p-4
            shadow-sm
          "
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon =
                  category === 'All'
                    ? SlidersHorizontal
                    : categoryIcons[category];

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-xl
                      px-3
                      py-2
                      text-xs
                      font-bold
                      transition-all
                      duration-200
                      ${
                        activeCategory === category
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-muted/60 text-muted-foreground hover:bg-primary/[0.07] hover:text-primary'
                      }
                    `}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-2">

              {/* Water */}
              <button
                type="button"
                onClick={() => setWaterFilter(!waterFilter)}
                className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  px-3
                  py-2
                  text-xs
                  font-bold
                  transition-all
                  ${
                    waterFilter
                      ? 'border-primary/20 bg-primary/[0.07] text-primary'
                      : 'border-border/70 bg-background text-muted-foreground hover:border-primary/20 hover:text-primary'
                  }
                `}
              >
                <Droplets className="h-3.5 w-3.5" />
                Water
              </button>

              {/* Verified */}
              <button
                type="button"
                onClick={() => setVerifiedOnly(!verifiedOnly)}
                className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  px-3
                  py-2
                  text-xs
                  font-bold
                  transition-all
                  ${
                    verifiedOnly
                      ? 'border-primary/20 bg-primary/[0.07] text-primary'
                      : 'border-border/70 bg-background text-muted-foreground hover:border-primary/20 hover:text-primary'
                  }
                `}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Verified
              </button>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value)
                  }
                  className="
                    appearance-none
                    rounded-xl
                    border
                    border-border/70
                    bg-background
                    py-2
                    pl-3
                    pr-9
                    text-xs
                    font-bold
                    text-foreground
                    outline-none
                    transition
                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/10
                  "
                >
                  <option value="default">
                    Sort: Default
                  </option>

                  <option value="price-asc">
                    Price: Low to High
                  </option>

                  <option value="price-desc">
                    Price: High to Low
                  </option>
                </select>

                <ChevronDown
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    h-3.5
                    w-3.5
                    -translate-y-1/2
                    text-muted-foreground
                  "
                />
              </div>

              {/* Clear */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-xl
                    px-3
                    py-2
                    text-xs
                    font-bold
                    text-muted-foreground
                    transition-colors
                    hover:bg-muted
                    hover:text-foreground
                  "
                >
                  <X className="h-3.5 w-3.5" />
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            PROPERTY GRID
        ====================================================== */}

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {filtered.map((property, index) => {
              return (
                <article
                  key={property.id}
                  className="
                    animate-on-scroll
                    animate-fade-up
                    group
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-border/70
                    bg-card
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-primary/20
                    hover:shadow-xl
                  "
                  style={{
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">

                    <AppImage
                      src={property.image}
                      alt={property.imageAlt}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.04]
                      "
                      sizes="
                        (max-width: 768px) 100vw,
                        (max-width: 1024px) 50vw,
                        33vw
                      "
                    />

                    <div className="absolute inset-0 bg-black/15" />

                    {/* Category */}
                    <div className="absolute left-4 top-4">
                      <span
                        className="
                          inline-flex
                          items-center
                          rounded-lg
                          border
                          border-white/20
                          bg-black/35
                          px-2.5
                          py-1.5
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.08em]
                          text-white
                          backdrop-blur-sm
                        "
                      >
                        {property.category}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleWishlistToggle(property)}
                      aria-label={`${isInWishlist(property.id) ? 'Remove' : 'Save'} ${property.name}`}
                      className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary ${wishlistIds.includes(property.id) ? 'bg-[#C59B27] text-white' : ''}`}
                    >
                      <Heart
                        className="h-4 w-4"
                        fill={wishlistIds.includes(property.id) ? 'currentColor' : 'none'}
                      />
                    </button>

                    {/* Featured */}
                    {/* {property.featured && (
                      <div className="absolute right-4 top-4">
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-lg
                            border
                            border-white/20
                            bg-primary
                            px-2.5
                            py-1.5
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.08em]
                            text-primary-foreground
                            shadow-sm
                          "
                        >
                          <Sparkles className="h-3 w-3" />
                          Featured
                        </span>
                      </div>
                    )} */}

                    {/* Price */}
                    <div className="absolute bottom-4 left-4">
                      <div
                        className="
                          rounded-xl
                          border
                          border-white/15
                          bg-black/45
                          px-3
                          py-2
                          text-sm
                          font-extrabold
                          text-white
                          backdrop-blur-sm
                        "
                      >
                        {property.price}
                      </div>
                    </div>

                    {/* Verified */}
                    {property.verified && (
                      <div className="absolute bottom-4 right-4">
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-lg
                            border
                            border-white/20
                            bg-black/45
                            px-2.5
                            py-1.5
                            text-[10px]
                            font-bold
                            text-white
                            backdrop-blur-sm
                          "
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                          Verified
                        </span>
                      </div>
                    )}
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="p-5">

                    <h3
                      className="
                        line-clamp-2
                        min-h-[42px]
                        text-base
                        font-extrabold
                        leading-5
                        tracking-tight
                        text-foreground
                        transition-colors
                        group-hover:text-primary
                      "
                    >
                      {property.name}
                    </h3>

                    {/* Location */}
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{property.location}</span>
                    </div>

                    {/* Property Stats */}
                    <div
                      className="
                        mt-4
                        grid
                        grid-cols-2
                        overflow-hidden
                        rounded-xl
                        border
                        border-border/70
                        bg-muted/30
                      "
                    >
                      <div className="flex items-center gap-2 border-r border-border/70 px-3 py-2.5">
                        <Ruler className="h-3.5 w-3.5 text-primary" />

                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                            Area
                          </p>

                          <p className="mt-0.5 text-xs font-bold text-foreground">
                            {property.area}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-2.5">
                        <Building2 className="h-3.5 w-3.5 text-primary" />

                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                            Road
                          </p>

                          <p className="mt-0.5 text-xs font-bold text-foreground">
                            {property.roadWidth}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mt-4 flex min-h-[26px] flex-wrap gap-1.5">
                      {property.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity}
                          className="
                            inline-flex
                            items-center
                            gap-1
                            rounded-lg
                            bg-muted
                            px-2
                            py-1
                            text-[10px]
                            font-semibold
                            text-muted-foreground
                          "
                        >
                          {amenity === 'Water' && (
                            <Droplets className="h-3 w-3" />
                          )}

                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="my-4 h-px bg-border/70" />

                    {/* Actions */}
                    <div className="flex items-center gap-2">

                      <Link
                        href={`/property-detail?id=${property.id}`}
                        className="
                          group/button
                          flex
                          flex-1
                          items-center
                          justify-center
                          gap-1.5
                          rounded-xl
                          bg-primary
                          px-3
                          py-2.5
                          text-xs
                          font-bold
                          text-white
                          transition-all
                          duration-200
                          hover:bg-primary/90
                          hover:shadow-md
                        "
                      >
                        View Details

                        <ArrowUpRight
                          className="
                            h-3.5
                            w-3.5
                            transition-transform
                            duration-200
                            group-hover/button:-translate-y-0.5
                            group-hover/button:translate-x-0.5
                          "
                        />
                      </Link>

                      <a
                        href={`https://wa.me/918462097970?text=${encodeURIComponent(
                          `Hello Jitendra Roy Land Brokers, I am interested in ${property.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-border/70
                          bg-background
                          text-muted-foreground
                          transition-all
                          hover:border-primary/20
                          hover:bg-primary/[0.06]
                          hover:text-primary
                        "
                        aria-label="Contact about this property"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>

                      <a
                        href="tel:+918462097970"
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-border/70
                          bg-background
                          text-muted-foreground
                          transition-all
                          hover:border-primary/20
                          hover:bg-primary/[0.06]
                          hover:text-primary
                        "
                        aria-label="Call about this property"
                      >
                        <Phone className="h-4 w-4" />
                      </a>

                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* =====================================================
              EMPTY STATE
          ====================================================== */

          <div
            className="
              rounded-[28px]
              border
              border-border/70
              bg-card
              px-6
              py-16
              text-center
              shadow-sm
            "
          >
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-primary/[0.07]
                text-primary
              "
            >
              <MessageCircle className="h-5 w-5" />
            </div>

            <h3 className="mt-5 text-lg font-extrabold text-foreground">
              No properties found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              We couldn't find properties matching your current filters.
              Try adjusting your selection to see more listings.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-primary
                px-5
                py-2.5
                text-sm
                font-bold
                text-primary-foreground
                transition-colors
                hover:bg-primary/90
              "
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-12">
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-primary/10
              bg-primary/[0.06]
              p-6
              sm:p-8
              lg:p-10
            "
          >
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <div className="flex items-center gap-2 text-primary">
                  <FileCheck2 className="h-4 w-4" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                    Looking for something specific?
                  </span>
                </div>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-extrabold
                    tracking-tight
                    text-foreground
                    sm:text-2xl
                  "
                >
                  Tell us what you&apos;re looking for.
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  Share your preferred location, budget and property type.
                  We&apos;ll help you explore suitable land opportunities.
                </p>

              </div>

              <a
                href="https://wa.me/918462097970?text=Hello%20Jitendra%20Roy%20Land%20Brokers%2C%20I%20have%20specific%20land%20requirements%20in%20Satna."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-primary
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-primary/90
                  hover:shadow-lg
                "
              >
                Share Requirements

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}