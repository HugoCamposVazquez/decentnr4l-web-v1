(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4322],{7671:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcase4/showcase4-dark",function(){return n(6289)}])},2455:function(e,t,n){"use strict";n.d(t,{gw:function(){return r},Ji:function(){return s},U6:function(){return o},m7:function(){return a},mM:function(){return l}});var i=0;var r=function(e,t){setTimeout((function(){}),e)},s=function(e,t){setInterval(function(e){(i=Number(window.getComputedStyle(e).getPropertyValue("opacity")))<1?(i+=1,e.style.opacity=i):clearInterval(0)}(e),t)},o=function(e,t){setInterval(function(e){(i=Number(window.getComputedStyle(e).getPropertyValue("opacity")))>0?(i=0,e.style.opacity=i):clearInterval(0)}(e),t)},a=function(e){var t=[];if(!e.parentNode)return t;for(var n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&t.push(n),n=n.nextSibling;return t},l=function(e,t){e.style.left=t}},5850:function(e,t){"use strict";t.Z=function(){document.querySelector(".swiper-pagination")&&(document.querySelector(".swiper-pagination").innerHTML=document.querySelector(".swiper-pagination").innerHTML.replace(" / ",""))}},5217:function(e,t,n){"use strict";var i=n(2455);t.Z=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var t=document.createElement("div");t.classList.add("div-tooltip-sub"),document.body.appendChild(t),document.querySelectorAll("[data-tooltip-tit]").forEach((function(t){e=document.querySelector(".div-tooltip-tit"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-tit")})),t.addEventListener("mousemove",(function(t){(0,i.Ji)(e,800),e.style.top=t.pageY+10+"px",e.style.left=t.pageX+20+"px",e.style.padding="0px 10px"})),t.addEventListener("mouseleave",(function(){(0,i.U6)(e,800),e.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(e){t=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-sub")})),e.addEventListener("mousemove",(function(e){(0,i.Ji)(t,800),t.style.top=e.pageY-15+"px",t.style.left=e.pageX+30+"px",t.style.padding="5px 10px"})),e.addEventListener("mouseleave",(function(){(0,i.U6)(t,800),t.style.padding=0}))}))}},3781:function(e,t,n){"use strict";var i=n(5893),r=n(7294),s=n(1664),o=n(2873),a=n(265),l=n(8116),u=(n(933),n(8770),n(92),n(8277),n(5217)),c=n(5850);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(l){r=!0,s=l}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}l.ZP.use([l.W_,l.tl,l.VS,l.Gk]);t.Z=function(){var e=d(r.useState(!0),2),t=e[0],n=e[1];r.useEffect((function(){setTimeout((function(){n(!1),(0,u.Z)(),(0,c.Z)()}))}),[]);var l=r.useRef(null),p=r.useRef(null),f=r.useRef(null);return(0,i.jsxs)("header",{className:"slider showcase-grid",children:[(0,i.jsx)("div",{id:"content-carousel-container-unq-1",className:"swiper-container",children:t?null:(0,i.jsx)(o.t,{speed:1e3,mousewheel:!0,autoplay:!0,loop:!0,spaceBetween:30,navigation:{prevEl:l.current,nextEl:p.current},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4}},onBeforeInit:function(e){e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=p.current},onSwiper:function(e){setTimeout((function(){for(var t=0;t<e.slides.length;t++)e.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=p.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},className:"swiper-wrapper",slidesPerView:4,children:a.map((function(e){return(0,i.jsx)(o.o,{className:"swiper-slide",children:(0,i.jsx)(s.default,{passHref:!0,href:"/project-details2/project-details2-dark",children:(0,i.jsx)("div",{className:"bg-img",style:{backgroundImage:"url(".concat(e.image,")")},"data-tooltip-tit":e.title.first+" "+e.title.second,"data-tooltip-sub":e.sub})})},e.id)}))})}),(0,i.jsxs)("div",{className:"txt-botm",children:[(0,i.jsxs)("div",{ref:p,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)("span",{children:"Next Slide"})}),(0,i.jsx)("div",{children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})})]}),(0,i.jsxs)("div",{ref:l,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)("i",{className:"fas fa-chevron-left"})}),(0,i.jsx)("div",{children:(0,i.jsx)("span",{children:"Prev Slide"})})]}),(0,i.jsx)("div",{className:"swiper-pagination dots",ref:f})]})]})}},2532:function(e,t,n){"use strict";var i=n(5893),r=(n(7294),n(9008));t.Z=function(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.default,{children:(0,i.jsx)("link",{rel:"stylesheet",href:"/css/dark.css"})}),t]})}},6289:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=(n(7294),n(2585)),s=n(3781),o=n(2532);t.default=function(){return(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(s.Z,{})]})}},265:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":{"first":"Hoodie","second":"Jacket"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Eminem","second":"Style"},"image":"/img/portfolio/full/4.jpg","sub":"Design"},{"id":3,"title":{"first":"Black","second":"Panther"},"image":"/img/portfolio/full/5.jpg","sub":"Design"},{"id":4,"title":{"first":"Secret","second":"Office"},"image":"/img/portfolio/full/6.jpg","sub":"Design"}]')}},function(e){e.O(0,[5445,9121,8207,2585,9774,2888,179],(function(){return t=7671,e(e.s=t);var t}));var t=e.O();_N_E=t}]);