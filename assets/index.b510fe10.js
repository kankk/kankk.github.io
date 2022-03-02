import{o,c,d as _,F as f,r as v,u as p,a as M,b as a,t as m,e as g,f as C,g as B,h as N,n as D,i as I,j as P,s as R,k as A,l as E,m as H,p as S,q as O}from"./vendor.8c67eb01.js";const V=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};V();var y=(s,n)=>{const r=s.__vccOpts||s;for(const[l,e]of n)r[l]=e;return r};const F={};function T(s,n){return o(),c("div",null," Blog ")}var Z=y(F,[["render",T]]);const q={};function z(s,n){return o(),c("div",null," Bookmark ")}var G=y(q,[["render",z]]);const W={class:"px-10"},Y={class:"text-xl font-medium px-4"},J={class:"flex items-center"},K={class:"flex justify-between items-center"},Q=["onClick"],U=_({setup(s){const n=r=>window.open(r);return(r,l)=>{const e=M("MIcon");return o(),c("div",W,[(o(!0),c(f,null,v(p(ee),t=>(o(),c("div",{key:t.name,class:"mb-2"},[a("div",Y,m(t.name),1),(o(!0),c(f,null,v(t.docs,i=>(o(),c("div",{key:i.name,class:"flex justify-between items-center px-4 py-1 hover:bg-slate-100"},[a("div",J,[g(e,{class:"mr-2",component:i.icon,width:20,height:20},null,8,["component"]),a("div",null,m(i.name),1)]),a("div",K,[(o(!0),c(f,null,v(i.links,u=>(o(),c("div",{key:u.name,class:"mr-4 last:mr-0 text-black/45 hover:text-black/85 hover:cursor-pointer",onClick:d=>n(u.url)},m(u.name),9,Q))),128))])]))),128))]))),128))])}}}),L={template:`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify--vscode-icons"
    width="32"
    height="32"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
  >
    <path
      fill="#41b883"
      d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"
    />
    <path
      fill="#41b883"
      d="m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"
    />
    <path
      fill="#35495e"
      d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"
    />
  </svg>`},X={template:`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify--vscode-icons"
    width="32"
    height="32"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
  >
    <path
      fill="#ea2845"
      fill-rule="evenodd"
      d="M18.487 2a1.781 1.781 0 0 0-.564.1c1.615 1.062-.29 2.6.6 3.9A2.235 2.235 0 0 1 19.6 3.765c.285-.237.468-.322.407-.714C19.908 2.409 19.052 2 18.487 2Zm2.3.414c-.223 1.123-.5 1.164-1.323 1.887a1.821 1.821 0 0 0-.527 2.191c-3.4-1.32-7.758-2.118-10.953.166c-1.149.821-1.85 2-3.267 2.481c-.916.314-1.816.221-2.39 1.129a1.413 1.413 0 0 0 .056 1.832c.171.175.5.287.636.465c.079.1.077.2.152.333a2.6 2.6 0 0 0 .564.828c.147.121.652.239.738.368c.108.161-.172.8.063.9c.158.073.621-.744.666-.816c-.092.643-.213 1.784.51.834c.343-.451.364-.6.941-.7a8.2 8.2 0 0 1 1.117-.116a8.362 8.362 0 0 1 8.622 7.622c-.108-.5-.761-1.3-1.369-1.11c-.259.08-.355.527-.525.786a3.773 3.773 0 0 1-.785.868a4.687 4.687 0 0 0-.072-1.452c-.182.748-.547 1.989-1.466 1.788a1.652 1.652 0 0 1-1.328-1.142c-.119-.76.684-1.651-.607-1.714c-2.59-.127-1.991 3.682-.462 4.675a3.272 3.272 0 0 0-1.015.283a6.893 6.893 0 0 0 10.276-4.922a7.058 7.058 0 0 1-.015 3.085a7.213 7.213 0 0 1-.554 1.559a6.781 6.781 0 0 1-1.3 1.81c-.314.311-.89.624-1.088.941a13.409 13.409 0 0 0 3.52-.968A11.638 11.638 0 0 1 15.1 30a11.589 11.589 0 0 0 9.3-5.909a11.657 11.657 0 0 1-1.945 4.668a11.531 11.531 0 0 0 4.975-7.783a11.622 11.622 0 0 1 .209 3.5a12.418 12.418 0 0 0 1.889-10.566a15.755 15.755 0 0 0-1.689-3.962a14.838 14.838 0 0 0-.939-1.394c-.133-.173-.844-.806-.844-1q-.009.029-.015 0c0 3.248-3.5 5.333-6.431 4.463a5 5 0 0 0 4.546-4.167a5 5 0 0 0-3.369-5.436Z"
    ></path>
  </svg>
  `},j=[{name:"Blog",path:"/blog",component:Z},{name:"Bookmark",path:"/bookmark",component:G},{name:"Docs",path:"/docs",component:U}],ee=[{name:"Vue",docs:[{name:"Vue3",icon:L,links:[{name:"\u4E2D\u6587",url:"https://v3.cn.vuejs.org/guide"},{name:"github",url:"https://github.com/vuejs/core"}]},{name:"Vue2",icon:L,links:[{name:"\u4E2D\u6587",url:"https://cn.vuejs.org/v2/guide/"},{name:"github",url:"https://github.com/vuejs/vue"}]}]},{name:"Node",docs:[{name:"Nest",icon:X,links:[{name:"\u4E2D\u6587",url:"https://docs.nestjs.cn/8/firststeps"},{name:"\u82F1\u6587",url:"https://docs.nestjs.com/"},{name:"github",url:"https://github.com/nestjs/nest"}]}]}],te={class:"flex justify-between items-center px-3"},ne={class:"flex items-center"},se=["onClick"],oe=a("div",null," Icons ",-1),ce=_({setup(s){const n=C(j),r=B(),l=N(),e=()=>{r.push({path:"/"})},t=u=>{r.push({path:u.path})},i=u=>{const d=["mr-6","last:mr-0","hover:text-black/85","hover:cursor-pointer"];return u.path===l.path?d.push("text-black/85 underline underline-offset-8"):d.push("text-black/45"),d};return(u,d)=>(o(),c("div",te,[a("div",null,[a("div",{class:"logo hover:cursor-pointer",onClick:e}," Mangokk ")]),a("div",null,[a("div",ne,[(o(!0),c(f,null,v(n.value,h=>(o(),c("div",{key:h.name,class:D(i(h)),onClick:k=>t(h)},m(h.name),11,se))),128))])]),oe]))}}),re={},ie={class:"flex justify-center items-center text-black/45"};function ae(s,n){return o(),c("div",ie," 2022 - PRESENT \xA9 Qihua Jian ")}var le=y(re,[["render",ae]]);const ue={class:"app min-h-screen text-black/85"},pe={class:"flex justify-center items-stretch"},de=_({setup(s){return(n,r)=>{const l=M("router-view");return o(),c("div",ue,[g(ce),a("div",pe,[g(l,{class:"w-content py-8"})]),g(le)])}}}),me=I(),he=P({id:"main",state:()=>({count:0}),getters:{countDisplay:s=>`${s.count} \u6B21`},actions:{increment(){this.count+=1}}}),_e={class:"home"},fe=a("p",null,"\u2705 Test for Github Pages",-1),ve=_({setup(s){const n=he(),{count:r,countDisplay:l}=R(n);return(e,t)=>(o(),c("div",_e,[a("div",null,"Pinia.Main.count: "+m(p(r)),1),a("div",null,"Pinia.Main.getter.countDisplay: "+m(p(l)),1),a("button",{onClick:t[0]||(t[0]=(...i)=>p(n).increment&&p(n).increment(...i))}," Pinia.Main.increment "),fe]))}}),ge=[{path:"/",component:ve},...j.map(s=>({path:s.path,component:s.component}))],xe=A({history:E(),routes:ge});const ke=["innerHTML"],ye=_({props:{component:{type:Object,default:()=>({template:""})},width:Number,height:Number},setup(s){const n=s,{component:r,width:l,height:e}=H(n),{template:t,width:i,height:u}=r.value;return(d,h)=>{var k,w,b,$;return o(),c("div",{class:"m-icon",style:S({width:`${(w=(k=p(i))!=null?k:p(l))!=null?w:16}px`,height:`${($=(b=p(u))!=null?b:p(e))!=null?$:16}px`}),innerHTML:p(t)},null,12,ke)}}}),x=O(de);x.component("MIcon",ye);x.use(me);x.use(xe);x.mount("#app");
