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
  components: {TestimonialsContent, InfoSection},
  metaInfo: {
    title: 'Locksmith4All - About Us',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: '24/7 emergency locksmith services. Locksmith4All also provide a range of services and supplies designed to improve the security of your home or business'
      }
    ]
  }
}
</script>

<style scoped>

</style>