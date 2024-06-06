"use strict";(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[645,92],{645:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("div",t._l(t.arrayQuestions,(function(i){return e(`File${i.type[0].toUpperCase()+i.type.slice(1)}`,{key:i.id,tag:"component",attrs:{questionsTypes:`File${i.type[0].toUpperCase()+i.type.slice(1)}`,"question-number":i.questionNumber,title:i.title,description:i.description,comments:i.comments,img:i.img,required:i.required,questionDifficult:i.questionDifficult},on:{finish:function(e){return t.$store.commit("increment")},clean:function(e){return t.$store.commit("decrease")}},model:{value:t.$store.state.savedAnswers[i.id],callback:function(e){t.$set(t.$store.state.savedAnswers,i.id,e)},expression:"$store.state.savedAnswers[question.id]"}})})),1)},n=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"question question--inputs question--file",class:{"drag-over":t.isDragging},on:{dragover:function(e){return e.preventDefault(),e.stopPropagation(),t.handleDragOver.apply(null,arguments)},dragleave:function(e){return e.preventDefault(),e.stopPropagation(),t.handleDragLeave.apply(null,arguments)},drop:function(e){return e.preventDefault(),e.stopPropagation(),t.handleDrop.apply(null,arguments)}}},[e("QuestionTitle",{attrs:{no:t.questionNumber,title:t.title,description:t.description,comments:t.comments,img:t.img,required:t.required}}),e("div",{staticClass:"file-upload-wrapper"},[e("div",{staticClass:"file-upload__list",attrs:{id:"file-upload__list"}},t._l(t.fileList,(function(i,s){return e("div",{key:s,staticClass:"file-upload__list-item"},[e("div",{staticClass:"file-upload__list-item-wrapper"},[e("div",{staticClass:"file-upload__list-item-left"},[t.isLoading?e("div",{staticClass:"file-upload__preloader"}):t._e(),"image/png"===i.type||"image/svg+xml"===i.type?e("div",[t.isLoading?t._e():e("img",{attrs:{src:`/demo-anket/img/type-questions/${i.name}`,alt:`${i.name}`}})]):e("div",[t.isLoading?t._e():e("div",{staticClass:"file-upload__list-item-type"},[t._v(" "+t._s(i.name.match(/\.(.+)$/)[1])+" ")])]),t.isLoading?t._e():e("span",{staticClass:"file-upload__list-item-name"},[t._v(t._s(i.name))])]),e("div",{staticClass:"file-upload__list-item-cancel",on:{click:function(e){return e.preventDefault(),t.removeFile(i)}}},[e("i")])])])})),0),e("p",{staticClass:"file-upload__text"},[t._v("Перетащите файлы сюда или выберите их")]),e("label",{staticClass:"custom-file-upload",attrs:{for:"file-upload"}},[t._v(" Выбрать файлы ")]),e("input",{attrs:{id:"file-upload",type:"file",multiple:""},on:{change:t.handleFileUpload}})])],1)},r=[],a=(i(4114),i(6258)),o={data(){return{isSelect:!1,fileList:[],isDragging:!1,isLoading:!1}},props:["questionNumber","title","description","comments","img","required","questionDifficult","value","questionsTypes"],components:{QuestionTitle:a.A},methods:{handleDragOver(){this.isDragging||(this.isDragging=!0)},handleDragLeave(){this.isDragging&&(this.isDragging=!1)},handleDrop(t){this.isDragging=!1,this.isLoading=!0;const e=t.dataTransfer.files;for(let i=0;i<e.length;i++)this.fileList.push(e[i]);setTimeout((()=>{this.isLoading=!1,console.log(this.fileList)}),5e3)},handleFileUpload(t){this.fileList=[];for(let e=0;e<t.target.files.length;e++)this.fileList.push(t.target.files[e])},removeFile(t){this.fileList=this.fileList.filter((e=>e!==t))}},watch:{fileList:{handler(t){if(this.$emit("input",{questionsTypes:this.questionsTypes,values:{name:t[0]?.name,type:t[0]?.type}}),t.length>0){if(this.isSelect)return;return this.isSelect=!0,void this.$emit("finish")}this.isSelect=!1,this.$emit("clean")},deep:!0}}},u=o,d=i(1656),c=(0,d.A)(u,l,r,!1,null,null,null),m=c.exports,p=i(9113),f={data(){return{arrayQuestions:[]}},components:{FileSimple:m},mounted(){this.arrayQuestions=(0,p.ly)(),this.$emit("setNumberQuestions",this.arrayQuestions.length)}},h=f,_=(0,d.A)(h,s,n,!1,null,null,null),g=_.exports},7092:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return t.timer?e("div",{staticClass:"timer"},[e("span",{ref:"timerCount"})]):t._e()},n=[],l={props:["timer","isHeader"],data(){return{countdown:null}},methods:{addTimeInHtml(t){if(this.$refs.timerCount){this.$refs.timerCount.innerHTML="";const e=t.split("");for(const t of e){const e=document.createElement("div");t.includes(":")||e.classList.add("timer-symbol"),e.innerHTML=t,this.$refs.timerCount.appendChild(e)}}else{const t="00:00:00",e=t.split("");for(const i of e){const t=document.createElement("div");i.includes(":")||t.classList.add("timer-symbol"),t.innerHTML=i,this.$refs.timerCount.appendChild(t)}clearInterval(this.countdown)}},startTimer(){const t=new Date,e=t.setMinutes(t.getMinutes()+this.timer);this.countdown=setInterval((()=>{const t=(new Date).getTime(),i=e-t,s=String(Math.floor(i%36e5/36e5)).padStart(2,"0"),n=String(Math.floor(i%36e5/6e4)).padStart(2,"0"),l=String(Math.floor(i%6e4/1e3)).padStart(2,"0"),r=s+":"+n+":"+l;this.addTimeInHtml(r),i<0&&(clearInterval(this.countdown),this.$refs.timerCount.innerHTML="")}),1e3)}},mounted(){this.timer&&this.startTimer()},deactivated(){this.timer&&clearInterval(this.countdown)}},r=l,a=i(1656),o=(0,a.A)(r,s,n,!1,null,"26597c6e",null),u=o.exports},6258:function(t,e,i){i.d(e,{A:function(){return m}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"question-title"},[t.no?e("div",{staticClass:"question-title__number"},[t._v("Вопрос № "+t._s(t.no))]):t._e(),e("div",{staticClass:"question-title__block"},[e("div",{staticClass:"question-title__block-item"},[t.title?e("div",{staticClass:"question-title__title"},[t._v(" "+t._s(t.title)+" "),t.required?e("span",[t._v("*")]):t._e()]):t._e(),t.description?e("div",{staticClass:"question-title__descr"},[t._v(" "+t._s(t.description)+" ")]):t._e(),t.comments?e("div",{staticClass:"question-title__comment",domProps:{innerHTML:t._s(t.comments)}}):t._e()]),e("div",{staticClass:"question-title__block-item"},[t.timer?e("TimerControl",{attrs:{timer:t.timer}}):t._e()],1)]),t.img?e("div",{staticClass:"question-title__img"},[e("img",{attrs:{src:`${t.img}`,alt:""}}),e("a",{ref:"linkImg",staticClass:"question-title__img-popup",attrs:{href:`${t.img}`}},[e("i")])]):t._e()])},n=[],l=i(7092),r=i(6587),a=i.n(r),o={props:["no","title","description","comments","img","timer","required"],data(){return{countdown:null}},components:{TimerControl:l["default"]},mounted(){this.$question=a()(this.$refs.linkImg),this.$question.fancybox({})}},u=o,d=i(1656),c=(0,d.A)(u,s,n,!1,null,null,null),m=c.exports}}]);
//# sourceMappingURL=645.79697f4b.js.map