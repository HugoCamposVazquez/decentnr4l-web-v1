"use strict";
exports.id = 5619;
exports.ids = [5619];
exports.modules = {

/***/ 4508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Marquee */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);




const Marquee = ()=>{
    gsap.registerPlugin(ScrollTrigger);
    const images = gsap.utils.toArray("img");
    const loader = document.querySelector(".loader--text");
    const updateProgress = (instance)=>loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`
    ;
    const showDemo = ()=>{
        document.body.style.overflow = "auto";
        document.scrollingElement.scrollTo(0, 0);
        gsap.to(document.querySelector(".loader"), {
            autoAlpha: 0
        });
        gsap.utils.toArray("section").forEach((section, index)=>{
            const w = section.querySelector(".wrapper");
            const [x, xEnd] = index % 2 ? [
                "100%",
                (w.scrollWidth - section.offsetWidth) * -1
            ] : [
                w.scrollWidth * -1,
                0
            ];
            gsap.fromTo(w, {
                x
            }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: 0.5
                }
            });
        });
    };
    imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
    // useEffect(
    // 	() => {
    // 		showDemo();
    // 	},
    // 	[ 0 ]
    // );
    return(/*#__PURE__*/ _jsxs("div", {
        className: "primary--animated--wrapper",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "loader df aic jcc"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "demo-wrapper",
                children: [
                    /*#__PURE__*/ _jsx("section", {
                        className: "demo-text",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "wrapper text",
                            children: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                        })
                    }),
                    /*#__PURE__*/ _jsx("section", {
                        className: "demo-text",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "wrapper text",
                            children: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                        })
                    })
                ]
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Marquee)));


/***/ }),

/***/ 5619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_About_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5106);
/* harmony import */ var _components_About_intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2802);
/* harmony import */ var _components_Call_to_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(621);
/* harmony import */ var _components_Clients1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6224);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1690);
/* harmony import */ var _components_Minimal_area__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9742);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/* harmony import */ var _components_Services4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(569);
/* harmony import */ var _components_Skills_circle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5222);
/* harmony import */ var _components_Team1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5410);
/* harmony import */ var _components_Video_with_testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3205);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2532);
/* harmony import */ var _components_Navbar_full_menu_navbar_full_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2585);
/* harmony import */ var _components_Showcases_one_center__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1145);
/* harmony import */ var _components_marquee__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4508);
/* harmony import */ var _components_FullPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1967);
/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9343);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Showcases_one_center__WEBPACK_IMPORTED_MODULE_15__]);
_components_Showcases_one_center__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



















const INICIO = ()=>{
    /*   const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]); */ return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Call_to_action__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                subBG: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_intro__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services4__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                withPadding: true,
                withOutTitle: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Video_with_testimonials__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skills_circle__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                subBG: true,
                theme: "dark"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Showcases_one_center__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Team1__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Minimal_area__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Clients1__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                theme: "dark"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contact_contact__WEBPACK_IMPORTED_MODULE_18__["default"], {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INICIO);

});

/***/ })

};
;