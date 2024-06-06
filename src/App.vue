<template>
  <div id="app">
    <v-modal-target name="complain-modal" />
    <v-modal-target name="write-modal" />
    <v-modal
      ref="complainModal"
      target="complain-modal"
      close-on-backdrop-click
    >
      <ComplainModal />
    </v-modal>

    <v-modal ref="writeModal" target="write-modal" close-on-backdrop-click>
      <WriteModal />
    </v-modal>
    <div :class="`survey-fill survey-fill--${theme}`">
      <div class="survey-fill__background"></div>
      <HeaderPage
        :logo="headLogo"
        :info="headInfo"
        :title="headTitle"
        :progres="headProgress"
        :number-questions="$store.state.numberQuestions"
        :number-rubles="$store.state.rublesTotal"
        @headerHeight="updateHeaderHeight"
      />
      <div
        class="questions-wrapper"
        :style="{ paddingTop: paddingValue + 'px' }"
      >
        <router-view />
      </div>
      <FooterPage
        :logo="showLogo"
        :btns="showBtns"
        :links="showLinks"
        @openComplainModal="handlerOpenComplainModal"
        @openWriteModal="handlerOpenWriteModal"
      />
    </div>
  </div>
</template>

<script>
import HeaderPage from "@/components/questions/base/HeaderPage.vue";
import FooterPage from "@/components/questions/base/FooterPage.vue";

import ComplainModal from "@/components//modal/ComplainModal.vue";
import WriteModal from "@/components//modal/WriteModal.vue";

import { getInfoAnket } from "@/fake/api";
import $ from "jquery";

export default {
  components: {
    HeaderPage,
    FooterPage,
    ComplainModal,
    WriteModal,
  },
  data() {
    return {
      theme: "default",

      headLogo: true,
      headTitle: true,
      headProgress: true,
      headInfo: true,

      showLogo: true,
      showBtns: true,
      showLinks: true,

      numberQuestions: 0,

      paddingValue: 0,
    };
  },
  methods: {
    updateHeaderHeight(height) {
      this.headerHeight = height;
    },

    async handlerOpenWriteModal() {
      await this.$refs.writeModal.open();
    },

    async handlerOpenComplainModal() {
      await this.$refs.complainModal.open();
    },
  },
  mounted() {
    const data = getInfoAnket();
    this.$store.commit("init", data);
    $("[data-fancybox]").fancybox({});
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", serif;
}
</style>
