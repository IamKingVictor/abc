"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Calendar, User, Share2, ChevronLeft } from "lucide-react"

const DEVOTIONAL_POSTS: Record<
  string,
  {
    title: string
    author: string
    date: string
    category: string
    content: React.ReactNode
  }
> = {
  "reflections-john-3-16": {
    title: "Reflections on John 3:16",
    author: "Pastor David Mitchell",
    date: "2024-01-15",
    category: "God's Love",
    content: (
      <div className="space-y-6 text-foreground">
        <p>
          <span className="text-xl font-semibold italic">
            "For God so loved the world that he gave his one and only Son, that
            whoever believes in him shall not perish but have eternal life."
          </span>
        </p>

        <p>
          John 3:16 is perhaps the most beloved verse in all of Scripture. It
          encapsulates the gospel message in just one powerful statement. Yet
          despite its familiarity, it holds profound truths that continue to
          transform lives when we pause to truly reflect on its meaning.
        </p>

        <h3 className="font-serif text-2xl font-bold">The Love of God</h3>
        <p>
          The verse begins with the nature of God: He loved the world. Not just
          the righteous, not just those who deserve it, but the entire
          world—broken, sinful, and imperfect as it is. This is agape love in
          its purest form: unconditional, sacrificial, and all-encompassing.
        </p>

        <p>
          God's love is not passive. It moves Him to action. He so loved the
          world that He gave. Love that costs nothing is merely sentiment. But
          God's love costs Him everything—the sacrifice of His only Son.
        </p>

        <h3 className="font-serif text-2xl font-bold">
          The Cost of Redemption
        </h3>
        <p>
          "He gave his one and only Son." Can we truly comprehend what this
          means? In the Old Testament, when Abraham was asked to offer his son
          Isaac, it was considered the ultimate test of faith. But God actually
          went through with it. He offered His most precious possession.
        </p>

        <p>
          This gift was given not because we earned it, not because we deserved
          it, but purely out of love. It's the most generous gift ever offered
          to humanity.
        </p>

        <h3 className="font-serif text-2xl font-bold">Our Response</h3>
        <p>
          The final part speaks of our response: belief. To believe in Jesus is
          not merely intellectual assent to facts about Him. It is to trust in
          Him, to surrender to Him, to make Him the center of our lives. It is
          to accept His love and let it transform us.
        </p>

        <p>
          For those who believe, there is a beautiful promise: eternal life. Not
          just duration of life, but quality of life—a life in relationship with
          our Creator, a life of meaning, purpose, and hope.
        </p>

        <h3 className="font-serif text-2xl font-bold">Reflection for Today</h3>
        <p>
          As you meditate on John 3:16 today, consider: Do I truly understand
          the depth of God's love for me? Have I responded to His love through
          faith in Jesus? Am I living in the reality of His eternal life today?
        </p>

        <p className="italic text-muted-foreground">
          Take time to pray and thank God for His love and His gift. Allow His
          love to reshape how you love others.
        </p>
      </div>
    ),
  },
  "faith-in-wilderness": {
    title: "Faith in the Wilderness",
    author: "Jessica Chen",
    date: "2024-01-12",
    category: "Faith Journey",
    content: (
      <div className="space-y-6 text-foreground">
        <p>
          Life can sometimes feel like a wilderness—barren, lonely, and
          uncertain. During these times, maintaining faith can be our greatest
          challenge. Yet it's precisely in the wilderness that our faith is
          refined and deepened.
        </p>

        <h3 className="font-serif text-2xl font-bold">
          The Wilderness Seasons
        </h3>
        <p>
          Throughout Scripture, we see faithful people experiencing wilderness
          seasons. Abraham waited decades for a son. Moses spent 40 years in the
          desert. David fled from Saul, hiding in caves. Even Jesus spent 40
          days fasting in the wilderness.
        </p>

        <p>
          These weren't punishments but periods of preparation. God uses
          wilderness seasons to develop character, deepen trust, and align our
          hearts with His purposes.
        </p>

        <h3 className="font-serif text-2xl font-bold">
          Faith When We Cannot See
        </h3>
        <p>
          In the wilderness, God often seems distant. The circumstances don't
          make sense. Prayers feel unanswered. This is when real faith is
          developed—not faith based on feelings or circumstances, but faith
          rooted in the character and promises of God.
        </p>

        <p>
          Hebrews 11:1 defines faith as "being sure of what we hope for and
          certain of what we do not see." Faith in the wilderness means trusting
          God when we can't see the path ahead.
        </p>

        <h3 className="font-serif text-2xl font-bold">
          Tools for the Wilderness
        </h3>
        <p>
          How can we maintain faith during barren seasons? First, we hold fast
          to God's Word. When emotions fluctuate, God's promises remain
          constant. Second, we seek community. Others who have walked through
          wilderness can encourage us. Third, we practice gratitude, remembering
          God's faithfulness in the past.
        </p>

        <p className="italic text-muted-foreground">
          Whatever wilderness you're walking through, remember: it's temporary,
          it's purposeful, and God is with you.
        </p>
      </div>
    ),
  },
  "grace-sufficient": {
    title: "Grace That is Sufficient",
    author: "Marcus Johnson",
    date: "2024-01-10",
    category: "God's Grace",
    content: (
      <div className="space-y-6 text-foreground">
        <p>
          <span className="text-xl font-semibold italic">
            "But he said to me, 'My grace is sufficient for you, for my power is
            made perfect in weakness.'" - 2 Corinthians 12:9
          </span>
        </p>

        <p>
          Paul wrote these words after pleading with God three times to remove a
          thorn from his flesh. We don't know exactly what this thorn was, but
          we know it troubled him deeply. When God refused to remove it, Paul
          received this remarkable promise: God's grace is sufficient.
        </p>

        <h3 className="font-serif text-2xl font-bold">Enough and More</h3>
        <p>
          "Sufficient" doesn't just mean adequate. In the Greek, it means "to be
          enough, to suffice, to be strong enough." God's grace is not merely
          enough—it overflows. It covers not just what we need, but abundantly
          exceeds what we might imagine.
        </p>

        <h3 className="font-serif text-2xl font-bold">
          Perfect in Our Weakness
        </h3>
        <p>
          We often try to be strong, capable, and self-sufficient. But God's
          power doesn't work that way. God's power is made perfect in weakness.
          When we come to the end of ourselves and acknowledge our
          insufficiency, we create space for God's power to work.
        </p>

        <p>
          This is counterintuitive to our culture. We're taught to hide weakness
          and project strength. But in God's kingdom, weakness is not
          shameful—it's the doorway through which His grace flows.
        </p>

        <h3 className="font-serif text-2xl font-bold">Daily Application</h3>
        <p>
          Whatever you're facing today—illness, loss, failure, uncertainty—God's
          grace is sufficient. You may not see the path forward. You may feel
          inadequate. But His grace covers it all.
        </p>

        <p className="italic text-muted-foreground">
          Trust in the sufficiency of His grace. In your weakness, His strength
          is made complete.
        </p>
      </div>
    ),
  },
  "loving-enemies": {
    title: "Loving Our Enemies",
    author: "Pastor David Mitchell",
    date: "2024-01-08",
    category: "Living Out Faith",
    content: (
      <div className="space-y-6 text-foreground">
        <p>
          <span className="text-xl font-semibold italic">
            "Love your enemies and pray for those who persecute you." - Matthew
            5:44
          </span>
        </p>

        <p>
          These may be some of the most challenging words Jesus ever spoke. Love
          our enemies? Pray for those who persecute us? This flies in the face
          of human nature and our sense of justice. Yet Jesus presented this not
          as a suggestion but as a command.
        </p>

        <h3 className="font-serif text-2xl font-bold">What Love Means</h3>
        <p>
          It's important to clarify: loving enemies doesn't mean liking them or
          enabling their harmful behavior. It means treating them with dignity,
          refusing to harbor bitterness, and seeking their good even when
          they've caused us harm.
        </p>

        <h3 className="font-serif text-2xl font-bold">The Power of Prayer</h3>
        <p>
          Notice that Jesus connects loving enemies with praying for them. When
          we intercede for someone, our hearts shift. We can't easily maintain
          contempt or hatred for someone we're praying for. Prayer is the
          vehicle that transforms our enemies into objects of our compassion.
        </p>

        <h3 className="font-serif text-2xl font-bold">Revolutionary Love</h3>
        <p>
          Jesus then explains why: "that you may be sons of your Father in
          heaven." Our loving our enemies reflects God's character. God loves
          those who oppose Him. His love is not earned or deserved; it's freely
          given.
        </p>

        <p className="italic text-muted-foreground">
          This week, identify someone you struggle with. Commit to praying for
          them daily. Watch how your heart begins to change.
        </p>
      </div>
    ),
  },
  "presence-of-god": {
    title: "The Presence of God",
    author: "Jessica Chen",
    date: "2024-01-05",
    category: "Spiritual Growth",
    content: (
      <div className="space-y-6 text-foreground">
        <p>
          <span className="text-xl font-semibold italic">
            "And surely I am with you always, to the very end of the age." -
            Matthew 28:20
          </span>
        </p>

        <p>
          Jesus spoke these final words to His disciples before ascending to
          heaven. Rather than leaving them as orphans, He promised His ongoing
          presence. The same promise is available to us today.
        </p>

        <h3 className="font-serif text-2xl font-bold">
          The Reality of God's Presence
        </h3>
        <p>
          God's presence is not a feeling but a reality. Even when we don't feel
          His nearness, especially when life is difficult or dark, He is
          present. His presence doesn't depend on our emotional state or our
          circumstances.
        </p>

        <h3 className="font-serif text-2xl font-bold">Cultivating Awareness</h3>
        <p>
          How can we become more aware of God's presence? First, through prayer
          and meditation on His Word. Second, through obedience—when we follow
          God's commands, we sense His approval and nearness. Third, through
          gratitude—pausing to acknowledge His hand in our lives opens our eyes
          to His presence.
        </p>

        <p>
          Brother Lawrence, a 17th-century monk, coined the phrase "practicing
          the presence of God." He believed that peeling potatoes in the kitchen
          was as sacred as formal worship, because God was present in both.
        </p>

        <h3 className="font-serif text-2xl font-bold">Today's Practice</h3>
        <p>
          Choose one ordinary activity today—your commute, your work, your
          meal—and consciously practice the presence of God there. Notice His
          presence in the details around you.
        </p>

        <p className="italic text-muted-foreground">
          God is with you, not just for the mountaintop moments, but for every
          step of your journey.
        </p>
      </div>
    ),
  },
}

export default function DevotionalPost({
  params,
}: {
  params: { slug: string }
}) {
  const [showShareMenu, setShowShareMenu] = useState(false)

  const post = DEVOTIONAL_POSTS[params.slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The devotional you're looking for doesn't exist.
            </p>
            <Link href="/devotionals">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Back to Devotionals
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    const title = post.title
    const message = `Check out this devotional: ${title}`

    console.log(`[Share] ${platform}: ${message} ${url}`)
    setShowShareMenu(false)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link
            href="/devotionals"
            className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Back to Devotionals
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold mb-4">
              {post.category}
            </span>

            <h1 className="font-serif text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" aria-hidden="true" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              {/* Share Button */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                  aria-label="Share post"
                >
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                  <span>Share</span>
                </button>

                {showShareMenu && (
                  <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-2 z-10">
                    <button
                      onClick={() => handleShare("Twitter")}
                      className="block w-full text-left px-4 py-2 hover:bg-muted rounded transition-colors text-sm"
                    >
                      Share on Twitter
                    </button>
                    <button
                      onClick={() => handleShare("Facebook")}
                      className="block w-full text-left px-4 py-2 hover:bg-muted rounded transition-colors text-sm"
                    >
                      Share on Facebook
                    </button>
                    <button
                      onClick={() => handleShare("Email")}
                      className="block w-full text-left px-4 py-2 hover:bg-muted rounded transition-colors text-sm"
                    >
                      Share via Email
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">{post.content}</div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
