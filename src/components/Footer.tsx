import React from 'react';
import Link from 'next/link';

import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Residential Plots',
  'Commercial Land',
  'Agricultural Land',
  'Farm House Land',
  'Investment Consulting',
  'Legal Documentation',
];

const PHONE = '+91 84620 97970';
const WHATSAPP = '918462097970';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================================== */}
        {/* MAIN FOOTER */}
        {/* ================================================== */}

        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1fr] lg:gap-12 lg:py-16">

         

          <div>

           <Link
  href="/"
  className="inline-flex items-center"
  aria-label="Jitendra Roy Land Brokers"
>
  <Image
    src="/assets/images/logo.png"
    alt="Jitendra Roy Land Brokers"
    width={220}
    height={80}
    priority
    className="
      h-auto
      w-[165px]
      object-contain
      sm:w-[195px]
    "
  />
</Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white">
              Helping buyers, sellers, and investors find suitable land
              and property opportunities across Satna and Madhya Pradesh.
            </p>

            {/* Direct actions */}
            <div className="mt-6 flex items-center gap-2">

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-200 hover:border-primary/30 hover:bg-primary hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

              <a
                href="tel:+918462097970"
                aria-label="Call us"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-200 hover:border-primary/30 hover:bg-primary hover:text-white"
              >
                <Phone className="h-4 w-4" />
              </a>

              <a
                href="https://maps.google.com/?q=Dhawari+Satna+Madhya+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find our office"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-200 hover:border-primary/30 hover:bg-primary hover:text-white"
              >
                <MapPin className="h-4 w-4" />
              </a>

            </div>

          </div>

          {/* ================================================== */}
          {/* QUICK LINKS */}
          {/* ================================================== */}

          <div>

            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link.label}>

                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white transition-colors duration-200 hover:text-white"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight className="h-3 w-3 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-60" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white transition-colors duration-200 hover:text-white"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight className="h-3 w-3 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-60" />
                    </Link>
                  )}

                </li>
              ))}

            </ul>

          </div>

          {/* ================================================== */}
          {/* SERVICES */}
          {/* ================================================== */}

          <div>

            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              Services
            </h3>

            <ul className="space-y-3">

              {services.map((service) => (
                <li key={service}>

                  <a
                    href="#services"
                    className="text-sm text-white transition-colors duration-200 hover:text-white"
                  >
                    {service}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* ================================================== */}
          {/* CONTACT */}
          {/* ================================================== */}

         <div className="space-y-5">

  {/* Address */}
  <div className="relative">
    <MapPin className="absolute -left-6 top-1 h-4 w-4 text-primary" />

    <p className="text-sm leading-6 text-white">
      Shop No. 7, Infront of Dhawari Stadium Gate No. 1,
      <br />
      Dhawari, Satna, Madhya Pradesh
    </p>
  </div>

  {/* Phone */}
  <a
    href="tel:+918462097970"
    className="group relative block"
  >
    <Phone className="absolute -left-6 top-0.5 h-4 w-4 text-primary" />

    <span className="text-sm text-white transition-colors group-hover:text-primary">
      {PHONE}
    </span>
  </a>

  {/* WhatsApp */}
  <a
    href={`https://wa.me/${WHATSAPP}`}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block"
  >
    <MessageCircle className="absolute -left-6 top-0.5 h-4 w-4 text-primary" />

    <span className="text-sm text-white transition-colors group-hover:text-primary">
      Chat on WhatsApp
    </span>
  </a>

  {/* Hours */}
  <div className="relative">
    <Clock3 className="absolute -left-6 top-0.5 h-4 w-4 text-primary" />

    <p className="text-sm text-white">
      Mon – Sat: 9:00 AM – 7:00 PM
    </p>
  </div>

</div>

        </div>

        {/* ================================================== */}
        {/* BOTTOM BAR */}
        {/* ================================================== */}

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[11px] text-white">
            © {new Date().getFullYear()} Jitendra Roy Land Brokers.
            All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-[11px] text-white">

            <a
              href="#"
              className="transition-colors hover:text-white/70"
            >
              Privacy Policy
            </a>

            <span className="h-3 w-px bg-white" />

            <a
              href="#"
              className="transition-colors hover:text-white/70"
            >
              Terms of Service
            </a>

            <span className="h-3 w-px bg-white" />

            <a
              href="/sitemap.xml"
              className="transition-colors hover:text-white/70"
            >
              Sitemap
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}