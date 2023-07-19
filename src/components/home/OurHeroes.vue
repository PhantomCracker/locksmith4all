<template>
  <div class="heroes pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 pt-5 pb-4">
          <h2 class="text-center pt-2 pb-2" style="color: red">Our awesome heroes</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="heroes-services d-block d-md-flex">
            <div class="card p-3 w-100 ms-lg-3 mt-3 mt-lg-0" v-for="service in services" :key="service.id">
              <div class="card-body p-3">
                <h3 class="card-title text-start pt-2"> <h2> {{ service.id + 1 }} </h2> {{ service.title }}</h3>
                <p class="card-text pt-5 text-start">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurHeroes",
  data() {
    return {
      services: [
        { id: 0, title: "Best customer experience", description: "When you call, we will give you as much help and information as possible over the phone."},
        { id: 1, title: "Crafted by the best", icon:"lock", description: "We only use high-quality, branded locks and parts we've worked with for years and know are reliable."},
        { id: 2, title: "Insurance Approved", icon:"key", description: "Our 12-month Guarantee covers parts and workmanship on all our work. So, if anything goes wrong, we'll be back to sort it the same day you report it."},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .heroes {
    background: $ourBlack;
    h1 {
      color: #FFFFFF;
      font-weight: 700;
    }
    .heroes-services {
      .card {
        background: $ourBlack;
        border: 3px dotted $ourRed;
        &:hover {
          background: -webkit-linear-gradient(top, red 0%, #ff0078 100%),-webkit-linear-gradient(right, red 0%, #ff0078 100%);
        }


        .card-text {
          color: #FFFFFF;
        }
        .card-title {
          color: #FFFFFF;
          font-weight: 600;
          font-family: Montserrat, 'sans-serif';
        }
      }
    }
  }
</style>