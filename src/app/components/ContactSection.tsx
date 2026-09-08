
'use client';

import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  budget: string;
  propertyType: string;
  location: string;
  message: string;
}

const propertyTypes = [
  'Residential Plot',
  'Commercial Land',
  'Agricultural Land',
  'Farm House Land',
  'Investment Property',
  'Other',
];

const budgets = [
  'Under ₹5 Lakh',
  '₹5 – ₹10 Lakh',
  '₹10 – ₹25 Lakh',
  '₹25 – ₹50 Lakh',
  '₹50 Lakh – ₹1 Cr',
  'Above ₹1 Cr',
];

const inputClass =
  'w-full rounded-xl border border-border/70 bg-muted/40 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/10';

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    budget: '',
    propertyType: '',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waMessage = `Hello Jitendra Roy Land Brokers,

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || 'Not provided'}
Property Type: ${form.propertyType}
Budget: ${form.budget}
Preferred Location: ${form.location || 'Not specified'}

Message:
${form.message || 'No additional message.'}`;

    const waUrl = `https://wa.me/918462097970?text=${encodeURIComponent(
      waMessage
    )}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* ================================================== */}
      {/* BACKGROUND */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-10 h-[420px] w-[420px] rounded-full bg-primary/[0.035] blur-3xl" />

        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">

          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              <MessageCircle className="h-3.5 w-3.5" />
              Get in Touch
            </span>
          </div>

          <h2 className="text-section-title font-extrabold leading-[1.05] tracking-tight text-foreground">
            Let&apos;s find the right land{' '}
            <span className="text-primary">
              for you.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Have a property requirement in Satna? Tell us what you are
            looking for and our team will help you explore suitable options.
          </p>

        </div>

        {/* ================================================== */}
        {/* MAIN CONTENT */}
        {/* ================================================== */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">

          {/* ================================================== */}
          {/* LEFT — CONTACT DETAILS */}
          {/* ================================================== */}

          <div className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm sm:p-8">

            {/* Heading */}
            <div className="mb-8">

              <div className="mb-2 flex items-center gap-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                  <MapPin className="h-4 w-4" />
                </div>

                <h3 className="text-base font-bold text-foreground">
                  Visit Our Office
                </h3>

              </div>

              <p className="text-xs leading-5 text-muted-foreground">
                We are available to discuss your property requirements
                in person.
              </p>

            </div>

            {/* Address */}
            <div className="border-b border-border/70 pb-6">

              <p className="text-sm font-semibold text-foreground">
                Jitendra Roy Land Brokers
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Shop No. 7, Infront of Dhawari Stadium Gate No. 1,
                Dhawari, Satna, Madhya Pradesh
              </p>

              <a
                href="https://maps.google.com/?q=Dhawari+Satna+Madhya+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all hover:gap-2"
              >
                Get Directions
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

            </div>

            {/* Contact information */}
            <div className="divide-y divide-border/70">

              {/* Phone */}
              <a
                href="tel:+918462097970"
                className="group flex items-center justify-between py-5"
              >

                <div className="flex items-center gap-3.5">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                    <Phone className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm font-semibold text-foreground">
                      +91 84620 97970
                    </p>
                  </div>

                </div>

                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />

              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918462097970"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5"
              >

                <div className="flex items-center gap-3.5">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                    <MessageCircle className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Start a conversation
                    </p>
                  </div>

                </div>

                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />

              </a>

              {/* Hours */}
              <div className="flex items-center gap-3.5 py-5">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                  <Clock3 className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Business Hours
                  </p>

                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Mon – Sat · 9:00 AM – 7:00 PM
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Sunday by appointment
                  </p>
                </div>

              </div>

            </div>

            {/* Trust note */}
            <div className="mt-6 flex gap-3 rounded-xl border border-border/70 bg-muted/40 p-4">

              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

              <div>
                <p className="text-xs font-semibold text-foreground">
                  Local property assistance
                </p>

                <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                  Get assistance with property options, site visits,
                  documentation and general buying or selling enquiries.
                </p>
              </div>

            </div>

          </div>

          {/* ================================================== */}
          {/* RIGHT — ENQUIRY FORM */}
          {/* ================================================== */}

          {submitted ? (
            <SuccessState onReset={() => setSubmitted(false)} />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm sm:p-8 lg:p-10"
            >

              {/* Form heading */}
              <div className="mb-8">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                      Property Enquiry
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      Tell us what you&apos;re looking for
                    </h3>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary sm:flex">
                    <Send className="h-4 w-4" />
                  </div>

                </div>

                <p className="mt-2 max-w-xl text-xs leading-5 text-muted-foreground">
                  Share your requirements and we&apos;ll connect with you
                  directly through WhatsApp.
                </p>

              </div>

              {/* Form fields */}
              <div className="space-y-5">

                {/* Name + phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <FormField
                    label="Full Name"
                    required
                  >
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField
                    label="Phone Number"
                    required
                  >
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </FormField>

                </div>

                {/* Email */}
                <FormField label="Email Address">

                  <div className="relative">

                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`${inputClass} pl-10`}
                    />

                  </div>

                </FormField>

                {/* Property type + budget */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <FormField
                    label="Property Type"
                    required
                  >
                    <select
                      name="propertyType"
                      required
                      value={form.propertyType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select property type</option>

                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField
                    label="Budget"
                    required
                  >
                    <select
                      name="budget"
                      required
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select budget</option>

                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </FormField>

                </div>

                {/* Location */}
                <FormField label="Preferred Location">

                  <div className="relative">

                    <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="Dhawari, Unchehara, Maihar Road..."
                      className={`${inputClass} pl-10`}
                    />

                  </div>

                </FormField>

                {/* Message */}
                <FormField label="Message">

                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property requirement..."
                    className={`${inputClass} resize-none`}
                  />

                </FormField>

              </div>

              {/* Submit */}
              <div className="mt-7">

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />

                  Send Inquiry on WhatsApp

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-muted-foreground">

                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />

                  Your details are used only to respond to your enquiry.

                </div>

              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}

/* ================================================== */
/* FORM FIELD */
/* ================================================== */

function FormField({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>

      <label className="mb-2 block text-xs font-semibold text-foreground">
        {label}

        {required && (
          <span className="ml-1 text-primary">
            *
          </span>
        )}
      </label>

      {children}

    </div>
  );
}

/* ================================================== */
/* SUCCESS STATE */
/* ================================================== */

function SuccessState({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center rounded-[28px] border border-border/70 bg-card p-8 text-center shadow-sm">

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/[0.07] text-primary">
        <CheckCircle2 className="h-8 w-8" />
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        Inquiry sent successfully
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
        Your property requirements have been prepared for WhatsApp.
        Our team will get back to you regarding suitable property options.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
      >
        Send Another Inquiry

        <ArrowUpRight className="h-4 w-4" />
      </button>

    </div>
  );
}
