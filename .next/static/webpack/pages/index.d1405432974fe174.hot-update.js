"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layout/Layout */ \"./layout/Layout.tsx\");\n/* harmony import */ var components_IconLink_IconLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/IconLink/IconLink */ \"./components/IconLink/IconLink.tsx\");\n/* harmony import */ var components_IndexHeader_IndexHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/IndexHeader/IndexHeader */ \"./components/IndexHeader/IndexHeader.tsx\");\n/* harmony import */ var components_IndexForm_IndexForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/IndexForm/IndexForm */ \"./components/IndexForm/IndexForm.tsx\");\n/* harmony import */ var context_AliasContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/AliasContext */ \"./context/AliasContext.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Modal/Modal */ \"./components/Modal/Modal.tsx\");\n/* harmony import */ var hooks_use_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks/use-modal */ \"./hooks/use-modal.ts\");\n/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var _components_QRCodeContainer_QRCodeContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../components/QRCodeContainer/QRCodeContainer */ \"./components/QRCodeContainer/QRCodeContainer.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home(param) {\n    let { isAuth , user , token  } = param;\n    _s();\n    const { alias  } = (0,context_AliasContext__WEBPACK_IMPORTED_MODULE_6__.useAlias)();\n    const { modalOpen , close , open  } = (0,hooks_use_modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    const { onChangeAuth , onChangeName  } = (0,context_AuthContext__WEBPACK_IMPORTED_MODULE_9__.useAuth)();\n    const [typeOfUrl, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isAuth) {\n            onChangeAuth(isAuth);\n            onChangeName(user === null || user === void 0 ? void 0 : user.name);\n        }\n    }, [\n        isAuth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().index),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().inputContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_IconLink_IconLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        typeOfUrl: typeOfUrl,\n                        setType: setType\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_IndexHeader_IndexHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Our tool allows you to seamlessly track your audience with simple and easy-to-remember yet powerful links and provide your customers a unique tailored experience.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_IndexForm_IndexForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        handleOpen: open,\n                        token: token\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().infoContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Get Started\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Learn More\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContainer, {\n                children: modalOpen && typeOfUrl === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    alias: alias,\n                    handleClose: close\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 57,\n                columnNumber: 4\n            }, this),\n            modalOpen && typeOfUrl === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QRCodeContainer_QRCodeContainer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                alias: alias\n            }, void 0, false, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 37\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"ubsjB5vR/433UuD0YGAFwX40GEE=\", false, function() {\n    return [\n        context_AliasContext__WEBPACK_IMPORTED_MODULE_6__.useAlias,\n        hooks_use_modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        context_AuthContext__WEBPACK_IMPORTED_MODULE_9__.useAuth\n    ];\n});\n_c = Home;\nconst ModalContainer = (param)=>/*#__PURE__*/ {\n    let { children  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.AnimatePresence, {\n        initial: false,\n        exitBeforeEnter: true,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 72,\n        columnNumber: 2\n    }, undefined);\n};\n_c1 = ModalContainer;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,layout_Layout__WEBPACK_IMPORTED_MODULE_2__.withLayout)(Home));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"ModalContainer\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDRjtBQUNEO0FBQ1M7QUFDUztBQUNOO0FBQ1A7QUFDQTtBQUNMO0FBQ0o7QUFJTztBQUNaO0FBQytDO0FBVWhGLFNBQVNhLEtBQUssS0FBK0IsRUFBZTtRQUE5QyxFQUFFQyxPQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFVLEdBQS9COztJQUNiLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdYLDhEQUFRQTtJQUMxQixNQUFNLEVBQUVZLFVBQVMsRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR1gsMkRBQVFBO0lBQzNDLE1BQU0sRUFBRVksYUFBWSxFQUFFQyxhQUFZLEVBQUUsR0FBR1osNERBQU9BO0lBQzlDLE1BQU0sQ0FBQ2EsV0FBV0MsUUFBUSxHQUFHdkIsK0NBQVFBLENBQVM7SUFFOUNVLGdEQUFTQSxDQUFDLElBQU07UUFDZixJQUFJRyxRQUFRO1lBQ1hPLGFBQWFQO1lBQ2JRLGFBQWFQLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVUsSUFBSTtRQUN4QixDQUFDO0lBQ0YsR0FBRztRQUFDWDtLQUFPO0lBRVgscUJBQ0MsOERBQUNZO1FBQUlDLFdBQVczQix1RUFBWTs7MEJBQzNCLDhEQUFDMEI7Z0JBQUlDLFdBQVczQixnRkFBcUI7O2tDQUNwQyw4REFBQ0csb0VBQVFBO3dCQUFDb0IsV0FBV0E7d0JBQVdDLFNBQVNBOzs7Ozs7a0NBQ3pDLDhEQUFDcEIsMEVBQVdBOzs7OztrQ0FDWiw4REFBQ3NCO2tDQUNBLDRFQUFDSTtzQ0FBRTs7Ozs7Ozs7Ozs7a0NBTUosOERBQUN6QixzRUFBU0E7d0JBQUMwQixZQUFZWDt3QkFBTUosT0FBT0E7Ozs7OztrQ0FDcEMsOERBQUNVO3dCQUFJQyxXQUFXM0IsK0VBQW9COzswQ0FDbkMsOERBQUNpQzswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDQTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdWLDhEQUFDQzswQkFDQ2hCLGFBQWFLLGNBQWMsbUJBQzNCLDhEQUFDZiw4REFBS0E7b0JBQUNTLE9BQU9BO29CQUFPa0IsYUFBYWhCOzs7Ozs7Ozs7OztZQUduQ0QsYUFBYUssY0FBYyxtQkFBSyw4REFBQ1gsb0ZBQWVBO2dCQUFDSyxPQUFPQTs7Ozs7Ozs7Ozs7O0FBRzVEO0dBdkNTSjs7UUFDVVAsMERBQVFBO1FBQ1NHLHVEQUFRQTtRQUNKQyx3REFBT0E7OztLQUh0Q0c7QUE2Q1QsTUFBTXFCLGlCQUFpQix1QkFDdEI7UUFEdUIsRUFBRUUsU0FBUSxFQUF1QjtXQUN4RCw4REFBQzdCLDJEQUFlQTtRQUFDOEIsU0FBUyxLQUFLO1FBQUVDLGlCQUFpQixJQUFJO2tCQUNwREY7Ozs7OztBQUNlO01BSFpGOztBQU1OLCtEQUFlLE1BQUFoQyx5REFBVUEsQ0FBQ1csS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB3aXRoTGF5b3V0IH0gZnJvbSAnbGF5b3V0L0xheW91dCdcbmltcG9ydCBJY29uTGluayBmcm9tICdjb21wb25lbnRzL0ljb25MaW5rL0ljb25MaW5rJ1xuaW1wb3J0IEluZGV4SGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvSW5kZXhIZWFkZXIvSW5kZXhIZWFkZXInXG5pbXBvcnQgSW5kZXhGb3JtIGZyb20gJ2NvbXBvbmVudHMvSW5kZXhGb3JtL0luZGV4Rm9ybSdcbmltcG9ydCB7IHVzZUFsaWFzIH0gZnJvbSAnY29udGV4dC9BbGlhc0NvbnRleHQnXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IE1vZGFsIGZyb20gJ2NvbXBvbmVudHMvTW9kYWwvTW9kYWwnXG5pbXBvcnQgdXNlTW9kYWwgZnJvbSAnaG9va3MvdXNlLW1vZGFsJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCAqIGFzIGNvb2tpZSBmcm9tICdjb29raWUnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnY29udGV4dC9BdXRoQ29udGV4dCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFFSQ29kZUNvbnRhaW5lciBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvUVJDb2RlQ29udGFpbmVyL1FSQ29kZUNvbnRhaW5lcidcblxudHlwZSBJUHJvcHMgPSB7XG5cdGlzQXV0aDogYm9vbGVhblxuXHR1c2VyPzoge1xuXHRcdG5hbWU6IHN0cmluZ1xuXHR9XG5cdHRva2VuOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gSG9tZSh7IGlzQXV0aCwgdXNlciwgdG9rZW4gfTogSVByb3BzKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCB7IGFsaWFzIH0gPSB1c2VBbGlhcygpXG5cdGNvbnN0IHsgbW9kYWxPcGVuLCBjbG9zZSwgb3BlbiB9ID0gdXNlTW9kYWwoKVxuXHRjb25zdCB7IG9uQ2hhbmdlQXV0aCwgb25DaGFuZ2VOYW1lIH0gPSB1c2VBdXRoKClcblx0Y29uc3QgW3R5cGVPZlVybCwgc2V0VHlwZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoaXNBdXRoKSB7XG5cdFx0XHRvbkNoYW5nZUF1dGgoaXNBdXRoKVxuXHRcdFx0b25DaGFuZ2VOYW1lKHVzZXI/Lm5hbWUpXG5cdFx0fVxuXHR9LCBbaXNBdXRoXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5kZXh9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dENvbnRhaW5lcn0+XG5cdFx0XHRcdDxJY29uTGluayB0eXBlT2ZVcmw9e3R5cGVPZlVybH0gc2V0VHlwZT17c2V0VHlwZX0gLz5cblx0XHRcdFx0PEluZGV4SGVhZGVyIC8+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRPdXIgdG9vbCBhbGxvd3MgeW91IHRvIHNlYW1sZXNzbHkgdHJhY2sgeW91ciBhdWRpZW5jZSB3aXRoIHNpbXBsZVxuXHRcdFx0XHRcdFx0YW5kIGVhc3ktdG8tcmVtZW1iZXIgeWV0IHBvd2VyZnVsIGxpbmtzIGFuZCBwcm92aWRlIHlvdXIgY3VzdG9tZXJzIGFcblx0XHRcdFx0XHRcdHVuaXF1ZSB0YWlsb3JlZCBleHBlcmllbmNlLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxJbmRleEZvcm0gaGFuZGxlT3Blbj17b3Blbn0gdG9rZW49e3Rva2VufSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9Db250YWluZXJ9PlxuXHRcdFx0XHRcdDxidXR0b24+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uPkxlYXJuIE1vcmU8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxNb2RhbENvbnRhaW5lcj5cblx0XHRcdFx0e21vZGFsT3BlbiAmJiB0eXBlT2ZVcmwgPT09IDAgJiYgKFxuXHRcdFx0XHRcdDxNb2RhbCBhbGlhcz17YWxpYXN9IGhhbmRsZUNsb3NlPXtjbG9zZX0gLz5cblx0XHRcdFx0KX1cblx0XHRcdDwvTW9kYWxDb250YWluZXI+XG5cdFx0XHR7bW9kYWxPcGVuICYmIHR5cGVPZlVybCA9PT0gMSAmJiA8UVJDb2RlQ29udGFpbmVyIGFsaWFzPXthbGlhc30gLz59XG5cdFx0PC9kaXY+XG5cdClcbn1cblxudHlwZSBNb2RhbENvbnRhaW5lclByb3BzID0ge1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbmNvbnN0IE1vZGFsQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfTogTW9kYWxDb250YWluZXJQcm9wcykgPT4gKFxuXHQ8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBleGl0QmVmb3JlRW50ZXI9e3RydWV9PlxuXHRcdHtjaGlsZHJlbn1cblx0PC9BbmltYXRlUHJlc2VuY2U+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMYXlvdXQoSG9tZSlcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XG5cdGNvbnN0IGNvb2tpZXMgPSBjb29raWUucGFyc2UoY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgfHwgJycpXG5cblx0aWYgKCFjb29raWVzLlRPS0VOKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3BzOiB7IGlzQXV0aDogZmFsc2UsIHVzZXI6IG51bGwsIHRva2VuOiBudWxsIH0sXG5cdFx0fVxuXHR9XG5cdGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAxL2FwaSdcblx0YXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7Y29va2llcy5UT0tFTn1gXG5cblx0dHJ5IHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXV0aC9wcm9maWxlJylcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0aXNBdXRoOiB0cnVlLFxuXHRcdFx0XHR1c2VyOiB7XG5cdFx0XHRcdFx0bmFtZTogZGF0YS5kYXRhLm5hbWUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRva2VuOiBjb29raWVzLlRPS0VOLFxuXHRcdFx0fSxcblx0XHR9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdGlzQXV0aDogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwid2l0aExheW91dCIsIkljb25MaW5rIiwiSW5kZXhIZWFkZXIiLCJJbmRleEZvcm0iLCJ1c2VBbGlhcyIsIkFuaW1hdGVQcmVzZW5jZSIsIk1vZGFsIiwidXNlTW9kYWwiLCJ1c2VBdXRoIiwidXNlRWZmZWN0IiwiUVJDb2RlQ29udGFpbmVyIiwiSG9tZSIsImlzQXV0aCIsInVzZXIiLCJ0b2tlbiIsImFsaWFzIiwibW9kYWxPcGVuIiwiY2xvc2UiLCJvcGVuIiwib25DaGFuZ2VBdXRoIiwib25DaGFuZ2VOYW1lIiwidHlwZU9mVXJsIiwic2V0VHlwZSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbmRleCIsImlucHV0Q29udGFpbmVyIiwicCIsImhhbmRsZU9wZW4iLCJpbmZvQ29udGFpbmVyIiwiYnV0dG9uIiwiTW9kYWxDb250YWluZXIiLCJoYW5kbGVDbG9zZSIsImNoaWxkcmVuIiwiaW5pdGlhbCIsImV4aXRCZWZvcmVFbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});