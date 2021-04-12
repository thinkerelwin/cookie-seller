webpackHotUpdate_N_E("pages/index",{

/***/ "./features/widget/MobileWidgets.tsx":
/*!*******************************************!*\
  !*** ./features/widget/MobileWidgets.tsx ***!
  \*******************************************/
/*! exports provided: WidgetThemes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WidgetThemes\", function() { return WidgetThemes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MobileWidgets; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_elwin_Downloads_Projects_blog_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _features_widget_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/widget/SearchBar */ \"./features/widget/SearchBar.tsx\");\n/* harmony import */ var _features_widget_LinksWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/features/widget/LinksWidget */ \"./features/widget/LinksWidget.tsx\");\n/* harmony import */ var _features_widget_Tabber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/features/widget/Tabber */ \"./features/widget/Tabber.tsx\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/index */ \"./store/index.ts\");\n/* harmony import */ var _widgetSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgetSlice */ \"./features/widget/widgetSlice.ts\");\n/* harmony import */ var _MobileWidgets_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MobileWidgets.module.scss */ \"./features/widget/MobileWidgets.module.scss\");\n/* harmony import */ var _MobileWidgets_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MobileWidgets_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/Users/elwin/Downloads/Projects/blog-next/features/widget/MobileWidgets.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar WidgetThemes;\n\n(function (WidgetThemes) {\n  WidgetThemes[\"Default\"] = \"general\";\n  WidgetThemes[\"Alert\"] = \"pink\";\n})(WidgetThemes || (WidgetThemes = {}));\n\nfunction MobileWidgets(_ref) {\n  _s();\n\n  var linksForWidgets = _ref.linksForWidgets,\n      allPosts = _ref.allPosts;\n  var dispatch = Object(_store_index__WEBPACK_IMPORTED_MODULE_7__[\"useAppDispatch\"])();\n  var nameOfActiveWidget = Object(_store_index__WEBPACK_IMPORTED_MODULE_7__[\"useAppSelector\"])(function (state) {\n    return state.widget.nameOfActiveWidget;\n  });\n  var hasActiveTab = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return nameOfActiveWidget.length > 0;\n  }, [nameOfActiveWidget]);\n\n  function changeTab(name) {\n    var isSameTab = nameOfActiveWidget === name;\n    var targetName = isSameTab ? \"\" : name;\n    dispatch(Object(_widgetSlice__WEBPACK_IMPORTED_MODULE_8__[\"setActiveWidget\"])(targetName));\n  }\n\n  function TabFactory(_ref2) {\n    var nameOfActiveWidget = _ref2.nameOfActiveWidget,\n        WIDGETS = _ref2.WIDGETS;\n\n    switch (nameOfActiveWidget) {\n      case WIDGETS[0].name:\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_features_widget_LinksWidget__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: \"recent posts\",\n          links: linksForWidgets.linksForRecentPosts,\n          theme: WidgetThemes.Alert\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this);\n\n      case WIDGETS[1].name:\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_features_widget_LinksWidget__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: \"archives\",\n          links: linksForWidgets.linksForArchives,\n          theme: WidgetThemes.Default\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this);\n\n      case WIDGETS[2].name:\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_features_widget_SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          allPosts: allPosts\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 16\n        }, this);\n\n      case WIDGETS[3].name:\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_features_widget_LinksWidget__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: \"tags\",\n          links: linksForWidgets.linksForTags,\n          theme: WidgetThemes.Default\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, this);\n\n      default:\n        return null;\n    }\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    document.querySelector(\"body\").style.overflow = hasActiveTab ? \"hidden\" : \"initial\";\n  }, [hasActiveTab]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_MobileWidgets_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container, Object(_Users_elwin_Downloads_Projects_blog_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _MobileWidgets_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.active, hasActiveTab)),\n      children: TabFactory({\n        nameOfActiveWidget: nameOfActiveWidget,\n        WIDGETS: _features_widget_Tabber__WEBPACK_IMPORTED_MODULE_6__[\"WIDGETS\"]\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_features_widget_Tabber__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      nameOfActiveWidget: nameOfActiveWidget,\n      changeTab: changeTab\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(MobileWidgets, \"0GJRHd5FAQAa14jzUomg1zIGQhI=\", false, function () {\n  return [_store_index__WEBPACK_IMPORTED_MODULE_7__[\"useAppDispatch\"], _store_index__WEBPACK_IMPORTED_MODULE_7__[\"useAppSelector\"]];\n});\n\n_c = MobileWidgets;\n\nvar _c;\n\n$RefreshReg$(_c, \"MobileWidgets\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmVhdHVyZXMvd2lkZ2V0L01vYmlsZVdpZGdldHMudHN4PzAzNjEiXSwibmFtZXMiOlsiV2lkZ2V0VGhlbWVzIiwiTW9iaWxlV2lkZ2V0cyIsImxpbmtzRm9yV2lkZ2V0cyIsImFsbFBvc3RzIiwiZGlzcGF0Y2giLCJ1c2VBcHBEaXNwYXRjaCIsIm5hbWVPZkFjdGl2ZVdpZGdldCIsInVzZUFwcFNlbGVjdG9yIiwic3RhdGUiLCJ3aWRnZXQiLCJoYXNBY3RpdmVUYWIiLCJ1c2VNZW1vIiwibGVuZ3RoIiwiY2hhbmdlVGFiIiwibmFtZSIsImlzU2FtZVRhYiIsInRhcmdldE5hbWUiLCJzZXRBY3RpdmVXaWRnZXQiLCJUYWJGYWN0b3J5IiwiV0lER0VUUyIsImxpbmtzRm9yUmVjZW50UG9zdHMiLCJBbGVydCIsImxpbmtzRm9yQXJjaGl2ZXMiLCJEZWZhdWx0IiwibGlua3NGb3JUYWdzIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJvdmVyZmxvdyIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFNQTtBQUVPLElBQUtBLFlBQVo7O1dBQVlBLFk7QUFBQUEsYztBQUFBQSxjO0dBQUFBLFksS0FBQUEsWTs7QUFZRyxTQUFTQyxhQUFULE9BTVo7QUFBQTs7QUFBQSxNQUxEQyxlQUtDLFFBTERBLGVBS0M7QUFBQSxNQUpEQyxRQUlDLFFBSkRBLFFBSUM7QUFDRCxNQUFNQyxRQUFRLEdBQUdDLG1FQUFjLEVBQS9CO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdDLG1FQUFjLENBQ3ZDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUgsa0JBQXhCO0FBQUEsR0FEdUMsQ0FBekM7QUFJQSxNQUFNSSxZQUFZLEdBQUdDLHFEQUFPLENBQUM7QUFBQSxXQUFNTCxrQkFBa0IsQ0FBQ00sTUFBbkIsR0FBNEIsQ0FBbEM7QUFBQSxHQUFELEVBQXNDLENBQ2hFTixrQkFEZ0UsQ0FBdEMsQ0FBNUI7O0FBSUEsV0FBU08sU0FBVCxDQUFtQkMsSUFBbkIsRUFBaUM7QUFDL0IsUUFBTUMsU0FBUyxHQUFHVCxrQkFBa0IsS0FBS1EsSUFBekM7QUFDQSxRQUFNRSxVQUFVLEdBQUdELFNBQVMsR0FBRyxFQUFILEdBQVFELElBQXBDO0FBQ0FWLFlBQVEsQ0FBQ2Esb0VBQWUsQ0FBQ0QsVUFBRCxDQUFoQixDQUFSO0FBQ0Q7O0FBRUQsV0FBU0UsVUFBVCxRQUFxRDtBQUFBLFFBQS9CWixrQkFBK0IsU0FBL0JBLGtCQUErQjtBQUFBLFFBQVhhLE9BQVcsU0FBWEEsT0FBVzs7QUFDbkQsWUFBUWIsa0JBQVI7QUFDRSxXQUFLYSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdMLElBQWhCO0FBQ0UsNEJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxlQUFLLEVBQUMsY0FEUjtBQUVFLGVBQUssRUFBRVosZUFBZSxDQUFDa0IsbUJBRnpCO0FBR0UsZUFBSyxFQUFFcEIsWUFBWSxDQUFDcUI7QUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjs7QUFPRixXQUFLRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdMLElBQWhCO0FBQ0UsNEJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxlQUFLLEVBQUMsVUFEUjtBQUVFLGVBQUssRUFBRVosZUFBZSxDQUFDb0IsZ0JBRnpCO0FBR0UsZUFBSyxFQUFFdEIsWUFBWSxDQUFDdUI7QUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjs7QUFPRixXQUFLSixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdMLElBQWhCO0FBQ0UsNEJBQU8scUVBQUMsa0VBQUQ7QUFBVyxrQkFBUSxFQUFFWDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQOztBQUNGLFdBQUtnQixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdMLElBQWhCO0FBQ0UsNEJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxlQUFLLEVBQUMsTUFEUjtBQUVFLGVBQUssRUFBRVosZUFBZSxDQUFDc0IsWUFGekI7QUFHRSxlQUFLLEVBQUV4QixZQUFZLENBQUN1QjtBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGOztBQU9GO0FBQ0UsZUFBTyxJQUFQO0FBNUJKO0FBOEJEOztBQUVERSx5REFBUyxDQUFDLFlBQU07QUFDZEMsWUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQWdDQyxLQUFoQyxDQUFzQ0MsUUFBdEMsR0FBaURuQixZQUFZLEdBQ3pELFFBRHlELEdBRXpELFNBRko7QUFHRCxHQUpRLEVBSU4sQ0FBQ0EsWUFBRCxDQUpNLENBQVQ7QUFNQSxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFFb0IsaURBQVUsQ0FBQ0MsaUVBQU0sQ0FBQ0MsU0FBUixzSkFDbEJELGlFQUFNLENBQUNFLE1BRFcsRUFDRnZCLFlBREUsRUFEdkI7QUFBQSxnQkFLR1EsVUFBVSxDQUFDO0FBQUVaLDBCQUFrQixFQUFsQkEsa0JBQUY7QUFBc0JhLGVBQU8sRUFBUEEsK0RBQU9BO0FBQTdCLE9BQUQ7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQywrREFBRDtBQUFRLHdCQUFrQixFQUFFYixrQkFBNUI7QUFBZ0QsZUFBUyxFQUFFTztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQSxrQkFERjtBQVlEOztHQXpFdUJaLGE7VUFPTEksMkQsRUFDVUUsMkQ7OztLQVJMTixhIiwiZmlsZSI6Ii4vZmVhdHVyZXMvd2lkZ2V0L01vYmlsZVdpZGdldHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCJAL2ZlYXR1cmVzL3dpZGdldC9TZWFyY2hCYXJcIjtcbmltcG9ydCBMaW5rc1dpZGdldCBmcm9tIFwiQC9mZWF0dXJlcy93aWRnZXQvTGlua3NXaWRnZXRcIjtcbmltcG9ydCBUYWJiZXIgZnJvbSBcIkAvZmVhdHVyZXMvd2lkZ2V0L1RhYmJlclwiO1xuXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9zdG9yZS9pbmRleFwiO1xuaW1wb3J0IHsgc2V0QWN0aXZlV2lkZ2V0IH0gZnJvbSBcIi4vd2lkZ2V0U2xpY2VcIjtcblxuaW1wb3J0IHsgV0lER0VUUyB9IGZyb20gXCJAL2ZlYXR1cmVzL3dpZGdldC9UYWJiZXJcIjtcbmltcG9ydCB7IExpbmtUeXBlIH0gZnJvbSBcIkAvZmVhdHVyZXMvd2lkZ2V0L0xpbmtzV2lkZ2V0XCI7XG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gXCJAL2ZlYXR1cmVzL3Bvc3QvQXJ0aWNsZVwiO1xuXG5pbXBvcnQgeyBhbGxQb3N0VGl0bGVzVHlwZSB9IGZyb20gXCJAL2ZlYXR1cmVzL3dpZGdldC9TZWFyY2hCYXJcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Nb2JpbGVXaWRnZXRzLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBlbnVtIFdpZGdldFRoZW1lcyB7XG4gIERlZmF1bHQgPSBcImdlbmVyYWxcIixcbiAgQWxlcnQgPSBcInBpbmtcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIGxpbmtzRm9yV2lkZ2V0c1R5cGUge1xuICBsaW5rc0ZvckFyY2hpdmVzOiBMaW5rVHlwZVtdO1xuICBsaW5rc0ZvclRhZ3M6IExpbmtUeXBlW107XG4gIGxpbmtzRm9yUmVjZW50UG9zdHM6IExpbmtUeXBlW107XG4gIHJlY2VudFBvc3RzOiBQb3N0VHlwZVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVXaWRnZXRzKHtcbiAgbGlua3NGb3JXaWRnZXRzLFxuICBhbGxQb3N0c1xufToge1xuICBsaW5rc0ZvcldpZGdldHM6IGxpbmtzRm9yV2lkZ2V0c1R5cGU7XG4gIGFsbFBvc3RzOiBhbGxQb3N0VGl0bGVzVHlwZVtdO1xufSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IG5hbWVPZkFjdGl2ZVdpZGdldCA9IHVzZUFwcFNlbGVjdG9yKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUud2lkZ2V0Lm5hbWVPZkFjdGl2ZVdpZGdldFxuICApO1xuXG4gIGNvbnN0IGhhc0FjdGl2ZVRhYiA9IHVzZU1lbW8oKCkgPT4gbmFtZU9mQWN0aXZlV2lkZ2V0Lmxlbmd0aCA+IDAsIFtcbiAgICBuYW1lT2ZBY3RpdmVXaWRnZXRcbiAgXSk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlVGFiKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGlzU2FtZVRhYiA9IG5hbWVPZkFjdGl2ZVdpZGdldCA9PT0gbmFtZTtcbiAgICBjb25zdCB0YXJnZXROYW1lID0gaXNTYW1lVGFiID8gXCJcIiA6IG5hbWU7XG4gICAgZGlzcGF0Y2goc2V0QWN0aXZlV2lkZ2V0KHRhcmdldE5hbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFRhYkZhY3RvcnkoeyBuYW1lT2ZBY3RpdmVXaWRnZXQsIFdJREdFVFMgfSkge1xuICAgIHN3aXRjaCAobmFtZU9mQWN0aXZlV2lkZ2V0KSB7XG4gICAgICBjYXNlIFdJREdFVFNbMF0ubmFtZTpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGlua3NXaWRnZXRcbiAgICAgICAgICAgIHRpdGxlPVwicmVjZW50IHBvc3RzXCJcbiAgICAgICAgICAgIGxpbmtzPXtsaW5rc0ZvcldpZGdldHMubGlua3NGb3JSZWNlbnRQb3N0c31cbiAgICAgICAgICAgIHRoZW1lPXtXaWRnZXRUaGVtZXMuQWxlcnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgV0lER0VUU1sxXS5uYW1lOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rc1dpZGdldFxuICAgICAgICAgICAgdGl0bGU9XCJhcmNoaXZlc1wiXG4gICAgICAgICAgICBsaW5rcz17bGlua3NGb3JXaWRnZXRzLmxpbmtzRm9yQXJjaGl2ZXN9XG4gICAgICAgICAgICB0aGVtZT17V2lkZ2V0VGhlbWVzLkRlZmF1bHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgV0lER0VUU1syXS5uYW1lOlxuICAgICAgICByZXR1cm4gPFNlYXJjaEJhciBhbGxQb3N0cz17YWxsUG9zdHN9IC8+O1xuICAgICAgY2FzZSBXSURHRVRTWzNdLm5hbWU6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmtzV2lkZ2V0XG4gICAgICAgICAgICB0aXRsZT1cInRhZ3NcIlxuICAgICAgICAgICAgbGlua3M9e2xpbmtzRm9yV2lkZ2V0cy5saW5rc0ZvclRhZ3N9XG4gICAgICAgICAgICB0aGVtZT17V2lkZ2V0VGhlbWVzLkRlZmF1bHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikhLnN0eWxlLm92ZXJmbG93ID0gaGFzQWN0aXZlVGFiXG4gICAgICA/IFwiaGlkZGVuXCJcbiAgICAgIDogXCJpbml0aWFsXCI7XG4gIH0sIFtoYXNBY3RpdmVUYWJdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29udGFpbmVyLCB7XG4gICAgICAgICAgW3N0eWxlcy5hY3RpdmVdOiBoYXNBY3RpdmVUYWJcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtUYWJGYWN0b3J5KHsgbmFtZU9mQWN0aXZlV2lkZ2V0LCBXSURHRVRTIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8VGFiYmVyIG5hbWVPZkFjdGl2ZVdpZGdldD17bmFtZU9mQWN0aXZlV2lkZ2V0fSBjaGFuZ2VUYWI9e2NoYW5nZVRhYn0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/widget/MobileWidgets.tsx\n");

/***/ })

})