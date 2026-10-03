'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Heart,
  Moon,
  Sun,
  UserRound,
} from 'lucide-react';
import Image from 'next/image';
import { getWishlist } from '@/lib/wishlist';
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
    href: '/#services',
  },
  {
    label: 'Our Expertise',
    href: '/#our-expertise',
  },
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkMode = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle('dark', darkMode);

    setWishlistCount(getWishlist().length);

    const updateWishlistCount = () => setWishlistCount(getWishlist().length);
    window.addEventListener('wishlistchange', updateWishlistCount);
    window.addEventListener('storage', updateWishlistCount);

    return () => {
      window.removeEventListener('wishlistchange', updateWishlistCount);
      window.removeEventListener('storage', updateWishlistCount);
    };
  }, []);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);

    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDarkMode = () => {
    const nextDarkMode = !isDarkMode;

    setIsDarkMode(nextDarkMode);
    document.documentElement.classList.toggle('dark', nextDarkMode);
    window.localStorage.setItem('theme', nextDarkMode ? 'dark' : 'light');
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && activeHash === '';
    }

    if (href.startsWith('/#')) {
      return pathname === '/' && activeHash === href.slice(1);
    }

    return pathname.startsWith(href);
  };

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
          dark:border-white/10
          dark:bg-[#022C22]
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
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center
            dark:rounded-[8px]
          dark:bg-white
            dark:px-3
            dark:py-1.5
            dark:shadow-[0_2px_10px_rgba(0,0,0,0.15)]
            transition-all duration-200
            "
            aria-label="Jitendra Roy Land Brokers"
          >
            <Image
              src="/assets/images/appLogo-hr.png"
              alt="Jitendra Roy Land Brokers"
              width={180}
              height={45}
              priority
              className="
                h-auto
                w-[150px]
                object-contain
                sm:w-[150px]
                lg:w-[180px]
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
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    closeMenu();

                    if (item.href === '/') {
                      window.history.replaceState(null, '', '/');
                      setActiveHash('');
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  className={`
                  group
                  relative
                  py-2
                  text-[12px]
                  text-[#000000]
                  transition-all
                  duration-200
                  font-bold
                  hover:text-[#064E3B]
                  dark:text-gray-300
                  dark:hover:text-white
                  ${active
                    ? 'text-[14px] font-bold text-[#064E3B]'
                    : 'text-[12px] font-medium text-[#4B5563] hover:text-[#064E3B]'
                  }
                `}
                >
                  {item.label}

                  <span
                    className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    ${active ? 'w-full' : 'w-0 group-hover:w-full'}
                    bg-[#C59B27]
                    transition-all
                    duration-200
                  `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/wishlist"
              aria-label={`Saved properties (${wishlistCount})`}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-[7px] border border-[#E5E7EB] text-[#374151] transition-colors hover:border-[#064E3B]/25 hover:text-[#064E3B] dark:border-white/15 dark:text-gray-200 dark:hover:border-white/30 dark:hover:text-white"
            >
              <Heart size={16} strokeWidth={1.8} />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C59B27] px-1 text-[9px] font-bold text-white">
                {wishlistCount}
              </span>
            </Link>

            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[7px] border border-[#E5E7EB] text-[#374151] transition-colors hover:border-[#064E3B]/25 hover:text-[#064E3B] dark:border-white/15 dark:text-gray-200 dark:hover:border-white/30 dark:hover:text-white"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              type="button"
              aria-label="Open account"
              className="inline-flex items-center gap-1.5 rounded-[7px] border border-[#E5E7EB] bg-white px-3 py-2.5 text-[11px] font-semibold text-[#374151] transition-colors hover:border-[#064E3B]/25 hover:text-[#064E3B] dark:border-white/15 dark:bg-transparent dark:text-gray-200 dark:hover:border-white/30 dark:hover:text-white"
            >
              <UserRound size={14} />
              Account
            </button>

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
              <Phone size={13} strokeWidth={1.8} className="text-[#0F766E]" />
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
              <MessageCircle size={14} strokeWidth={1.8} />
              WhatsApp
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/wishlist"
              onClick={closeMenu}
              aria-label={`Saved properties (${wishlistCount})`}
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-[7px] border border-[#E5E7EB] text-[#374151] dark:border-white/15 dark:text-gray-200"
            >
              <Heart size={16} />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C59B27] px-1 text-[9px] font-bold text-white">
                {wishlistCount}
              </span>
            </Link>

            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-[7px] border border-[#E5E7EB] text-[#374151] dark:border-white/15 dark:text-gray-200"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

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
          dark:bg-[#022C22]/40
          ${isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
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
          dark:border-white/10
          dark:bg-[#022C22]
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
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`
                  flex
                  items-center
                  justify-between
                  py-4
                  text-sm
                  font-medium
                  text-[#374151]
                  transition-colors
                  hover:text-[#064E3B]
                  ${active ? 'bg-[#F4F6F4] text-[#064E3B]' : ''}
                  dark:text-gray-200
                  dark:hover:text-white
                  ${active ? 'dark:bg-white/10 dark:text-white' : ''}
                `}
                >
                  <span>{item.label}</span>

                  <ArrowUpRight size={15} strokeWidth={1.6} className="text-[#9CA3AF]" />
                </Link>
              );
            })}
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
              <Phone size={15} strokeWidth={1.8} />
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
              <MessageCircle size={15} strokeWidth={1.8} />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
