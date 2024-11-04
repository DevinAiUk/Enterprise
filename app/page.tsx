import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { SolutionsSection } from '@/components/sections/solutions';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { CTASection } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <ProductShowcase />
      <CTASection />
    </>
  );
}