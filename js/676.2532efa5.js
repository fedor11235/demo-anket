"use strict";(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[676,92,288],{4676:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var s=function(){var t=this,e=t._self._c;return e("div",t._l(t.arrayQuestions,(function(i){return e(`Select${i.type[0].toUpperCase()+i.type.slice(1)}`,{key:i.id,tag:"component",attrs:{questionsTypes:`Select${i.type[0].toUpperCase()+i.type.slice(1)}`,"question-number":i.questionNumber,title:i.title,description:i.description,img:i.img,required:i.required,selects:i.selects},on:{finish:function(e){return t.$store.commit("increment")},clean:function(e){return t.$store.commit("decrease")}},model:{value:t.$store.state.savedAnswers[i.id],callback:function(e){t.$set(t.$store.state.savedAnswers,i.id,e)},expression:"$store.state.savedAnswers[question.id]"}})})),1)},n=[],l=function(){var t=this,e=t._self._c;return e("div",{class:["question","question--select",{"question--disabled":t.values.disabled}]},[e("QuestionTitle",{attrs:{no:t.questionNumber,title:t.title,description:t.description,img:t.img,required:t.required}}),e("div",{staticClass:"question-list-wrapper"},t._l(t.selects,(function(i){return e("div",{key:i.id,class:["question-list",{"question-list--2cols":2===i.columnsNumber},{"question-list--3cols":3===i.columnsNumber}]},t._l(i.selects,(function(i){return e("label",{key:i.id,class:["question__element",{"question__element--img":"img"===i.type},{"question__element--textarea":"area"===i.type},{"question__element--active":t.values.selects.find((t=>t.id===i.id))?.isActive}],on:{click:function(e){return e.preventDefault(),t.isActiveMeth2(i.id)}}},[e("span",{staticClass:"question__element-text"},[t._v(" "+t._s(i.title))]),e("input",{attrs:{name:"radio",type:"radio"}}),e("CustomInput",{attrs:{type:i.type,src:i.img}})],1)})),0)})),0),e("DifficultControl",{attrs:{question:t.values}})],1)},o=[],r=(i(4114),i(6258)),u=i(5470),a=i(1288),c={components:{QuestionTitle:r.A,DifficultControl:a["default"],CustomInput:u.A},props:["questionNumber","title","description","img","required","comments","selects","value","questionsTypes"],data(){return{isSelect:!1,values:{disabled:!1,selects:[]}}},methods:{isActiveMeth2(t){const e=this.values.selects.find((e=>e.id===t));if(e){if(e.isActive=!e.isActive,e.isActive)for(const i of this.values.selects)i.id!==t&&(i.isActive=!1)}else{this.values.selects.push({id:t,isActive:!0});for(const e of this.values.selects)e.id!==t&&(e.isActive=!1)}}},watch:{values:{handler(t){this.$emit("input",{questionsTypes:this.questionsTypes,values:t});for(const e of t.selects)if(e.isActive||this.values.disabled){if(this.isSelect)return;return this.isSelect=!0,void this.$emit("finish")}this.isSelect=!1,this.$emit("clean")},deep:!0}}},d=c,m=i(1656),p=(0,m.A)(d,l,o,!1,null,null,null),f=p.exports,v=i(9113),_={components:{SelectSimple:f},data(){return{arrayQuestions:[],questions:[{id:0,disabled:!1,question:[{id:0,type:"default",isActive:!1},{id:1,type:"default",isActive:!1},{id:2,type:"default",isActive:!1},{id:3,type:"default",isActive:!1},{id:4,type:"default",isActive:!1}]},{id:1,disabled:!1,question:[{id:0,type:"default",isActive:!1},{id:1,type:"default",isActive:!1},{id:2,type:"default",isActive:!1},{id:3,type:"default",isActive:!1},{id:4,type:"default",isActive:!1}]},{id:2,disabled:!1,question:[{id:0,type:"default",isActive:!1},{id:1,type:"default",isActive:!1},{id:2,type:"default",isActive:!1},{id:3,type:"default",isActive:!1},{id:4,type:"default",isActive:!1}]},{id:3,disabled:!1,question:[{id:0,type:"default",isActive:!1},{id:1,type:"default",isActive:!1},{id:2,type:"default",isActive:!1},{id:3,type:"default",isActive:!1},{id:4,type:"default",isActive:!1}]}]}},methods:{isActiveMeth2(t,e){this.questions.map((i=>{i.id===t&&i.question.map((t=>{t.id===e?t.isActive=!0:t.isActive=!1}))}))}},mounted(){this.arrayQuestions=(0,v.b2)(),this.$emit("setNumberQuestions",this.arrayQuestions.length)}},h=_,q=(0,m.A)(h,s,n,!1,null,null,null),y=q.exports},7092:function(t,e,i){i.r(e),i.d(e,{default:function(){return a}});var s=function(){var t=this,e=t._self._c;return t.timer?e("div",{staticClass:"timer"},[e("span",{ref:"timerCount"})]):t._e()},n=[],l={props:["timer","isHeader"],data(){return{countdown:null}},methods:{addTimeInHtml(t){if(this.$refs.timerCount){this.$refs.timerCount.innerHTML="";const e=t.split("");for(const t of e){const e=document.createElement("div");t.includes(":")||e.classList.add("timer-symbol"),e.innerHTML=t,this.$refs.timerCount.appendChild(e)}}else{const t="00:00:00",e=t.split("");for(const i of e){const t=document.createElement("div");i.includes(":")||t.classList.add("timer-symbol"),t.innerHTML=i,this.$refs.timerCount.appendChild(t)}clearInterval(this.countdown)}},startTimer(){const t=new Date,e=t.setMinutes(t.getMinutes()+this.timer);this.countdown=setInterval((()=>{const t=(new Date).getTime(),i=e-t,s=String(Math.floor(i%36e5/36e5)).padStart(2,"0"),n=String(Math.floor(i%36e5/6e4)).padStart(2,"0"),l=String(Math.floor(i%6e4/1e3)).padStart(2,"0"),o=s+":"+n+":"+l;this.addTimeInHtml(o),i<0&&(clearInterval(this.countdown),this.$refs.timerCount.innerHTML="")}),1e3)}},mounted(){this.timer&&this.startTimer()},deactivated(){this.timer&&clearInterval(this.countdown)}},o=l,r=i(1656),u=(0,r.A)(o,s,n,!1,null,"26597c6e",null),a=u.exports},1288:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("label",{staticClass:"question__element question__element--dif",on:{click:function(e){return e.preventDefault(),t.clickDifficult.apply(null,arguments)}}},[e("div",{staticClass:"question__element-text"},[t._v("Затрудняюсь ответить")]),e("input",{attrs:{name:"radio",type:"radio"}}),e("CustomInput")],1)},n=[],l=i(5470),o={components:{CustomInput:l.A},props:{question:{type:Object}},methods:{clickDifficult(t){if(this.question.disabled=!this.question.disabled,this.question.options&&this.question.selectedOption){if(Array.isArray(this.question.selectedOption)){let t=document.querySelector(".question__element.question__element--textarea");t&&(t.style.display="block")}else this.question.selectedOption=null;let t=document.querySelectorAll(".dropdown__text");t[this.question.id].classList.remove("dropdown__text--active"),document.querySelectorAll(".dropdown-item").forEach((t=>{t.classList.remove("dropdown-item--active")}))}t.currentTarget.classList.toggle("question__element--active")}}},r=o,u=i(1656),a=(0,u.A)(r,s,n,!1,null,"12842254",null),c=a.exports},6258:function(t,e,i){i.d(e,{A:function(){return m}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"question-title"},[t.no?e("div",{staticClass:"question-title__number"},[t._v("Вопрос № "+t._s(t.no))]):t._e(),e("div",{staticClass:"question-title__block"},[e("div",{staticClass:"question-title__block-item"},[t.title?e("div",{staticClass:"question-title__title"},[t._v(" "+t._s(t.title)+" "),t.required?e("span",[t._v("*")]):t._e()]):t._e(),t.description?e("div",{staticClass:"question-title__descr"},[t._v(" "+t._s(t.description)+" ")]):t._e(),t.comments?e("div",{staticClass:"question-title__comment",domProps:{innerHTML:t._s(t.comments)}}):t._e()]),e("div",{staticClass:"question-title__block-item"},[t.timer?e("TimerControl",{attrs:{timer:t.timer}}):t._e()],1)]),t.img?e("div",{staticClass:"question-title__img"},[e("img",{attrs:{src:`${t.img}`,alt:""}}),e("a",{ref:"linkImg",staticClass:"question-title__img-popup",attrs:{href:`${t.img}`}},[e("i")])]):t._e()])},n=[],l=i(7092),o=i(6587),r=i.n(o),u={props:["no","title","description","comments","img","timer","required"],data(){return{countdown:null}},components:{TimerControl:l["default"]},mounted(){this.$question=r()(this.$refs.linkImg),this.$question.fancybox({})}},a=u,c=i(1656),d=(0,c.A)(a,s,n,!1,null,null,null),m=d.exports}}]);
//# sourceMappingURL=676.2532efa5.js.map