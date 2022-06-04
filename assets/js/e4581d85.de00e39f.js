"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[920],{4330:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return k}});var n=r(8855);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),k=o,m=f["".concat(s,".").concat(k)]||f[k]||p[k]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7456:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(1528),o=r(2854),a=(r(8855),r(4330)),c=["components"],i={sidebar_position:1},s="useStarknet",u={unversionedId:"hooks/starknet",id:"hooks/starknet",title:"useStarknet",description:"Hook to access the current instance of the underlying StarkNet library.",source:"@site/docs/hooks/starknet.md",sourceDirName:"hooks",slug:"/hooks/starknet",permalink:"/starknet-react/hooks/starknet",draft:!1,editUrl:"https://github.com/apibara/starknet-react/tree/main/website/docs/hooks/starknet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"StarkNet React Demo",permalink:"/starknet-react/demo"},next:{title:"useStarknetBlock",permalink:"/starknet-react/hooks/block"}},l={},p=[{value:"Return Values",id:"return-values",level:2}],f={toc:p};function k(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usestarknet"},"useStarknet"),(0,a.kt)("p",null,"Hook to access the current instance of the underlying StarkNet library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useStarknet } from '@starknet-react/core'\n\nconst { account, connect, disconnect, connectors, library, error } = useStarknet()\n")),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  account?: string\n  connect: (Connector) => Promise<void>\n  disconnect: (Connector) => Promise<void>\n  connectors: Connector[]\n  library: ProviderInterface\n  error?: string\n}\n")))}k.isMDXComponent=!0}}]);