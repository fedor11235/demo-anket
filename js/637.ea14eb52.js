"use strict";(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[637],{5954:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var n=function(){var e=this,t=e._self._c;return t("div",e._l(e.arrayQuestions,(function(s){return t(`Text${s.type[0].toUpperCase()+s.type.slice(1)}`,{key:s.id,tag:"component",attrs:{questionsTypes:`Text${s.type[0].toUpperCase()+s.type.slice(1)}`,"question-number":s.questionNumber,title:s.title,description:s.description,comments:s.comments,img:s.img,required:s.required,questionDifficult:s.questionDifficult,selects:s.selects},on:{finish:function(t){return e.$store.commit("increment")},clean:function(t){return e.$store.commit("decrease")}},model:{value:e.$store.state.savedAnswers[s.id],callback:function(t){e.$set(e.$store.state.savedAnswers,s.id,t)},expression:"$store.state.savedAnswers[question.id]"}})})),1)},i=[],r=s(2856),u=s(9113),o={data(){return{arrayQuestions:[]}},components:{TextSimple:r.A},mounted(){this.arrayQuestions=(0,u.pp)(),this.$emit("setNumberQuestions",this.arrayQuestions.length)}},a=o,c=s(1656),l=(0,c.A)(a,n,i,!1,null,null,null),p=l.exports}}]);
//# sourceMappingURL=637.ea14eb52.js.map