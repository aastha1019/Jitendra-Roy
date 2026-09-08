'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import Image from 'next/image';
const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Properties',
    href: '/properties',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Why Us',
    href: '#why-us',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN HEADER
      ====================================================== */}

      <header
        className={`
          sticky
          top-0
          z-50
          w-full
          border-b
          transition-all
          duration-300
          ${
            isScrolled
              ? 'border-[#E5E7EB] bg-white/95 shadow-[0_4px_20px_rgba(17,24,39,0.06)] backdrop-blur-md'
              : 'border-[#E5E7EB] bg-white'
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[72px]
            max-w-[1240px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-6
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

        {/* =================================================
    LOGO
================================================== */}

<Link
  href="/"
  onClick={closeMenu}
  className="group flex shrink-0 items-center"
  aria-label="Jitendra Roy Land Brokers"
>
  <Image
    src="/assets/images/logo.png"
    alt="Jitendra Roy Land Brokers"
    width={190}
    height={70}
    priority
    className="
      h-auto
      w-[155px]
      object-contain
      sm:w-[125px]
      lg:w-[115px]
    "
  />
</Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="
              hidden
              items-center
              gap-6
              lg:flex
              xl:gap-7
            "
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  group
                  relative
                  py-2
                  text-[12px]
                  font-medium
                  text-[#4B5563]
                  transition-colors
                  duration-200
                  hover:text-[#064E3B]
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#C59B27]
                    transition-all
                    duration-200
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-2 lg:flex">

            {/* Phone */}
            <a
              href="tel:+918462097970"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-[7px]
                border
                border-[#E5E7EB]
                bg-white
                px-3
                py-2.5
                text-[11px]
                font-semibold
                text-[#374151]
                transition-colors
                hover:border-[#064E3B]/25
                hover:text-[#064E3B]
              "
            >
              <Phone
                size={13}
                strokeWidth={1.8}
                className="text-[#0F766E]"
              />

              Call
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918462097970?text=Hello%20Jitendra%20Roy%20Land%20Brokers%2C%20I%20am%20interested%20in%20your%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-[7px]
                bg-[#064E3B]
                px-3.5
                py-2.5
                text-[11px]
                font-semibold
                text-white
                transition-colors
                hover:bg-[#053F30]
              "
            >
              <MessageCircle
                size={14}
                strokeWidth={1.8}
              />

              WhatsApp
            </a>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-[7px]
              border
              border-[#E5E7EB]
              text-[#374151]
              transition-colors
              hover:bg-[#F4F6F4]
              lg:hidden
            "
          >
            {isMenuOpen ? (
              <X size={19} strokeWidth={1.8} />
            ) : (
              <Menu size={19} strokeWidth={1.8} />
            )}
          </button>

        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          bg-[#022C22]/20
          transition-opacity
          duration-300
          lg:hidden
          ${
            isMenuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          fixed
          left-0
          right-0
          top-[72px]
          z-40
          border-b
          border-[#E5E7EB]
          bg-white
          shadow-[0_15px_35px_rgba(17,24,39,0.08)]
          transition-all
          duration-300
          lg:hidden
          ${
            isMenuOpen
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-3 opacity-0'
          }
        `}
      >
        <nav
          className="
            mx-auto
            max-w-[1240px]
            px-5
            py-3
            sm:px-8
          "
          aria-label="Mobile navigation"
        >
          <div className="divide-y divide-[#F0F1F2]">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-between
                  py-4
                  text-sm
                  font-medium
                  text-[#374151]
                  transition-colors
                  hover:text-[#064E3B]
                "
              >
                <span>{item.label}</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="text-[#9CA3AF]"
                />
              </Link>
            ))}

          </div>

          {/* Mobile actions */}
          <div
            className="
              grid
              grid-cols-2
              gap-2
              border-t
              border-[#E5E7EB]
              pt-4
            "
          >
            <a
              href="tel:+918462097970"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-[7px]
                border
                border-[#D1D5DB]
                px-4
                py-3
                text-xs
                font-semibold
                text-[#374151]
              "
            >
              <Phone
                size={15}
                strokeWidth={1.8}
              />

              Call Us
            </a>

            <a
              href="https://wa.me/918462097970?text=Hello%20Jitendra%20Roy%20Land%20Brokers%2C%20I%20am%20interested%20in%20your%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-[7px]
                bg-[#064E3B]
                px-4
                py-3
                text-xs
                font-semibold
                text-white
              "
            >
              <MessageCircle
                size={15}
                strokeWidth={1.8}
              />

              WhatsApp
            </a>
          </div>

        </nav>
      </div>
    </>
  );
}