(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/canvas-node/canvas-node.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/canvas-node/canvas-node.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" [ngClass]=\"{'predeccessors': node.Predeccessors.length > 0 , 'successors':  node.Successors.length > 0}\">\n\n    <div class=\"content\">\n        <div style=\"display: flex;\">\n            <button mat-icon-button (click)=\"delete.emit(node)\">\n                <mat-icon>\n                    delete\n                </mat-icon>\n            </button>\n            <input style=\"width: 50%;\" type=\"number\" placeholder=\"Dauer\" [(ngModel)]=\"node.Duration\">\n            <input style=\"width: 100%;\" placeholder=\"Name\" [(ngModel)]=\"node.Name\">\n        </div>\n\n\n    </div>\n\n\n    <div class=\"predeccessors-line-end\" *ngIf=\"node.Predeccessors.length > 0\"></div>\n    <div  class=\"successors-line-start\" (click)=\"openNodeSelec(select)\">\n        <mat-icon class=\"add-icon\">\n            timeline\n        </mat-icon>\n\n        <mat-select multiple [value]=\"node.Successors\" (selectionChange)=\"changeConnectionSelection($event)\" #select class=\"node-connection-select\">\n            <mat-option *ngFor=\"let node of availableNodes\" [value]=\"node.Id\">\n                {{node.Name}}\n            </mat-option>\n        </mat-select>\n    </div>\n\n  \n</div>\n\n\n<mat-menu #nodeMenu=\"matMenu\">\n    <ng-template  matMenuContent>\n        <ng-container *ngIf=\"availableNodes.length > 0 else noNodesTemplate\">\n            <ng-container *ngFor=\"let successor of availableNodes\">\n                <button mat-menu-item (click)=\"connectoToNode(successor)\">{{successor.Name}}</button>\n            </ng-container>\n        </ng-container>\n\n        <ng-template #noNodesTemplate>\n\n            <span>\n                No nodes to connect available\n            </span>\n        </ng-template>\n     \n    </ng-template>\n</mat-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/canvas/canvas.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/canvas/canvas.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"canvas\">\n\n    <!-- Generate for each node a component and display it inside the canvas -->\n    <div *ngFor=\"let node of nodes\"\n     cdkDrag\n     (cdkDragStarted)=\"startDraggingNode(node , $event)\"\n     (cdkDragEnded)=\"endDraggingNode(node , $event)\"\n     class=\"node\">\n        <app-canvas-node [node]=\"node\" (delete)=\"deleteNode($event)\"></app-canvas-node>\n    </div>\n\n    <!-- Svg to display the lines between the nodes -->\n    <svg  #svg class=\"line-svg\">\n    </svg>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        CriticalPathTool\n\n        <div style=\"margin-left: auto;\">\n\n        </div>\n\n        <button mat-icon-button>\n            <mat-icon>save</mat-icon>\n        </button>\n\n    </mat-toolbar-row>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-container\">\n  <app-header></app-header>\n  <app-canvas style=\"height: 100%;\" [nodes]=\"nodes\"> </app-canvas>\n\n  <button class=\"add-btn\" (click)=\"addNode()\" mat-mini-fab>\n      <mat-icon>add</mat-icon>\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/canvas-node/canvas-node.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Components/canvas-node/canvas-node.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  height: 80px;\n  width: 200px;\n  position: relative;\n  border: 2px solid black;\n}\n\n.predeccessors-line-end {\n  position: absolute;\n  border: 4px black solid;\n  border-radius: 50%;\n  top: calc(50% - 4px);\n  left: -4px;\n}\n\n.successors-line-start {\n  position: absolute;\n  border: 4px black solid;\n  border-radius: 50%;\n  display: flex;\n  top: calc(50% - 4px);\n  left: calc(100% - 4px);\n}\n\n.successors-line-start .add-icon {\n  cursor: pointer;\n  display: none;\n}\n\n.container:hover .add-icon {\n  display: block;\n}\n\n.container:hover .successors-line-start {\n  padding: 2px;\n  border: 2px black solid;\n  background-color: white;\n  top: calc(50% - 16px);\n  left: calc(100% - 10px);\n}\n\ninput::-webkit-input-placeholder {\n  padding-left: 5px;\n}\n\ninput::-moz-placeholder {\n  padding-left: 5px;\n}\n\ninput::-ms-input-placeholder {\n  padding-left: 5px;\n}\n\ninput::placeholder {\n  padding-left: 5px;\n}\n\n:host-context(.cdk-drag-dragging) .mat-icon-button {\n  pointer-events: none;\n}\n\n::ng-deep .node-connection-select {\n  height: 0px;\n  overflow: hidden;\n  width: 0 !important;\n  visibility: hidden;\n}\n\n::ng-deep .node-connection-select .mat-select-arrow-container {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jYW52YXMtbm9kZS9DOlxcVXNlcnNcXGphY29iXFxEb2N1bWVudHNcXFByb2pla3RlXFxDcml0aWNhbFBhdGhUb29sL3NyY1xcYXBwXFxDb21wb25lbnRzXFxjYW52YXMtbm9kZVxcY2FudmFzLW5vZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvY2FudmFzLW5vZGUvY2FudmFzLW5vZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FDQ1I7O0FESUk7RUFDSSxjQUFBO0FDRFI7O0FESUk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNGUjs7QURRQTtFQUNJLGlCQUFBO0FDTEo7O0FESUE7RUFDSSxpQkFBQTtBQ0xKOztBRElBO0VBQ0ksaUJBQUE7QUNMSjs7QURJQTtFQUNJLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxvQkFBQTtBQ0xKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRE9JO0VBQ0ksYUFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9jYW52YXMtbm9kZS9jYW52YXMtbm9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5wcmVkZWNjZXNzb3JzLWxpbmUtZW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogNHB4IGJsYWNrIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDRweCk7XHJcbiAgICBsZWZ0OiAtNHB4O1xyXG59XHJcblxyXG4uc3VjY2Vzc29ycy1saW5lLXN0YXJ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogNHB4IGJsYWNrIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRvcDogY2FsYyg1MCUgLSA0cHgpO1xyXG4gICAgbGVmdDogY2FsYygxMDAlIC0gNHB4KTtcclxuXHJcbiAgICAuYWRkLWljb24ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyOmhvdmVyIHtcclxuICAgIC5hZGQtaWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Y2Nlc3NvcnMtbGluZS1zdGFydCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxNnB4KTtcclxuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmNkay1kcmFnLWRyYWdnaW5nKSAubWF0LWljb24tYnV0dG9uIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5vZGUtY29ubmVjdGlvbi1zZWxlY3Qge1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAubWF0LXNlbGVjdC1hcnJvdy1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5wcmVkZWNjZXNzb3JzLWxpbmUtZW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDRweCBibGFjayBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IGNhbGMoNTAlIC0gNHB4KTtcbiAgbGVmdDogLTRweDtcbn1cblxuLnN1Y2Nlc3NvcnMtbGluZS1zdGFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiA0cHggYmxhY2sgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdG9wOiBjYWxjKDUwJSAtIDRweCk7XG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDRweCk7XG59XG4uc3VjY2Vzc29ycy1saW5lLXN0YXJ0IC5hZGQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRhaW5lcjpob3ZlciAuYWRkLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb250YWluZXI6aG92ZXIgLnN1Y2Nlc3NvcnMtbGluZS1zdGFydCB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMTZweCk7XG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDEwcHgpO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuOmhvc3QtY29udGV4dCguY2RrLWRyYWctZHJhZ2dpbmcpIC5tYXQtaWNvbi1idXR0b24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5ub2RlLWNvbm5lY3Rpb24tc2VsZWN0IHtcbiAgaGVpZ2h0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbjo6bmctZGVlcCAubm9kZS1jb25uZWN0aW9uLXNlbGVjdCAubWF0LXNlbGVjdC1hcnJvdy1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Components/canvas-node/canvas-node.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/canvas-node/canvas-node.component.ts ***!
  \*****************************************************************/
/*! exports provided: CanvasNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasNodeComponent", function() { return CanvasNodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../canvas/canvas.component */ "./src/app/Components/canvas/canvas.component.ts");
/* harmony import */ var _Models_CanvasNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Models/CanvasNode */ "./src/app/Models/CanvasNode.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");




var CanvasNodeComponent = /** @class */ (function () {
    function CanvasNodeComponent(elementRef, canvasComponent) {
        this.elementRef = elementRef;
        this.canvasComponent = canvasComponent;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.availableNodes = [];
    }
    CanvasNodeComponent.prototype.ngAfterViewInit = function () {
        if (this.node) {
            console.log(this.elementRef.nativeElement);
            this.elementRef.nativeElement.parentElement.style.transform = "translate3d(" + this.node.X + "px , " + this.node.Y + "px , 0)";
        }
    };
    CanvasNodeComponent.prototype.getAvailableNodes = function () {
        console.log("calling");
        this.availableNodes = this.canvasComponent.getAvailableNodes(this.node);
    };
    CanvasNodeComponent.prototype.connectoToNode = function (connectToNode) {
        this.canvasComponent.connectNodes(this.node, connectToNode);
    };
    CanvasNodeComponent.prototype.openNodeSelec = function (select) {
        this.getAvailableNodes();
        setTimeout(function () {
            select.open();
        });
    };
    CanvasNodeComponent.prototype.changeConnectionSelection = function (event) {
        var _this = this;
        var selectedNodes = event.value;
        // Connect all new connections
        selectedNodes.forEach(function (id) {
            if (!_this.node.Successors.includes(id)) {
                var connectedNode = _this.availableNodes.find(function (x) { return x.Id === id; });
                _this.canvasComponent.connectNodes(_this.node, connectedNode);
            }
        });
        // disconnect all connections not in the current selection but in successors
        this.node.Successors.forEach(function (id) {
            if (!selectedNodes.includes(id)) {
                var disconnectedNode = _this.availableNodes.find(function (x) { return x.Id === id; });
                _this.canvasComponent.disconnectNodes(_this.node, disconnectedNode);
            }
        });
    };
    CanvasNodeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_1__["CanvasComponent"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _Models_CanvasNode__WEBPACK_IMPORTED_MODULE_2__["CanvasNode"])
    ], CanvasNodeComponent.prototype, "node", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
    ], CanvasNodeComponent.prototype, "delete", void 0);
    CanvasNodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-canvas-node',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./canvas-node.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/canvas-node/canvas-node.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./canvas-node.component.scss */ "./src/app/Components/canvas-node/canvas-node.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_1__["CanvasComponent"]])
    ], CanvasNodeComponent);
    return CanvasNodeComponent;
}());



/***/ }),

/***/ "./src/app/Components/canvas/canvas.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/canvas/canvas.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".canvas {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n\n.line-svg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 0;\n}\n\n.node {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jYW52YXMvQzpcXFVzZXJzXFxqYWNvYlxcRG9jdW1lbnRzXFxQcm9qZWt0ZVxcQ3JpdGljYWxQYXRoVG9vbC9zcmNcXGFwcFxcQ29tcG9uZW50c1xcY2FudmFzXFxjYW52YXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5saW5lLXN2ZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLm5vZGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufSIsIi5jYW52YXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5saW5lLXN2ZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLm5vZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/canvas/canvas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/canvas/canvas.component.ts ***!
  \*******************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CanvasComponent = /** @class */ (function () {
    function CanvasComponent() {
    }
    // gets called everytime the nodes input changes
    CanvasComponent.prototype.ngOnChanges = function () {
        if (this.nodes && this.nodes.length > 0) {
            this._setupLines(this.nodes);
        }
    };
    CanvasComponent.prototype.startDraggingNode = function (node, dragEvent) {
        var _this = this;
        console.log(node);
        node.Predeccessors.forEach(function (id) {
            var predeccessor = _this._getNodeById(id);
            _this._destroyLineBeweenNodes(predeccessor, node);
        });
        node.Successors.forEach(function (id) {
            var successor = _this._getNodeById(id);
            _this._destroyLineBeweenNodes(node, successor);
        });
    };
    CanvasComponent.prototype.endDraggingNode = function (node, dragEvent) {
        var _this = this;
        var draggedElement = dragEvent.source.element.nativeElement;
        // gets position relative to viewport
        var positionRectToViewport = draggedElement.getBoundingClientRect();
        // substract the header height to get the position relative to the parent
        node.X = positionRectToViewport.x;
        node.Y = positionRectToViewport.y - 64;
        node.Predeccessors.forEach(function (id) {
            var predeccessor = _this._getNodeById(id);
            _this._createLineBetweenNodes(predeccessor, node);
        });
        node.Successors.forEach(function (id) {
            var successor = _this._getNodeById(id);
            _this._createLineBetweenNodes(node, successor);
        });
    };
    CanvasComponent.prototype.connectNodes = function (fromNode, toNode) {
        fromNode.Successors.push(toNode.Id);
        toNode.Predeccessors.push(fromNode.Id);
        this._createLineBetweenNodes(fromNode, toNode);
    };
    CanvasComponent.prototype.disconnectNodes = function (fromNode, toNode) {
        var fromIndex = toNode.Predeccessors.indexOf(fromNode.Id);
        toNode.Predeccessors.splice(fromIndex, 1);
        var toIndex = fromNode.Successors.indexOf(toNode.Id);
        fromNode.Successors.splice(toIndex, 1);
        this._destroyLineBeweenNodes(fromNode, toNode);
    };
    CanvasComponent.prototype.deleteNode = function (node) {
        var _this = this;
        var nodeIndex = this.nodes.indexOf(node);
        node.Predeccessors.forEach(function (id) {
            var predeccessor = _this._getNodeById(id);
            var indexInPredeccessor = predeccessor.Successors.indexOf(node.Id);
            predeccessor.Successors.splice(indexInPredeccessor, 1);
            _this._destroyLineBeweenNodes(predeccessor, node);
        });
        node.Successors.forEach(function (id) {
            var successor = _this._getNodeById(id);
            var indexInSuccessor = successor.Predeccessors.indexOf(node.Id);
            successor.Predeccessors.splice(indexInSuccessor, 1);
            _this._destroyLineBeweenNodes(node, successor);
        });
        this.nodes.splice(nodeIndex, 1);
    };
    CanvasComponent.prototype._setupLines = function (nodes) {
        var _this = this;
        nodes.forEach(function (node) {
            node.Successors.forEach(function (id) {
                var successor = _this._getNodeById(id);
                _this._createLineBetweenNodes(node, successor);
            });
        });
    };
    CanvasComponent.prototype.getAvailableNodes = function (node) {
        var nodesInPath = this._getNodesInPath(node);
        return this.nodes.filter(function (x) { return !nodesInPath.includes(x); });
    };
    CanvasComponent.prototype._getNodesInPath = function (node) {
        var _this = this;
        var nodesInPath = [node];
        node.Predeccessors.forEach(function (predeccessorId) {
            var predeccessor = _this._getNodeById(predeccessorId);
            nodesInPath = nodesInPath.concat(_this._getNodesInPath(predeccessor));
        });
        return nodesInPath;
    };
    CanvasComponent.prototype._destroyLineBeweenNodes = function (fromNode, toNode) {
        var lineId = fromNode.Id + "_" + toNode.Id;
        var line = document.getElementById(lineId);
        console.log(line);
        if (line) {
            line.remove();
        }
    };
    CanvasComponent.prototype._createLineBetweenNodes = function (fromNode, toNode) {
        var lineId = fromNode.Id + "_" + toNode.Id;
        var color = fromNode.Critical && toNode.Critical ? 'red' : 'rgba(0 ,0 ,0 ,0.5)';
        this._createLine(lineId, fromNode.X, fromNode.Y, toNode.X, toNode.Y, color);
    };
    CanvasComponent.prototype._createLine = function (id, x1, y1, x2, y2, color) {
        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('id', id);
        line.style.strokeWidth = '2px';
        line.style.stroke = color;
        line.setAttribute('x1', (x1 + 200).toString());
        line.setAttribute('y1', (y1 + 42).toString());
        line.setAttribute('x2', x2.toString());
        line.setAttribute('y2', (y2 + 42).toString());
        this.svg.nativeElement.appendChild(line);
    };
    CanvasComponent.prototype._getNodeById = function (id) {
        return this.nodes.find(function (x) { return x.Id === id; });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], CanvasComponent.prototype, "nodes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('svg', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasComponent.prototype, "svg", void 0);
    CanvasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./canvas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/canvas/canvas.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./canvas.component.scss */ "./src/app/Components/canvas/canvas.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/Components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/Components/header/header.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Models/CanvasNode.ts":
/*!**************************************!*\
  !*** ./src/app/Models/CanvasNode.ts ***!
  \**************************************/
/*! exports provided: CanvasNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasNode", function() { return CanvasNode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CanvasNode = /** @class */ (function () {
    function CanvasNode() {
    }
    return CanvasNode;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.add-btn {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqYWNvYlxcRG9jdW1lbnRzXFxQcm9qZWt0ZVxcQ3JpdGljYWxQYXRoVG9vbC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFkZC1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbn0iLCIuYXBwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hZGQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.nodes = [];
    }
    AppComponent.prototype.addNode = function () {
        var newNode = {
            Id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v1"])(),
            Name: null,
            Critical: false,
            Predeccessors: [],
            Successors: [],
            X: 0,
            Y: 0,
            Duration: null
        };
        this.nodes.push(newNode);
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/drag-drop.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/canvas/canvas.component */ "./src/app/Components/canvas/canvas.component.ts");
/* harmony import */ var _Components_canvas_node_canvas_node_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/canvas-node/canvas-node.component */ "./src/app/Components/canvas-node/canvas-node.component.ts");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _Components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_12__["CanvasComponent"],
                _Components_canvas_node_canvas_node_component__WEBPACK_IMPORTED_MODULE_13__["CanvasNodeComponent"],
                _Components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jacob\Documents\Projekte\CriticalPathTool\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map