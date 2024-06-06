"use strict";(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[681,92,885],{4681:function(t,e,i){i.r(e),i.d(e,{default:function(){return q}});var s=function(){var t=this,e=t._self._c;return e("div",t._l(t.arrayQuestions,(function(i){return e(`Free${i.type[0].toUpperCase()+i.type.slice(1)}`,{key:i.id,tag:"component",attrs:{questionsTypes:`Free${i.type[0].toUpperCase()+i.type.slice(1)}`,"question-number":i.questionNumber,title:i.title,description:i.description,comments:i.comments,img:i.img,required:i.required,timer:i.timer},on:{finish:function(e){return t.$store.commit("increment")},clean:function(e){return t.$store.commit("decrease")}},model:{value:t.$store.state.savedAnswers[i.id],callback:function(e){t.$set(t.$store.state.savedAnswers,i.id,e)},expression:"$store.state.savedAnswers[question.id]"}})})),1)},n=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"question question--free",class:{"question--disabled":t.select.disabled}},[e("QuestionTitle",{attrs:{no:t.questionNumber,title:t.title,description:t.description,comments:t.comments,img:t.img,timer:t.timer,required:t.required}}),e("div",{staticClass:"question-list-wrapper"},[e("TextareaControl",{attrs:{question:t.select},model:{value:t.select.value,callback:function(e){t.$set(t.select,"value",e)},expression:"select.value"}})],1)],1)},a=[],l=i(6258),o=i(8885),u={components:{QuestionTitle:l.A,TextareaControl:o["default"]},props:["questionNumber","title","description","comments","img","required","timer","value","questionsTypes"],data(){return{select:{id:0,value:"",disabled:!1}}},watch:{select:{handler(t){if(this.$emit("input",{questionsTypes:this.questionsTypes,values:t}),t.disabled){if(this.isSelect)return;return this.isSelect=!0,void this.$emit("finish")}if(t.value){if(this.isSelect)return;return this.isSelect=!0,void this.$emit("finish")}this.isSelect=!1,this.$emit("clean")},deep:!0}}},c=u,d=i(1656),m=(0,d.A)(c,r,a,!1,null,null,null),h=m.exports,p=i(9113),f={data(){return{arrayQuestions:[]}},components:{FreeSimple:h},mounted(){this.arrayQuestions=(0,p.vF)(),this.$emit("setNumberQuestions",this.arrayQuestions.length)}},v=f,_=(0,d.A)(v,s,n,!1,null,"939a5b54",null),q=_.exports},7092:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return t.timer?e("div",{staticClass:"timer"},[e("span",{ref:"timerCount"})]):t._e()},n=[],r={props:["timer","isHeader"],data(){return{countdown:null}},methods:{addTimeInHtml(t){if(this.$refs.timerCount){this.$refs.timerCount.innerHTML="";const e=t.split("");for(const t of e){const e=document.createElement("div");t.includes(":")||e.classList.add("timer-symbol"),e.innerHTML=t,this.$refs.timerCount.appendChild(e)}}else{const t="00:00:00",e=t.split("");for(const i of e){const t=document.createElement("div");i.includes(":")||t.classList.add("timer-symbol"),t.innerHTML=i,this.$refs.timerCount.appendChild(t)}clearInterval(this.countdown)}},startTimer(){const t=new Date,e=t.setMinutes(t.getMinutes()+this.timer);this.countdown=setInterval((()=>{const t=(new Date).getTime(),i=e-t,s=String(Math.floor(i%36e5/36e5)).padStart(2,"0"),n=String(Math.floor(i%36e5/6e4)).padStart(2,"0"),r=String(Math.floor(i%6e4/1e3)).padStart(2,"0"),a=s+":"+n+":"+r;this.addTimeInHtml(a),i<0&&(clearInterval(this.countdown),this.$refs.timerCount.innerHTML="")}),1e3)}},mounted(){this.timer&&this.startTimer()},deactivated(){this.timer&&clearInterval(this.countdown)}},a=r,l=i(1656),o=(0,l.A)(a,s,n,!1,null,"26597c6e",null),u=o.exports},6258:function(t,e,i){i.d(e,{A:function(){return m}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"question-title"},[t.no?e("div",{staticClass:"question-title__number"},[t._v("Вопрос № "+t._s(t.no))]):t._e(),e("div",{staticClass:"question-title__block"},[e("div",{staticClass:"question-title__block-item"},[t.title?e("div",{staticClass:"question-title__title"},[t._v(" "+t._s(t.title)+" "),t.required?e("span",[t._v("*")]):t._e()]):t._e(),t.description?e("div",{staticClass:"question-title__descr"},[t._v(" "+t._s(t.description)+" ")]):t._e(),t.comments?e("div",{staticClass:"question-title__comment",domProps:{innerHTML:t._s(t.comments)}}):t._e()]),e("div",{staticClass:"question-title__block-item"},[t.timer?e("TimerControl",{attrs:{timer:t.timer}}):t._e()],1)]),t.img?e("div",{staticClass:"question-title__img"},[e("img",{attrs:{src:`${t.img}`,alt:""}}),e("a",{ref:"linkImg",staticClass:"question-title__img-popup",attrs:{href:`${t.img}`}},[e("i")])]):t._e()])},n=[],r=i(7092),a=i(6587),l=i.n(a),o={props:["no","title","description","comments","img","timer","required"],data(){return{countdown:null}},components:{TimerControl:r["default"]},mounted(){this.$question=l()(this.$refs.linkImg),this.$question.fancybox({})}},u=o,c=i(1656),d=(0,c.A)(u,s,n,!1,null,null,null),m=d.exports},8885:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",[t.list?e("div",{staticClass:"textarea-free-lists"},t._l(t.question.answers,(function(i){return e("div",{key:i.id,staticClass:"textarea-free-list"},[i.title?e("div",{staticClass:"textarea-free-title"},[t._v(" "+t._s(i.title)+" "),i.required?e("span",[t._v("*")]):t._e()]):t._e(),i.src?e("img",{staticClass:"textarea-free-img",attrs:{src:i.src,alt:i.title}}):t._e(),e("textarea",{staticClass:"textarea-free",attrs:{placeholder:"Text"},on:{focus:function(e){return t.addAnswer(t.question.answers,i)},input:function(e){return t.textareaHeight(e,i.id)}}})])})),0):e("textarea",{staticClass:"textarea-free",attrs:{placeholder:"Text"},on:{input:t.textareaHeight}})])},n=[],r=(i(4114),{props:["list","question","limitation","value"],methods:{textareaHeight(t,e){let i=document.querySelectorAll(".question-list-wrapper textarea");i.forEach((t=>{t>"72px"&&(t.style.height="5px",t.style.height=t.scrollHeight+"px")})),this.list?this.$emit("addValue",{id:e,value:t.target.value}):this.$emit("input",t.target.value)},addAnswer(t,e){this.limitation!==t.length&&t.length-1===e.id&&(t.push({id:t.length,title:`Предложение ${t.length+1}`,required:!1}),this.$emit("addValue",{id:t.length,value:""}))}}}),a=r,l=i(1656),o=(0,l.A)(a,s,n,!1,null,"51e8a50d",null),u=o.exports}}]);
//# sourceMappingURL=681.cf343426.js.map