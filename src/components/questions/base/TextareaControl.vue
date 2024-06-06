<template>
  <div>
    <div class="textarea-free-lists" v-if="list">
      <div
        class="textarea-free-list"
        v-for="answer in question.answers"
        :key="answer.id"
      >
        <div v-if="answer.title" class="textarea-free-title">
          {{ answer.title }}
          <span v-if="answer.required">*</span>
        </div>
        <img
          v-if="answer.src"
          class="textarea-free-img"
          :src="answer.src"
          :alt="answer.title"
        />
        <textarea
          @focus="addAnswer(question.answers, answer)"
          @input="textareaHeight($event, answer.id)"
          class="textarea-free"
          placeholder="Text"
        ></textarea>
      </div>
    </div>

    <textarea
      v-else
      @input="textareaHeight"
      class="textarea-free"
      placeholder="Text"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ["list", "question", "limitation", "value"],

  methods: {
    textareaHeight(event, id) {
      let elements = document.querySelectorAll(
        ".question-list-wrapper textarea"
      );
      elements.forEach((element) => {
        if (element > 72 + "px") {
          element.style.height = "5px";
          element.style.height = element.scrollHeight + "px";
        }
      });
      if (this.list) {
        this.$emit("addValue", { id, value: event.target.value });
      } else {
        this.$emit("input", event.target.value);
      }
    },

    addAnswer(q, a) {
      if (this.limitation === q.length) return;
      if (q.length - 1 === a.id) {
        q.push({
          id: q.length,
          title: `Предложение ${q.length + 1}`,
          required: false,
        });
        this.$emit("addValue", { id: q.length, value: "" });
      }
    },
  },
};
</script>

<style scoped></style>
