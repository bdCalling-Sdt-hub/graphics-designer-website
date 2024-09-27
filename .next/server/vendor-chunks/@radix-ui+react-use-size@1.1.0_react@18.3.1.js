"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-size@1.1.0_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-use-size@1.1.0_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSize: () => (/* binding */ useSize)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n// packages/react/use-size/src/useSize.tsx\n\n\nfunction useSize(element) {\n  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0);\n  (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {\n    if (element) {\n      setSize({ width: element.offsetWidth, height: element.offsetHeight });\n      const resizeObserver = new ResizeObserver((entries) => {\n        if (!Array.isArray(entries)) {\n          return;\n        }\n        if (!entries.length) {\n          return;\n        }\n        const entry = entries[0];\n        let width;\n        let height;\n        if (\"borderBoxSize\" in entry) {\n          const borderSizeEntry = entry[\"borderBoxSize\"];\n          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;\n          width = borderSize[\"inlineSize\"];\n          height = borderSize[\"blockSize\"];\n        } else {\n          width = element.offsetWidth;\n          height = element.offsetHeight;\n        }\n        setSize({ width, height });\n      });\n      resizeObserver.observe(element, { box: \"border-box\" });\n      return () => resizeObserver.unobserve(element);\n    } else {\n      setSize(void 0);\n    }\n  }, [element]);\n  return size;\n}\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1zaXplQDEuMS4wX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1zaXplL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQytCO0FBQ3FDO0FBQ3BFO0FBQ0EsMEJBQTBCLDJDQUFjO0FBQ3hDLEVBQUUsa0ZBQWU7QUFDakI7QUFDQSxnQkFBZ0IsMERBQTBEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZUFBZTtBQUNqQyxPQUFPO0FBQ1Asd0NBQXdDLG1CQUFtQjtBQUMzRDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFHRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhpY3MtZGVzaWduZXItd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtdXNlLXNpemVAMS4xLjBfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLXNpemUvZGlzdC9pbmRleC5tanM/YjY4YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWNrYWdlcy9yZWFjdC91c2Utc2l6ZS9zcmMvdXNlU2l6ZS50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC11c2UtbGF5b3V0LWVmZmVjdFwiO1xuZnVuY3Rpb24gdXNlU2l6ZShlbGVtZW50KSB7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IFJlYWN0LnVzZVN0YXRlKHZvaWQgMCk7XG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHNldFNpemUoeyB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCwgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCB9KTtcbiAgICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVudHJpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1swXTtcbiAgICAgICAgbGV0IHdpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0O1xuICAgICAgICBpZiAoXCJib3JkZXJCb3hTaXplXCIgaW4gZW50cnkpIHtcbiAgICAgICAgICBjb25zdCBib3JkZXJTaXplRW50cnkgPSBlbnRyeVtcImJvcmRlckJveFNpemVcIl07XG4gICAgICAgICAgY29uc3QgYm9yZGVyU2l6ZSA9IEFycmF5LmlzQXJyYXkoYm9yZGVyU2l6ZUVudHJ5KSA/IGJvcmRlclNpemVFbnRyeVswXSA6IGJvcmRlclNpemVFbnRyeTtcbiAgICAgICAgICB3aWR0aCA9IGJvcmRlclNpemVbXCJpbmxpbmVTaXplXCJdO1xuICAgICAgICAgIGhlaWdodCA9IGJvcmRlclNpemVbXCJibG9ja1NpemVcIl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHNldFNpemUoeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgICAgfSk7XG4gICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcbiAgICAgIHJldHVybiAoKSA9PiByZXNpemVPYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNpemUodm9pZCAwKTtcbiAgICB9XG4gIH0sIFtlbGVtZW50XSk7XG4gIHJldHVybiBzaXplO1xufVxuZXhwb3J0IHtcbiAgdXNlU2l6ZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs\n");

/***/ })

};
;