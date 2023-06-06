"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/features",{

/***/ "./src/pages/features.tsx":
/*!********************************!*\
  !*** ./src/pages/features.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! layout/Layout */ \"./layout/Layout.tsx\");\n/* harmony import */ var _styles_Features_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/Features.module.css */ \"./src/styles/Features.module.css\");\n/* harmony import */ var _styles_Features_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Features_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Features = (param)=>{\n    let { isAuth , user  } = param;\n    _s();\n    const { onChangeAuth , onChangeName  } = (0,context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isAuth) {\n            onChangeAuth(isAuth);\n            onChangeName(user === null || user === void 0 ? void 0 : user.name);\n        }\n    }, [\n        isAuth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Features_module_css__WEBPACK_IMPORTED_MODULE_4___default().features),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdContentCut, {}, void 0, false, {\n                            fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"URL Shortening: The core functionality of the app, allowing users to input long URLs and generate shortened versions.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdDashboardCustomize, {}, void 0, false, {\n                            fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Customizable Short URLs: Allowing users to choose their own custom short URLs instead of automatically generated ones.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Features_module_css__WEBPACK_IMPORTED_MODULE_4___default().inProgress),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Features_module_css__WEBPACK_IMPORTED_MODULE_4___default().inProgressDiv),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"lord-icon\", {\n                                src: \"https://cdn.lordicon.com/hbigeisx.json\",\n                                trigger: \"loop\",\n                                colors: \"primary:#fff\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"In progress\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdQrCode, {}, void 0, false, {\n                                    fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 6\n                            }, undefined),\n                            \"QR Code Generation: Generating QR codes for shortened URLs, enabling users to easily share and scan them using mobile devices.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                lineNumber: 52,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdTimer10, {}, void 0, false, {\n                            fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Link Expiration: Offering the option to set an expiration date for shortened URLs, after which they automatically expire and become inaccessible.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                lineNumber: 68,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdPassword, {}, void 0, false, {\n                            fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Password Protection: Allowing users to add password protection to their shortened URLs, ensuring that only those with the correct password can access the destination.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n                lineNumber: 78,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\features.tsx\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Features, \"CVpG2PfA2N7lga4EjW45yhY411w=\", false, function() {\n    return [\n        context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Features;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,layout_Layout__WEBPACK_IMPORTED_MODULE_1__.withLayout)(Features));\nvar _c, _c1;\n$RefreshReg$(_c, \"Features\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmVhdHVyZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNVO0FBTzdCO0FBQ3NCO0FBQ1I7QUFZckMsTUFBTVMsV0FBdUIsU0FBc0I7UUFBckIsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUU7O0lBQzdDLE1BQU0sRUFBRUMsYUFBWSxFQUFFQyxhQUFZLEVBQUUsR0FBR04sNERBQU9BO0lBRTlDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2YsSUFBSUUsUUFBUTtZQUNYRSxhQUFhRjtZQUNiRyxhQUFhRixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1HLElBQUk7UUFDeEIsQ0FBQztJQUNGLEdBQUc7UUFBQ0o7S0FBTztJQUNYLHFCQUNDLDhEQUFDSztRQUFJQyxXQUFXZiw2RUFBZTs7MEJBQzlCLDhEQUFDYzs7a0NBQ0EsOERBQUNBO2tDQUNBLDRFQUFDYix3REFBWUE7Ozs7Ozs7Ozs7a0NBRWQsOERBQUNhO2tDQUFJOzs7Ozs7Ozs7Ozs7MEJBS04sOERBQUNBOztrQ0FDQSw4REFBQ0E7a0NBQ0EsNEVBQUNaLGdFQUFvQkE7Ozs7Ozs7Ozs7a0NBRXRCLDhEQUFDWTtrQ0FBSTs7Ozs7Ozs7Ozs7OzBCQUtOLDhEQUFDQTtnQkFBSUMsV0FBV2YsK0VBQWlCOztrQ0FDaEMsOERBQUNjO3dCQUFJQyxXQUFXZixrRkFBb0I7OzBDQUNuQyw4REFBQ21CO2dDQUNBQyxLQUFJO2dDQUNKQyxTQUFRO2dDQUNSQyxRQUFPOzs7Ozs7MENBQ1IsOERBQUNSOzBDQUFJOzs7Ozs7Ozs7Ozs7a0NBRU4sOERBQUNBOzswQ0FDQSw4REFBQ0E7MENBQ0EsNEVBQUNULG9EQUFRQTs7Ozs7Ozs7Ozs0QkFDSjs7Ozs7Ozs7Ozs7OzswQkFLUiw4REFBQ1M7O2tDQUNBLDhEQUFDQTtrQ0FDQSw0RUFBQ1gscURBQVNBOzs7Ozs7Ozs7O2tDQUVYLDhEQUFDVztrQ0FBSTs7Ozs7Ozs7Ozs7OzBCQU1OLDhEQUFDQTs7a0NBQ0EsOERBQUNBO2tDQUNBLDRFQUFDVixzREFBVUE7Ozs7Ozs7Ozs7a0NBRVosOERBQUNVO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRVDtHQW5FTU47O1FBQ2tDRix3REFBT0E7OztLQUR6Q0U7O0FBcUVOLCtEQUFlLE1BQUFULHlEQUFVQSxDQUFDUyxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9mZWF0dXJlcy50c3g/NjZhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoTGF5b3V0IH0gZnJvbSAnbGF5b3V0L0xheW91dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9GZWF0dXJlcy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge1xyXG5cdE1kQ29udGVudEN1dCxcclxuXHRNZERhc2hib2FyZEN1c3RvbWl6ZSxcclxuXHRNZFRpbWVyMTAsXHJcblx0TWRQYXNzd29yZCxcclxuXHRNZFFyQ29kZSxcclxufSBmcm9tICdyZWFjdC1pY29ucy9tZCdcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ2NvbnRleHQvQXV0aENvbnRleHQnXHJcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgKiBhcyBjb29raWUgZnJvbSAnY29va2llJ1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcblx0aXNBdXRoOiBib29sZWFuXHJcblx0dXNlcj86IHtcclxuXHRcdG5hbWU6IHN0cmluZ1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgRmVhdHVyZXM6IEZDPElQcm9wcz4gPSAoeyBpc0F1dGgsIHVzZXIgfSkgPT4ge1xyXG5cdGNvbnN0IHsgb25DaGFuZ2VBdXRoLCBvbkNoYW5nZU5hbWUgfSA9IHVzZUF1dGgoKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGlzQXV0aCkge1xyXG5cdFx0XHRvbkNoYW5nZUF1dGgoaXNBdXRoKVxyXG5cdFx0XHRvbkNoYW5nZU5hbWUodXNlcj8ubmFtZSlcclxuXHRcdH1cclxuXHR9LCBbaXNBdXRoXSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc30+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxNZENvbnRlbnRDdXQgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0VVJMIFNob3J0ZW5pbmc6IFRoZSBjb3JlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGFwcCwgYWxsb3dpbmcgdXNlcnMgdG9cclxuXHRcdFx0XHRcdGlucHV0IGxvbmcgVVJMcyBhbmQgZ2VuZXJhdGUgc2hvcnRlbmVkIHZlcnNpb25zLlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PE1kRGFzaGJvYXJkQ3VzdG9taXplIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdEN1c3RvbWl6YWJsZSBTaG9ydCBVUkxzOiBBbGxvd2luZyB1c2VycyB0byBjaG9vc2UgdGhlaXIgb3duIGN1c3RvbVxyXG5cdFx0XHRcdFx0c2hvcnQgVVJMcyBpbnN0ZWFkIG9mIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIG9uZXMuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluUHJvZ3Jlc3N9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5Qcm9ncmVzc0Rpdn0+XHJcblx0XHRcdFx0XHQ8bG9yZC1pY29uXHJcblx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly9jZG4ubG9yZGljb24uY29tL2hiaWdlaXN4Lmpzb24nXHJcblx0XHRcdFx0XHRcdHRyaWdnZXI9J2xvb3AnXHJcblx0XHRcdFx0XHRcdGNvbG9ycz0ncHJpbWFyeTojZmZmJz48L2xvcmQtaWNvbj5cclxuXHRcdFx0XHRcdDxkaXY+SW4gcHJvZ3Jlc3M8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PE1kUXJDb2RlIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFFSIENvZGUgR2VuZXJhdGlvbjogR2VuZXJhdGluZyBRUiBjb2RlcyBmb3Igc2hvcnRlbmVkIFVSTHMsIGVuYWJsaW5nXHJcblx0XHRcdFx0XHR1c2VycyB0byBlYXNpbHkgc2hhcmUgYW5kIHNjYW4gdGhlbSB1c2luZyBtb2JpbGUgZGV2aWNlcy5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxNZFRpbWVyMTAgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0TGluayBFeHBpcmF0aW9uOiBPZmZlcmluZyB0aGUgb3B0aW9uIHRvIHNldCBhbiBleHBpcmF0aW9uIGRhdGUgZm9yXHJcblx0XHRcdFx0XHRzaG9ydGVuZWQgVVJMcywgYWZ0ZXIgd2hpY2ggdGhleSBhdXRvbWF0aWNhbGx5IGV4cGlyZSBhbmQgYmVjb21lXHJcblx0XHRcdFx0XHRpbmFjY2Vzc2libGUuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8TWRQYXNzd29yZCAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRQYXNzd29yZCBQcm90ZWN0aW9uOiBBbGxvd2luZyB1c2VycyB0byBhZGQgcGFzc3dvcmQgcHJvdGVjdGlvbiB0b1xyXG5cdFx0XHRcdFx0dGhlaXIgc2hvcnRlbmVkIFVSTHMsIGVuc3VyaW5nIHRoYXQgb25seSB0aG9zZSB3aXRoIHRoZSBjb3JyZWN0XHJcblx0XHRcdFx0XHRwYXNzd29yZCBjYW4gYWNjZXNzIHRoZSBkZXN0aW5hdGlvbi5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhMYXlvdXQoRmVhdHVyZXMpXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuXHRjb25zdCBjb29raWVzID0gY29va2llLnBhcnNlKGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIHx8ICcnKVxyXG5cclxuXHRpZiAoIWNvb2tpZXMuVE9LRU4pIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7IGlzQXV0aDogZmFsc2UsIHVzZXI6IG51bGwsIHRva2VuOiBudWxsIH0sXHJcblx0XHR9XHJcblx0fVxyXG5cdGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAxL2FwaSdcclxuXHRheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXHJcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke2Nvb2tpZXMuVE9LRU59YFxyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnL2F1dGgvcHJvZmlsZScpXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdGlzQXV0aDogdHJ1ZSxcclxuXHRcdFx0XHR1c2VyOiB7XHJcblx0XHRcdFx0XHRuYW1lOiBkYXRhLmRhdGEubmFtZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRpc0F1dGg6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsid2l0aExheW91dCIsInN0eWxlcyIsIk1kQ29udGVudEN1dCIsIk1kRGFzaGJvYXJkQ3VzdG9taXplIiwiTWRUaW1lcjEwIiwiTWRQYXNzd29yZCIsIk1kUXJDb2RlIiwidXNlQXV0aCIsInVzZUVmZmVjdCIsIkZlYXR1cmVzIiwiaXNBdXRoIiwidXNlciIsIm9uQ2hhbmdlQXV0aCIsIm9uQ2hhbmdlTmFtZSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmZWF0dXJlcyIsImluUHJvZ3Jlc3MiLCJpblByb2dyZXNzRGl2IiwibG9yZC1pY29uIiwic3JjIiwidHJpZ2dlciIsImNvbG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/features.tsx\n"));

/***/ })

});