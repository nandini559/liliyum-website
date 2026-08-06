import React from 'react';
import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { BestsellerSection } from '../components/BestsellerSection';
import { LuxurySection } from '../components/LuxurySection';
import { SocialProof } from '../components/SocialProof';
import { CTASection } from '../components/CTASection';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <CategorySection />
      <BestsellerSection />
      <LuxurySection />
      <SocialProof />
      <CTASection />
    </main>
  );
};
