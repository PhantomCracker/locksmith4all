<template>
  <div class="city hero">
    <div class="container">
      <div class="row pt-4 d-flex flex-column-reverse flex-lg-row">
        <div class="col-lg-6 col-sm-12 d-sm-none d-md-block hero-man pt-3"></div>
        <div class="col-lg-6 col-sm-12 d-flex align-self-center flex-column mt-3 mt-md-0 pb-4">
          <h1 class="text-white text-start"><span class="my-yellow">Locksmith</span> in Dudley</h1>
          <ul class="with-border bg-black">
            <li class="text-white text-start pl-2 pt-3">Service on spot withing 25 minutes</li>
            <li class="text-white text-start pl-2">Local service from £39</li>
            <li class="text-white text-start pl-2 pb-3">Locks from £25</li>
          </ul>
          <button class="btn btn-primary w-100 my-primary-btn mt-3">
            <a class="text-white text-decoration-none" href="tel:004407493517859">At your location within 25 minutes</a>
          </button>
        </div>
      </div>
    </div>
    <BadgesContent />
    <ServiceCard />
    <OurServices />
    <InfoSection />
    <OurHeroes />
    <TestimonialsContent />
  </div>
</template>

<script>
import OurHeroes from "@/components/home/OurHeroes";
import ServiceCard from "@/components/home/ServicesCard";
import OurServices from "@/components/home/OurServices";
import TestimonialsContent from "@/components/home/TestimonialsContent";
import InfoSection from "@/components/home/InfoSection";
import BadgesContent from "@/components/home/BadgesContent";

export default {
  name: "DudleyCity",
  components: {BadgesContent, OurHeroes, ServiceCard, OurServices, TestimonialsContent, InfoSection},
  mounted() {
    let whatConvertsScript = document.createElement('script')
    whatConvertsScript.setAttribute('src', '//scripts.iconnode.com/95446.js')
    document.head.appendChild(whatConvertsScript)
  },
  metaInfo: {
    title: 'Locksmith in Dudley',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: '24/7 emergency locksmith services in Dudley. Locksmith4All also provide a range of services and supplies designed to improve the security of your home or business'
      }
    ]
  }

}
</script>

<style scoped lang="scss">
.hero {
  background-image: url("../../public/images/hero-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 500px;
  border-bottom: 10px solid #000000;

  @media (max-width: 700px) {
    max-height: 100%;
  }
  .hero-man {
    background-image: url("../../public/images/header-man.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 300px;
    @media (max-width: 700px) {
      border-top: 10px solid black;
    }
  }
  li {
    font-family: 'Ubuntu', sans-serif;
  }
}
h1 {
  font-size: 2.5rem;
  &.with-border {
    border-left: 10px solid $ourRed;
    padding-left: 25px;
    @media (max-width: 700px) {
      font-size: 3.5rem;
    }
  }
}
.btn-primary {
  background-color: $ourRed !important;
  border: none;
  &:focus, :active, :target, :visited {
    border: none;
    box-shadow: none;

  }
  a {
    text-align: center;
  }
}
</style>