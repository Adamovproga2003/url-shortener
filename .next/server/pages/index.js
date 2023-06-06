(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2979:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "IconLink_icon__pXzMD",
	"active": "IconLink_active__ahS6U"
};


/***/ }),

/***/ 7887:
/***/ ((module) => {

// Exports
module.exports = {
	"aliasContainer": "AliasContainer_aliasContainer__hIl91",
	"addAliasButton": "AliasContainer_addAliasButton__fpN1F",
	"isOpen": "AliasContainer_isOpen__7lWCP",
	"aliasInput": "AliasContainer_aliasInput__x85Mu",
	"success": "AliasContainer_success__RVihN",
	"failed": "AliasContainer_failed__CnmIH"
};


/***/ }),

/***/ 8631:
/***/ ((module) => {

// Exports
module.exports = {
	"index": "IndexForm_index__V9Ii_",
	"formIcon": "IndexForm_formIcon__CpJ1x"
};


/***/ }),

/***/ 7246:
/***/ ((module) => {

// Exports
module.exports = {
	"indexHeader": "IndexHeader_indexHeader__MkiGj"
};


/***/ }),

/***/ 1250:
/***/ ((module) => {

// Exports
module.exports = {
	"QRCodeContainer": "QRCodeContainer_QRCodeContainer__1Gh9M",
	"whiteBorder": "QRCodeContainer_whiteBorder__50JXu",
	"container": "QRCodeContainer_container__mQWhn"
};


/***/ }),

/***/ 8874:
/***/ ((module) => {

// Exports
module.exports = {
	"index": "Home_index__NcNEJ",
	"opacity": "Home_opacity__NVrN4",
	"inputContainer": "Home_inputContainer__L0mcy",
	"infoContainer": "Home_infoContainer__8iuIo",
	"responseContainer": "Home_responseContainer__7GNPY",
	"container": "Home_container__Ennsq"
};


/***/ }),

/***/ 8748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Backdrop = ({ children , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        onClick: onClick,
        className: "backdrop",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Backdrop);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconLink_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2979);
/* harmony import */ var _IconLink_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_IconLink_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);




const IconLink = ({ typeOfUrl , setType , close  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_IconLink_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>{
                    close();
                    setType(0);
                },
                className: typeOfUrl === 0 ? (_IconLink_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiLink, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>{
                    close();
                    setType(1);
                },
                className: typeOfUrl === 1 ? (_IconLink_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdQrCode, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconLink);


/***/ }),

/***/ 1332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AliasContainer_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7887);
/* harmony import */ var _AliasContainer_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_AliasContainer_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5452);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const variantsInput = {
    enter: {
        width: 150,
        opacity: 0,
        height: "24px"
    },
    center: {
        width: "100%",
        zIndex: 1,
        opacity: 1,
        height: "100%"
    },
    exit: {
        display: "none",
        height: "24px"
    }
};
const variantsSpan = {
    enter: {
        width: "100%",
        opacity: 0,
        height: "54px"
    },
    center: {
        width: 150,
        zIndex: 1,
        opacity: 1,
        height: "24px"
    },
    exit: {
        display: "none",
        height: "54px"
    }
};
const AliasContainer = ({ alias , handleChange  })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isValid, setIsValid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const onBlur = ()=>{
        if (!alias) {
            setIsOpen(false);
        }
    };
    const onChangeAlias = (e)=>{
        handleChange(e);
        const value = e.currentTarget.value;
        if (value) {
            setIsLoading(true);
            axios__WEBPACK_IMPORTED_MODULE_7__["default"].defaults.baseURL = "http://localhost:4001/api/" || 0;
            axios__WEBPACK_IMPORTED_MODULE_7__["default"].defaults.headers.common["Content-Type"] = "application/json";
            axios__WEBPACK_IMPORTED_MODULE_7__["default"].request({
                url: "url/validate",
                method: "post",
                data: {
                    alias: value
                }
            }).then((response)=>setIsValid(true)).catch((err)=>setIsValid(false)).finally(()=>setIsLoading(false));
        }
        setIsValid(null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_AliasContainer_module_css__WEBPACK_IMPORTED_MODULE_8___default().aliasContainer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {
            type: "button",
            onClick: ()=>setIsOpen(true),
            animate: {
                width: isOpen ? "100%" : 150,
                transitionDuration: ".5s"
            },
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
                [(_AliasContainer_module_css__WEBPACK_IMPORTED_MODULE_8___default().isOpen)]: isOpen
            }),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                initial: false,
                children: [
                    isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                        variants: variantsInput,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        style: {
                            width: "100%"
                        },
                        className: (_AliasContainer_module_css__WEBPACK_IMPORTED_MODULE_8___default().aliasInput),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.input, {
                                type: "text",
                                placeholder: "Alias",
                                autoFocus: true,
                                onBlur: onBlur,
                                name: "alias",
                                onChange: onChangeAlias,
                                value: alias
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_4__.ClipLoader, {
                                loading: isLoading,
                                "aria-label": "Loading Spinner",
                                "data-testid": "loader",
                                size: 20
                            }),
                            isValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.HiOutlineCheckCircle, {
                                className: (_AliasContainer_module_css__WEBPACK_IMPORTED_MODULE_8___default().success)
                            }),
                            isValid !== null && !isValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__.RxCrossCircled, {
                                className: (_AliasContainer_module_css__WEBPACK_IMPORTED_MODULE_8___default().failed)
                            })
                        ]
                    }, 1),
                    !isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.span, {
                        variants: variantsSpan,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: "Add alias"
                    }, 2),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.HiPlus, {
                        onClick: ()=>setIsOpen(false)
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AliasContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2807:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IndexForm_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8631);
/* harmony import */ var _IndexForm_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_IndexForm_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AliasContainer_AliasContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1332);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var _context_AliasContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8229);
/* harmony import */ var context_ResponseContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1193);
/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(175);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AliasContainer_AliasContainer__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__, context_ResponseContext__WEBPACK_IMPORTED_MODULE_6__]);
([_AliasContainer_AliasContainer__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__, context_ResponseContext__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const IndexForm = ({ handleOpen , token  })=>{
    const { isAuth  } = (0,context_AuthContext__WEBPACK_IMPORTED_MODULE_7__/* .useAuth */ .a)();
    const { onChangeMessage , onChangeWarn , onChangeErrors , errors  } = (0,context_ResponseContext__WEBPACK_IMPORTED_MODULE_6__/* .useResponse */ .D)();
    const onSubmit = async (values)=>{
        const instance = axios__WEBPACK_IMPORTED_MODULE_4__["default"].create({
            baseURL: "http://localhost:4001/api",
            withCredentials: true,
            headers: {
                "Authorization": `Bearer ${isAuth && token}`
            }
        });
        instance.post("/url", {
            originalUrl: values.url,
            alias: values.alias
        }, {
            validateStatus: function(status) {
                return status <= 302;
            }
        }).then(function(res) {
            if (res.status === 302) {
                onChangeWarn(res.data.message);
            } else {
                onChangeMessage(res.data.message);
            }
            onChangeAlias(res.data.hash);
            handleOpen();
        }).catch(function(res) {
            onChangeErrors([
                res.response.data.errors
            ]);
        });
    };
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
        initialValues: {
            url: "",
            alias: ""
        },
        onSubmit: onSubmit
    });
    const { onChangeAlias  } = (0,_context_AliasContext__WEBPACK_IMPORTED_MODULE_5__/* .useAlias */ .n)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_IndexForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().index),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: formik.handleSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    placeholder: "https://dribbble.com/shots/5953452",
                    name: "url",
                    onChange: formik.handleChange,
                    value: formik.values.url
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_IndexForm_module_css__WEBPACK_IMPORTED_MODULE_8___default().formIcon),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiLinkM, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    children: "Try now"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AliasContainer_AliasContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    alias: formik.values.alias,
                    handleChange: formik.handleChange
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ IndexHeader_IndexHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-simple-typewriter"
const external_react_simple_typewriter_namespaceObject = require("react-simple-typewriter");
// EXTERNAL MODULE: ./components/IndexHeader/IndexHeader.module.css
var IndexHeader_module = __webpack_require__(7246);
var IndexHeader_module_default = /*#__PURE__*/__webpack_require__.n(IndexHeader_module);
;// CONCATENATED MODULE: ./components/IndexHeader/IndexHeader.tsx



const IndexHeader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (IndexHeader_module_default()).indexHeader,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
            children: [
                "A simple link but powerful tool for",
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_simple_typewriter_namespaceObject.Typewriter, {
                        words: [
                            "Joy.",
                            "Need.",
                            "You.",
                            "Everyone."
                        ],
                        loop: 0,
                        cursor: true,
                        cursorStyle: "|",
                        typeSpeed: 100,
                        deleteSpeed: 70,
                        delaySpeed: 2000
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const IndexHeader_IndexHeader = (IndexHeader);


/***/ }),

/***/ 5559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8748);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
};
const Modal = ({ handleClose , alias  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        onClick: handleClose,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            onClick: (e)=>e.stopPropagation(),
            className: "modal-url orange-gradient",
            variants: dropIn,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalText, {
                    alias: alias
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalButton, {
                    alias: alias
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalCloseButton, {
                    onClick: handleClose
                })
            ]
        })
    });
};
const ModalText = ({ alias  })=>{
    if (alias.length > 80) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "modal-text",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    children: [
                        "http://localhost:3000/redirect/",
                        alias.slice(0, 3)
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "..."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: alias.slice(-34)
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "modal-text text-left",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
            children: [
                "http://localhost:3000/redirect/",
                alias
            ]
        })
    });
};
const ModalCloseButton = ({ onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
        className: "close-button",
        type: "button",
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoCloseSharp, {})
    });
};
const ModalButton = ({ alias  })=>{
    const [isCopy, setCopy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isCopy) {
            const timer = setTimeout(()=>{
                setCopy(false);
            }, 1000);
            return ()=>clearTimeout(timer);
        }
    }, [
        isCopy
    ]);
    const copyFunc = ()=>{
        navigator.clipboard.writeText(`http://localhost:3000/redirect/${alias}`);
        setCopy(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
        type: "button",
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.95
        },
        className: "copy-button",
        onClick: copyFunc,
        children: isCopy ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCopy, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaRegCopy, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3267);
/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_qr_code__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1250);
/* harmony import */ var _QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const opacity = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};
const QRCodeContainer = ({ alias , close  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        style: {
            margin: "auto"
        },
        className: (_QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
            variants: opacity,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            className: (_QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().QRCodeContainer),
            autoFocus: true,
            onBlur: close,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_qr_code__WEBPACK_IMPORTED_MODULE_2___default()), {
                value: `http://localhost:3000/redirect/${alias}`,
                className: (_QRCodeContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().whiteBorder)
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QRCodeContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ AliasProvider),
/* harmony export */   "n": () => (/* binding */ useAlias)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const aliasContextDefaultValues = {
    alias: "",
    onChangeAlias: (alias)=>{}
};
const AliasContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(aliasContextDefaultValues);
function useAlias() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AliasContext);
}
function AliasProvider({ children  }) {
    const [alias, setAlias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onChangeAlias = (alias)=>{
        setAlias(alias);
    };
    const value = {
        alias,
        onChangeAlias
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AliasContext.Provider, {
            value: value,
            children: children
        })
    });
}


/***/ }),

/***/ 395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Centralizes modal control
const useModal = ()=>{
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const close = ()=>setModalOpen(false);
    const open = ()=>setModalOpen(true);
    return {
        modalOpen,
        close,
        open
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useModal);


/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8874);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1779);
/* harmony import */ var components_IconLink_IconLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(956);
/* harmony import */ var components_IndexHeader_IndexHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8170);
/* harmony import */ var components_IndexForm_IndexForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2807);
/* harmony import */ var context_AliasContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8229);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6197);
/* harmony import */ var components_Modal_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5559);
/* harmony import */ var hooks_use_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(395);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9648);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(175);
/* harmony import */ var _components_QRCodeContainer_QRCodeContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(835);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layout_Layout__WEBPACK_IMPORTED_MODULE_2__, components_IndexForm_IndexForm__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_7__, components_Modal_Modal__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_10__, _components_QRCodeContainer_QRCodeContainer__WEBPACK_IMPORTED_MODULE_13__]);
([layout_Layout__WEBPACK_IMPORTED_MODULE_2__, components_IndexForm_IndexForm__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_7__, components_Modal_Modal__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_10__, _components_QRCodeContainer_QRCodeContainer__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function Home({ isAuth , user , token  }) {
    const { alias  } = (0,context_AliasContext__WEBPACK_IMPORTED_MODULE_6__/* .useAlias */ .n)();
    const { modalOpen , close , open  } = (0,hooks_use_modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { onChangeAuth , onChangeName  } = (0,context_AuthContext__WEBPACK_IMPORTED_MODULE_12__/* .useAuth */ .a)();
    const [typeOfUrl, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isAuth) {
            onChangeAuth(isAuth);
            onChangeName(user?.name);
        }
    }, [
        isAuth
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().index),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_IconLink_IconLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        typeOfUrl: typeOfUrl,
                        setType: setType,
                        close: close
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_IndexHeader_IndexHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Our tool allows you to seamlessly track your audience with simple and easy-to-remember yet powerful links and provide your customers a unique tailored experience."
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_IndexForm_IndexForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        handleOpen: open,
                        token: token
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().infoContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                children: "Get Started"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                children: "Learn More"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContainer, {
                children: modalOpen && typeOfUrl === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Modal_Modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    alias: alias,
                    handleClose: close
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QRContainer, {
                children: modalOpen && typeOfUrl === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_QRCodeContainer_QRCodeContainer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    alias: alias,
                    close: close
                })
            })
        ]
    });
}
const ModalContainer = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
        initial: false,
        exitBeforeEnter: true,
        children: children
    });
const QRContainer = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
        initial: false,
        exitBeforeEnter: true,
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* .withLayout */ .X)(Home));
const getServerSideProps = async (context)=>{
    const cookies = cookie__WEBPACK_IMPORTED_MODULE_11__.parse(context.req.headers.cookie || "");
    if (!cookies.TOKEN) {
        return {
            props: {
                isAuth: false,
                user: null,
                token: null
            }
        };
    }
    axios__WEBPACK_IMPORTED_MODULE_10__["default"].defaults.baseURL = "http://localhost:4001/api";
    axios__WEBPACK_IMPORTED_MODULE_10__["default"].defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_10__["default"].defaults.headers.Authorization = `Bearer ${cookies.TOKEN}`;
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_10__["default"].get("/auth/profile");
        return {
            props: {
                isAuth: true,
                user: {
                    name: data.data.name
                },
                token: cookies.TOKEN
            }
        };
    } catch (err) {
        console.error(err);
        return {
            props: {
                isAuth: false
            }
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4802:
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 1111:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/hi");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 8098:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ri");

/***/ }),

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/rx");

/***/ }),

/***/ 3267:
/***/ ((module) => {

"use strict";
module.exports = require("react-qr-code");

/***/ }),

/***/ 8176:
/***/ ((module) => {

"use strict";
module.exports = require("react-spinners");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,193,779], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();