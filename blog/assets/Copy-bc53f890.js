import{_ as a,p as d,q as p,s as n,ao as r,ap as i,R as t}from"./framework-125c10c9.js";import{m as l}from"./app-578d61e4.js";const _={name:"Copy",methods:{copy(){const e=document.createElement("input");e.setAttribute("id","cp_hgz_input"),e.value=this.$slots.default()[0].children,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),l.success("复制成功")}}},u=e=>(r("data-v-1687e438"),e=e(),i(),e),m=u(()=>t("svg",{class:"icon copyicon","data-icon":"copy",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"64 64 896 896",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"})],-1));function h(e,o,v,y,f,c){return d(),p("span",{class:"copyable",onClick:o[0]||(o[0]=(...s)=>c.copy&&c.copy(...s))},[n(e.$slots,"default",{},void 0,!0),m])}const w=a(_,[["render",h],["__scopeId","data-v-1687e438"],["__file","Copy.vue"]]);export{w as default};