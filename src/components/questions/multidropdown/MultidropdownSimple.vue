<template>
  <div
    class="question question--dropdown question--multidropdown"
    :class="{ 'question--disabled': values.disabled }"
  >
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
      :img="img"
      :timer="timer"
    />
    <div class="question-list-wrapper">
      <MultidropdownControl
        :question="selects"
        :values="values"
        @selectedOption="handlerSelectOptions($event)"
      />
    </div>

    <DifficultControl :question="values" />
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";
import MultidropdownControl from "../base/MultidropdownControl.vue";
import DifficultControl from "../base/DifficultControl.vue";

export default {
  components: { QuestionTitle, DifficultControl, MultidropdownControl },
  props: [
    "questionNumber",
    "title",
    "description",
    "comments",
    "img",
    "timer",
    "selects",
    "questionsTypes",
    "value",
  ],
  data() {
    return {
      values: {
        disabled: false,
        isOpen: false,
        textarea: false,
        values: [],
      },
    };
  },
  methods: {
    handlerSelectOptions(opt) {
      if (this.values.values.includes(opt)) {
        this.values.values = this.values.values.filter((item) => item !== opt);
      } else {
        this.values.values.push(opt);
        if (opt === "Ничего из вышеперечисленного") {
          this.values.values = ["Ничего из вышеперечисленного"];
        } else {
          this.values.values = this.values.values.filter(
            (item) => item !== "Ничего из вышеперечисленного"
          );
        }
      }
    },
  },
  watch: {
    values: {
      handler(val) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: val,
        });
        if (val.isOpen) {
          return;
        }
        if (val.values.length > 0 || val.disabled) {
          if (this.isSelect) {
            return;
          }
          this.isSelect = true;
          this.$emit("finish");
          return;
        }
        this.isSelect = false;
        this.$emit("clean");
      },
      deep: true,
    },
  },
};
</script>
