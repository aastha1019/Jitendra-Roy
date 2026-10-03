'use client';

import React, { useCallback, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Calculator,
  IndianRupee,
  Info,
  Landmark,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export default function InvestmentCalculator() {
  const [landPrice, setLandPrice] = useState('1000000');
  const [appreciation, setAppreciation] = useState('12');
  const [years, setYears] = useState('5');
  const [regCost, setRegCost] = useState('7');

  /* =========================================================
     CALCULATIONS
  ========================================================= */

  const result = useMemo(() => {
    const price = Math.max(
      parseFloat(landPrice) || 0,
      0,
    );

    const rate =
      Math.max(
        parseFloat(appreciation) || 0,
        0,
      ) / 100;

    const yrs = Math.max(
      parseFloat(years) || 1,
      1,
    );

    const reg =
      Math.max(
        parseFloat(regCost) || 0,
        0,
      ) / 100;

    const futureValue =
      price * Math.pow(1 + rate, yrs);

    const registrationCost =
      price * reg;

    const totalInvestment =
      price + registrationCost;

    const profit =
      futureValue - totalInvestment;

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
  }, [
    landPrice,
    appreciation,
    years,
    regCost,
  ]);

  /* =========================================================
     FORMATTERS
  ========================================================= */

  const formatINR = useCallback(
    (value: number) => {
      if (!Number.isFinite(value)) {
        return '₹0';
      }

      if (value >= 10000000) {
        return `₹${(
          value / 10000000
        ).toFixed(2)} Cr`;
      }

      if (value >= 100000) {
        return `₹${(
          value / 100000
        ).toFixed(2)} L`;
      }

      return `₹${Math.round(
        value,
      ).toLocaleString('en-IN')}`;
    },
    [],
  );

  const formatFullINR = useCallback(
    (value: number) => {
      if (!Number.isFinite(value)) {
        return '₹0';
      }

      return `₹${Math.round(
        value,
      ).toLocaleString('en-IN')}`;
    },
    [],
  );

  const growthMultiple =
    result.totalInvestment > 0
      ? result.futureValue /
        result.totalInvestment
      : 0;

  const growth = Math.max(
    result.futureValue -
      result.totalInvestment,
    0,
  );

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <section
      id="calculator"
      className="
        relative
        overflow-hidden
        bg-[#f7faf8]
        pt-20
        pb-12
        sm:pt-24
        sm:pb-14
        lg:pt-24
        lg:pb-16
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            inset-0
            opacity-50
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(7,92,73,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(7,92,73,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: '44px 44px',
          }}
        />

        <div
          className="
            absolute
            -left-40
            top-32
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#075c49]/[0.035]
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#d5b45a]/[0.035]
            blur-[100px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-[760px]
            text-center
          "
        >
          {/* Badge */}

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#075c49]/10
              bg-white
              px-4
              py-2
              shadow-sm
            "
          >
            <Calculator
              className="
                h-4
                w-4
                text-[#075c49]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#075c49]
              "
            >
              Investment Calculator
            </span>

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#d5b45a]
              "
            />
          </div>

          {/* Heading */}

          <h2
            className="
              text-[32px]
              font-semibold
              leading-[1.1]
              tracking-[-0.04em]
              text-[#172033]

              sm:text-[42px]

              lg:text-[48px]
            "
          >
            See what your{' '}
            <span className="text-[#075c49]">
              land investment
            </span>{' '}
            could become.
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[690px]
              text-[13px]
              leading-6
              text-[#718079]

              sm:text-[15px]
              sm:leading-7
            "
          >
            Estimate your potential future value using
            purchase price, appreciation, investment
            period and transaction costs.
          </p>
        </div>

        {/* ===================================================
            MAIN CALCULATOR
        ==================================================== */}

        <div
          className="
            mt-10
            overflow-hidden
            rounded-[24px]
            border
            border-[#dce6e1]
            bg-white
            shadow-[0_20px_60px_rgba(23,32,51,0.07)]

            sm:mt-12
            sm:rounded-[28px]

            lg:mt-14
          "
        >
          <div
            className="
              grid
              grid-cols-1

              lg:grid-cols-[0.95fr_1.05fr]
            "
          >
            {/* =================================================
                INPUT PANEL
            ================================================== */}

            <div
              className="
                p-5

                sm:p-7

                lg:p-9
                xl:p-10
              "
            >
              {/* Header */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-[#e7eeea]
                  pb-5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#e9f3ef]
                      text-[#075c49]
                    "
                  >
                    <Landmark className="h-5 w-5" />
                  </div>

                  <div>
                    <h3
                      className="
                        text-[15px]
                        font-bold
                        text-[#172033]

                        sm:text-[17px]
                      "
                    >
                      Investment details
                    </h3>

                    <p
                      className="
                        mt-0.5
                        text-[11px]
                        text-[#87938e]

                        sm:text-xs
                      "
                    >
                      Adjust your assumptions
                    </p>
                  </div>
                </div>

                <span
                  className="
                    rounded-full
                    bg-[#f1f6f3]
                    px-3
                    py-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#65756e]
                  "
                >
                  Scenario
                </span>
              </div>

              {/* Controls */}

              <div
                className="
                  mt-7
                  space-y-7
                "
              >
                {/* =================================================
                    PRICE
                ================================================== */}

                <div>
                  <div
                    className="
                      mb-2.5
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <label
                      htmlFor="land-price"
                      className="
                        text-[12px]
                        font-semibold
                        text-[#172033]

                        sm:text-[13px]
                      "
                    >
                      Land purchase price
                    </label>

                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-wider
                        text-[#8b9791]
                      "
                    >
                      INR
                    </span>
                  </div>

                  <div className="relative">
                    <IndianRupee
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        h-[18px]
                        w-[18px]
                        -translate-y-1/2
                        text-[#66746e]
                      "
                    />

                    <input
                      id="land-price"
                      type="number"
                      min="0"
                      value={landPrice}
                      onChange={(e) =>
                        setLandPrice(
                          e.target.value,
                        )
                      }
                      className="
                        h-13
                        w-full
                        rounded-xl
                        border
                        border-[#d8e3de]
                        bg-[#fbfcfb]
                        pl-11
                        pr-4
                        text-[16px]
                        font-semibold
                        text-[#172033]
                        outline-none
                        transition

                        focus:border-[#075c49]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#075c49]/10
                      "
                    />
                  </div>

                  <div
                    className="
                      mt-2
                      flex
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        text-[#8b9791]

                        sm:text-[11px]
                      "
                    >
                      Current investment
                    </span>

                    <span
                      className="
                        text-[11px]
                        font-bold
                        text-[#075c49]

                        sm:text-xs
                      "
                    >
                      {formatFullINR(
                        parseFloat(
                          landPrice,
                        ) || 0,
                      )}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    APPRECIATION
                ================================================== */}

                <RangeControl
                  id="appreciation"
                  label="Expected annual appreciation"
                  value={appreciation}
                  suffix="%"
                  min="5"
                  max="30"
                  step="1"
                  leftLabel="5%"
                  centerLabel="15%"
                  rightLabel="30%"
                  onChange={setAppreciation}
                />

                {/* =================================================
                    YEARS
                ================================================== */}

                <RangeControl
                  id="investment-years"
                  label="Investment period"
                  value={years}
                  suffix={
                    Number(years) === 1
                      ? ' Year'
                      : ' Years'
                  }
                  min="1"
                  max="20"
                  step="1"
                  leftLabel="1 Year"
                  centerLabel="10 Years"
                  rightLabel="20 Years"
                  onChange={setYears}
                />

                {/* =================================================
                    REGISTRATION
                ================================================== */}

                <RangeControl
                  id="registration-cost"
                  label="Registration & stamp duty"
                  value={regCost}
                  suffix="%"
                  min="5"
                  max="15"
                  step="1"
                  leftLabel="5%"
                  centerLabel="10%"
                  rightLabel="15%"
                  onChange={setRegCost}
                />
              </div>

              {/* Information */}

              <div
                className="
                  mt-7
                  flex
                  gap-3
                  rounded-xl
                  border
                  border-[#dfe9e4]
                  bg-[#f7faf8]
                  p-3.5

                  sm:p-4
                "
              >
                <Info
                  className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    text-[#075c49]
                  "
                />

                <p
                  className="
                    text-[10px]
                    leading-5
                    text-[#78857f]

                    sm:text-[11px]
                  "
                >
                  Adjust the values to compare
                  different investment scenarios.
                </p>
              </div>
            </div>

            {/* =================================================
                RESULTS
            ================================================== */}

            <div
              className="
                border-t
                border-[#e1e9e5]
                bg-[#f9fbfa]
                p-5

                sm:p-7

                lg:border-l
                lg:border-t-0
                lg:p-9
                xl:p-10
              "
            >
              {/* =================================================
                  MAIN RESULT
              ================================================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  bg-[#075c49]
                  p-6
                  text-white
                  shadow-[0_15px_35px_rgba(7,92,73,0.16)]

                  sm:p-7
                "
              >
                {/* Decoration */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-14
                    -top-16
                    h-44
                    w-44
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-8
                    h-28
                    w-28
                    rounded-full
                    border
                    border-[#d5b45a]/25
                  "
                />

                <div className="relative">
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <TrendingUp
                        className="
                          h-4
                          w-4
                          text-[#d5b45a]
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-white/65

                          sm:text-[11px]
                        "
                      >
                        Estimated future value
                      </span>
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#d5b45a]/30
                        bg-[#d5b45a]/10
                        px-2.5
                        py-1
                        text-[9px]
                        font-semibold
                        text-[#e8cf80]
                      "
                    >
                      {years}Y scenario
                    </span>
                  </div>

                  {/* BIG VALUE */}

                  <div
                    className="
                      mt-4
                      text-[42px]
                      font-extrabold
                      leading-none
                      tracking-[-0.05em]

                      sm:text-[52px]

                      lg:text-[56px]
                    "
                  >
                    {formatINR(
                      result.futureValue,
                    )}
                  </div>

                  <p
                    className="
                      mt-3
                      text-[11px]
                      leading-5
                      text-white/60

                      sm:text-xs
                    "
                  >
                    Based on {appreciation}%
                    annual appreciation over{' '}
                    {years}{' '}
                    {Number(years) === 1
                      ? 'year'
                      : 'years'}.
                  </p>

                  {/* Growth */}

                  <div
                    className="
                      mt-6
                      grid
                      grid-cols-2
                      gap-4
                      border-t
                      border-white/10
                      pt-5
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.15em]
                          text-white/40
                        "
                      >
                        Potential growth
                      </p>

                      <p
                        className="
                          mt-1
                          text-[17px]
                          font-bold
                          text-white

                          sm:text-lg
                        "
                      >
                        {formatINR(growth)}
                      </p>
                    </div>

                    <div className="text-right">
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.15em]
                          text-white/40
                        "
                      >
                        Value multiple
                      </p>

                      <p
                        className="
                          mt-1
                          text-[17px]
                          font-bold
                          text-white

                          sm:text-lg
                        "
                      >
                        {growthMultiple.toFixed(
                          2,
                        )}
                        ×
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  METRICS
              ================================================== */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-3
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#dce6e1]
                  bg-white
                "
              >
                <Metric
                  label="Investment"
                  value={formatINR(
                    result.totalInvestment,
                  )}
                />

                <Metric
                  label="Profit"
                  value={formatINR(
                    result.profit,
                  )}
                  positive
                />

                <Metric
                  label="ROI"
                  value={`${result.roi.toFixed(
                    1,
                  )}%`}
                  positive
                />
              </div>

              {/* =================================================
                  ROI CARD
              ================================================== */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-4
                  rounded-[18px]
                  border
                  border-[#dce6e1]
                  bg-white
                  px-5
                  py-4

                  sm:px-6
                  sm:py-5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#e8f3ee]
                      text-[#075c49]
                    "
                  >
                    <TrendingUp className="h-5 w-5" />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#172033]

                        sm:text-[11px]
                      "
                    >
                      Estimated return
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        text-[#8a9690]

                        sm:text-[11px]
                      "
                    >
                      Total ROI over {years}{' '}
                      {Number(years) === 1
                        ? 'year'
                        : 'years'}
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline">
                  <span
                    className="
                      text-[32px]
                      font-extrabold
                      tracking-[-0.05em]
                      text-[#172033]

                      sm:text-[40px]
                    "
                  >
                    {result.roi.toFixed(1)}
                  </span>

                  <span
                    className="
                      ml-1
                      text-xl
                      font-bold
                      text-[#075c49]
                    "
                  >
                    %
                  </span>
                </div>
              </div>

              {/* =================================================
                  CTA
              ================================================== */}

              <a
                href={`https://wa.me/918462097970?text=${encodeURIComponent(
                  'Hello Jitendra Roy Land Brokers, I want investment advice for land in Satna.',
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-4
                  flex
                  items-center
                  justify-between
                  rounded-[16px]
                  border
                  border-[#075c49]/10
                  bg-[#edf5f1]
                  px-4
                  py-3.5
                  transition-all
                  duration-300

                  hover:border-[#075c49]/20
                  hover:bg-[#e4f1eb]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#075c49]
                      text-white
                    "
                  >
                    <ShieldCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        text-[#172033]

                        sm:text-xs
                      "
                    >
                      Want a real market assessment?
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        text-[#81908a]
                      "
                    >
                      Talk to our local property team
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#075c49]
                    shadow-sm
                    transition-transform
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                >
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-4
            flex
            max-w-[900px]
            items-start
            justify-center
            gap-2
            px-3
            text-center
          "
        >
          <Info
            className="
              mt-0.5
              h-3.5
              w-3.5
              shrink-0
              text-[#89958f]
            "
          />

          <p
            className="
              text-[9px]
              leading-5
              text-[#89958f]

              sm:text-[10px]
            "
          >
            Illustrative estimate only. Actual property
            appreciation and returns may vary based on
            location, market conditions, transaction
            costs, infrastructure and holding period.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   RANGE CONTROL
========================================================= */

function RangeControl({
  id,
  label,
  value,
  suffix,
  min,
  max,
  step,
  leftLabel,
  centerLabel,
  rightLabel,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  suffix: string;
  min: string;
  max: string;
  step: string;
  leftLabel: string;
  centerLabel: string;
  rightLabel: string;
  onChange: (value: string) => void;
}) {
  const percentage =
    ((Number(value) - Number(min)) /
      (Number(max) - Number(min))) *
    100;

  return (
    <div>
      <div
        className="
          mb-3
          flex
          items-center
          justify-between
          gap-3
        "
      >
        <label
          htmlFor={id}
          className="
            text-[12px]
            font-semibold
            text-[#172033]

            sm:text-[13px]
          "
        >
          {label}
        </label>

        <span
          className="
            shrink-0
            rounded-full
            bg-[#e8f3ee]
            px-3
            py-1.5
            text-[10px]
            font-bold
            text-[#075c49]

            sm:text-[11px]
          "
        >
          {value}
          {suffix}
        </span>
      </div>

      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          investment-range
          h-2
          w-full
          cursor-pointer
          appearance-none
          rounded-full
        "
        style={{
          background: `
            linear-gradient(
              to right,
              #075c49 0%,
              #075c49 ${percentage}%,
              #dfe8e3 ${percentage}%,
              #dfe8e3 100%
            )
          `,
        }}
      />

      <div
        className="
          mt-2
          flex
          justify-between
          text-[9px]
          text-[#8b9791]

          sm:text-[10px]
        "
      >
        <span>{leftLabel}</span>
        <span>{centerLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
}

/* =========================================================
   METRIC
========================================================= */

function Metric({
  label,
  value,
  positive = false,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div
      className="
        min-w-0
        px-3
        py-4

        sm:px-5
        sm:py-5
      "
    >
      <p
        className="
          truncate
          text-[8px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-[#89958f]

          sm:text-[9px]
        "
      >
        {label}
      </p>

      <p
        className={`
          mt-1.5
          truncate
          text-[15px]
          font-bold
          tracking-tight

          sm:text-[18px]

          ${
            positive
              ? 'text-[#075c49]'
              : 'text-[#172033]'
          }
        `}
      >
        {value}
      </p>
    </div>
  );
}