<template>
   <v-table
    density="compact"
  >
    <tbody>
        <tr>
            <td>Договор № - 1</td>
            <td>Заявка № 121</td>
            <td>Организация: Физическое лицо
                232 232 234
            </td>
        </tr>
    </tbody>
   </v-table>

      <v-divider :thickness="2" ></v-divider>

    <v-row
        v-for="(item, index) in subjectsContract"
        :key="index"
        class="d-flex align-end"
    >
      <v-col cols="6">
        <v-textarea
            v-model="item.descriptionWork"
            label="Наименование работ, услуг"
            variant="underlined"
            auto-grow
            rows="1"
            hint="Двойной клик для выбора"
            @dblclick="selectDescriptionWorks(item)"
        >
        </v-textarea>
      </v-col>

      <v-col cols="1" class="pr-1">
        <v-text-field
          v-model="item.count"
          label="Кол-во, ед."
          variant="underlined"
          type="number"
          min="1"
        ></v-text-field>
      </v-col>

      <v-col cols="2">
        <v-text-field
          v-model="item.price"
          label="Стоимость"
          prefix="₽"
          variant="underlined"
          type="number"
        ></v-text-field>
      </v-col>

      <v-col cols="2">
        <v-text-field

          label="Сумма"
          v-model="item.totalPrice"
          prefix="₽"
          variant="underlined"
          type="number"
        ></v-text-field>
      </v-col>

      <v-col cols="auto" class="mb-7 ml-5">
        <v-btn density="compact" icon="mdi-minus"></v-btn>
      </v-col>
      <v-divider :thickness="2" inset></v-divider>
    </v-row>

    <v-btn density="compact" icon="mdi-plus" @click="addItemSubjectsContract()"></v-btn>

    <v-dialog
      v-model="selectorDialog"
      width="950"
      height=""
    >
      <v-card>
        <v-card-text class="mt-5">
        <v-row>
            <v-col cols="2">
                <v-select
                    v-model="level"
                    :items="ATT_PARAMS.levels"
                    label="Уровень"
                    density="compact"
                    variant="solo"
                    @update:modelValue="createDescriptionWorks()"
                    ></v-select>
            </v-col>

            <v-col cols="2" v-if="level ==='I'">
                <v-select
                    v-model="weldingMethod"
                    :items="METHODS_WELDING"
                    label="Способ сварки"
                    density="compact"
                    variant="solo"
                    @update:modelValue="createDescriptionWorks()"
                >
                    <template v-slot:item="{ props, item }">
                        <v-list-item
                        v-bind="props"
                        :title="item?.raw?.title"
                        :subtitle="item?.raw?.description"
                        ></v-list-item>
                    </template>
                </v-select>
            </v-col>

            <v-col cols="2" v-else>
                <v-select
                    v-model="labours"
                    :items="ATT_PARAMS.labours"
                    label="Деятельность"
                    density="compact"
                    variant="solo"
                    @update:modelValue="createDescriptionWorks()"
                ></v-select>
            </v-col>

            <v-col cols="4">
            <v-select
                v-model="vidAttest"
                density="compact"
                variant="solo"
                :items="ATT_PARAMS.vidAttests"
                label="Вид аттестации"
                placeholder=""
                @update:modelValue="createDescriptionWorks()"
            >
                <template v-slot:item="{ props, item }">
                    <v-list-item
                    v-bind="props"
                    :title="item?.raw?.name"
                    :subtitle="item?.raw?.title"
                    ></v-list-item>
                </template>
            </v-select>
            </v-col>

            <v-col cols="4">
                <v-select
                    v-model="selectedOtu"
                    :items="OTU"
                    label="Группы ТУ*"
                    density="compact"
                    variant="solo"
                    multiple
                    @update:modelValue="createDescriptionWorks()"
                ></v-select>
            </v-col>
        </v-row>
        <v-card-actions class="mb-n1 mt-n5">
          <v-btn color="primary" block @click="selectorDialog = false">Закрыть</v-btn>
        </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SummaryTable',
  components: {
  },
  data() {
    return {

      subjectsContract: [{
        descriptionWork: '',
        count: 1,
        price: 3,
        totalPrice: 3,
      }],

      level: 'I',
      vidAttest: 'первичная',
      labours: 'РиТК',
      weldingMethod: 'РД',
      selectedOtu: [],

      selectorDialog: false,
      itemSelected: null,
    };
  },
  props: {

  },
  computed: {
    ...mapGetters(['ATT_PARAMS', 'OTU', 'METHODS_WELDING']),
  },

  methods: {
    selectDescriptionWorks(item) {
      console.log(item);
      this.selectorDialog = true;
      this.itemSelected = item;
    },

    createDescriptionWorks() {
      let levelName = '';
      let attExtension = '';
      let labour = '';
      let vidAtt = '';
      const otu = this.selectedOtu.join(', ');

      if (this.labours === 'ПиА') {
        labour = 'вид деятельности - Участие в работе органов по подготовке и аттестации';
      } else if (this.labours === 'РиТК') { labour = 'вид деятельности - Руководство и технических контроль за проведением сварочных работ'; }

      if (this.vidAttest === 'продление') {
        attExtension = 'Продление удостоверения';
      } else {
        attExtension = 'Аттестация';
        vidAtt = `(${this.vidAttest})`;
      }

      if (this.level === 'I') {
        levelName = 'сварщика (специалиста сварочного производства I уровня)';
        this.itemSelected.descriptionWork = `${attExtension} ${levelName}, ${this.weldingMethod} сварки, объектов ${otu} ${vidAtt}`;
      } else {
        levelName = `специалиста сварочного производства ${this.level} уровня`;
        this.itemSelected.descriptionWork = `${attExtension} ${levelName}, ${labour}, объектов ${otu} ${vidAtt}`;
      }
    },

    addItemSubjectsContract() {
      this.subjectsContract.push({});
    },

  },

};

</script>

<style>

</style>
