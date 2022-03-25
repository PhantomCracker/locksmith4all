<template>
  <div class="home">
    <HeroContent />
    <ServiceCard />
    <InfoSection />
    <OurHeroes />
  </div>
</template>

<script>
import HeroContent from "@/components/home/HeroContent";
import ServiceCard from "@/components/home/ServicesCard";
import InfoSection from "@/components/home/InfoSection";
import OurHeroes from "@/components/home/OurHeroes";
export default {
  name: "HomePage",
  components: {OurHeroes, InfoSection, ServiceCard, HeroContent}
}
</script>

<style scoped>

</style>