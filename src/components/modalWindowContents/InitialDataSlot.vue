<template>
    <v-row>
        <v-col cols="2">
            <v-text-field
                label="№ Договора"
                required
                variant="underlined"
                density="compact"
                @click="test()"
            ></v-text-field>
        </v-col>

        <v-col cols="3">
            <v-text-field
                label="Дата"
                hint=""
                persistent-hint
                required
                variant="underlined"
                density="compact"
            ></v-text-field>
        </v-col>

        <v-col cols="2">
            <v-text-field
                label="№ Заявки"
                required @click="test()"
                variant="underlined"
                density="compact"
            ></v-text-field>
        </v-col>

        <v-col cols="3">
            <v-text-field
                label="Дата Заявки"
                variant="underlined"
                density="compact"
                required @click="test()"
            ></v-text-field>
        </v-col>

        <v-col cols="2">
            <v-select
                :items="placeCert"
                label="Место аттестации"
                required
                variant="underlined"
                density="compact"
            ></v-select>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12" class="">
            <v-radio-group inline class="mb-n5 mt-n1" v-model="counterpart">
                <v-spacer></v-spacer>
                <v-radio v-for="item in counterparts" :key="item" :label="item.name" v-bind:value="item.value"
                    class="mb-n4 mx-15">
                </v-radio>
                <v-spacer></v-spacer>
            </v-radio-group>
        </v-col>
    </v-row>

    <v-expand-transition>
        <v-row v-show="counterpart">
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
        <v-row v-show="!counterpart">
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

</style>
