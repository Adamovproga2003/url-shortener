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

/***/ "./components/QRCodeContainer/QRCodeContainer.tsx":
/*!********************************************************!*\
  !*** ./components/QRCodeContainer/QRCodeContainer.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qr-code */ \"./node_modules/react-qr-code/lib/index.js\");\n/* harmony import */ var _QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QRCodeContainer.module.css */ \"./components/QRCodeContainer/QRCodeContainer.module.css\");\n/* harmony import */ var _QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\n\nconst dropIn = {\n    hidden: {\n        opacity: 0\n    },\n    visible: {\n        opacity: 1\n    },\n    exit: {\n        opacity: 0\n    }\n};\nconst QRCodeContainer = (param)=>{\n    let { alias  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: (_QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().QRCodeContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_code__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            value: \"http://localhost:3000/redirect/\".concat(alias),\n            className: (_QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().whiteBorder)\n        }, void 0, false, {\n            fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\components\\\\QRCodeContainer\\\\QRCodeContainer.tsx\",\n            lineNumber: 26,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\projects_for_freelance\\\\Url-shortener\\\\client\\\\components\\\\QRCodeContainer\\\\QRCodeContainer.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n_c = QRCodeContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QRCodeContainer);\nvar _c;\n$RefreshReg$(_c, \"QRCodeContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1FSQ29kZUNvbnRhaW5lci9RUkNvZGVDb250YWluZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDUztBQUNlO0FBRVg7QUFNdEMsTUFBTUksU0FBUztJQUNkQyxRQUFRO1FBQ1BDLFNBQVM7SUFDVjtJQUNBQyxTQUFTO1FBQ1JELFNBQVM7SUFDVjtJQUNBRSxNQUFNO1FBQ0xGLFNBQVM7SUFDVjtBQUNEO0FBRUEsTUFBTUcsa0JBQTZCLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDNUMscUJBQ0MsOERBQUNQLHFEQUFVO1FBQUNTLFdBQVdWLG9GQUFzQjtrQkFDNUMsNEVBQUNELHFEQUFNQTtZQUNOWSxPQUFPLGtDQUF3QyxPQUFOSDtZQUN6Q0UsV0FBV1YsZ0ZBQWtCOzs7Ozs7Ozs7OztBQUlqQztLQVRNTztBQVdOLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUVJDb2RlQ29udGFpbmVyL1FSQ29kZUNvbnRhaW5lci50c3g/OWFmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBRUkNvZGUgZnJvbSAncmVhY3QtcXItY29kZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1FSQ29kZUNvbnRhaW5lci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuXHRhbGlhczogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IGRyb3BJbiA9IHtcclxuXHRoaWRkZW46IHtcclxuXHRcdG9wYWNpdHk6IDAsXHJcblx0fSxcclxuXHR2aXNpYmxlOiB7XHJcblx0XHRvcGFjaXR5OiAxLFxyXG5cdH0sXHJcblx0ZXhpdDoge1xyXG5cdFx0b3BhY2l0eTogMCxcclxuXHR9LFxyXG59XHJcblxyXG5jb25zdCBRUkNvZGVDb250YWluZXI6IEZDPFByb3BzPiA9ICh7IGFsaWFzIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMuUVJDb2RlQ29udGFpbmVyfT5cclxuXHRcdFx0PFFSQ29kZVxyXG5cdFx0XHRcdHZhbHVlPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZGlyZWN0LyR7YWxpYXN9YH1cclxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy53aGl0ZUJvcmRlcn1cclxuXHRcdFx0Lz5cclxuXHRcdDwvbW90aW9uLmRpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFFSQ29kZUNvbnRhaW5lclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJRUkNvZGUiLCJzdHlsZXMiLCJtb3Rpb24iLCJkcm9wSW4iLCJoaWRkZW4iLCJvcGFjaXR5IiwidmlzaWJsZSIsImV4aXQiLCJRUkNvZGVDb250YWluZXIiLCJhbGlhcyIsImRpdiIsImNsYXNzTmFtZSIsInZhbHVlIiwid2hpdGVCb3JkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/QRCodeContainer/QRCodeContainer.tsx\n"));

/***/ })

});