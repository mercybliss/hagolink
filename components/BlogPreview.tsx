"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Science of Smart Purchasing",
    excerpt: "How to evaluate products beyond marketing claims and make informed decisions.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Home Office Essentials: What Actually Works",
    excerpt: "Real-world testing of productivity tools that deliver on their promises.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Investment vs. Expense: The Long-Term View",
    excerpt: "Understanding when spending more upfront saves money over time.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    readTime: "6 min read",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            Insights & Research
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deep dives into product research and smart purchasing strategies.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-dark rounded-lg overflow-hidden border border-dark-lighter hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">
                  {post.readTime}
                </span>
                <h3 className="font-serif text-xl font-semibold mb-3 text-white group-hover:text-gold-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-semibold text-sm transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
