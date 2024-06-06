<template>
  <div ref="authorizationPage" class="page-wrapper page-wrapper--auth">
    <h2 class="page-main-title">Вход в аккаунт</h2>
      <div class="group-input">
          <label class="label-input">Введите логин</label>
          <input
              v-model="login"
              type="text"
              placeholder="Введите"
              class="text-input"
          />
      </div>

    <div class="group-input">
        <div class="label-input">Введите пароль</div>
        <input
            v-model="password"
            type="text"
            placeholder="Введите"
            class="text-input"
        />
    </div>

    <div class="clue-wrap">
      <span class="clue-wrap__remember">

        <label class="clue-wrap__label" >
            <input class="clue-wrap__remember-input" type="checkbox" v-model="isCheckbox" />
             <span class="clue-wrap__remember-input-pseudo"></span>
            Зпомнить меня
        </label>
      </span>
      <div class="forget-password" @click="handlerForgotPassword">Забыли пароль?</div>
    </div>

      <div
          id="captcha-container"
          class="smart-captcha"
          :data-sitekey="yandexCaptchaKey"
      ></div>

    <div class="share-survey">
      <h3 class="share-survey__title">Войти с помощью</h3>
      <div class="share-survey__wrapper">
        <div class="share-survey__social">
          <div class="share-survey__social-items">
            <a href="#" class="share-survey__social-item share-survey__social-item--vk">
              <i
                style="

                  background: url('/demo-anket/img/type-questions/vk-new.svg') center
                    center/contain no-repeat;
                "
              ></i>
            </a>
            <a href="#" class="share-survey__social-item share-survey__social-item--ya">
              <i
                style="
                  background: url('/demo-anket/img/type-questions/ya-new.svg') center
                    center/contain no-repeat;
                "
              ></i>
            </a>
            <a href="#" class="share-survey__social-item share-survey__social-item--google">
              <i
                style="
                  background: url('/demo-anket/img/type-questions/google-new.svg') center
                    center/contain no-repeat;
                "
              ></i>
            </a>
            <a href="#" class="share-survey__social-item share-survey__social-item--mail">
              <i
                style="
                  background: url('/demo-anket/img/type-questions/mail-new.svg') center
                    center/contain no-repeat;
                "
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>


    <div class="page-wrapper__btns">
        <button class="default-btn default-btn--success" @click="handlerLogin">
            Войти
        </button>
        <button
            class="default-btn default-btn--outline-primary "
            @click="handlerRegistration"
        >
            Регистрация
        </button>
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
      login: "",
      password: "",
      isCheckbox: false,
    };
  },
  created() {
    this.yandexCaptchaKey = process.env.VUE_APP_YANDEX_CAPTCHA_KEY;
    this.$store.state.numberQuestions = 0;
  },
  mounted() {
    this.$emit("setNumberQuestions", 0);
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "https://captcha-api.yandex.ru/captcha.js");
    this.$refs.authorizationPage.appendChild(script);
  },
  methods: {
    handlerLogin() {
      this.$router.push({ name: "hello" });
    },
    handlerRegistration() {
      this.$router.push({ name: "registration" });
    },
    handlerForgotPassword() {
      alert("Тут должен быть модалка или перенаправление куд-либо");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap";


.page-wrapper {
    &.page-wrapper--auth {
        max-width: 475px;
        @include media-breakpoint-down(xs){
            padding: 24px 20px;
        }
    }
}



.clue-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
    margin-bottom: 32px;
  label {
    margin: 0;
  }
}

.group-input {
    margin-bottom: 24px;
}

.label-input {
    color: #2B2B2B;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 15px;
}

.text-input {
  width: 100%;
  padding: 0 20px;
  border-radius: 12px;
  outline: 1px solid #ddd;
  background: #fff;
  min-height: 60px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  border: none;
  color: #2b2b2b;

  &:hover,
  &:focus {
    outline: 2px solid #1edc1a;
  }

  &.input--error {
    border: 1px solid #ff1f1f;
  }

  &::placeholder {
    color: #ddd;
  }

  @include media-breakpoint-down(xs) {
    min-height: 48px;
    font-size: 14px;
    line-height: 16px;
    padding: 0 12px;
    border-radius: 8px;
  }
}


.forget-password {
    color: #1EDC1A;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
}

.clue-wrap__remember {
    display: flex;
    align-items: center;
}
.clue-wrap__remember-input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    &:checked {
        + .clue-wrap__remember-input-pseudo {
            &::before {
               content: '✓';
            }
        }
    }
}

.clue-wrap__remember-input-pseudo {
    width: 24px;
    height: 24px;
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #1EDC1A;
    border: 1px solid #dddddd;
    background-color: #FDFDFD;
}
.clue-wrap__label {
   color: #444444;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.smart-captcha {
    margin-bottom: 40px;
    @include media-breakpoint-down(xs){
        margin-bottom: 20px;
        min-width: unset;
    }
}


.share-survey {
    margin-bottom: 40px;
    .share-survey__title {
        color: #2B2B2B;
        margin-bottom: 16px;
        font-size: 14px;
        line-height: 16px;
    }

    .share-survey__social-items {
        gap: 23px !important;
    }

    .share-survey__social-item {
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        transition: filter .3s ease;

        i {
            background-repeat: no-repeat !important;
        }

        &.share-survey__social-item--vk {
            background-color: #0178FD;
        }
        &.share-survey__social-item--ya {
            background-color: #FC3F1D;
        }
        &.share-survey__social-item--google {
            background-color: #4285F4;
        }
        &.share-survey__social-item--mail {
            background-color: #FEB12B;
        }

        &:hover {
            filter: grayscale(1);
        }

    }



}

.page-wrapper__btns {
    display: flex;
    align-items: center;
    gap: 15px;

    .default-btn {
        width: 100%;
        min-width: unset;
    }
}

</style>
