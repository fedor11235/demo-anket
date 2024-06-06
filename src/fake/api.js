export function getInfoAnket() {
  return {
    questionsTotal: 45,
    rublesTotal: 60,
  };
}

export function getScale() {
  return [
    {
      id: 0,
      type: "star",
      questionNumber: "1",
      title: "Как вы относитесь к банку ВТБ?",
      description:
        "Оцените, пожалуйста, насколько ваше отношение к банку ВТБ по звездной шкале, где 1 звезда - абсолютно недоволен(-льна), 10 - крайне доволен(-льна)",
      comments:
        "Ширина боковых колонок вмещает не более 17 символов без пробела",
      scale: [
        {
          id: 0,
          titleFirst: "Непривлекательные предложения по вкладам и кредитам",
          titleLast: "Выгодные предложения по вкладам и кредитам",
          range: 10,
        },
        {
          id: 1,
          titleFirst: "Плохое обслуживание",
          titleLast: "Вежливое, качественное обслуживание",
          range: 10,
        },
        {
          id: 2,
          titleFirst: "Малое количество отделений и/или банкоматов",
          titleLast: "Широкая сеть отделений и/или банкоматов",
          range: 10,
        },
      ],
    },
    {
      id: 1,
      type: "star",
      questionNumber: "2",
      title: "Довольны ли Вы в целом своей внешностью?",
      description:
        "Оцените, пожалуйста, насколько Вы довольны своей внешностью по звездной шкале, где 1 звезда - абсолютно недоволен(-льна), 10 - крайне доволен(-льна)",
      scale: [
        {
          id: 0,
          titleFirst: "Абсолютно недоволен(льна)",
          titleLast: "Крайне доволен(льна)",
          range: 10,
        },
      ],
    },
    // {
    //   id: 2,
    //   type: "redSmiley",
    //   questionNumber: "3",
    //   title: "В чрезвычайной ситуации вы скорее:",
    //   description:
    //     "Оцените, пожалуйста, свои ощущения в чрезвычайной ситуации по шкале эмоций, где негативная эмоция - отображение деструктивного повежения, а положительная эмоция - отображение конструктивного поведения",
    //   scale: [
    //     {
    //       id: 0,
    //       titleFirst: "Боюсь",
    //       titleLast: "Не боюсь",
    //       range: 10,
    //     },
    //     {
    //       id: 1,
    //       titleFirst: "Беспокоен",
    //       titleLast: "Спокоен",
    //       range: 10,
    //     },
    //     {
    //       id: 2,
    //       titleFirst: "Незаинтересован",
    //       titleLast: "Заинтересован",
    //       range: 10,
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   type: "redSmiley",
    //   questionNumber: "4",
    //   title: "В чрезвычайной ситуации вы скорее:",
    //   description:
    //     "Оцените, пожалуйста, свои ощущения в чрезвычайной ситуации по шкале эмоций, где негативная эмоция - отображение деструктивного повежения, а положительная эмоция - отображение конструктивного поведения",
    //   scale: [
    //     {
    //       id: 0,
    //       titleFirst: "Боюсь",
    //       titleLast: "Не боюсь",
    //       range: 10,
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   type: "whiteSmiley",
    //   questionNumber: "5",
    //   title: "В чрезвычайной ситуации вы скорее:",
    //   description:
    //     "Оцените, пожалуйста, свои ощущения в чрезвычайной ситуации по шкале эмоций, где негативная эмоция - отображение деструктивного повежения, а положительная эмоция - отображение конструктивного поведения",
    //   scale: [
    //     {
    //       id: 0,
    //       titleFirst: "Боюсь",
    //       titleLast: "Не боюсь",
    //       range: 10,
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   type: "foxSmiley",
    //   questionNumber: "6",
    //   title: "В чрезвычайной ситуации вы скорее:",
    //   description:
    //     "Оцените, пожалуйста, свои ощущения в чрезвычайной ситуации по шкале эмоций, где негативная эмоция - отображение деструктивного повежения, а положительная эмоция - отображение конструктивного поведения",
    //   scale: [
    //     {
    //       id: 0,
    //       titleFirst: "Боюсь",
    //       titleLast: "Не боюсь",
    //       range: 4,
    //     },
    //   ],
    // },
    {
      id: 6,
      type: "word",
      questionNumber: "7",
      title: "В чрезвычайной ситуации вы скорее:",
      description:
        "Оцените, пожалуйста, свои ощущения в чрезвычайной ситуации по шкале эмоций, где негативная эмоция - отображение деструктивного повежения, а положительная эмоция - отображение конструктивного поведения",
      scale: [
        {
          id: 0,
          titleFirst: "Боюсь",
          titleLast: "Не боюсь",
          range: ["Очень", "Немного", "Не знаю", "Не особо", "Нет"],
        },
        {
          id: 1,
          titleFirst: "Беспокоен",
          titleLast: "Спокоен",
          range: ["Очень", "Немного", "Не знаю", "Не особо", "Нет"],
        },
        {
          id: 2,
          titleFirst: "Незаинтересован",
          titleLast: "Заинтересован",
          range: ["Очень", "Немного", "Не знаю", "Не особо", "Нет"],
        },
      ],
    },
    {
      id: 7,
      type: "number",
      questionNumber: "8",
      title: "В чрезвычайной ситуации вы скорее:",
      description:
        "Оцените, пожалуйста, свои ощущения в чрезвычайной ситуации по шкале эмоций, где негативная эмоция - отображение деструктивного повежения, а положительная эмоция - отображение конструктивного поведения",
      scale: [
        {
          id: 0,
          titleFirst: "Боюсь",
          titleLast: "Не боюсь",
          range: 4,
        },
        {
          id: 1,
          titleFirst: "Беспокоен",
          titleLast: "Спокоен",
          range: 4,
        },
        {
          id: 2,
          titleFirst: "Незаинтересован",
          titleLast: "Заинтересован",
          range: 4,
        },
      ],
    },
    {
      id: 8,
      type: "numberColor",
      questionNumber: "9",
      title: "В чрезвычайной ситуации вы скорее:",
      description:
        "Оцените, пожалуйста, свои ощущения в чрезвычайной ситуации по шкале эмоций, где негативная эмоция - отображение деструктивного повежения, а положительная эмоция - отображение конструктивного поведения",
      scale: [
        {
          id: 0,
          titleFirst: "Боюсь",
          titleLast: "Не боюсь",
          range: 11,
        },
        {
          id: 1,
          titleFirst: "Беспокоен",
          titleLast: "Спокоен",
          range: 11,
        },
        {
          id: 2,
          titleFirst: "Незаинтересован",
          titleLast: "Заинтересован",
          range: 11,
        },
      ],
    },
    // {
    //   id: 9,
    //   type: "range",
    //   questionNumber: "10",
    //   title: "В чрезвычайной ситуации вы скорее:",
    //   description:
    //     "Оцените, пожалуйста, свои ощущения в чрезвычайной ситуации по шкале эмоций, где негативная эмоция - отображение деструктивного повежения, а положительная эмоция - отображение конструктивного поведения",
    // },
  ];
}

export function getDistributionScale() {
  return [
    {
      id: 10,
      type: "single",
      questionNumber: "1",
      title:
        "Какие у вас есть предложения по изменению способов мотивации у сотрудников вашей компании?",
      description:
        "Введите в поле ниже свои предложения по изменению способов мотивации у сотрудников.",
      img: "/img/type-questions/img-title.jpg",
    },
    {
      id: 11,
      type: "double",
      questionNumber: "2",
      title:
        "Какие у вас есть предложения по изменению способов мотивации у сотрудников вашей компании?",
      description:
        "Введите в поле ниже свои предложения по изменению способов мотивации у сотрудников.",
      img: "/img/type-questions/img-title.jpg",
    },
  ];
}

export function getMatrix() {}

export function getSelect() {
  return [
    {
      id: 12,
      type: "simple",
      questionNumber: "1",
      title: "Какой цвет IPhone Вам нравится больше остальных?",
      description: "Выберте один вариант ответа",
      img: "/img/type-questions/image-11.jpg",
      required: true,
      selects: [
        {
          id: 0,
          columnsNumber: 1,
          selects: [
            {
              id: 0,
              title: "Green (зеленый)",
              type: "img",
              img: "/img/type-questions/image-22.png",
            },
            {
              id: 1,
              title: "Black (черный)",
              type: "img",
              img: "/img/type-questions/image-33.png",
            },
            {
              id: 2,
              title: "Gold (золото)",
              type: "img",
              img: "/img/type-questions/image-44.png",
            },
            {
              id: 3,
              title: "Другое",
              type: "area",
            },
            {
              id: 4,
              title: "Ничего из вышеперечисленного",
              type: "default",
            },
          ],
        },
      ],
    },
    {
      id: 13,
      type: "simple",
      questionNumber: "2",
      title:
        "Укажите, какой традиционный стрит-фуд из Вы пробовали за последние три месяца?",
      description: "Выберте один вариант ответа",
      required: true,
      selects: [
        {
          id: 0,
          columnsNumber: 1,
          selects: [
            {
              id: 0,
              title: "WOK еда в коробочках",
              type: "default",
            },
            {
              id: 1,
              title: "Бургеры",
              type: "default",
            },
            {
              id: 2,
              title: "Пицца",
              type: "default",
            },
            {
              id: 3,
              title: "Другое",
              type: "area",
            },
            {
              id: 4,
              title: "Ничего из вышеперечисленного",
              type: "default",
            },
          ],
        },
      ],
    },
    {
      id: 14,
      type: "simple",
      questionNumber: "3",
      title: "Какой цвет IPhone Вам нравится больше остальных?",
      description: "Выберте один вариант ответа",
      required: true,
      selects: [
        {
          id: 0,
          columnsNumber: 1,
          selects: [
            {
              id: 0,
              title: "Green (зеленый)",
              type: "default",
            },
            {
              id: 1,
              title: "Black (черный)",
              type: "default",
            },
            {
              id: 2,
              title: "Gold (золото)",
              type: "img",
              img: "/img/type-questions/image-44.png",
            },
            {
              id: 3,
              title: "Другое",
              type: "area",
            },
            {
              id: 4,
              title: "Ничего из вышеперечисленного",
              type: "default",
            },
          ],
        },
      ],
    },
    {
      id: 15,
      type: "simple",
      questionNumber: "4",
      title: "Какой цвет IPhone Вам нравится больше остальных?",
      description: "Выберте один вариант ответа",
      required: true,
      selects: [
        {
          id: 0,
          columnsNumber: 3,
          selects: [
            {
              id: 0,
              title: "Green (зеленый)",
              type: "img",
              img: "/img/type-questions/image-22.png",
            },
            {
              id: 1,
              title: "Black (черный)",
              type: "img",
              img: "/img/type-questions/image-33.png",
            },
            {
              id: 2,
              title: "Gold (золото)",
              type: "img",
              img: "/img/type-questions/image-44.png",
            },
          ],
        },
        {
          id: 1,
          columnsNumber: 1,
          selects: [
            {
              id: 3,
              title: "Другое",
              type: "area",
            },
            {
              id: 4,
              title: "Ничего из вышеперечисленного",
              type: "default",
            },
          ],
        },
      ],
    },
  ];
}

export function getMultiselect() {
  return [
    {
      id: 0,
      type: "simple",
      questionNumber: "1",
      title: "Какой цвет IPhone Вам нравится больше остальных?",
      description: "Выберте один вариант ответа",
      img: "/img/type-questions/image-11.jpg",
      selects: [
        {
          id: 0,
          columnsNumber: 1,
          selects: [
            {
              id: 0,
              title: "Green (зеленый)",
              type: "img",
              img: "/img/type-questions/image-22.png",
            },
            {
              id: 1,
              title: "Black (черный)",
              type: "img",
              img: "/img/type-questions/image-33.png",
            },
            {
              id: 2,
              title: "Gold (золото)",
              type: "img",
              img: "/img/type-questions/image-44.png",
            },
            {
              id: 3,
              title: "Другое",
              type: "area",
            },
            {
              id: 4,
              title: "Ничего из вышеперечисленного",
              type: "default",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      type: "simple",
      questionNumber: "2",
      title:
        "Укажите, какой традиционный стрит-фуд из Вы пробовали за последние три месяца?",
      description: "Выберте один вариант ответа",
      required: true,
      selects: [
        {
          id: 0,
          columnsNumber: 1,
          selects: [
            {
              id: 0,
              title: "WOK еда в коробочках",
              type: "default",
            },
            {
              id: 1,
              title: "Бургеры",
              type: "default",
            },
            {
              id: 2,
              title: "Пицца",
              type: "default",
            },
            {
              id: 3,
              title: "Другое",
              type: "area",
            },
            {
              id: 4,
              title: "Ничего из вышеперечисленного",
              type: "default",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      type: "simple",
      questionNumber: "3",
      title: "Какой цвет IPhone Вам нравится больше остальных?",
      description: "Выберте один вариант ответа",
      required: true,
      selects: [
        {
          id: 0,
          columnsNumber: 1,
          selects: [
            {
              id: 0,
              title: "Green (зеленый)",
              type: "default",
            },
            {
              id: 1,
              title: "Black (черный)",
              type: "default",
            },
            {
              id: 2,
              title: "Gold (золото)",
              type: "img",
              img: "/img/type-questions/image-44.png",
            },
            {
              id: 3,
              title: "Другое",
              type: "area",
            },
            {
              id: 4,
              title: "Ничего из вышеперечисленного",
              type: "default",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      type: "simple",
      questionNumber: "4",
      title: "Какой цвет IPhone Вам нравится больше остальных?",
      description: "Выберте один вариант ответа",
      required: true,
      selects: [
        {
          id: 0,
          columnsNumber: 3,
          selects: [
            {
              id: 0,
              title: "Green (зеленый)",
              type: "img",
              img: "/img/type-questions/image-22.png",
            },
            {
              id: 1,
              title: "Black (черный)",
              type: "img",
              img: "/img/type-questions/image-33.png",
            },
            {
              id: 2,
              title: "Gold (золото)",
              type: "img",
              img: "/img/type-questions/image-44.png",
            },
          ],
        },
        {
          id: 1,
          columnsNumber: 1,
          selects: [
            {
              id: 3,
              title: "Другое",
              type: "area",
            },
            {
              id: 4,
              title: "Ничего из вышеперечисленного",
              type: "default",
            },
          ],
        },
      ],
    },
  ];
}

export function getDropdown() {
  return [
    {
      id: 16,
      type: "simple",
      questionNumber: "1",
      title: "Из какого вы города?",
      description: "Выберите один из вариантов ответа",
      img: "/img/type-questions/img-title.jpg",
      timer: 2,
      selects: {
        id: 0,
        options: [
          { label: "Новосибирск", value: "option1" },
          { label: "Барнаул", value: "option2" },
          { label: "Омск", value: "option3" },
          { label: "Другое", value: "other" },
          { label: "Ничего из вышеперечисленного", value: "nothing" },
        ],
      },
    },
    {
      id: 17,
      type: "simple",
      questionNumber: "2",
      title: "Сколько у вас районов в городе?",
      description: "Выберите один из вариантов ответа",
      selects: {
        id: 1,
        options: [
          { label: "1", value: "option1" },
          { label: "2", value: "option2" },
          { label: "3", value: "option3" },
          { label: "Другое", value: "other" },
          { label: "Ничего из вышеперечисленного", value: "nothing" },
        ],
      },
    },
  ];
}

export function getMultidropdown() {
  return [
    {
      id: 18,
      type: "simple",
      questionNumber: "1",
      title: "Header",
      description: "Description",
      comments: "Technical description",
      img: "/img/type-questions/img-title.jpg",
      selects: {
        id: 0,
        required: true,
        options: [
          { label: "Новосибирск", value: "option1" },
          { label: "Барнаул", value: "option2" },
          { label: "Омск", value: "option3" },
          { label: "Другое", value: "other" },
          { label: "Ничего из вышеперечисленного", value: "nothing" },
        ],
      },
    },
    {
      id: 19,
      type: "simple",
      questionNumber: "2",
      title: "Header2",
      description: "Description2",
      comments: "Technical description2",
      selects: {
        id: 1,
        required: false,
        options: [
          { label: "1", value: "option1" },
          { label: "2", value: "option2" },
          { label: "3", value: "option3" },
          { label: "Другое", value: "other" },
          { label: "Ничего из вышеперечисленного", value: "nothing" },
        ],
      },
    },
  ];
}

export function getFree() {
  return [
    {
      id: 0,
      type: "simple",
      questionNumber: "1",
      title:
        "Какие у вас есть предложения по изменению способов мотивации у сотрудников вашей компании?",
      description:
        "Введите в поле ниже свои предложения по изменению способов мотивации у сотрудников.",
      comments:
        "Длина текста должна составлять не менее 5 и не более 20 символов",
      img: "/img/type-questions/img-title2.png",
      required: true,
    },
    {
      id: 1,
      type: "simple",
      questionNumber: "2",
      title:
        "Какие у вас есть предложения по изменению способов мотивации у сотрудников вашей компании?",
      description:
        "Введите в поле ниже свои предложения по изменению способов мотивации у сотрудников.",
      required: false,
    },
  ];
}

export function getFreeList() {
  return [
    {
      id: 20,
      type: "simple",
      questionNumber: "1",
      title:
        "Какие у вас есть предложения по изменению способов мотивации у сотрудников вашей компании?",
      description:
        "Введите в поле ниже свои предложения по изменению способов мотивации у сотрудников.",
      comments:
        "Длина текста должна составлять не менее 5 и не более 20 символов",
      img: "/img/type-questions/img-title2.png",
      required: true,
      limitation: 4,
      selects: {
        id: 0,
        required: true,
        answers: [
          {
            id: 0,
            title: `Предложение 1`,
            required: true,
            src: `/img/type-questions/img-title3.png`,
          },
          {
            id: 1,
            title: `Предложение 2`,
            required: false,
          },
          {
            id: 2,
            title: `Предложение 3`,
            required: false,
            src: `/img/type-questions/img-title3.png`,
          },
        ],
      },
    },
    {
      id: 21,
      type: "simple",
      questionNumber: "2",
      title:
        "Какие у вас есть предложения по изменению способов мотивации у сотрудников вашей компании?",
      description:
        "Введите в поле ниже свои предложения по изменению способов мотивации у сотрудников.",
      required: false,
      limitation: 5,
      selects: {
        id: 1,
        required: false,
        answers: [
          {
            id: 0,
            title: `Предложение 1`,
            required: true,
          },
          {
            id: 1,
            title: `Предложение 2`,
            required: false,
            src: `/img/type-questions/img-title3.png`,
          },
          {
            id: 2,
            title: `Предложение 3`,
            required: false,
          },
        ],
      },
    },
  ];
}

export function getPaircompare() {
  return [
    {
      id: 21,
      type: "simple",
      questionNumber: "1",
      title:
        "Если бы перед Вами стоял выбор между двумя вариантами упаковки, то какую Вы бы выбрали скорее всего?",
      comments: "В каждой паре выберите один из вариантов",
      img: "/img/type-questions/img-title2.png",
      selects: [
        {
          id: 0,
          questionsGroup: [
            {
              id: 0,
              title: "Gold (золото)",
              isActive: false,
              img: "/img/type-questions/image-44.png",
            },
            {
              id: 1,
              title: "Black (черный)",
              isActive: false,
              img: "/img/type-questions/image-33.png",
            },
          ],
        },
        {
          id: 1,
          questionsGroup: [
            {
              id: 0,
              title: "Green (зеленый)",
              isActive: false,
              img: "/img/type-questions/image-22.png",
            },
            {
              id: 1,
              title: "Gold (золото)",
              isActive: false,
              img: "/img/type-questions/image-44.png",
            },
          ],
        },
        {
          id: 2,
          questionsGroup: [
            {
              id: 0,
              title: "Green (зеленый)",
              isActive: false,
              img: "/img/type-questions/image-22.png",
            },
            {
              id: 1,
              title: "Black (черный)",
              isActive: false,
              img: "/img/type-questions/image-33.png",
            },
          ],
        },
      ],
    },
  ];
}

export function getName() {
  return [
    {
      id: 22,
      type: "simple",
      questionNumber: "1",
      title: "Введите Ваше имя",
      questionDifficult: true,
      selects: {
        id: 0,
        col: 2,
        type: "name",
        options: [
          {
            id: 0,
            title: "Имя",
            type: "text",
          },
          {
            id: 1,
            title: "Фамилия",
            type: "text",
          },
        ],
      },
    },
    {
      id: 23,
      type: "simple",
      questionNumber: "2",
      title: "Введите Ваше имя",
      questionDifficult: true,
      required: true,
      selects: {
        id: 0,
        col: 3,
        disabled: false,
        required: "Имя",
        type: "name",
        options: [
          {
            id: 0,
            title: "Имя",
            type: "text",
          },
          {
            id: 1,
            title: "Фамилия",
            type: "text",
          },
          {
            id: 2,
            title: "Отчество",
            type: "text",
          },
        ],
      },
    },
  ];
}

export function getEmail() {
  return [
    {
      id: 24,
      type: "simple",
      questionNumber: "1",
      title: "Введите Вашу электронную почту",
      questionDifficult: true,
      required: true,
      selects: {
        id: 0,
        col: 2,
        disabled: false,
        type: "email",
        required: "name@example.com",
        options: [
          {
            id: 0,
            title: "name@example.com",
            type: "text",
          },
        ],
      },
    },
    {
      id: 25,
      type: "simple",
      questionNumber: "2",
      title: "Введите Вашу электронную почту",
      selects: {
        id: 0,
        col: 2,
        disabled: false,
        type: "email",
        required: "name@example.com",
        options: [
          {
            id: 0,
            title: "name@example.com",
            type: "text",
          },
        ],
      },
    },
  ];
}

export function getPhone() {
  return [
    {
      id: 26,
      type: "simple",
      questionNumber: "1",
      title: "Введите Ваш номер телефона",
      comments: "Введите номер телефона в формате +7 XXX XXX-XX-XX",
      questionDifficult: true,
      required: true,
      selects: {
        id: 0,
        col: 2,
        disabled: false,
        type: "phone",
        options: [
          {
            id: 0,
            title: "+7 XХХ ХХХ-ХХ-ХХ",
            type: "text",
          },
        ],
      },
    },
    {
      id: 27,
      type: "simple",
      questionNumber: "2",
      title: "Введите Ваш номер телефона",
      selects: {
        type: "phone",
        id: 0,
        col: 2,
        disabled: false,
        options: [
          {
            id: 0,
            title: "+7 XХХ ХХХ-ХХ-ХХ",
            type: "text",
          },
        ],
      },
    },
  ];
}

export function getDate() {
  return [
    {
      id: 28,
      type: "simple",
      questionNumber: "1",
      title: "Введите дату",
      description: "Когда произошла такая ситуация?",
      comments: "Пожалуйста, выберите прошедшую дату",
      questionDifficult: true,
      required: true,
      selects: {
        id: 0,
        col: 1,
        disabled: false,
        type: "date",
        options: [
          {
            id: 0,
            title: "ДД.ММ.ГГГГ",
          },
        ],
      },
    },
    // {
    //   id: 29,
    //   type: "simple",
    //   questionNumber: "2",
    //   title: "Введите дату",
    //   description: "Когда произошла такая ситуация?",
    //   comments: "Пожалуйста, выберите прошедшую дату",
    //   selects: {
    //     id: 0,
    //     col: 2,
    //     disabled: false,
    //     type: "date",
    //     options: [
    //       {
    //         id: 0,
    //         title: "ДД.ММ.ГГГГ",
    //       },
    //     ],
    //   },
    // },
  ];
}

export function getFile() {
  return [
    {
      id: 30,
      type: "simple",
      questionNumber: "1",
      title: "Загрузите файл",
      description: "Загррузите изображение вашего логотипа",
      comments:
        "Разрешенные форматы файлов:<br> jpeg, jpg, png, gif, bmp, avi, mp4, 4gp, mkv, flv, mov, mpg, mp3, wav, pdf, doc, docx, xls, xlsx, csv, txt, ppt, pptx, odt, odx, rtf, zip, rar, gz, tar.gz, tar, 7z <br><br> Максимальный размер файла 100 МБ.",
      required: true,
    },
  ];
}

export function getOrder() {
  return [
    {
      id: 31,
      type: "simple",
      questionNumber: "1",
      title:
        "Распределите приложения на телефоне по частоте использования (вверху очень часто, снизу - не пользуюсь или нет на телефоне)",
      description: "Распределите варинаты по частоте использования",
      required: true,
      selects: [
        {
          id: 0,
          text: "Whatssas",
          src: "/img/type-questions/rangeX10.png",
          alt: "range1",
        },
        {
          id: 1,
          text: "WhatsApp - американский бесплатный сервис обмена мгновенными сообщениями и голосовой связи по IP, принадлежащий компании Meta. Он позволяет пользователям отправлять текстовые и голосовые сообщения, совершать голосовые и видеозвонки, обмениваться изображениями, документами, местоположением пользователя и другим контентом. Клиент работает на платформах Android, iOS, S40, KaiOS, а также Windows, macOS и в виде веб-приложения. Компания WhatsApp Inc., создавшая мессенджер, была основана Яном Кумом и Брайаном Эктоном 24 февраля 2009 года и расположена в Маунтин-Вью, США; с октября 2014 года принадлежит Meta[2][3] В 2016 году приложение официально стало бесплатным и по сей день является таким[4], пользователь оплачивает лишь использованный приложением интернет-трафик[5][6]. Приложением пользуется более миллиарда человек[7]. WhatsApp - американский бесплатный сервис обмена мгновенными сообщениями и голосовой связи по IP, принадлежащий компании Meta. Он позволяет пользователям отправлять текстовые и голосовые сообщения, совершать голосовые и видеозвонки, обмениваться изображениями, документами, местоположением пользователя и другим контентом.",
          src: "/img/type-questions/range2.png",
          alt: "range2",
        },

        {
          id: 2,
          text: "Whatssas",
        },
      ],
    },
  ];
}

export function getClicktest() {
  return [
    {
      id: 32,
      type: "simple",
      questionNumber: "1",
      title:
        "Перед Вами цветовой вариант iphone №1. На какие элементы дизайна вы обратили в первую очередь",
      description:
        "Нажимайте на отделные части (места, точки) дизайна, которые Вы видите в первую очередь.",
      comments: "Необходимо выбрать не менее 1 точки",
      required: true,
      imgClick: "/img/type-questions/image-33.png",
    },
    {
      id: 33,
      type: "simple",
      questionNumber: "2",
      title:
        "Перед Вами цветовой вариант iphone №2. На какие элементы дизайна вы обратили в первую очередь",
      description:
        "Нажимайте на отделные части (места, точки) дизайна, которые Вы видите в первую очередь.",
      required: true,
      imgClick: "/img/type-questions/image-22.png",
    },
  ];
}

export function getAreatest() {
  return [
    {
      id: 34,
      type: "simple",
      questionNumber: "1",
      title:
        "Перед Вами цветовой вариант iphone №1. На какие элементы дизайна вы обратили в первую очередь",
      description:
        "Нажимайте на отделные части (места, точки) дизайна, которые Вы видите в первую очередь.",
      comments: "Необходимо выбрать не менее 1 точки",
      required: true,
      imgClick: "/img/type-questions/image-33.png",
    },
    {
      id: 35,
      type: "simple",
      questionNumber: "2",
      title:
        "Перед Вами цветовой вариант iphone №2. На какие элементы дизайна вы обратили в первую очередь",
      description:
        "Нажимайте на отделные части (места, точки) дизайна, которые Вы видите в первую очередь.",
      required: true,
      imgClick: "/img/type-questions/image-22.png",
    },
  ];
}
