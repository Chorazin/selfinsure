<template>
  <div class="carousel carousel-slider height_set">
    <a class="carousel-item" href="#"><img src="../assets/dummy_image_v002.jpg" class='responsive-img'></a>
    <a class="carousel-item" href="#"><img src="../assets/idea_v003.jpg"></a>
  </div>
</template>


<script>

export default {
  name: 'carousel',

  data() {
    return {

    }
  },
  mounted() {
    //initialize the carousel with Jquery once the component is mounted
    $('.carousel').carousel({

    });

    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });
  }
}
</script>


<style>
.carousel {
  height: 1080px;
}
</style>
