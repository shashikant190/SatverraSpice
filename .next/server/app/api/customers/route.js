"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/customers/route";
exports.ids = ["app/api/customers/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcustomers%2Froute&page=%2Fapi%2Fcustomers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcustomers%2Froute.ts&appDir=%2FUsers%2Fshashikant%2FDesktop%2FSatverraSpice-clean%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshashikant%2FDesktop%2FSatverraSpice-clean&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcustomers%2Froute&page=%2Fapi%2Fcustomers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcustomers%2Froute.ts&appDir=%2FUsers%2Fshashikant%2FDesktop%2FSatverraSpice-clean%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshashikant%2FDesktop%2FSatverraSpice-clean&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_shashikant_Desktop_SatverraSpice_clean_app_api_customers_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/customers/route.ts */ \"(rsc)/./app/api/customers/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/customers/route\",\n        pathname: \"/api/customers\",\n        filename: \"route\",\n        bundlePath: \"app/api/customers/route\"\n    },\n    resolvedPagePath: \"/Users/shashikant/Desktop/SatverraSpice-clean/app/api/customers/route.ts\",\n    nextConfigOutput,\n    userland: _Users_shashikant_Desktop_SatverraSpice_clean_app_api_customers_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/customers/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjdXN0b21lcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmN1c3RvbWVycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmN1c3RvbWVycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNoYXNoaWthbnQlMkZEZXNrdG9wJTJGU2F0dmVycmFTcGljZS1jbGVhbiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZzaGFzaGlrYW50JTJGRGVza3RvcCUyRlNhdHZlcnJhU3BpY2UtY2xlYW4maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3dCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BpY2UtbmV4dGpzLz81YWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zaGFzaGlrYW50L0Rlc2t0b3AvU2F0dmVycmFTcGljZS1jbGVhbi9hcHAvYXBpL2N1c3RvbWVycy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY3VzdG9tZXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY3VzdG9tZXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jdXN0b21lcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc2hhc2hpa2FudC9EZXNrdG9wL1NhdHZlcnJhU3BpY2UtY2xlYW4vYXBwL2FwaS9jdXN0b21lcnMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2N1c3RvbWVycy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcustomers%2Froute&page=%2Fapi%2Fcustomers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcustomers%2Froute.ts&appDir=%2FUsers%2Fshashikant%2FDesktop%2FSatverraSpice-clean%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshashikant%2FDesktop%2FSatverraSpice-clean&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/customers/route.ts":
/*!************************************!*\
  !*** ./app/api/customers/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_requireAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/requireAdmin */ \"(rsc)/./src/lib/requireAdmin.ts\");\n\n\n\nasync function GET() {\n    try {\n        (0,_lib_requireAdmin__WEBPACK_IMPORTED_MODULE_2__.requireAdmin)();\n        const customers = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.customer.findMany({\n            include: {\n                orders: {\n                    orderBy: {\n                        createdAt: \"desc\"\n                    },\n                    include: {\n                        items: true\n                    }\n                }\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(customers.map((c)=>({\n                id: c.id,\n                full_name: c.full_name,\n                mobile: c.mobile,\n                email: c.email,\n                order_count: c.orders.length,\n                total_spent: c.orders.reduce((sum, o)=>sum + o.total_amount, 0),\n                orders: c.orders.map((o)=>({\n                        id: o.id,\n                        order_number: o.order_number,\n                        createdAt: o.createdAt,\n                        status: o.status,\n                        total_amount: o.total_amount,\n                        items: o.items\n                    }))\n            })));\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2N1c3RvbWVycy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCO0FBQ2E7QUFDTztBQUUzQyxlQUFlRztJQUNwQixJQUFJO1FBQ0ZELCtEQUFZQTtRQUVaLE1BQU1FLFlBQVksTUFBTUosdUNBQUVBLENBQUNLLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDO1lBQzNDQyxTQUFTO2dCQUNQQyxRQUFRO29CQUNOQyxTQUFTO3dCQUFFQyxXQUFXO29CQUFPO29CQUM3QkgsU0FBUzt3QkFDUEksT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QlIsVUFBVVMsR0FBRyxDQUFDLENBQUNDLElBQU87Z0JBQ3BCQyxJQUFJRCxFQUFFQyxFQUFFO2dCQUNSQyxXQUFXRixFQUFFRSxTQUFTO2dCQUN0QkMsUUFBUUgsRUFBRUcsTUFBTTtnQkFDaEJDLE9BQU9KLEVBQUVJLEtBQUs7Z0JBQ2RDLGFBQWFMLEVBQUVOLE1BQU0sQ0FBQ1ksTUFBTTtnQkFDNUJDLGFBQWFQLEVBQUVOLE1BQU0sQ0FBQ2MsTUFBTSxDQUMxQixDQUFDQyxLQUFLQyxJQUFNRCxNQUFNQyxFQUFFQyxZQUFZLEVBQ2hDO2dCQUVGakIsUUFBUU0sRUFBRU4sTUFBTSxDQUFDSyxHQUFHLENBQUMsQ0FBQ1csSUFBTzt3QkFDM0JULElBQUlTLEVBQUVULEVBQUU7d0JBQ1JXLGNBQWNGLEVBQUVFLFlBQVk7d0JBQzVCaEIsV0FBV2MsRUFBRWQsU0FBUzt3QkFDdEJpQixRQUFRSCxFQUFFRyxNQUFNO3dCQUNoQkYsY0FBY0QsRUFBRUMsWUFBWTt3QkFDNUJkLE9BQU9hLEVBQUViLEtBQUs7b0JBQ2hCO1lBQ0Y7SUFFSixFQUFFLE9BQU07UUFDTixPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtZQUFFZ0IsU0FBUztRQUFlLEdBQzFCO1lBQUVELFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BpY2UtbmV4dGpzLy4vYXBwL2FwaS9jdXN0b21lcnMvcm91dGUudHM/NjljOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlQWRtaW4gfSBmcm9tIFwiQC9saWIvcmVxdWlyZUFkbWluXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgcmVxdWlyZUFkbWluKCk7XG5cbiAgICBjb25zdCBjdXN0b21lcnMgPSBhd2FpdCBkYi5jdXN0b21lci5maW5kTWFueSh7XG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIG9yZGVyczoge1xuICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGl0ZW1zOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgY3VzdG9tZXJzLm1hcCgoYykgPT4gKHtcbiAgICAgICAgaWQ6IGMuaWQsXG4gICAgICAgIGZ1bGxfbmFtZTogYy5mdWxsX25hbWUsXG4gICAgICAgIG1vYmlsZTogYy5tb2JpbGUsXG4gICAgICAgIGVtYWlsOiBjLmVtYWlsLFxuICAgICAgICBvcmRlcl9jb3VudDogYy5vcmRlcnMubGVuZ3RoLFxuICAgICAgICB0b3RhbF9zcGVudDogYy5vcmRlcnMucmVkdWNlKFxuICAgICAgICAgIChzdW0sIG8pID0+IHN1bSArIG8udG90YWxfYW1vdW50LFxuICAgICAgICAgIDBcbiAgICAgICAgKSxcbiAgICAgICAgb3JkZXJzOiBjLm9yZGVycy5tYXAoKG8pID0+ICh7XG4gICAgICAgICAgaWQ6IG8uaWQsXG4gICAgICAgICAgb3JkZXJfbnVtYmVyOiBvLm9yZGVyX251bWJlcixcbiAgICAgICAgICBjcmVhdGVkQXQ6IG8uY3JlYXRlZEF0LFxuICAgICAgICAgIHN0YXR1czogby5zdGF0dXMsXG4gICAgICAgICAgdG90YWxfYW1vdW50OiBvLnRvdGFsX2Ftb3VudCxcbiAgICAgICAgICBpdGVtczogby5pdGVtcyxcbiAgICAgICAgfSkpLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH0sXG4gICAgICB7IHN0YXR1czogNDAxIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZGIiLCJOZXh0UmVzcG9uc2UiLCJyZXF1aXJlQWRtaW4iLCJHRVQiLCJjdXN0b21lcnMiLCJjdXN0b21lciIsImZpbmRNYW55IiwiaW5jbHVkZSIsIm9yZGVycyIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJpdGVtcyIsImpzb24iLCJtYXAiLCJjIiwiaWQiLCJmdWxsX25hbWUiLCJtb2JpbGUiLCJlbWFpbCIsIm9yZGVyX2NvdW50IiwibGVuZ3RoIiwidG90YWxfc3BlbnQiLCJyZWR1Y2UiLCJzdW0iLCJvIiwidG90YWxfYW1vdW50Iiwib3JkZXJfbnVtYmVyIiwic3RhdHVzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/customers/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst signToken = (payload)=>jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, process.env.JWT_SECRET, {\n        expiresIn: \"7d\"\n    });\nconst verifyToken = (token)=>jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUV4QixNQUFNQyxZQUFZLENBQUNDLFVBQ3hCRix3REFBUSxDQUFDRSxTQUFTRSxRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFBRztRQUFFQyxXQUFXO0lBQUssR0FBRztBQUUzRCxNQUFNQyxjQUFjLENBQUNDLFFBQzFCVCwwREFBVSxDQUFDUyxPQUFPTCxRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwaWNlLW5leHRqcy8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgY29uc3Qgc2lnblRva2VuID0gKHBheWxvYWQ6IGFueSkgPT5cbiAgand0LnNpZ24ocGF5bG9hZCwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCEsIHsgZXhwaXJlc0luOiBcIjdkXCIgfSk7XG5cbmV4cG9ydCBjb25zdCB2ZXJpZnlUb2tlbiA9ICh0b2tlbjogc3RyaW5nKSA9PlxuICBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUISk7XG4iXSwibmFtZXMiOlsiand0Iiwic2lnblRva2VuIiwicGF5bG9hZCIsInNpZ24iLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsInZlcmlmeVRva2VuIiwidG9rZW4iLCJ2ZXJpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst db = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"error\"\n    ]\n});\nif (true) {\n    globalForPrisma.prisma = db;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLEtBQ1hGLGdCQUFnQkcsTUFBTSxJQUN0QixJQUFJSix3REFBWUEsQ0FBQztJQUNmSyxLQUFLO1FBQUM7S0FBUTtBQUNoQixHQUFHO0FBRUwsSUFBSUMsSUFBcUMsRUFBRTtJQUN6Q0wsZ0JBQWdCRyxNQUFNLEdBQUdEO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BpY2UtbmV4dGpzLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHtcbiAgcHJpc21hPzogUHJpc21hQ2xpZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGRiID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFtcImVycm9yXCJdLFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gZGI7XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsImRiIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/requireAdmin.ts":
/*!*********************************!*\
  !*** ./src/lib/requireAdmin.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   requireAdmin: () => (/* binding */ requireAdmin)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\nfunction requireAdmin() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(\"token\")?.value;\n    if (!token) {\n        throw new Error(\"Unauthorized\");\n    }\n    const user = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.verifyToken)(token);\n    if (user.role !== \"admin\") {\n        throw new Error(\"Forbidden\");\n    }\n    return user;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3JlcXVpcmVBZG1pbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFDRTtBQUVsQyxTQUFTRTtJQUNkLE1BQU1DLFFBQVFILHFEQUFPQSxHQUFHSSxHQUFHLENBQUMsVUFBVUM7SUFFdEMsSUFBSSxDQUFDRixPQUFPO1FBQ1YsTUFBTSxJQUFJRyxNQUFNO0lBQ2xCO0lBRUEsTUFBTUMsT0FBWU4sc0RBQVdBLENBQUNFO0lBRTlCLElBQUlJLEtBQUtDLElBQUksS0FBSyxTQUFTO1FBQ3pCLE1BQU0sSUFBSUYsTUFBTTtJQUNsQjtJQUVBLE9BQU9DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGljZS1uZXh0anMvLi9zcmMvbGliL3JlcXVpcmVBZG1pbi50cz8wZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgeyB2ZXJpZnlUb2tlbiB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlQWRtaW4oKSB7XG4gIGNvbnN0IHRva2VuID0gY29va2llcygpLmdldChcInRva2VuXCIpPy52YWx1ZTtcblxuICBpZiAoIXRva2VuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgY29uc3QgdXNlcjogYW55ID0gdmVyaWZ5VG9rZW4odG9rZW4pO1xuXG4gIGlmICh1c2VyLnJvbGUgIT09IFwiYWRtaW5cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZvcmJpZGRlblwiKTtcbiAgfVxuXG4gIHJldHVybiB1c2VyO1xufVxuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJ2ZXJpZnlUb2tlbiIsInJlcXVpcmVBZG1pbiIsInRva2VuIiwiZ2V0IiwidmFsdWUiLCJFcnJvciIsInVzZXIiLCJyb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/requireAdmin.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcustomers%2Froute&page=%2Fapi%2Fcustomers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcustomers%2Froute.ts&appDir=%2FUsers%2Fshashikant%2FDesktop%2FSatverraSpice-clean%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshashikant%2FDesktop%2FSatverraSpice-clean&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();