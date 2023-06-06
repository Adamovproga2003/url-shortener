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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layout/Layout */ \"./layout/Layout.tsx\");\n/* harmony import */ var components_IconLink_IconLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/IconLink/IconLink */ \"./components/IconLink/IconLink.tsx\");\n/* harmony import */ var components_IndexHeader_IndexHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/IndexHeader/IndexHeader */ \"./components/IndexHeader/IndexHeader.tsx\");\n/* harmony import */ var components_IndexForm_IndexForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/IndexForm/IndexForm */ \"./components/IndexForm/IndexForm.tsx\");\n/* harmony import */ var context_AliasContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/AliasContext */ \"./context/AliasContext.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Modal/Modal */ \"./components/Modal/Modal.tsx\");\n/* harmony import */ var hooks_use_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks/use-modal */ \"./hooks/use-modal.ts\");\n/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var _components_QRCodeContainer_QRCodeContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../components/QRCodeContainer/QRCodeContainer */ \"./components/QRCodeContainer/QRCodeContainer.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home(param) {\n    let { isAuth , user , token  } = param;\n    _s();\n    const { alias  } = (0,context_AliasContext__WEBPACK_IMPORTED_MODULE_6__.useAlias)();\n    const { modalOpen , close , open  } = (0,hooks_use_modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    const { onChangeAuth , onChangeName  } = (0,context_AuthContext__WEBPACK_IMPORTED_MODULE_9__.useAuth)();\n    const [typeOfUrl, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isAuth) {\n            onChangeAuth(isAuth);\n            onChangeName(user === null || user === void 0 ? void 0 : user.name);\n        }\n    }, [\n        isAuth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().index),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().inputContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_IconLink_IconLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_IndexHeader_IndexHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Our tool allows you to seamlessly track your audience with simple and easy-to-remember yet powerful links and provide your customers a unique tailored experience.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_IndexForm_IndexForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        handleOpen: open,\n                        token: token\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().infoContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Get Started\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Learn More\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContainer, {\n                children: modalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    alias: alias,\n                    handleClose: close\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 19\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 57,\n                columnNumber: 4\n            }, this),\n            modalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QRCodeContainer_QRCodeContainer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                alias: alias\n            }, void 0, false, {\n                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 60,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"ubsjB5vR/433UuD0YGAFwX40GEE=\", false, function() {\n    return [\n        context_AliasContext__WEBPACK_IMPORTED_MODULE_6__.useAlias,\n        hooks_use_modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        context_AuthContext__WEBPACK_IMPORTED_MODULE_9__.useAuth\n    ];\n});\n_c = Home;\nconst ModalContainer = (param)=>/*#__PURE__*/ {\n    let { children  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.AnimatePresence, {\n        initial: false,\n        exitBeforeEnter: true,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 70,\n        columnNumber: 2\n    }, undefined);\n};\n_c1 = ModalContainer;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,layout_Layout__WEBPACK_IMPORTED_MODULE_2__.withLayout)(Home));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"ModalContainer\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDRjtBQUNEO0FBQ1M7QUFDUztBQUNOO0FBQ1A7QUFDQTtBQUNMO0FBQ0o7QUFJTztBQUNaO0FBQytDO0FBVWhGLFNBQVNhLEtBQUssS0FBK0IsRUFBZTtRQUE5QyxFQUFFQyxPQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFVLEdBQS9COztJQUNiLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdYLDhEQUFRQTtJQUMxQixNQUFNLEVBQUVZLFVBQVMsRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR1gsMkRBQVFBO0lBQzNDLE1BQU0sRUFBRVksYUFBWSxFQUFFQyxhQUFZLEVBQUUsR0FBR1osNERBQU9BO0lBQzlDLE1BQU0sQ0FBQ2EsV0FBV0MsUUFBUSxHQUFHdkIsK0NBQVFBLENBQVM7SUFFOUNVLGdEQUFTQSxDQUFDLElBQU07UUFDZixJQUFJRyxRQUFRO1lBQ1hPLGFBQWFQO1lBQ2JRLGFBQWFQLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVUsSUFBSTtRQUN4QixDQUFDO0lBQ0YsR0FBRztRQUFDWDtLQUFPO0lBRVgscUJBQ0MsOERBQUNZO1FBQUlDLFdBQVczQix1RUFBWTs7MEJBQzNCLDhEQUFDMEI7Z0JBQUlDLFdBQVczQixnRkFBcUI7O2tDQUNwQyw4REFBQ0csb0VBQVFBOzs7OztrQ0FDVCw4REFBQ0MsMEVBQVdBOzs7OztrQ0FDWiw4REFBQ3NCO2tDQUNBLDRFQUFDSTtzQ0FBRTs7Ozs7Ozs7Ozs7a0NBTUosOERBQUN6QixzRUFBU0E7d0JBQUMwQixZQUFZWDt3QkFBTUosT0FBT0E7Ozs7OztrQ0FDcEMsOERBQUNVO3dCQUFJQyxXQUFXM0IsK0VBQW9COzswQ0FDbkMsOERBQUNpQzswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDQTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdWLDhEQUFDQzswQkFDQ2hCLDJCQUFhLDhEQUFDViw4REFBS0E7b0JBQUNTLE9BQU9BO29CQUFPa0IsYUFBYWhCOzs7Ozs7Ozs7OztZQUVoREQsMkJBQWEsOERBQUNOLG9GQUFlQTtnQkFBQ0ssT0FBT0E7Ozs7Ozs7Ozs7OztBQUd6QztHQXJDU0o7O1FBQ1VQLDBEQUFRQTtRQUNTRyx1REFBUUE7UUFDSkMsd0RBQU9BOzs7S0FIdENHO0FBMkNULE1BQU1xQixpQkFBaUIsdUJBQ3RCO1FBRHVCLEVBQUVFLFNBQVEsRUFBdUI7V0FDeEQsOERBQUM3QiwyREFBZUE7UUFBQzhCLFNBQVMsS0FBSztRQUFFQyxpQkFBaUIsSUFBSTtrQkFDcERGOzs7Ozs7QUFDZTtNQUhaRjs7QUFNTiwrREFBZSxNQUFBaEMseURBQVVBLENBQUNXLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aExheW91dCB9IGZyb20gJ2xheW91dC9MYXlvdXQnXG5pbXBvcnQgSWNvbkxpbmsgZnJvbSAnY29tcG9uZW50cy9JY29uTGluay9JY29uTGluaydcbmltcG9ydCBJbmRleEhlYWRlciBmcm9tICdjb21wb25lbnRzL0luZGV4SGVhZGVyL0luZGV4SGVhZGVyJ1xuaW1wb3J0IEluZGV4Rm9ybSBmcm9tICdjb21wb25lbnRzL0luZGV4Rm9ybS9JbmRleEZvcm0nXG5pbXBvcnQgeyB1c2VBbGlhcyB9IGZyb20gJ2NvbnRleHQvQWxpYXNDb250ZXh0J1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBNb2RhbCBmcm9tICdjb21wb25lbnRzL01vZGFsL01vZGFsJ1xuaW1wb3J0IHVzZU1vZGFsIGZyb20gJ2hvb2tzL3VzZS1tb2RhbCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgKiBhcyBjb29raWUgZnJvbSAnY29va2llJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ2NvbnRleHQvQXV0aENvbnRleHQnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBRUkNvZGVDb250YWluZXIgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL1FSQ29kZUNvbnRhaW5lci9RUkNvZGVDb250YWluZXInXG5cbnR5cGUgSVByb3BzID0ge1xuXHRpc0F1dGg6IGJvb2xlYW5cblx0dXNlcj86IHtcblx0XHRuYW1lOiBzdHJpbmdcblx0fVxuXHR0b2tlbjogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIEhvbWUoeyBpc0F1dGgsIHVzZXIsIHRva2VuIH06IElQcm9wcyk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgeyBhbGlhcyB9ID0gdXNlQWxpYXMoKVxuXHRjb25zdCB7IG1vZGFsT3BlbiwgY2xvc2UsIG9wZW4gfSA9IHVzZU1vZGFsKClcblx0Y29uc3QgeyBvbkNoYW5nZUF1dGgsIG9uQ2hhbmdlTmFtZSB9ID0gdXNlQXV0aCgpXG5cdGNvbnN0IFt0eXBlT2ZVcmwsIHNldFR5cGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGlzQXV0aCkge1xuXHRcdFx0b25DaGFuZ2VBdXRoKGlzQXV0aClcblx0XHRcdG9uQ2hhbmdlTmFtZSh1c2VyPy5uYW1lKVxuXHRcdH1cblx0fSwgW2lzQXV0aF0pXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZGV4fT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250YWluZXJ9PlxuXHRcdFx0XHQ8SWNvbkxpbmsgLz5cblx0XHRcdFx0PEluZGV4SGVhZGVyIC8+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRPdXIgdG9vbCBhbGxvd3MgeW91IHRvIHNlYW1sZXNzbHkgdHJhY2sgeW91ciBhdWRpZW5jZSB3aXRoIHNpbXBsZVxuXHRcdFx0XHRcdFx0YW5kIGVhc3ktdG8tcmVtZW1iZXIgeWV0IHBvd2VyZnVsIGxpbmtzIGFuZCBwcm92aWRlIHlvdXIgY3VzdG9tZXJzIGFcblx0XHRcdFx0XHRcdHVuaXF1ZSB0YWlsb3JlZCBleHBlcmllbmNlLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxJbmRleEZvcm0gaGFuZGxlT3Blbj17b3Blbn0gdG9rZW49e3Rva2VufSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9Db250YWluZXJ9PlxuXHRcdFx0XHRcdDxidXR0b24+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uPkxlYXJuIE1vcmU8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxNb2RhbENvbnRhaW5lcj5cblx0XHRcdFx0e21vZGFsT3BlbiAmJiA8TW9kYWwgYWxpYXM9e2FsaWFzfSBoYW5kbGVDbG9zZT17Y2xvc2V9IC8+fVxuXHRcdFx0PC9Nb2RhbENvbnRhaW5lcj5cblx0XHRcdHttb2RhbE9wZW4gJiYgPFFSQ29kZUNvbnRhaW5lciBhbGlhcz17YWxpYXN9IC8+fVxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbnR5cGUgTW9kYWxDb250YWluZXJQcm9wcyA9IHtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZVxufVxuXG5jb25zdCBNb2RhbENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH06IE1vZGFsQ29udGFpbmVyUHJvcHMpID0+IChcblx0PEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gZXhpdEJlZm9yZUVudGVyPXt0cnVlfT5cblx0XHR7Y2hpbGRyZW59XG5cdDwvQW5pbWF0ZVByZXNlbmNlPlxuKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTGF5b3V0KEhvbWUpXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xuXHRjb25zdCBjb29raWVzID0gY29va2llLnBhcnNlKGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIHx8ICcnKVxuXG5cdGlmICghY29va2llcy5UT0tFTikge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm9wczogeyBpc0F1dGg6IGZhbHNlLCB1c2VyOiBudWxsLCB0b2tlbjogbnVsbCB9LFxuXHRcdH1cblx0fVxuXHRheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMS9hcGknXG5cdGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWVcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke2Nvb2tpZXMuVE9LRU59YFxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnL2F1dGgvcHJvZmlsZScpXG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdGlzQXV0aDogdHJ1ZSxcblx0XHRcdFx0dXNlcjoge1xuXHRcdFx0XHRcdG5hbWU6IGRhdGEuZGF0YS5uYW1lLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0b2tlbjogY29va2llcy5UT0tFTixcblx0XHRcdH0sXG5cdFx0fVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycilcblxuXHRcdHJldHVybiB7XG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHRpc0F1dGg6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHR9XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIndpdGhMYXlvdXQiLCJJY29uTGluayIsIkluZGV4SGVhZGVyIiwiSW5kZXhGb3JtIiwidXNlQWxpYXMiLCJBbmltYXRlUHJlc2VuY2UiLCJNb2RhbCIsInVzZU1vZGFsIiwidXNlQXV0aCIsInVzZUVmZmVjdCIsIlFSQ29kZUNvbnRhaW5lciIsIkhvbWUiLCJpc0F1dGgiLCJ1c2VyIiwidG9rZW4iLCJhbGlhcyIsIm1vZGFsT3BlbiIsImNsb3NlIiwib3BlbiIsIm9uQ2hhbmdlQXV0aCIsIm9uQ2hhbmdlTmFtZSIsInR5cGVPZlVybCIsInNldFR5cGUiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5kZXgiLCJpbnB1dENvbnRhaW5lciIsInAiLCJoYW5kbGVPcGVuIiwiaW5mb0NvbnRhaW5lciIsImJ1dHRvbiIsIk1vZGFsQ29udGFpbmVyIiwiaGFuZGxlQ2xvc2UiLCJjaGlsZHJlbiIsImluaXRpYWwiLCJleGl0QmVmb3JlRW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});