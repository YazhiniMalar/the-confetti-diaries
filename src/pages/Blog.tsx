import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";

const blogPosts = [
  {
    id: 1,
    title: "A Love Story Written in the Stars — Priya & Arjun",
    excerpt: "From a chance meeting at a coffee shop to a grand celebration under fairy lights, Priya and Arjun's wedding was nothing short of magical. Here's how we helped bring their celestial-themed wedding to life.",
    image: wedding1,
    date: "March 15, 2025",
    category: "Client Story",
  },
  {
    id: 2,
    title: "The Rustic Romance of Meera & Karthik",
    excerpt: "Nestled in the lush greenery of Ooty, this intimate wedding brought together tradition and modern elegance. Every detail reflected the couple's love for nature and each other.",
    image: wedding2,
    date: "February 28, 2025",
    category: "Client Story",
  },
  {
    id: 3,
    title: "Colors of Joy — Ananya & Vikram's Grand Celebration",
    excerpt: "A three-day extravaganza filled with vibrant decor, heartfelt rituals, and unforgettable moments. Ananya and Vikram's wedding was a true feast for the senses.",
    image: wedding3,
    date: "January 20, 2025",
    category: "Client Story",
  },
  {
    id: 4,
    title: "An Intimate Beach Affair — Sneha & Rohit",
    excerpt: "With the waves as their witness and the sunset as their backdrop, Sneha and Rohit exchanged vows in a ceremony that was as serene as it was beautiful.",
    image: wedding4,
    date: "December 10, 2024",
    category: "Client Story",
  },
  {
    id: 5,
    title: "Heritage & Heart — Divya & Siddharth's Palace Wedding",
    excerpt: "A royal venue, timeless traditions, and a love story that felt like it was pulled from the pages of history. This palace wedding was pure elegance.",
    image: wedding5,
    date: "November 5, 2024",
    category: "Client Story",
  },
  {
    id: 6,
    title: "The Garden of Dreams — Lakshmi & Arun",
    excerpt: "Floral arches, fairy lights, and a love that bloomed beautifully — Lakshmi and Arun's garden wedding was a dreamy affair that left everyone in awe.",
    image: wedding6,
    date: "October 18, 2024",
    category: "Client Story",
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
              Stories
            </p>
            <h1 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
              Client Stories
            </h1>
            <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
            <p className="text-body mt-6 text-lg text-muted-foreground">
              Every wedding we design carries a unique love story. Here are some of our favourites.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                className="group cursor-pointer overflow-hidden rounded-xl bg-background shadow-sm transition-shadow hover:shadow-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-sans tracking-wider uppercase text-primary font-medium">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span className="text-sans tracking-wider">{post.date}</span>
                  </div>
                  <h3 className="text-display mt-3 text-lg font-semibold text-foreground leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-body mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-sans mt-4 inline-block text-xs font-medium tracking-widest text-primary uppercase transition-colors group-hover:text-primary/80">
                    Read More →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
