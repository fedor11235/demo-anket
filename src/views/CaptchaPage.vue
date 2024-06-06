<template>
  <div ref="CaptchaPage" class="page-wrapper">
    <div class="page-captcha">
      <div class="page-captcha__dialog">
        <div class="page-captcha__title">
          Для завершения анкеты введите капчу
        </div>

        <div
          id="captcha-container"
          class="smart-captcha"
          :data-sitekey="yandexCaptchaKey"
        ></div>
      </div>

      <div class="default-btns-wrapper">
        <button
          class="default-btn default-btn--outline-primary"
          @click="captchaPageBack"
        >
          назад
        </button>
        <button
          class="default-btn default-btn--success"
          @click="captchaPageNext"
        >
          Далее
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { setHeader } from "@/mixins";

export default {
  mixins: [setHeader],
  data() {
    return {
      yandexCaptchaKey: "",
    };
  },
  methods: {
    captchaPageNext() {
      this.$router.push({ name: "finish" });
    },

    captchaPageBack() {
      this.$router.push({ name: "main" });
    },
  },
  created() {
    this.yandexCaptchaKey = process.env.VUE_APP_YANDEX_CAPTCHA_KEY;
    this.$store.state.numberQuestions = 0;
  },
  mounted() {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "https://captcha-api.yandex.ru/captcha.js");
    this.$refs.CaptchaPage.appendChild(script);
  },
};
</script>

<style scoped></style>
