"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function EmailCapture() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your email service integration (e.g., Mailchimp, ConvertKit, etc.)
    console.log("Form submitted:", formData);
    alert("Thank you! Check your email for weekly picks.");
    setFormData({ firstName: "", email: "" });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-dark-light to-dark rounded-2xl p-8 sm:p-12 border border-gold-500/20"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-4">
              <Mail className="w-8 h-8 text-gold-500" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Join the Smart Living List
            </h2>
            <p className="text-lg text-gray-400">
              Get weekly curated picks delivered to your inbox. No spam, just quality recommendations.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="w-full bg-dark border border-dark-lighter rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-dark border border-dark-lighter rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-dark font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Get Weekly Picks
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
