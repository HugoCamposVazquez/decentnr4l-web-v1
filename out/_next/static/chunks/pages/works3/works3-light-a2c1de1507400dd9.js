(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6261],{4321:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works3/works3-light",function(){return r(7773)}])},2115:function(e,t){"use strict";t.Z=function(){window.addEventListener("scroll",(function(){var e=window.pageYOffset;document.querySelector(".fixed-slider .capt .parlx")&&(document.querySelector(".fixed-slider .capt .parlx").style.transform="translate3d(0, "+-.2*e+"px, 0)",document.querySelector(".fixed-slider .capt .parlx").style.opacity=1-e/600)}))}},8063:function(e,t){"use strict";t.Z=function(){var e,t=document.querySelectorAll(".gallery");t.length>=1&&t.forEach((function(t){e=new Isotope(t,{itemSelector:".items"})}));var r=document.querySelector(".filtering");if(r){var n=function(e){e.addEventListener("click",(function(t){matchesSelector(t.target,"span")&&(e.querySelector(".active").classList.remove("active"),t.target.classList.add("active"))}))};r.addEventListener("click",(function(t){if(matchesSelector(t.target,"span")){var r=t.target.getAttribute("data-filter");r=r,e.arrange({filter:r})}}));for(var i=document.querySelectorAll(".filtering"),s=0,a=i.length;s<a;s++){n(i[s])}}}},1240:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),i=r(7294),s=r(8636),a=r(1664),o=r(8063),c=JSON.parse('[{"id":1,"image":"/img/portfolio/mas/01.jpg","title":"Creativity Demand","tags":["Design","WordPress"],"filterCategory":["graphic"]},{"id":2,"image":"/img/portfolio/mas/02.jpg","title":"Through The Breaking","tags":["Design","WordPress"],"filterCategory":["web"]},{"id":3,"image":"/img/portfolio/mas/03.jpg","title":"Create With Creatives","tags":["Design","WordPress"],"filterCategory":["brand"]},{"id":4,"image":"/img/portfolio/mas/04.jpg","title":"Energies of Love","tags":["Design","WordPress"],"filterCategory":["graphic"]},{"id":5,"image":"/img/portfolio/mas/05.jpg","title":"See It Yourself","tags":["Design","WordPress"],"filterCategory":["web"]},{"id":6,"image":"/img/portfolio/mas/06.jpg","title":"Blast From The Past","tags":["Design","WordPress"],"filterCategory":["brand"]}]');function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,s=c}finally{try{n||null==o.return||o.return()}finally{if(i)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(e){var t=e.column,r=e.filterPosition,u=e.hideFilter,d=e.hideSectionTitle,f=l(i.useState(!1),2),h=f[0],m=f[1];return i.useEffect((function(){m(!0),h&&setTimeout((function(){(0,o.Z)()}),1e3)}),[h]),(0,n.jsxs)("section",{className:"portfolio section-padding pb-70",children:[!d&&(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"sec-head custom-font",children:[(0,n.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Portfolio"}),(0,n.jsx)(s.Z,{children:(0,n.jsx)("h3",{className:"wow words chars splitting","data-splitting":!0,children:"Our Works."})}),(0,n.jsx)("span",{className:"tbg text-right",children:"Portfolio"})]})}),(0,n.jsx)("div",{className:"".concat(3===t?"container-fluid":"container"),children:(0,n.jsxs)("div",{className:"row",children:[!u&&(0,n.jsx)("div",{className:"filtering ".concat("center"===r?"text-center":"left"===r?"text-left":"text-right"," col-12"),children:(0,n.jsxs)("div",{className:"filter",children:[(0,n.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,n.jsx)("span",{"data-filter":".brand",children:"Branding"}),(0,n.jsx)("span",{"data-filter":".web",children:"Mobile App"}),(0,n.jsx)("span",{"data-filter":".graphic",children:"Creative"})]})}),(0,n.jsx)("div",{className:"gallery full-width",children:c.map((function(e,r){return(0,n.jsxs)("div",{className:"".concat(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12"," items ").concat(e.filterCategory," wow fadeInUp ").concat(2===e.id&&3==t||1===e.id&&2==t?"lg-mr":""),"data-wow-delay":".4s",children:[(0,n.jsx)("div",{className:"item-img",children:(0,n.jsx)(a.default,{href:"/project-details2/project-details2-dark",children:(0,n.jsxs)("a",{className:"imago wow",children:[(0,n.jsx)("img",{src:e.image,alt:"image"}),(0,n.jsx)("div",{className:"item-img-overlay"})]})})}),(0,n.jsxs)("div",{className:"cont",children:[(0,n.jsx)("h6",{children:e.title}),(0,n.jsx)("span",{children:e.tags.map((function(t,r){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(a.default,{href:"/works4/works4-dark",children:t}),r==e.tags.length-1?"":","]},3*r)}))})]})]},e.id)}))})]})})]})}},2623:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(){return(0,n.jsx)("footer",{className:"footer-half sub-bg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"copyrights text-center mt-0",children:(0,n.jsxs)("p",{children:["\xa9 2022, Avo Template. Made with passion by",(0,n.jsx)("a",{href:"#0",children:"ThemesCamp"}),"."]})})})})}},8636:function(e,t,r){"use strict";var n=r(5893),i=r(7294);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?s(e):t}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var i=l(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return u(this,r)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(f,e);var t,r,l,u=h(f);function f(){var e;return a(this,f),c(s(e=u.apply(this,arguments)),"target",i.createRef()),c(s(e),"split",(function(){e.target.current&&Splitting({target:e.target.current})})),c(s(e),"componentDidMount",e.split),c(s(e),"componentDidUpdate",e.split),e}return t=f,(r=[{key:"render",value:function(){return(0,n.jsx)("div",{ref:this.target,children:this.props.children})}}])&&o(t.prototype,r),l&&o(t,l),f}(i.Component);t.Z=m},371:function(e,t,r){"use strict";var n=r(5893),i=r(7294),s=r(9008);t.Z=function(e){var t=e.children;return e.bdOn&&i.useEffect((function(){return document.querySelector("body").classList.add("bd-dark"),function(){document.querySelector("body").classList.remove("bd-dark")}})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.default,{children:(0,n.jsx)("link",{rel:"stylesheet",href:"/css/light.css"})}),t]})}},7773:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(7294),s=r(371),a=r(4848),o=r(2115),c=r(2623),l=r(1240);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,s=c}finally{try{n||null==o.return||o.return()}finally{if(i)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e=i.useRef(null),t=i.useRef(null),r=i.useRef(null),d=i.useRef(null),f=u(i.useState(!1),2),h=f[0],m=f[1];return i.useEffect((function(){document.querySelector("body").classList.add("menubarblack"),m(!0),h&&(0,o.Z)()}),[h]),i.useEffect((function(){setInterval((function(){if(e.current)var r=e.current.offsetHeight;t.current&&(t.current.style.marginTop=r+"px")}),1e3);var n=r.current;window.pageYOffset>300?n.classList.add("nav-scroll"):n.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?n.classList.add("nav-scroll"):n.classList.remove("nav-scroll")}))}),[e,t,r]),(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(a.Z,{nr:r,lr:d,theme:"themeL"}),(0,n.jsx)("header",{ref:e,className:"works-header fixed-slider hfixd valign",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsx)("div",{className:"col-lg-9 col-md-11 static",children:(0,n.jsxs)("div",{className:"capt mt-50",children:[(0,n.jsxs)("div",{className:"parlx",children:[(0,n.jsx)("h2",{className:"custom-font",children:"My amazing works"}),(0,n.jsx)("p",{children:"Creative way to showcase your works at their absolute best."})]}),(0,n.jsx)("div",{className:"bactxt custom-font valign",children:(0,n.jsx)("span",{className:"full-width",children:"Works"})})]})})})})}),(0,n.jsxs)("div",{ref:t,className:"main-content",children:[(0,n.jsx)(l.Z,{column:2,hideFilter:!0,hideSectionTitle:!0}),(0,n.jsx)(c.Z,{})]})]})}}},function(e){e.O(0,[6468,4848,9774,2888,179],(function(){return t=4321,e(e.s=t);var t}));var t=e.O();_N_E=t}]);