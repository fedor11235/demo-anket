"use strict";(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[127,92],{9127:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var o=function(){var t=this,e=t._self._c;return e("div",t._l(t.arrayQuestions,(function(s){return e(`Areatest${s.type[0].toUpperCase()+s.type.slice(1)}`,{key:s.id,tag:"component",attrs:{questionsTypes:`Areatest${s.type[0].toUpperCase()+s.type.slice(1)}`,"question-number":s.questionNumber,title:s.title,description:s.description,comments:s.comments,img:s.img,required:s.required,imgClick:s.imgClick},on:{finish:function(e){return t.$store.commit("increment")},clean:function(e){return t.$store.commit("decrease")}},model:{value:t.$store.state.savedAnswers[s.id],callback:function(e){t.$set(t.$store.state.savedAnswers,s.id,e)},expression:"$store.state.savedAnswers[question.id]"}})})),1)},i=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"question question--areatest"},[e("QuestionTitle",{attrs:{no:t.questionNumber,title:t.title,description:t.description,comments:t.comments,img:t.img,required:t.required}}),e("div",{staticClass:"areatest areatest--descktop"},[e("div",{ref:"canvas",staticClass:"canvas",on:{mousedown:function(e){return e.target!==e.currentTarget?null:t.handlerMousedownCanvas.apply(null,arguments)},mousemove:function(e){return e.target!==e.currentTarget?null:t.handlerMousemoveCanvas.apply(null,arguments)},mouseup:function(e){return e.target!==e.currentTarget?null:t.handlerMouseupCanvas.apply(null,arguments)}}},[e("img",{staticClass:"areatest__desktop-img",attrs:{src:t.imgClick,alt:"iphone_black",draggable:"false"}}),t._l(t.points,(function(s,o){return e("div",{key:o,class:["areatest__field","areatest__field--pulling",{"areatest__field--pull":s.finish}],style:{left:s.left+"px",top:s.top+"px",width:s.width+"px",height:s.height+"px"},on:{mousedown:function(e){return e.target!==e.currentTarget?null:t.handlerMousedownPoint(e,o)},mousemove:function(e){return e.target!==e.currentTarget?null:t.handlerMousemovePoint.apply(null,arguments)},mouseup:function(e){return e.target!==e.currentTarget?null:t.handlerMouseupPoint(o)},mouseenter:function(e){return e.target!==e.currentTarget?null:t.handlerMouseenterPoint(o)},mouseleave:function(e){return e.target!==e.currentTarget?null:t.handlerMouseleavePoint(o)}}},[e("div",{staticClass:"areatest__field-border-control areatest__field-border-control--tl",on:{mousedown:function(e){return e.stopPropagation(),t.handlerMousedownDotTl(e,o)}}}),e("div",{staticClass:"areatest__field-border-control areatest__field-border-control--tm",on:{mousedown:function(e){return e.stopPropagation(),t.handlerMousedownDotTm(e,o)}}}),e("div",{staticClass:"areatest__field-border-control areatest__field-border-control--tr"}),e("div",{staticClass:"areatest__field-border-control areatest__field-border-control--rm",on:{mousedown:function(e){return e.stopPropagation(),t.handlerMousedownDotRm(e,o)}}}),e("div",{staticClass:"areatest__field-border-control areatest__field-border-control--rd",on:{mousedown:function(e){return e.stopPropagation(),t.handlerMousedownDotRd(e,o)}}}),e("div",{staticClass:"areatest__field-border-control areatest__field-border-control--dm",on:{mousedown:function(e){return e.stopPropagation(),t.handlerMousedownDotDm(e,o)}}}),e("div",{staticClass:"areatest__field-border-control areatest__field-border-control--dl",on:{mousedown:function(e){return e.stopPropagation(),t.handlerMousedownDotDl(e,o)}}}),e("div",{staticClass:"areatest__field-border-control areatest__field-border-control--lm",on:{mousedown:function(e){return e.stopPropagation(),t.handlerMousedownDotLm(e,o)}}}),s.isHover?e("button",{on:{click:function(e){return e.stopPropagation(),t.handlerDeletePoint(o)}}}):t._e()])}))],2),e("button",{staticClass:"areatest__btn-clear",on:{click:t.handlerDeletePoints}})]),e("div",{staticClass:"areatest areatest--mobile"},[e("a",{attrs:{href:t.imgClick,"data-fancybox":"","data-caption":"Single image"}},[e("img",{attrs:{src:t.imgClick}})])])],1)},r=[],a=(s(4114),s(6258)),u={props:["questionNumber","title","description","comments","img","required","questionDifficult","imgClick"],components:{QuestionTitle:a.A},data(){return{isSelect:!1,newPoint:null,isMouseDownCanvas:!1,isMouseDownPoint:!1,points:[],pointMove:null,startDragY:NaN,startDragX:NaN,isMouseDownDotTl:!1,isMouseDownDotTm:!1,isMouseDownDotRm:!1,isMouseDownDotRd:!1,isMouseDownDotDm:!1,isMouseDownDotDl:!1,isMouseDownDotLm:!1}},methods:{handlerMousedownDotTl(t,e){this.isMouseDownDotTl=!0,this.pointMove=this.points[e];const s=this.$refs.canvas.getBoundingClientRect();this.startDragY=t.clientY-s.left,this.startDragX=t.clientX-s.top,document.addEventListener("mousemove",this.handlerMousemoveDotTl),document.addEventListener("mouseup",this.handlerMouseupDotTl)},handlerMousedownDotTm(t,e){this.isMouseDownDotTm=!0,this.pointMove=this.points[e];const s=this.$refs.canvas.getBoundingClientRect();this.startDragY=t.clientY-s.left,this.startDragX=t.clientX-s.top,document.addEventListener("mousemove",this.handlerMousemoveDotTm),document.addEventListener("mouseup",this.handlerMouseupDotTm)},handlerMousedownDotRm(t,e){this.isMouseDownDotRm=!0,this.pointMove=this.points[e];const s=this.$refs.canvas.getBoundingClientRect();this.startDragY=t.clientY-s.left,this.startDragX=t.clientX-s.top,document.addEventListener("mousemove",this.handlerMousemoveDotRm),document.addEventListener("mouseup",this.handlerMouseupDotRm)},handlerMousedownDotRd(t,e){this.isMouseDownDotRd=!0,this.pointMove=this.points[e];const s=this.$refs.canvas.getBoundingClientRect();this.startDragY=t.clientY-s.left,this.startDragX=t.clientX-s.top,document.addEventListener("mousemove",this.handlerMousemoveDotRd),document.addEventListener("mouseup",this.handlerMouseupDotRd)},handlerMousedownDotDm(t,e){this.isMouseDownDotDm=!0,this.pointMove=this.points[e];const s=this.$refs.canvas.getBoundingClientRect();this.startDragY=t.clientY-s.left,this.startDragX=t.clientX-s.top,document.addEventListener("mousemove",this.handlerMousemoveDotDm),document.addEventListener("mouseup",this.handlerMouseupDotDm)},handlerMousedownDotDl(t,e){this.isMouseDownDotDl=!0,this.pointMove=this.points[e];const s=this.$refs.canvas.getBoundingClientRect();this.startDragY=t.clientY-s.left,this.startDragX=t.clientX-s.top,document.addEventListener("mousemove",this.handlerMousemoveDotDl),document.addEventListener("mouseup",this.handlerMouseupDotDl)},handlerMousedownDotLm(t,e){this.isMouseDownDotLm=!0,this.pointMove=this.points[e];const s=this.$refs.canvas.getBoundingClientRect();this.startDragY=t.clientY-s.left,this.startDragX=t.clientX-s.top,document.addEventListener("mousemove",this.handlerMousemoveDotLm),document.addEventListener("mouseup",this.handlerMouseupDotLm)},handlerMousemoveDotTl(t){if(this.isMouseDownDotTl){const e=this.$refs.canvas.getBoundingClientRect(),s=t.clientY-e.left,o=t.clientX-e.top,i=s-this.startDragY,n=o-this.startDragX;this.pointMove.top=this.pointMove.top+i,this.pointMove.left=this.pointMove.left+n,this.pointMove.height=this.pointMove.height-i,this.pointMove.width=this.pointMove.width-n,this.startDragY=s,this.startDragX=o}},handlerMousemoveDotTm(t){if(this.isMouseDownDotTm){const e=this.$refs.canvas.getBoundingClientRect(),s=t.clientY-e.left,o=t.clientX-e.top,i=s-this.startDragY;this.pointMove.top=this.pointMove.top+i,this.pointMove.height=this.pointMove.height-i,this.startDragY=s,this.startDragX=o}},handlerMousemoveDotRm(t){if(this.isMouseDownDotRm){const e=this.$refs.canvas.getBoundingClientRect(),s=t.clientY-e.left,o=t.clientX-e.top,i=o-this.startDragX;this.pointMove.width=this.pointMove.width+i,this.startDragY=s,this.startDragX=o}},handlerMousemoveDotRd(t){if(this.isMouseDownDotRd){const e=this.$refs.canvas.getBoundingClientRect(),s=t.clientY-e.left,o=t.clientX-e.top,i=s-this.startDragY,n=o-this.startDragX;this.pointMove.height=this.pointMove.height+i,this.pointMove.width=this.pointMove.width+n,this.startDragY=s,this.startDragX=o}},handlerMousemoveDotDm(t){if(this.isMouseDownDotDm){const e=this.$refs.canvas.getBoundingClientRect(),s=t.clientY-e.left,o=t.clientX-e.top,i=s-this.startDragY;this.pointMove.height=this.pointMove.height+i,this.startDragY=s,this.startDragX=o}},handlerMousemoveDotDl(t){if(this.isMouseDownDotDl){const e=this.$refs.canvas.getBoundingClientRect(),s=t.clientY-e.left,o=t.clientX-e.top,i=s-this.startDragY,n=o-this.startDragX;this.pointMove.left=this.pointMove.left+n,this.pointMove.height=this.pointMove.height+i,this.pointMove.width=this.pointMove.width-n,this.startDragY=s,this.startDragX=o}},handlerMousemoveDotLm(t){if(this.isMouseDownDotLm){const e=this.$refs.canvas.getBoundingClientRect(),s=t.clientY-e.left,o=t.clientX-e.top,i=o-this.startDragX;this.pointMove.left=this.pointMove.left+i,this.pointMove.width=this.pointMove.width-i,this.startDragY=s,this.startDragX=o}},handlerMouseupDotTl(){document.removeEventListener("mousemove",this.handlerMousemoveDotTl),document.removeEventListener("mouseup",this.handlerMouseupDotTl),this.isMouseDownDotTl=!1,this.startDragY=NaN,this.startDragX=NaN},handlerMouseupDotTm(){document.removeEventListener("mousemove",this.handlerMousemoveDotTm),document.removeEventListener("mouseup",this.handlerMouseupDotTm),this.isMouseDownDotTm=!1,this.startDragY=NaN,this.startDragX=NaN},handlerMouseupDotRm(){document.removeEventListener("mousemove",this.handlerMousemoveDotRm),document.removeEventListener("mouseup",this.handlerMouseupDotRm),this.isMouseDownDotRm=!1,this.startDragY=NaN,this.startDragX=NaN},handlerMouseupDotRd(){document.removeEventListener("mousemove",this.handlerMousemoveDotRd),document.removeEventListener("mouseup",this.handlerMouseupDotRd),this.isMouseDownDotRd=!1,this.startDragY=NaN,this.startDragX=NaN},handlerMouseupDotDm(){document.removeEventListener("mousemove",this.handlerMousemoveDotDm),document.removeEventListener("mouseup",this.handlerMouseupDotDm),this.isMouseDownDotDm=!1,this.startDragY=NaN,this.startDragX=NaN},handlerMouseupDotDl(){document.removeEventListener("mousemove",this.handlerMousemoveDotDl),document.removeEventListener("mouseup",this.handlerMouseupDotDl),this.isMouseDownDotDl=!1,this.startDragY=NaN,this.startDragX=NaN},handlerMouseupDotLm(){document.removeEventListener("mousemove",this.handlerMousemoveDotLm),document.removeEventListener("mouseup",this.handlerMouseupDotLm),this.isMouseDownDotLm=!1,this.startDragY=NaN,this.startDragX=NaN},handlerMousedownPoint(t,e){this.isMouseDownPoint=!0,this.pointMove=this.points[e];const s=this.$refs.canvas.getBoundingClientRect();this.startDragY=t.clientY-s.left,this.startDragX=t.clientX-s.top},handlerMousemovePoint(t){if(this.isMouseDownPoint){const e=this.$refs.canvas.getBoundingClientRect(),s=t.clientY-e.left,o=t.clientX-e.top,i=s-this.startDragY,n=o-this.startDragX;this.pointMove.top=this.pointMove.top+i,this.pointMove.left=this.pointMove.left+n,this.startDragY=s,this.startDragX=o}},handlerMouseupPoint(){this.isMouseDownPoint=!1,this.startDragY=NaN,this.startDragX=NaN},handlerDeletePoint(t){this.points.splice(t,1)},handlerDeletePoints(){this.points=[]},handlerMouseenterPoint(t){this.points[t].isHover=!0},handlerMouseleavePoint(t){this.points[t].isHover=!1},handlerMousedownCanvas(t){this.isMouseDownCanvas=!0,this.newPoint={top:t.layerY,left:t.layerX,width:0,height:0,finish:!1,isHover:!1},this.points.push(this.newPoint)},handlerMousemoveCanvas(t){this.isMouseDownCanvas&&(this.newPoint.width=t.layerX-this.newPoint.left-4,this.newPoint.height=t.layerY-this.newPoint.top-4)},handlerMouseupCanvas(){this.isMouseDownCanvas=!1,this.newPoint.finish=!0,this.newPoint=null}},watch:{points:{handler(t){if(this.$emit("input",{questionsTypes:this.questionsTypes,values:t}),t.length>0){if(this.isSelect)return;return this.isSelect=!0,void this.$emit("finish")}this.isSelect||(this.isSelect=!1,this.$emit("clean"))},deep:!0}}},l=u,h=s(1656),d=(0,h.A)(l,n,r,!1,null,"14fa8912",null),c=d.exports,m=s(9113),p={components:{AreatestSimple:c},data(){return{result:{},arrayQuestions:[]}},mounted(){this.arrayQuestions=(0,m.we)(),this.$emit("setNumberQuestions",this.arrayQuestions.length)}},D=p,v=(0,h.A)(D,o,i,!1,null,"e35117bc",null),g=v.exports},7092:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var o=function(){var t=this,e=t._self._c;return t.timer?e("div",{staticClass:"timer"},[e("span",{ref:"timerCount"})]):t._e()},i=[],n={props:["timer","isHeader"],data(){return{countdown:null}},methods:{addTimeInHtml(t){if(this.$refs.timerCount){this.$refs.timerCount.innerHTML="";const e=t.split("");for(const t of e){const e=document.createElement("div");t.includes(":")||e.classList.add("timer-symbol"),e.innerHTML=t,this.$refs.timerCount.appendChild(e)}}else{const t="00:00:00",e=t.split("");for(const s of e){const t=document.createElement("div");s.includes(":")||t.classList.add("timer-symbol"),t.innerHTML=s,this.$refs.timerCount.appendChild(t)}clearInterval(this.countdown)}},startTimer(){const t=new Date,e=t.setMinutes(t.getMinutes()+this.timer);this.countdown=setInterval((()=>{const t=(new Date).getTime(),s=e-t,o=String(Math.floor(s%36e5/36e5)).padStart(2,"0"),i=String(Math.floor(s%36e5/6e4)).padStart(2,"0"),n=String(Math.floor(s%6e4/1e3)).padStart(2,"0"),r=o+":"+i+":"+n;this.addTimeInHtml(r),s<0&&(clearInterval(this.countdown),this.$refs.timerCount.innerHTML="")}),1e3)}},mounted(){this.timer&&this.startTimer()},deactivated(){this.timer&&clearInterval(this.countdown)}},r=n,a=s(1656),u=(0,a.A)(r,o,i,!1,null,"26597c6e",null),l=u.exports},6258:function(t,e,s){s.d(e,{A:function(){return c}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"question-title"},[t.no?e("div",{staticClass:"question-title__number"},[t._v("Вопрос № "+t._s(t.no))]):t._e(),e("div",{staticClass:"question-title__block"},[e("div",{staticClass:"question-title__block-item"},[t.title?e("div",{staticClass:"question-title__title"},[t._v(" "+t._s(t.title)+" "),t.required?e("span",[t._v("*")]):t._e()]):t._e(),t.description?e("div",{staticClass:"question-title__descr"},[t._v(" "+t._s(t.description)+" ")]):t._e(),t.comments?e("div",{staticClass:"question-title__comment",domProps:{innerHTML:t._s(t.comments)}}):t._e()]),e("div",{staticClass:"question-title__block-item"},[t.timer?e("TimerControl",{attrs:{timer:t.timer}}):t._e()],1)]),t.img?e("div",{staticClass:"question-title__img"},[e("img",{attrs:{src:`${t.img}`,alt:""}}),e("a",{ref:"linkImg",staticClass:"question-title__img-popup",attrs:{href:`${t.img}`}},[e("i")])]):t._e()])},i=[],n=s(7092),r=s(6587),a=s.n(r),u={props:["no","title","description","comments","img","timer","required"],data(){return{countdown:null}},components:{TimerControl:n["default"]},mounted(){this.$question=a()(this.$refs.linkImg),this.$question.fancybox({})}},l=u,h=s(1656),d=(0,h.A)(l,o,i,!1,null,null,null),c=d.exports}}]);
//# sourceMappingURL=127.d50ce5dc.js.map