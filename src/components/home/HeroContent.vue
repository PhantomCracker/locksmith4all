<template>
  <div class="hero">
    <div class="container">
      <div class="row d-flex flex-column-reverse flex-lg-row">
        <div class="col-12 col-lg-6 d-flex hero-man"></div>
        <div class="col-12 col-lg-6 d-flex align-self-center flex-column mt-md-0 pb-3">
          <h1 class="text-white text-start"><span class="my-yellow">Local Locksmith</span> near me</h1>
          <ul class="with-border bg-black">
            <li class="text-white text-start pl-2 pt-2">Service on spot within 25 minutes</li>
            <li class="text-white text-start pl-2">Local service from £39</li>
            <li class="text-white text-start pl-2">Locks from £25</li>
            <li class="text-white text-start pl-2">24/7 Local Emergency</li>
            <li class="text-white text-start pl-2">Fully equipped locksmiths</li>
            <li class="text-white text-start pl-2">No Call Out Charge</li>
            <li class="text-white text-start pl-2 pb-2">1 Year Warranty</li>
          </ul>
          <button class="btn btn-primary w-100 my-primary-btn mt-1">
            <a class="text-white text-decoration-none" href="tel:01173256595">At your location within 25 minutes</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroContent",
  components: {},
  methods: {}
}
</script>

<style scoped lang="scss">
.hero {
  background-image: url("../../../public/images/hero-background.webp");
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 500px;
  border-bottom: 10px solid #000000;

  @media (max-width: 700px) {
    max-height: 100%;
  }
  .hero-man {
    background-image: url("../../../public/images/header-man.webp");
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
