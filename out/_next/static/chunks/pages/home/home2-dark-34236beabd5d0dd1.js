(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1276],{2494:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/home2-dark",function(){return s(9029)}])},6802:function(e,t){"use strict";t.Z=function(){window.addEventListener("scroll",(function(){var e=window.pageYOffset;document.querySelector(".fixed-slider .caption")&&document.querySelectorAll(".fixed-slider .caption").forEach((function(t){t.style.transform="translate3d(0, "+-.2*e+"px, 0)",t.style.opacity=1-e/600}))}))}},8063:function(e,t){"use strict";t.Z=function(){var e,t=document.querySelectorAll(".gallery");t.length>=1&&t.forEach((function(t){e=new Isotope(t,{itemSelector:".items"})}));var s=document.querySelector(".filtering");if(s){var r=function(e){e.addEventListener("click",(function(t){matchesSelector(t.target,"span")&&(e.querySelector(".active").classList.remove("active"),t.target.classList.add("active"))}))};s.addEventListener("click",(function(t){if(matchesSelector(t.target,"span")){var s=t.target.getAttribute("data-filter");s=s,e.arrange({filter:s})}}));for(var a=document.querySelectorAll(".filtering"),i=0,n=a.length;i<n;i++){r(a[i])}}}},5850:function(e,t){"use strict";t.Z=function(){document.querySelector(".swiper-pagination")&&(document.querySelector(".swiper-pagination").innerHTML=document.querySelector(".swiper-pagination").innerHTML.replace(" / ",""))}},1240:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var r=s(5893),a=s(7294),i=s(8636),n=s(1664),l=s(8063),c=JSON.parse('[{"id":1,"image":"/img/portfolio/mas/01.jpg","title":"Creativity Demand","tags":["Design","WordPress"],"filterCategory":["graphic"]},{"id":2,"image":"/img/portfolio/mas/02.jpg","title":"Through The Breaking","tags":["Design","WordPress"],"filterCategory":["web"]},{"id":3,"image":"/img/portfolio/mas/03.jpg","title":"Create With Creatives","tags":["Design","WordPress"],"filterCategory":["brand"]},{"id":4,"image":"/img/portfolio/mas/04.jpg","title":"Energies of Love","tags":["Design","WordPress"],"filterCategory":["graphic"]},{"id":5,"image":"/img/portfolio/mas/05.jpg","title":"See It Yourself","tags":["Design","WordPress"],"filterCategory":["web"]},{"id":6,"image":"/img/portfolio/mas/06.jpg","title":"Blast From The Past","tags":["Design","WordPress"],"filterCategory":["brand"]}]');function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=[],r=!0,a=!1,i=void 0;try{for(var n,l=e[Symbol.iterator]();!(r=(n=l.next()).done)&&(s.push(n.value),!t||s.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return s}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(e){var t=e.column,s=e.filterPosition,d=e.hideFilter,u=e.hideSectionTitle,f=o(a.useState(!1),2),h=f[0],m=f[1];return a.useEffect((function(){m(!0),h&&setTimeout((function(){(0,l.Z)()}),1e3)}),[h]),(0,r.jsxs)("section",{className:"portfolio section-padding pb-70",children:[!u&&(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"sec-head custom-font",children:[(0,r.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Portfolio"}),(0,r.jsx)(i.Z,{children:(0,r.jsx)("h3",{className:"wow words chars splitting","data-splitting":!0,children:"Our Works."})}),(0,r.jsx)("span",{className:"tbg text-right",children:"Portfolio"})]})}),(0,r.jsx)("div",{className:"".concat(3===t?"container-fluid":"container"),children:(0,r.jsxs)("div",{className:"row",children:[!d&&(0,r.jsx)("div",{className:"filtering ".concat("center"===s?"text-center":"left"===s?"text-left":"text-right"," col-12"),children:(0,r.jsxs)("div",{className:"filter",children:[(0,r.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,r.jsx)("span",{"data-filter":".brand",children:"Branding"}),(0,r.jsx)("span",{"data-filter":".web",children:"Mobile App"}),(0,r.jsx)("span",{"data-filter":".graphic",children:"Creative"})]})}),(0,r.jsx)("div",{className:"gallery full-width",children:c.map((function(e,s){return(0,r.jsxs)("div",{className:"".concat(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12"," items ").concat(e.filterCategory," wow fadeInUp ").concat(2===e.id&&3==t||1===e.id&&2==t?"lg-mr":""),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:e.image,alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:e.title}),(0,r.jsx)("span",{children:e.tags.map((function(t,s){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(n.default,{href:"/works4/works4-dark",children:t}),s==e.tags.length-1?"":","]},3*s)}))})]})]},e.id)}))})]})})]})}},8636:function(e,t,s){"use strict";var r=s(5893),a=s(7294);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?i(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=o(e);if(t){var a=o(this).constructor;s=Reflect.construct(r,arguments,a)}else s=r.apply(this,arguments);return d(this,s)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(f,e);var t,s,o,d=h(f);function f(){var e;return n(this,f),c(i(e=d.apply(this,arguments)),"target",a.createRef()),c(i(e),"split",(function(){e.target.current&&Splitting({target:e.target.current})})),c(i(e),"componentDidMount",e.split),c(i(e),"componentDidUpdate",e.split),e}return t=f,(s=[{key:"render",value:function(){return(0,r.jsx)("div",{ref:this.target,children:this.props.children})}}])&&l(t.prototype,s),o&&l(t,o),f}(a.Component);t.Z=m},2532:function(e,t,s){"use strict";var r=s(5893),a=(s(7294),s(9008));t.Z=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("link",{rel:"stylesheet",href:"/css/dark.css"})}),t]})}},9029:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return k}});var r=s(5893),a=s(7294),i=s(1664),n=s(8636),l=function(){return(0,r.jsx)("section",{className:"blc-sec section-padding pb-0",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-7",children:(0,r.jsxs)("div",{className:"intro md-mb30",children:[(0,r.jsxs)("div",{className:"sub-title",children:[(0,r.jsx)("h6",{children:"Know Us Better"}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]}),(0,r.jsx)(n.Z,{children:(0,r.jsx)("h2",{className:"extra-title wow words chars splitting","data-splitting":!0,children:"We help to create strategies, design & development."})})]})}),(0,r.jsx)("div",{className:"col-lg-5 valign",children:(0,r.jsxs)("div",{className:"full-width",children:[(0,r.jsx)(n.Z,{children:(0,r.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:"We never underestimate any parts of each project as they're all essential to meeting the ultimate goal. you'll be engaged in with our positive and enthusiastic attitude."})}),(0,r.jsx)(n.Z,{children:(0,r.jsx)(i.default,{href:"/about/about-dark",children:(0,r.jsx)("a",{className:"simple-btn custom-font mt-20 wow words chars splitting","data-splitting":!0,children:(0,r.jsx)("span",{children:"Know More"})})})})]})})]})})})},c=s(621),o=s(6224),d=s(1690),u=s(3526),f=s(2873),h=s(8116),m=(s(933),s(8770),s(92),s(6802)),p=s(5850);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=[],r=!0,a=!1,i=void 0;try{for(var n,l=e[Symbol.iterator]();!(r=(n=l.next()).done)&&(s.push(n.value),!t||s.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return s}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}h.ZP.use([h.W_,h.tl,h.VS,h.pt]);var x=function(){var e=g(a.useState(!0),2),t=e[0],s=e[1];a.useEffect((function(){(0,m.Z)(),setTimeout((function(){s(!1),(0,p.Z)()}),1e3)}),[]);var l=a.useRef(null),c=a.useRef(null),o=a.useRef(null);return(0,r.jsx)("header",{className:"slider slider-prlx",children:(0,r.jsxs)("div",{className:"swiper-container parallax-slider",children:[t?null:(0,r.jsx)(f.t,{speed:1e3,autoplay:!0,parallax:!0,navigation:{prevEl:l.current,nextEl:c.current},pagination:{type:"fraction",clickable:!0,el:o.current},onBeforeInit:function(e){e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=c.current,e.params.pagination.el=o.current},onSwiper:function(e){setTimeout((function(){for(var t=0;t<e.slides.length;t++)e.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=c.current,e.params.pagination.el=o.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update(),e.pagination.destroy(),e.pagination.init(),e.pagination.update()}))},className:"swiper-wrapper",slidesPerView:1,children:u.map((function(e){return(0,r.jsx)(f.o,{className:"swiper-slide",children:(0,r.jsx)("div",{className:"bg-img valign",style:{backgroundImage:"url(".concat(e.image,")")},"data-overlay-dark":"6",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-12",children:(0,r.jsxs)("div",{className:"caption dig",children:[(0,r.jsx)(n.Z,{children:(0,r.jsx)("h1",{className:"words chars splitting",children:"object"===typeof e.title?(0,r.jsxs)(r.Fragment,{children:[e.title.first,(0,r.jsx)("div",{className:"tline",children:e.title.second})]}):e.title})}),(0,r.jsx)(i.default,{href:"/works2/works2-dark",children:(0,r.jsx)("a",{className:"simple-btn mt-50",children:(0,r.jsx)("span",{children:"Discover Works"})})})]})})})})})},e.id)}))}),(0,r.jsxs)("div",{className:"setone setwo",children:[(0,r.jsx)("div",{ref:c,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})}),(0,r.jsx)("div",{ref:l,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:(0,r.jsx)("i",{className:"fas fa-chevron-left"})})]}),(0,r.jsx)("div",{ref:o,className:"swiper-pagination top botm custom-font"}),(0,r.jsxs)("div",{className:"social-icon",children:[(0,r.jsx)("a",{href:"#0",children:(0,r.jsx)("i",{className:"fab fa-facebook-f"})}),(0,r.jsx)("a",{href:"#0",children:(0,r.jsx)("i",{className:"fab fa-twitter"})}),(0,r.jsx)("a",{href:"#0",children:(0,r.jsx)("i",{className:"fab fa-behance"})}),(0,r.jsx)("a",{href:"#0",children:(0,r.jsx)("i",{className:"fab fa-pinterest-p"})})]})]})})},j=s(4848),v=s(1240),w=function(){return(0,r.jsx)("section",{className:"services section-padding",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"row rone",children:[(0,r.jsx)("div",{className:"col-lg-3 wow fadeInUp","data-wow-delay":".4s",children:(0,r.jsxs)("div",{className:"mas-item",children:[(0,r.jsx)("span",{className:"icon pe-7s-monitor"}),(0,r.jsxs)("h6",{children:["Website ",(0,r.jsx)("br",{})," Developments"]}),(0,r.jsx)("div",{className:"text-right",children:(0,r.jsx)(i.default,{href:"/about/about-dark",children:(0,r.jsx)("a",{className:"more",children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,r.jsx)("div",{className:"bg-color"})]})}),(0,r.jsx)("div",{className:"col-lg-3 offset-lg-1 wow fadeInUp","data-wow-delay":".4s",children:(0,r.jsxs)("div",{className:"mas-item",children:[(0,r.jsx)("span",{className:"icon pe-7s-camera"}),(0,r.jsxs)("h6",{children:["Product ",(0,r.jsx)("br",{})," Photography"]}),(0,r.jsx)("div",{className:"text-right",children:(0,r.jsx)(i.default,{href:"/about/about-dark",children:(0,r.jsx)("a",{className:"more",children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,r.jsx)("div",{className:"bg-color"})]})}),(0,r.jsx)("div",{className:"col-lg-3 offset-lg-1 wow fadeInUp","data-wow-delay":".4s",children:(0,r.jsxs)("div",{className:"mas-item",children:[(0,r.jsx)("span",{className:"icon pe-7s-phone"}),(0,r.jsxs)("h6",{children:["Mobile App ",(0,r.jsx)("br",{})," Devlopment"]}),(0,r.jsx)("div",{className:"text-right",children:(0,r.jsx)(i.default,{href:"/about/about-dark",children:(0,r.jsx)("a",{className:"more",children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,r.jsx)("div",{className:"bg-color"})]})})]}),(0,r.jsxs)("div",{className:"row rtwo",children:[(0,r.jsx)("div",{className:"col-lg-3 offset-lg-1 wow fadeInUp","data-wow-delay":".4s",children:(0,r.jsxs)("div",{className:"mas-item",children:[(0,r.jsx)("span",{className:"icon pe-7s-diskette"}),(0,r.jsxs)("h6",{children:["Document ",(0,r.jsx)("br",{})," Legal Policy"]}),(0,r.jsx)("div",{className:"text-right",children:(0,r.jsx)(i.default,{href:"/about/about-dark",children:(0,r.jsx)("a",{className:"more",children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,r.jsx)("div",{className:"bg-color"})]})}),(0,r.jsx)("div",{className:"col-lg-3 offset-lg-1 wow fadeInUp","data-wow-delay":".4s",children:(0,r.jsxs)("div",{className:"mas-item",children:[(0,r.jsx)("span",{className:"icon pe-7s-help2"}),(0,r.jsxs)("h6",{children:["Managing ",(0,r.jsx)("br",{})," Community"]}),(0,r.jsx)("div",{className:"text-right",children:(0,r.jsx)(i.default,{href:"/about/about-dark",children:(0,r.jsx)("a",{className:"more",children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,r.jsx)("div",{className:"bg-color"})]})}),(0,r.jsx)("div",{className:"col-lg-3 offset-lg-1 wow fadeInUp","data-wow-delay":".4s",children:(0,r.jsxs)("div",{className:"mas-item",children:[(0,r.jsx)("span",{className:"icon pe-7s-arc"}),(0,r.jsxs)("h6",{children:["Coustomer ",(0,r.jsx)("br",{})," Engagement"]}),(0,r.jsx)("div",{className:"text-right",children:(0,r.jsx)(i.default,{href:"/about/about-dark",children:(0,r.jsx)("a",{className:"more",children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,r.jsx)("div",{className:"bg-color"})]})})]})]})})},N=s(5222),b=s(3205),y=s(2532),k=function(){var e=a.useRef(null),t=a.useRef(null);return a.useEffect((function(){var t=e.current;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}),[e]),(0,r.jsxs)(y.Z,{children:[(0,r.jsx)(j.Z,{nr:e,lr:t}),(0,r.jsx)(x,{}),(0,r.jsx)(l,{}),(0,r.jsx)(w,{}),(0,r.jsx)(b.Z,{}),(0,r.jsx)(N.Z,{theme:"dark",subBG:!0}),(0,r.jsx)(v.Z,{column:3,filterPosition:"center"}),(0,r.jsx)(o.Z,{theme:"dark",subBG:!0}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(d.Z,{})]})}},8770:function(){},3526:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":{"first":"Unique","second":"brand Stories"},"image":"/img/slid/01.jpg"},{"id":2,"title":{"first":"Digital","second":"Design Awards"},"image":"/img/slid/03.jpg"},{"id":3,"title":{"first":"Original","second":"Solutions"},"image":"/img/slid/02.jpg"}]')}},function(e){e.O(0,[6468,9121,4104,7842,8271,4848,6812,3599,9774,2888,179],(function(){return t=2494,e(e.s=t);var t}));var t=e.O();_N_E=t}]);