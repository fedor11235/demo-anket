<template>
  <div v-if="timer" class="timer">
    <span ref="timerCount"></span>
  </div>
</template>

<script>
export default {
  props: ["timer", "isHeader"],
  data() {
    return {
      countdown: null,
    };
  },
  methods: {
    addTimeInHtml(timeString) {
      if (this.$refs.timerCount) {
        this.$refs.timerCount.innerHTML = "";
        const timeArray = timeString.split("");
        for (const timeSymbol of timeArray) {
          const newDiv = document.createElement("div");
          if (!timeSymbol.includes(":")) {
            newDiv.classList.add("timer-symbol");
          }
          newDiv.innerHTML = timeSymbol;
          this.$refs.timerCount.appendChild(newDiv);
        }
      } else {
        const timeStringNull = "00:00:00";
        const timeArray = timeStringNull.split("");
        for (const timeSymbol of timeArray) {
          const newDiv = document.createElement("div");
          if (!timeSymbol.includes(":")) {
            newDiv.classList.add("timer-symbol");
          }
          newDiv.innerHTML = timeSymbol;
          this.$refs.timerCount.appendChild(newDiv);
        }
        clearInterval(this.countdown);
      }
    },
    startTimer() {
      const start_time = new Date();
      const stop_time = start_time.setMinutes(
        start_time.getMinutes() + this.timer
      );
      this.countdown = setInterval(() => {
        const now = new Date().getTime();
        const remain = stop_time - now;
        const hours = String(
          Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60 * 60))
        ).padStart(2, "0");
        const min = String(
          Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0");
        const sec = String(Math.floor((remain % (1000 * 60)) / 1000)).padStart(
          2,
          "0"
        );
        const timeString = hours + ":" + min + ":" + sec;
        this.addTimeInHtml(timeString);
        if (remain < 0) {
          clearInterval(this.countdown);
          this.$refs.timerCount.innerHTML = "";
        }
      }, 1000);
    },
  },
  mounted() {
    if (this.timer) {
      this.startTimer();
    }
  },
  deactivated() {
    if (this.timer) {
      clearInterval(this.countdown);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap";
.timer {
  span {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #444444;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    font-variant-numeric: tabular-nums;

    @include media-breakpoint-down(xs) {
      font-size: 20px;
      line-height: 24px;
    }

    :deep(.timer-symbol) {
      border: 2px solid #1edc1a;
      border-radius: 4px;
      padding: 4px 5px;
    }
  }

  &.timer--finish {
    span {
      color: #ff6c6c;
    }
  }
}
</style>
