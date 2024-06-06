<template>
  <div ref="modalCustom" class="modal-custom">
    <div class="modal-custom__dialog">
      <button class="modal-custom__close" v-modal-cancel></button>

      <div class="modal-custom__title">Пожаловаться на анкету</div>

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
          <div class="modal-custom__label">Выберите тему жалобы</div>
          <DropdownModal
            v-model="selectedOption"
            :question="selects"
            isNotCustom
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
import DropdownModal from "../questions/base/DropdownModal.vue";

export default {
  data() {
    return {
      yandexCaptchaKey: "",
      selectedOption: "",
      selects: {
        id: 0,
        options: [
          { label: "Плагиат", value: "option1" },
          { label: "Что-то плохое", value: "option2" },
          { label: "Спам", value: "option3" },
          { label: "Другое", value: "other" },
          { label: "Ничего из вышеперечисленного", value: "nothing" },
        ],
      },
    };
  },
  components: {
    DropdownModal,
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

<style lang="scss">
.modal-custom {
  font-family: "Montserrat", sans-serif;
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 12px;
  width: min(100%, 512px);
  @media (max-width: 576px) {
    width: min(90%, 512px);
  }

  .modal-custom__dialog {
    position: relative;
    padding: 58px 40px 64px 40px;

    @media (max-width: 576px) {
      padding: 35px 20px;
    }
  }

  .modal-custom__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    border: none;
    background: url("../../../public/img/type-questions/cancel.svg") center
      center/cover no-repeat;
    @media (max-width: 576px) {
      top: 12px;
      right: 12px;
      width: 12px;
      height: 12px;
    }
  }

  .modal-custom__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #2b2b2b;
    margin-bottom: 16px;

    @media (max-width: 576px) {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 20px;
    }
  }

  .modal-custom__group {
    &:not(:last-of-type) {
      margin-bottom: 24px;
      @media (max-width: 576px) {
        margin-bottom: 24px;
      }
    }
  }

  .modal-custom__label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #2b2b2b;
    margin-bottom: 16px;
  }

  .modal-custom__input {
    width: 100%;
    min-height: 60px;
    border: none;
    outline: 1px solid #dddddd;
    border-radius: 12px;
    padding: 0 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #2b2b2b;

    @media (max-width: 576px) {
      min-height: 52px;
      border-radius: 8px;
    }

    &:hover {
      outline: 2px solid #1edc1a;
    }

    &:focus-visible {
      outline: 2px solid #1edc1a;
    }

    &::-webkit-input-placeholder {
      color: #dddddd;
    }
  }

  .modal-custom__capcha {
    width: min(100%, 350px);
    margin-bottom: 40px;
  }

  .modal-custom__submit {
    margin: 0 auto;
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #1edc1a;
    border-radius: 4px;
    min-width: 250px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;
    transition: background-color 0.3s ease;
    margin-bottom: 12px;
    @media (hover: hover) {
      &:hover {
        background-color: #0eca0c;
      }
    }

    @media (max-width: 576px) {
      padding: 12px;
    }
  }

  .modal-custom__politic {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #2b2b2b;
    margin-bottom: 0;

    a {
      font-weight: 600;
      color: #ffa640;
    }
  }
}
</style>
