"use strict";(self["webpackChunklibrary"]=self["webpackChunklibrary"]||[]).push([[218],{7218:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var l=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"question"},[t("div",{ref:"header",staticClass:"header-scroll"},[t("div",{ref:"headerContainer",staticClass:"header"},[t("div",{staticClass:"table__cell-empty"}),e._l(e.table.col,(function(e){return t("div",{key:e,ref:"tableCell",refInFor:!0,staticClass:"table__cell"})}))],2)]),t("div",{staticClass:"body"},[t("div",{ref:"headerLeft",staticClass:"header-left-scroll"},[t("div",{staticClass:"header-left"},e._l(e.table.row,(function(e){return t("div",{key:e,staticClass:"table__cell",staticStyle:{height:"198px",width:"150px"}})})),0)]),t("div",{ref:"container",staticClass:"scroll"},[t("div",{ref:"table"},e._l(e.table.row,(function(s){return t("div",{key:s,staticClass:"test"},e._l(e.table.col,(function(e){return t("div",{key:e,ref:"tableCell",refInFor:!0,staticClass:"table__cell"})})),0)})),0)])]),t("button",{staticClass:"default-btn default-btn--success mt-5",on:{click:e.handlerFinish}},[e._v(" Готово ")])])])},i=[],r={data(){return{isSelect:!1,table:{col:5,row:3}}},methods:{handlerFinish(){this.isSelect||this.$store.commit("increment"),this.isSelect=!0},setCellWidth(){const e=window.innerWidth;e<767.98?(this.$refs.container.style.width=e-150-80+"px",this.$refs.header.style.width=e-80+"px"):e<1200?(this.$refs.container.style.width=e-150-240+"px",this.$refs.header.style.width=e-240+"px"):(this.$refs.container.style.width="",this.$refs.header.style.width="");const t=this.$refs.container.clientWidth/this.table.col;if(t<150){for(let t=0;t<this.$refs.tableCell.length;t++)this.$refs.tableCell[t].style.width="150px";const e=150*this.table.col;this.$refs.table.style.width=`${e}px`,this.$refs.headerContainer.style.width=`${e+150}px`}else{for(let e=0;e<this.$refs.tableCell.length;e++)this.$refs.tableCell[e].style.width=`${t}px`;this.$refs.table.style.width="",this.$refs.headerContainer.style.width=""}for(let s=0;s<this.$refs.tableCell.length;s++)this.$refs.tableCell[s].style.height="198px"},handlerScroll(){const e=this.$refs.container.scrollTop,t=this.$refs.container.scrollLeft;this.$refs.header.scrollTo(t,0),this.$refs.headerLeft.scrollTo(0,e)}},mounted(){this.setCellWidth(),this.table.row>2&&(this.$refs.headerContainer.style.marginRight="16px"),window.addEventListener("resize",this.setCellWidth),this.$refs.container.addEventListener("scroll",this.handlerScroll)}},a=r,h=s(1656),n=(0,h.A)(a,l,i,!1,null,"5c797cab",null),c=n.exports}}]);
//# sourceMappingURL=218.33b1de05.js.map