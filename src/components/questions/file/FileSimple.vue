<template>
  <div
    class="question question--inputs question--file"
    :class="{ 'drag-over': isDragging }"
    @dragover.prevent.stop="handleDragOver"
    @dragleave.prevent.stop="handleDragLeave"
    @drop.prevent.stop="handleDrop"
  >
    <QuestionTitle
      :no="questionNumber"
      :title="title"
      :description="description"
      :comments="comments"
      :img="img"
      :required="required"
    />
    <div class="file-upload-wrapper">
      <div class="file-upload__list" id="file-upload__list">
        <div
          class="file-upload__list-item"
          v-for="(file, index) in fileList"
          :key="index"
        >
          <div class="file-upload__list-item-wrapper">
            <div class="file-upload__list-item-left">
              <div v-if="isLoading" class="file-upload__preloader"></div>
              <div
                v-if="
                  file.type === 'image/png' || file.type === 'image/svg+xml'
                "
              >
                <img
                  v-if="!isLoading"
                  :src="`/img/type-questions/${file.name}`"
                  :alt="`${file.name}`"
                />
              </div>
              <div v-else>
                <div class="file-upload__list-item-type" v-if="!isLoading">
                  {{ file.name.match(/\.(.+)$/)[1] }}
                </div>
              </div>
              <span v-if="!isLoading" class="file-upload__list-item-name">{{
                file.name
              }}</span>
            </div>

            <div
              @click.prevent="removeFile(file)"
              class="file-upload__list-item-cancel"
            >
              <i></i>
            </div>
          </div>
        </div>
      </div>

      <p class="file-upload__text">Перетащите файлы сюда или выберите их</p>
      <label for="file-upload" class="custom-file-upload">
        Выбрать файлы
      </label>

      <input id="file-upload" type="file" multiple @change="handleFileUpload" />
    </div>
  </div>
</template>

<script>
import QuestionTitle from "../base/QuestionTitle.vue";

export default {
  data() {
    return {
      isSelect: false,
      fileList: [],
      isDragging: false,
      isLoading: false,
    };
  },
  props: [
    "questionNumber",
    "title",
    "description",
    "comments",
    "img",
    "required",
    "questionDifficult",
    "value",
    "questionsTypes",
  ],
  components: { QuestionTitle },
  methods: {
    handleDragOver() {
      if (!this.isDragging) {
        this.isDragging = true;
      }
    },
    handleDragLeave() {
      if (this.isDragging) {
        this.isDragging = false;
      }
    },

    handleDrop(event) {
      this.isDragging = false;
      this.isLoading = true;

      const files = event.dataTransfer.files;

      for (let i = 0; i < files.length; i++) {
        this.fileList.push(files[i]);
      }

      setTimeout(() => {
        this.isLoading = false;
        console.log(this.fileList);
      }, 5000);
    },

    handleFileUpload(event) {
      this.fileList = [];
      for (let i = 0; i < event.target.files.length; i++) {
        this.fileList.push(event.target.files[i]);
      }
    },

    removeFile(file) {
      this.fileList = this.fileList.filter((item) => item !== file);
    },
  },
  watch: {
    fileList: {
      handler(val) {
        this.$emit("input", {
          questionsTypes: this.questionsTypes,
          values: {
            name: val[0]?.name,
            type: val[0]?.type,
          },
        });
        if (val.length > 0) {
          if (this.isSelect) {
            return;
          }
          this.isSelect = true;
          this.$emit("finish");
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
