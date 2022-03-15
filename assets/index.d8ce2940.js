import{d as x,c as i,F as _,r as f,u as v,o as s,a as o,t as m,b as V,e as H,f as y,I as C,g as D,n as w,h as L,i as N,j as T,k as G,l as k,m as S,w as $,v as j,p as A,q as B,s as F,x as R,y as J,z as M}from"./vendor.fb4c34d5.js";const P=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};P();var p=(t=>(t.VSCODE_VUE="vscode-icons:file-type-vue",t.VSCODE_NEST="vscode-icons:file-type-nestjs",t.VSCODE_TAILWIND="vscode-icons:file-type-tailwind",t.GITHUB="logos:github-icon",t.OUTLINE_CHINESE="icon-park-outline:chinese",t.OUTLINE_ENGLISH="icon-park-outline:english",t.CHINESE="uil:letter-chinese-a",t.ENGLISH="uil:letter-english-a",t))(p||{});const z=[{name:"Icons",links:[{name:"Iconify",desc:"",url:"https://icon-sets.iconify.design/"},{name:"Font Awesome",desc:"6.0.0",url:"https://fontawesome.com/icons"},{name:"Font Awesome",desc:"4.7.0 (\u4E2D\u6587)",url:"http://www.fontawesome.com.cn/faicons/"}]},{name:"Colors",links:[{name:"Scale",desc:"",url:"https://hihayk.github.io/scale"},{name:"Nippon Colors",desc:"\u65E5\u672C\u306E\u4F1D\u7D71\u8272",url:"https://nipponcolors.com/"}]}],K={class:"w-small"},W={class:"text-xl font-bold text-slate-900"},q={class:"list-none"},Q=["onClick"],Z=o("span",{class:"mx-2 text-slate-500"},"-",-1),X={class:"text-slate-500"},Y=x({setup(t){const c=r=>window.open(r);return(r,a)=>(s(),i("div",K,[(s(!0),i(_,null,f(v(z),e=>(s(),i("div",{key:e.name,class:"mb-6"},[o("div",W,m(e.name),1),o("ul",q,[(s(!0),i(_,null,f(e.links,n=>(s(),i("li",{key:n.name,class:"list-disc list-inside my-3"},[o("span",{class:"text-slate-600 font-medium px-1 text-lg border-b border-slate-200 hover:border-slate-600 hover:cursor-pointer",onClick:l=>c(n.url)},m(n.name),9,Q),n.desc?(s(),i(_,{key:0},[Z,o("span",X,m(n.desc),1)],64)):V("",!0)]))),128))])]))),128))]))}}),ee=[{name:"Vue 3",docs:[{name:"Vue",icon:p.VSCODE_VUE,links:{chinese:"https://v3.cn.vuejs.org/guide",english:"https://vuejs.org/guide/introduction.html",github:"https://github.com/vuejs/core"}},{name:"Vue Router",desc:"v4.x",icon:p.VSCODE_VUE,links:{chinese:"https://router.vuejs.org/zh/guide",english:"https://router.vuejs.org/guide",github:"https://github.com/vuejs/router"}},{name:"Pinia",icon:p.VSCODE_VUE,links:{chinese:"",english:"https://pinia.vuejs.org/getting-started.html",github:"https://github.com/vuejs/pinia"}}]},{name:"Vue 2",docs:[{name:"Vue",icon:p.VSCODE_VUE,links:{chinese:"https://cn.vuejs.org/v2/guide",english:"https://v2.vuejs.org/v2/guide/index.html",github:"https://github.com/vuejs/vue"}},{name:"Vue Router",desc:"v3.x",icon:p.VSCODE_VUE,links:{chinese:"https://v3.router.vuejs.org/zh/guide",english:"https://v3.router.vuejs.org/guide",github:"https://github.com/vuejs/vue-router"}},{name:"Vuex",icon:p.VSCODE_VUE,links:{chinese:"https://vuex.vuejs.org/zh/guide",english:"https://vuex.vuejs.org/guide/index.html",github:"https://github.com/vuejs/vuex"}}]},{name:"CSS",docs:[{name:"Tailwind CSS",icon:p.VSCODE_TAILWIND,links:{chinese:"https://www.tailwindcss.cn/docs",english:"https://tailwindcss.com/docs",github:"https://github.com/tailwindlabs/tailwindcss"}}]},{name:"Node",docs:[{name:"Nest",icon:p.VSCODE_NEST,links:{chinese:"https://docs.nestjs.cn/8/firststeps",english:"https://docs.nestjs.com",github:"https://github.com/nestjs/nest"}}]}],te={class:"w-small"},se={class:"text-xl font-bold text-slate-900 px-4"},ne={class:"flex items-center"},oe={class:"text-slate-600 font-medium"},ce=o("span",{class:"mx-2 text-slate-500"},"-",-1),ie={class:"text-slate-500"},re={class:"flex justify-between items-center"},le=x({setup(t){const c={chinese:p.CHINESE,english:p.ENGLISH,github:p.GITHUB},r=H(()=>Object.keys(c)),a=e=>window.open(e);return(e,n)=>(s(),i("div",te,[(s(!0),i(_,null,f(v(ee),l=>(s(),i("div",{key:l.name,class:"mb-4"},[o("div",se,m(l.name),1),(s(!0),i(_,null,f(l.docs,h=>(s(),i("div",{key:h.name,class:"flex justify-between items-center px-4 py-1 my-2 hover:bg-slate-100"},[o("div",ne,[y(v(C),{class:"mr-2",icon:h.icon,width:"24",height:"24"},null,8,["icon"]),o("div",oe,m(h.name),1),h.desc?(s(),i(_,{key:0},[ce,o("span",ie,m(h.desc),1)],64)):V("",!0)]),o("div",re,[(s(!0),i(_,null,f(v(r),u=>(s(),D(v(C),{key:u,icon:c[u],class:w(["mr-4 last:mr-0 opacity-40 hover:opacity-100 hover:cursor-pointer",{invisible:!h.links[u]}]),width:"20",height:"20",onClick:g=>a(h.links[u])},null,8,["icon","class","onClick"]))),128))])]))),128))]))),128))]))}});const ae={class:"toolbox w-large"},ue=["onClick"],he=x({setup(t){const c=L(),r=N(),a=n=>c.push({path:n}),e=n=>{const l=["rounded-sm","hover:text-black/85","hover:cursor-pointer","py-1 px-4 mb-2"];return n===r.path?l.push("text-black/85 bg-slate-100"):l.push("text-black/45"),l};return(n,l)=>{const h=T("router-view");return s(),i("div",ae,[o("div",null,[(s(!0),i(_,null,f(v(O),u=>(s(),i("div",{key:u.path,class:w(e(u.path)),onClick:g=>a(u.path)},m(u.name),11,ue))),128))]),y(h,{class:"px-4"})])}}});var I=(t,c)=>{const r=t.__vccOpts||t;for(const[a,e]of c)r[a]=e;return r};const de={},pe=o("div",null,"ToolList",-1),_e=[pe];function me(t,c){return s(),i("div",null,_e)}var ve=I(de,[["render",me]]);const ge=x({props:{data:{type:Object,default:()=>({})}},setup(t){const c=t,{data:r}=G(c);return(a,e)=>(s(),i("div",null,[o("pre",null,m(v(r)),1)]))}}),fe=["onKeyup"],xe={class:"py-2"},ke=B(" JSON: "),ye=x({setup(t){const c={name:"Qihua Jian",height:174,gender:"male",address:{contry:"China",province:"GuangDong",city:"ShenZhen"},tags:["Coffee","Game","Code"]},r=k(JSON.stringify(c)),a=k(S.exports.cloneDeep(c)),e=k(!0),n=()=>{try{a.value=JSON.parse(r.value),e.value=!0}catch{e.value=!1}},l=k(""),h=k(""),u=()=>{h.value=S.exports.get(a.value,l.value,"")};return(g,d)=>(s(),i("div",null,[o("div",null,[$(o("textarea",{"onUpdate:modelValue":d[0]||(d[0]=b=>r.value=b),class:w(["w-full px-2 py-1 border-2 rounded-sm outline-none resize-none text-sm break-all",[e.value?"border-green-700":"border-red-700"]]),rows:"5",onChange:n},null,34),[[j,r.value]])]),o("div",null,[$(o("input",{"onUpdate:modelValue":d[1]||(d[1]=b=>l.value=b),class:"w-full px-2 py-1 border-2 rounded-sm outline-none text-sm border-blue-700",onKeyup:A(u,["enter"])},null,40,fe),[[j,l.value]])]),o("div",xe," Output: "+m(h.value),1),o("div",null,[ke,y(ge,{data:a.value},null,8,["data"])])]))}}),O=[{name:"\u5DE5\u5177\u680F",path:"/tools",component:ve},{name:"JsonView",path:"/tools/json-view",component:ye}],U=[{name:"Bookmark",path:"/bookmark",component:Y},{name:"Docs",path:"/docs",component:le},{name:"Tools",path:"/tools",component:he,children:O.map(t=>({path:t.path,component:t.component}))}],be=[{icon:p.GITHUB,url:"https://github.com/kankk"}],we={class:"flex justify-between items-center px-8"},Ce={class:"flex items-center"},Ee=["onClick"],Se=x({setup(t){const c=k(U),r=L(),a=N(),e=()=>{r.push({path:"/"})},n=u=>{r.push({path:u})},l=u=>window.open(u),h=u=>{const g=["mr-6","last:mr-0","hover:text-black/85","hover:cursor-pointer"];return u===a.path?g.push("text-black/85 underline underline-offset-8"):g.push("text-black/45"),g};return(u,g)=>(s(),i("div",we,[o("div",null,[o("div",{class:"logo hover:cursor-pointer",onClick:e}," Mangokk ")]),o("div",null,[o("div",Ce,[(s(!0),i(_,null,f(c.value,d=>(s(),i("div",{key:d.name,class:w(h(d.path)),onClick:b=>n(d.path)},m(d.name),11,Ee))),128))])]),o("div",null,[(s(!0),i(_,null,f(v(be),d=>(s(),D(v(C),{key:d.url,class:"mr-4 last:mr-0 opacity-40 hover:opacity-100 hover:cursor-pointer",icon:d.icon,width:"20",height:"20",onClick:b=>l(d.url)},null,8,["icon","onClick"]))),128))])]))}}),$e={},je={class:"flex justify-center items-center text-black/45"};function Ve(t,c){return s(),i("div",je," 2022 - PRESENT \xA9 Qihua Jian ")}var De=I($e,[["render",Ve]]);const Le={class:"app min-h-screen text-black/85"},Ne={class:"flex justify-center items-stretch"},Te=x({setup(t){return(c,r)=>{const a=T("router-view");return s(),i("div",Le,[y(Se),o("div",Ne,[y(a,{class:"w-normal py-8"})]),y(De)])}}}),Ie=F(),Oe=o("p",null,"\u2705 Actions for Github Pages",-1),Ue=[Oe],He=x({setup(t){return(c,r)=>(s(),i("div",null,Ue))}}),Ge=[{path:"/",component:He},...U.map(t=>{const c={path:t.path,component:t.component};return Array.isArray(t.children)&&(c.children=t.children),c})],Ae=R({history:J(),routes:Ge}),E=M(Te);E.use(Ie);E.use(Ae);E.mount("#app");