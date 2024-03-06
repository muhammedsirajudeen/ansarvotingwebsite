"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Navbar */ \"./src/components/Navbar.jsx\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [openvotes, setOpenvotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"authenticated\") {\n            setLoading(false);\n            async function getopenVotes() {\n                let openvotes = (await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/votehandler/vote\")).data;\n                console.log(openvotes);\n                setOpenvotes(openvotes.votearray);\n            }\n            getopenVotes();\n        } else if (status === \"unauthenticated\") {\n            window.location.href = \"/\";\n        }\n    }, [\n        session\n    ]);\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed w-screen h-screen flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_5__.PulseLoader, {\n            loading: loading\n        }, void 0, false, {\n            fileName: \"/home/vava/Programming/Projects/CollegeProjects/votingwebsite/src/pages/home.js\",\n            lineNumber: 24,\n            columnNumber: 88\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/vava/Programming/Projects/CollegeProjects/votingwebsite/src/pages/home.js\",\n        lineNumber: 24,\n        columnNumber: 14\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-screen h-screen flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                username: session.user.name\n            }, void 0, false, {\n                fileName: \"/home/vava/Programming/Projects/CollegeProjects/votingwebsite/src/pages/home.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold\",\n                children: \"CURRENT OPEN VOTINGS ARE\"\n            }, void 0, false, {\n                fileName: \"/home/vava/Programming/Projects/CollegeProjects/votingwebsite/src/pages/home.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vava/Programming/Projects/CollegeProjects/votingwebsite/src/pages/home.js\",\n        lineNumber: 25,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"T7TH1nDmVx92yNOKYhd0GAO4STE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0I7QUFDQTtBQUNIO0FBQ0c7QUFDM0IsU0FBU007O0lBQ3ZCLE1BQU0sQ0FBQ0MsU0FBUUMsV0FBVyxHQUFDTiwrQ0FBUUEsQ0FBQztJQUNwQyxNQUFNLEVBQUNPLE1BQUtDLE9BQU8sRUFBQ0MsTUFBTSxFQUFDLEdBQUNSLDJEQUFVQTtJQUN0QyxNQUFNLENBQUNTLFdBQVVDLGFBQWEsR0FBQ1gsK0NBQVFBLENBQUMsRUFBRTtJQUMxQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFHVSxXQUFTLGlCQUFnQjtZQUMxQkgsV0FBVztZQUNYLGVBQWVNO2dCQUNiLElBQUlGLFlBQVUsQ0FBQyxNQUFNWixpREFBUyxDQUFDLHdCQUF1QixFQUFHUyxJQUFJO2dCQUM3RE8sUUFBUUMsR0FBRyxDQUFDTDtnQkFDWkMsYUFBYUQsVUFBVU0sU0FBUztZQUNsQztZQUNBSjtRQUNGLE9BQU0sSUFBR0gsV0FBUyxtQkFBa0I7WUFDbENRLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFDO1FBQ3ZCO0lBQ0YsR0FBRTtRQUFDWDtLQUFRO0lBQ1gsT0FDRUgsd0JBQVMsOERBQUNlO1FBQUlDLFdBQVU7a0JBQTJELDRFQUFDbEIsdURBQVdBO1lBQUNFLFNBQVNBOzs7Ozs7Ozs7OzZCQUN2Ryw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNuQiwwREFBTUE7Z0JBQUNvQixVQUFVZCxRQUFRZSxJQUFJLENBQUNDLElBQUk7Ozs7OzswQkFDbkMsOERBQUNDO2dCQUFHSixXQUFVOzBCQUFhOzs7Ozs7Ozs7Ozs7QUFJbkM7R0F6QnlCakI7O1FBRUtILHVEQUFVQTs7O0tBRmZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lLmpzPzBiMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7dXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9jb21wb25lbnRzL05hdmJhclwiXG5pbXBvcnQge1B1bHNlTG9hZGVyIH0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCJcbmV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT11c2VTdGF0ZSh0cnVlKVxuICBjb25zdCB7ZGF0YTpzZXNzaW9uLHN0YXR1c309dXNlU2Vzc2lvbigpXG4gIGNvbnN0IFtvcGVudm90ZXMsc2V0T3BlbnZvdGVzXT11c2VTdGF0ZShbXSlcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYoc3RhdHVzPT09XCJhdXRoZW50aWNhdGVkXCIpe1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldG9wZW5Wb3Rlcygpe1xuICAgICAgICBsZXQgb3BlbnZvdGVzPShhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3ZvdGVoYW5kbGVyL3ZvdGVcIikpLmRhdGFcbiAgICAgICAgY29uc29sZS5sb2cob3BlbnZvdGVzKVxuICAgICAgICBzZXRPcGVudm90ZXMob3BlbnZvdGVzLnZvdGVhcnJheSlcbiAgICAgIH1cbiAgICAgIGdldG9wZW5Wb3RlcygpXG4gICAgfWVsc2UgaWYoc3RhdHVzPT09XCJ1bmF1dGhlbnRpY2F0ZWRcIil7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9cIlxuICAgIH1cbiAgfSxbc2Vzc2lvbl0pXG4gIHJldHVybiAoXG4gICAgbG9hZGluZz8gPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPjxQdWxzZUxvYWRlciBsb2FkaW5nPXtsb2FkaW5nfS8+PC9kaXY+IDpcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPE5hdmJhciB1c2VybmFtZT17c2Vzc2lvbi51c2VyLm5hbWV9IC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGRcIiA+Q1VSUkVOVCBPUEVOIFZPVElOR1MgQVJFPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcblxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwiTmF2YmFyIiwiUHVsc2VMb2FkZXIiLCJIb21lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsIm9wZW52b3RlcyIsInNldE9wZW52b3RlcyIsImdldG9wZW5Wb3RlcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJ2b3RlYXJyYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJ1c2VybmFtZSIsInVzZXIiLCJuYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home.js\n"));

/***/ })

});