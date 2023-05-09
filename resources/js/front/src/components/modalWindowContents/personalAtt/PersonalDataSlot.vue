<template>
    <InitialDataSlot />
    <SubjectContractSlot />
</template>

<script>

import InitialDataSlot from './components/InitialDataSlot.vue';
import SubjectContractSlot from './components/SubjectContractSlot.vue';

export default {
  name: 'PersonalDataSlot',

  components: {
    InitialDataSlot,
    SubjectContractSlot,
  },

};
</script>

<style>

</style>
