<template>
  <v-menu location="end"
        :activator="menuActivator">
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
export default {
  name: 'PopupMenu',
  props: {
    menuActivator: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      items: [
        { title: 'Редактировать' },
        { title: 'Предмет договора' },
        { title: 'Шаблон договора' },
        { title: 'Счёт' },
        { title: 'Акт' },
      ],
    };
  },

};

</script>

<style>

</style>
