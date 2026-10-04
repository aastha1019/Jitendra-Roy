"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  location: string;
  requirement: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  propertyType: "",
  location: "",
  requirement: "",
  message: "",
};

const propertyTypes = [
  "Residential Land",
  "Commercial Land",
  "Agricultural Land",
  "Industrial Land",
  "Investment Property",
  "Other",
];

const requirements = [
  "Buying",
  "Selling",
  "Investment",
  "Site Visit",
  "Property Consultation",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#075c49] focus:ring-2 focus:ring-[#075c49]/10";

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);
  const [leadId, setLeadId] = useState("");

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));

    setSubmitError("");
  };

  const validateForm = () => {
    const newErrors: Partial<
      Record<keyof FormData, string>
    > = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.propertyType) {
      newErrors.propertyType =
        "Please select a property type.";
    }

    if (!form.location.trim()) {
      newErrors.location =
        "Please enter the location or property of interest.";
    }

    if (!form.requirement) {
      newErrors.requirement =
        "Please select your requirement.";
    }

    if (!form.message.trim()) {
      newErrors.message =
        "Please tell us a little about your requirement.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Something went wrong. Please try again."
        );
      }

      setLeadId(data.leadId || "");
      setSuccess(true);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setLeadId("");
    setSubmitError("");
    setForm(initialForm);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7faf8] py-16 sm:py-20"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,92,73,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(7,92,73,0.035) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d5b45a]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#075c49]">
              Get in touch
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
            Let&apos;s discuss your
            <span className="text-[#075c49]">
              {" "}
              property requirement.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Share your requirement with us and our team will
            get back to you with relevant property options
            and guidance.
          </p>
        </div>

        {/* Main contact layout */}
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(23,32,51,0.08)] lg:grid-cols-[0.82fr_1.18fr]">
          {/* LEFT — Contact information */}
          <div className="relative overflow-hidden bg-[#075c49] p-7 text-white sm:p-9 lg:p-10">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/10" />

            <div className="relative">
              <div className="mb-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d5b45a]">
                  Jitendra Roy Land Brokers
                </span>

                <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">
                  Have a property in mind?
                  <br />
                  Let&apos;s talk.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                  Whether you are looking to buy, sell or
                  invest, tell us what you need and we&apos;ll
                  help you take the next step.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <a
                  href="tel:+919999999999"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.1]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone className="h-4 w-4 text-[#d5b45a]" />
                  </span>

                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-white/50">
                      Call us
                    </span>

                    <span className="mt-1 block text-sm font-medium">
                      +91 9301576694
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:info@jitendraroylandbrokers.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.1]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail className="h-4 w-4 text-[#d5b45a]" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-white/50">
                      Email
                    </span>

                    <span className="mt-1 block truncate text-sm font-medium">
                      jitendraroy01071979@gmail.com
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock3 className="h-4 w-4 text-[#d5b45a]" />
                  </span>

                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-white/50">
                      Working hours
                    </span>

                    <span className="mt-1 block text-sm font-medium">
                      Mon – Sat · 9:00 AM – 7:00 PM
                    </span>
                  </span>
                </div>
              </div>

              {/* WhatsApp secondary option */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-3 text-xs text-white/50">
                  Prefer a quick conversation?
                </p>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium transition hover:bg-white/15"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp us
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Lead form */}
          <div className="p-6 sm:p-8 lg:p-10">
            {success ? (
              <SuccessState
                leadId={leadId}
                onReset={resetForm}
              />
            ) : (
              <>
                <div className="mb-7">
                  <h3 className="text-xl font-semibold text-[#172033]">
                    Tell us what you&apos;re looking for
                  </h3>

                  <p className="mt-1.5 text-sm text-slate-500">
                    Fill in the details below and we&apos;ll
                    contact you shortly.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  {/* Name + Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Full Name"
                      required
                      error={errors.name}
                    >
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          updateField(
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </FormField>

                    <FormField
                      label="Phone Number"
                      required
                      error={errors.phone}
                    >
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          updateField(
                            "phone",
                            e.target.value
                          )
                        }
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </FormField>
                  </div>

                  {/* Email + Location */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Email Address"
                      error={errors.email}
                    >
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          updateField(
                            "email",
                            e.target.value
                          )
                        }
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </FormField>

                    <FormField
                      label="Property / Location"
                      required
                      error={errors.location}
                    >
                      <div className="relative">
                        <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                        <input
                          type="text"
                          value={form.location}
                          onChange={(e) =>
                            updateField(
                              "location",
                              e.target.value
                            )
                          }
                          placeholder="e.g. Noida, Greater Noida"
                          className={`${inputClass} pl-11`}
                        />
                      </div>
                    </FormField>
                  </div>

                  {/* Property type + Requirement */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Property Type"
                      required
                      error={errors.propertyType}
                    >
                      <select
                        value={form.propertyType}
                        onChange={(e) =>
                          updateField(
                            "propertyType",
                            e.target.value
                          )
                        }
                        className={`${inputClass} ${
                          !form.propertyType
                            ? "text-slate-400"
                            : ""
                        }`}
                      >
                        <option value="">
                          Select property type
                        </option>

                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField
                      label="Requirement"
                      required
                      error={errors.requirement}
                    >
                      <select
                        value={form.requirement}
                        onChange={(e) =>
                          updateField(
                            "requirement",
                            e.target.value
                          )
                        }
                        className={`${inputClass} ${
                          !form.requirement
                            ? "text-slate-400"
                            : ""
                        }`}
                      >
                        <option value="">
                          Select requirement
                        </option>

                        {requirements.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Message */}
                  <FormField
                    label="Message"
                    required
                    error={errors.message}
                  >
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        updateField(
                          "message",
                          e.target.value
                        )
                      }
                      rows={4}
                      placeholder="Tell us about your budget, preferred location, land size or any other requirement..."
                      className={`${inputClass} resize-none`}
                    />
                  </FormField>

                  {/* Submit error */}
                  {submitError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] leading-5 text-slate-400">
                      Your information will only be used to
                      respond to your enquiry.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#075c49] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#064f3f] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Form field                                                                  */
/* -------------------------------------------------------------------------- */

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#172033]">
        {label}

        {required && (
          <span className="ml-1 text-[#075c49]">*</span>
        )}
      </label>

      {children}

      {error && (
        <p className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Success state                                                               */
/* -------------------------------------------------------------------------- */

function SuccessState({
  leadId,
  onReset,
}: {
  leadId: string;
  onReset: () => void;
}) {
  return (
    <div className="flex min-h-[470px] items-center justify-center">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#075c49]/10">
          <CheckCircle2 className="h-8 w-8 text-[#075c49]" />
        </div>

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#075c49]">
          Enquiry received
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-[#172033]">
          Thank you for reaching out.
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Your requirement has been recorded successfully.
          Our team will review your enquiry and contact you
          shortly.
        </p>

        {leadId && (
          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5">
            <span className="text-xs text-slate-400">
              Reference
            </span>

            <span className="font-mono text-xs font-semibold text-[#172033]">
              {leadId}
            </span>
          </div>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075c49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#064f3f]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>

          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-[#172033] transition hover:bg-slate-50"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    </div>
  );
}