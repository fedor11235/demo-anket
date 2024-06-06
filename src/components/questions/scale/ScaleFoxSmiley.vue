<template>
  <div
    class="question question--scale question--scale-smile question--scale-custom"
  >
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
    />
    <div class="question__wrapper">
      <div class="question__table-wrapper">
        <table class="question__table">
          <colgroup>
            <col style="width: 154px" />
            <col style="width: auto" />
            <col style="width: 154px" />
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
                    :class="{
                      active:
                        number ===
                        numbers.find((number) => number.id === item.id)?.value,
                    }"
                  >
                    <div class="question__icon-overlay">
                      <img
                        src="/demo-anket/img/type-questions/test-custom-img.svg"
                        alt=""
                        class="question__icon question__icon--custom question__icon--lg"
                      />
                    </div>
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
    </div>
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";

export default {
  components: { QuestionTitle },
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
