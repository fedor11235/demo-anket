<template>
  <div ref="videoContainer" class="textblock videofile video">
    <video ref="video" class="videofile__video"></video>

    <div class="videofile__video__btn" @click="handlerPlayVideo">
      <transition name="fade">
        <button v-if="!isVideoPlay" type="button">
          <i class="control-icon play-icon">
            <svg viewBox="0 0 20 24">
              <use href="/img/type-questions/icons-control/play.svg#play" />
            </svg>
          </i>
        </button>
      </transition>
    </div>

    <div class="videofile__controls">
      <div class="mediafile__path-wrap">
        <div
          ref="slider"
          class="mediafile__path"
          @mousedown="handlerMousedownVideo"
        >
          <div
            class="mediafile__progress"
            :style="{ width: `${progressVideo}%` }"
          ></div>
        </div>
        <div
          class="mediafile__thumb"
          :style="{ left: `calc(${progressVideo}% - 8px)` }"
        ></div>
      </div>

      <div class="videofile__wrapper">
        <div class="videofile__side">
          <button type="button" class="control-btn" @click="handlerPlayVideo">
            <i v-if="isVideoPlay" class="control-icon pause-icon">
              <svg width="20" height="24" viewBox="0 0 20 24">
                <use href="/img/type-questions/icons-control/pause.svg#pause" />
              </svg>
            </i>

            <i v-else class="control-icon play-icon">
              <svg viewBox="0 0 20 24">
                <use href="/img/type-questions/icons-control/play.svg#play" />
              </svg>
            </i>
          </button>
          <div class="videofile__dur">
            {{ formatTime(currentTime) }} / {{ formatTime(videoDuration) }}
          </div>
        </div>
        <div class="videofile__side">
          <div
            :class="[
              'mediafile__val',
              { 'mediafile__val--mid': progressVolum > 30 },
              { 'mediafile__val--max': progressVolum > 60 },
              { 'mediafile__val--off': isVideoVolumOff },
            ]"
          >
            <div class="mediafile__val-icon" @click="handlerOffVolumVideo">
              <svg
                class="icon-val-on"
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 10.8954 0.895431 10 2 10H8V22H2C0.895431 22 0 21.1046 0 20V12Z"
                  fill="#DDDDDD"
                />
                <path
                  d="M16.3243 0.536082C16.9657 -0.0518697 18 0.40313 18 1.27324V30.7268C18 31.5969 16.9657 32.0519 16.3243 31.4639L6 22V16V10L16.3243 0.536082Z"
                  fill="#DDDDDD"
                />
                <g class="val-progress">
                  <path
                    class="val-progress__min"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 18.6102C22 19.4747 22.9645 19.8548 23.3553 19.0836C23.7676 18.27 24 17.3497 24 16.3751C24 15.4005 23.7676 14.4802 23.3553 13.6665C22.9645 12.8954 22 13.2755 22 14.1399V16.3751V18.6102Z"
                    fill="transparent"
                  />
                  <path
                    class="val-progress__max"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 27.6384C22 28.2836 22.6036 28.7608 23.214 28.5518C28.3254 26.8013 32 21.9548 32 16.25C32 10.5452 28.3254 5.69871 23.214 3.94821C22.6036 3.73916 22 4.21638 22 4.86159V4.90766C22 5.35513 22.2993 5.74373 22.7204 5.89505C26.9647 7.42017 30 11.4806 30 16.25C30 21.0194 26.9647 25.0798 22.7204 26.6049C22.2993 26.7563 22 27.1449 22 27.5923V27.6384Z"
                    fill="transparent"
                  />
                  <path
                    class="val-progress__mid"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 23.3239C22 24.014 22.6842 24.4929 23.2906 24.1634C26.0958 22.6392 28 19.667 28 16.25C28 12.8331 26.0958 9.86084 23.2906 8.33668C22.6842 8.00718 22 8.48609 22 9.17624V9.29163C22 9.67767 22.2256 10.0239 22.5579 10.2204C24.6182 11.4388 26 13.683 26 16.25C26 18.8171 24.6182 21.0613 22.5579 22.2797C22.2256 22.4762 22 22.8224 22 23.2085V23.3239Z"
                    fill="transparent"
                  />
                </g>
              </svg>
              <svg
                class="icon-val-off"
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1442_20345)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.75535 9.99998H2C0.895431 9.99998 0 10.8954 0 12V20C0 21.1045 0.895431 22 2 22H6L16.3243 31.4639C16.9657 32.0518 18 31.5968 18 30.7267V22.2446L5.75535 9.99998ZM18 13.7593V1.27321C18 0.403107 16.9657 -0.0518926 16.3243 0.536059L10.2995 6.05881L18 13.7593Z"
                    fill="#DDDDDD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.4804 26.725C22.19 26.9165 22 27.2357 22 27.5923V27.6384C22 28.2836 22.6036 28.7608 23.214 28.5518C23.4822 28.4599 23.7464 28.3596 24.0064 28.251L22.4804 26.725ZM28.9076 24.667C30.8363 22.399 32 19.4604 32 16.25C32 10.5452 28.3254 5.69871 23.214 3.94821C22.6036 3.73916 22 4.21638 22 4.86159V4.90766C22 5.35513 22.2993 5.74373 22.7204 5.89505C26.9647 7.42017 30 11.4806 30 16.25C30 18.908 29.0573 21.3458 27.4879 23.2473L28.9076 24.667ZM26.0658 21.8251C27.277 20.2921 28 18.3555 28 16.25C28 12.8331 26.0958 9.86084 23.2906 8.33668C22.6842 8.00718 22 8.48609 22 9.17624V9.29163C22 9.67767 22.2256 10.0239 22.5579 10.2204C24.6182 11.4388 26 13.683 26 16.25C26 17.8028 25.4945 19.2374 24.639 20.3983L26.0658 21.8251ZM23.3447 19.104C23.3483 19.0973 23.3518 19.0905 23.3553 19.0836C23.7676 18.27 24 17.3497 24 16.3751C24 15.4005 23.7676 14.4802 23.3553 13.6665C22.9645 12.8954 22 13.2755 22 14.1399V16.3751V17.7593L23.3447 19.104Z"
                    fill="#DDDDDD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L31.7071 30.2929C32.0976 30.6834 32.0976 31.3166 31.7071 31.7071C31.3166 32.0976 30.6834 32.0976 30.2929 31.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                    fill="#DDDDDD"
                  />
                </g>
              </svg>
            </div>

            <div class="mediafile__path-wrap">
              <div
                ref="volum"
                class="mediafile__path mediafile__path--range"
                @mousedown="handlerMousedownVolum"
              >
                <div
                  class="mediafile__progress"
                  :style="{ width: `${isVideoVolumOff ? 0 : progressVolum}%` }"
                ></div>
              </div>

              <div
                class="mediafile__thumb"
                :style="{
                  left: `calc(${isVideoVolumOff ? 0 : progressVolum}% - 8px)`,
                }"
              ></div>
            </div>
          </div>

          <button
            type="button"
            class="videofile__full"
            @click="handlerOffOpenFullSize"
          >
            <svg width="27" height="27" viewBox="0 0 27 27">
              <use
                href="/img/type-questions/icons-control/full-screen.svg#fullScreenIcon"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import audioUrl from "@/assets/video/video2.webm";
export default {
  data() {
    return {
      videoDuration: 0.0,
      currentTime: 0.0,
      isVideoPlay: false,
      isVideoVolumOff: false,
      progressVideo: 0,
      progressVolum: 100,
      isFullSize: false,
    };
  },
  mounted() {
    this.$refs.video.src = audioUrl;
    this.$refs.video.onloadeddata = () => {
      this.videoDuration = this.$refs.video.duration;
    };
    this.$refs.video.addEventListener("timeupdate", this.handlerTimeupdate);
    this.$refs.video.addEventListener("ended", this.handlerEnded);
  },
  methods: {
    handlerOffOpenFullSize() {
      this.isFullSize = !this.isFullSize;
      const header = document.getElementsByClassName("sf-header")[0];
      if (this.isFullSize) {
        header.style.display = "none";
        this.$refs.videoContainer.classList.add("video--full-size");
      } else {
        header.style.display = "block";
        this.$refs.videoContainer.classList.remove("video--full-size");
      }
    },
    handlerMousedownVolum(event) {
      this.handlerChangeCordVolum(event);
      document.addEventListener("mousemove", this.handlerMoveVolum);
      document.addEventListener("mouseup", this.handlerMouseupVolum);
    },
    handlerMoveVolum(event) {
      this.handlerChangeCordVolum(event);
    },
    handlerOffVolumVideo() {
      this.isVideoVolumOff = !this.isVideoVolumOff;
      if (this.isVideoVolumOff) {
        this.$refs.video.volume = 0;
      } else {
        this.$refs.video.volume = this.progressVolum / 100;
      }
    },
    handlerChangeCordVolum(event) {
      const offset =
        event.pageX - this.$refs.volum.getBoundingClientRect().left;
      const sliderWidth = this.$refs.volum.getBoundingClientRect().width;
      if (
        offset >= 0 &&
        offset <= this.$refs.volum.getBoundingClientRect().width
      ) {
        this.progressVolum = offset / (sliderWidth / 100);
        this.$refs.video.volume = this.progressVolum / 100;
      }
    },
    handlerMouseupVolum() {
      document.removeEventListener("mousemove", this.handlerMoveVolum);
    },
    handlerMousedownVideo(event) {
      this.handlerChangeCordVideo(event);
      document.addEventListener("mousemove", this.handlerMoveVideo);
      document.addEventListener("mouseup", this.handlerMouseupVideo);
    },
    handlerMoveVideo(event) {
      this.handlerChangeCordVideo(event);
    },
    handlerChangeCordVideo(event) {
      const offset =
        event.pageX - this.$refs.slider.getBoundingClientRect().left;
      const sliderWidth = this.$refs.slider.getBoundingClientRect().width;
      if (
        offset >= 0 &&
        offset <= this.$refs.slider.getBoundingClientRect().width
      ) {
        this.progressVideo = offset / (sliderWidth / 100);
        this.currentTime = this.videoDuration * (this.progressVideo / 100);
        this.$refs.video.currentTime = this.currentTime;
      }
    },
    handlerMouseupVideo() {
      document.removeEventListener("mousemove", this.handlerMoveVideo);
      document.removeEventListener("mouseup", this.handlerMouseupVideo);
    },

    handlerPlayVideo() {
      if (this.isVideoPlay) {
        this.$refs.video.pause();
      } else {
        this.$refs.video.play();
      }
      this.isVideoPlay = !this.isVideoPlay;
    },
    handlerTimeupdate() {
      this.currentTime = this.$refs.video.currentTime;
    },
    handlerEnded() {
      this.currentTime = 0.0;
    },
    formatTime(time) {
      return time.toFixed(2).replace(".", ":");
    },
  },
  watch: {
    currentTime: function () {
      this.progressVideo = this.currentTime / (this.videoDuration / 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.video {
  position: fixed;
  transition: all 0.3s ease-in-out;
}

.video--full-size {
  position: fixed !important;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
