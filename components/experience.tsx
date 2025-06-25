import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Data Analytics & AI Intern",
    company: "Mindsprint",
    period: "May 2025 - Present",
    location: "Remote",
    description: [
      "Building a full-stack Snowflake analytics dashboard (React + Flask) to visualize credit usage, user activity, and query performance",
      "Designed a UI for configuring data masking policies with dynamic schema, table, and role selection",
      "Integrated backend APIs with Snowflake to apply and summarize masking rules in real time",
      "Implemented Gemini API-powered suggestions to enhance data security workflows",
    ],
    skills: ["React", "Flask", "Snowflake", "API Integration", "Data Analytics"],
  },
  {
    title: "Software Solutions and Operational Excellence Intern",
    company: "SES Space & Defense",
    period: "June - August 2025",
    location: "Reston, VA",
    description: [
      "Supporting automation and internal tooling efforts impacting 100+ internal users across strategic ops functions",
      "Developed and maintained Salesforce-based dashboards and utilities to streamline business operations",
      "Used advanced Excel to analyze datasets and automate reporting tasks",
      "Collaborated cross-functionally with technical and non-technical teams to enhance decision-making pipelines",
    ],
    skills: ["Salesforce", "Excel", "Automation", "Data Analysis"],
  },
  {
    title: "Software Engineer",
    company: "Hack4Impact",
    period: "September 2024 – Present",
    location: "University of Maryland",
    description: [
      "Software engineer on the Winrock International client team, building a React/Firebase web app to streamline data collection and project tracking for a global nonprofit",
      "Developing dynamic front-end components, integrating with Firebase backend, and working in agile sprints with designers and backend engineers",
      "Previously completed 12-week Hack4Impact bootcamp covering full-stack web development (MERN stack) and built a capstone project using React.js and Firebase",
    ],
    skills: ["React", "Firebase", "MERN Stack", "Agile Development"],
  },
  {
    title: "Instructional Design Assistant",
    company: "University of Maryland",
    period: "May 2024 – Present",
    location: "College Park, MD",
    description: [
      "Worked with the Office of Digital Learning (ODL) team to help innovate instruction at Smith Business School, refining digital learning resources used by over 2,000 students",
      "Used HTML and CSS as well as Canvas interface to implement digital accessibility guidelines",
      "Assessed digital assets such as Canvas sites, Excel Documents, Word Documents, videos, and PDFs for conformance against accessibility guidelines",
    ],
    skills: ["HTML", "CSS", "Canvas", "Digital Accessibility"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600">My journey in technology and software development</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-purple-600">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-900">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
