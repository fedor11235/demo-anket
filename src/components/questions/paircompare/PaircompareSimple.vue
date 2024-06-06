<template>
  <div
    class="question question--paircompare question--2cols"
    :class="{ 'question--disabled': values.disabled }"
  >
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
      :img="img"
      :required="required"
    />
    <div class="question-list-wrapper">
      <PairCompare v-model="values.values" :question="selects" />
    </div>
    <DifficultControl :question="values" />
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";
import DifficultControl from "../base/DifficultControl.vue";
import PairCompare from "../base/PairCompare.vue";

export default {
  components: {
    QuestionTitle,
    DifficultControl,
    PairCompare,
  },
  props: [
    "questionNumber",
    "title",
    "description",
    "comments",
    "img",
    "required",
    "selects",
    "value",
    "questionsTypes",
  ],
  data() {
    return {
      isSelect: false,
      values: {
        disabled: false,
        values: [],
      },
    };
  },
  watch: {
    values: {
      handler(val) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: val,
        });

        if (val.values.length || val.disabled) {
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
