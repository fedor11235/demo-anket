<template>
  <div class="question question--scale question--scale-overlay">
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
    />
    <div class="question__wrapper">
      <div class="question__table-wrapper">
        <table class="question__table question__table--without-col">
          <colgroup>
            <col style="width: 154px" />
            <col style="width: auto" />
            <col style="width: auto" />
            <col style="width: auto" />
            <col style="width: auto" />
            <col style="width: auto" />
            <col style="width: 154px" />
          </colgroup>
          <tbody>
            <tr v-for="item of scale" :key="item.id">
              <th @click="handlerAddValue(item.id, item.range[0])">
                <span>{{ item.titleFirst }}</span>
              </th>
              <td
                v-for="word in item.range"
                :key="word"
                @click="handlerAddValue(item.id, word)"
              >
                <span
                  :class="[
                    'question__table-item',
                    {
                      'question__table-item--active':
                        word ===
                        numbers.find((number) => number.id === item.id)?.value,
                    },
                  ]"
                  >{{ word }}</span
                >
              </td>
              <th
                @click="
                  handlerAddValue(item.id, item.range[item.range.length - 1])
                "
              >
                <span>{{ item.titleLast }}</span>
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
