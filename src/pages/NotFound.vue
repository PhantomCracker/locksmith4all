<template>
  <div>Page not found</div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    this.$router.push({ path: '/' })
  }
}
</script>

<style scoped>

</style>