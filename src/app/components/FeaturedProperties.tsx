'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Heart,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  Ruler,
} from 'lucide-react';

import AppImage from '@/components/ui/AppImage';
import { getWishlist, toggleWishlist } from '@/lib/wishlist';

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
    amenities: [
      'Near Railway Station',
      'Highway Access',
      'Road Access',
    ],
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
    amenities: [
      'Main Road',
      'Water',
      'Electricity',
    ],
    description:
      'Prime property located on Unchehara Main Road, suitable for commercial or investment purposes.',
  },

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
    amenities: [
      'Main Road',
      'Prime Location',
      'High Visibility',
    ],
    description:
      'Premium property available on the main road at Jignahat Unchehara.',
  },
];

export default function FeaturedProperties() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [wishlistIds, setWishlistIds] = useState<number[]>([]);

  useEffect(() => {
    const updateWishlist = () => {
      setWishlistIds(
        getWishlist().map((property) => property.id),
      );
    };

    updateWishlist();

    window.addEventListener(
      'wishlistchange',
      updateWishlist,
    );

    return () =>
      window.removeEventListener(
        'wishlistchange',
        updateWishlist,
      );
  }, []);

  const handleWishlistToggle = (
    property: (typeof properties)[number],
  ) => {
    const next = toggleWishlist(property);

    setWishlistIds(
      next.map((item) => item.id),
    );
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
        threshold: 0.08,
        rootMargin: '0px 0px -5% 0px',
      },
    );

    const items =
      sectionRef.current?.querySelectorAll(
        '.animate-on-scroll',
      );

    items?.forEach((item) =>
      observer.observe(item),
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="properties"
      className="
        relative
        overflow-hidden
        bg-[#f8faf8]
        py-16

        sm:py-20

        lg:py-24
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* very subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(#075c49_1px,transparent_1px),linear-gradient(90deg,#075c49_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* soft green glow */}
        <div
          className="
            absolute
            left-[-180px]
            top-[180px]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#075c49]/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-160px]
            right-[-120px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#d5b45a]/[0.035]
            blur-3xl
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1450px]
          px-5

          sm:px-8

          lg:px-10

          xl:px-12
        "
      >
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <div
          className="
            animate-on-scroll
            animate-fade-up
            mb-10

            sm:mb-12

            lg:mb-14
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
              
            "
          >
            {/* LEFT */}

            <div className="max-w-[720px]">
              {/* eyebrow */}

              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                  text-[9px]
                  font-semibold
                  uppercase
                  justify-center
                  sm:justify-start
                  tracking-[0.24em]
                  text-[#075c49]

                  sm:text-[10px]
                "
              >
                <span
                  className="
                    h-px
                    w-8
                    bg-[#075c49]

                    sm:w-10
                  "
                />

                Featured properties
              </div>

              {/* heading */}

              <h2
                className="
                  max-w-[680px]
                  text-[36px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#172033]

                  sm:text-[46px]

                  md:text-[52px]

                  lg:text-[58px]
                "
              >
                Land worth
                <span className="text-[#075c49]">
                  {' '}
                  looking at.
                </span>
              </h2>

              {/* description */}

              <p
                className="
                  mt-5
                  max-w-[620px]
                  text-[12px]
                  leading-[1.8]
                  text-center
                  text-[#2e3633]
                  sm:text-left
                  sm:text-[13px]

                  md:text-[14px]
                "
              >
                A focused selection of properties across
                Satna and Madhya Pradesh - chosen for
                location, accessibility and long-term
                potential.
              </p>
            </div>

            {/* RIGHT */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-5

                lg:flex-col
                lg:items-end
                lg:justify-end
              "
            >


              {/* view all */}

              <Link
                href="/properties"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#cfdcd6]
                  bg-white
                  px-5
                  py-3
                  text-[12px]
                  font-semibold
                  text-[#172033]
                  shadow-[0_8px_25px_rgba(23,32,51,0.04)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:border-[#075c49]
                  hover:text-[#075c49]
                  hover:shadow-[0_12px_30px_rgba(23,32,51,0.08)]

                  sm:px-6
                  sm:py-3.5
                "
              >
                Explore all properties

                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-[#edf4f0]
                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:bg-[#075c49]
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* =======================================================
            PROPERTY GRID
        ======================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {properties.map((property, index) => {
            const saved = wishlistIds.includes(
              property.id,
            );

            return (
              <article
                key={property.id}
                className={`
                  animate-on-scroll
                  animate-fade-up
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#dce5e1]
                  bg-white
                  shadow-[0_10px_35px_rgba(23,32,51,0.055)]
                  transition-all
                  duration-500

                  hover:-translate-y-1.5
                  hover:border-[#c5d6cf]
                  hover:shadow-[0_24px_55px_rgba(23,32,51,0.11)]

                  ${
                    index === 0
                      ? 'xl:shadow-[0_15px_45px_rgba(23,32,51,0.075)]'
                      : ''
                  }
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    h-[260px]
                    overflow-hidden

                    sm:h-[285px]

                    lg:h-[300px]
                  "
                >
                  <AppImage
                    src={property.image}
                    alt={property.imageAlt}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-[1.045]
                    "
                    sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1280px) 50vw,
                      33vw
                    "
                  />

                  {/* dark image gradient */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-black/5
                      to-black/10
                    "
                  />

                  {/* top left category */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-white/25
                        bg-[#173a31]/85
                        px-3
                        py-1.5
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {property.category}
                    </span>

                    {property.verified && (
                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/15
                          text-white
                          backdrop-blur-md
                        "
                        title="Verified listing"
                      >
                        <BadgeCheck className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>

                  {/* wishlist */}

                  <button
                    type="button"
                    onClick={() =>
                      handleWishlistToggle(property)
                    }
                    aria-label={`${
                      saved ? 'Remove' : 'Save'
                    } ${property.name}`}
                    className={`
                      absolute
                      right-4
                      top-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/25
                      backdrop-blur-md
                      transition-all
                      duration-300

                      ${
                        saved
                          ? 'bg-[#d5b45a] text-white'
                          : 'bg-black/25 text-white hover:bg-white hover:text-[#075c49]'
                      }
                    `}
                  >
                    <Heart
                      className="h-4 w-4"
                      fill={
                        saved
                          ? 'currentColor'
                          : 'none'
                      }
                    />
                  </button>

                  {/* price */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-5
                      right-5
                      flex
                      items-end
                      justify-between
                    "
                  >
                    <div>
                      <div
                        className="
                          flex
                          items-baseline
                          gap-1.5
                        "
                      >
                        <span
                          className="
                            text-[25px]
                            font-semibold
                            tracking-[-0.045em]
                            text-white

                            sm:text-[28px]
                          "
                        >
                          {property.price}
                        </span>

                        <span
                          className="
                            text-[9px]
                            font-medium
                            text-white/75
                          "
                        >
                          {property.priceUnit}
                        </span>
                      </div>

                      <p
                        className="
                          mt-1
                          text-[8px]
                          font-medium
                          uppercase
                          tracking-[0.12em]
                          text-white/60
                        "
                      >
                        Property price
                      </p>
                    </div>

                    {/* hover explore */}

                    <div
                      className="
                        hidden
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-white/15
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-300

                        group-hover:opacity-100

                        sm:flex
                      "
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="p-5 sm:p-6">
                  {/* title */}

                  <h3
                    className="
                      line-clamp-1
                      text-[17px]
                      font-semibold
                      tracking-[-0.025em]
                      text-[#172033]

                      sm:text-[18px]
                    "
                  >
                    {property.name}
                  </h3>

                  {/* location */}

                  <div
                    className="
                      mt-2.5
                      flex
                      items-center
                      gap-1.5
                      text-[11px]
                      text-[#7d8a86]

                      sm:text-[12px]
                    "
                  >
                    <MapPin
                      className="
                        h-3.5
                        w-3.5
                        shrink-0
                        text-[#075c49]
                      "
                    />

                    <span className="truncate">
                      {property.location}
                    </span>
                  </div>

                  {/* =================================================
                      PROPERTY FACTS
                  ================================================= */}

                  <div
                    className="
                      mt-5
                      grid
                      grid-cols-2
                      border-y
                      border-[#e4ebe8]
                    "
                  >
                    {/* AREA */}

                    <div
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-3
                        py-4
                        pr-4
                      "
                    >
                      {/* Icon */}

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#f0f6f3]
                          text-[#075c49]
                        "
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                      </div>

                      {/* Content */}

                      <div className="min-w-0">
                        <p
                          className="
                            text-[7px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[#9aa6a2]
                          "
                        >
                          Plot Area
                        </p>

                        <p
                          className="
                            mt-1
                            truncate
                            text-[11px]
                            font-semibold
                            tracking-[-0.01em]
                            text-[#172033]

                            sm:text-[12px]
                          "
                        >
                          {property.area}
                        </p>
                      </div>
                    </div>

                    {/* ACCESS */}

                    <div
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-3
                        border-l
                        border-[#e4ebe8]
                        py-4
                        pl-4
                      "
                    >
                      {/* Icon */}

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#f7f4e7]
                          text-[#b08a28]
                        "
                      >
                        <Ruler className="h-3.5 w-3.5" />
                      </div>

                      {/* Content */}

                      <div className="min-w-0">
                        <p
                          className="
                            text-[7px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[#9aa6a2]
                          "
                        >
                          Road Access
                        </p>

                        <p
                          className="
                            mt-1
                            truncate
                            text-[11px]
                            font-semibold
                            tracking-[-0.01em]
                            text-[#172033]

                            sm:text-[12px]
                          "
                        >
                          {property.roadWidth}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      AMENITIES
                  ================================================= */}

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      items-center
                      gap-x-4
                      gap-y-2
                    "
                  >
                    {property.amenities
                      .slice(0, 3)
                      .map((amenity) => (
                        <span
                          key={amenity}
                          className="
                            relative
                            pl-3
                            text-[12px]
                            font-medium
                            text-[#08382d]
                            before:absolute
                            before:left-0
                            before:top-1/2
                            before:h-1
                            before:w-1
                            before:-translate-y-1/2
                            before:rounded-full
                            before:bg-[#d5b45a]
                          "
                        >
                          {amenity}
                        </span>
                      ))}
                  </div>

                  {/* =================================================
                      ACTIONS
                  ================================================= */}

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Link
                      href={`/property-detail?id=${property.id}`}
                      className="
                        group/btn
                        flex
                        min-w-0
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-[#075c49]
                        px-4
                        py-3
                        text-[12px]
                        font-semibold
                        text-white
                        transition-all
                        duration-300

                        hover:bg-[#064e3e]
                        hover:shadow-[0_10px_25px_rgba(7,92,73,0.20)]
                      "
                    >
                      <span className="truncate">
                        View property
                      </span>

                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          shrink-0
                          transition-transform
                          duration-300

                          group-hover/btn:translate-x-0.5
                          group-hover/btn:-translate-y-0.5
                        "
                      />
                    </Link>

                    {/* WhatsApp */}

                    <a
                      href={`https://wa.me/918462097970?text=${encodeURIComponent(
                        `Hello Jitendra Roy Land Brokers, I am interested in ${property.name} at ${property.location}.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp inquiry for ${property.name}`}
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#d9e3df]
                        bg-white
                        text-[#075c49]
                        transition-all
                        duration-300

                        hover:border-[#075c49]
                        hover:bg-[#edf4f0]
                      "
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>

                    {/* Call */}

                    <a
                      href="tel:+918462097970"
                      aria-label="Call now"
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#d9e3df]
                        bg-white
                        text-[#075c49]
                        transition-all
                        duration-300

                        hover:border-[#075c49]
                        hover:bg-[#edf4f0]
                      "
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}