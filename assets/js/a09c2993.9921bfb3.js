"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={slug:"/",sidebar_label:"Introduction",sidebar_position:1},u="Plugin development for Obsidian",s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Plugin development for Obsidian",description:"This is an unofficial documentation page for Obsidian plugin development.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/obsidian-plugin-docs/",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_label:"Introduction",sidebar_position:1},sidebar:"docs",next:{title:"Create your first plugin",permalink:"/obsidian-plugin-docs/getting-started/create-your-first-plugin"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plugin-development-for-obsidian"},"Plugin development for Obsidian"),(0,o.kt)("p",null,"This is an ",(0,o.kt)("strong",{parentName:"p"},"unofficial")," documentation page for Obsidian plugin development."),(0,o.kt)("p",null,"I'm ",(0,o.kt)("strong",{parentName:"p"},"not")," affiliated with Obsidian. I learn by writing and documenting, so this is my way of learning how to build plugins myself. I'll improve the documentation as I learn more, but feel free to contribute if you see something missing or wrong."),(0,o.kt)("p",null,"If this site has been useful to you, you can buy me a coffee to support its continued development:"),(0,o.kt)("a",{href:"https://buymeacoffee.com/marcusolsson"},(0,o.kt)("img",{src:"/static/img/default-violet.webp",width:"200"})),(0,o.kt)("p",null,"If this site doesn't help you, maybe one of these resources might:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Official resources by the Obsidian team:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/obsidianmd/obsidian-sample-plugin"},"Obsidian Sample Plugin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/obsidianmd/obsidian-api"},"Obsidian API"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Unofficial resources by community members:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.obsidian.md/t/plugins-mini-faq/7737"},"Plugins mini FAQ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=9lA-jaMNS0k"},"Create Your Own Obsidian Plugin")," by Antone Heyward"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://liamca.in/Obsidian/API+FAQ/index"},"Unofficial API FAQ")," by Liam Cain"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/obsidian-tools/obsidian-tools"},"Obsidian Tools"))))}m.isMDXComponent=!0}}]);