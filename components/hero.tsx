"use client"

import * as React from "react"
import Link from "next/link"
import { type Locale, getTranslations } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

const slideImages = [
  "/slides/building.jpg",
  "/slides/airplane.jpg",
  "/slides/city.jpg",
  "/slides/office.jpg",
]

const slideLinks = [
  "/company/fdi",
  "/visa/d8",
  "/visa/f5",
  "/contact",
]

export function Hero({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)
  const slides = t.slider.slides
  const [current, setCurrent] = React.useState(0)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null)

  const goToSlide = React.useCallback((index: number) => {
    if (index === current) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setIsTransitioning(false)
    }, 300)
  }, [current])

  // Auto-rotate
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 300)
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [slides.length])

  // Reset interval on manual navigation
  const handleDotClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    goToSlide(index)
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 300)
    }, 5000)
  }

  const slide = slides[current]

  return (
    <section className="relative pt-16">
      <div
        className="relative min-h-[520px] md:min-h-[600px] flex items-center"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={slideImages[current]}
            alt=""
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
            VISION 행정사사무소
          </div>

          {/* Content with fade transition */}
          <div
            className={`transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
              {slide.title}
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={getLocalePath(locale, slideLinks[current])}
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-8 h-12 text-base font-semibold rounded-lg transition-colors shadow-lg"
              >
                {slide.cta}
              </Link>
              <Link
                href={getLocalePath(locale, "/contact")}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-8 h-12 text-base font-medium rounded-lg transition-colors backdrop-blur-sm"
              >
                {t.nav.consultation}
              </Link>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2.5 mt-12">
            {slides.map((_: unknown, index: number) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? "w-8 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trust badges below slider */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            {t.hero.trustBadges.map((badge: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
