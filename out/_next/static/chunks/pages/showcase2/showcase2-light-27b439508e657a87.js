(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901,2972,1780],{4441:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcase2/showcase2-light",function(){return n(5215)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),s=n(387),c=n(7190);var l={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,i=s.useRouter(),f=o.default.useMemo((function(){var t=r(a.resolveHref(i,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?a.resolveHref(i,e.as):o||n}}),[i,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var w=(t=o.default.Children.only(v))&&"object"===typeof t&&t.ref,x=r(c.useIntersection({rootMargin:"200px"}),2),j=x[0],b=x[1],N=o.default.useCallback((function(e){j(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,j]);o.default.useEffect((function(){var e=b&&n&&a.isLocalURL(d),t="undefined"!==typeof g?g:i&&i.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(i,d,p,{locale:t})}),[p,d,b,g,n,i]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:s}))}(e,i,d,p,h,m,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&u(i,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof g?g:i&&i.locale,S=i&&i.isLocaleDomain&&a.getDomainLocale(p,k,i&&i.locales,i&&i.domainLocales);E.href=S||a.addBasePath(a.addLocale(p,k,i&&i.defaultLocale))}return o.default.cloneElement(t,E)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=i.useRef(),l=r(i.useState(!1),2),u=l[0],f=l[1],d=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map},2455:function(e,t,n){"use strict";n.d(t,{gw:function(){return i},Ji:function(){return o},U6:function(){return a},m7:function(){return s},mM:function(){return c}});var r=0;var i=function(e,t){setTimeout((function(){}),e)},o=function(e,t){setInterval(function(e){(r=Number(window.getComputedStyle(e).getPropertyValue("opacity")))<1?(r+=1,e.style.opacity=r):clearInterval(0)}(e),t)},a=function(e,t){setInterval(function(e){(r=Number(window.getComputedStyle(e).getPropertyValue("opacity")))>0?(r=0,e.style.opacity=r):clearInterval(0)}(e),t)},s=function(e){var t=[];if(!e.parentNode)return t;for(var n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&t.push(n),n=n.nextSibling;return t},c=function(e,t){e.style.left=t}},5850:function(e,t){"use strict";t.Z=function(){document.querySelector(".swiper-pagination")&&(document.querySelector(".swiper-pagination").innerHTML=document.querySelector(".swiper-pagination").innerHTML.replace(" / ",""))}},1145:function(e,t,n){"use strict";var r=n(5893),i=n(7294),o=n(1664),a=n(2873),s=n(265),c=n(8116),l=(n(933),n(92),n(8277),n(5850));function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}c.ZP.use([c.W_,c.VS,c.Gk]);t.Z=function(){var e=u(i.useState(!0),2),t=e[0],n=e[1];i.useEffect((function(){setTimeout((function(){n(!1),(0,l.Z)()}))}),[]);var c=i.useRef(null),f=i.useRef(null);return(0,r.jsx)("header",{className:"slider showcase-carus",children:(0,r.jsxs)("div",{id:"content-carousel-container-unq-1",className:"swiper-container",children:[t?null:(0,r.jsx)(a.t,{speed:100,mousewheel:!1,centeredSlides:!0,autoplay:!0,loop:!0,spaceBetween:30,navigation:{prevEl:c.current,nextEl:f.current},breakpoints:{0:{slidesPerView:1,spaceBetween:0},640:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:2,spaceBetween:200}},onBeforeInit:function(e){e.params.navigation.prevEl=c.current,e.params.navigation.nextEl=f.current},onSwiper:function(e){setTimeout((function(){for(var t=0;t<e.slides.length;t++)e.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=c.current,e.params.navigation.nextEl=f.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},className:"swiper-wrapper",slidesPerView:4,children:s.map((function(e){return(0,r.jsx)(a.o,{className:"swiper-slide",children:(0,r.jsxs)("div",{className:"bg-img valign",style:{backgroundImage:"url(".concat(e.image,")")},"data-overlay-dark":"1",children:[(0,r.jsx)("div",{className:"caption ontop",children:(0,r.jsx)("div",{className:"o-hidden",children:(0,r.jsx)("h1",{children:(0,r.jsx)(o.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("div",{className:"stroke",children:e.title.first}),(0,r.jsx)("span",{children:e.title.second})]})})})})}),(0,r.jsx)("div",{className:"copy-cap valign",children:(0,r.jsx)("div",{className:"cap",children:(0,r.jsx)("h1",{children:(0,r.jsx)(o.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("div",{className:"stroke",children:e.title.first}),(0,r.jsx)("span",{children:e.title.second})]})})})})})]})},e.id)}))}),(0,r.jsxs)("div",{className:"txt-botm",children:[(0,r.jsxs)("div",{ref:f,className:"swiper-button-next swiper-nav-ctrl cursor-pointer",children:[(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:" custom-font",children:"Next Slide"})}),(0,r.jsx)("div",{children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})})]}),(0,r.jsxs)("div",{ref:c,className:"swiper-button-prev swiper-nav-ctrl cursor-pointer",children:[(0,r.jsx)("div",{children:(0,r.jsx)("i",{className:"fas fa-chevron-left"})}),(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"custom-font",children:"Prev Slide"})})]})]})]})})}},371:function(e,t,n){"use strict";var r=n(5893),i=n(7294),o=n(9008);t.Z=function(e){var t=e.children;return e.bdOn&&i.useEffect((function(){return document.querySelector("body").classList.add("bd-dark"),function(){document.querySelector("body").classList.remove("bd-dark")}})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("link",{rel:"stylesheet",href:"/css/light.css"})}),t]})}},5215:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=(n(7294),n(2585)),o=n(1145),a=n(371);t.default=function(){return(0,r.jsxs)(a.Z,{bdOn:!0,children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(o.Z,{})]})}},8277:function(){},1664:function(e,t,n){e.exports=n(8418)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,i=e.attr,o=e.size,c=e.title,l=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},265:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":{"first":"Hoodie","second":"Jacket"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Eminem","second":"Style"},"image":"/img/portfolio/full/4.jpg","sub":"Design"},{"id":3,"title":{"first":"Black","second":"Panther"},"image":"/img/portfolio/full/5.jpg","sub":"Design"},{"id":4,"title":{"first":"Secret","second":"Office"},"image":"/img/portfolio/full/6.jpg","sub":"Design"}]')}},function(e){e.O(0,[5445,9121,2585,9774,2888,179],(function(){return t=4441,e(e.s=t);var t}));var t=e.O();_N_E=t}]);