export interface WishlistProperty {
  id: number;
  name: string;
  location: string;
  price: string;
  area?: string;
  image: string;
  imageAlt: string;
}

const STORAGE_KEY = 'wishlist';

export function getWishlist(): WishlistProperty[] {
  if (typeof window === 'undefined') return [];

  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function toggleWishlist(property: WishlistProperty): WishlistProperty[] {
  const current = getWishlist();
  const exists = current.some((item) => item.id === property.id);
  const next = exists
    ? current.filter((item) => item.id !== property.id)
    : [...current, property];

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event('wishlistchange'));
  return next;
}

export function isInWishlist(id: number): boolean {
  return getWishlist().some((item) => item.id === id);
}
