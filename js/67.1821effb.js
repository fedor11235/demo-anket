"use strict";(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[67],{8067:function(e,t,s){s.r(t),s.d(t,{default:function(){return i}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-wrapper page-wrapper--hello"},[t("h2",{staticClass:"page-main-title"},[e._v("Здравствуйте!")]),t("div",{staticClass:"page-main-text"},[e._v(" Примите, пожалуйста, участие в нашем опросе. Ваше мнение для нас очень важно! ")]),t("button",{staticClass:"default-btn default-btn--success",on:{click:e.nextPage}},[e._v(" начать ")]),e._m(0)])},f=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello-page__policy"},[e._v(" Нажимая на кнопку начала или завершения анкеты, Вы соглашаетесь "),t("a",{attrs:{href:"#"}},[e._v("с правилами обработки персональных данных")]),e._v(" и "),t("a",{attrs:{href:"#"}},[e._v("политикой конфиденциальности")])])}],l=(s(4114),s(2850)),o={mixins:[l.W],methods:{nextPage(){this.$router.push({name:"main"})}},created(){this.$store.state.numberQuestions=0}},n=o,a=s(1656),d=(0,a.A)(n,r,f,!1,null,"7402802e",null),i=d.exports},2850:function(e,t,s){s.d(t,{W:function(){return r}});const r={methods:{setOffsetHeader(){if("main"===this.$route.name){const e=document.querySelector(".questions"),t=document.querySelector(".sf-header__bottom"),s=document.querySelector(".sf-header__middle"),r=document.querySelector(".sf-header__up");window.innerWidth<=575.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`,s.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`):window.innerWidth<=767.98?(t.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`),t.style.paddingLeft=0,s.style.paddingLeft=0,r.style.paddingLeft=0}else if("captcha"===this.$route.name){const e=document.querySelector(".page-captcha__dialog"),t=document.querySelector(".sf-header__bottom"),s=document.querySelector(".sf-header__middle"),r=document.querySelector(".sf-header__up");window.innerWidth<=767.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`),t.style.paddingLeft=0,s.style.paddingLeft=0,r.style.paddingLeft=0}else{const e=document.querySelector(".page-wrapper"),t=document.querySelector(".sf-header__bottom"),s=document.querySelector(".sf-header__middle"),r=document.querySelector(".sf-header__up");if(!e)return;window.innerWidth<=991.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`),t.style.paddingLeft=0,s.style.paddingLeft=0,r.style.paddingLeft=0}},updateHeaderHeight(e){this.headerHeight=e}},updated(){this.setOffsetHeader()},mounted(){console.log("this.$route.name: ",this.$route.name),this.setOffsetHeader(),window.addEventListener("resize",this.setOffsetHeader)},beforeDestroy(){window.removeEventListener("resize",this.setOffsetHeader)}}}}]);
//# sourceMappingURL=67.1821effb.js.map