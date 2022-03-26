<template>
  <div class="city">
    Test
  </div>
</template>

<script>
export default {
  name: "CityContent",
  data() {
    let city = this.$route.params.city
    return {
      city: city
    }
  }

}
</script>

<style scoped>

</style>