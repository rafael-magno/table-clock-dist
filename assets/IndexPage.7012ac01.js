import{c as F,h as Q}from"./render.d463399b.js";import{i as $,e as v,c as l,h as q,l as H,a as I,g as z,A as S,y as f,s as p,B as d,C as _,D as C,E as L,r as y,F as w,G as B,w as b,b as P,z as M,t as k,H as N,I as j,o as D,u as K,v as E}from"./index.a8fdbd3d.js";var V=F({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(r,{slots:e}){const{proxy:{$q:n}}=z(),t=$(H,v);if(t===v)return console.error("QPage needs to be a deep child of QLayout"),v;if($(I,v)===v)return console.error("QPage needs to be child of QPageContainer"),v;const c=l(()=>{const u=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof r.styleFn=="function"){const h=t.isContainer.value===!0?t.containerHeight.value:n.screen.height;return r.styleFn(u,h)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-u+"px":n.screen.height===0?u!==0?`calc(100vh - ${u}px)`:"100vh":n.screen.height-u+"px"}}),g=l(()=>`q-page${r.padding===!0?" q-layout-padding":""}`);return()=>q("main",{class:g.value,style:c.value},Q(e.default))}});function A(){return $(S)}const G=f({__name:"ClockColonComponent",props:{pixelLength:{},nightMode:{type:Boolean}},setup(r){const e=r,n=l(()=>Math.ceil(e.pixelLength/2)),t=l(()=>e.pixelLength*7);return(i,c)=>(p(),d("svg",{viewBox:"0 0 4 28",style:L(`margin: ${n.value}px ${n.value}px ${n.value}px ${n.value}px; width: ${i.pixelLength}px; height: ${t.value}px`)},[_("polygon",{class:C("active-"+(i.nightMode?"night":"day")),points:"0,6 2,4 4,6 2,8"},null,2),_("polygon",{class:C("active-"+(i.nightMode?"night":"day")),points:"0,22 2,20 4,22 2,24"},null,2)],4))}}),R=["points"],T=f({__name:"ClockNumberComponent",props:{char:{},pixelLength:{},nightMode:{type:Boolean}},setup(r){const e=r,n=["41,0 21,20 41,40 119,40 139,20 119,0","20,21 0,41 0,119 20,139 40,119 40,41","140,21 120,41 120,119 140,139 160,119 160,41","41,120 21,140 41,160 119,160 139,140 119,120","20,141 0,161 0,239 20,259 40,239 40,161","140,141 120,161 120,239 140,259 160,239 160,161","41,240 21,260 41,280 119,280 139,260 119,240"],i=y([[1,1,1,0,1,1,1],[0,0,1,0,0,1,0],[1,0,1,1,1,0,1],[1,0,1,1,0,1,1],[0,1,1,1,0,1,0],[1,1,0,1,0,1,1],[1,1,0,1,1,1,1],[1,0,1,0,0,1,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,1]][e.char]),c=l(()=>Math.ceil(e.pixelLength/2)),g=l(()=>e.pixelLength*4),u=l(()=>e.pixelLength*7);function h(m){let a=i.value[m]?"active":"inactive";return a+="-"+(e.nightMode?"night":"day"),a}return(m,a)=>(p(),d("svg",{viewBox:"0 0 160 280",style:L(`margin: ${c.value}px ${c.value}px ${c.value}px ${c.value}px; width: ${g.value}px; height: ${u.value}px`)},[(p(),d(w,null,B(n,(o,s)=>_("polygon",{key:s,class:C(h(s)),points:o},null,10,R)),64))],4))}}),U=f({__name:"ClockComponent",setup(r){const e=A();let n=y(-1),t=y(-1),i=y("0");g();const c=setInterval(g,1e3);function g(){const a=new Date;n.value=a.getHours(),t.value=a.getMinutes()}const u=l(()=>{let a=(n.value<10?"0":"")+String(n.value);return a+=":",a+=(t.value<10?"0":"")+String(t.value),a.split("")}),h=l(()=>{const a=e.screen.lt.sm?13:25,o=e.screen.lt.sm?19:11,s=e.screen.width,x=e.screen.height;return s/x<a/o?Math.floor(s/a):Math.floor(x/o)}),m=l(()=>n.value>18||n.value<5);return b(t,a=>{let o=h.value;const s=[`${o}px 0 0 ${o}px`,"0",`0 ${o}px ${o}px 0`,"0"];i.value=s[(a+1)%4]}),P(()=>{clearInterval(c)}),(a,o)=>(p(),d("div",{class:"row items-center justify-center",style:L(`padding: ${M(i)}`)},[(p(!0),d(w,null,B(u.value,(s,x)=>(p(),d(w,null,[s!=":"?(p(),k(T,{key:`${x}_${s}`,char:parseInt(s),"pixel-length":h.value,"night-mode":m.value},null,8,["char","pixel-length","night-mode"])):N((p(),k(G,{key:`${s}`,"pixel-length":h.value,"night-mode":m.value},null,8,["pixel-length","night-mode"])),[[j,M(e).screen.gt.xs]])],64))),256))],4))}}),O=f({__name:"IndexPage",setup(r){let e;return D(async()=>{e=await navigator.wakeLock.request()}),P(()=>{e.release()}),(n,t)=>(p(),k(V,{class:"row items-center justify-evenly"},{default:K(()=>[E(U)]),_:1}))}});export{O as default};
