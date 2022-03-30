"use strict";
exports.id = 9742;
exports.ids = [9742];
exports.modules = {

/***/ 9742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Minimal_area)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/common/customFunctions.js
var customFunctions = __webpack_require__(2455);
;// CONCATENATED MODULE: ./src/common/featuresEffect.js

const featuresEffect = ()=>{
    var featuresitems = document.querySelectorAll(".feat .items");
    if (featuresitems) {
        featuresitems.forEach((item)=>{
            item.onmouseover = function(event) {
                item.classList.add("active");
                let siblings = (0,customFunctions/* getSiblings */.m7)(item), siblingEl = siblings.map((e)=>e.classList.remove("active")
                );
            };
        });
    }
};
/* harmony default export */ const common_featuresEffect = (featuresEffect);

;// CONCATENATED MODULE: ./src/common/thumparallax.js
const thumparallax = ()=>{
    var imageUp = document.getElementsByClassName("thumparallax");
    if (imageUp) {
        new simpleParallax(imageUp, {
            delay: 1,
            scale: 1.1
        });
    }
};
const thumparallaxDown = ()=>{
    var imageDown = document.getElementsByClassName("thumparallax-down");
    if (imageDown) {
        new simpleParallax(imageDown, {
            orientation: "down",
            delay: 1,
            scale: 1.1
        });
    }
};

// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/components/Minimal-area/index.jsx

/* eslint-disable @next/next/no-img-element */ 



const MinimalArea = ()=>{
    external_react_default().useEffect(()=>{
        common_featuresEffect();
        setTimeout(()=>{
            thumparallaxDown();
        }, 1000);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "min-area sub-bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "thumparallax-down",
                                src: "/img/min-area.jpg",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "wow custom-font words chars splitting",
                                        "data-splitting": true,
                                        children: "About us."
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "wow txt words chars splitting",
                                        "data-splitting": true,
                                        children: "Our creative Ad agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players."
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "feat",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".2s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "1"
                                                        }),
                                                        " Our Mission"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".4s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "2"
                                                        }),
                                                        " Our Goals"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".6s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "3"
                                                        }),
                                                        " Why Us?"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Minimal_area = (MinimalArea);


/***/ })

};
;