"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7427],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return t?a.createElement(f,p(p({ref:n},m),{},{components:t})):a.createElement(f,p({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2415:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>l,assets:()=>m,toc:()=>d,default:()=>u});var a=t(7813),r=t(7044),o=(t(9496),t(9613)),p=["components"],i={id:"pnpm-vs-npm",title:"pnpm vs npm"},s=void 0,l={unversionedId:"pnpm-vs-npm",id:"pnpm-vs-npm",title:"pnpm vs npm",description:"npm's flat tree",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/pnpm-vs-npm.md",sourceDirName:".",slug:"/pnpm-vs-npm",permalink:"/ko/next/pnpm-vs-npm",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"current",frontMatter:{id:"pnpm-vs-npm",title:"pnpm vs npm"},sidebar:"docs",previous:{title:"Uninstalling pnpm",permalink:"/ko/next/uninstall"}},m={},d=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",level:2},{value:"\uc124\uce58\ud558\uae30",id:"\uc124\uce58\ud558\uae30",level:2},{value:"Directory dependencies",id:"directory-dependencies",level:2}],c={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"npms-flat-tree"},"npm's flat tree"),(0,o.kt)("p",null,"npm maintains a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"flattened dependency tree")," as of version 3. This leads to less disk space bloat, with a messy ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," directory as a side effect."),(0,o.kt)("p",null,"On the other hand, pnpm manages ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," by using hard linking and symbolic linking to a global on-disk content-addressable store. This nets you the benefits of far less disk space usage, while also keeping your ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," clean. There is documentation on the ",(0,o.kt)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"store layout")," if you wish to learn more."),(0,o.kt)("p",null,"The good thing about pnpm's proper ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),' structure is that it "',(0,o.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs"),"\" by making it impossible to use modules that are not specified in the project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"\uc124\uce58\ud558\uae30"},"\uc124\uce58\ud558\uae30"),(0,o.kt)("p",null,"pnpm does not allow installation of packages without saving them to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". If no parameters are passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add"),", packages are saved as regular dependencies. Like with npm, ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-dev")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-optional")," can be used to install packages as dev or optional dependencies."),(0,o.kt)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages when they use pnpm unless they remove a dependency and leave it orphaned. That's why pnpm's implementation of the ",(0,o.kt)("a",{parentName:"p",href:"cli/prune"},"prune command")," does not allow you to specify packages to prune - it ALWAYS removes all extraneous and orphaned packages."),(0,o.kt)("h2",{id:"directory-dependencies"},"Directory dependencies"),(0,o.kt)("p",null,"Directory dependencies start with the ",(0,o.kt)("inlineCode",{parentName:"p"},"file:")," prefix and point to a directory in the filesystem. Like npm, pnpm symlinks those dependencies. Unlike npm, pnpm does not perform installation for the file dependencies."),(0,o.kt)("p",null,"This means that if you have a package called ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," (",(0,o.kt)("inlineCode",{parentName:"p"},"<root>/foo"),") that has ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@file:../bar")," as a dependency, pnpm won't perform installation for ",(0,o.kt)("inlineCode",{parentName:"p"},"<root>/bar")," when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,o.kt)("p",null,"If you need to run installations in several packages at the same time, for instance in the case of a monorepo, you should look at the documentation for ",(0,o.kt)("a",{parentName:"p",href:"cli/recursive"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}u.isMDXComponent=!0}}]);