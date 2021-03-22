(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(85)),c=(t(87),{id:"performance_benchmark",title:"Performance benchmark"}),i={unversionedId:"performance_benchmark",id:"performance_benchmark",isDocsHomePage:!1,title:"Performance benchmark",description:"You can make sure that your machine satisfies the required technical specifications by running a performance benchmark. To do so, follow the steps below:",source:"@site/docs/performance_benchmark.md",slug:"/performance_benchmark",permalink:"/performance_benchmark",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/performance_benchmark.md",version:"current",sidebar:"sidebar",previous:{title:"Connect to a public node",permalink:"/polkadotjs_apps_public"},next:{title:"Writing Docs",permalink:"/contributing"}},u=[],s={toc:u};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can make sure that your machine satisfies the ",Object(o.b)("a",{parentName:"p",href:"/node_setup#00-required-technical-specifications"},"required technical specifications")," by running a performance benchmark. To do so, follow the steps below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n$ cd HydraDX-node/\n\n# Prepare for running the benchmark\n$ ./scripts/init.sh\n$ rustup default nightly\n\n# Run the benchmark\n$ ./scripts/check_performance.sh\n")),Object(o.b)("p",null,"After the benchmark executes you should see an output similar to the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"         Pallet          |   Time comparison (\xb5s)    |     diff*     |            |   Rerun\namm                      |    1066.00 vs 1045.80     |      20       |     OK     |\nexchange                 |    1105.00 vs 1049.10     |      55       |     OK     |\ntransaction_multi_payment|     289.00 vs 279.96      |       9       |     OK     |\n")),Object(o.b)("p",null,"If the values in the ",Object(o.b)("inlineCode",{parentName:"p"},"diff")," field are positive in all three cases, then your machine is suitable to run a HydraDX validator node."),Object(o.b)("p",null,"Join us at Discord if you would like to discuss your benchmark results, our community is always happy to help."))}l.isMDXComponent=!0},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),b=r,m=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return t?a.a.createElement(m,i(i({ref:n},s),{},{components:t})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return c}));var r=t(22),a=t(88);function o(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,i=void 0!==c&&c,u=o.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(i)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+l:l}(o,t,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},88:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))}}]);