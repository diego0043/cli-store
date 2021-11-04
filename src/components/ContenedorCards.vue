<template>
  <b-container class="mt-5">
    <b-row>
      <b-col xl="3" sm="6" v-for="(pub,key) in publicaciones"
        :key="key">
        <b-card 
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 13rem"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { db } from "../db.js";

export default {
  name: "ContenedorCards",
  data() {
    return {
      publicaciones: [],
    };
  },

  firestore: {
    publicaciones: db.collection("publicaciones"),
  },
};
</script>

<style></style>
