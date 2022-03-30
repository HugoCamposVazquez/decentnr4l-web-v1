"use strict";
exports.id = 9343;
exports.ids = [9343];
exports.modules = {

/***/ 2209:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const ContactHeader = ({ sliderRef  })=>{
    const [pageLoaded, setPageLoaded] = React.useState(false);
    React.useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            addParlx();
        }
    }, [
        pageLoaded
    ]);
    return(/*#__PURE__*/ _jsx("header", {
        className: "works-header",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "col-lg-9 col-md-11",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "capt mt-50",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "parlx",
                                children: [
                                    /*#__PURE__*/ _jsxs("h2", {
                                        className: "custom-font",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                children: "Let's"
                                            }),
                                            "Talk About Your project."
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        children: "Feel free to ask me any question or let's do to talk about our future collaboration."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "bactxt custom-font valign",
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: "full-width",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ContactHeader)));


/***/ }),

/***/ 4637:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);



const ContactWithMap = ()=>{
    const messageRef = React.useRef(null);
    function validateEmail(value) {
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }
    const sendMessage = (ms)=>new Promise((r)=>setTimeout(r, ms)
        )
    ;
    return(/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("section", {
                className: "contact section-padding",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "form md-mb50",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "extra-title mb-50",
                                            children: "Get In Touch."
                                        }),
                                        /*#__PURE__*/ _jsx(Formik, {
                                            initialValues: {
                                                name: "",
                                                email: "",
                                                message: ""
                                            },
                                            onSubmit: async (values)=>{
                                                await sendMessage(500);
                                                alert(JSON.stringify(values, null, 2));
                                                // show message
                                                messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon.";
                                                // Reset the values
                                                values.name = "";
                                                values.email = "";
                                                values.message = "";
                                                // clear message
                                                setTimeout(()=>{
                                                    messageRef.current.innerText = "";
                                                }, 2000);
                                            },
                                            children: ({ errors , touched  })=>/*#__PURE__*/ _jsxs(Form, {
                                                    id: "contact-form",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "messages",
                                                            ref: messageRef
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "controls",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "form-group",
                                                                    children: /*#__PURE__*/ _jsx(Field, {
                                                                        id: "form_name",
                                                                        type: "text",
                                                                        name: "name",
                                                                        placeholder: "Name",
                                                                        required: "required"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "form-group",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(Field, {
                                                                            validate: validateEmail,
                                                                            id: "form_email",
                                                                            type: "email",
                                                                            name: "email",
                                                                            placeholder: "Email",
                                                                            required: "required"
                                                                        }),
                                                                        errors.email && touched.email && /*#__PURE__*/ _jsx("div", {
                                                                            children: errors.email
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "form-group",
                                                                    children: /*#__PURE__*/ _jsx(Field, {
                                                                        as: "textarea",
                                                                        id: "form_message",
                                                                        name: "message",
                                                                        placeholder: "Message",
                                                                        rows: "4",
                                                                        required: "required"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("button", {
                                                                    type: "submit",
                                                                    className: "btn-curve btn-lit",
                                                                    children: /*#__PURE__*/ _jsx("span", {
                                                                        children: "Send Message"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-5 offset-lg-1",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "cont-info",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "extra-title mb-50",
                                            children: "Contact Info."
                                        }),
                                        /*#__PURE__*/ _jsx("h3", {
                                            className: "custom-font wow",
                                            "data-splitting": true,
                                            children: "Let's Talk."
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "item mb-40",
                                            children: [
                                                /*#__PURE__*/ _jsx("h5", {
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        href: "#0",
                                                        children: "Email@example.com"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("h5", {
                                                    children: "+4.930.705.5448"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("h3", {
                                            className: "custom-font wow",
                                            "data-splitting": true,
                                            children: "Visit Us."
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ _jsxs("h6", {
                                                children: [
                                                    "295 Witting Streets Suite 666,",
                                                    /*#__PURE__*/ _jsx("br", {
                                                    }),
                                                    "Melbourne, Australia"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "social mt-50",
                                            children: [
                                                /*#__PURE__*/ _jsx("a", {
                                                    href: "#0",
                                                    className: "icon",
                                                    children: /*#__PURE__*/ _jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("a", {
                                                    href: "#0",
                                                    className: "icon",
                                                    children: /*#__PURE__*/ _jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("a", {
                                                    href: "#0",
                                                    className: "icon",
                                                    children: /*#__PURE__*/ _jsx("i", {
                                                        className: "fab fa-pinterest"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("a", {
                                                    href: "#0",
                                                    className: "icon",
                                                    children: /*#__PURE__*/ _jsx("i", {
                                                        className: "fab fa-behance"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "map",
                id: "ieatmaps",
                children: /*#__PURE__*/ _jsx("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.687203718404!2d-0.14297520856388865!3d51.502466162777694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1644772966009!5m2!1sen!2seg",
                    style: {
                        border: 0
                    },
                    allowFullScreen: "",
                    loading: "lazy"
                })
            }),
            /*#__PURE__*/ _jsx("footer", {
                className: "footer-half sub-bg",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "copyrights text-center mt-0",
                        children: /*#__PURE__*/ _jsxs("p", {
                            children: [
                                "\xa9 2022, Avo Template. Made with passion by",
                                /*#__PURE__*/ _jsx("a", {
                                    href: "#0",
                                    children: "ThemesCamp"
                                }),
                                "."
                            ]
                        })
                    })
                })
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ContactWithMap)));


/***/ }),

/***/ 9343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Contact_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2209);
/* harmony import */ var _components_Contact_with_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4637);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2532);
/* harmony import */ var _components_Navbar_full_menu_navbar_full_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2585);
/* harmony import */ var _components_Contact_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2398);








const Contacto = ()=>{
    const fixedHeader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setInterval(()=>{
            if (fixedHeader.current) {
                var slidHeight = fixedHeader.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + "px";
            }
        }, 1000);
    /*     var navbar = navbarRef.current;
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
    }); */ }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Dark__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "contact",
            className: "main-content",
            ref: MainContent,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact_section__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contacto);


/***/ })

};
;