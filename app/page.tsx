import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySections from "@/components/CategorySections";
import EmailCapture from "@/components/EmailCapture";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSection />
      <FeaturedProducts />
      <CategorySections />
      <EmailCapture />
      <BlogPreview />
      <Footer />
    </main>
  );
}
