"use client"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"
import Link from "next/link"
export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--primary)_0%,transparent_50%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,var(--accent)_0%,transparent_50%)] opacity-5" />
      </div>
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content - Text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Welcome to my portfolio</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight text-balance">
              Hi, I'm <span className="text-primary">Jahid Hassan Babu</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">Civil Engineer </h2>
            <p className="text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            Experienced Civil Engineer with strong practical exposure in (Construction & Interior) works,
            combining site execution excellence with office-based engineering processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="gap-2">
                <Link href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] lg:w-[380px] lg:h-[480px] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="Jahid Hassan (1).jpg"
                  alt="Jahid-Hassan-Babu-Civil.pdf"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
              <div className="absolute -inset-3 rounded-3xl border-2 border-primary/40 animate-pulse" />
              <div className="absolute -inset-6 rounded-3xl border border-primary/20 animate-[pulse_2s_ease-in-out_infinite_0.5s]" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-xl animate-[ping_2s_ease-in-out_infinite]" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-xl animate-[ping_2s_ease-in-out_infinite_0.5s]" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-xl animate-[ping_2s_ease-in-out_infinite_1s]" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-xl animate-[ping_2s_ease-in-out_infinite_1.5s]" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
