import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronRight, Heart, Users, Zap, BookOpen } from "lucide-react"

const VALUES = [
  {
    icon: Heart,
    title: "Love",
    description:
      "Agape love is the foundation of our community. We practice unconditional love and support for one another.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Together we are stronger. We believe in the power of fellowship and mutual growth in our shared faith journey.",
  },
  {
    icon: Zap,
    title: "Growth",
    description:
      "Every study and discussion deepens our understanding. We embrace spiritual maturity and continuous learning.",
  },
  {
    icon: BookOpen,
    title: "Faith",
    description:
      "Scripture is our guide. We trust in God's Word and its transformative power in our lives.",
  },
]

const TEAM_MEMBERS = [
  {
    name: "Pastor David Mitchell",
    role: "Founder & Spiritual Leader",
    bio: "David founded Agape Bible Club with a vision to create a space for believers to grow together. With 20 years of ministry experience, he brings wisdom and pastoral guidance to our community.",
  },
  {
    name: "Jessica Chen",
    role: "Co-Director & Events Lead",
    bio: "Jessica brings enthusiasm and organizational excellence to our events. Her heart for community building ensures every gathering is meaningful and welcoming for all members.",
  },
  {
    name: "Marcus Johnson",
    role: "Devotional Director",
    bio: "Marcus curates our devotional content with thoughtfulness and biblical depth. His passion for Scripture makes each devotional a source of inspiration and reflection.",
  },
]

export default function About() {
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
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Founded with a simple mission: to create a welcoming space where
            believers can explore Scripture, deepen their faith, and experience
            the transformative power of God's love.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Agape Bible Club exists to bring together a community of believers
            who are passionate about studying Scripture, growing spiritually,
            and loving one another as Christ loved us. We create an environment
            where questions are welcomed, faith is deepened, and everyone feels
            valued as part of God's family.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <Icon
                        className="w-8 h-8 text-accent mt-1"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8 text-center">
            Our Journey
          </h2>

          <div className="space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              Agape Bible Club was founded in 2023 by Pastor David Mitchell with
              a simple yet profound vision: to create a community where
              believers could gather to study Scripture without judgment, ask
              difficult questions without fear, and grow together in faith.
            </p>

            <p className="text-lg leading-relaxed">
              What started as a small group of twelve people meeting in a local
              coffee shop has grown into a vibrant community of hundreds. Our
              regular Bible studies have expanded to include specialized groups,
              monthly prayer meetups, and a wealth of devotional resources.
            </p>

            <p className="text-lg leading-relaxed">
              Today, we continue to grow as we welcome new members from all
              walks of life. Whether you're just beginning your faith journey or
              have been a believer for decades, there's a place for you in our
              community. We remain committed to our founding principles: love,
              community, growth, and a deep reverence for God's Word.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Dedicated servants leading with love and wisdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-accent to-accent/70 mb-6 flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-accent-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary to-primary/80">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Get Involved
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Ready to join our community and be part of something meaningful?
            There are many ways to get involved and grow with us.
          </p>
          <Link href="/join">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
            >
              Join Our Community
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
