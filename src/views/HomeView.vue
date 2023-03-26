<template>

  <div class="d-flex justify-center  my-4">
    <div class="text-h5" style ="color: #827717">
      Реестр Договоров, счетов и актов при аттестации сварщиков и специалистов сварочного производства
    </div>
  </div>
  <hr>

  <SummaryTable
    :openWindowDialog="openWindow"
  />

  <ModalWindow
    ref="ModalWindow"
  >
    <component :is="currentContentWindow"></component>
  </ModalWindow>

</template>

<script>
import { defineComponent } from 'vue';

// Components
import SummaryTable from '../components/SummaryTable.vue';
import ModalWindow from '../components/ModalWindow.vue';
import InitialDataSlot from '../components/modalWindowContents/InitialDataSlot.vue';

export default defineComponent({
  name: 'HomeView',
  data: () => ({
    currentContentWindow: null,
  }),

  components: {
    SummaryTable,
    ModalWindow,
    InitialDataSlot,
  },

  methods: {
    openWindow() {
      this.currentContentWindow = 'InitialDataSlot';
      this.$refs.ModalWindow.openWindow();
    },
  },

});
</script>
