<template>
  <div v-if="type === 'img'" class="question__element-custom">
    <div class="question__element-overlay-img" @click.stop>
      <img :src="`${src}`" alt="" />
      <a ref="linkImgPopup" :href="`${src}`">
        <i></i>
      </a>
    </div>
  </div>

  <div v-else-if="type === 'area'" class="question__element-custom">
    <textarea placeholder="Text" @input="textareaHeight"></textarea>
  </div>

  <div v-else-if="type === 'nothing'" class="question__element-custom"></div>

  <div v-else class="question__element-custom"></div>
</template>

<script>
import $ from "jquery";

export default {
  props: {
    type: String,
    src: String,
  },

  methods: {
    textareaHeight() {
      let elements = document.querySelectorAll(
        ".question__element--textarea textarea"
      );
      elements.forEach((element) => {
        if (element > 72 + "px") {
          element.style.height = "5px";
          element.style.height = element.scrollHeight + "px";
        }
      });
    },
  },

  mounted() {
    this.$question = $(this.$refs.linkImgPopup);
    this.$question.fancybox({});
  },
};
</script>
