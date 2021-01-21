webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled/text */ \"./styled/text.js\");\n/* harmony import */ var styled_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled/button */ \"./styled/button.js\");\n/* harmony import */ var styled_containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled/containers */ \"./styled/containers.js\");\n/* harmony import */ var api_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! api/utils */ \"./api/utils.js\");\n/* harmony import */ var components_Hr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Hr */ \"./components/Hr.js\");\n\n\nvar _jsxFileName = \"/Users/sodiey/Desktop/Dev/ReactProjects/next/my-next-app/components/Main.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar WithLoading = function WithLoading(_ref) {\n  var isFetching = _ref.isFetching,\n      children = _ref.children;\n  return isFetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this) : children;\n};\n\n_c = WithLoading;\n\nvar Try = function Try(_ref2) {\n  var contrast = _ref2.contrast,\n      onClick = _ref2.onClick;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      border: \"2px solid \".concat(contrast),\n      borderRadius: '10px',\n      padding: '5px 8px',\n      position: 'absolute',\n      top: 5,\n      right: 5\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_button__WEBPACK_IMPORTED_MODULE_3__[\"DryButton\"], {\n      onClick: onClick,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_text__WEBPACK_IMPORTED_MODULE_2__[\"WithThemeText\"], {\n        style: {\n          margin: 0\n        },\n        size: \"1rem\",\n        contrast: contrast,\n        children: \"Try\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Try;\n\nvar RenderItem = function RenderItem(_ref3) {\n  var item = _ref3.item,\n      handleColor = _ref3.handleColor;\n  var value = item.value,\n      name = item.name,\n      contrast = item.contrast;\n  if (name === 'Black') return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_containers__WEBPACK_IMPORTED_MODULE_4__[\"StyledColumn\"], {\n    color: value,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_containers__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_text__WEBPACK_IMPORTED_MODULE_2__[\"WithThemeText\"], {\n        onClick: handleColor.bind(_this, value, 'bg'),\n        contrast: contrast,\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          height: '100%',\n          display: 'flex',\n          flexDirection: 'column',\n          justifyContent: 'flex-end'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Hr__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          contrast: contrast\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Try, {\n          contrast: contrast,\n          onClick: handleColor.bind(_this, value, 'title')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"/detail/id\",\n          as: \"\" + \"/detail/\".concat(Object(api_utils__WEBPACK_IMPORTED_MODULE_5__[\"generateParameter\"])(item)),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_button__WEBPACK_IMPORTED_MODULE_3__[\"LinkButton\"], {\n            style: {\n              alignSelf: 'end'\n            },\n            contrast: contrast,\n            children: \"See detail\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = RenderItem;\n\nvar Main = function Main(_ref4) {\n  var colors = _ref4.colors,\n      isFetching = _ref4.isFetching,\n      handleColor = _ref4.handleColor;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WithLoading, {\n    isFetching: isFetching,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_containers__WEBPACK_IMPORTED_MODULE_4__[\"StyledContainer\"], {\n      children: colors.map(function (clr, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RenderItem, {\n          item: clr,\n          handleColor: handleColor\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 5\n  }, _this);\n};\n\n_c4 = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"WithLoading\");\n$RefreshReg$(_c2, \"Try\");\n$RefreshReg$(_c3, \"RenderItem\");\n$RefreshReg$(_c4, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzPzg2NjAiXSwibmFtZXMiOlsiV2l0aExvYWRpbmciLCJpc0ZldGNoaW5nIiwiY2hpbGRyZW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJUcnkiLCJjb250cmFzdCIsIm9uQ2xpY2siLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIm1hcmdpbiIsIlJlbmRlckl0ZW0iLCJpdGVtIiwiaGFuZGxlQ29sb3IiLCJ2YWx1ZSIsIm5hbWUiLCJiaW5kIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsImdlbmVyYXRlUGFyYW1ldGVyIiwiYWxpZ25TZWxmIiwiTWFpbiIsImNvbG9ycyIsIm1hcCIsImNsciIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUE4QjtBQUFBLE1BQTNCQyxVQUEyQixRQUEzQkEsVUFBMkI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDaEQsU0FBT0QsVUFBVSxnQkFDZjtBQUNFLFNBQUssRUFBRTtBQUNMRSxhQUFPLEVBQUUsTUFESjtBQUVMQyxvQkFBYyxFQUFFO0FBRlgsS0FEVDtBQUFBLDJCQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURlLEdBVWZGLFFBVkY7QUFZRCxDQWJEOztLQUFNRixXOztBQWVOLElBQU1LLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsTUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYUMsT0FBYixTQUFhQSxPQUFiO0FBQUEsc0JBQ1Y7QUFDRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxzQkFBZUYsUUFBZixDQUREO0FBRUxHLGtCQUFZLEVBQUUsTUFGVDtBQUdMQyxhQUFPLEVB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Y0FBSSxFQUFFRCxHQUExQjtBQUErQixxQkFBVyxFQUFFWDtBQUE1QyxXQUFpQlksQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQVg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FWRDs7TUFBTUosSTtBQVdTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBXaXRoVGhlbWVUZXh0IH0gZnJvbSAnc3R5bGVkL3RleHQnO1xuaW1wb3J0IHsgTGlua0J1dHRvbiwgRHJ5QnV0dG9uIH0gZnJvbSAnc3R5bGVkL2J1dHRvbic7XG5pbXBvcnQgeyBTdHlsZWRDb250YWluZXIsIFN0eWxlZENvbHVtbiwgQ2FyZCB9IGZyb20gJ3N0eWxlZC9jb250YWluZXJzJztcbmltcG9ydCB7IGdlbmVyYXRlUGFyYW1ldGVyIH0gZnJvbSAnYXBpL3V0aWxzJztcbmltcG9ydCBIciBmcm9tICdjb21wb25lbnRzL0hyJztcblxuY29uc3QgV2l0aExvYWRpbmcgPSAoeyBpc0ZldGNoaW5nLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiBpc0ZldGNoaW5nID8gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbmNvbnN0IFRyeSA9ICh7IGNvbnRyYXN0LCBvbkNsaWNrIH0pID0+IChcbiAgPGRpdlxuICAgIHN0eWxlPXt7XG4gICAgICBib3JkZXI6IGAycHggc29saWQgJHtjb250cmFzdH1gLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICBwYWRkaW5nOiAnNXB4IDhweCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogNSxcbiAgICAgIHJpZ2h0OiA1LFxuICAgIH19XG4gID5cbiAgICA8RHJ5QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPFdpdGhUaGVtZVRleHQgc3R5bGU9e3sgbWFyZ2luOiAwIH19IHNpemU9XCIxcmVtXCIgY29udHJhc3Q9e2NvbnRyYXN0fT5cbiAgICAgICAgVHJ5XG4gICAgICA8L1dpdGhUaGVtZVRleHQ+XG4gICAgPC9EcnlCdXR0b24+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgUmVuZGVySXRlbSA9ICh7IGl0ZW0sIGhhbmRsZUNvbG9yIH0pID0+IHtcbiAgY29uc3QgeyB2YWx1ZSwgbmFtZSwgY29udHJhc3QgfSA9IGl0ZW07XG4gIGlmIChuYW1lID09PSAnQmxhY2snKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb2x1bW4gY29sb3I9e3ZhbHVlfT5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8V2l0aFRoZW1lVGV4dFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbG9yLmJpbmQodGhpcywgdmFsdWUsICdiZycpfVxuICAgICAgICAgIGNvbnRyYXN0PXtjb250cmFzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L1dpdGhUaGVtZVRleHQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SHIgY29udHJhc3Q9e2NvbnRyYXN0fSAvPlxuICAgICAgICAgIDxUcnlcbiAgICAgICAgICAgIGNvbnRyYXN0PXtjb250cmFzdH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbG9yLmJpbmQodGhpcywgdmFsdWUsICd0aXRsZScpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvZGV0YWlsL2lkXCJcbiAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvZGV0YWlsLyR7Z2VuZXJhdGVQYXJhbWV0ZXIoaXRlbSl9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBzdHlsZT17eyBhbGlnblNlbGY6ICdlbmQnIH19IGNvbnRyYXN0PXtjb250cmFzdH0+XG4gICAgICAgICAgICAgIFNlZSBkZXRhaWxcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvU3R5bGVkQ29sdW1uPlxuICApO1xufTtcblxuY29uc3QgTWFpbiA9ICh7IGNvbG9ycywgaXNGZXRjaGluZywgaGFuZGxlQ29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXaXRoTG9hZGluZyBpc0ZldGNoaW5nPXtpc0ZldGNoaW5nfT5cbiAgICAgIDxTdHlsZWRDb250YWluZXI+XG4gICAgICAgIHtjb2xvcnMubWFwKChjbHIsIGkpID0+IChcbiAgICAgICAgICA8UmVuZGVySXRlbSBrZXk9e2l9IGl0ZW09e2Nscn0gaGFuZGxlQ29sb3I9e2hhbmRsZUNvbG9yfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgIDwvV2l0aExvYWRpbmc+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

})