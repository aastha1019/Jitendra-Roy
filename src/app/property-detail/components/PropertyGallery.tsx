'use client';

import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Home,
  Images,
  MapPin,
  X,
} from 'lucide-react';

/* =========================================================
   PROPERTY IMAGES
========================================================= */

const images = [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1500606d7-1777100792119.png',
    alt: 'Main view of Green Valley Residential Plot',
  },
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1097c4409-1774514615488.png',
    alt: 'Aerial view of Green Valley Residential Plot',
  },
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_18be02cc0-1766337706816.png',
    alt: 'Side view of Green Valley Residential Plot',
  },
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1573391d7-1775675583770.png',
    alt: 'Corner view of Green Valley Residential Plot',
  },
];

/* =========================================================
   PROPERTY INFORMATION
========================================================= */

const PROPERTY_NAME =
  'Green Valley Residential Plot';

const PROPERTY_LOCATION =
  'Dhawari, Satna, Madhya Pradesh';

const PROPERTY_CATEGORY =
  'Residential';

/* =========================================================
   COMPONENT
========================================================= */

export default function PropertyGallery() {
  const [activeImg, setActiveImg] =
    useState(0);

  const [isViewerOpen, setIsViewerOpen] =
    useState(false);

  /* =======================================================
     TOUCH SWIPE REFS
  ======================================================= */

  const touchStartX =
    useRef<number | null>(null);

  const touchStartY =
    useRef<number | null>(null);

  /* =======================================================
     MOUSE DRAG REFS
  ======================================================= */

  const mouseStartX =
    useRef<number | null>(null);

  const isDragging =
    useRef(false);

  /* =======================================================
     CURRENT IMAGE
  ======================================================= */

  const currentImage =
    images[activeImg];

  /* =======================================================
     GO TO SPECIFIC IMAGE
  ======================================================= */

  const goToImage = (index: number) => {
    if (
      index < 0 ||
      index >= images.length
    ) {
      return;
    }

    setActiveImg(index);
  };

  /* =======================================================
     PREVIOUS IMAGE
  ======================================================= */

  const goToPrevious = () => {
    setActiveImg((prev) => {
      if (prev === 0) {
        return images.length - 1;
      }

      return prev - 1;
    });
  };

  /* =======================================================
     NEXT IMAGE
  ======================================================= */

  const goToNext = () => {
    setActiveImg((prev) => {
      if (
        prev === images.length - 1
      ) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* =======================================================
     TOUCH START
  ======================================================= */

  const handleTouchStart = (
    event: React.TouchEvent
  ) => {
    const touch =
      event.touches[0];

    touchStartX.current =
      touch.clientX;

    touchStartY.current =
      touch.clientY;
  };

  /* =======================================================
     TOUCH END
  ======================================================= */

  const handleTouchEnd = (
    event: React.TouchEvent
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const touch =
      event.changedTouches[0];

    const diffX =
      touch.clientX -
      touchStartX.current;

    const diffY =
      touch.clientY -
      touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    /*
     * Ignore small movements.
     */

    if (Math.abs(diffX) < 45) {
      return;
    }

    /*
     * Ignore vertical scrolling.
     */

    if (
      Math.abs(diffX) <=
      Math.abs(diffY)
    ) {
      return;
    }

    /*
     * Swipe left = next
     */

    if (diffX < 0) {
      goToNext();
    }

    /*
     * Swipe right = previous
     */

    else {
      goToPrevious();
    }
  };

  /* =======================================================
     MOUSE DOWN
  ======================================================= */

  const handleMouseDown = (
    event: React.MouseEvent
  ) => {
    mouseStartX.current =
      event.clientX;

    isDragging.current = true;
  };

  /* =======================================================
     MOUSE UP
  ======================================================= */

  const handleMouseUp = (
    event: React.MouseEvent
  ) => {
    if (
      mouseStartX.current === null ||
      !isDragging.current
    ) {
      return;
    }

    const diffX =
      event.clientX -
      mouseStartX.current;

    mouseStartX.current = null;
    isDragging.current = false;

    /*
     * Ignore normal clicks.
     */

    if (Math.abs(diffX) < 50) {
      return;
    }

    if (diffX < 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  /* =======================================================
     MOUSE LEAVE
  ======================================================= */

  const handleMouseLeave = () => {
    mouseStartX.current = null;
    isDragging.current = false;
  };

  /* =======================================================
     KEYBOARD NAVIGATION
  ======================================================= */

  useEffect(() => {
    if (!isViewerOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        setIsViewerOpen(false);
      }

      if (event.key === 'ArrowLeft') {
        goToPrevious();
      }

      if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    /*
     * Prevent background page scrolling
     * while fullscreen viewer is open.
     */

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      'hidden';

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [isViewerOpen]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          GALLERY HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-foreground ">

      
       

        {/* ===================================================
            MAIN IMAGE AREA
        ==================================================== */}

        <div
          className="
            relative
            h-[480px]
            w-full
            select-none
            overflow-hidden
            touch-pan-y
            bg-black
            sm:h-[560px]
            md:h-[610px]
            lg:h-[660px]
            xl:h-[700px]
          "
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >

          {/* =================================================
              MAIN IMAGE
          ================================================== */}

          <Image
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority={activeImg === 0}
            unoptimized
            draggable={false}
            className="
              object-cover
              object-center
            "
            sizes="100vw"
          />

          {/* =================================================
              IMAGE OVERLAY
          ================================================== */}

          <div className="pointer-events-none absolute inset-0 bg-black/10" />

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[70%]
              bg-gradient-to-t
              from-black/85
              via-black/40
              to-transparent
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-32
              bg-gradient-to-b
              from-black/30
              to-transparent
            "
          />

          {/* =================================================
              TOP BADGES
          ================================================== */}

          <div
            className="
              absolute
              left-4
              right-4
              top-5
              z-10
              flex
              items-start
              justify-between
              gap-3
              sm:left-6
              sm:right-6
              sm:top-6
              lg:left-8
              lg:right-8
            "
          >

            {/* LEFT BADGES */}

            <div className="flex flex-wrap gap-2">

              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-lg
                  border
                  border-white/20
                  bg-black/35
                  px-2.5
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-white
                  backdrop-blur-md
                  sm:px-3
                  sm:py-2
                  sm:text-[11px]
                "
              >
                <CheckCircle2
                  className="
                    h-3.5
                    w-3.5
                    text-white
                  "
                />

                Verified
              </span>

              <span
                className="
                  rounded-lg
                  border
                  border-white/20
                  bg-black/35
                  px-2.5
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-white
                  backdrop-blur-md
                  sm:px-3
                  sm:py-2
                  sm:text-[11px]
                "
              >
                {PROPERTY_CATEGORY}
              </span>

            </div>

            {/* PHOTO BUTTON */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setIsViewerOpen(true);
              }}
              className="
                inline-flex
                shrink-0
                items-center
                gap-1.5
                rounded-lg
                border
                border-white/20
                bg-black/40
                px-3
                py-1.5
                text-[10px]
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                hover:bg-black/60
                active:scale-95
                sm:px-3.5
                sm:py-2
                sm:text-xs
              "
            >
              <Images
                className="
                  h-3.5
                  w-3.5
                  text-primary
                "
              />

              {images.length} Photos
            </button>

          </div>

          {/* =================================================
              PREVIOUS BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label="Previous property image"
            onClick={(event) => {
              event.stopPropagation();
              goToPrevious();
            }}
            className="
              absolute
              left-3
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/35
              text-white
              backdrop-blur-md
              transition-all
              hover:bg-black/60
              active:scale-95
              sm:left-6
              sm:h-11
              sm:w-11
              lg:left-8
            "
          >
            <ChevronLeft
              className="h-5 w-5"
              strokeWidth={1.8}
            />
          </button>

          {/* =================================================
              NEXT BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label="Next property image"
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
            className="
              absolute
              right-3
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/35
              text-white
              backdrop-blur-md
              transition-all
              hover:bg-black/60
              active:scale-95
              sm:right-6
              sm:h-11
              sm:w-11
              lg:right-8
            "
          >
            <ChevronRight
              className="h-5 w-5"
              strokeWidth={1.8}
            />
          </button>

          {/* =================================================
              PROPERTY INFORMATION
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-10
              px-4
              pb-7
              sm:px-6
              sm:pb-9
              lg:px-8
              lg:pb-10
            "
          >

            <div className="mx-auto max-w-7xl">

              <div className="max-w-3xl">

                <h1
                  className="
                    text-3xl
                    font-extrabold
                    leading-[1.05]
                    tracking-tight
                    text-white
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  {PROPERTY_NAME}
                </h1>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-white/75
                    sm:text-base
                  "
                >
                  <MapPin
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-white
                    "
                  />

                  <span>
                    {PROPERTY_LOCATION}
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              IMAGE COUNTER
          ================================================== */}

          <div
            className="
              absolute
              bottom-5
              right-4
              z-20
              rounded-lg
              border
              border-white/20
              bg-black/40
              px-2.5
              py-1.5
              text-[10px]
              font-bold
              text-white
              backdrop-blur-md
              sm:bottom-7
              sm:right-6
              sm:px-3
              sm:py-2
              sm:text-xs
              lg:right-8
            "
          >
            {activeImg + 1} / {images.length}
          </div>

        </div>

        {/* ===================================================
            THUMBNAILS
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-4
            sm:px-6
            sm:py-5
            lg:px-8
          "
        >

          <div
            className="
              flex
              gap-2.5
              overflow-x-auto
              pb-1
              sm:gap-3
            "
          >

            {images.map(
              (image, index) => {
                const isActive =
                  activeImg === index;

                return (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() =>
                      goToImage(index)
                    }
                    aria-label={`Show property image ${index + 1}`}
                    aria-current={
                      isActive
                        ? 'true'
                        : undefined
                    }
                    className={`
                      relative
                      h-16
                      w-24
                      shrink-0
                      overflow-hidden
                      rounded-xl
                      border-2
                      bg-black
                      transition-all
                      duration-200
                      sm:h-20
                      sm:w-28
                      sm:rounded-[14px]

                      ${
                        isActive
                          ? 'border-primary opacity-100 shadow-lg shadow-primary/10'
                          : 'border-white/10 opacity-55 hover:border-white/25 hover:opacity-90'
                      }
                    `}
                  >

                    <Image
                      src={image.src}
                      alt={`${PROPERTY_NAME} image ${index + 1}`}
                      fill
                      unoptimized
                      draggable={false}
                      className="
                        object-cover
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                      sizes="112px"
                    />

                    {isActive && (
                      <div
                        className="
                          absolute
                          inset-0
                          bg-primary/10
                        "
                      />
                    )}

                  </button>
                );
              }
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          FULLSCREEN VIEWER
      ====================================================== */}

      {isViewerOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/95
            p-3
            sm:p-6
          "
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* =================================================
              CLOSE BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label="Close photo viewer"
            onClick={() =>
              setIsViewerOpen(false)
            }
            className="
              absolute
              right-4
              top-4
              z-30
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              text-white
              backdrop-blur-md
              transition-colors
              hover:bg-white/20
              sm:right-6
              sm:top-6
            "
          >
            <X className="h-5 w-5" />
          </button>

          {/* =================================================
              COUNTER
          ================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-5
              z-20
              -translate-x-1/2
              rounded-lg
              border
              border-white/10
              bg-white/10
              px-3
              py-1.5
              text-xs
              font-semibold
              text-white
              backdrop-blur-md
              sm:top-6
            "
          >
            {activeImg + 1} / {images.length}
          </div>

          {/* =================================================
              PREVIOUS
          ================================================== */}

          <button
            type="button"
            aria-label="Previous photo"
            onClick={goToPrevious}
            className="
              absolute
              left-3
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              text-white
              backdrop-blur-md
              transition-colors
              hover:bg-white/20
              sm:left-6
              sm:h-12
              sm:w-12
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* =================================================
              FULLSCREEN IMAGE
          ================================================== */}

          <div
            className="
              relative
              h-[72vh]
              w-full
              max-w-6xl
              sm:h-[80vh]
            "
          >

            <Image
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              priority
              unoptimized
              draggable={false}
              className="object-contain"
              sizes="100vw"
            />

          </div>

          {/* =================================================
              NEXT
          ================================================== */}

          <button
            type="button"
            aria-label="Next photo"
            onClick={goToNext}
            className="
              absolute
              right-3
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              text-white
              backdrop-blur-md
              transition-colors
              hover:bg-white/20
              sm:right-6
              sm:h-12
              sm:w-12
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* =================================================
              FULLSCREEN THUMBNAILS
          ================================================== */}

          <div
            className="
              absolute
              bottom-4
              left-1/2
              z-20
              flex
              max-w-[calc(100%-90px)]
              -translate-x-1/2
              gap-2
              overflow-x-auto
              rounded-xl
              border
              border-white/10
              bg-black/40
              p-2
              backdrop-blur-md
              sm:bottom-6
            "
          >

            {images.map(
              (image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() =>
                    goToImage(index)
                  }
                  aria-label={`Show photo ${index + 1}`}
                  className={`
                    relative
                    h-10
                    w-14
                    shrink-0
                    overflow-hidden
                    rounded-md
                    border
                    transition-all
                    sm:h-12
                    sm:w-16

                    ${
                      activeImg === index
                        ? 'border-primary opacity-100'
                        : 'border-white/10 opacity-50 hover:opacity-90'
                    }
                  `}
                >

                  <Image
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    unoptimized
                    draggable={false}
                    className="object-cover"
                    sizes="64px"
                  />

                </button>
              )
            )}

          </div>

        </div>
      )}
    </>
  );
}