<template>
  <div class="service-card d-block d-md-flex">
    <div class="card w-100">
      <div class="card-body p-3 card-1">
        <h5 class="card-title text-start mt-lg-5 pt-4">Emergency locksmith</h5>
        <p class="card-text pt-2 text-start">Our experienced team of locksmithing professionals can provide you with the best level of service required by your situation.</p>
      </div>
    </div>
    <div class="card w-100">
      <div class="card-body p-3 card-2">
        <h5 class="card-title text-start mt-lg-5 pt-4">Lock change</h5>
        <p class="card-text pt-2 text-start">We will provide you and your company with professional, prompt, efficient and competitive service.</p>
      </div>
    </div>
    <div class="card w-100">
      <div class="card-body p-3 card-3">
        <h5 class="card-title text-start mt-lg-5 pt-4">Burglary Repair</h5>
        <p class="card-text pt-2 text-start">Our team include the trained locksmiths experienced architectural hardware specialists & lock experts.</p>
      </div>
    </div>
    <div class="card w-100">
      <div class="card-body p-3 card-4">
        <h5 class="card-title text-start mt-lg-5 pt-4">Residential / Comercial</h5>
        <p class="card-text pt-2 text-start">We offering you comprehensive services to the industrial, commercial & residential sectors.</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ServiceCard",
  data() {
    return {
      services: [
        { id: 0, title: "Emergency locksmith", icon:"tools", description: "Our experienced team of locksmithing professionals can provide you with the best level of service required by your situation."},
        { id: 1, title: "Lock change", icon:"lock", description: "We will provide you and your company with professional, prompt, efficient and competitive service."},
        { id: 2, title: "Burglary Repair", icon:"key", description: "Our team include the trained locksmiths experienced architectural hardware specialists & lock experts."},
        { id: 3, title: "Residential / Comercial", icon:"door-closed", description: "We offering you comprehensive services to the industrial, commercial & residential sectors."},
      ]
    }
  },
  components: {},
  methods: {}
}

</script>

<style scoped lang="scss">
.service-card {
  background-color: $ourBlack;
}
.card {
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 280px;
  border: none;
  border-radius: 0;
  background-size: cover;
  &:before {
    content: "";
    background-color: black;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.7;
  }
  &:hover {
    transform: scale(1.05);
  }
  .card-1 {
    background-image: url('../../../public/images/service1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .card-2 {
    background-image: url('../../../public/images/service2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .card-3 {
    background-image: url('../../../public/images/service3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .card-4 {
    background-image: url('../../../public/images/service4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .card-title {
    font-size: 1.5rem;
    color: $ourRed;
    position: relative;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
  }
  .card-text {
    color: #FFFFFF;
    position: relative;
  }
}
@media (max-width: 700px) {
  .card {
    min-height: unset;
  }
}
</style>