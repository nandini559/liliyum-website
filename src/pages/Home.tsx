import React from 'react';
import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { BestsellerSection } from '../components/BestsellerSection';
import { LuxurySection } from '../components/LuxurySection';
import { SocialProof } from '../components/SocialProof';
import { CTASection } from '../components/CTASection';
import CategoryPage from '../components/categoryPage';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <CategoryPage />
      <BestsellerSection />
      <CategorySection />
      {/* <LuxurySection /> */}
      <SocialProof />
      <CTASection />
    </main>
  );
};
