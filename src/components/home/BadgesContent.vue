<template>
  <div class="badges">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="nav-item badge">
            <img src="../../../public/images/services/247-service-badge.png" alt="badge1" width="100px"/>
          </div>
        </div>
        <div class="col-4">
          <div class="nav-item badge me-lg-5">
            <img src="../../../public/images/services/toprated.png" alt="badge1" width="100px"/>
          </div>
        </div>
        <div class="col-4">
          <div class="nav-item badge me-lg-5">
            <img src="../../../public/images/services/warranty.png" alt="badge1" width="100px"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BadgesContent"
}
</script>

<style scoped lang="scss">
.badges {
  background-color: $ourBlack;
  border-bottom: solid 10px black;
}
</style>