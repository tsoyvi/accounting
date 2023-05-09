<template >
    <v-row class="d-flex align-start mb-3">
        <v-col cols="1">
            <v-text-field
                label="№ Договора"
                required
                variant="underlined"
                density="compact"
                @click="test()"
            ></v-text-field>
        </v-col>

        <v-col cols="1">
            <v-text-field
                label="Дата"
                hint=""
                persistent-hint
                required
                variant="underlined"
                density="compact"
            ></v-text-field>
        </v-col>

        <v-col cols="1">
            <v-text-field
                label="№ Заявки"
                required @click="test()"
                variant="underlined"
                density="compact"
            ></v-text-field>
        </v-col>

        <v-col cols="1">
            <v-text-field
                label="Дата Заявки"
                variant="underlined"
                density="compact"
                required @click="test()"
            ></v-text-field>
        </v-col>

        <v-col cols="1" class="">
            <v-select
                :items="placeCert"
                label="Место аттестации"
                required
                variant="underlined"
                density="compact"
            ></v-select>
        </v-col>
        <v-col cols="2" class="">
            <v-radio-group inline class="mb-n5 mt-n1" v-model="counterpart">

                <v-radio v-for="item in counterparts"
                    :key="item"
                    :label="item.name"
                    v-bind:value="item.value"
                    class="mb-n4 mx-15"
                ></v-radio>

            </v-radio-group>
        </v-col>

    <v-col cols="5" class="mt-n3">
    <v-expand-transition>
        <v-row v-if="counterpart">
            <v-col cols="12">
                <v-autocomplete
                    ref="organizationField"
                    v-model="organization"
                    :rules="[() => !!organization || 'This field is required']"
                    :items="organizations"
                    label="Организация"
                    placeholder="Название или ИНН"
                    required
                    loading
                    variant="underlined"
                    density="compact"
                >
                    <template v-slot:loader>
                        <v-progress-linear
                        :active="searchProgress"
                        :color="'success'"
                        absolute
                        height="2"
                        indeterminate
                        ></v-progress-linear>
                    </template>
                    <template v-slot:no-data>
                        <v-list-item>
                        <v-list-item-title>
                            Не чего не найдено по
                            <strong>Организациям</strong>
                        </v-list-item-title>
                        </v-list-item>
                    </template>
                </v-autocomplete>
            </v-col>
        </v-row>
    </v-expand-transition>

    <v-expand-transition>
        <v-row v-if="!counterpart">
            <v-col cols="4">
                <v-text-field
                    class="mb-n6"
                    label="Фамилия"
                    variant="underlined"
                    density="compact"
                required @click="test()"
                ></v-text-field>
            </v-col>

            <v-col cols="4">
                <v-text-field
                    class="mb-n6"
                    label="Имя"
                    required
                    variant="underlined"
                    density="compact"
                    @click="test()"
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field
                    class="mb-n6"
                    label="Отчество"
                    variant="underlined"
                    density="compact"
                    required @click="test()"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                class="mb-n6"
                    label="Место жительства"
                    variant="underlined"
                    density="compact"
                    required @click="test()"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field
                    class="mb-n6"
                    label="Паспорт №"
                    variant="underlined"
                    density="compact"
                    required @click="test()"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    class="mb-n6"
                    label="Кем выдан"
                    variant="underlined"
                    density="compact"
                    required @click="test()"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field
                    class="mb-n6"
                    label="Дата выдачи"
                    variant="underlined"
                    density="compact"
                    required @click="test()"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-expand-transition>
    </v-col>
    </v-row>
<v-divider
  :thickness="2"
  class="border-opacity-100"
  color="info"
></v-divider>
</template>

<script>
export default {
  data() {
    return {
      counterpart: true,
      counterparts: [
        { name: 'Организация', value: true },
        { name: 'Физическое лицо', value: false },
      ],
      placeCert: ['СУР-23АЦ', '8АП'],
      organizations: [],
      organization: null,
      searchProgress: false,
    };
  },

  methods: {
    test() {
      console.log('test');
    },
  },

};
</script>

<style>
.test{
    outline: red solid 1px;
    margin-top: 0px;
}
</style>
