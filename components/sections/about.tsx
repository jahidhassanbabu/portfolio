import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react"

const stats = [
  { label: "Years Experience", value: "3.5+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Happy Clients", value: "8+" },
  { label: "Awards Won", value: "5" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Know Me More</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              I'm <span className="text-primary">Professional Civil Engineer</span>, 
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 3.5+ years of experience in civil construction and interior finishing works, 
              supported by solid exposure to office engineering operations.Highly proficient in construction methodologies,
              material specifications,BOQ preparation,quantity take-off,and quality control procedures.
              Adept at managing site execution while ensuring alignment with drawings, budget, and timelines.
              Recognized for bridging the gap between design intent and practical site implementation to deliver
              efficient, durable, and visually refined projects.
            </p>
            <p className="text-muted-foreground mb-2 leading-relaxed">
            1.Site & Office Practical Experience
            </p>
            <p className="text-muted-foreground mb-2 leading-relaxed">
            2.Civil + Interior Project Execution
            </p>
            <p className="text-muted-foreground mb-2 leading-relaxed">
            3.Strong Materials & Work Process Knowledge
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium text-foreground">3.5+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium text-foreground">Diploma in Civil Engineering</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Specialization</p>
                  <p className="font-medium text-foreground">Structural & Interior</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
