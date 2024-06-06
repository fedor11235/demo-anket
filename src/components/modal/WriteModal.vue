<template>
  <div ref="modalCustom" class="modal-custom">
    <div class="modal-custom__dialog">
      <button class="modal-custom__close" v-modal-cancel></button>

      <div class="modal-custom__title">Написать владельцу</div>

      <form action="" class="modal-custom__form">
        <div class="modal-custom__group">
          <div class="modal-custom__label">Введите e-mail</div>
          <input
            type="email"
            class="modal-custom__input"
            placeholder="Введите"
          />
        </div>

        <div class="modal-custom__group">
          <div class="modal-custom__label">Введите e-mail</div>
          <input
            type="email"
            class="modal-custom__input"
            placeholder="Введите"
          />
        </div>

        <div
          id="captcha-container"
          class="smart-captcha"
          :data-sitekey="yandexCaptchaKey"
        ></div>

        <input
          v-modal-submit
          type="submit"
          class="modal-custom__submit"
          value="написать"
        />
      </form>

      <p class="modal-custom__politic">
        Нажимая на кнопку написать, Вы соглашаетесь
        <a href="#">с правилами обработки персональных данных</a> и
        <a href="#">политикой конфиденциальности</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yandexCaptchaKey: "",
    };
  },
  created() {
    this.yandexCaptchaKey = process.env.VUE_APP_YANDEX_CAPTCHA_KEY;
  },
  mounted() {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "https://captcha-api.yandex.ru/captcha.js");
    this.$refs.modalCustom.appendChild(script);
  },
};
</script>
