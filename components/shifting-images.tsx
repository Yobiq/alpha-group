"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/modern-construction-site-with-cranes-and-workers-a.jpg",
  "/professional-construction-team-reviewing-blueprint.jpg",
  "/large-commercial-building-under-construction-with-.jpg",
  "/architectural-building-project-with-modern-glass-f.jpg",
]

export function ShiftingImages() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentIndex(nextIndex)
        setNextIndex((nextIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 1500)
    }, 6000)

    return () => clearInterval(interval)
  }, [nextIndex])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
            index === currentIndex
              ? isTransitioning
                ? "opacity-0 scale-110"
                : "opacity-20 scale-105"
              : index === nextIndex && isTransitioning
                ? "opacity-20 scale-100"
                : "opacity-0 scale-95"
          }`}
          style={{
            animation:
              index === currentIndex && !isTransitioning ? "parallax-float 20s ease-in-out infinite" : undefined,
          }}
        >
          <Image src={src || "/placeholder.svg"} alt="" fill className="object-cover" priority={index === 0} />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}
