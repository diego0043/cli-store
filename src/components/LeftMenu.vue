<template>
  <div>
    <div
      class="
        container
        mt-4
        overflow-auto
        menuIzquierdo
        d-none d-xl-block d-xxl-block
        ml-4
      "
    >
      <b-container class="mb-2">
        <b-form-checkbox class="m-0" switch size="lg">Nuevo</b-form-checkbox>
      </b-container>

      <label for="marca" class="mb-1">Marca</label>
      <b-list-group class="mb-2" id="marca">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Samsung
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Huawei
          <b-badge variant="primary" pill>2</b-badge>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Nokia
          <b-badge variant="primary" pill>1</b-badge>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          iPhone
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Xiaomi
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>
      </b-list-group>


      <label for="marca" class="mb-2">Sistema</label>
      <b-list-group class="mb-2">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Android
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Windows
          <b-badge variant="primary" pill>2</b-badge>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          ios
          <b-badge variant="primary" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>


      <label for="marca" class="mb-2">Pantalla</label>
      <b-list-group class="mb-2">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          6.0
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          5.5
          <b-badge variant="primary" pill>2</b-badge>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          5
          <b-badge variant="primary" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>

      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menuIzquierdo {
  height: 82vh;
  width: 250px;
  scroll-behavior: smooth;
  position: fixed;
}

::-webkit-scrollbar{
  width: 5px;
  height: 40PX;
}

::-webkit-scrollbar-track{
  background: #F6F6F6;
}

::-webkit-scrollbar-thumb{
  background: #D4B499;
  border-radius: 20px;
}
</style>
