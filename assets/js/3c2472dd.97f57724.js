"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[997],{5862:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return r},toc:function(){return l},default:function(){return p}});var t=a(7462),o=a(3366),i=(a(7294),a(3905)),m=["components"],d={sidebar_position:4},s="Commands",r={unversionedId:"commands",id:"commands",isDocsHomePage:!1,title:"Commands",description:"Commands are actions that the user can perform from the Command Palette or by using a hot key.",source:"@site/docs/commands.md",sourceDirName:".",slug:"/commands",permalink:"/obsidian-plugin-docs/commands",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/commands.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Anatomy of a plugin",permalink:"/obsidian-plugin-docs/plugin-anatomy"},next:{title:"Ribbon actions",permalink:"/obsidian-plugin-docs/ribbon"}},l=[{value:"Conditional commands",id:"conditional-commands",children:[]},{value:"Editor commands",id:"editor-commands",children:[]},{value:"Hot keys",id:"hot-keys",children:[]}],c={toc:l};function p(e){var n=e.components,a=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Commands are actions that the user can perform from the ",(0,i.kt)("a",{parentName:"p",href:"https://help.obsidian.md/Plugins/Command+palette"},"Command Palette")," or by using a hot key."),(0,i.kt)("p",null,"To register a new command for your plugin, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"addCommand")," method inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"onload")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts" {5-11}',title:'"main.ts"',"{5-11}":!0},"import { Plugin } from \"obsidian\";\n\nexport default class MyPlugin extends Plugin {\n  async onload() {\n    this.addCommand({\n      id: 'my-sample-command',\n      name: 'My sample command',\n      callback: () => {\n        console.log('Hey, you!');\n      },\n    });\n  }\n}\n")),(0,i.kt)("h2",{id:"conditional-commands"},"Conditional commands"),(0,i.kt)("p",null,"If your command is only able to run under certain conditions, then consider using ",(0,i.kt)("inlineCode",{parentName:"p"},"checkCallback")," instead."),(0,i.kt)("p",null,"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"checkCallback"),", Obsidian first performs a ",(0,i.kt)("em",{parentName:"p"},"check")," to see whether the command can run. To determine whether the callback should perform a check or an action, a ",(0,i.kt)("inlineCode",{parentName:"p"},"checking")," argument is passed to the callback."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"checking")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", perform a check."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"checking")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", perform an action.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4,6-8,11,15}","{4,6-8,11,15}":!0},"this.addCommand({\n  id: 'my-sample-command',\n  name: 'My sample command',\n  checkCallback: (checking: boolean) => {\n    if (isCommandPossible()) {\n      if (!checking) {\n        // Perform the command.\n      }\n\n      // Check passed.\n      return true;\n    }\n\n    // Check failed. Hide the command.\n    return false;\n  },\n});\n")),(0,i.kt)("h2",{id:"editor-commands"},"Editor commands"),(0,i.kt)("p",null,"If your command needs access to the editor, you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"editorCallback"),", which provides the currently active editor and its view as arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"this.addCommand({\n  id: 'my-sample-command',\n  name: 'My sample command',\n  editorCallback: (editor: Editor, view: MarkdownView) => {\n    const sel = editor.getSelection()\n\n    console.log(`You have selected: ${sel}`);\n  },\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Editor commands only appear in the Command Palette when there's an active editor available."))),(0,i.kt)("p",null,"If the editor callback can only run given under certain conditions, consider using the ",(0,i.kt)("inlineCode",{parentName:"p"},"editorCheckCallback")," instead. For more information, refer to ",(0,i.kt)("a",{parentName:"p",href:"#conditional-commands"},"conditional commands"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"this.addCommand({\n  id: 'my-sample-command',\n  name: 'My sample command',\n  editorCheckCallback: (checking: boolean, editor: Editor, view: MarkdownView) => {\n    if (isCommandPossible()) {\n      if (!checking) {\n        // Perform the command.\n      }\n\n      // Check passed.\n      return true;\n    }\n\n    // Check failed. Hide the command.\n    return false;\n  },\n});\n")),(0,i.kt)("h2",{id:"hot-keys"},"Hot keys"),(0,i.kt)("p",null,"The user can run commands using a keyboard shortcut, or ",(0,i.kt)("em",{parentName:"p"},"hot key"),". While they can configure this themselves, you can also provide a default hot key."),(0,i.kt)("p",null,"In this example, the user can run the command by pressing and holding Ctrl and Shift together, and then pressing the letter ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," on their keyboard."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"this.addCommand({\n  id: 'my-sample-command',\n  name: 'My sample command',\n  hotkeys: [{ modifiers: [\"Ctrl\", \"Shift\"], key: \"a\" }],\n  callback: () => {\n    console.log('Hey, you!');\n  },\n});\n")))}p.isMDXComponent=!0}}]);