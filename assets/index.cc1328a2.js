import{d as f,c,F as _,r as k,u as v,o as n,a as r,t as g,b as D,e as G,f as m,I as C,g as L,n as w,h as N,i as T,j as I,k as E,l as A,m as y,p as $,w as V,v as j,q as B,s as F,x as R,y as J,z as M}from"./vendor.684dace9.js";const P=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}};P();var p=(t=>(t.VSCODE_VUE="vscode-icons:file-type-vue",t.VSCODE_NEST="vscode-icons:file-type-nestjs",t.VSCODE_TAILWIND="vscode-icons:file-type-tailwind",t.GITHUB="logos:github-icon",t.OUTLINE_CHINESE="icon-park-outline:chinese",t.OUTLINE_ENGLISH="icon-park-outline:english",t.CHINESE="uil:letter-chinese-a",t.ENGLISH="uil:letter-english-a",t))(p||{});const z=[{name:"Icons",links:[{name:"Iconify",desc:"",url:"https://icon-sets.iconify.design/"},{name:"Font Awesome",desc:"6.0.0",url:"https://fontawesome.com/icons"},{name:"Font Awesome",desc:"4.7.0 (\u4E2D\u6587)",url:"http://www.fontawesome.com.cn/faicons/"}]},{name:"Colors",links:[{name:"Scale",desc:"",url:"https://hihayk.github.io/scale"},{name:"Nippon Colors",desc:"\u65E5\u672C\u306E\u4F1D\u7D71\u8272",url:"https://nipponcolors.com/"}]}],K={class:"w-small"},W={class:"text-xl font-bold text-slate-900"},q={class:"list-none"},Q=["onClick"],X=r("span",{class:"mx-2 text-slate-500"},"-",-1),Z={class:"text-slate-500"},Y=f({setup(t){const o=i=>window.open(i);return(i,l)=>(n(),c("div",K,[(n(!0),c(_,null,k(v(z),e=>(n(),c("div",{key:e.name,class:"mb-6"},[r("div",W,g(e.name),1),r("ul",q,[(n(!0),c(_,null,k(e.links,s=>(n(),c("li",{key:s.name,class:"list-disc list-inside my-3"},[r("span",{class:"text-slate-600 font-medium px-1 text-lg border-b border-slate-200 hover:border-slate-600 hover:cursor-pointer",onClick:a=>o(s.url)},g(s.name),9,Q),s.desc?(n(),c(_,{key:0},[X,r("span",Z,g(s.desc),1)],64)):D("",!0)]))),128))])]))),128))]))}}),ee=[{name:"Vue 3",docs:[{name:"Vue",icon:p.VSCODE_VUE,links:{chinese:"https://v3.cn.vuejs.org/guide",english:"https://vuejs.org/guide/introduction.html",github:"https://github.com/vuejs/core"}},{name:"Vue Router",desc:"v4.x",icon:p.VSCODE_VUE,links:{chinese:"https://router.vuejs.org/zh/guide",english:"https://router.vuejs.org/guide",github:"https://github.com/vuejs/router"}},{name:"Pinia",icon:p.VSCODE_VUE,links:{chinese:"",english:"https://pinia.vuejs.org/getting-started.html",github:"https://github.com/vuejs/pinia"}}]},{name:"Vue 2",docs:[{name:"Vue",icon:p.VSCODE_VUE,links:{chinese:"https://cn.vuejs.org/v2/guide",english:"https://v2.vuejs.org/v2/guide/index.html",github:"https://github.com/vuejs/vue"}},{name:"Vue Router",desc:"v3.x",icon:p.VSCODE_VUE,links:{chinese:"https://v3.router.vuejs.org/zh/guide",english:"https://v3.router.vuejs.org/guide",github:"https://github.com/vuejs/vue-router"}},{name:"Vuex",icon:p.VSCODE_VUE,links:{chinese:"https://vuex.vuejs.org/zh/guide",english:"https://vuex.vuejs.org/guide/index.html",github:"https://github.com/vuejs/vuex"}}]},{name:"CSS",docs:[{name:"Tailwind CSS",icon:p.VSCODE_TAILWIND,links:{chinese:"https://www.tailwindcss.cn/docs",english:"https://tailwindcss.com/docs",github:"https://github.com/tailwindlabs/tailwindcss"}}]},{name:"Node",docs:[{name:"Nest",icon:p.VSCODE_NEST,links:{chinese:"https://docs.nestjs.cn/8/firststeps",english:"https://docs.nestjs.com",github:"https://github.com/nestjs/nest"}}]}],te={class:"w-small"},se={class:"text-xl font-bold text-slate-900 px-4"},ne={class:"flex items-center"},oe={class:"text-slate-600 font-medium"},ce=r("span",{class:"mx-2 text-slate-500"},"-",-1),re={class:"text-slate-500"},ie={class:"flex justify-between items-center"},le=f({setup(t){const o={chinese:p.CHINESE,english:p.ENGLISH,github:p.GITHUB},i=G(()=>Object.keys(o)),l=e=>window.open(e);return(e,s)=>(n(),c("div",te,[(n(!0),c(_,null,k(v(ee),a=>(n(),c("div",{key:a.name,class:"mb-4"},[r("div",se,g(a.name),1),(n(!0),c(_,null,k(a.docs,d=>(n(),c("div",{key:d.name,class:"flex justify-between items-center px-4 py-1 my-2 hover:bg-slate-100"},[r("div",ne,[m(v(C),{class:"mr-2",icon:d.icon,width:"24",height:"24"},null,8,["icon"]),r("div",oe,g(d.name),1),d.desc?(n(),c(_,{key:0},[ce,r("span",re,g(d.desc),1)],64)):D("",!0)]),r("div",ie,[(n(!0),c(_,null,k(v(i),u=>(n(),L(v(C),{key:u,icon:o[u],class:w(["mr-4 last:mr-0 opacity-40 hover:opacity-100 hover:cursor-pointer",{invisible:!d.links[u]}]),width:"20",height:"20",onClick:x=>l(d.links[u])},null,8,["icon","class","onClick"]))),128))])]))),128))]))),128))]))}});const ae={class:"toolbox w-large"},ue=["onClick"],de=f({setup(t){const o=N(),i=T(),l=s=>o.push({path:s}),e=s=>{const a=["rounded-sm","hover:text-black/85","hover:cursor-pointer","py-1 px-4 mb-2"];return s===i.path?a.push("text-black/85 bg-slate-100"):a.push("text-black/45"),a};return(s,a)=>{const d=I("router-view");return n(),c("div",ae,[r("div",null,[(n(!0),c(_,null,k(v(H),u=>(n(),c("div",{key:u.path,class:w(e(u.path)),onClick:x=>l(u.path)},g(u.name),11,ue))),128))]),m(d,{class:"px-4"})])}}});var O=(t,o)=>{const i=t.__vccOpts||t;for(const[l,e]of o)i[l]=e;return i};const he={},pe=r("div",null,"ToolList",-1),_e=[pe];function me(t,o){return n(),c("div",null,_e)}var ve=O(he,[["render",me]]),ge=f({render(){return m("div",null,[E("TSX")])}}),fe=f({props:{data:{type:Object,default:()=>({})}},setup(t){const o=t,{data:i}=A(o);console.log(i.value);const l=()=>m("div",null,[E("Vue 3")]);return(e,s)=>(n(),c("div",null,[m(l),m(v(ge))]))}});const xe=["onKeyup"],ke={class:"py-2"},ye=E(" JSON: "),be=f({setup(t){const o={name:"Qihua Jian",height:174,gender:"male",address:{contry:"China",province:"GuangDong",city:"ShenZhen"},tags:["Coffee","Game","Code"]},i=y(JSON.stringify(o)),l=y($.exports.cloneDeep(o)),e=y(!0),s=()=>{try{l.value=JSON.parse(i.value),e.value=!0}catch{e.value=!1}},a=y(""),d=y(""),u=()=>{d.value=$.exports.get(l.value,a.value,"")};return(x,h)=>(n(),c("div",null,[r("div",null,[V(r("textarea",{"onUpdate:modelValue":h[0]||(h[0]=b=>i.value=b),class:w(["w-full px-2 py-1 border-2 rounded-sm outline-none resize-none text-sm break-all",[e.value?"border-green-700":"border-red-700"]]),rows:"5",onChange:s},null,34),[[j,i.value]])]),r("div",null,[V(r("input",{"onUpdate:modelValue":h[1]||(h[1]=b=>a.value=b),class:"w-full px-2 py-1 border-2 rounded-sm outline-none text-sm border-blue-700",onKeyup:B(u,["enter"])},null,40,xe),[[j,a.value]])]),r("div",ke," Output: "+g(d.value),1),r("div",null,[ye,m(fe,{data:l.value},null,8,["data"])])]))}}),H=[{name:"\u5DE5\u5177\u680F",path:"/tools",component:ve},{name:"JsonView",path:"/tools/json-view",component:be}],U=[{name:"Bookmark",path:"/bookmark",component:Y},{name:"Docs",path:"/docs",component:le},{name:"Tools",path:"/tools",component:de,children:H.map(t=>({path:t.path,component:t.component}))}],we=[{icon:p.GITHUB,url:"https://github.com/kankk"}],Ce={class:"flex justify-between items-center px-8"},Ee={class:"flex items-center"},Se=["onClick"],$e=f({setup(t){const o=y(U),i=N(),l=T(),e=()=>{i.push({path:"/"})},s=u=>{i.push({path:u})},a=u=>window.open(u),d=u=>{const x=["mr-6","last:mr-0","hover:text-black/85","hover:cursor-pointer"];return u===l.path?x.push("text-black/85 underline underline-offset-8"):x.push("text-black/45"),x};return(u,x)=>(n(),c("div",Ce,[r("div",null,[r("div",{class:"logo hover:cursor-pointer",onClick:e}," Mangokk ")]),r("div",null,[r("div",Ee,[(n(!0),c(_,null,k(o.value,h=>(n(),c("div",{key:h.name,class:w(d(h.path)),onClick:b=>s(h.path)},g(h.name),11,Se))),128))])]),r("div",null,[(n(!0),c(_,null,k(v(we),h=>(n(),L(v(C),{key:h.url,class:"mr-4 last:mr-0 opacity-40 hover:opacity-100 hover:cursor-pointer",icon:h.icon,width:"20",height:"20",onClick:b=>a(h.url)},null,8,["icon","onClick"]))),128))])]))}}),Ve={},je={class:"flex justify-center items-center text-black/45"};function De(t,o){return n(),c("div",je," 2022 - PRESENT \xA9 Qihua Jian ")}var Le=O(Ve,[["render",De]]);const Ne={class:"app min-h-screen text-black/85"},Te={class:"flex justify-center items-stretch"},Ie=f({setup(t){return(o,i)=>{const l=I("router-view");return n(),c("div",Ne,[m($e),r("div",Te,[m(l,{class:"w-normal py-8"})]),m(Le)])}}}),Oe=F(),He=r("p",null,"\u2705 Actions for Github Pages",-1),Ue=[He],Ge=f({setup(t){return(o,i)=>(n(),c("div",null,Ue))}}),Ae=[{path:"/",component:Ge},...U.map(t=>{const o={path:t.path,component:t.component};return Array.isArray(t.children)&&(o.children=t.children),o})],Be=R({history:J(),routes:Ae}),S=M(Ie);S.use(Oe);S.use(Be);S.mount("#app");
