"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7572],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,u=d["".concat(o,".").concat(k)]||d[k]||s[k]||r;return n?l.createElement(u,i(i({ref:t},m),{},{components:n})):l.createElement(u,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6866:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>c,toc:()=>m,default:()=>d});var l=n(9518),a=n(7344),r=(n(9496),n(9613)),i=["components"],p={id:"filtering",title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"},o=void 0,c={unversionedId:"filtering",id:"filtering",title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.13.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/ja/next/filtering",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"filtering",title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"},sidebar:"docs",previous:{title:"\u8a2d\u5b9a",permalink:"/ja/next/configuring"},next:{title:"\u30b9\u30af\u30ea\u30d7\u30c8",permalink:"/ja/next/scripts"}},m=[{value:"Matching",id:"matching",children:[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[],level:3},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[],level:3},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",children:[],level:3},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",children:[],level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",children:[],level:3},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[],level:3},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[],level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",children:[],level:3}],level:2},{value:"\u9664\u5916",id:"\u9664\u5916",children:[],level:2},{value:"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b",id:"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b",children:[],level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",children:[],level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",children:[],level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",children:[],level:2}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.13.0"),(0,r.kt)("p",null,"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b3\u30de\u30f3\u30c9\u3092\u306e\u7279\u5b9a\u306e\u4e00\u90e8\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5236\u9650\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"pnpm \u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u540d\u524d\u307e\u305f\u306f\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3067\u9078\u629e\u3059\u308b\u305f\u3081\u306e\u8c4a\u5bcc\u306a\u30bb\u30ec\u30af\u30bf\u69cb\u6587\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30bb\u30ec\u30af\u30bf\u30fc\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," \u30d5\u30e9\u30b0\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"Lerna \u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3068 pnpm \u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u6bd4\u8f03\u3059\u308b\u8a18\u4e8b (\u82f1\u8a9e)")))),(0,r.kt)("h2",{id:"matching"},"Matching"),(0,r.kt)("h3",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.13.0"),(0,r.kt)("p",null,"\u5b8c\u5168\u306b\u4e00\u81f4\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u305d\u306e\u540d\u524d (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") \u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3082\u3057\u304f\u306f\u3001\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30d1\u30c3\u30b1\u30fc\u30b8\u3059\u3079\u3066\u3092\u9078\u629e\u3067\u304d\u307e\u3059 (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/*"),") \u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,r.kt)("p",null,"v6.19.0\u4ee5\u964d:"),(0,r.kt)("p",null,"Specifying the scope of the package is optional, so ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter=core")," will pick ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," is not found. However, if the workspace has multiple packages with the same name (for instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/core"),"), then filtering without scope will pick nothing."),(0,r.kt)("h3",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.13.0"),(0,r.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u306e (\u76f4\u63a5\u304a\u3088\u3073\u9593\u63a5\u306e) \u4f9d\u5b58\u95a2\u4fc2\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u672b\u5c3e\u306b\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u3092\u4ed8\u3051\u307e\u3059\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"<package_name>..."),"\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u3068\u305d\u306e\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,r.kt)("p",null,"\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30eb\u30fc\u30c8\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,r.kt)("h3",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.4.0"),(0,r.kt)("p",null,"\u30eb\u30fc\u30c8\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9664\u3044\u305f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e (\u76f4\u63a5\u3068\u9593\u63a5\u306e\u4e21\u65b9\u306e) \u4f9d\u5b58\u95a2\u4fc2\u306e\u307f\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u5f8c\u308d\u3001\u524d\u8ff0\u306e\u4e09\u70b9\u30ea\u30fc\u30c0\u306e\u524d\u306b\u30ad\u30e3\u30ec\u30c3\u30c8\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u81ea\u8eab\u3092\u9664\u3044\u305f\u3059\u3079\u3066\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u4f9d\u5b58\u95a2\u4fc2\u306b\u3064\u3044\u3066\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,r.kt)("h3",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.14.0"),(0,r.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u306e (\u76f4\u63a5\u304a\u3088\u3073\u9593\u63a5\u306e) \u4f9d\u5b58\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u524d\u306b\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"...<package_name>"),"\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u3068\u305d\u308c\u306b\u4f9d\u5b58\u3059\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,r.kt)("h3",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.4.0"),(0,r.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e (\u76f4\u63a5\u304a\u3088\u3073\u9593\u63a5\u306e) \u4f9d\u5b58\u306e\u307f\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u524d\u306b\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u3068\u305d\u308c\u306b\u7d9a\u304f\u30ad\u30e3\u30ec\u30c3\u30c8\u3092\u4ed8\u3051\u307e\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u81ea\u8eab\u3092\u9664\u3044\u305f\u3059\u3079\u3066\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u306b\u4f9d\u5b58\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,r.kt)("h3",{id:"--filter-directory"},"--filter ./","<","directory>"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.15.0"),(0,r.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u306e\u4e0b\u306b\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u76f8\u5bfe\u30d1\u30b9 (\u901a\u5e38\u306f POSIX \u30d5\u30a9\u30fc\u30de\u30c3\u30c8) \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--filter-directory-1"},"--filter {","<","directory>}"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.7.0"),(0,r.kt)("p",null,"\u6307\u5b9a\u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4e0b\u306b\u3042\u308b\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u542b\u3081\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u306f\u3001\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u304a\u3088\u3073\u30ad\u30e3\u30ec\u30c3\u30c8\u6f14\u7b97\u5b50\u3068\u3068\u3082\u306b\u4f7f\u7528\u3057\u3066\u3001\u4f9d\u5b58 / \u88ab\u4f9d\u5b58\u95a2\u4fc2\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,r.kt)("p",null,"\u307e\u305f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"[<since>]")," \u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e\u5909\u66f4\u306e\u3042\u3063\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u307f\u3092\u3059\u3079\u3066\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages}[origin/master]" <cmd>\npnpm --filter "...{packages}[origin/master]" <cmd>\npnpm --filter "{packages}[origin/master]..." <cmd>\npnpm --filter "...{packages}[origin/master]..." <cmd>\n')),(0,r.kt)("p",null,"\u307e\u305f\u3001\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30bf\u30fc\u30f3\u306b\u4e00\u81f4\u3059\u308b\u540d\u524d\u3092\u6301\u3064\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components}" <cmd>\npnpm --filter "@babel/*{components}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components}[origin/master]" <cmd>\n')),(0,r.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.6.0"),(0,r.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30b3\u30df\u30c3\u30c8 / \u30d6\u30e9\u30f3\u30c1\u4ee5\u964d\u306b\u5909\u66f4\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u4f9d\u5b58 / \u88ab\u4f9d\u5b58\u95a2\u4fc2\u3092\u542b\u3081\u308b\u305f\u3081\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"...")," \u63a5\u982d\u8f9e / \u63a5\u5c3e\u8f9e\u3092\u4ed8\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"master")," \u4ee5\u964d\u306e\u3059\u3079\u3066\u306e\u5909\u66f4\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,r.kt)("h2",{id:"\u9664\u5916"},"\u9664\u5916"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av5.8.0"),(0,r.kt)("p",null,'\u3044\u305a\u308c\u306e\u30d5\u30a3\u30eb\u30bf\u30bb\u30ec\u30af\u30bf\u3082\u3001\u5148\u982d\u306b "!" \u304c\u3042\u308b\u5834\u5408\u306f\u9664\u5916\u6f14\u7b97\u5b50\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002 zsh\uff08\u304a\u3088\u3073\u304a\u305d\u3089\u304f\u4ed6\u306e\u30b7\u30a7\u30eb\uff09\u3067\u306f\u3001"!" \u306f\u30a8\u30b9\u30b1\u30fc\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a ',(0,r.kt)("inlineCode",{parentName:"p"},"\\!"),"\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u3092\u9664\u304f\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b3\u30de\u30f3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,r.kt)("p",null,"\u305d\u3057\u3066\u3001\u6b21\u306e\u4f8b\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4e0b\u306b\u306a\u3044\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,r.kt)("h2",{id:"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b"},"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b"),(0,r.kt)("p",null,"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u3059\u308b\u969b\u306f\u3001\u5c11\u306a\u304f\u3068\u3082 1 \u3064\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u306b\u4e00\u81f4\u3059\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u53d6\u5f97\u3055\u308c\u307e\u3059\u3002 \u5fc5\u8981\u306a\u6570\u3060\u3051\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,r.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.2.0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," \u3068\u540c\u3058\u52d5\u4f5c\u3092\u3057\u307e\u3059\u304c\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u4f9d\u5b58\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u9078\u629e\u3059\u308b\u969b\u306b\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u306f\u9664\u5916\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av5.14.0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"test-pattern")," \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u304c\u30c6\u30b9\u30c8\u306b\u95a2\u9023\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u691c\u51fa\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u3088\u3046\u306a\u5909\u66f4\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u542b\u307e\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,r.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,r.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.16.0"),(0,r.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,r.kt)("p",null,"\u4f7f\u7528\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}d.isMDXComponent=!0}}]);