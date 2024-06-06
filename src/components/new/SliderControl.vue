<template>
  <div class="slider-control" ref="slider" @mousedown="handlerMousedown">
    <!-- @mouseenter="isShowThumb = true"
    @mouseleave="isShowThumb = false" -->
    <!-- <Transition name="fade">
      <div v-show="isShowThumb || isMoveThumb" class="slider-control_thumb" ref="thumb"></div>
    </Transition> -->
    <div class="slider-control_back" ref="back"></div>
    <div class="slider-control_thumb" ref="thumb"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isShowThumb: false,
      // isMoveThumb: false,
    };
  },
  methods: {
    handlerMousedown(event) {
      this.handlerChangeCord(event);
      // this.isMoveThumb = true
      document.addEventListener("mousemove", this.handlerMove);
      document.addEventListener("mouseup", this.handlerMouseup);
    },
    handlerMove(event) {
      this.handlerChangeCord(event);
    },
    handlerChangeCord(event) {
      const offset =
        event.pageX - this.$refs.slider.getBoundingClientRect().left;
      // const offsetRight = event.pageX - this.$refs.slider.getBoundingClientRect().right
      const sliderWidth = this.$refs.slider.getBoundingClientRect().width;
      if (
        offset >= 0 &&
        offset <= this.$refs.slider.getBoundingClientRect().width
      ) {
        this.$refs.thumb.style.left = `${offset - 8}px`;
        this.$refs.back.style.right = `${sliderWidth - offset}px`;
        const percent = offset / (sliderWidth / 100);
        this.$emit("percent", percent);
      }
    },
    handlerMouseup() {
      document.removeEventListener("mousemove", this.handlerMove);
      // this.isMoveThumb = false
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-control {
  position: relative;
  background-color: #ddd;
  height: 4px;
  width: 100%;
  cursor: pointer;
  &_back {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #1edc1a;
  }
  &_thumb {
    position: absolute;
    top: -6px;
    left: -8px;
    background-color: #1edc1a;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    pointer-event: none;
  }
}

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }

// .fade-enter, .fade-leave-to {
//   opacity: 0;
// }
</style>
