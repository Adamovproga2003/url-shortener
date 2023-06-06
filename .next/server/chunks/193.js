"use strict";
exports.id = 193;
exports.ids = [193];
exports.modules = {

/***/ 1193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ ResponseProvider),
/* harmony export */   "D": () => (/* binding */ useResponse)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6094);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([helpers_alerts__WEBPACK_IMPORTED_MODULE_1__]);
helpers_alerts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const responseContextDefaultValues = {
    message: null,
    errors: null,
    warn: null,
    onChangeMessage: (msg)=>{},
    onChangeErrors: (err)=>{},
    onChangeWarn: (msg)=>{}
};
const ResponseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(responseContextDefaultValues);
function useResponse() {
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ResponseContext);
}
function ResponseProvider({ children  }) {
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [warn, setWarn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const onChangeMessage = (msg)=>{
        setMessage(msg);
    };
    const onChangeErrors = (err)=>{
        setErrors(err);
    };
    const onChangeWarn = (warn)=>{
        setWarn(warn);
    };
    const value = {
        message,
        errors,
        warn,
        onChangeMessage,
        onChangeErrors,
        onChangeWarn
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (errors && errors.length > 0) {
            (0,helpers_alerts__WEBPACK_IMPORTED_MODULE_1__/* .showErrors */ .dd)(errors, ()=>onChangeErrors(null));
        }
    }, [
        errors
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (message) {
            (0,helpers_alerts__WEBPACK_IMPORTED_MODULE_1__/* .showSuccess */ .s$)(message, ()=>onChangeMessage(null));
        }
    }, [
        message
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (warn) {
            (0,helpers_alerts__WEBPACK_IMPORTED_MODULE_1__/* .showWarn */ .xN)(warn, ()=>onChangeWarn(null));
        }
    }, [
        warn
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResponseContext.Provider, {
            value: value,
            children: children
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6094:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dd": () => (/* binding */ showErrors),
/* harmony export */   "s$": () => (/* binding */ showSuccess),
/* harmony export */   "xN": () => (/* binding */ showWarn)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const showErrors = (values, onClose)=>{
    values.map((error)=>react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(error, {
            onClose
        }));
};
const showSuccess = (value, onClose)=>{
    react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(value, {
        onClose
    });
};
const showWarn = (value, onClose)=>{
    react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.warn(value, {
        onClose
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;