'use client';

import React, { useCallback, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Calculator,
  CheckCircle2,
  IndianRupee,
  Info,
  Landmark,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export default function InvestmentCalculator() {
  const [landPrice, setLandPrice] = useState<string>('1000000');
  const [appreciation, setAppreciation] = useState<string>('12');
  const [years, setYears] = useState<string>('5');
  const [regCost, setRegCost] = useState<string>('7');

  const result = useMemo(() => {
    const price = Math.max(parseFloat(landPrice) || 0, 0);
    const rate = Math.max(parseFloat(appreciation) || 0, 0) / 100;
    const yrs = Math.max(parseFloat(years) || 1, 1);
    const reg = Math.max(parseFloat(regCost) || 0, 0) / 100;

    const futureValue = price * Math.pow(1 + rate, yrs);
    const registrationCost = price * reg;
    const totalInvestment = price + registrationCost;
    const profit = futureValue - totalInvestment;
    const roi =
      totalInvestment > 0
        ? (profit / totalInvestment) * 100
        : 0;

    return {
      futureValue,
      registrationCost,
      totalInvestment,
      profit,
      roi,
    };
  }, [landPrice, appreciation, years, regCost]);

  const formatINR = useCallback((value: number) => {
    if (!Number.isFinite(value)) return '₹0';

    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    }

    return `₹${Math.round(value).toLocaleString('en-IN')}`;
  }, []);

  const formatFullINR = useCallback((value: number) => {
    if (!Number.isFinite(value)) return '₹0';

    return `₹${Math.round(value).toLocaleString('en-IN')}`;
  }, []);

  const growthMultiple =
    result.totalInvestment > 0
      ? result.futureValue / result.totalInvestment
      : 0;

  return (
    <section
      id="calculator"
      className="relative overflow-hidden bg-muted/40 py-20 sm:py-24 lg:py-0"
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
              <Calculator className="h-3.5 w-3.5" />
              Investment Calculator
            </span>
          </div>

          <h2 className="text-section-title font-extrabold leading-[1.05] tracking-tight text-foreground">
            See the potential of your{' '}
            <span className="text-primary">
              land investment.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Estimate how your land investment could grow based on purchase
            price, expected appreciation, holding period, and transaction costs.
          </p>

        </div>

        {/* ================================================== */}
        {/* MAIN CALCULATOR */}
        {/* ================================================== */}

        <div className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-xl lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================================================== */}
          {/* INPUT PANEL */}
          {/* ================================================== */}

          <div className="border-b border-border/70 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">

            <div className="mb-8">

              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                  <Landmark className="h-4 w-4" />
                </div>

                <h3 className="text-base font-bold text-foreground">
                  Investment Details
                </h3>
              </div>

              <p className="text-xs leading-5 text-muted-foreground">
                Adjust the assumptions below to explore a potential scenario.
              </p>

            </div>

            <div className="space-y-7">

              {/* LAND PRICE */}
              <div>
                <label
                  htmlFor="land-price"
                  className="mb-2 flex items-center justify-between text-xs font-semibold text-foreground"
                >
                  <span>Land Purchase Price</span>

                  <span className="font-normal text-muted-foreground">
                    INR
                  </span>
                </label>

                <div className="relative">
                  <IndianRupee className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <input
                    id="land-price"
                    type="number"
                    min="0"
                    value={landPrice}
                    onChange={(e) => setLandPrice(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm font-semibold text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="1000000"
                  />
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">
                    Current investment
                  </span>

                  <span className="text-xs font-bold text-primary">
                    {formatFullINR(parseFloat(landPrice) || 0)}
                  </span>
                </div>
              </div>

              {/* APPRECIATION */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label
                    htmlFor="appreciation"
                    className="text-xs font-semibold text-foreground"
                  >
                    Expected Annual Appreciation
                  </label>

                  <span className="rounded-lg bg-primary/[0.07] px-2.5 py-1 text-xs font-bold text-primary">
                    {appreciation}%
                  </span>
                </div>

                <input
                  id="appreciation"
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={appreciation}
                  onChange={(e) => setAppreciation(e.target.value)}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
                />

                <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                  <span>5%</span>
                  <span>15%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* YEARS */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label
                    htmlFor="investment-years"
                    className="text-xs font-semibold text-foreground"
                  >
                    Investment Period
                  </label>

                  <span className="rounded-lg bg-primary/[0.07] px-2.5 py-1 text-xs font-bold text-primary">
                    {years} {Number(years) === 1 ? 'Year' : 'Years'}
                  </span>
                </div>

                <input
                  id="investment-years"
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
                />

                <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                  <span>1 Year</span>
                  <span>10 Years</span>
                  <span>20 Years</span>
                </div>
              </div>

              {/* REGISTRATION */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label
                    htmlFor="registration-cost"
                    className="text-xs font-semibold text-foreground"
                  >
                    Registration & Stamp Duty
                  </label>

                  <span className="rounded-lg bg-primary/[0.07] px-2.5 py-1 text-xs font-bold text-primary">
                    {regCost}%
                  </span>
                </div>

                <input
                  id="registration-cost"
                  type="range"
                  min="5"
                  max="15"
                  step="1"
                  value={regCost}
                  onChange={(e) => setRegCost(e.target.value)}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
                />

                <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                  <span>5%</span>
                  <span>10%</span>
                  <span>15%</span>
                </div>
              </div>

            </div>

            {/* Input note */}
            <div className="mt-8 flex gap-3 rounded-xl border border-border/70 bg-muted/40 p-3.5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

              <p className="text-[10px] leading-5 text-muted-foreground">
                You can adjust these assumptions to compare different
                investment scenarios. Actual appreciation varies by location,
                demand, infrastructure, and market conditions.
              </p>
            </div>

          </div>

          {/* ================================================== */}
          {/* RESULTS PANEL */}
          {/* ================================================== */}

          <div className="bg-background p-6 sm:p-8 lg:p-10">

            {/* Main Result */}
            <div className="relative overflow-hidden rounded-[22px] bg-primary p-6 text-white shadow-lg shadow-primary/20 sm:p-7">

             

              <div className="relative">

                <div className="mb-2 flex items-center gap-2 text-white/65">
                  <TrendingUp className="h-4 w-4" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.15em]">
                    Estimated Future Value
                  </span>
                </div>

                <div className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {formatINR(result.futureValue)}
                </div>

                <p className="mt-2 text-xs text-white/55">
                  After {years} {Number(years) === 1 ? 'year' : 'years'} at an
                  estimated {appreciation}% annual appreciation
                </p>

                {/* Growth indicator */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-white/45">
                      Potential Growth
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      {formatINR(
                        Math.max(
                          result.futureValue - result.totalInvestment,
                          0
                        )
                      )}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wide text-white/45">
                      Value Multiple
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      {growthMultiple.toFixed(2)}×
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* Secondary results */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <ResultCard
                label="Total Investment"
                value={formatINR(result.totalInvestment)}
                description={`Includes ${regCost}% registration cost`}
                icon={IndianRupee}
              />

              <ResultCard
                label="Estimated Profit"
                value={formatINR(result.profit)}
                description={`Potential gain over ${years} years`}
                icon={TrendingUp}
                highlighted
              />

            </div>

            {/* ROI */}
            <div className="mt-4 rounded-[22px] border border-primary/10 bg-primary/[0.045] p-6 text-center">

              <div className="mb-2 flex items-center justify-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                  Estimated Return on Investment
                </span>
              </div>

              <div className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
                {result.roi.toFixed(1)}%
              </div>

              <p className="mt-2 text-xs text-muted-foreground">
                Total estimated ROI over {years}{' '}
                {Number(years) === 1 ? 'year' : 'years'}
              </p>

            </div>

            {/* Consultation CTA */}
            <div className="mt-4 rounded-[22px] border border-border/70 bg-card p-5">

              <div className="mb-4 flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    Want a real market assessment?
                  </h4>

                  <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                    Our team can help you evaluate actual property rates,
                    location potential, and investment opportunities in Satna.
                  </p>
                </div>

              </div>

              <a
                href={`https://wa.me/918462097970?text=${encodeURIComponent(
                  'Hello Jitendra Roy Land Brokers, I want investment advice for land in Satna.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
              >
                Get Expert Investment Advice

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

            </div>

          </div>

        </div>

        {/* ================================================== */}
        {/* DISCLAIMER */}
        {/* ================================================== */}

        <div className="mx-auto mt-5 flex max-w-4xl items-start justify-center gap-2 px-2 text-center">

          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />

          <p className="text-[10px] leading-5 text-muted-foreground">
            This calculator provides an illustrative estimate based on the
            assumptions entered. It does not guarantee future property
            appreciation, investment returns, or market performance. Actual
            returns may vary significantly depending on location, market
            conditions, transaction costs, and holding period.
          </p>

        </div>

      </div>
    </section>
  );
}

/* ================================================== */
/* RESULT CARD */
/* ================================================== */

function ResultCard({
  label,
  value,
  description,
  icon: Icon,
  highlighted = false,
}: {
  label: string;
  value: string;
  description: string;
  icon: React.ElementType;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-[20px] border p-5 ${
        highlighted
          ? 'border-primary/10 bg-primary/[0.045]'
          : 'border-border/70 bg-card'
      }`}
    >
      <div className="mb-3 flex items-center gap-2">

        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
            highlighted
              ? 'bg-primary/[0.08] text-primary'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          <Icon className="h-4 w-4" />
        </div>

        <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
          {label}
        </span>

      </div>

      <p className="text-xl font-extrabold tracking-tight text-foreground">
        {value}
      </p>

      <p className="mt-1 text-[10px] text-muted-foreground">
        {description}
      </p>
    </div>
  );
}