"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const technicalSkills = [
  { name: "AutoCAD 2021", level: 95 },
  { name: "SketchUp Pro 2024", level: 95 },
  { name: "Lumion 12.5", level: 90},
  { name: "Enscape", level: 80 },
  { name: "V-ray", level: 75 },
  { name: "Office 365", level: 90 },
]

const professionalSkills = [
  { name: "Structural Design", icon: "🏗️" },
  { name: "Project Management", icon: "📊" },
  { name: "Cost Estimation", icon: "💰" },
  { name: "Quality Control", icon: "✅" },
  { name: "Site Supervision", icon: "👷" },
  { name: "Team Leadership", icon: "👥" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What I Can Do</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Professional Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {professionalSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
                    <p className="text-sm font-medium text-foreground">{skill.name}</p>
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
