"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Clock, MapPin, Users } from "lucide-react"

const EVENTS = [
  {
    id: 1,
    title: "Weekly Bible Study",
    date: "Every Wednesday",
    time: "7:00 PM - 8:30 PM",
    location: "Community Center, Room 101",
    type: "Studies",
    description:
      "Join us for an in-depth study of Scripture. This week we're exploring the Book of Romans.",
    fullDescription:
      "Our weekly Bible study is the heart of Agape Bible Club. We gather together to examine Scripture in detail, discuss theological concepts, and support one another in our faith journeys. Whether you're new to Bible study or have been exploring Scripture for years, this is a welcoming space for all.",
    attendees: 45,
  },
  {
    id: 2,
    title: "Monthly Prayer Meetup",
    date: "First Sunday of each month",
    time: "10:00 AM - 11:00 AM",
    location: "Virtual (Zoom)",
    type: "Meetups",
    description:
      "Corporate prayer and intercession for our community and the world.",
    fullDescription:
      "We gather to lift up our prayers together. This time is dedicated to intercession, thanksgiving, and seeking God's guidance for our lives and our community. All prayer styles and traditions are welcome.",
    attendees: 30,
  },
  {
    id: 3,
    title: "Women's Discipleship Group",
    date: "Every Thursday",
    time: "6:30 PM - 7:45 PM",
    location: "Community Center, Room 201",
    type: "Studies",
    description:
      "Mentorship and growth for women in faith. Discussing biblical perspectives on modern life.",
    fullDescription:
      "This group provides a safe space for women to share their faith journeys, discuss relevant topics, and support one another. We explore Scripture through a feminine lens while building deep friendships.",
    attendees: 28,
  },
  {
    id: 4,
    title: "Youth Fellowship Night",
    date: "Second Friday of each month",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center, Main Hall",
    type: "Meetups",
    description:
      "Games, discussion, and fellowship for young adults aged 18-35.",
    fullDescription:
      "A fun and engaging evening where young adults can connect, have fun, and explore faith topics relevant to their lives. We mix games, food, and meaningful conversation.",
    attendees: 35,
  },
  {
    id: 5,
    title: "Men's Breakfast & Study",
    date: "Every Saturday",
    time: "8:00 AM - 9:30 AM",
    location: "The Daily Brew Cafe",
    type: "Studies",
    description:
      "Breakfast fellowship and Bible study focused on spiritual leadership.",
    fullDescription:
      "Men gather for breakfast, fellowship, and study. We discuss topics relevant to spiritual leadership, family, and faith in the workplace. Come hungry for good food and good conversation!",
    attendees: 22,
  },
  {
    id: 6,
    title: "Community Outreach Service",
    date: "Third Saturday of each month",
    time: "9:00 AM - 12:00 PM",
    location: "Local Food Bank",
    type: "Meetups",
    description:
      "Serve our community while living out the Gospel message of love.",
    fullDescription:
      "We put our faith into action by serving those in need. Whether it's packing food, helping at a local ministry, or community service, we work together to make a difference.",
    attendees: 40,
  },
]

export default function Events() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const [showRsvpModal, setShowRsvpModal] = useState(false)
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null)
  const [rsvpData, setRsvpData] = useState({ name: "", email: "", message: "" })
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false)

  const filterTypes = ["All", "Studies", "Meetups"]
  const filteredEvents =
    selectedFilter === "All"
      ? EVENTS
      : EVENTS.filter((event) => event.type === selectedFilter)

  const handleRsvp = (eventId: number) => {
    setSelectedEventId(eventId)
    setShowRsvpModal(true)
  }

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (rsvpData.name && rsvpData.email) {
      console.log("RSVP submitted:", {
        ...rsvpData,
        eventId: selectedEventId,
      })
      setRsvpSubmitted(true)
      setTimeout(() => {
        setShowRsvpModal(false)
        setRsvpSubmitted(false)
        setRsvpData({ name: "", email: "", message: "" })
      }, 2000)
    }
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
            Events & Gatherings
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for meaningful times of study, prayer, and fellowship
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filterTypes.map((type) => (
              <Button
                key={type}
                onClick={() => setSelectedFilter(type)}
                className={`${
                  selectedFilter === type
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() =>
                  setExpandedEvent(expandedEvent === event.id ? null : event.id)
                }
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                        {event.type}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-accent transition-transform ${
                        expandedEvent === event.id ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" aria-hidden="true" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>

                  <p className="text-foreground mb-4">{event.description}</p>

                  {expandedEvent === event.id && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-foreground mb-6">
                        {event.fullDescription}
                      </p>
                      <Button
                        onClick={() => handleRsvp(event.id)}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                      >
                        RSVP
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Modal */}
      {showRsvpModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <div className="p-8">
              {rsvpSubmitted ? (
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    RSVP Confirmed!
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for registering. We look forward to seeing you!
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Register for Event
                  </h2>

                  <form onSubmit={handleRsvpSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={rsvpData.name}
                        onChange={(e) =>
                          setRsvpData({ ...rsvpData, name: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={rsvpData.email}
                        onChange={(e) =>
                          setRsvpData({ ...rsvpData, email: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        value={rsvpData.message}
                        onChange={(e) =>
                          setRsvpData({ ...rsvpData, message: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                        placeholder="Any questions or special requests?"
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        onClick={() => setShowRsvpModal(false)}
                        className="flex-1 bg-muted text-foreground hover:bg-muted/80"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Card>
        </div>
      )}

      <Footer />
    </main>
  )
}
