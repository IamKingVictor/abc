"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronRight, Star } from "lucide-react"

const FEATURED_EVENTS = [
  {
    id: 1,
    title: "Weekly Bible Study",
    date: "Every Wednesday, 7:00 PM",
    description: "Deep dive into Scripture with our community",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "Monthly Prayer Meetup",
    date: "First Sunday, 10:00 AM",
    description: "Corporate prayer and intercession",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    title: "Women's Discipleship Group",
    date: "Every Thursday, 6:30 PM",
    description: "Mentorship and growth for women in faith",
    color: "from-pink-400 to-pink-600",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "This club has deepened my faith tremendously! The community's support is amazing.",
    author: "Sarah J.",
  },
  {
    quote:
      "I love how we dive deep into Scripture together. Every week brings new insights.",
    author: "Michael R.",
  },
  {
    quote:
      "The devotionals and events have transformed my spiritual journey. Highly recommend!",
    author: "Jennifer T.",
  },
]

export default function Home() {
  const joinSectionRef = useRef<HTMLDivElement>(null)
  const [visibleTestimonials, setVisibleTestimonials] = useState<boolean[]>([
    false,
    false,
    false,
  ])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "0")
          setVisibleTestimonials((prev) => {
            const next = [...prev]
            next[index] = true
            return next
          })
        }
      })
    })

    const testimonialElements = document.querySelectorAll("[data-testimonial]")
    testimonialElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleJoinClick = () => {
    joinSectionRef.current?.scrollIntoView({ behavior: "smooth" })
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
        <div
          className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-30"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Welcome to Agape Bible Club
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A community united in God's love through Scripture study and
            fellowship
          </p>
          <Button
            onClick={handleJoinClick}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
          >
            Join Our Community
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <p className="text-lg text-foreground leading-relaxed">
            <span className="font-serif text-2xl font-bold text-primary mb-2 block">
              Our Mission
            </span>
            Agape Bible Club is a gathering of believers exploring the Bible's
            timeless truths in a supportive, loving environment. We believe in
            the power of God's unconditional love (agape) to transform lives and
            deepen faith through community and Scripture study.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Featured Events
            </h2>
            <p className="text-muted-foreground text-lg">
              Join us for meaningful gatherings and spiritual growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_EVENTS.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div
                  className={`h-32 bg-linear-to-br ${event.color} relative overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-3">
                    {event.date}
                  </p>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {event.description}
                  </p>
                  <Link
                    href="/events"
                    className="text-accent hover:text-accent/80 font-semibold text-sm flex items-center group/link"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Member Stories
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                data-testimonial
                data-index={index}
                className={`p-8 rounded-lg border-2 border-border bg-background transition-all duration-700 ${
                  visibleTestimonials[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-foreground italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-accent font-semibold">
                  – {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Join Us */}
      <section
        ref={joinSectionRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary to-primary/80"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Join?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Become part of our community and grow in faith alongside others who
            share your passion for Scripture and spiritual growth.
          </p>
          <Link href="/join">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
            >
              Sign Up Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
