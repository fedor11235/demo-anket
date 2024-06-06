<template>
  <div
    class="question question--free question--free-list"
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
      <TextareaControl
        @addValue="handlerAddValue"
        :list="true"
        :limitation="limitation"
        :question="selects"
      />
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
    "limitation",
    "selects",
    "value",
    "questionsTypes",
  ],
  data() {
    return {
      isSelect: false,
      isPassSelect: false,
      values: {
        disabled: false,
        values: [],
      },
    };
  },
  methods: {
    handlerAddValue(event) {
      const value = this.values.values.find((value) => value.id === event.id);
      if (value) {
        value.value = event.value;
      } else {
        this.isPassSelect = true;
        this.values.values.push(event);
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
        if (val.disabled) {
          if (this.isSelect) {
            return;
          }
          this.isSelect = true;
          this.$emit("finish");
          return;
        }
        for (const value of this.values.values) {
          if (!value.value) {
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
