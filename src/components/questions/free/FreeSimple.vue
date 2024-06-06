<template>
  <div
    class="question question--free"
    :class="{ 'question--disabled': select.disabled }"
  >
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
      :img="img"
      :timer="timer"
      :required="required"
    />
    <div class="question-list-wrapper">
      <TextareaControl v-model="select.value" :question="select" />
    </div>
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";
import TextareaControl from "../base/TextareaControl.vue";

export default {
  components: {
    QuestionTitle,
    TextareaControl,
  },
  props: [
    "questionNumber",
    "title",
    "description",
    "comments",
    "img",
    "required",
    "timer",
    "value",
    "questionsTypes",
  ],
  data() {
    return {
      select: {
        id: 0,
        value: "",
        disabled: false,
      },
    };
  },
  watch: {
    select: {
      handler(val) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: val,
        });
        if (val.disabled) {
          if (this.isSelect) {
            return;
          }
          this.isSelect = true;
          this.$emit("finish");
          return;
        }
        if (val.value) {
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
