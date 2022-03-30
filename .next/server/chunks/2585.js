"use strict";
exports.id = 2585;
exports.ids = [2585];
exports.modules = {

/***/ 2585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar_full_menu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/customFunctions.js
var customFunctions = __webpack_require__(2455);
;// CONCATENATED MODULE: ./src/common/handleFullScreenNavbar.js


const handleFullScreenNavbar = ()=>{
    function noScroll() {
        window.scrollTo(0, 0);
    }
    var open = false, navDark = document.querySelector(".topnav.dark"), logoChan = document.querySelector(".topnav.dark .logo img"), menuIcon = document.querySelector(".topnav .menu-icon"), menuText = document.querySelector(".topnav .menu-text");
    if (menuText) {
        menuIcon.addEventListener("click", function() {
            open = !open;
            document.querySelector(".hamenu").classList.toggle("open");
            if (open) {
                (0,customFunctions/* animateEl */.mM)(document.querySelector(".hamenu"), "0px");
                document.querySelector(".topnav .menu-icon ").classList.add("open");
                menuText.innerHTML = "<span><i></i><i></i></span>";
                if (navDark) {
                    navDark.classList.add("navlit");
                }
                if (logoChan) {
                    logoChan.setAttribute("src", app/* lightLogo */.E8);
                }
                window.addEventListener("scroll", noScroll);
            } else {
                (0,customFunctions/* delay */.gw)(1, (0,customFunctions/* animateEl */.mM)(document.querySelector(".hamenu"), "-100%"));
                document.querySelector(".topnav .menu-icon").classList.remove("open");
                menuText.innerHTML = "<span><i></i><i></i></span>";
                if (navDark) {
                    navDark.classList.remove("navlit");
                }
                if (logoChan) {
                    logoChan.setAttribute("src", app/* darkLogo */.Q1);
                }
                window.removeEventListener("scroll", noScroll);
            }
            Splitting({
                target: menuText
            });
        });
        document.querySelectorAll(".main-menu a").forEach((item)=>{
            item.addEventListener("click", ()=>{
                (0,customFunctions/* delay */.gw)(1, (0,customFunctions/* animateEl */.mM)(document.querySelector(".hamenu"), "-100%"));
                document.querySelector(".topnav .menu-icon").classList.remove("open");
                if (navDark) {
                    navDark.classList.remove("navlit");
                }
                if (logoChan) {
                    logoChan.setAttribute("src", app/* darkLogo */.Q1);
                }
                window.removeEventListener("scroll", noScroll);
            });
        });
    }
    document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((item1)=>{
        item1.addEventListener("mouseenter", function() {
            this.style.opacity = "1";
            (0,customFunctions/* getSiblings */.m7)(this).forEach((item)=>{
                item.style.opacity = ".5";
            });
        });
        item1.addEventListener("mouseleave", function() {
            document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((item2)=>{
                item2.style.opacity = "1";
            });
        });
    });
    if (document.querySelectorAll(".main-menu > li .dmenu").length) {
        document.querySelectorAll(".main-menu > li .dmenu").forEach((item2)=>{
            item2.addEventListener("click", function() {
                document.querySelector(".main-menu").classList.add("gosub");
                (0,customFunctions/* getSiblings */.m7)(this.parentNode.parentNode).forEach((item)=>{
                    item.childNodes[1] ? item.childNodes[1].classList.remove("sub-open") : "";
                });
                this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
            });
        });
    }
    if (document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length) {
        document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach((item)=>{
            item.addEventListener("click", function() {
                document.querySelector(".main-menu").classList.remove("gosub");
            /*  document.querySelector(".main-menu").classList.remove("sub-open"); */ });
        });
    }
};
/* harmony default export */ const common_handleFullScreenNavbar = (handleFullScreenNavbar);

;// CONCATENATED MODULE: ./src/components/MenuBackground/index.jsx



const MenuBackground = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
        className: "isologofloat",
        src: `${app/* isoLogo */.BB}`,
        alt: "logo"
    }));
};
/* harmony default export */ const components_MenuBackground = (MenuBackground);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/Navbar-full-menu/navbar-full-menu/index.jsx

/* eslint-disable @next/next/no-img-element */ 






const NavbarFullMenu = ({ theme , lr  })=>{
    external_react_default().useEffect(()=>{
        common_handleFullScreenNavbar();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "navi",
                className: `topnav ${theme ? theme === "light" ? "light" : "" : ""}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#0",
                                children: theme ? theme === "light" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `${app/* darkLogo */.Q1}`,
                                    alt: "log o"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `${app/* lightLogo */.E8}`,
                                    alt: "logo"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `${app/* lightLogo */.E8}`,
                                    alt: "logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text",
                                    "data-splitting": true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "menu-text",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hamenu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-9 col-md-8",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-links",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "main-menu",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "o-hidden",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/about/about-dark",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "link",
                                                                    children: "HOME"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "sub-menu",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                className: "sub-link back",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "pe-7s-angle-left"
                                                                                    }),
                                                                                    " Go Back"
                                                                                ]
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/home/home1-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Main Home"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/home/home2-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Creative Studio"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/home/home3-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Business Startup"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/home/home4-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "One Page"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/home/home5-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Freelancer"
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "o-hidden",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/about/about-dark",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "link",
                                                                children: "About Us"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "o-hidden",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/about/about-dark",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "link",
                                                                    children: "PORTFOLIO"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "sub-menu",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                className: "sub-link back",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "pe-7s-angle-left"
                                                                                    }),
                                                                                    " Go Back"
                                                                                ]
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/works/works-dark",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                    className: "sub-link",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "nm",
                                                                                            children: "01."
                                                                                        }),
                                                                                        "Mouse Info"
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/works2/works2-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Masonry 3 Columns"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/works3/works3-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Masonry 2 Columns"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/works4/works4-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Pinterest List"
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "o-hidden",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/about/about-dark",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "link",
                                                                    children: "SHOWCASES"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "sub-menu",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                className: "sub-link back",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "pe-7s-angle-left"
                                                                                    }),
                                                                                    " Go Back"
                                                                                ]
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/showcase/showcase-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Full Screen"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/showcase2/showcase2-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Creative Carousel"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/showcase3/showcase3-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Radius Carousel"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "o-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "/showcase4/showcase4-dark",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "sub-link",
                                                                                    children: "Columns Carousel"
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/contact/contact-dark",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "link",
                                                                children: "Contact"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "cont-info",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                            className: "social-nav",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "social-nav-text",
                                                    children: "Follow us:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "social-list",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "glyphicon",
                                                                rel: "noopener noreferrer",
                                                                href: "https://t.me/Decentr4l",
                                                                target: "_blank",
                                                                title: "Telegram",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTelegramPlane, {
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "glyphicon",
                                                                rel: "noopener noreferrer",
                                                                href: "https://twitter.com/Decentr4l_ofi/",
                                                                target: "_blank",
                                                                title: "Twitter",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "glyphicon",
                                                                rel: "noopener noreferrer",
                                                                href: "https://discord.com/invite/Kmp5Yxzc7a",
                                                                target: "_blank",
                                                                title: "Discord",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaDiscord, {
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "glyphicon",
                                                                rel: "noopener noreferrer",
                                                                href: "https://www.linkedin.com/company/decentr4l/about/",
                                                                target: "_blank",
                                                                title: "Linkedin",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedinIn, {
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_MenuBackground, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const navbar_full_menu = (NavbarFullMenu);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ })

};
;