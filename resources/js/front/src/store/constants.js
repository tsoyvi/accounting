export default ({
  state: {
    attParams: {
      levels: ['I', 'II', 'III', 'IV'],
      labours: [
        {
          title: 'РиТК',
          description: 'Руководство и технический контроль за проведением сварочных работ',
        },
        {
          title: 'ПиА',
          description: 'Участие в работе органов по подготовке и аттестации',
        },
      ],

      vidAttests: [
        {
          name: 'Пв',
          title: 'первичная',
        },
        {
          name: 'Пр',
          title: 'периодическая',
        },
        {
          name: 'Вн',
          title: 'внеочередная',
        },
        {
          name: 'Ду',
          title: 'дополнительная - новое удостоверение',
        },
        {
          name: 'Дв',
          title: 'дополнительная - вкладыш',
        },
        {
          name: 'П',
          title: 'продление',
        },
      ],
    },

    otu: [
      {
        title: 'ПТО',
      },
      {
        title: 'КО',
      },
      {
        title: 'ГО',
      },
      {
        title: 'НГДО',
      },
      {
        title: 'МО',
      },
      {
        title: 'ОХНВП',
      },
      {
        title: 'ГДО',
      },
      {
        title: 'СК',
      },
    ],

    methodsWelding: [
      {
        title: 'РД',
        description: 'ручная дуговая сварка покрытыми электродами (111)',
      },
      {
        title: 'РДВ',
        description: 'ванная ручная дуговая сварка покрытыми электродами',
      },
      {
        title: 'РАД',
        description: 'ручная аргонодуговая сварка неплавящимся электродом (141)',
      },
      {
        title: 'МАДП',
        description: 'механизированная аргонодуговая сварка плавящимся электродом (131)',
      },
      {
        title: 'МП',
        description: 'механизированная сварка плавящимся электродом в среде активных газов и смесях (135)',
      },
      {
        title: 'ААД',
        description: 'автоматическая аргонодуговая сварка неплавящимся электродом',
      },
      {
        title: 'АПГ',
        description: 'автоматическая аргонодуговая сварка неплавящимся автоматическая сварка плавящимся электродом в среде активных газов и смесях',
      },
      {
        title: 'ААДП',
        description: 'автоматическая аргонодуговая сварка плавящимся электродом',
      },
      {
        title: 'АФ',
        description: 'автоматическая сварка под флюсом (12)',
      },
      {
        title: 'МФ',
        description: 'механизированная сварка под флюсом',
      },
      {
        title: 'МФВ',
        description: 'ванная механизированная сварка под флюсом',
      },
      {
        title: 'МПС',
        description: 'механизированная сварка самозащитной порошковой проволокой (114)',
      },

      {
        title: 'МПГ',
        description: 'механизированная сварка порошковой проволокой в среде активных газов (136)',
      },
      {
        title: 'МПСВ',
        description: 'ванная механизированная сварка самозащитной порошковой проволокой',
      },
      {
        title: 'МСОД',
        description: 'механизированная сварка открытой дугой легированной проволокой',
      },
      {
        title: 'П',
        description: 'плазменная сварка (15)',
      },
      {
        title: 'ЭШ',
        description: 'электрошлаковая сварка',
      },

      {
        title: 'ЭЛ',
        description: 'электронно-лучевая сварка',
      },

      {
        title: 'Г',
        description: 'газовая сварка (311)',
      },
      {
        title: 'РДН',
        description: 'ручная дуговая наплавка покрытыми электродами',
      },
      {
        title: 'РАДН',
        description: 'ручная аргонодуговая наплавка',
      },
      {
        title: 'ААДН',
        description: 'автоматическая аргонодуговая наплавка',
      },
      {
        title: 'АФЛН',
        description: 'автоматическая наплавка ленточным электродом под флюсом',
      },
      {
        title: 'АФПН',
        description: 'автоматическая наплавка проволочным электродом под флюсом',
      },
      {
        title: 'КТС',
        description: 'контактно-точечная сварка',
      },
      {
        title: 'КСС',
        description: 'контактная стыковая сварка сопротивлением',
      },
      {
        title: 'КСО',
        description: 'контактная стыковая сварка оплавление',
      },
      {
        title: 'ВЧС',
        description: 'высокочастотная сварка',
      },
      {
        title: 'ПАК',
        description: 'пайка',
      },
      {
        title: 'НИ',
        description: 'сварка нагретым инструментом',
      },
      {
        title: 'ЗН',
        description: 'сварка с закладными нагревателями',
      },
      {
        title: 'НГ',
        description: 'сварка нагретым газом',
      },
      {
        title: 'Э',
        description: 'экструзионная сварка',
      },

    ],

  },

  getters: {
    ATT_PARAMS(state) {
      return state.attParams;
    },
    OTU(state) {
      return state.otu;
    },
    METHODS_WELDING(state) {
      return state.methodsWelding;
    },
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  },

});
