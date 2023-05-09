<template>
  <NavigationDrawer
    ref="NavigationDrawer"
  />

  <v-card>
    <v-toolbar color="light-blue-darken-3"

    >
      <v-app-bar-nav-icon
        @click="showNavigationDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title>Your Dashboard</v-toolbar-title>

      <div class="d-flex justify-space-around">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            color=""
            v-bind="props"
          >
            Activator slot
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    <v-btn
      color=""
    >
      Parent activator

      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

    <v-btn
      id="menu-activator"
      color=""
    >
      Sibling activator
    </v-btn>

    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-toolbar>

  </v-card>
</template>

<script>
import NavigationDrawer from './NavigationDrawer.vue';

export default {
  components: {
    NavigationDrawer,

  },
  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  methods: {
    showNavigationDrawer() {
      this.$refs.NavigationDrawer.showNavigationDrawer();
    },
  },
};
</script>

<style>

</style>
