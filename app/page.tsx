import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
// import { CaseStudySection } from '@/components/case-study-section';
import { ProductsSection } from '@/components/products-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      {/* <CaseStudySection /> */}
      <ProductsSection />
      <ContactSection />
    </div>
  );
}