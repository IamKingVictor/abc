"use client"

import React from "react"

import { useState } from "react"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Users, BookOpen, Coffee } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const BENEFITS = [
  {
    icon: Heart,
    title: "Supportive Community",
    description: "Connect with others who share your faith and values",
  },
  {
    icon: BookOpen,
    title: "Access to Studies",
    description: "Exclusive Bible study materials and devotionals",
  },
  {
    icon: Users,
    title: "Regular Events",
    description: "Weekly studies, monthly meetings, and special gatherings",
  },
  {
    icon: Coffee,
    title: "Fellowship",
    description:
      "Build lasting friendships with brothers and sisters in Christ",
  },
]

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    howFoundUs: "word-of-mouth",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log("Signup form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        howFoundUs: "word-of-mouth",
        message: "",
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/10 to-transparent opacity-50"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Join Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Become part of a vibrant community united in God's love
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-center mb-12">
            Member Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                      <Icon
                        className="h-6 w-6 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 lg:p-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
              Sign Up Today
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we'll get in touch with you soon.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle
                  className="w-12 h-12 text-green-600 mx-auto mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-green-900 text-lg mb-2">
                  Welcome!
                </h3>
                <p className="text-green-800">
                  Thank you for signing up. We'll be in touch shortly with
                  information about our next gathering.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground transition-colors ${
                      errors.name ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground transition-colors ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone{" "}
                    <span className="text-muted-foreground text-xs">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* How Found Us */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    How did you find us?
                  </label>
                  <select
                    name="howFoundUs"
                    value={formData.howFoundUs}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  >
                    <option value="word-of-mouth">Word of mouth</option>
                    <option value="social-media">Social media</option>
                    <option value="search-engine">Search engine</option>
                    <option value="church">My church</option>
                    <option value="friend">Friend invitation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Tell us about yourself
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                    placeholder="What brought you to Agape Bible Club? What are you hoping to find?"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6"
                >
                  Sign Up
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
