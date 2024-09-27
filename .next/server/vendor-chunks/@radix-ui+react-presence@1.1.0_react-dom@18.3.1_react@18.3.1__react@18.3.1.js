"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-presence@1.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-presence@1.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-presence@1.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-presence@1.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Presence: () => (/* binding */ Presence)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ Presence auto */ // packages/react/presence/src/Presence.tsx\n\n\n\n\n// packages/react/presence/src/useStateMachine.tsx\n\nfunction useStateMachine(initialState, machine) {\n    return react__WEBPACK_IMPORTED_MODULE_0__.useReducer((state, event)=>{\n        const nextState = machine[state][event];\n        return nextState ?? state;\n    }, initialState);\n}\n// packages/react/presence/src/Presence.tsx\nvar Presence = (props)=>{\n    const { present, children } = props;\n    const presence = usePresence(present);\n    const child = typeof children === \"function\" ? children({\n        present: presence.isPresent\n    }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);\n    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(presence.ref, getElementRef(child));\n    const forceMount = typeof children === \"function\";\n    return forceMount || presence.isPresent ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {\n        ref\n    }) : null;\n};\nPresence.displayName = \"Presence\";\nfunction usePresence(present) {\n    const [node, setNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState();\n    const stylesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});\n    const prevPresentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(present);\n    const prevAnimationNameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(\"none\");\n    const initialState = present ? \"mounted\" : \"unmounted\";\n    const [state, send] = useStateMachine(initialState, {\n        mounted: {\n            UNMOUNT: \"unmounted\",\n            ANIMATION_OUT: \"unmountSuspended\"\n        },\n        unmountSuspended: {\n            MOUNT: \"mounted\",\n            ANIMATION_END: \"unmounted\"\n        },\n        unmounted: {\n            MOUNT: \"mounted\"\n        }\n    });\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        const currentAnimationName = getAnimationName(stylesRef.current);\n        prevAnimationNameRef.current = state === \"mounted\" ? currentAnimationName : \"none\";\n    }, [\n        state\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        const styles = stylesRef.current;\n        const wasPresent = prevPresentRef.current;\n        const hasPresentChanged = wasPresent !== present;\n        if (hasPresentChanged) {\n            const prevAnimationName = prevAnimationNameRef.current;\n            const currentAnimationName = getAnimationName(styles);\n            if (present) {\n                send(\"MOUNT\");\n            } else if (currentAnimationName === \"none\" || styles?.display === \"none\") {\n                send(\"UNMOUNT\");\n            } else {\n                const isAnimating = prevAnimationName !== currentAnimationName;\n                if (wasPresent && isAnimating) {\n                    send(\"ANIMATION_OUT\");\n                } else {\n                    send(\"UNMOUNT\");\n                }\n            }\n            prevPresentRef.current = present;\n        }\n    }, [\n        present,\n        send\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        if (node) {\n            const handleAnimationEnd = (event)=>{\n                const currentAnimationName = getAnimationName(stylesRef.current);\n                const isCurrentAnimation = currentAnimationName.includes(event.animationName);\n                if (event.target === node && isCurrentAnimation) {\n                    react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(()=>send(\"ANIMATION_END\"));\n                }\n            };\n            const handleAnimationStart = (event)=>{\n                if (event.target === node) {\n                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);\n                }\n            };\n            node.addEventListener(\"animationstart\", handleAnimationStart);\n            node.addEventListener(\"animationcancel\", handleAnimationEnd);\n            node.addEventListener(\"animationend\", handleAnimationEnd);\n            return ()=>{\n                node.removeEventListener(\"animationstart\", handleAnimationStart);\n                node.removeEventListener(\"animationcancel\", handleAnimationEnd);\n                node.removeEventListener(\"animationend\", handleAnimationEnd);\n            };\n        } else {\n            send(\"ANIMATION_END\");\n        }\n    }, [\n        node,\n        send\n    ]);\n    return {\n        isPresent: [\n            \"mounted\",\n            \"unmountSuspended\"\n        ].includes(state),\n        ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node2)=>{\n            if (node2) stylesRef.current = getComputedStyle(node2);\n            setNode(node2);\n        }, [])\n    };\n}\nfunction getAnimationName(styles) {\n    return styles?.animationName || \"none\";\n}\nfunction getElementRef(element) {\n    let getter = Object.getOwnPropertyDescriptor(element.props, \"ref\")?.get;\n    let mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n    if (mayWarn) {\n        return element.ref;\n    }\n    getter = Object.getOwnPropertyDescriptor(element, \"ref\")?.get;\n    mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n    if (mayWarn) {\n        return element.props.ref;\n    }\n    return element.props.ref || element.ref;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXByZXNlbmNlQDEuMS4wX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1wcmVzZW5jZS9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUI7QUFDRztBQUNNO0FBQ0E7O0FDSFQ7QUFXaEIsU0FBU0ksZ0JBQ2RDLFlBQUEsRUFDQUMsT0FBQTtJQUVBLE9BQWFOLDZDQUFBLENBQVcsQ0FBQ1EsT0FBd0JDO1FBQy9DLE1BQU1DLFlBQWFKLE9BQUEsQ0FBUUUsTUFBSyxDQUFVQyxNQUFLO1FBQy9DLE9BQU9DLGFBQWFGO0lBQ3RCLEdBQUdIO0FBQ0w7O0FEUkEsSUFBTU0sV0FBb0MsQ0FBQ0M7SUFDekMsTUFBTSxFQUFFQyxPQUFBLEVBQVNDLFFBQUEsRUFBUyxHQUFJRjtJQUM5QixNQUFNRyxXQUFXQyxZQUFZSDtJQUU3QixNQUFNSSxRQUNKLE9BQU9ILGFBQWEsYUFDaEJBLFNBQVM7UUFBRUQsU0FBU0UsU0FBU0csU0FBQTtJQUFVLEtBQ2pDQywyQ0FBQSxDQUFTRSxJQUFBLENBQUtQO0lBRzFCLE1BQU1RLE1BQU1wQiw2RUFBZUEsQ0FBQ2EsU0FBU08sR0FBQSxFQUFLQyxjQUFjTjtJQUN4RCxNQUFNTyxhQUFhLE9BQU9WLGFBQWE7SUFDdkMsT0FBT1UsY0FBY1QsU0FBU0csU0FBQSxpQkFBa0JDLCtDQUFBLENBQWFGLE9BQU87UUFBRUs7SUFBSSxLQUFLO0FBQ2pGO0FBRUFYLFNBQVNlLFdBQUEsR0FBYztBQU12QixTQUFTVixZQUFZSCxPQUFBO0lBQ25CLE1BQU0sQ0FBQ2MsTUFBTUMsUUFBTyxHQUFVVCwyQ0FBQTtJQUM5QixNQUFNVyxZQUFrQlgseUNBQUEsQ0FBNEIsQ0FBQztJQUNyRCxNQUFNYSxpQkFBdUJiLHlDQUFBLENBQU9OO0lBQ3BDLE1BQU1vQix1QkFBNkJkLHlD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UUwsUUFBZ0J6QyxHQUFBO0lBQzFCO0lBR0EwQyxTQUFTQyxPQUFPQyx3QkFBQSxDQUF5QkgsU0FBUyxRQUFRSTtJQUMxREMsVUFBVUosVUFBVSxvQkFBb0JBLFVBQVVBLE9BQU9LLGNBQUE7SUFDekQsSUFBSUQsU0FBUztRQUNYLE9BQU9MLFFBQVFuRCxLQUFBLENBQU1VLEdBQUE7SUFDdkI7SUFHQSxPQUFPeUMsUUFBUW5ELEtBQUEsQ0FBTVUsR0FBQSxJQUFReUMsUUFBZ0J6QyxHQUFBO0FBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhpY3MtZGVzaWduZXItd2Vic2l0ZS8uLi9zcmMvUHJlc2VuY2UudHN4PzhiMzkiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MtZGVzaWduZXItd2Vic2l0ZS8uLi9zcmMvdXNlU3RhdGVNYWNoaW5lLnRzeD9hMzIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyB1c2VDb21wb3NlZFJlZnMgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzJztcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC11c2UtbGF5b3V0LWVmZmVjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZU1hY2hpbmUgfSBmcm9tICcuL3VzZVN0YXRlTWFjaGluZSc7XG5cbmludGVyZmFjZSBQcmVzZW5jZVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudCB8ICgocHJvcHM6IHsgcHJlc2VudDogYm9vbGVhbiB9KSA9PiBSZWFjdC5SZWFjdEVsZW1lbnQpO1xuICBwcmVzZW50OiBib29sZWFuO1xufVxuXG5jb25zdCBQcmVzZW5jZTogUmVhY3QuRkM8UHJlc2VuY2VQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcmVzZW50LCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHByZXNlbmNlID0gdXNlUHJlc2VuY2UocHJlc2VudCk7XG5cbiAgY29uc3QgY2hpbGQgPSAoXG4gICAgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG4gICAgICA/IGNoaWxkcmVuKHsgcHJlc2VudDogcHJlc2VuY2UuaXNQcmVzZW50IH0pXG4gICAgICA6IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICkgYXMgUmVhY3QuUmVhY3RFbGVtZW50O1xuXG4gIGNvbnN0IHJlZiA9IHVzZUNvbXBvc2VkUmVmcyhwcmVzZW5jZS5yZWYsIGdldEVsZW1lbnRSZWYoY2hpbGQpKTtcbiAgY29uc3QgZm9yY2VNb3VudCA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIGZvcmNlTW91bnQgfHwgcHJlc2VuY2UuaXNQcmVzZW50ID8gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IHJlZiB9KSA6IG51bGw7XG59O1xuXG5QcmVzZW5jZS5kaXNwbGF5TmFtZSA9ICdQcmVzZW5jZSc7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIHVzZVByZXNlbmNlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmZ1bmN0aW9uIHVzZVByZXNlbmNlKHByZXNlbnQ6IGJvb2xlYW4pIHtcbiAgY29uc3QgW25vZGUsIHNldE5vZGVdID0gUmVhY3QudXNlU3RhdGU8SFRNTEVsZW1lbnQ+KCk7XG4gIGNvbnN0IHN0eWxlc1JlZiA9IFJlYWN0LnVzZVJlZjxDU1NTdHlsZURlY2xhcmF0aW9uPih7fSBhcyBhbnkpO1xuICBjb25zdCBwcmV2UHJlc2VudFJlZiA9IFJlYWN0LnVzZVJlZihwcmVzZW50KTtcbiAgY29uc3QgcHJldkFuaW1hdGlvbk5hbWVSZWYgPSBSZWFjdC51c2VSZWY8c3RyaW5nPignbm9uZScpO1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSBwcmVzZW50ID8gJ21vdW50ZWQnIDogJ3VubW91bnRlZCc7XG4gIGNvbnN0IFtzdGF0ZSwgc2VuZF0gPSB1c2VTdGF0ZU1hY2hpbmUoaW5pdGlhbFN0YXRlLCB7XG4gICAgbW91bnRlZDoge1xuICAgICAgVU5NT1VOVDogJ3VubW91bnRlZCcsXG4gICAgICBBTklNQVRJT05fT1VUOiAndW5tb3VudFN1c3BlbmRlZCcsXG4gICAgfSxcbiAgICB1bm1vdW50U3VzcGVuZGVkOiB7XG4gICAgICBNT1VOVDogJ21vdW50ZWQnLFxuICAgICAgQU5JTUFUSU9OX0VORDogJ3VubW91bnRlZCcsXG4gICAgfSxcbiAgICB1bm1vdW50ZWQ6IHtcbiAgICAgIE1PVU5UOiAnbW91bnRlZCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50QW5pbWF0aW9uTmFtZSA9IGdldEFuaW1hdGlvbk5hbWUoc3R5bGVzUmVmLmN1cnJlbnQpO1xuICAgIHByZXZBbmltYXRpb25OYW1lUmVmLmN1cnJlbnQgPSBzdGF0ZSA9PT0gJ21vdW50ZWQnID8gY3VycmVudEFuaW1hdGlvbk5hbWUgOiAnbm9uZSc7XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVzUmVmLmN1cnJlbnQ7XG4gICAgY29uc3Qgd2FzUHJlc2VudCA9IHByZXZQcmVzZW50UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaGFzUHJlc2VudENoYW5nZWQgPSB3YXNQcmVzZW50ICE9PSBwcmVzZW50O1xuXG4gICAgaWYgKGhhc1ByZXNlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCBwcmV2QW5pbWF0aW9uTmFtZSA9IHByZXZBbmltYXRpb25OYW1lUmVmLmN1cnJlbnQ7XG4gICAgICBjb25zdCBjdXJyZW50QW5pbWF0aW9uTmFtZSA9IGdldEFuaW1hdGlvbk5hbWUoc3R5bGVzKTtcblxuICAgICAgaWYgKHByZXNlbnQpIHtcbiAgICAgICAgc2VuZCgnTU9VTlQnKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEFuaW1hdGlvbk5hbWUgPT09ICdub25lJyB8fCBzdHlsZXM/LmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBleGl0IGFuaW1hdGlvbiBvciB0aGUgZWxlbWVudCBpcyBoaWRkZW4sIGFuaW1hdGlvbnMgd29uJ3QgcnVuXG4gICAgICAgIC8vIHNvIHdlIHVubW91bnQgaW5zdGFudGx5XG4gICAgICAgIHNlbmQoJ1VOTU9VTlQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGBwcmVzZW50YCBjaGFuZ2VzIHRvIGBmYWxzZWAsIHdlIGNoZWNrIGNoYW5nZXMgdG8gYW5pbWF0aW9uLW5hbWUgdG9cbiAgICAgICAgICogZGV0ZXJtaW5lIHdoZXRoZXIgYW4gYW5pbWF0aW9uIGhhcyBzdGFydGVkLiBXZSBjaG9zZSB0aGlzIGFwcHJvYWNoIChyZWFkaW5nXG4gICAgICAgICAqIGNvbXB1dGVkIHN0eWxlcykgYmVjYXVzZSB0aGVyZSBpcyBubyBgYW5pbWF0aW9ucnVuYCBldmVudCBhbmQgYGFuaW1hdGlvbnN0YXJ0YFxuICAgICAgICAgKiBmaXJlcyBhZnRlciBgYW5pbWF0aW9uLWRlbGF5YCBoYXMgZXhwaXJlZCB3aGljaCB3b3VsZCBiZSB0b28gbGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGlzQW5pbWF0aW5nID0gcHJldkFuaW1hdGlvbk5hbWUgIT09IGN1cnJlbnRBbmltYXRpb25OYW1lO1xuXG4gICAgICAgIGlmICh3YXNQcmVzZW50ICYmIGlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgc2VuZCgnQU5JTUFUSU9OX09VVCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbmQoJ1VOTU9VTlQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcmV2UHJlc2VudFJlZi5jdXJyZW50ID0gcHJlc2VudDtcbiAgICB9XG4gIH0sIFtwcmVzZW50LCBzZW5kXSk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAobm9kZSkge1xuICAgICAgLyoqXG4gICAgICAgKiBUcmlnZ2VyaW5nIGFuIEFOSU1BVElPTl9PVVQgZHVyaW5nIGFuIEFOSU1BVElPTl9JTiB3aWxsIGZpcmUgYW4gYGFuaW1hdGlvbmNhbmNlbGBcbiAgICAgICAqIGV2ZW50IGZvciBBTklNQVRJT05fSU4gYWZ0ZXIgd2UgaGF2ZSBlbnRlcmVkIGB1bm1vdW50U3VzcGVuZGVkYCBzdGF0ZS4gU28sIHdlXG4gICAgICAgKiBtYWtlIHN1cmUgd2Ugb25seSB0cmlnZ2VyIEFOSU1BVElPTl9FTkQgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGFuaW1hdGlvbi5cbiAgICAgICAqL1xuICAgICAgY29uc3QgaGFuZGxlQW5pbWF0aW9uRW5kID0gKGV2ZW50OiBBbmltYXRpb25FdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50QW5pbWF0aW9uTmFtZSA9IGdldEFuaW1hdGlvbk5hbWUoc3R5bGVzUmVmLmN1cnJlbnQpO1xuICAgICAgICBjb25zdCBpc0N1cnJlbnRBbmltYXRpb24gPSBjdXJyZW50QW5pbWF0aW9uTmFtZS5pbmNsdWRlcyhldmVudC5hbmltYXRpb25OYW1lKTtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbm9kZSAmJiBpc0N1cnJlbnRBbmltYXRpb24pIHtcbiAgICAgICAgICAvLyBXaXRoIFJlYWN0IDE4IGNvbmN1cnJlbmN5IHRoaXMgdXBkYXRlIGlzIGFwcGxpZWRcbiAgICAgICAgICAvLyBhIGZyYW1lIGFmdGVyIHRoZSBhbmltYXRpb24gZW5kcywgY3JlYXRpbmcgYSBmbGFzaCBvZiB2aXNpYmxlIGNvbnRlbnQuXG4gICAgICAgICAgLy8gQnkgbWFudWFsbHkgZmx1c2hpbmcgd2UgZW5zdXJlIHRoZXkgc3luYyB3aXRoaW4gYSBmcmFtZSwgcmVtb3ZpbmcgdGhlIGZsYXNoLlxuICAgICAgICAgIFJlYWN0RE9NLmZsdXNoU3luYygoKSA9PiBzZW5kKCdBTklNQVRJT05fRU5EJykpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgaGFuZGxlQW5pbWF0aW9uU3RhcnQgPSAoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG5vZGUpIHtcbiAgICAgICAgICAvLyBpZiBhbmltYXRpb24gb2NjdXJyZWQsIHN0b3JlIGl0cyBuYW1lIGFzIHRoZSBwcmV2aW91cyBhbmltYXRpb24uXG4gICAgICAgICAgcHJldkFuaW1hdGlvbk5hbWVSZWYuY3VycmVudCA9IGdldEFuaW1hdGlvbk5hbWUoc3R5bGVzUmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25zdGFydCcsIGhhbmRsZUFuaW1hdGlvblN0YXJ0KTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uY2FuY2VsJywgaGFuZGxlQW5pbWF0aW9uRW5kKTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlQW5pbWF0aW9uRW5kKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uc3RhcnQnLCBoYW5kbGVBbmltYXRpb25TdGFydCk7XG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uY2FuY2VsJywgaGFuZGxlQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgdW5tb3VudGVkIHN0YXRlIGlmIHRoZSBub2RlIGlzIHJlbW92ZWQgcHJlbWF0dXJlbHkuXG4gICAgICAvLyBXZSBhdm9pZCBkb2luZyBzbyBkdXJpbmcgY2xlYW51cCBhcyB0aGUgbm9kZSBtYXkgY2hhbmdlIGJ1dCBzdGlsbCBleGlzdC5cbiAgICAgIHNlbmQoJ0FOSU1BVElPTl9FTkQnKTtcbiAgICB9XG4gIH0sIFtub2RlLCBzZW5kXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc1ByZXNlbnQ6IFsnbW91bnRlZCcsICd1bm1vdW50U3VzcGVuZGVkJ10uaW5jbHVkZXMoc3RhdGUpLFxuICAgIHJlZjogUmVhY3QudXNlQ2FsbGJhY2soKG5vZGU6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBpZiAobm9kZSkgc3R5bGVzUmVmLmN1cnJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgc2V0Tm9kZShub2RlKTtcbiAgICB9LCBbXSksXG4gIH07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXM/OiBDU1NTdHlsZURlY2xhcmF0aW9uKSB7XG4gIHJldHVybiBzdHlsZXM/LmFuaW1hdGlvbk5hbWUgfHwgJ25vbmUnO1xufVxuXG4vLyBCZWZvcmUgUmVhY3QgMTkgYWNjZXNzaW5nIGBlbGVtZW50LnByb3BzLnJlZmAgd2lsbCB0aHJvdyBhIHdhcm5pbmcgYW5kIHN1Z2dlc3QgdXNpbmcgYGVsZW1lbnQucmVmYFxuLy8gQWZ0ZXIgUmVhY3QgMTkgYWNjZXNzaW5nIGBlbGVtZW50LnJlZmAgZG9lcyB0aGUgb3Bwb3NpdGUuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yODM0OFxuLy9cbi8vIEFjY2VzcyB0aGUgcmVmIHVzaW5nIHRoZSBtZXRob2QgdGhhdCBkb2Vzbid0IHlpZWxkIGEgd2FybmluZy5cbmZ1bmN0aW9uIGdldEVsZW1lbnRSZWYoZWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50KSB7XG4gIC8vIFJlYWN0IDw9MTggaW4gREVWXG4gIGxldCBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGVsZW1lbnQucHJvcHMsICdyZWYnKT8uZ2V0O1xuICBsZXQgbWF5V2FybiA9IGdldHRlciAmJiAnaXNSZWFjdFdhcm5pbmcnIGluIGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmc7XG4gIGlmIChtYXlXYXJuKSB7XG4gICAgcmV0dXJuIChlbGVtZW50IGFzIGFueSkucmVmO1xuICB9XG5cbiAgLy8gUmVhY3QgMTkgaW4gREVWXG4gIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZWxlbWVudCwgJ3JlZicpPy5nZXQ7XG4gIG1heVdhcm4gPSBnZXR0ZXIgJiYgJ2lzUmVhY3RXYXJuaW5nJyBpbiBnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nO1xuICBpZiAobWF5V2Fybikge1xuICAgIHJldHVybiBlbGVtZW50LnByb3BzLnJlZjtcbiAgfVxuXG4gIC8vIE5vdCBERVZcbiAgcmV0dXJuIGVsZW1lbnQucHJvcHMucmVmIHx8IChlbGVtZW50IGFzIGFueSkucmVmO1xufVxuXG5leHBvcnQgeyBQcmVzZW5jZSB9O1xuZXhwb3J0IHR5cGUgeyBQcmVzZW5jZVByb3BzIH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgTWFjaGluZTxTPiA9IHsgW2s6IHN0cmluZ106IHsgW2s6IHN0cmluZ106IFMgfSB9O1xudHlwZSBNYWNoaW5lU3RhdGU8VD4gPSBrZXlvZiBUO1xudHlwZSBNYWNoaW5lRXZlbnQ8VD4gPSBrZXlvZiBVbmlvblRvSW50ZXJzZWN0aW9uPFRba2V5b2YgVF0+O1xuXG4vLyDwn6SvIGh0dHBzOi8vZmV0dGJsb2cuZXUvdHlwZXNjcmlwdC11bmlvbi10by1pbnRlcnNlY3Rpb24vXG50eXBlIFVuaW9uVG9JbnRlcnNlY3Rpb248VD4gPSAoVCBleHRlbmRzIGFueSA/ICh4OiBUKSA9PiBhbnkgOiBuZXZlcikgZXh0ZW5kcyAoeDogaW5mZXIgUikgPT4gYW55XG4gID8gUlxuICA6IG5ldmVyO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGVNYWNoaW5lPE0+KFxuICBpbml0aWFsU3RhdGU6IE1hY2hpbmVTdGF0ZTxNPixcbiAgbWFjaGluZTogTSAmIE1hY2hpbmU8TWFjaGluZVN0YXRlPE0+PlxuKSB7XG4gIHJldHVybiBSZWFjdC51c2VSZWR1Y2VyKChzdGF0ZTogTWFjaGluZVN0YXRlPE0+LCBldmVudDogTWFjaGluZUV2ZW50PE0+KTogTWFjaGluZVN0YXRlPE0+ID0+IHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSAobWFjaGluZVtzdGF0ZV0gYXMgYW55KVtldmVudF07XG4gICAgcmV0dXJuIG5leHRTdGF0ZSA/PyBzdGF0ZTtcbiAgfSwgaW5pdGlhbFN0YXRlKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwidXNlQ29tcG9zZWRSZWZzIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlU3RhdGVNYWNoaW5lIiwiaW5pdGlhbFN0YXRlIiwibWFjaGluZSIsInVzZVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwibmV4dFN0YXRlIiwiUHJlc2VuY2UiLCJwcm9wcyIsInByZXNlbnQiLCJjaGlsZHJlbiIsInByZXNlbmNlIiwidXNlUHJlc2VuY2UiLCJjaGlsZCIsImlzUHJlc2VudCIsIlJlYWN0MiIsIkNoaWxkcmVuIiwib25seSIsInJlZiIsImdldEVsZW1lbnRSZWYiLCJmb3JjZU1vdW50IiwiY2xvbmVFbGVtZW50IiwiZGlzcGxheU5hbWUiLCJub2RlIiwic2V0Tm9kZSIsInVzZVN0YXRlIiwic3R5bGVzUmVmIiwidXNlUmVmIiwicHJldlByZXNlbnRSZWYiLCJwcmV2QW5pbWF0aW9uTmFtZVJlZiIsInNlbmQiLCJtb3VudGVkIiwiVU5NT1VOVCIsIkFOSU1BVElPTl9PVVQiLCJ1bm1vdW50U3VzcGVuZGVkIiwiTU9VTlQiLCJBTklNQVRJT05fRU5EIiwidW5tb3VudGVkIiwidXNlRWZmZWN0IiwiY3VycmVudEFuaW1hdGlvbk5hbWUiLCJnZXRBbmltYXRpb25OYW1lIiwiY3VycmVudCIsInN0eWxlcyIsIndhc1ByZXNlbnQiLCJoYXNQcmVzZW50Q2hhbmdlZCIsInByZXZBbmltYXRpb25OYW1lIiwiZGlzcGxheSIsImlzQW5pbWF0aW5nIiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwiaXNDdXJyZW50QW5pbWF0aW9uIiwiaW5jbHVkZXMiLCJhbmltYXRpb25OYW1lIiwidGFyZ2V0IiwiZmx1c2hTeW5jIiwiaGFuZGxlQW5pbWF0aW9uU3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUNhbGxiYWNrIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsZW1lbnQiLCJnZXR0ZXIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXQiLCJtYXlXYXJuIiwiaXNSZWFjdFdhcm5pbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-presence@1.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs\n");

/***/ })

};
;