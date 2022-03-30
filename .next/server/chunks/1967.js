"use strict";
exports.id = 1967;
exports.ids = [1967];
exports.modules = {

/***/ 1967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2532);
/* harmony import */ var _components_Navbar_full_menu_navbar_full_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);
/* harmony import */ var _About_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5106);
/* harmony import */ var _components_About_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2802);
/* harmony import */ var _components_Call_to_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(621);
/* harmony import */ var _components_Team1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5410);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1690);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7282);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pages_contact_contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9343);











// import "fullpage.js/vendors/scrolloverflow"; Optional. When using scrollOverflow:true


//import "./styles.css";
class FullpageWrapper extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
    }
    afterLoad(origin1, destination1, direction1) {
        console.log("After load: " + destination1.index);
    }
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_full_menu_navbar_full_menu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_11___default()), {
                    licenseKey: "232313123",
                    scrollOverflow: true,
                    onLeave: this.onLeave.bind(this),
                    afterLoad: this.afterLoad.bind(this),
                    render: ({ state , fullpageApi  })=>{
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "fullpage-wrapper",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "section section1",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                        className: "pages-header bg-img valign parallaxie",
                                        style: {
                                            backgroundImage: "url(/img/slid/video.gif)"
                                        },
                                        "data-overlay-dark": "5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "container inicio",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-lg-12",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "inicio-texto",
                                                            children: "SERVICIOS BLOKCHAIN"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "container segundo",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-lg-12",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "cont text-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "boton-inicio",
                                                                onClick: ()=>fullpageApi.moveTo(4, 0)
                                                                ,
                                                                children: "CONT\xc1CTANOS"
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "section section2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Team1__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        subBG: true
                                    })
                                })
                            ]
                        }));
                    }
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullpageWrapper);


/***/ })

};
;