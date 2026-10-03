import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import FeaturedProperties from '@/app/components/FeaturedProperties';
import ServicesSection from '@/app/components/ServicesSection';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import InvestmentCalculator from '@/app/components/InvestmentCalculator';
import ContactSection from '@/app/components/ContactSection';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import AboutSection from '@/app/components/AboutSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <InvestmentCalculator />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
