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

    <b-carousel-slide v-for="(imagen,key) in images" fade  img-height="400px" :key="key" background="dark" :img-src="url[key]">
    </b-carousel-slide>
    
  </b-carousel>
</template>

<script>
export default {
    name: "Carousel",
    props: {
      images: Array,
      url: Array
    },
    data() {
        return {
            slide: 0,
        }
    },
    methods: {
      
    },
};
</script>

<style>
</style>
