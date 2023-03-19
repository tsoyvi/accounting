<template>
  <v-footer border>
    <v-col class="text-center mt-0" cols="12">
      <v-img
          :src="require('../../assets/logo.svg')"
          class="my-3"
          contain
          height="25"
        />
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {

};
</script>

<style>

</style>
