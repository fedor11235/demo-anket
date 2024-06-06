<template>
  <div class="question question--scale question--scale-star">
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
    />
    <div
      class="question__wrapper"
      :class="{ 'question__wrapper--opacity': isActive }"
    >
      <div class="question__table-wrapper">
        <table class="question__table question__table--multiple">
          <colgroup>
            <col />
            <col style="width: auto" />
            <col />
          </colgroup>

          <tbody>
            <tr v-for="item of scale" :key="item.id">
              <th @click="handlerAddValue(item.id, 1)">
                <div class="question__row-title">
                  {{ item.titleFirst }}
                </div>
              </th>
              <td>
                <div class="question__row-flex">
                  <span
                    v-for="number in item.range"
                    :key="number"
                    @click="handlerAddValue(item.id, number)"
                  >
                    <i
                      :class="[
                        'question__icon',
                        'question__icon--star',
                        'question__icon--star-default',
                        {
                          'question__icon--star-active':
                            number <=
                            numbers.find((number) => number.id === item.id)
                              ?.value,
                        },
                      ]"
                    ></i>
                  </span>
                </div>
              </td>
              <th @click="handlerAddValue(item.id, item.range)">
                <div class="question__row-title">
                  {{ item.titleLast }}
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <CustomInput
        valName="radio"
        valType="radio"
        text="Затрудняюсь ответить"
      />
    </div>
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";
import CustomInput from "../base/CustomInput.vue";

export default {
  components: { QuestionTitle, CustomInput },
  props: [
    "isActive",
    "questionNumber",
    "title",
    "description",
    "comments",
    "scale",
    "value",
    "questionsTypes",
  ],
  data() {
    return {
      isSelect: false,
      numbers: [],
    };
  },
  methods: {
    handlerAddValue(id, value) {
      const number = this.numbers.find((number) => number.id === id);
      if (number) {
        number.value = value;
      } else {
        this.numbers.push({ id, value });
      }
    },
  },
  watch: {
    numbers: {
      handler(val) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: val,
        });
        for (const key of Object.keys(val)) {
          if (val[key]) {
            if (this.isSelect) {
              return;
            }
            this.isSelect = true;
            this.$emit("finish");
            return;
          }
        }
        this.isSelect = false;
        this.$emit("clean");
      },
      deep: true,
    },
  },
};
</script>
