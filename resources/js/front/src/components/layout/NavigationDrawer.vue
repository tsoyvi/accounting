<template>

      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>

</template>

<script>
export default {
  props: {
  },

  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    showNavigationDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style>

</style>
