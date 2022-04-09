<template>
  <div class="city">
    <div class="container hero" style="max-width: unset">
      <div class="row pt-4">
        <div class="col-lg-6 col-sm-12 d-sm-none d-md-block hero-man pt-3"></div>
        <div class="col-lg-6 col-sm-12 d-flex align-self-center flex-column mt-3 mt-md-0 pb-4">
          <h1 class="text-white text-start"><span class="my-yellow">Locksmith</span> in Stockport</h1>
          <ul class="with-border bg-black">
            <li class="text-white text-start pl-2 pt-3">Service on spot withing 25 minutes</li>
            <li class="text-white text-start pl-2">Local service from £49</li>
            <li class="text-white text-start pl-2 pb-3">Locks from £25</li>
          </ul>
          <button class="btn btn-primary w-50 my-primary-btn mt-3">
            <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
          </button>
        </div>
      </div>
    </div>
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

export default {
  name: "StockportCity",
  components: {OurHeroes, ServiceCard, OurServices, TestimonialsContent, InfoSection}
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
    @media (max-width: 700px) {
      display: none;
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