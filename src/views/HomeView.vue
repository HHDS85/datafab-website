<template>
  <TheHeader />
  <HeroSection />
  <WelcomeSection />
  <ServicesSection />
  <ProjectShowcase />
  <CTASection />
  <TestimonialsCarousel />
  <FAQAccordion />
  <TheFooter />
</template>

<script setup>
import { useMeta } from '@/composables';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import WelcomeSection from '@/components/WelcomeSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import ProjectShowcase from '@/components/ProjectShowcase.vue';
import TestimonialsCarousel from '@/components/TestimonialsCarousel.vue';
import FAQAccordion from '@/components/FAQAccordion.vue';
import CTASection from '@/components/CTASection.vue';

useMeta('home');
</script>
