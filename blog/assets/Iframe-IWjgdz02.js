import{_ as l,o as r,c as a,a as o,b as p,n,p as d,h}from"./app-hBvoMyXQ.js";const _={name:"Iframe",props:{url:String,height:Number},methods:{jumpTo(){window.open(this.$props.url)}}},c=e=>(d("data-v-58498cda"),e=e(),h(),e),u={class:"iframe_wp"},m={class:"iframe_title"},f={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg",ariahidden:"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",style:{"margin-bottom":"2px"},width:"15",height:"15"},v=c(()=>o("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1)),g=c(()=>o("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1)),w=[v,g],x=["src"];function I(e,s,b,y,S,t){return r(),a("div",u,[o("div",m,[o("span",{onClick:s[0]||(s[0]=(...i)=>t.jumpTo&&t.jumpTo(...i)),class:"source"},[p(" 源页面 "),(r(),a("svg",f,w))])]),o("iframe",{ref:"iframeRes",src:e.$props.url,style:n({height:e.$props.height+"px"})},null,12,x)])}const B=l(_,[["render",I],["__scopeId","data-v-58498cda"],["__file","Iframe.vue"]]);export{B as default};
