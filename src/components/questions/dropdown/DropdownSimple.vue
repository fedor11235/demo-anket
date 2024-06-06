<template>
  <div
    class="question question--dropdown"
    :class="{ 'question--disabled': selectedOption.disabled }"
  >
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :img="img"
      :timer="timer"
    />
    <div class="question-list-wrapper">
      <DropdownControl v-model="selectedOption.value" :question="selects" />
    </div>

    <DifficultControl :question="selectedOption" />
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";
import DropdownControl from "../base/DropdownControl.vue";
import DifficultControl from "../base/DifficultControl.vue";

export default {
  components: { QuestionTitle, DifficultControl, DropdownControl },
  props: [
    "questionNumber",
    "title",
    "description",
    "img",
    "timer",
    "selects",
    "value",
    "questionsTypes",
  ],
  data() {
    return {
      isSelect: false,
      selectedOption: {
        disabled: false,
        value: "",
      },
    };
  },
  watch: {
    selectedOption: {
      handler(val) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: val,
        });
        if (val.value || val.disabled) {
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
