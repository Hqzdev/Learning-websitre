import { motion } from 'framer-motion'
import HeroSection from '../components/sections/HeroSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import ModelSelectionSection from '../components/sections/ModelSelectionSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import PricingSection from '../components/sections/PricingSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import FAQSection from '../components/sections/FAQSection'
import CTASection from '../components/sections/CTASection'

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <HowItWorksSection />
      <ModelSelectionSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default HomePage
