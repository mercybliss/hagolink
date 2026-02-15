"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-white">Elites</h3>
            <p className="text-gray-400 text-sm">
              Curated essentials for smart living. Research-driven recommendations you can trust.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-gold-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-500 transition-colors">
                  Affiliate Disclosure
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#products" className="hover:text-gold-500 transition-colors">
                  Featured Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-light border border-dark-lighter flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-light border border-dark-lighter flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-light border border-dark-lighter flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-light border border-dark-lighter flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-lighter">
          <div className="mb-6 p-6 bg-dark-light rounded-lg border border-dark-lighter">
            <h4 className="font-semibold mb-2 text-white">Affiliate Disclosure</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Elites is a participant in various affiliate advertising programs, including the Amazon Services LLC Associates Program, 
              Costco Wholesale affiliate program, and others. This means we may earn commissions from qualifying purchases made through 
              links on this site at no additional cost to you. We only recommend products we've researched and believe will provide value 
              to our readers. Our recommendations are based on independent research and testing, not influenced by affiliate relationships. 
              For more information, please see our full{" "}
              <a href="#" className="text-gold-500 hover:underline">Affiliate Disclosure</a>.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} Elites. All rights reserved.</p>
            <p className="text-xs">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
