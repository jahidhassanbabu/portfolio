import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { PortfolioSection } from "@/components/sections/portfolio"
import { ExperienceSection } from "@/components/sections/experience"
import { GallerySection } from "@/components/sections/gallery"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ExperienceSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
