"use strict";(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[627],{7627:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=function(){var t=this,e=t._self._c;return t.timer?e("div",{staticClass:"timer"},[e("span",{ref:"timerCount"})]):t._e()},i=[],s={props:["timer","isHeader"],data(){return{countdown:null}},methods:{addTimeInHtml(t){if(this.$refs.timerCount){this.$refs.timerCount.innerHTML="";const e=t.split("");for(const t of e){const e=document.createElement("div");t.includes(":")||e.classList.add("timer-symbol"),e.innerHTML=t,this.$refs.timerCount.appendChild(e)}}else{const t="00:00:00",e=t.split("");for(const n of e){const t=document.createElement("div");n.includes(":")||t.classList.add("timer-symbol"),t.innerHTML=n,this.$refs.timerCount.appendChild(t)}clearInterval(this.countdown)}},startTimer(){const t=new Date,e=t.setMinutes(t.getMinutes()+this.timer);this.countdown=setInterval((()=>{const t=(new Date).getTime(),n=e-t,r=String(Math.floor(n%36e5/36e5)).padStart(2,"0"),i=String(Math.floor(n%36e5/6e4)).padStart(2,"0"),s=String(Math.floor(n%6e4/1e3)).padStart(2,"0"),a=r+":"+i+":"+s;this.addTimeInHtml(a),n<0&&(clearInterval(this.countdown),this.$refs.timerCount.innerHTML="")}),1e3)}},mounted(){this.timer&&this.startTimer()},deactivated(){this.timer&&clearInterval(this.countdown)}},a=s,o=n(845),l=(0,o.A)(a,r,i,!1,null,"26597c6e",null),d=l.exports}}]);
//# sourceMappingURL=627.050ff4db.js.map