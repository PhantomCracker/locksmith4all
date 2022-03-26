<template>
  <div class="home">
    <HeroContent />
    <ServiceCard />
    <InfoSection />
    <OurHeroes />
    <OurServices />
    <TestimonialsContent />
  </div>
</template>

<script>
import HeroContent from "@/components/home/HeroContent";
import ServiceCard from "@/components/home/ServicesCard";
import InfoSection from "@/components/home/InfoSection";
import OurHeroes from "@/components/home/OurHeroes";
import OurServices from "@/components/home/OurServices";
import TestimonialsContent from "@/components/home/TestimonialsContent";
export default {
  name: "HomePage",
  components: {TestimonialsContent, OurServices, OurHeroes, InfoSection, ServiceCard, HeroContent}
}
</script>

<style scoped>

</style>