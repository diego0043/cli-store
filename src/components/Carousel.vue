<template>
  <div>
    <b-row >
      <b-col >
        <b-container class="contenedor-img">
          <b-carousel
            class="img-tam"
            id="carousel-1"
            v-model="slide"
            :interval="10000"
            controls
            indicators
            img-width="100%"
            img-height="100%"
            style="text-shadow: 1px 1px 2px #333"
          >
            <b-carousel-slide
              class="img-tam"
              v-for="(imagen, key) in url"
              fade
              img-height="100%"
              img-width="100%"
              :key="key"
              background="dark"
              :img-src="url[key]"
            >
            </b-carousel-slide>
          </b-carousel>
        </b-container>
      </b-col>
      
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    url: Array,
  },
  data() {
    return {
      slide: 0,
    };
  },
  methods: {},
};
</script>

<style scoped>


.img-tam{
 
  max-width: 600px;
  max-height: 300px;
  min-width: 300px;
  min-height: 300px;
 
  
}
</style>
