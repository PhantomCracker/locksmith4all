<template>
  <div class="aboutus">
    <InfoSection />
    <TestimonialsContent />
  </div>
</template>

<script>
import InfoSection from "@/components/home/InfoSection";
import TestimonialsContent from "@/components/home/TestimonialsContent";
export default {
  name: "AboutUs",
  components: {TestimonialsContent, InfoSection}
}
</script>

<style scoped>

</style>