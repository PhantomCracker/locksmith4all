<template>
  <div class="heroes pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 pt-5 pb-4">
          <h1 class="text-center pt-2 pb-2">Our awesome heroes</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="heroes-services d-block d-md-flex">
            <div class="card p-3 w-100 ms-3" v-for="service in services" :key="service.id">
              <div class="card-body p-3">
                <h3 class="card-title text-start pt-2"> <h1> {{ service.id + 1 }} </h1> {{ service.title }}</h3>
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
        { id: 0, title: "Amazing & Beautiful", description: "Cras metus enim, luctus ut urna in, rutr um accumsan mi. Nunc magna tortor, tincidunt vitae or ci ac. Cras metus enim."},
        { id: 1, title: "Crafted by the best", icon:"lock", description: "Cras metus enim, luctus ut urna in, rutr um accumsan mi. Nunc magna tortor, tincidunt vitae or ci ac. Cras metus enim."},
        { id: 2, title: "Experts in design", icon:"key", description: "Cras metus enim, luctus ut urna in, rutr um accumsan mi. Nunc magna tortor, tincidunt vitae or ci ac. Cras metus enim."},
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