<template>
  <div class="question-title">
    <div class="question-title__number" v-if="no">Вопрос № {{ no }}</div>

    <div class="question-title__block">
      <div class="question-title__block-item">
        <div class="question-title__title" v-if="title">
          {{ title }}
          <span v-if="required">*</span>
        </div>

        <div class="question-title__descr" v-if="description">
          {{ description }}
        </div>

        <div
          class="question-title__comment"
          v-html="comments"
          v-if="comments"
        ></div>
      </div>
      <div class="question-title__block-item">
        <TimerControl v-if="timer" :timer="timer" />
      </div>
    </div>

    <div class="question-title__img" v-if="img">
      <img :src="`${img}`" alt="" />
      <a ref="linkImg" :href="`${img}`" class="question-title__img-popup">
        <i></i>
      </a>
    </div>
  </div>
</template>

<script>
import TimerControl from "@/components/questions/TimerControl";
import $ from "jquery";
export default {
  props: ["no", "title", "description", "comments", "img", "timer", "required"],
  data() {
    return {
      countdown: null,
    };
  },
  components: {
    TimerControl,
  },
  mounted() {
    this.$question = $(this.$refs.linkImg);
    this.$question.fancybox({});
  },
};
</script>
