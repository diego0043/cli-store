<template>
  <div>
    <!-- Agregar todo lo restante aca -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <left-menu></left-menu>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./LeftMenu.vue";
export default {
  name: "ContainerPrincipal",
  components: {
    LeftMenu,
  },
};
</script>

<style></style>
