"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    id: 1,
    src: "/construction-workers-building.png",
    alt: "Construction Site",
    category: "On Site",
  },
  {
    id: 2,
    src: "/civil-engineer-reviewing-blueprints.jpg",
    alt: "Blueprint Review",
    category: "Planning",
  },
  {
    id: 3,
    src: "/building-foundation-construction.jpg",
    alt: "Foundation Work",
    category: "On Site",
  },
  {
    id: 4,
    src: "/team-meeting-construction-office.jpg",
    alt: "Team Meeting",
    category: "Office",
  },
  {
    id: 5,
    src: "/structural-steel-frame-building.jpg",
    alt: "Steel Structure",
    category: "On Site",
  },
  {
    id: 6,
    src: "/completed-building-exterior-modern.jpg",
    alt: "Completed Project",
    category: "Completed",
  },
  {
    id: 7,
    src: "/engineer-surveying-construction-site.jpg",
    alt: "Site Survey",
    category: "On Site",
  },
  {
    id: 8,
    src: "/construction-project-night-view-lights.jpg",
    alt: "Night Work",
    category: "On Site",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Photo Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-primary-foreground font-medium text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Gallery preview"
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
