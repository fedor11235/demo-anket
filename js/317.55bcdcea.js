"use strict";(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[317],{9074:function(e,t,s){s.d(t,{W:function(){return r}});const r={methods:{setOffsetHeader(){if("main"===this.$route.name){const e=document.querySelector(".questions"),t=document.querySelector(".sf-header__bottom"),s=document.querySelector(".sf-header__middle"),r=document.querySelector(".sf-header__up");window.innerWidth<=575.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`,s.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`):window.innerWidth<=767.98?(t.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`),t.style.paddingLeft=0,s.style.paddingLeft=0,r.style.paddingLeft=0}else if("captcha"===this.$route.name){const e=document.querySelector(".page-captcha__dialog"),t=document.querySelector(".sf-header__bottom"),s=document.querySelector(".sf-header__middle"),r=document.querySelector(".sf-header__up");window.innerWidth<=767.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`),t.style.paddingLeft=0,s.style.paddingLeft=0,r.style.paddingLeft=0}else{const e=document.querySelector(".page-wrapper"),t=document.querySelector(".sf-header__bottom"),s=document.querySelector(".sf-header__middle"),r=document.querySelector(".sf-header__up");if(!e)return;window.innerWidth<=991.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`,s.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`),t.style.paddingLeft=0,s.style.paddingLeft=0,r.style.paddingLeft=0}},updateHeaderHeight(e){this.headerHeight=e}},updated(){this.setOffsetHeader()},mounted(){console.log("this.$route.name: ",this.$route.name),this.setOffsetHeader(),window.addEventListener("resize",this.setOffsetHeader)},beforeDestroy(){window.removeEventListener("resize",this.setOffsetHeader)}}},4317:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("div",{ref:"authorizationPage",staticClass:"page-wrapper page-wrapper--finish"},[t("h2",{staticClass:"page-main-title"},[e._v("Для доступа к анкете введите логин и пароль")]),t("div",[e._v("Введите логин")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.login,expression:"login"}],staticClass:"text-input",attrs:{type:"text",placeholder:"Введите"},domProps:{value:e.login},on:{input:function(t){t.target.composing||(e.login=t.target.value)}}}),t("div",[e._v("Введите пароль")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"text-input",attrs:{type:"text",placeholder:"Введите"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),t("button",{staticClass:"default-btn default-btn--success mt-5",on:{click:e.handlerLogin}},[e._v(" Войти ")])])},o=[],l=(s(4114),s(9074)),f={mixins:[l.W],data(){return{login:"",password:""}},created(){this.$store.state.numberQuestions=0},methods:{handlerLogin(){this.$router.push({name:"hello"})}}},n=f,a=s(845),i=(0,a.A)(n,r,o,!1,null,"3e75fe1b",null),d=i.exports}}]);
//# sourceMappingURL=317.55bcdcea.js.map