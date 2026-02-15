"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import productsData from "@/data/products.json";

const categoryTitles: Record<string, string> = {
  "Home Upgrades": "Transform Your Living Space",
  "Productivity Tools": "Work Smarter, Not Harder",
  "Wellness Essentials": "Invest in Your Well-Being",
  "Smart Tech": "Embrace the Future",
};

export default function CategorySections() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-light">
      <div className="max-w-7xl mx-auto">
        {Object.entries(productsData.categories).map(([category, products], categoryIndex) => (
          <div key={category} className="mb-24 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                {categoryTitles[category] || category}
              </h2>
              <p className="text-lg text-gray-400">
                Curated selections for {category.toLowerCase()}
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
