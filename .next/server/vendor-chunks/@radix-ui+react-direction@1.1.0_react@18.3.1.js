"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-direction@1.1.0_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-direction@1.1.0_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-direction@1.1.0_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.mjs":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-direction@1.1.0_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.mjs ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DirectionProvider: () => (/* binding */ DirectionProvider),\n/* harmony export */   Provider: () => (/* binding */ Provider),\n/* harmony export */   useDirection: () => (/* binding */ useDirection)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n// packages/react/direction/src/Direction.tsx\n\n\nvar DirectionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);\nvar DirectionProvider = (props) => {\n  const { dir, children } = props;\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DirectionContext.Provider, { value: dir, children });\n};\nfunction useDirection(localDir) {\n  const globalDir = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);\n  return localDir || globalDir || \"ltr\";\n}\nvar Provider = DirectionProvider;\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWRpcmVjdGlvbkAxLjEuMF9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1kaXJlY3Rpb24vZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUMrQjtBQUNTO0FBQ3hDLHVCQUF1QixnREFBbUI7QUFDMUM7QUFDQSxVQUFVLGdCQUFnQjtBQUMxQix5QkFBeUIsc0RBQUcsOEJBQThCLHNCQUFzQjtBQUNoRjtBQUNBO0FBQ0Esb0JBQW9CLDZDQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFLRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhpY3MtZGVzaWduZXItd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtZGlyZWN0aW9uQDEuMS4wX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWRpcmVjdGlvbi9kaXN0L2luZGV4Lm1qcz9jYTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2thZ2VzL3JlYWN0L2RpcmVjdGlvbi9zcmMvRGlyZWN0aW9uLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBEaXJlY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh2b2lkIDApO1xudmFyIERpcmVjdGlvblByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGlyLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KERpcmVjdGlvbkNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGRpciwgY2hpbGRyZW4gfSk7XG59O1xuZnVuY3Rpb24gdXNlRGlyZWN0aW9uKGxvY2FsRGlyKSB7XG4gIGNvbnN0IGdsb2JhbERpciA9IFJlYWN0LnVzZUNvbnRleHQoRGlyZWN0aW9uQ29udGV4dCk7XG4gIHJldHVybiBsb2NhbERpciB8fCBnbG9iYWxEaXIgfHwgXCJsdHJcIjtcbn1cbnZhciBQcm92aWRlciA9IERpcmVjdGlvblByb3ZpZGVyO1xuZXhwb3J0IHtcbiAgRGlyZWN0aW9uUHJvdmlkZXIsXG4gIFByb3ZpZGVyLFxuICB1c2VEaXJlY3Rpb25cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-direction@1.1.0_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.mjs\n");

/***/ })

};
;