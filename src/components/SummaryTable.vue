<template>
  <v-table
    density="compact"
    fixed-header
    height="100hv"
  >
    <thead>
      <tr>
        <th class="text-left">
            <b>№пп</b>
        </th>
        <th class="text-left">
            <b>№ договора</b>
        </th>
        <th class="text-left">
            <b>Дата</b>
        </th>
        <th class="text-left">
            <b>Организация</b>
        </th>
        <th class="text-left">
            <b>Предмет договора</b>
        </th>
        <th class="text-left">
            <b>договор</b>
        </th>
        <th class="text-left">
            <b>Счет № от</b>
        </th>
        <th class="text-left">
            <b>АКТ № от</b>
        </th>
        <th class="text-left">
           <b>Место проведения аттестации</b>
        </th>
        <th class="text-left">
            <b>Контактное лицо</b>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(item, index) in desserts"
        :key="index"
      >
        <td>

            <v-btn variant="flat" class="ml-n3" style="font-size: 1rem" :id="'menu_activator_'+index" @mousedown ="menuActivator='#menu_activator_'+index">
                <div class="text-h7 ml-n2">
                   {{ index + 1 }}
                    <v-icon
                        size="large"
                        color="purple-darken-2"
                        icon="mdi-menu"
                    ></v-icon>
                </div>
            </v-btn>
        </td>
        <td>{{ item.calories }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>

  <PopupMenu
    :items="popupMenuitems"
    :menuActivator = "menuActivator"
    :selectedMenuItem = "selectedMenuItem"
  />
</template>

<script>
import PopupMenu from './PopupMenu.vue';

export default {
  name: 'SummaryTable',
  components: {
    PopupMenu,
  },

  props: {
    openWindowDialog: {
      type: Function,
      default: null,
    },
  },

  data() {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
      popupMenuitems: [
        { title: 'Редактировать' },
        { title: 'Предмет договора' },
        { title: 'Шаблон договора' },
        { title: 'Счёт' },
        { title: 'Акт' },
      ],
      menuActivator: null,
    };
  },

  methods: {
    selectedMenuItem(item) {
      console.log(item);
      this.openWindowDialog();
    },
  },

};

</script>

<style>

</style>
