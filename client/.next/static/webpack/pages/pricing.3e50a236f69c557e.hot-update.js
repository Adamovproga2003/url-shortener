"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pricing",{

/***/ "./src/pages/pricing.tsx":
/*!*******************************!*\
  !*** ./src/pages/pricing.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! layout/Layout */ \"./layout/Layout.tsx\");\n/* harmony import */ var _styles_Pricing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/Pricing.module.css */ \"./src/styles/Pricing.module.css\");\n/* harmony import */ var _styles_Pricing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Pricing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/AuthContext */ \"./context/AuthContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst plans = [\n    {\n        title: \"Beginner\",\n        description: \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro omnis nostrum corporis minus quo quasi. Earum doloremque beatae officiis voluptatum deserunt accusantium quod labore exercitationem ad, tempore unde, quidem voluptatibus!\",\n        price: 10,\n        color: \"#EBBD32\"\n    },\n    {\n        title: \"Start\",\n        description: \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro omnis nostrum corporis minus quo quasi. Earum doloremque beatae officiis voluptatum deserunt accusantium quod labore exercitationem ad, tempore unde, quidem voluptatibus!\",\n        price: 15,\n        color: \"#ED8A30\"\n    },\n    {\n        title: \"VIP\",\n        description: \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro omnis nostrum corporis minus quo quasi. Earum doloremque beatae officiis voluptatum deserunt accusantium quod labore exercitationem ad, tempore unde, quidem voluptatibus!\",\n        price: 30,\n        color: \"#EF542E\"\n    }\n];\nconst Pricing = (param)=>{\n    let { isAuth , user  } = param;\n    _s();\n    const { onChangeAuth , onChangeName  } = (0,context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isAuth) {\n            onChangeAuth(isAuth);\n            onChangeName(user === null || user === void 0 ? void 0 : user.name);\n        }\n    }, [\n        isAuth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Pricing_module_css__WEBPACK_IMPORTED_MODULE_4___default().pricing), \" overflow-hidden\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row g-5\",\n            children: plans.map((p, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-sm-12 col-md-6 col-lg-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-3 rounded-3 \".concat((_styles_Pricing_module_css__WEBPACK_IMPORTED_MODULE_4___default().pricingCard)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    color: p.color\n                                },\n                                children: p.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\pricing.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: p.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\pricing.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    p.price,\n                                    \" $\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\pricing.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-grid\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn \".concat((_styles_Pricing_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderButton)),\n                                    type: \"button\",\n                                    children: \"Order\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\pricing.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\pricing.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\pricing.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, undefined)\n                }, \"plan-\".concat(idx), false, {\n                    fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\pricing.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 6\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\pricing.tsx\",\n            lineNumber: 60,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\src\\\\pages\\\\pricing.tsx\",\n        lineNumber: 59,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Pricing, \"CVpG2PfA2N7lga4EjW45yhY411w=\", false, function() {\n    return [\n        context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = Pricing;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,layout_Layout__WEBPACK_IMPORTED_MODULE_1__.withLayout)(Pricing));\nvar _c, _c1;\n$RefreshReg$(_c, \"Pricing\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJpY2luZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDUztBQUNkO0FBQ1E7QUFZN0MsTUFBTUksUUFBUTtJQUNiO1FBQ0NDLE9BQU87UUFDUEMsYUFDQztRQUNEQyxPQUFPO1FBQ1BDLE9BQU87SUFDUjtJQUNBO1FBQ0NILE9BQU87UUFDUEMsYUFDQztRQUNEQyxPQUFPO1FBQ1BDLE9BQU87SUFDUjtJQUNBO1FBQ0NILE9BQU87UUFDUEMsYUFDQztRQUNEQyxPQUFPO1FBQ1BDLE9BQU87SUFDUjtDQUNBO0FBVUQsTUFBTUMsVUFBc0IsU0FBc0I7UUFBckIsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUU7O0lBQzVDLE1BQU0sRUFBRUMsYUFBWSxFQUFFQyxhQUFZLEVBQUUsR0FBR1YsNERBQU9BO0lBRTlDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2YsSUFBSVEsUUFBUTtZQUNYRSxhQUFhRjtZQUNiRyxhQUFhRixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1HLElBQUk7UUFDeEIsQ0FBQztJQUNGLEdBQUc7UUFBQ0o7S0FBTztJQUVYLHFCQUNDLDhEQUFDSztRQUFJQyxXQUFXLEdBQWtCLE9BQWZmLDJFQUFjLEVBQUM7a0JBQ2pDLDRFQUFDYztZQUFJQyxXQUFVO3NCQUNiWixNQUFNYyxHQUFHLENBQUMsQ0FBQ0MsR0FBVUMsb0JBQ3JCLDhEQUFDTDtvQkFBSUMsV0FBWTs4QkFDaEIsNEVBQUNEO3dCQUFJQyxXQUFXLGlCQUFvQyxPQUFuQmYsK0VBQWtCOzswQ0FDbEQsOERBQUNxQjtnQ0FBR0MsT0FBTztvQ0FBRWYsT0FBT1csRUFBRVgsS0FBSztnQ0FBQzswQ0FBSVcsRUFBRWQsS0FBSzs7Ozs7OzBDQUN2Qyw4REFBQ2M7MENBQUdBLEVBQUViLFdBQVc7Ozs7OzswQ0FDakIsOERBQUNrQjs7b0NBQUlMLEVBQUVaLEtBQUs7b0NBQUM7Ozs7Ozs7MENBQ2IsOERBQUNRO2dDQUFJQyxXQUFZOzBDQUNoQiw0RUFBQ1M7b0NBQU9ULFdBQVcsT0FBMEIsT0FBbkJmLCtFQUFrQjtvQ0FBSTBCLE1BQUs7OENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQU5iLFFBQVksT0FBSlA7Ozs7Ozs7Ozs7Ozs7OztBQWdCakU7R0E5Qk1YOztRQUNrQ04sd0RBQU9BOzs7S0FEekNNOztBQWdDTiwrREFBZSxNQUFBVCx5REFBVUEsQ0FBQ1MsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJpY2luZy50c3g/MGQ4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoTGF5b3V0IH0gZnJvbSAnbGF5b3V0L0xheW91dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9QcmljaW5nLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ2NvbnRleHQvQXV0aENvbnRleHQnXHJcbmltcG9ydCAqIGFzIGNvb2tpZSBmcm9tICdjb29raWUnXHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmludGVyZmFjZSBJUGxhbiB7XHJcblx0dGl0bGU6IHN0cmluZ1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdcclxuXHRwcmljZTogbnVtYmVyXHJcblx0Y29sb3I6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBwbGFucyA9IFtcclxuXHR7XHJcblx0XHR0aXRsZTogJ0JlZ2lubmVyJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFBvcnJvIG9tbmlzIG5vc3RydW0gY29ycG9yaXMgbWludXMgcXVvIHF1YXNpLiBFYXJ1bSBkb2xvcmVtcXVlIGJlYXRhZSBvZmZpY2lpcyB2b2x1cHRhdHVtIGRlc2VydW50IGFjY3VzYW50aXVtIHF1b2QgbGFib3JlIGV4ZXJjaXRhdGlvbmVtIGFkLCB0ZW1wb3JlIHVuZGUsIHF1aWRlbSB2b2x1cHRhdGlidXMhJyxcclxuXHRcdHByaWNlOiAxMCxcclxuXHRcdGNvbG9yOiAnI0VCQkQzMicsXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogJ1N0YXJ0JyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFBvcnJvIG9tbmlzIG5vc3RydW0gY29ycG9yaXMgbWludXMgcXVvIHF1YXNpLiBFYXJ1bSBkb2xvcmVtcXVlIGJlYXRhZSBvZmZpY2lpcyB2b2x1cHRhdHVtIGRlc2VydW50IGFjY3VzYW50aXVtIHF1b2QgbGFib3JlIGV4ZXJjaXRhdGlvbmVtIGFkLCB0ZW1wb3JlIHVuZGUsIHF1aWRlbSB2b2x1cHRhdGlidXMhJyxcclxuXHRcdHByaWNlOiAxNSxcclxuXHRcdGNvbG9yOiAnI0VEOEEzMCcsXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogJ1ZJUCcsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBQb3JybyBvbW5pcyBub3N0cnVtIGNvcnBvcmlzIG1pbnVzIHF1byBxdWFzaS4gRWFydW0gZG9sb3JlbXF1ZSBiZWF0YWUgb2ZmaWNpaXMgdm9sdXB0YXR1bSBkZXNlcnVudCBhY2N1c2FudGl1bSBxdW9kIGxhYm9yZSBleGVyY2l0YXRpb25lbSBhZCwgdGVtcG9yZSB1bmRlLCBxdWlkZW0gdm9sdXB0YXRpYnVzIScsXHJcblx0XHRwcmljZTogMzAsXHJcblx0XHRjb2xvcjogJyNFRjU0MkUnLFxyXG5cdH0sXHJcbl1cclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG5cdGlzQXV0aDogYm9vbGVhblxyXG5cdHVzZXI/OiB7XHJcblx0XHRuYW1lOiBzdHJpbmdcclxuXHR9XHJcblx0dG9rZW46IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBQcmljaW5nOiBGQzxJUHJvcHM+ID0gKHsgaXNBdXRoLCB1c2VyIH0pID0+IHtcclxuXHRjb25zdCB7IG9uQ2hhbmdlQXV0aCwgb25DaGFuZ2VOYW1lIH0gPSB1c2VBdXRoKClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChpc0F1dGgpIHtcclxuXHRcdFx0b25DaGFuZ2VBdXRoKGlzQXV0aClcclxuXHRcdFx0b25DaGFuZ2VOYW1lKHVzZXI/Lm5hbWUpXHJcblx0XHR9XHJcblx0fSwgW2lzQXV0aF0pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnByaWNpbmd9IG92ZXJmbG93LWhpZGRlbmB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IGctNSc+XHJcblx0XHRcdFx0e3BsYW5zLm1hcCgocDogSVBsYW4sIGlkeDogbnVtYmVyKSA9PiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNGB9IGtleT17YHBsYW4tJHtpZHh9YH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcC0zIHJvdW5kZWQtMyAke3N0eWxlcy5wcmljaW5nQ2FyZH1gfT5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgc3R5bGU9e3sgY29sb3I6IHAuY29sb3IgfX0+e3AudGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8cD57cC5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHRcdFx0PGgzPntwLnByaWNlfSAkPC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGQtZ3JpZGB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2BidG4gJHtzdHlsZXMub3JkZXJCdXR0b259YH0gdHlwZT0nYnV0dG9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0T3JkZXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aExheW91dChQcmljaW5nKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XHJcblx0Y29uc3QgY29va2llcyA9IGNvb2tpZS5wYXJzZShjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSB8fCAnJylcclxuXHJcblx0aWYgKCFjb29raWVzLlRPS0VOKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczogeyBpc0F1dGg6IGZhbHNlLCB1c2VyOiBudWxsLCB0b2tlbjogbnVsbCB9LFxyXG5cdFx0fVxyXG5cdH1cclxuXHRheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMS9hcGknXHJcblx0YXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxyXG5cdGF4aW9zLmRlZmF1bHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHtjb29raWVzLlRPS0VOfWBcclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoJy9hdXRoL3Byb2ZpbGUnKVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRpc0F1dGg6IHRydWUsXHJcblx0XHRcdFx0dXNlcjoge1xyXG5cdFx0XHRcdFx0bmFtZTogZGF0YS5kYXRhLm5hbWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRpc0F1dGg6IGZhbHNlLFxyXG5cdFx0XHRcdHVzZXI6IG51bGwsXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ3aXRoTGF5b3V0Iiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlQXV0aCIsInBsYW5zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY29sb3IiLCJQcmljaW5nIiwiaXNBdXRoIiwidXNlciIsIm9uQ2hhbmdlQXV0aCIsIm9uQ2hhbmdlTmFtZSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwcmljaW5nIiwibWFwIiwicCIsImlkeCIsInByaWNpbmdDYXJkIiwiaDEiLCJzdHlsZSIsImgzIiwiYnV0dG9uIiwib3JkZXJCdXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pricing.tsx\n"));

/***/ })

});