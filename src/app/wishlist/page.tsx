'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Heart, MessageCircle, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import { getWishlist, toggleWishlist, type WishlistProperty } from '@/lib/wishlist';

export default function WishlistPage() {
  const [properties, setProperties] = useState<WishlistProperty[]>([]);

  useEffect(() => {
    const update = () => setProperties(getWishlist());

    update();
    window.addEventListener('wishlistchange', update);
    return () => window.removeEventListener('wishlistchange', update);
  }, []);

  const removeProperty = (property: WishlistProperty) => {
    setProperties(toggleWishlist(property));
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            <Heart className="h-3.5 w-3.5" />
            Saved properties
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Your property wishlist
          </h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Keep properties here while you compare options or prepare an inquiry.
          </p>
        </div>

        {properties.length === 0 ? (
          <div className="rounded-[24px] border border-border/70 bg-card p-8 text-center shadow-sm sm:p-12">
            <Heart className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-4 text-lg font-bold text-foreground">
              Your wishlist is empty
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Save a property from the listings page and it will appear here for your next inquiry.
            </p>
            <Link
              href="/properties"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
            >
              Browse properties
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <article
                key={property.id}
                className="overflow-hidden rounded-[24px] border border-border/70 bg-card shadow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <AppImage
                    src={property.image}
                    alt={property.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-base font-extrabold text-foreground">{property.name}</h2>
                  <p className="mt-2 text-xs text-muted-foreground">{property.location}</p>
                  <p className="mt-3 text-lg font-extrabold text-primary">{property.price}</p>
                  <div className="mt-5 flex gap-2">
                    <Link
                      href={`/property-detail?id=${property.id}`}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2.5 text-xs font-bold text-white"
                    >
                      View details
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={`https://wa.me/918462097970?text=${encodeURIComponent(`Hello Jitendra Roy Land Brokers, I am interested in ${property.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ask about ${property.name} on WhatsApp`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground hover:border-primary/30 hover:text-primary"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => removeProperty(property)}
                      aria-label={`Remove ${property.name} from wishlist`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground hover:border-red-200 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
