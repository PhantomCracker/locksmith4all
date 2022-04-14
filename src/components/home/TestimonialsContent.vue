<template>
  <div class="testimonials">
    <vueper-slides
        class="no-shadow"

        :arrows="false"
        :visible-slides="2"
        fixed-height="150px"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1 } }"
        style="background-size: auto; background-repeat: no-repeat;">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "TestimonialsContent",
  data: () => ({
    slides: [
      {
        image: require('../../../public/images/testimonials/t1.png')
      },
      {
        image: require('../../../public/images/testimonials/t2.png')
      },
      {
        image: require('../../../public/images/testimonials/t3.png')
      },
      {
        image: require('../../../public/images/testimonials/t4.png')
      },
      {
        image: require('../../../public/images/testimonials/t5.png')
      },
      {
        image: require('../../../public/images/testimonials/t1.png')
      },
    ]
  }),
  components: {
    VueperSlides,
    VueperSlide
  }
}
</script>

<style lang="scss" scoped>
.vueperslide {
  background-size: contain;
  background-repeat: no-repeat;
}
</style>