import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCategoryBar from "@/components/ServiceCategoryBar";
import WhyBrokerCalls from "@/components/WhyBrokerCalls";
import UpcomingEvents from "@/components/UpcomingEvents";
import TeamCarousel from "@/components/TeamCarousel";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServiceCategoryBar />
        <WhyBrokerCalls />
        <UpcomingEvents />
        <TeamCarousel />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
