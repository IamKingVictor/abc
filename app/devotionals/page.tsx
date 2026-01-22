import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Calendar, User, ChevronRight } from "lucide-react"

const DEVOTIONALS = [
  {
    id: 1,
    slug: "reflections-john-3-16",
    title: "Reflections on John 3:16",
    excerpt:
      "Explore the most famous verse in the Bible and what God's love means for our lives today.",
    author: "Pastor David Mitchell",
    date: "2024-01-15",
    category: "God's Love",
  },
  {
    id: 2,
    slug: "faith-in-wilderness",
    title: "Faith in the Wilderness",
    excerpt:
      "When life feels barren and God seems distant, how do we maintain our trust? A look at faith when we cannot see.",
    author: "Jessica Chen",
    date: "2024-01-12",
    category: "Faith Journey",
  },
  {
    id: 3,
    slug: "grace-sufficient",
    title: "Grace That is Sufficient",
    excerpt:
      "Paul's declaration that God's grace is sufficient for us. What does this mean in our daily struggles?",
    author: "Marcus Johnson",
    date: "2024-01-10",
    category: "God's Grace",
  },
  {
    id: 4,
    slug: "loving-enemies",
    title: "Loving Our Enemies",
    excerpt:
      "Jesus commands us to love our enemies. Let's explore what this radical command means and how we can live it out.",
    author: "Pastor David Mitchell",
    date: "2024-01-08",
    category: "Living Out Faith",
  },
  {
    id: 5,
    slug: "presence-of-god",
    title: "The Presence of God",
    excerpt:
      "God promises His presence in all circumstances. How can we cultivate awareness of His presence in our daily lives?",
    author: "Jessica Chen",
    date: "2024-01-05",
    category: "Spiritual Growth",
  },
]

export default function Devotionals() {
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
            Daily Devotionals
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reflections on Scripture to inspire and deepen your faith journey
          </p>
        </div>
      </section>

      {/* Devotionals Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEVOTIONALS.map((devotional) => (
              <Card
                key={devotional.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col"
              >
                <div
                  className="h-32 bg-linear-to-br from-secondary to-secondary/60"
                  aria-hidden="true"
                />

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                      {devotional.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {devotional.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 flex-1">
                    {devotional.excerpt}
                  </p>

                  <div className="space-y-2 text-sm text-muted-foreground mb-6 border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" aria-hidden="true" />
                      <span>{devotional.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>
                        {new Date(devotional.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/devotionals/${devotional.slug}`}
                    className="text-accent hover:text-accent/80 font-semibold flex items-center group"
                  >
                    Read Full Devotional
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
