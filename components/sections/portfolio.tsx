"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye } from "lucide-react"

const categories = ["All", "Residential", "Commercial", "Infrastructure"]

const projects = [
  {
    id: 1,
    title: "Modern Residential Complex",
    category: "Residential",
    image: "/modern-residential-building-architecture.jpg",
    description: "12-story residential building with modern amenities",
  },
  {
    id: 2,
    title: "Corporate Office Tower",
    category: "Commercial",
    image: "/corporate-office-tower-building.jpg",
    description: "20-story commercial building in downtown area",
  },
  {
    id: 3,
    title: "Highway Bridge Project",
    category: "Infrastructure",
    image: "/highway-bridge-construction-engineering.jpg",
    description: "500m span bridge connecting two districts",
  },
  {
    id: 4,
    title: "Luxury Villa Design",
    category: "Residential",
    image: "/luxury-villa-modern-design.jpg",
    description: "Custom-designed luxury villa with pool",
  },
  {
    id: 5,
    title: "Shopping Mall Complex",
    category: "Commercial",
    image: "/shopping-mall-interior-design.jpg",
    description: "Multi-level shopping complex with parking",
  },
  {
    id: 6,
    title: "Water Treatment Plant",
    category: "Infrastructure",
    image: "/water-treatment-plant-facility.jpg",
    description: "Municipal water treatment facility",
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden bg-card border-border group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Eye className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">{project.category}</p>
                <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
