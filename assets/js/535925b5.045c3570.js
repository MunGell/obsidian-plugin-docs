"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[639],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),g=a,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20427:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={},l="Plugin_2",d={unversionedId:"api/classes/Plugin_2",id:"api/classes/Plugin_2",isDocsHomePage:!1,title:"Plugin_2",description:"Extends Component",source:"@site/docs/api/classes/Plugin_2.md",sourceDirName:"api/classes",slug:"/api/classes/Plugin_2",permalink:"/obsidian-plugin-docs/api/classes/Plugin_2",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/Plugin_2.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"PluginSettingTab",permalink:"/obsidian-plugin-docs/api/classes/PluginSettingTab"},next:{title:"PopoverSuggest",permalink:"/obsidian-plugin-docs/api/classes/PopoverSuggest"}},c=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"app",id:"app",children:[]},{value:"manifest",id:"manifest",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addRibbonIcon",id:"addribbonicon",children:[]},{value:"addStatusBarItem",id:"addstatusbaritem",children:[]},{value:"addCommand",id:"addcommand",children:[]},{value:"addSettingTab",id:"addsettingtab",children:[]},{value:"registerView",id:"registerview",children:[]},{value:"registerExtensions",id:"registerextensions",children:[]},{value:"registerMarkdownPostProcessor",id:"registermarkdownpostprocessor",children:[]},{value:"registerMarkdownCodeBlockProcessor",id:"registermarkdowncodeblockprocessor",children:[]},{value:"registerCodeMirror",id:"registercodemirror",children:[]},{value:"registerObsidianProtocolHandler",id:"registerobsidianprotocolhandler",children:[]},{value:"registerEditorSuggest",id:"registereditorsuggest",children:[]},{value:"loadData",id:"loaddata",children:[]},{value:"saveData",id:"savedata",children:[]}]}],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plugin_2"},"Plugin_2"),(0,o.kt)("p",null,"Extends ",(0,o.kt)("inlineCode",{parentName:"p"},"Component")),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(app: App,manifest: PluginManifest);\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"app"},"app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"app: App\n")),(0,o.kt)("h3",{id:"manifest"},"manifest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"manifest: PluginManifest\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"addribbonicon"},"addRibbonIcon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"addRibbonIcon(icon: string, title: string, callback: (evt: MouseEvent) => any): HTMLElement;\n")),(0,o.kt)("p",null,"Adds a ribbon icon to the left bar."),(0,o.kt)("h3",{id:"addstatusbaritem"},"addStatusBarItem"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"addStatusBarItem(): HTMLElement;\n")),(0,o.kt)("h3",{id:"addcommand"},"addCommand"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"addCommand(command: Command): Command;\n")),(0,o.kt)("p",null,"Register a command globally. The command id and name will be automatically prefixed with this plugin's id and name."),(0,o.kt)("h3",{id:"addsettingtab"},"addSettingTab"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"addSettingTab(settingTab: PluginSettingTab): void;\n")),(0,o.kt)("h3",{id:"registerview"},"registerView"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"registerView(type: string, viewCreator: ViewCreator): void;\n")),(0,o.kt)("h3",{id:"registerextensions"},"registerExtensions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"registerExtensions(extensions: string[], viewType: string): void;\n")),(0,o.kt)("h3",{id:"registermarkdownpostprocessor"},"registerMarkdownPostProcessor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"registerMarkdownPostProcessor(postProcessor: MarkdownPostProcessor): MarkdownPostProcessor;\n")),(0,o.kt)("h3",{id:"registermarkdowncodeblockprocessor"},"registerMarkdownCodeBlockProcessor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"registerMarkdownCodeBlockProcessor(language: string, handler: (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => Promise<any> | void): MarkdownPostProcessor;\n")),(0,o.kt)("p",null,"Register a special post processor that handles fenced code given a language and a handler.\nThis special post processor takes care of removing the ","<","pre",">","<","code",">"," and create a ","<","div",">"," that\nwill be passed to your handler, and is expected to be filled with your custom elements."),(0,o.kt)("h3",{id:"registercodemirror"},"registerCodeMirror"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"registerCodeMirror(callback: (cm: CodeMirror.Editor) => any): void;\n")),(0,o.kt)("p",null,"Runs callback on all currently loaded instances of CodeMirror,\nthen registers the callback for all future CodeMirror instances."),(0,o.kt)("h3",{id:"registerobsidianprotocolhandler"},"registerObsidianProtocolHandler"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"registerObsidianProtocolHandler(action: string, handler: ObsidianProtocolHandler): void;\n")),(0,o.kt)("p",null,"Register a handler for obsidian:// URLs."),(0,o.kt)("h3",{id:"registereditorsuggest"},"registerEditorSuggest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"registerEditorSuggest(editorSuggest: EditorSuggest<any>): void;\n")),(0,o.kt)("p",null,"Register an EditorSuggest which can provide live suggestions while the user is typing."),(0,o.kt)("h3",{id:"loaddata"},"loadData"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"loadData(): Promise<any>;\n")),(0,o.kt)("h3",{id:"savedata"},"saveData"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"saveData(data: any): Promise<void>;\n")))}p.isMDXComponent=!0}}]);