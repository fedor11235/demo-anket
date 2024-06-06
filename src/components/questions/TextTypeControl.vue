<template>
  <div>
    <div class="question question--text-type">
      <TextFile />
    </div>
    <div class="question question--text-type">
      <ImageFile />
    </div>
    <div class="question question--text-type">
      <AudioFile />
      <!--      <button-->
      <!--        class="default-btn default-btn&#45;&#45;success mt-5"-->
      <!--        @click="handlerAudioFinish"-->
      <!--      >-->
      <!--        Готово-->
      <!--      </button>-->
    </div>
    <div class="question question--text-type">
      <VideoFile />
      <!--      <button-->
      <!--        class="default-btn default-btn&#45;&#45;success mt-5"-->
      <!--        @click="handlerVideoFinish"-->
      <!--      >-->
      <!--        Готово-->
      <!--      </button>-->
    </div>

    <div class="question question--text-type">
      <TextFile />
      <ImageFile />
      <AudioFile />
      <VideoFile />
    </div>
  </div>
</template>

<script>
import TextFile from "./text-type/TextFile.vue";
import ImageFile from "./text-type/ImageFile.vue";
import VideoFile from "./text-type/VideoFile.vue";
import AudioFile from "./text-type/AudioFile.vue";

export default {
  components: {
    ImageFile,
    TextFile,
    VideoFile,
    AudioFile,
  },
  data() {
    return {
      isSelectAudio: false,
      isSelectVideo: false,
    };
  },
  methods: {
    handlerAudioFinish() {
      if (!this.isSelectAudio) {
        this.$store.commit("increment");
      }
      this.isSelectAudio = true;
    },
    handlerVideoFinish() {
      if (!this.isSelectVideo) {
        this.$store.commit("increment");
      }
      this.isSelectVideo = true;
    },
  },
};
</script>
