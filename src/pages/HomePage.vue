<template>
  <div class="home">
    <HeroContent />
    <BadgesContent />
    <ServiceCard />
    <OurServices />
    <InfoSection />
    <OurHeroes />
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
import BadgesContent from "@/components/home/BadgesContent";
export default {
  name: "HomePage",
  components: {BadgesContent, TestimonialsContent, OurServices, OurHeroes, InfoSection, ServiceCard, HeroContent},
  mounted() {
    let whatConvertsScript = document.createElement('script')
    whatConvertsScript.setAttribute('src', '//scripts.iconnode.com/95446.js')
    document.head.appendChild(whatConvertsScript)
  },
  metaInfo: {
    title: 'Emergency Locksmith Service Near Me | LocalLocksmith4All',
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