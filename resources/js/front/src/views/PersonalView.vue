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
    <component :is="'PersonalDataSlot'"></component>
  </ModalWindow>

</template>

<script>
import { defineComponent } from 'vue';

// Components
import SummaryTable from '../components/SummaryTable.vue';
import ModalWindow from '../components/ModalWindow.vue';
import PersonalDataSlot from '../components/modalWindowContents/personalAtt/PersonalDataSlot.vue';
// import InitialDataSlot from '../components/modalWindowContents/personalAtt/InitialDataSlot.vue';
// import SubjectContractSlot from '../components/modalWindowContents/personalAtt/SubjectContractSlot.vue';

export default defineComponent({
  name: 'HomeView',
  data: () => ({
    currentContentWindow: null,
  }),

  components: {
    SummaryTable,
    ModalWindow,
    PersonalDataSlot,
    // InitialDataSlot,
    // SubjectContractSlot,
  },

  methods: {
    openWindow(selectedPopupItem) {
      // console.log(selectedPopupItem);
      this.currentContentWindow = selectedPopupItem.module;
      this.$refs.ModalWindow.openWindow();
    },
  },

});
</script>
