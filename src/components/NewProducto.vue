<template>
  <div class="container completo">
    <b-row>
      <b-col>
        <h1 class="mt-5 h1">Agregemos unas imagenes</h1>
        <b-row>
            <b-col class="mt-5">
                <b-table hover :items="items"></b-table>
            </b-col>
            <b-col>

            </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-img
          src="../assets/imageAdd.svg"
          width="400px"
          height="400px"
          class="mt-5"
        >
        </b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      items: [
        { N: 1, Tamaño: "145kb", Tipo: "png" },
        { N: 2, Tamaño: "145kb", Tipo: "png" },
        { N: 3, Tamaño: "145kb", Tipo: "png" },
        { N: 4, Tamaño: "145kb", Tipo: "png" },
      ],
    };
  },
};
</script>

<style>
.completo {
  height: 100% !important;
  width: 100%;
}
</style>
