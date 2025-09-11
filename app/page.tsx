"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Download, Award, TrendingUp, Users, Code } from "lucide-react"
import { useEffect, useState } from "react"

const PlayStationCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
    <path d="M12 12m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
  </svg>
)

const PlayStationSquare = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
    <path d="M8 8m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
  </svg>
)

const PlayStationTriangle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
    <path d="M7.5 15h9l-4.5 -8z" />
  </svg>
)

const FerrariLogo = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor">
    <path d="M20 30h60l-10 20H30l-10-20z M25 55h50l-5 15H30l-5-15z" />
  </svg>
)

const LeMansLogo = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor">
    <rect x="10" y="20" width="80" height="60" rx="5" />
    <text x="50" y="55" textAnchor="middle" fontSize="12" fill="white">
      24
    </text>
  </svg>
)

const SpaCircuit = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M10 50 Q30 20 50 50 Q70 80 90 50" />
  </svg>
)

const AnimatedName = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [displayText, setDisplayText] = useState("ADITYA PANDEY")
  const originalName = "ADITYA PANDEY"

  // Mathematical symbols and equations for animation
  const mathSymbols = [
    "∑",
    "∫",
    "∂",
    "∆",
    "π",
    "λ",
    "α",
    "β",
    "γ",
    "θ",
    "μ",
    "σ",
    "∞",
    "≈",
    "≤",
    "≥",
    "∈",
    "∀",
    "∃",
    "∇",
  ]
  const equations = ["f(x)=mx+b", "y=ax²+bx+c", "e^(iπ)+1=0", "∇²φ=0", "∂f/∂x", "∫₀^∞ e^(-x²)dx"]

  useEffect(() => {
    if (isHovered) {
      // Scramble animation
      let iterations = 0
      const maxIterations = 20

      const scrambleInterval = setInterval(() => {
        setDisplayText((prev) => {
          return prev
            .split("")
            .map((char, index) => {
              if (char === " ") return " "
              if (iterations < maxIterations * 0.3) {
                // Phase 1: Random math symbols
                return mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
              } else if (iterations < maxIterations * 0.6) {
                // Phase 2: Mix of equations and symbols
                return Math.random() > 0.7
                  ? equations[Math.floor(Math.random() * equations.length)][Math.floor(Math.random() * 10)] ||
                      mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
                  : mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
              } else {
                // Phase 3: Gradually reveal original letters
                const revealProgress = (iterations - maxIterations * 0.6) / (maxIterations * 0.4)
                const shouldReveal = Math.random() < revealProgress || index < originalName.length * revealProgress
                return shouldReveal ? originalName[index] : mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
              }
            })
            .join("")
        })

        iterations++
        if (iterations >= maxIterations) {
          clearInterval(scrambleInterval)
          setDisplayText(originalName)
        }
      }, 150)

      return () => clearInterval(scrambleInterval)
    } else {
      setDisplayText(originalName)
    }
  }, [isHovered])

  return (
    <h1
      className="text-2xl font-bold tracking-tight cursor-pointer transition-all duration-300 hover:scale-105 font-mono"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        minWidth: "200px",
        fontFamily: isHovered ? "monospace" : "inherit",
        color: isHovered ? "#333" : "inherit",
      }}
    >
      {displayText}
    </h1>
  )
}

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  const floatingIcons = [
    { Component: PlayStationCircle, id: 1 },
    { Component: PlayStationSquare, id: 2 },
    { Component: PlayStationTriangle, id: 3 },
    { Component: FerrariLogo, id: 4 },
    { Component: LeMansLogo, id: 5 },
    { Component: SpaCircuit, id: 6 },
  ]

  const projects = [
    {
      title: "Real-Time Cricket Ball Detection & Tracking",
      subtitle: "Computer Vision Project",
      description:
        "Ever wondered how to track a cricket ball moving at 150+ km/h? I did too. After weeks of experimenting with different detection models, I finally cracked it using YOLOv8. The real challenge wasn't just detection—it was maintaining accuracy when the ball gets occluded by players or goes out of frame.",
      story:
        "The breakthrough came at 2 AM when I realized the issue wasn't my model, but my training data. I spent the next week manually annotating 5000 images, focusing on edge cases like partial occlusions and motion blur. The result? A system that could track balls in real-time with 86% precision.",
      impact: "86% precision achieved",
      metrics: ["86% precision", "63% recall", "68% mAP50(B)", "25+ FPS tracking"],
      tech: ["YOLOv8", "OpenCV", "SORT", "Python"],
      github: "https://github.com/aditya-pandey-ai",
      demo: "#",
    },
    {
      title: "End-to-End ELT Pipeline for TPCH Dataset",
      subtitle: "Data Engineering Project",
      description:
        "Building a data pipeline sounds straightforward until you're dealing with 1M+ rows and everything breaks. This project taught me that data engineering is 20% coding and 80% debugging why your pipeline failed at 3 AM. I learned to love (and hate) Apache Airflow in equal measure.",
      story:
        "The most frustrating part? Spending three days debugging what turned out to be a simple timezone issue in Airflow. But that failure led me to implement comprehensive logging and monitoring, which caught dozens of edge cases I never would have found otherwise.",
      impact: "95% efficiency improvement",
      metrics: ["1M+ rows processed", "100% test coverage", "95% workload reduction", "Automated DAGs"],
      tech: ["Snowflake", "DBT", "Apache Airflow", "SQL"],
      github: "https://github.com/aditya-pandey-ai",
      demo: "#",
    },
    {
      title: "AI Marketing Automation Agent",
      subtitle: "Agentic AI System",
      description:
        "What if an AI could manage marketing campaigns better than humans? I built an autonomous agent that makes real-time decisions about budget allocation and campaign optimization. The scary part? It actually works better than manual management, making decisions in milliseconds that would take humans hours.",
      story:
        "The 'aha' moment came when I watched the agent pause a underperforming campaign and reallocate budget to a high-performer—all while I was sleeping. It had analyzed performance patterns I completely missed and made the optimal decision autonomously.",
      impact: "40% performance boost",
      metrics: ["40% optimization", "100+ daily campaigns", "AI-powered insights", "Real-time analysis"],
      tech: ["LangChain", "Streamlit", "Python", "AI Agents"],
      github: "https://github.com/aditya-pandey-ai",
      demo: "#",
    },
  ]

  const achievements = [
    { metric: "3", label: "Major Projects Completed", icon: <Award className="w-6 h-6" /> },
    { metric: "86%", label: "Best Model Precision", icon: <TrendingUp className="w-6 h-6" /> },
    { metric: "1M+", label: "Data Points Processed", icon: <Users className="w-6 h-6" /> },
    { metric: "2", label: "Professional Certifications", icon: <Code className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative overflow-hidden font-serif">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #6b7280 1px, transparent 0),
              linear-gradient(90deg, transparent 24px, rgba(107,114,128,0.1) 25px, rgba(107,114,128,0.1) 26px, transparent 27px),
              linear-gradient(transparent 24px, rgba(107,114,128,0.1) 25px, rgba(107,114,128,0.1) 26px, transparent 27px)
            `,
            backgroundSize: "25px 25px, 50px 50px, 50px 50px",
          }}
        />
      </div>

      <div className="fixed inset-0 opacity-40 pointer-events-none overflow-hidden">
        {floatingIcons.map((icon, index) => (
          <div
            key={icon.id}
            className={`absolute text-gray-500 floating-icon-${index + 1}`}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
          >
            <icon.Component />
          </div>
        ))}
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <AnimatedName />
            <div className="flex items-center space-x-8">
              <nav className="flex space-x-8 text-sm font-medium uppercase tracking-wide font-sans">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="transition-all duration-300 hover:scale-105 cursor-pointer hover:text-gray-500 text-gray-700"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="transition-all duration-300 hover:scale-105 cursor-pointer hover:text-gray-500 text-gray-700"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="transition-all duration-300 hover:scale-105 cursor-pointer hover:text-gray-500 text-gray-700"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="transition-all duration-300 hover:scale-105 cursor-pointer hover:text-gray-500 text-gray-700"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section
        id="hero"
        className={`pt-32 pb-16 px-6 transition-all duration-1000 relative ${
          visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-transparent via-gray-300 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="border-l-4 border-gray-700 pl-6 mb-8 overflow-hidden">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-pulse font-serif text-gray-800">
                  BUILDING INTELLIGENT
                  <br />
                  <span className="italic bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                    AI SYSTEMS
                  </span>
                </h2>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gray-700 text-white hover:bg-gray-600 px-8 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-3 bg-transparent transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <a href="#" target="_blank" rel="noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-gray-500 pl-6">
                  <p className="text-lg text-gray-600 italic leading-relaxed font-sans">
                    "I don't just build AI models—I craft intelligent systems that think, learn, and solve real
                    problems. Every line of code is a step toward making machines truly understand our world."
                  </p>
                </div>

                <div className="flex items-center space-x-6">
                  <span className="text-sm font-medium uppercase tracking-wide text-gray-500 font-sans">Connect:</span>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/aditya-pandey-ai"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 border border-gray-500 hover:border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/ap2304"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 border border-gray-500 hover:border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:pandey.aditya2304@gmail.com"
                      className="p-2 border border-gray-500 hover:border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="border-2 border-gray-700 p-6 bg-white">
                  <h4 className="font-bold text-lg uppercase tracking-wide mb-4 border-b border-gray-500 pb-2 font-serif text-gray-800">
                    What I'm Building Right Now
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm font-sans text-gray-800">Autonomous AI Agents</p>
                        <p className="text-xs text-gray-600 font-sans">
                          Teaching machines to make decisions without human intervention—it's like raising digital
                          children
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm font-sans text-gray-800">Real-time Computer Vision</p>
                        <p className="text-xs text-gray-600 font-sans">
                          Making computers see and understand the world as fast as humans do (sometimes faster)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm font-sans text-gray-800">Scalable Data Pipelines</p>
                        <p className="text-xs text-gray-600 font-sans">
                          Building the invisible infrastructure that powers intelligent decisions at scale
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-700 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/data-scientist-headshot.png"
                    alt="Aditya Pandey"
                    className="w-32 h-32 rounded-full border-4 border-gray-700 mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide font-serif text-gray-800">PROFILE</h3>
                  <div className="w-12 h-0.5 bg-gray-700 mb-4"></div>
                </div>

                <article className="text-sm leading-relaxed space-y-3 font-sans text-gray-700">
                  <p className="font-medium">
                    <strong className="text-gray-800">Aditya Pandey</strong> isn't your typical final-year student.
                    While others are cramming for exams, he's building AI systems that actually work in the real world.
                  </p>

                  <p>
                    Currently pursuing BTech in AI/ML at Shri Ramdeobaba College, Aditya has already mastered{" "}
                    <strong className="text-gray-800">PyTorch, TensorFlow, and the entire modern AI stack</strong>. But
                    here's what makes him different—he doesn't just follow tutorials.
                  </p>

                  <p>
                    His cricket ball tracking system didn't just achieve{" "}
                    <strong className="text-gray-800">86% precision</strong> by accident. It took weeks of debugging,
                    thousands of annotated images, and more than a few 3 AM breakthroughs. That's the kind of
                    persistence that turns good students into great engineers.
                  </p>

                  <p className="italic border-l-2 border-gray-700 pl-3 text-gray-600">
                    "I don't build AI because it's trendy. I build it because there's something magical about teaching
                    machines to think—and I'm just getting started."
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`py-16 px-6 relative transition-all duration-1000 bg-white text-gray-900 ${
          visibleSections.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-700 font-serif">
              FEATURED PROJECTS
            </h2>
            <div
              className={`w-24 h-1 mx-auto transform transition-all duration-1000 scale-x-0 animate-pulse bg-gray-700`}
            ></div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <article
                key={index}
                className={`border-2 p-8 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl bg-white border-gray-700 hover:border-gray-600 ${
                  visibleSections.has("projects") ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`border-b pb-4 mb-6 group border-gray-500`}>
                  <h3
                    className={`text-2xl md:text-3xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-gray-600 font-serif text-gray-800`}
                  >
                    {project.title}
                  </h3>
                  <p className={`text-lg font-medium uppercase tracking-wide text-gray-600 font-sans`}>
                    {project.subtitle}
                  </p>
                </div>

                <div className="mb-6">
                  <div
                    className={`px-4 py-2 inline-block mb-4 transform transition-all duration-300 hover:scale-110 bg-white text-gray-900 hover:bg-gray-200`}
                  >
                    <span className="font-bold text-sm font-mono">{project.impact}</span>
                  </div>
                  <p className={`leading-relaxed mb-4 text-gray-700 font-sans`}>{project.description}</p>

                  <div className="bg-gray-100 border-l-4 border-gray-700 p-4 mb-4">
                    <p className="text-sm italic text-gray-600 font-sans leading-relaxed">
                      <strong>The Real Story:</strong> {project.story}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className={`text-center border p-3 transform transition-all duration-300 hover:scale-105 border-gray-500 hover:bg-gray-800 hover:text-white hover:border-gray-800`}
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <span className="font-bold text-sm">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`bg-transparent transform transition-all duration-300 hover:scale-105 border-gray-700 text-gray-900 hover:bg-gray-800 hover:text-white`}
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className={`transform transition-all duration-300 hover:scale-105 bg-white text-gray-900 hover:bg-gray-200`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className={`py-16 px-6 relative transition-all duration-1000 bg-gray-50 text-gray-900 ${
          visibleSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">TECHNICAL EXPERTISE</h2>
            <div className={`w-24 h-1 mx-auto bg-gray-700`}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "MACHINE LEARNING",
                skills: [
                  "• Deep Learning & Neural Networks",
                  "• Reinforcement Learning",
                  "• Computer Vision (YOLO, OpenCV)",
                  "• Natural Language Processing",
                  "• PyTorch, TensorFlow, Scikit-Learn",
                ],
              },
              {
                title: "DATA ENGINEERING",
                skills: [
                  "• Python, SQL",
                  "• Snowflake, PostgreSQL, Neo4j",
                  "• Apache Airflow, Docker",
                  "• AWS (S3, EC2, Elastic Beanstalk)",
                  "• ETL Pipeline Development",
                ],
              },
              {
                title: "AI FRAMEWORKS",
                skills: [
                  "• Generative AI & LLMs",
                  "• LangChain, Hugging Face",
                  "• Streamlit, Django",
                  "• Real-time AI Systems",
                  "• Predictive Analytics",
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`border-2 p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-xl group border-gray-700 ${
                  visibleSections.has("skills")
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 0
                      ? "translate-x-[-50px] opacity-0"
                      : "translate-x-[50px] opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3
                  className={`text-xl font-bold mb-4 border-b pb-2 transition-colors duration-300 border-gray-500 font-serif text-gray-800`}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2 text-sm font-sans">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="transform transition-all duration-300 hover:translate-x-2 text-gray-800">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className={`mt-16 transform transition-all duration-1000 ${
              visibleSections.has("skills") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">CERTIFICATIONS</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div
                className={`border p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-gray-700 hover:border-gray-600`}
              >
                <h4 className="font-bold mb-2">Machine Learning Specialization</h4>
                <p className={`text-sm text-gray-600`}>Andrew NG, Stanford University • Nov 2023</p>
              </div>
              <div
                className={`border p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-gray-700 hover:border-gray-600`}
              >
                <h4 className="font-bold mb-2">Google Cybersecurity Professional Certificate</h4>
                <p className={`text-sm text-gray-600`}>Google Careers • Apr 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={`py-16 px-6 relative transition-all duration-1000 bg-white text-gray-900 ${
          visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">LET'S CONNECT</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-sans">
            Passionate about building intelligent systems and ready to contribute to innovative AI projects. Available
            for internships and full-time opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                href: "mailto:pandey.aditya2304@gmail.com",
                icon: Mail,
                title: "EMAIL",
                subtitle: "pandey.aditya2304@gmail.com",
              },
              {
                href: "https://linkedin.com/in/ap2304",
                icon: Linkedin,
                title: "LINKEDIN",
                subtitle: "linkedin.com/in/ap2304",
              },
              {
                href: "https://github.com/aditya-pandey-ai",
                icon: Github,
                title: "GITHUB",
                subtitle: "github.com/aditya-pandey-ai",
              },
            ].map((contact, index) => (
              <Button
                key={index}
                className={`p-6 h-auto flex-col transform transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl bg-gray-700 text-white hover:bg-gray-600 ${
                  visibleSections.has("contact") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                asChild
              >
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {React.createElement(contact.icon, { className: "w-6 h-6 mb-2 animate-bounce" })}
                  <span className="font-bold">{contact.title}</span>
                  <span className="text-sm">{contact.subtitle}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-gray-700 hover:bg-gray-100 py-8 px-6 transform transition-all duration-1000 relative">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 98%, #374151 100%)`,
            backgroundSize: "50px 1px",
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-sm font-medium uppercase tracking-wide font-sans">
            © 2024 Aditya Pandey • Built with precision and passion for AI • All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
