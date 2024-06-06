<template>
  <div
    :class="[
      `question question--${selects.type} question--${selects.col}cols`,
      {
        'question--disabled': values.disabled,
        'question--error': isError,
      },
    ]"
  >
    <template v-if="isError">
      <FieldError text="Нет ответа на обязательный вопрос" />
    </template>

    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
      :img="img"
      :required="required"
    />

    <div class="question-list-wrapper">
      <div :class="`question-list question-list--${selects.col}cols`">
        <div v-for="select of selects.options" :key="select.id" class="contnet">
          <input
            ref="input"
            v-model="values.values[select.title]"
            :readonly="selects.type === 'date'"
            type="text"
            :placeholder="select.title"
            :class="[
              'text-input',
              {
                'input--error': isError,
              },
            ]"
            @click="handlerClick($event, selects.type)"
          />
          <ModalDate
            v-if="selects.type === 'date' && isOpenModalDate"
            @selectDay="handlerSelectDate(select.title, $event)"
          />
        </div>
      </div>
    </div>

    <DifficultControl v-if="questionDifficult" :question="values" />
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";
import FieldError from "../base/FieldError.vue";
import DifficultControl from "../base/DifficultControl.vue";
import ModalDate from "../base/ModalDate.vue";

export default {
  components: {
    QuestionTitle,
    DifficultControl,
    FieldError,
    ModalDate,
  },
  props: [
    "questionNumber",
    "title",
    "description",
    "comments",
    "img",
    "required",
    "questionDifficult",
    "selects",
    "value",
    "questionsTypes",
  ],
  data() {
    return {
      isSelect: false,
      isError: false,
      isOpenModalDate: false,
      values: {
        disabled: false,
        values: {},
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
        if (this.selects.required && !val.values[this.selects.required]) {
          this.isError = true;
          this.isSelect = false;
          this.$emit("clean");
          return;
        }
        this.isError = false;
        for (const key of Object.keys(val.values)) {
          if (val.values[key] || this.selects.disabled) {
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
  methods: {
    formatDate(date) {
      let dd = date.getDate();
      if (dd < 10) dd = "0" + dd;

      let mm = date.getMonth() + 1;
      if (mm < 10) mm = "0" + mm;

      const yyyy = date.getFullYear();

      return dd + "." + mm + "." + yyyy;
    },

    handlerSelectDate(title, value) {
      const date = new Date(value.year, value.month, value.number);
      this.values.values[title] = this.formatDate(date);
    },
    handlerInput(event, type, title) {
      if (type === "date") {
        event.preventDefault();
        return;
      }
      this.values.values[title] = event.target.value;
    },
    handlerClick(event, type) {
      if (type === "date") {
        event.preventDefault();
        this.isOpenModalDate = !this.isOpenModalDate;
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contnet {
  position: relative;
  /*width: fit-content;*/
}
@media (max-width: 425px) {
  .contnet {
    width: 100%;
  }
}

.question {
    .question-list {
        @media(max-width: 576px) {
            grid-template-columns: 100% !important;
        }
    }
}

</style>
