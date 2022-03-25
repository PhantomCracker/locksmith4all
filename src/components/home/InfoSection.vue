<template>
  <div class="info-section pt-4 pb-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 info-section-man"></div>
        <div class="col-lg-6 col-12 ps-3">
<!--          <h5 class="text-start">Make dreams come true   </h5>-->
          <h2 class="text-start">The easiest way to turn tour home into a smart home</h2>
          <p class="text-start pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a neque vitae dui pharetra tempus nec a magna. Nulla eleifend, nisi semper iaculis condimentum, eros nulla pharetra sem, eu euismod libero risus vel mauris. Aliquam nisl tellus, dictum a volutpat non, facilisis vitae odio. Donec porttitor auctor lorem sit amet varius. Donec nec lacus ut risus laoreet euismod sit amet ac odio. Sed tincidunt vehicula metus sed pulvinar. Nunc vitae velit egestas, eleifend metus lobortis, scelerisque libero.
            Quisque sagittis iaculis blandit. Nullam arcu turpis, porttitor ac tristique eu, accumsan sed augue. Integer sodales ligula venenatis nibh convallis, ut pellentesque enim rhoncus. Donec non nibh aliquam, mattis mauris ut, semper nisl. Aenean accumsan posuere ultricies. Sed cursus ex in enim tempor, at varius est commodo. Nulla vitae elit vehicula, pulvinar eros eget, laoreet leo. Aliquam euismod tempor nisl sit amet elementum. Vivamus et massa sem. Curabitur in orci quis mauris pulvinar ultrices.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoSection"
}
</script>

<style lang="scss" scoped>
  .info-section {
    .info-section-man {
      background: url('../../../public/images/infoSectionMan.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }
    h5 {
      color: $ourRed;
    }
    h2 {
      color: black;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 600;
    }
    p {
      color: $ourBlack;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 300;
    }
  }
</style>