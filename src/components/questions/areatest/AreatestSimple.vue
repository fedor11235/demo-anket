<template>
  <div class="question question--areatest">
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
      :img="img"
      :required="required"
    />

    <div class="areatest areatest--descktop">
      <div
        class="canvas"
        ref="canvas"
        @mousedown.self="handlerMousedownCanvas"
        @mousemove.self="handlerMousemoveCanvas"
        @mouseup.self="handlerMouseupCanvas"
      >
        <img
          class="areatest__desktop-img"
          :src="imgClick"
          alt="iphone_black"
          draggable="false"
        />

        <div
          v-for="(point, index) in points"
          :key="index"
          :style="{
            left: point.left + 'px',
            top: point.top + 'px',
            width: point.width + 'px',
            height: point.height + 'px',
          }"
          @mousedown.self="handlerMousedownPoint($event, index)"
          @mousemove.self="handlerMousemovePoint"
          @mouseup.self="handlerMouseupPoint(index)"
          @mouseenter.self="handlerMouseenterPoint(index)"
          @mouseleave.self="handlerMouseleavePoint(index)"
          :class="[
            'areatest__field',
            'areatest__field--pulling',
            {
              'areatest__field--pull': point.finish,
            },
          ]"
        >
          <div
            @mousedown.stop="handlerMousedownDotTl($event, index)"
            class="areatest__field-border-control areatest__field-border-control--tl"
          ></div>
          <div
            @mousedown.stop="handlerMousedownDotTm($event, index)"
            class="areatest__field-border-control areatest__field-border-control--tm"
          ></div>
          <div
            class="areatest__field-border-control areatest__field-border-control--tr"
          ></div>
          <div
            @mousedown.stop="handlerMousedownDotRm($event, index)"
            class="areatest__field-border-control areatest__field-border-control--rm"
          ></div>
          <div
            @mousedown.stop="handlerMousedownDotRd($event, index)"
            class="areatest__field-border-control areatest__field-border-control--rd"
          ></div>
          <div
            @mousedown.stop="handlerMousedownDotDm($event, index)"
            class="areatest__field-border-control areatest__field-border-control--dm"
          ></div>
          <div
            @mousedown.stop="handlerMousedownDotDl($event, index)"
            class="areatest__field-border-control areatest__field-border-control--dl"
          ></div>
          <div
            @mousedown.stop="handlerMousedownDotLm($event, index)"
            class="areatest__field-border-control areatest__field-border-control--lm"
          ></div>

          <button
            v-if="point.isHover"
            @click.stop="handlerDeletePoint(index)"
          ></button>
        </div>
      </div>
      <button @click="handlerDeletePoints" class="areatest__btn-clear"></button>
    </div>

    <div class="areatest areatest--mobile">
      <a :href="imgClick" data-fancybox data-caption="Single image">
        <img :src="imgClick" />
      </a>
    </div>
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";

export default {
  props: [
    "questionNumber",
    "title",
    "description",
    "comments",
    "img",
    "required",
    "questionDifficult",
    "imgClick",
  ],
  components: { QuestionTitle },
  data() {
    return {
      isSelect: false,
      newPoint: null,
      isMouseDownCanvas: false,
      isMouseDownPoint: false,
      points: [],
      pointMove: null,
      startDragY: NaN,
      startDragX: NaN,
      isMouseDownDotTl: false,
      isMouseDownDotTm: false,
      isMouseDownDotRm: false,
      isMouseDownDotRd: false,
      isMouseDownDotDm: false,
      isMouseDownDotDl: false,
      isMouseDownDotLm: false,
    };
  },
  methods: {
    handlerMousedownDotTl(event, index) {
      this.isMouseDownDotTl = true;
      this.pointMove = this.points[index];
      const targetCoords = this.$refs.canvas.getBoundingClientRect();
      this.startDragY = event.clientY - targetCoords.left;
      this.startDragX = event.clientX - targetCoords.top;
      document.addEventListener("mousemove", this.handlerMousemoveDotTl);
      document.addEventListener("mouseup", this.handlerMouseupDotTl);
    },
    handlerMousedownDotTm(event, index) {
      this.isMouseDownDotTm = true;
      this.pointMove = this.points[index];
      const targetCoords = this.$refs.canvas.getBoundingClientRect();
      this.startDragY = event.clientY - targetCoords.left;
      this.startDragX = event.clientX - targetCoords.top;
      document.addEventListener("mousemove", this.handlerMousemoveDotTm);
      document.addEventListener("mouseup", this.handlerMouseupDotTm);
    },
    handlerMousedownDotRm(event, index) {
      this.isMouseDownDotRm = true;
      this.pointMove = this.points[index];
      const targetCoords = this.$refs.canvas.getBoundingClientRect();
      this.startDragY = event.clientY - targetCoords.left;
      this.startDragX = event.clientX - targetCoords.top;
      document.addEventListener("mousemove", this.handlerMousemoveDotRm);
      document.addEventListener("mouseup", this.handlerMouseupDotRm);
    },
    handlerMousedownDotRd(event, index) {
      this.isMouseDownDotRd = true;
      this.pointMove = this.points[index];
      const targetCoords = this.$refs.canvas.getBoundingClientRect();
      this.startDragY = event.clientY - targetCoords.left;
      this.startDragX = event.clientX - targetCoords.top;
      document.addEventListener("mousemove", this.handlerMousemoveDotRd);
      document.addEventListener("mouseup", this.handlerMouseupDotRd);
    },
    handlerMousedownDotDm(event, index) {
      this.isMouseDownDotDm = true;
      this.pointMove = this.points[index];
      const targetCoords = this.$refs.canvas.getBoundingClientRect();
      this.startDragY = event.clientY - targetCoords.left;
      this.startDragX = event.clientX - targetCoords.top;
      document.addEventListener("mousemove", this.handlerMousemoveDotDm);
      document.addEventListener("mouseup", this.handlerMouseupDotDm);
    },
    handlerMousedownDotDl(event, index) {
      this.isMouseDownDotDl = true;
      this.pointMove = this.points[index];
      const targetCoords = this.$refs.canvas.getBoundingClientRect();
      this.startDragY = event.clientY - targetCoords.left;
      this.startDragX = event.clientX - targetCoords.top;
      document.addEventListener("mousemove", this.handlerMousemoveDotDl);
      document.addEventListener("mouseup", this.handlerMouseupDotDl);
    },
    handlerMousedownDotLm(event, index) {
      this.isMouseDownDotLm = true;
      this.pointMove = this.points[index];
      const targetCoords = this.$refs.canvas.getBoundingClientRect();
      this.startDragY = event.clientY - targetCoords.left;
      this.startDragX = event.clientX - targetCoords.top;
      document.addEventListener("mousemove", this.handlerMousemoveDotLm);
      document.addEventListener("mouseup", this.handlerMouseupDotLm);
    },
    handlerMousemoveDotTl(event) {
      if (this.isMouseDownDotTl) {
        const targetCoords = this.$refs.canvas.getBoundingClientRect();
        const tempDragY = event.clientY - targetCoords.left;
        const tempDragX = event.clientX - targetCoords.top;
        const offsetY = tempDragY - this.startDragY;
        const offsetX = tempDragX - this.startDragX;
        this.pointMove.top = this.pointMove.top + offsetY;
        this.pointMove.left = this.pointMove.left + offsetX;
        this.pointMove.height = this.pointMove.height - offsetY;
        this.pointMove.width = this.pointMove.width - offsetX;
        this.startDragY = tempDragY;
        this.startDragX = tempDragX;
      }
    },
    handlerMousemoveDotTm(event) {
      if (this.isMouseDownDotTm) {
        const targetCoords = this.$refs.canvas.getBoundingClientRect();
        const tempDragY = event.clientY - targetCoords.left;
        const tempDragX = event.clientX - targetCoords.top;
        const offsetY = tempDragY - this.startDragY;
        this.pointMove.top = this.pointMove.top + offsetY;
        this.pointMove.height = this.pointMove.height - offsetY;
        this.startDragY = tempDragY;
        this.startDragX = tempDragX;
      }
    },
    handlerMousemoveDotRm(event) {
      if (this.isMouseDownDotRm) {
        const targetCoords = this.$refs.canvas.getBoundingClientRect();
        const tempDragY = event.clientY - targetCoords.left;
        const tempDragX = event.clientX - targetCoords.top;
        const offsetX = tempDragX - this.startDragX;
        this.pointMove.width = this.pointMove.width + offsetX;
        this.startDragY = tempDragY;
        this.startDragX = tempDragX;
      }
    },
    handlerMousemoveDotRd(event) {
      if (this.isMouseDownDotRd) {
        const targetCoords = this.$refs.canvas.getBoundingClientRect();
        const tempDragY = event.clientY - targetCoords.left;
        const tempDragX = event.clientX - targetCoords.top;
        const offsetY = tempDragY - this.startDragY;
        const offsetX = tempDragX - this.startDragX;
        this.pointMove.height = this.pointMove.height + offsetY;
        this.pointMove.width = this.pointMove.width + offsetX;
        this.startDragY = tempDragY;
        this.startDragX = tempDragX;
      }
    },
    handlerMousemoveDotDm(event) {
      if (this.isMouseDownDotDm) {
        const targetCoords = this.$refs.canvas.getBoundingClientRect();
        const tempDragY = event.clientY - targetCoords.left;
        const tempDragX = event.clientX - targetCoords.top;
        const offsetY = tempDragY - this.startDragY;
        this.pointMove.height = this.pointMove.height + offsetY;
        this.startDragY = tempDragY;
        this.startDragX = tempDragX;
      }
    },
    handlerMousemoveDotDl(event) {
      if (this.isMouseDownDotDl) {
        const targetCoords = this.$refs.canvas.getBoundingClientRect();
        const tempDragY = event.clientY - targetCoords.left;
        const tempDragX = event.clientX - targetCoords.top;
        const offsetY = tempDragY - this.startDragY;
        const offsetX = tempDragX - this.startDragX;
        this.pointMove.left = this.pointMove.left + offsetX;
        this.pointMove.height = this.pointMove.height + offsetY;
        this.pointMove.width = this.pointMove.width - offsetX;
        this.startDragY = tempDragY;
        this.startDragX = tempDragX;
      }
    },
    handlerMousemoveDotLm(event) {
      if (this.isMouseDownDotLm) {
        const targetCoords = this.$refs.canvas.getBoundingClientRect();
        const tempDragY = event.clientY - targetCoords.left;
        const tempDragX = event.clientX - targetCoords.top;
        const offsetX = tempDragX - this.startDragX;
        this.pointMove.left = this.pointMove.left + offsetX;
        this.pointMove.width = this.pointMove.width - offsetX;
        this.startDragY = tempDragY;
        this.startDragX = tempDragX;
      }
    },
    handlerMouseupDotTl() {
      document.removeEventListener("mousemove", this.handlerMousemoveDotTl);
      document.removeEventListener("mouseup", this.handlerMouseupDotTl);
      this.isMouseDownDotTl = false;
      this.startDragY = NaN;
      this.startDragX = NaN;
    },
    handlerMouseupDotTm() {
      document.removeEventListener("mousemove", this.handlerMousemoveDotTm);
      document.removeEventListener("mouseup", this.handlerMouseupDotTm);
      this.isMouseDownDotTm = false;
      this.startDragY = NaN;
      this.startDragX = NaN;
    },
    handlerMouseupDotRm() {
      document.removeEventListener("mousemove", this.handlerMousemoveDotRm);
      document.removeEventListener("mouseup", this.handlerMouseupDotRm);
      this.isMouseDownDotRm = false;
      this.startDragY = NaN;
      this.startDragX = NaN;
    },
    handlerMouseupDotRd() {
      document.removeEventListener("mousemove", this.handlerMousemoveDotRd);
      document.removeEventListener("mouseup", this.handlerMouseupDotRd);
      this.isMouseDownDotRd = false;
      this.startDragY = NaN;
      this.startDragX = NaN;
    },
    handlerMouseupDotDm() {
      document.removeEventListener("mousemove", this.handlerMousemoveDotDm);
      document.removeEventListener("mouseup", this.handlerMouseupDotDm);
      this.isMouseDownDotDm = false;
      this.startDragY = NaN;
      this.startDragX = NaN;
    },
    handlerMouseupDotDl() {
      document.removeEventListener("mousemove", this.handlerMousemoveDotDl);
      document.removeEventListener("mouseup", this.handlerMouseupDotDl);
      this.isMouseDownDotDl = false;
      this.startDragY = NaN;
      this.startDragX = NaN;
    },
    handlerMouseupDotLm() {
      document.removeEventListener("mousemove", this.handlerMousemoveDotLm);
      document.removeEventListener("mouseup", this.handlerMouseupDotLm);
      this.isMouseDownDotLm = false;
      this.startDragY = NaN;
      this.startDragX = NaN;
    },
    handlerMousedownPoint(event, index) {
      this.isMouseDownPoint = true;
      this.pointMove = this.points[index];
      const targetCoords = this.$refs.canvas.getBoundingClientRect();
      this.startDragY = event.clientY - targetCoords.left;
      this.startDragX = event.clientX - targetCoords.top;
    },
    handlerMousemovePoint(event) {
      if (this.isMouseDownPoint) {
        const targetCoords = this.$refs.canvas.getBoundingClientRect();
        const tempDragY = event.clientY - targetCoords.left;
        const tempDragX = event.clientX - targetCoords.top;

        const offsetY = tempDragY - this.startDragY;
        const offsetX = tempDragX - this.startDragX;
        this.pointMove.top = this.pointMove.top + offsetY;
        this.pointMove.left = this.pointMove.left + offsetX;
        this.startDragY = tempDragY;
        this.startDragX = tempDragX;
      }
    },
    handlerMouseupPoint() {
      this.isMouseDownPoint = false;
      this.startDragY = NaN;
      this.startDragX = NaN;
    },
    handlerDeletePoint(index) {
      this.points.splice(index, 1);
    },
    handlerDeletePoints() {
      this.points = [];
    },
    handlerMouseenterPoint(index) {
      this.points[index].isHover = true;
    },
    handlerMouseleavePoint(index) {
      this.points[index].isHover = false;
    },
    handlerMousedownCanvas(event) {
      this.isMouseDownCanvas = true;
      this.newPoint = {
        top: event.layerY,
        left: event.layerX,
        width: 0,
        height: 0,
        finish: false,
        isHover: false,
      };
      this.points.push(this.newPoint);
    },
    handlerMousemoveCanvas(event) {
      if (this.isMouseDownCanvas) {
        this.newPoint.width = event.layerX - this.newPoint.left - 4;
        this.newPoint.height = event.layerY - this.newPoint.top - 4;
      }
    },
    handlerMouseupCanvas() {
      this.isMouseDownCanvas = false;
      this.newPoint.finish = true;
      this.newPoint = null;
    },
  },
  watch: {
    points: {
      handler(val) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: val,
        });
        if (val.length > 0) {
          if (this.isSelect) {
            return;
          }
          this.isSelect = true;
          this.$emit("finish");
          return;
        }
        if (this.isSelect) {
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

<style scoped>
.canvas {
  position: relative;
  user-select: none;
}
</style>
