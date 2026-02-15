"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, TrendingUp } from "lucide-react";

const trustFeatures = [
  {
    icon: CheckCircle2,
    title: "Quality Tested",
    description: "Every product undergoes rigorous evaluation before recommendation.",
  },
  {
    icon: TrendingUp,
    title: "Smart Investments",
    description: "We focus on value, durability, and long-term satisfaction.",
  },
  {
    icon: Shield,
    title: "Trusted Retailers",
    description: "Only products from Amazon, Costco, and verified sellers.",
  },
];

export default function TrustSection() {
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
            Research-Driven Recommendations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't do hype. Every product on this site has been carefully selected 
            based on extensive research, user reviews, and real-world testing. 
            Our goal is simple: help you make smarter purchasing decisions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-dark rounded-lg border border-dark-lighter hover:border-gold-500/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-4">
                  <Icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center p-6 bg-dark rounded-lg border border-dark-lighter"
        >
          <p className="text-sm text-gray-400">
            <strong className="text-white">Transparency Note:</strong> This site contains affiliate links. 
            When you purchase through our links, we may earn a commission at no extra cost to you. 
            This helps us continue researching and recommending quality products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
