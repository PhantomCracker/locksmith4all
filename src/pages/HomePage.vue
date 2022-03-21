<template>
  <div class="home">
    <HeroContent />
    <ServiceCard />
  </div>
</template>

<script>
import HeroContent from "@/components/home/HeroContent";
import ServiceCard from "@/components/home/ServicesCard";
export default {
  name: "HomePage",
  components: {ServiceCard, HeroContent}
}
</script>

<style scoped>

</style>