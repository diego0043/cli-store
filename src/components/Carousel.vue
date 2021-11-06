<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="10000"
    controls
    indicators
    background="#ababab"
    img-width="400"
    img-height="400"
    style="text-shadow: 1px 1px 2px #333"
  >

    <!--
    <b-carousel-slide
      caption="First slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://picsum.photos/1024/480/?image=52"
      img-width="1000"
      img-height="480"
    ></b-carousel-slide>

    -->

    <b-carousel-slide caption="Primera imagen"  img-src=../assets/Img_blank.svg>
      <p>
        Aqui podras ver una vista previa de como se verian tus imagenes.
      </p>
    </b-carousel-slide>
    
    <b-carousel-slide caption="Segunda imagen" img-src=../assets/Img_blank.svg>
      <p>
        Aqui podras ver una vista previa de como se verian tus imagenes.
      </p>
    </b-carousel-slide>

    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    <b-carousel-slide caption="Tercera imagen" img-src=../assets/Img_blank.svg>
      <p>
        Aqui podras ver una vista previa de como se verian tus imagenes.
      </p>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
    name: "Carousel",
    data() {
        return {
            slide: 0,
            file1: null,
        
        }
    },
};
</script>

<style>
</style>
