(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[682],{9074:function(e,t,r){"use strict";r.d(t,{W:function(){return o}});const o={methods:{setOffsetHeader(){if("main"===this.$route.name){const e=document.querySelector(".questions"),t=document.querySelector(".sf-header__bottom"),r=document.querySelector(".sf-header__middle"),o=document.querySelector(".sf-header__up");window.innerWidth<=575.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`,o.style.gridTemplateColumns=`${e.offsetLeft+20}px 1fr`):window.innerWidth<=767.98?(t.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`,o.style.gridTemplateColumns=`${e.offsetLeft+40}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`,o.style.gridTemplateColumns=`${e.offsetLeft+120}px 0.775fr`),t.style.paddingLeft=0,r.style.paddingLeft=0,o.style.paddingLeft=0}else if("captcha"===this.$route.name){const e=document.querySelector(".page-captcha__dialog"),t=document.querySelector(".sf-header__bottom"),r=document.querySelector(".sf-header__middle"),o=document.querySelector(".sf-header__up");window.innerWidth<=767.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,o.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`,o.style.gridTemplateColumns=`${e.offsetLeft+66}px 0.775fr`),t.style.paddingLeft=0,r.style.paddingLeft=0,o.style.paddingLeft=0}else{const e=document.querySelector(".page-wrapper"),t=document.querySelector(".sf-header__bottom"),r=document.querySelector(".sf-header__middle"),o=document.querySelector(".sf-header__up");if(!e)return;window.innerWidth<=991.98?(t.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`,o.style.gridTemplateColumns=`${e.offsetLeft+20}px 0.775fr`):(t.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`,r.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`,o.style.gridTemplateColumns=`${e.offsetLeft}px 0.775fr`),t.style.paddingLeft=0,r.style.paddingLeft=0,o.style.paddingLeft=0}},updateHeaderHeight(e){this.headerHeight=e}},updated(){this.setOffsetHeader()},mounted(){console.log("this.$route.name: ",this.$route.name),this.setOffsetHeader(),window.addEventListener("resize",this.setOffsetHeader)},beforeDestroy(){window.removeEventListener("resize",this.setOffsetHeader)}}},2682:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});r(4114);var o=function(){var e=this,t=e._self._c;return t("div",{ref:"contentBlock",staticClass:"questions"},[t("div",{staticClass:"wrapper-select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.current,expression:"current"}],attrs:{name:"",id:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.current=t.target.multiple?r:r[0]}}},e._l(e.types,(function(r,o){return t("option",{key:o,domProps:{value:r}},[e._v(" "+e._s(r)+" ")])})),0)]),t("keep-alive",[t(e.currentComponent,{tag:"component",on:{setNumberQuestions:function(t){e.$store.state.numberQuestions=t}}})],1),t("button",{staticClass:"default-btn default-btn--final default-btn--success",on:{click:function(t){return e.$router.push({name:"captcha"})}}},[e._v(" Завершить ")])],1)},n=[],l=r(9074),s={mixins:[l.W],data(){return{theme:"default",current:"Name",types:["Scale","DistributionScale","Select","Multiselect","Dropdown","Multidropdown","Free","Freelist","Paircompare","Name","Email","Phone","Date","File","Order","Clicktest","Areatest","TextType","MapType"],headerHeight:0}},computed:{currentComponent(){const e=this.current;return()=>r(5858)(`./${e}Control.vue`)}}},u=s,f=r(845),i=(0,f.A)(u,o,n,!1,null,null,null),a=i.exports},5858:function(e,t,r){var o={"./AreatestControl.vue":[6199,568,199],"./ClicktestControl.vue":[2124,568,124],"./DateControl.vue":[8308,568,351,587],"./DistributionScaleControl.vue":[841,568,841],"./DropdownControl.vue":[9966,568,458,966],"./EmailControl.vue":[5242,568,351,669],"./FileControl.vue":[7965,568,965],"./FreeControl.vue":[4160,568,160],"./FreelistControl.vue":[8021,568,21],"./FreematrixControl.vue":[5868,868],"./HtmlControl.vue":[340,340],"./MapControl.vue":[6023,23],"./MapTypeControl.vue":[1040,40],"./Matrix3dControl.vue":[9337,337],"./MatrixControl.vue":[9983,983],"./MultidropdownControl.vue":[7571,568,571],"./MultiselectControl.vue":[430,568,430],"./NameControl.vue":[1565,568,351,596],"./OrderControl.vue":[2530,568,530],"./PaircompareControl.vue":[7955,568,955],"./PhoneControl.vue":[8616,568,351,471],"./ScaleControl.vue":[8718,568,718],"./SelectControl.vue":[3676,568,676],"./TextTypeControl.vue":[8297,851],"./TimerControl.vue":[7627,568,627],"./base/DifficultControl.vue":[7891,891],"./base/DropdownControl.vue":[5533,458,533],"./base/MultidropdownControl.vue":[1128,128],"./base/TextareaControl.vue":[2840,840]};function n(e){if(!r.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(n)}))}n.keys=function(){return Object.keys(o)},n.id=5858,e.exports=n}}]);
//# sourceMappingURL=682.49bfed03.js.map