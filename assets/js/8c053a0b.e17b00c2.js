"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[913],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||i;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2449:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={},c="Context menus",u={unversionedId:"guides/context-menus",id:"guides/context-menus",isDocsHomePage:!1,title:"Context menus",description:"If you want to open up a context menu, use Menu:",source:"@site/docs/guides/context-menus.md",sourceDirName:"guides",slug:"/guides/context-menus",permalink:"/obsidian-plugin-docs/guides/context-menus",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/context-menus.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Editor",permalink:"/obsidian-plugin-docs/guides/editor"},next:{title:"Icons",permalink:"/obsidian-plugin-docs/guides/icons"}},p=[],l={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"context-menus"},"Context menus"),(0,i.kt)("p",null,"If you want to open up a context menu, use ",(0,i.kt)("inlineCode",{parentName:"p"},"Menu"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6,26}","{6,26}":!0},'import { Menu, Notice, Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.addRibbonIcon("dice", "Open menu", (event) => {\n      const menu = new Menu(this.app);\n\n      menu.addItem((item) =>\n        item\n          .setTitle("Copy")\n          .setIcon("documents")\n          .onClick(() => {\n            new Notice("Copied");\n          })\n      );\n\n      menu.addItem((item) =>\n        item\n          .setTitle("Paste")\n          .setIcon("paste")\n          .onClick(() => {\n            new Notice("Pasted");\n          })\n      );\n\n      menu.showAtMouseEvent(event);\n    });\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"showAtMouseEvent()")," opens the menu where you clicked with the mouse."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you need more control of where the menu appears, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"menu.showAtPosition({ x: 20, y: 20 })")," to open the menu at a position relative to the top-left corner of the Obsidian window."))),(0,i.kt)("p",null,"For more information on what icons you can use, refer to ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/icons"},"Icons"),"."))}m.isMDXComponent=!0}}]);