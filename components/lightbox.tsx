"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LightboxImage {
  id: number
  src: string
  title: string
  description: string
  category: string
}

interface LightboxProps {
  images: LightboxImage[]
  currentImageId: number
  onClose: () => void
  onNavigate: (imageId: number) => void
}

export function Lightbox({ images, currentImageId, onClose, onNavigate }: LightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const currentIndex = images.findIndex((img) => img.id === currentImageId)
  const currentImage = images[currentIndex]

  const goToPrevious = useCallback(() => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    onNavigate(images[prevIndex].id)
    setImageLoaded(false)
    setIsZoomed(false)
  }, [currentIndex, images, onNavigate])

  const goToNext = useCallback(() => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    onNavigate(images[nextIndex].id)
    setImageLoaded(false)
    setIsZoomed(false)
  }, [currentIndex, images, onNavigate])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
        case "z":
        case "Z":
          setIsZoomed(!isZoomed)
          break
      }
    },
    [onClose, goToPrevious, goToNext, isZoomed],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [handleKeyDown])

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  if (!currentImage) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h3 className="text-lg font-semibold">{currentImage.title}</h3>
            <p className="text-white/80 text-sm">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleZoom}
              className="text-white hover:bg-white/20 p-2"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="flex items-center justify-center h-full p-4 pt-20 pb-20">
        <div className="relative max-w-full max-h-full">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <img
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.title}
            className={`max-w-full max-h-full object-contain transition-all duration-300 ${
              isZoomed ? "scale-150 cursor-grab" : "cursor-zoom-in"
            } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
            onClick={toggleZoom}
            draggable={false}
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <div className="text-center text-white">
          <p className="text-white/80 text-sm mb-2">{currentImage.description}</p>
          <div className="flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  onNavigate(images[index].id)
                  setImageLoaded(false)
                  setIsZoomed(false)
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Touch/Swipe Areas for Mobile */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer lg:hidden"
        onClick={goToPrevious}
        aria-label="Previous image"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer lg:hidden"
        onClick={goToNext}
        aria-label="Next image"
      />
    </div>
  )
}
