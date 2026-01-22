"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  CheckCircle,
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

    console.log("Contact form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need more information? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <Mail
                  className="w-6 h-6 text-accent shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:info@agapebibleclub.com"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    info@agapebibleclub.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <Phone
                  className="w-6 h-6 text-accent shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a
                    href="tel:+15551234567"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <MapPin
                  className="w-6 h-6 text-accent shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Community Center, Room 101
                    <br />
                    123 Main Street
                    <br />
                    Your City, ST 12345
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8">
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle
                    className="w-12 h-12 text-green-600 mx-auto mb-3"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-green-900 text-lg mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-800">
                    Thank you for reaching out. We'll respond to your message
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
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
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
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
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground transition-colors ${
                        errors.subject ? "border-red-500" : "border-border"
                      }`}
                      placeholder="What is this about?"
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground transition-colors ${
                        errors.message ? "border-red-500" : "border-border"
                      }`}
                      placeholder="Your message here..."
                      rows={6}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
