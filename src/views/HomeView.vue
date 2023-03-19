<template>

  <div class="d-flex justify-center  my-4">
    <div class="text-h5" style ="color: #827717">
      Реестр Договоров, счетов и актов при аттестации сварщиков и специалистов сварочного производства
    </div>
  </div>
  <hr>

  <SummaryTable />

</template>

<script>
import { defineComponent } from 'vue';

// Components
import SummaryTable from '../components/SummaryTable.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    SummaryTable,
  },

});
</script>
