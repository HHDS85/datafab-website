<template>
  <div class="bg-white overflow-hidden w-full relative">
    <div class="relative w-full">
      <AppHeader />
      <HeroSection />
    </div>

    <WelcomeSection />
    <ServicesSection />
    <ProjectShowcase />
    <CTASection />
    <TestimonialsCarousel />
    <FAQAccordion />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import HeroSection from '@/components/HeroSection.vue';
import WelcomeSection from '@/components/WelcomeSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import ProjectShowcase from '@/components/ProjectShowcase.vue';
import TestimonialsCarousel from '@/components/TestimonialsCarousel.vue';
import FAQAccordion from '@/components/FAQAccordion.vue';
import CTASection from '@/components/CTASection.vue';
</script>
