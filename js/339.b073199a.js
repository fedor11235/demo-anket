"use strict";(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[339],{7339:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("div",{ref:"authorizationPage",staticClass:"page-wrapper page-wrapper--finish"},[t("h2",{staticClass:"page-main-title"},[e._v("Регистрация")]),t("div",[e._v("Введите логин")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.login,expression:"login"}],staticClass:"text-input",attrs:{type:"text",placeholder:"Введите"},domProps:{value:e.login},on:{input:function(t){t.target.composing||(e.login=t.target.value)}}}),t("div",[e._v("Введите пароль")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"text-input",attrs:{type:"text",placeholder:"Введите"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(0),t("button",{staticClass:"default-btn default-btn--success mt-5",on:{click:e.handlerRegistration}},[e._v(" Зарегсистрироваться ")]),t("div",[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isPersonalData,expression:"isPersonalData"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.isPersonalData)?e._i(e.isPersonalData,null)>-1:e.isPersonalData},on:{change:function(t){var s=e.isPersonalData,r=t.target,a=!!r.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);r.checked?o<0&&(e.isPersonalData=s.concat([i])):o>-1&&(e.isPersonalData=s.slice(0,o).concat(s.slice(o+1)))}else e.isPersonalData=a}}}),t("label",{attrs:{for:"checkbox"}},[e._v("Я согласен на обработку персональных данных")])]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isTermsOfUse,expression:"isTermsOfUse"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.isTermsOfUse)?e._i(e.isTermsOfUse,null)>-1:e.isTermsOfUse},on:{change:function(t){var s=e.isTermsOfUse,r=t.target,a=!!r.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);r.checked?o<0&&(e.isTermsOfUse=s.concat([i])):o>-1&&(e.isTermsOfUse=s.slice(0,o).concat(s.slice(o+1)))}else e.isTermsOfUse=a}}}),t("label",{attrs:{for:"checkbox"}},[e._v("Я согласен с пользовательским соглашением")])]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isPrivacyPolicy,expression:"isPrivacyPolicy"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.isPrivacyPolicy)?e._i(e.isPrivacyPolicy,null)>-1:e.isPrivacyPolicy},on:{change:function(t){var s=e.isPrivacyPolicy,r=t.target,a=!!r.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);r.checked?o<0&&(e.isPrivacyPolicy=s.concat([i])):o>-1&&(e.isPrivacyPolicy=s.slice(0,o).concat(s.slice(o+1)))}else e.isPrivacyPolicy=a}}}),t("label",{attrs:{for:"checkbox"}},[e._v("Я согласен с политикой конфиденциальности")])])])])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"share-survey"},[t("h3",{staticClass:"page-main-subtitle"},[e._v("Войти с помощью")]),t("div",{staticClass:"share-survey__wrapper"},[t("div",{staticClass:"share-survey__social"},[t("div",{staticClass:"share-survey__social-items"},[t("a",{staticClass:"share-survey__social-item",attrs:{href:"#"}},[t("i",{staticStyle:{background:"url('/demo-anket/img/type-questions/vk.svg') center"}})]),t("a",{staticClass:"share-survey__social-item",attrs:{href:"#"}},[t("i",{staticStyle:{background:"url('/demo-anket/img/type-questions/tw.svg') center"}})]),t("a",{staticClass:"share-survey__social-item",attrs:{href:"#"}},[t("i",{staticStyle:{background:"url('/demo-anket/img/type-questions/ok.svg') center"}})]),t("a",{staticClass:"share-survey__social-item",attrs:{href:"#"}},[t("i",{staticStyle:{background:"url('/demo-anket/img/type-questions/mail.svg') center"}})])])])])])}],i=(s(4114),s(2850)),o={mixins:[i.W],data(){return{login:"",password:"",isPersonalData:!1,isTermsOfUse:!1,isPrivacyPolicy:!1}},created(){this.$store.state.numberQuestions=0},methods:{handlerRegistration(){this.$router.push({name:"hello"})}}},l=o,n=s(1656),c=(0,n.A)(l,r,a,!1,null,"752b2400",null),d=c.exports},2850:function(e,t,s){s.d(t,{W:function(){return r}});const r={methods:{setOffsetHeader(){if("main"===this.$route.name){const e=document.querySelector(".questions"),t=document.querySelector(".sf-header__bottom"),s=document.querySelector(".sf-header__middle"),r=document.querySelector(".sf-header__up");window.innerWidth<=575.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`,s.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`):window.innerWidth<=767.98?(t.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`),t.style.paddingLeft=0,s.style.paddingLeft=0,r.style.paddingLeft=0}else if("captcha"===this.$route.name){const e=document.querySelector(".page-captcha__dialog"),t=document.querySelector(".sf-header__bottom"),s=document.querySelector(".sf-header__middle"),r=document.querySelector(".sf-header__up");window.innerWidth<=767.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`),t.style.paddingLeft=0,s.style.paddingLeft=0,r.style.paddingLeft=0}else{const e=document.querySelector(".page-wrapper"),t=document.querySelector(".sf-header__bottom"),s=document.querySelector(".sf-header__middle"),r=document.querySelector(".sf-header__up");if(!e)return;window.innerWidth<=991.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`),t.style.paddingLeft=0,s.style.paddingLeft=0,r.style.paddingLeft=0}},updateHeaderHeight(e){this.headerHeight=e}},updated(){this.setOffsetHeader()},mounted(){console.log("this.$route.name: ",this.$route.name),this.setOffsetHeader(),window.addEventListener("resize",this.setOffsetHeader)},beforeDestroy(){window.removeEventListener("resize",this.setOffsetHeader)}}}}]);
//# sourceMappingURL=339.b073199a.js.map