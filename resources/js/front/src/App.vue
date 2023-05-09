<template>
  <v-app>
    <v-layout>
      <v-main>
        <MainMenu />
        <router-view/>
        <FooterPages />
      </v-main>
   </v-layout>
  </v-app>
</template>

<script>

import MainMenu from './components/layout/MainMenu.vue';
import FooterPages from './components/layout/FooterPages.vue';

export default {
  name: 'App',

  components: {
    MainMenu,
    FooterPages,

  },

  data: () => ({
    //
  }),
};
</script>
