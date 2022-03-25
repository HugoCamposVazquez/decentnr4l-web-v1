"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about/about-dark",{

/***/ "./src/common/handleFullScreenNavbar.js":
/*!**********************************************!*\
  !*** ./src/common/handleFullScreenNavbar.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/app.json */ \"./src/data/app.json\");\n/* harmony import */ var _customFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customFunctions */ \"./src/common/customFunctions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar handleFullScreenNavbar = function() {\n    var noScroll = function noScroll() {\n        window.scrollTo(0, 0);\n    };\n    var open = false, navDark = document.querySelector(\".topnav.dark\"), logoChan = document.querySelector(\".topnav.dark .logo img\"), menuIcon = document.querySelector(\".topnav .menu-icon\"), menuText = document.querySelector(\".topnav .menu-text\");\n    if (menuIcon) {\n        menuIcon.addEventListener(\"click\", function() {\n            open = !open;\n            document.querySelector(\".hamenu\").classList.toggle(\"open\");\n            if (open) {\n                (0,_customFunctions__WEBPACK_IMPORTED_MODULE_1__.animateEl)(document.querySelector(\".hamenu\"), \"0px\");\n                document.querySelector(\".topnav .menu-icon \").classList.add(\"open\");\n                menuText.innerHTML = \"Close\";\n                if (navDark) {\n                    navDark.classList.add(\"navlit\");\n                }\n                if (logoChan) {\n                    logoChan.setAttribute(\"src\", _data_app_json__WEBPACK_IMPORTED_MODULE_0__.lightLogo);\n                }\n                window.addEventListener(\"scroll\", noScroll);\n            } else {\n                (0,_customFunctions__WEBPACK_IMPORTED_MODULE_1__.delay)(1, (0,_customFunctions__WEBPACK_IMPORTED_MODULE_1__.animateEl)(document.querySelector(\".hamenu\"), \"-100%\"));\n                document.querySelector(\".topnav .menu-icon\").classList.remove(\"open\");\n                menuText.innerHTML = \"Menu\";\n                if (navDark) {\n                    navDark.classList.remove(\"navlit\");\n                }\n                if (logoChan) {\n                    logoChan.setAttribute(\"src\", _data_app_json__WEBPACK_IMPORTED_MODULE_0__.darkLogo);\n                }\n                window.removeEventListener(\"scroll\", noScroll);\n            }\n            Splitting({\n                target: menuText\n            });\n        });\n        document.querySelectorAll(\".main-menu a\").forEach(function(item) {\n            item.addEventListener(\"click\", function() {\n                (0,_customFunctions__WEBPACK_IMPORTED_MODULE_1__.delay)(300, (0,_customFunctions__WEBPACK_IMPORTED_MODULE_1__.animateEl)(document.querySelector(\".hamenu\"), \"-100%\"));\n                document.querySelector(\".topnav .menu-icon\").classList.remove(\"open\");\n                if (navDark) {\n                    navDark.classList.remove(\"navlit\");\n                }\n                if (logoChan) {\n                    logoChan.setAttribute(\"src\", _data_app_json__WEBPACK_IMPORTED_MODULE_0__.darkLogo);\n                }\n                window.removeEventListener(\"scroll\", noScroll);\n            });\n        });\n    }\n    document.querySelectorAll(\".hamenu .menu-links .main-menu > li\").forEach(function(item1) {\n        item1.addEventListener(\"mouseenter\", function() {\n            this.style.opacity = \"1\";\n            (0,_customFunctions__WEBPACK_IMPORTED_MODULE_1__.getSiblings)(this).forEach(function(item) {\n                item.style.opacity = \".5\";\n            });\n        });\n        item1.addEventListener(\"mouseleave\", function() {\n            document.querySelectorAll(\".hamenu .menu-links .main-menu > li\").forEach(function(item2) {\n                item2.style.opacity = \"1\";\n            });\n        });\n    });\n    if (document.querySelectorAll(\".main-menu > li .dmenu\").length) {\n        document.querySelectorAll(\".main-menu > li .dmenu\").forEach(function(item2) {\n            item2.addEventListener(\"click\", function() {\n                document.querySelector(\".main-menu\").classList.add(\"gosub\");\n                (0,_customFunctions__WEBPACK_IMPORTED_MODULE_1__.getSiblings)(this.parentNode.parentNode).forEach(function(item) {\n                    item.childNodes[1] ? item.childNodes[1].classList.remove(\"sub-open\") : \"\";\n                });\n                this.parentNode.parentNode.childNodes[1].classList.add(\"sub-open\");\n            });\n        });\n    }\n    if (document.querySelectorAll(\".main-menu .sub-menu li .sub-link.back\").length) {\n        document.querySelectorAll(\".main-menu .sub-menu li .sub-link.back\").forEach(function(item) {\n            item.addEventListener(\"click\", function() {\n                document.querySelector(\".main-menu\").classList.remove(\"gosub\");\n            /*  document.querySelector(\".main-menu\").classList.remove(\"sub-open\"); */ });\n        });\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleFullScreenNavbar);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2hhbmRsZUZ1bGxTY3JlZW5OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFzQztBQUMyQjtBQUVqRSxHQUFLLENBQUNJLHNCQUFzQixHQUFHLFFBQVEsR0FBRixDQUFDO1FBQzNCQyxRQUFRLEdBQWpCLFFBQVEsQ0FBQ0EsUUFBUSxHQUFHLENBQUM7UUFDbkJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxHQUFHLENBQUNDLElBQUksR0FBRyxLQUFLLEVBQ2RDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBYyxnQkFDL0NDLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBd0IsMEJBQzFERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQW9CLHNCQUN0REcsUUFBUSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFvQjtJQUV4RCxFQUFFLEVBQUVFLFFBQVEsRUFBRSxDQUFDO1FBQ2JBLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsQ0FBTyxRQUFFLFFBQVEsR0FBSSxDQUFDO1lBQzlDUCxJQUFJLElBQUlBLElBQUk7WUFDWkUsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBUyxVQUFFSyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFNO1lBQ3pELEVBQUUsRUFBRVQsSUFBSSxFQUFFLENBQUM7Z0JBQ1ROLDJEQUFTLENBQUNRLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVMsV0FBRyxDQUFLO2dCQUNsREQsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBcUIsc0JBQUVLLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLENBQU07Z0JBQ2xFSixRQUFRLENBQUNLLFNBQVMsR0FBRyxDQUFPO2dCQUM1QixFQUFFLEVBQUVWLE9BQU8sRUFBRSxDQUFDO29CQUNaQSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLENBQVE7Z0JBQ2hDLENBQUM7Z0JB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Y3JlZW5OYXZiYXIuanM/YmI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwRGF0YSBmcm9tIFwiLi4vZGF0YS9hcHAuanNvblwiO1xyXG5pbXBvcnQgeyBnZXRTaWJsaW5ncywgYW5pbWF0ZUVsLCBkZWxheSB9IGZyb20gXCIuL2N1c3RvbUZ1bmN0aW9uc1wiO1xyXG5cclxuY29uc3QgaGFuZGxlRnVsbFNjcmVlbk5hdmJhciA9ICgpID0+IHtcclxuICBmdW5jdGlvbiBub1Njcm9sbCgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICB9XHJcbiAgdmFyIG9wZW4gPSBmYWxzZSxcclxuICAgIG5hdkRhcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcG5hdi5kYXJrXCIpLFxyXG4gICAgbG9nb0NoYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcG5hdi5kYXJrIC5sb2dvIGltZ1wiKSxcclxuICAgIG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BuYXYgLm1lbnUtaWNvblwiKSxcclxuICAgIG1lbnVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BuYXYgLm1lbnUtdGV4dFwiKTtcclxuXHJcbiAgaWYgKG1lbnVJY29uKSB7XHJcbiAgICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBvcGVuID0gIW9wZW47XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgICBpZiAob3Blbikge1xyXG4gICAgICAgIGFuaW1hdGVFbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWVudVwiKSwgXCIwcHhcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BuYXYgLm1lbnUtaWNvbiBcIikuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICAgICAgbWVudVRleHQuaW5uZXJIVE1MID0gXCJDbG9zZVwiO1xyXG4gICAgICAgIGlmIChuYXZEYXJrKSB7XHJcbiAgICAgICAgICBuYXZEYXJrLmNsYXNzTGlzdC5hZGQoXCJuYXZsaXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2dvQ2hhbikge1xyXG4gICAgICAgICAgbG9nb0NoYW4uc2V0QXR0cmlidXRlKFwic3JjXCIsIGFwcERhdGEubGlnaHRMb2dvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbm9TY3JvbGwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGF5KDEsIGFuaW1hdGVFbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWVudVwiKSwgXCItMTAwJVwiKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BuYXYgLm1lbnUtaWNvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgICBtZW51VGV4dC5pbm5lckhUTUwgPSBcIk1lbnVcIjtcclxuXHJcbiAgICAgICAgaWYgKG5hdkRhcmspIHtcclxuICAgICAgICAgIG5hdkRhcmsuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmxpdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ29DaGFuKSB7XHJcbiAgICAgICAgICBsb2dvQ2hhbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYXBwRGF0YS5kYXJrTG9nbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG5vU2Nyb2xsKTtcclxuICAgICAgfVxyXG4gICAgICBTcGxpdHRpbmcoeyB0YXJnZXQ6IG1lbnVUZXh0IH0pO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tbWVudSBhXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRlbGF5KDMwMCwgYW5pbWF0ZUVsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtZW51XCIpLCBcIi0xMDAlXCIpKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcG5hdiAubWVudS1pY29uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgIGlmIChuYXZEYXJrKSB7XHJcbiAgICAgICAgICBuYXZEYXJrLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZsaXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2dvQ2hhbikge1xyXG4gICAgICAgICAgbG9nb0NoYW4uc2V0QXR0cmlidXRlKFwic3JjXCIsIGFwcERhdGEuZGFya0xvZ28pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBub1Njcm9sbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbChcIi5oYW1lbnUgLm1lbnUtbGlua3MgLm1haW4tbWVudSA+IGxpXCIpXHJcbiAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBnZXRTaWJsaW5ncyh0aGlzKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpdGVtLnN0eWxlLm9wYWNpdHkgPSBcIi41XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGFtZW51IC5tZW51LWxpbmtzIC5tYWluLW1lbnUgPiBsaVwiKVxyXG4gICAgICAgICAgLmZvckVhY2goKGl0ZW0yKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0yLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tbWVudSA+IGxpIC5kbWVudVwiKS5sZW5ndGgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1tZW51ID4gbGkgLmRtZW51XCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1tZW51XCIpLmNsYXNzTGlzdC5hZGQoXCJnb3N1YlwiKTtcclxuICAgICAgICBnZXRTaWJsaW5ncyh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaXRlbS5jaGlsZE5vZGVzWzFdXHJcbiAgICAgICAgICAgID8gaXRlbS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWItb3BlblwiKVxyXG4gICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QuYWRkKFwic3ViLW9wZW5cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1tZW51IC5zdWItbWVudSBsaSAuc3ViLWxpbmsuYmFja1wiKS5sZW5ndGhcclxuICApIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tbWVudSAuc3ViLW1lbnUgbGkgLnN1Yi1saW5rLmJhY2tcIilcclxuICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZ29zdWJcIik7XHJcbiAgICAgICAgIC8qICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3ViLW9wZW5cIik7ICovXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUZ1bGxTY3JlZW5OYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJhcHBEYXRhIiwiZ2V0U2libGluZ3MiLCJhbmltYXRlRWwiLCJkZWxheSIsImhhbmRsZUZ1bGxTY3JlZW5OYXZiYXIiLCJub1Njcm9sbCIsIndpbmRvdyIsInNjcm9sbFRvIiwib3BlbiIsIm5hdkRhcmsiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dvQ2hhbiIsIm1lbnVJY29uIiwibWVudVRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkIiwiaW5uZXJIVE1MIiwic2V0QXR0cmlidXRlIiwibGlnaHRMb2dvIiwicmVtb3ZlIiwiZGFya0xvZ28iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU3BsaXR0aW5nIiwidGFyZ2V0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwic3R5bGUiLCJvcGFjaXR5IiwiaXRlbTIiLCJsZW5ndGgiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/handleFullScreenNavbar.js\n");

/***/ })

});