webpackHotUpdate_N_E("pages/detail/[id]",{

/***/ "./pages/detail/[id]/index.js":
/*!************************************!*\
  !*** ./pages/detail/[id]/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled/containers */ \"./styled/containers.js\");\n/* harmony import */ var api_fetchColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api/fetchColor */ \"./api/fetchColor.js\");\n/* harmony import */ var styled_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled/button */ \"./styled/button.js\");\n/* harmony import */ var styled_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled/text */ \"./styled/text.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var api_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! api/utils */ \"./api/utils.js\");\n/* harmony import */ var components_Hr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Hr */ \"./components/Hr.js\");\n/* harmony import */ var components_MatchedColors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/MatchedColors */ \"./components/MatchedColors.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\nvar _jsxFileName = \"/Users/sodiey/Desktop/Dev/ReactProjects/next/my-next-app/pages/detail/[id]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar useSplitId = function useSplitId(id) {\n  var splitId = id.split('-');\n  var value = splitId[0];\n  var name = splitId[1];\n  var theme = splitId[2];\n  return [name, value, theme];\n};\n\nvar CopyText = function CopyText(_ref) {\n  var hasCopied = _ref.hasCopied,\n      contrast = _ref.contrast,\n      handleCopy = _ref.handleCopy;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      border: \"2px solid \".concat(hasCopied ? 'green' : contrast.value),\n      borderRadius: '10px',\n      padding: 5,\n      position: 'absolute',\n      top: 5,\n      right: 5\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_button__WEBPACK_IMPORTED_MODULE_5__[\"DryButton\"], {\n      onClick: handleCopy,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_text__WEBPACK_IMPORTED_MODULE_6__[\"WithThemeText\"], {\n        style: {\n          margin: 0\n        },\n        size: \".8rem\",\n        contrast: contrast.value,\n        id: \"copy-text\",\n        children: \"Copy\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = CopyText;\n\nvar RederItem = function RederItem(_ref2) {\n  _s();\n\n  var color = _ref2.color;\n  var hex = color.hex,\n      contrast = color.contrast,\n      name = color.name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      hasCopied = _useState[0],\n      setHasCopied = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (hasCopied) {\n      var cleanUp = setTimeout(function () {\n        setHasCopied(false);\n      }, 500);\n      return function () {\n        clearTimeout(cleanUp);\n      };\n    }\n  }, [hasCopied]);\n\n  var _handleCopy = function _handleCopy() {\n    var copyText = hex.value;\n    navigator.clipboard.writeText(copyText);\n    setHasCopied(true);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_containers__WEBPACK_IMPORTED_MODULE_3__[\"StyledColumn\"], {\n    color: hex.value,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_containers__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_text__WEBPACK_IMPORTED_MODULE_6__[\"WithThemeText\"], {\n        contrast: contrast.value,\n        children: name.value\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CopyText, {\n        hasCopied: hasCopied,\n        contrast: contrast,\n        handleCopy: _handleCopy\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_text__WEBPACK_IMPORTED_MODULE_6__[\"WithThemeText\"], {\n        style: {\n          fontSize: '1rem'\n        },\n        contrast: contrast.value,\n        children: hex.value\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          height: '100%',\n          display: 'flex',\n          flexDirection: 'column',\n          justifyContent: 'flex-end'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_Hr__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          contrast: contrast.value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/detail/[id]\",\n          as: \"\" + \"/detail/\".concat(Object(api_utils__WEBPACK_IMPORTED_MODULE_8__[\"generateParameter\"])({\n            value: hex.value,\n            name: name.value,\n            contrast: contrast.value\n          })),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_button__WEBPACK_IMPORTED_MODULE_5__[\"LinkButton\"], {\n            contrast: contrast.value,\n            children: \"See detail\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(RederItem, \"8la+TwVvYEVsEDQJCOz9L+hGa2I=\");\n\n_c2 = RederItem;\n\nvar SectionTitle = function SectionTitle(_ref3) {\n  var title = _ref3.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      width: '100vw',\n      paddingLeft: '3rem',\n      textAlign: 'left'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_Hr__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 105,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = SectionTitle;\n\nvar HeaderDetail = function HeaderDetail(_ref4) {\n  var _ref4$item = _ref4.item,\n      name = _ref4$item.name,\n      value = _ref4$item.value,\n      theme = _ref4$item.theme,\n      machColor = _ref4.machColor;\n  var styles = styleSheet(value, theme, machColor);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: styles.header,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: styles.linkHome,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/\",\n          as: \"/\",\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n          style: {\n            marginBottom: 0\n          },\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          style: {\n            textAlign: 'center',\n            marginTop: 10\n          },\n          children: [\"- #\", value]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SectionTitle, {\n      title: \"Pallete\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c4 = HeaderDetail;\n\nfunction Detail() {\n  _s2();\n\n  var _this2 = this;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_11__[\"useRouter\"])(),\n      id = _useRouter.query.id;\n\n  console.log(id); //useLayoutEffect\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (id) {\n      Object(api_fetchColor__WEBPACK_IMPORTED_MODULE_4__[\"fetchColorDetail\"])(value).then(function (data) {\n        return setData(data);\n      }); // data.seed holds the color OBJ that the url is based\n    }\n  }, [id]);\n  if (!id) return null;\n\n  var _useSplitId = useSplitId(id),\n      _useSplitId2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useSplitId, 3),\n      name = _useSplitId2[0],\n      value = _useSplitId2[1],\n      theme = _useSplitId2[2];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(HeaderDetail, {\n      machColor: data === null || data === void 0 ? void 0 : data.colors[theme === 'dark' ? 9 : 0].hex.value,\n      item: {\n        name: name,\n        value: value,\n        theme: theme\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_containers__WEBPACK_IMPORTED_MODULE_3__[\"StyledContainer\"], {\n      children: data === null || data === void 0 ? void 0 : data.colors.map(function (clr, i) {\n        if (i > 4) return;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(RederItem, {\n          color: clr\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 18\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SectionTitle, {\n      title: \"Matched Colors\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_MatchedColors__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      value: value,\n      render: function render(colors) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_containers__WEBPACK_IMPORTED_MODULE_3__[\"StyledContainer\"], {\n          children: colors === null || colors === void 0 ? void 0 : colors.map(function (clr, i) {\n            var colorObj = new api_utils__WEBPACK_IMPORTED_MODULE_8__[\"ColorModel\"](clr);\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(RederItem, {\n              color: colorObj\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 168,\n              columnNumber: 22\n            }, _this2);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 165,\n          columnNumber: 11\n        }, _this2);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s2(Detail, \"KuVgw+rynvBYA4nKzojs2s+X2WA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_11__[\"useRouter\"], useSplitId];\n});\n\n_c5 = Detail;\n\nvar styleSheet = function styleSheet(color, theme, machColor) {\n  return {\n    header: {\n      backgroundColor: \"#\".concat(color),\n      color: theme === 'light' ? '#000' : '#fff',\n      display: 'flex',\n      alignItems: 'center'\n    },\n    linkHome: {\n      width: '47%',\n      marginLeft: 30,\n      fontWeight: '700',\n      fontSize: '1.3rem',\n      color: machColor\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"CopyText\");\n$RefreshReg$(_c2, \"RederItem\");\n$RefreshReg$(_c3, \"SectionTitle\");\n$RefreshReg$(_c4, \"HeaderDetail\");\n$RefreshReg$(_c5, \"Detail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsLy9pbmRleC5qcz8yOTdmIl0sIm5hbWVzIjpbInVzZVNwbGl0SWQiLCJpZCIsInNwbGl0SWQiLCJzcGxpdCIsInZhbHVlIiwibmFtZSIsInRoZW1lIiwiQ29weVRleHQiLCJoYXNDb3BpZWQiLCJjb250cmFzdCIsImhhbmRsZUNvcHkiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIm1hcmdpbiIsIlJlZGVySXRlbSIsImNvbG9yIiwiaGV4IiwidXNlU3RhdGUiLCJzZXRIYXNDb3BpZWQiLCJ1c2VFZmZlY3QiLCJjbGVhblVwIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIl9oYW5kbGVDb3B5IiwiY29weVRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJmb250U2l6ZSIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJnZW5lcmF0ZVBhcmFtZXRlciIsIlNlY3Rpb25UaXRsZSIsInRpdGxlIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsInRleHRBbGlnbiIsIkhlYWRlckRldGFpbCIsIml0ZW0iLCJtYWNoQ29sb3IiLCJzdHlsZXMiLCJzdHlsZVNoZWV0IiwiaGVhZGVyIiwibGlua0hvbWUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJEZXRhaWwiLCJkYXRhIiwic2V0RGF0YSIsInVzZVJvdXRlciIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImZldGNoQ29sb3JEZXRhaWwiLCJ0aGVuIiwiY29sb3JzIiwibWFwIiwiY2xyIiwiaSIsImNvbG9yT2JqIiwiQ29sb3JNb2RlbCIsImJhY2tncm91bmRDb2xvciIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtB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RDs7SUEzQ1FaLE07VUFJSEcsc0QsRUFZeUJ2RCxVOzs7TUFoQnRCb0QsTTs7QUE2Q1QsSUFBTUwsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQzVCLEtBQUQsRUFBUWIsS0FBUixFQUFldUMsU0FBZjtBQUFBLFNBQThCO0FBQy9DRyxVQUFNLEVBQUU7QUFDTm1CLHFCQUFlLGFBQU1oRCxLQUFOLENBRFQ7QUFFTkEsV0FBSyxFQUFFYixLQUFLLEtBQUssT0FBVixHQUFvQixNQUFwQixHQUE2QixNQUY5QjtBQUdONEIsYUFBTyxFQUFFLE1BSEg7QUFJTmtDLGdCQUFVLEVBQUU7QUFKTixLQUR1QztBQU8vQ25CLFlBQVEsRUFBRTtBQUNSVCxXQUFLLEVBQUUsS0FEQztBQUVSNkIsZ0JBQVUsRUFBRSxFQUZKO0FBR1JDLGdCQUFVLEVBQUUsS0FISjtBQUlSdEMsY0FBUSxFQUFFLFFBSkY7QUFLUmIsV0FBSyxFQUFFMEI7QUFMQztBQVBxQyxHQUE5QjtBQUFBLENBQW5COztBQWdCZU8scUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZWRDb250YWluZXIsIFN0eWxlZENvbHVtbiwgQ2FyZCB9IGZyb20gJ3N0eWxlZC9jb250YWluZXJzJztcbmltcG9ydCB7IGZldGNoQ29sb3JEZXRhaWwgfSBmcm9tICdhcGkvZmV0Y2hDb2xvcic7XG5pbXBvcnQgeyBMaW5rQnV0dG9uLCBEcnlCdXR0b24gfSBmcm9tICdzdHlsZWQvYnV0dG9uJztcbmltcG9ydCB7IFdpdGhUaGVtZVRleHQgfSBmcm9tICdzdHlsZWQvdGV4dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2VuZXJhdGVQYXJhbWV0ZXIsIENvbG9yTW9kZWwgfSBmcm9tICdhcGkvdXRpbHMnO1xuaW1wb3J0IEhyIGZyb20gJ2NvbXBvbmVudHMvSHInO1xuaW1wb3J0IE1hdGNoZWRDb2xvcnMgZnJvbSAnY29tcG9uZW50cy9NYXRjaGVkQ29sb3JzJztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCB1c2VTcGxpdElkID0gKGlkKSA9PiB7XG4gIGNvbnN0IHNwbGl0SWQgPSBpZC5zcGxpdCgnLScpO1xuICBjb25zdCB2YWx1ZSA9IHNwbGl0SWRbMF07XG4gIGNvbnN0IG5hbWUgPSBzcGxpdElkWzFdO1xuICBjb25zdCB0aGVtZSA9IHNwbGl0SWRbMl07XG4gIHJldHVybiBbbmFtZSwgdmFsdWUsIHRoZW1lXTtcbn07XG5cbmNvbnN0IENvcHlUZXh0ID0gKHsgaGFzQ29waWVkLCBjb250cmFzdCwgaGFuZGxlQ29weSB9KSA9PiAoXG4gIDxkaXZcbiAgICBzdHlsZT17e1xuICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7aGFzQ29waWVkID8gJ2dyZWVuJyA6IGNvbnRyYXN0LnZhbHVlfWAsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgIHBhZGRpbmc6IDUsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogNSxcbiAgICAgIHJpZ2h0OiA1LFxuICAgIH19XG4gID5cbiAgICA8RHJ5QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvcHl9PlxuICAgICAgPFdpdGhUaGVtZVRleHRcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAwIH19XG4gICAgICAgIHNpemU9XCIuOHJlbVwiXG4gICAgICAgIGNvbnRyYXN0PXtjb250cmFzdC52YWx1ZX1cbiAgICAgICAgaWQ9XCJjb3B5LXRleHRcIlxuICAgICAgPlxuICAgICAgICBDb3B5XG4gICAgICA8L1dpdGhUaGVtZVRleHQ+XG4gICAgPC9EcnlCdXR0b24+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgUmVkZXJJdGVtID0gKHsgY29sb3IgfSkgPT4ge1xuICBjb25zdCB7IGhleCwgY29udHJhc3QsIG5hbWUgfSA9IGNvbG9yO1xuICBjb25zdCBbaGFzQ29waWVkLCBzZXRIYXNDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoYXNDb3BpZWQpIHtcbiAgICAgIGNvbnN0IGNsZWFuVXAgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SGFzQ29waWVkKGZhbHNlKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQoY2xlYW5VcCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2hhc0NvcGllZF0pO1xuXG4gIGNvbnN0IF9oYW5kbGVDb3B5ID0gKCkgPT4ge1xuICAgIGxldCBjb3B5VGV4dCA9IGhleC52YWx1ZTtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dCk7XG4gICAgc2V0SGFzQ29waWVkKHRydWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb2x1bW4gY29sb3I9e2hleC52YWx1ZX0+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPFdpdGhUaGVtZVRleHQgY29udHJhc3Q9e2NvbnRyYXN0LnZhbHVlfT57bmFtZS52YWx1ZX08L1dpdGhUaGVtZVRleHQ+XG4gICAgICAgIDxDb3B5VGV4dFxuICAgICAgICAgIGhhc0NvcGllZD17aGFzQ29waWVkfVxuICAgICAgICAgIGNvbnRyYXN0PXtjb250cmFzdH1cbiAgICAgICAgICBoYW5kbGVDb3B5PXtfaGFuZGxlQ29weX1cbiAgICAgICAgLz5cbiAgICAgICAgPFdpdGhUaGVtZVRleHQgc3R5bGU9e3sgZm9udFNpemU6ICcxcmVtJyB9fSBjb250cmFzdD17Y29udHJhc3QudmFsdWV9PlxuICAgICAgICAgIHtoZXgudmFsdWV9XG4gICAgICAgIDwvV2l0aFRoZW1lVGV4dD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIciBjb250cmFzdD17Y29udHJhc3QudmFsdWV9IC8+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvZGV0YWlsL1tpZF1cIlxuICAgICAgICAgICAgYXM9e1xuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArXG4gICAgICAgICAgICAgIGAvZGV0YWlsLyR7Z2VuZXJhdGVQYXJhbWV0ZXIoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBoZXgudmFsdWUsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBjb250cmFzdDogY29udHJhc3QudmFsdWUsXG4gICAgICAgICAgICAgIH0pfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBjb250cmFzdD17Y29udHJhc3QudmFsdWV9PlNlZSBkZXRhaWw8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L1N0eWxlZENvbHVtbj5cbiAgKTtcbn07XG5cbmNvbnN0IFNlY3Rpb25UaXRsZSA9ICh7IHRpdGxlIH0pID0+IChcbiAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHZ3JywgcGFkZGluZ0xlZnQ6ICczcmVtJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XG4gICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIDxIciAvPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEhlYWRlckRldGFpbCA9ICh7IGl0ZW06IHsgbmFtZSwgdmFsdWUsIHRoZW1lIH0sIG1hY2hDb2xvciB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHN0eWxlU2hlZXQodmFsdWUsIHRoZW1lLCBtYWNoQ29sb3IpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGlua0hvbWV9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy8nfT5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+e25hbWV9PC9oMT5cbiAgICAgICAgICA8aDQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAxMCB9fT4tICN7dmFsdWV9PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJQYWxsZXRlXCIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIERldGFpbCgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IGlkIH0sXG4gIH0gPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnNvbGUubG9nKGlkKTtcbiAgLy91c2VMYXlvdXRFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGZldGNoQ29sb3JEZXRhaWwodmFsdWUpLnRoZW4oKGRhdGEpID0+IHNldERhdGEoZGF0YSkpO1xuICAgICAgLy8gZGF0YS5zZWVkIGhvbGRzIHRoZSBjb2xvciBPQkogdGhhdCB0aGUgdXJsIGlzIGJhc2VkXG4gICAgfVxuICB9LCBbaWRdKTtcblxuICBpZiAoIWlkKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgW25hbWUsIHZhbHVlLCB0aGVtZV0gPSB1c2VTcGxpdElkKGlkKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlckRldGFpbFxuICAgICAgICBtYWNoQ29sb3I9e2RhdGE/LmNvbG9yc1t0aGVtZSA9PT0gJ2RhcmsnID8gOSA6IDBdLmhleC52YWx1ZX1cbiAgICAgICAgaXRlbT17eyBuYW1lLCB2YWx1ZSwgdGhlbWUgfX1cbiAgICAgIC8+XG4gICAgICA8U3R5bGVkQ29udGFpbmVyPlxuICAgICAgICB7ZGF0YT8uY29sb3JzLm1hcCgoY2xyLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPiA0KSByZXR1cm47XG4gICAgICAgICAgcmV0dXJuIDxSZWRlckl0ZW0ga2V5PXtpfSBjb2xvcj17Y2xyfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJNYXRjaGVkIENvbG9yc1wiIC8+XG4gICAgICA8TWF0Y2hlZENvbG9yc1xuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIHJlbmRlcj17KGNvbG9ycykgPT4gKFxuICAgICAgICAgIDxTdHlsZWRDb250YWluZXI+XG4gICAgICAgICAgICB7Y29sb3JzPy5tYXAoKGNsciwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb2xvck9iaiA9IG5ldyBDb2xvck1vZGVsKGNscik7XG4gICAgICAgICAgICAgIHJldHVybiA8UmVkZXJJdGVtIGtleT17aX0gY29sb3I9e2NvbG9yT2JqfSAvPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVTaGVldCA9IChjb2xvciwgdGhlbWUsIG1hY2hDb2xvcikgPT4gKHtcbiAgaGVhZGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBgIyR7Y29sb3J9YCxcbiAgICBjb2xvcjogdGhlbWUgPT09ICdsaWdodCcgPyAnIzAwMCcgOiAnI2ZmZicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBsaW5rSG9tZToge1xuICAgIHdpZHRoOiAnNDclJyxcbiAgICBtYXJnaW5MZWZ0OiAzMCxcbiAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICBmb250U2l6ZTogJzEuM3JlbScsXG4gICAgY29sb3I6IG1hY2hDb2xvcixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/detail/[id]/index.js\n");

/***/ })

})