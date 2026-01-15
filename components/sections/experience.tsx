import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Senior Civil Engineer",
    company: "ABC Construction Ltd.",
    period: "2021 - Present",
    description:
      "Leading structural design team, managing multiple projects worth $10M+, and implementing sustainable construction practices.",
  },
  {
    title: "Project Engineer",
    company: "XYZ Engineering Firm",
    period: "2018 - 2021",
    description:
      "Managed residential and commercial projects, coordinated with contractors, and ensured quality control standards.",
  },
  {
    title: "Junior Engineer",
    company: "DEF Builders",
    period: "2016 - 2018",
    description:
      "Assisted in structural analysis, site supervision, and preparation of technical drawings and specifications.",
  },
]

const education = [
  {
    degree: "M.Sc. in Structural Engineering",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    period: "2019 - 2021",
    description: "Specialized in earthquake-resistant design and advanced structural analysis.",
  },
  {
    degree: "Diploma in Civil Engineering",
    institution: "Tangail Polytechnic Institute",
    period: "2017 - 2021",
    description: "Graduated with honors, focused on structural and geotechnical engineering.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Resume</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card border-border border-l-4 border-l-primary">
                  <CardContent className="p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-foreground">{exp.title}</h4>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium text-sm mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card border-border border-l-4 border-l-accent">
                  <CardContent className="p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-foreground">{edu.degree}</h4>
                      <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-accent font-medium text-sm mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
