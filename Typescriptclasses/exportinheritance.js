"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Single = void 0;
var Single = /** @class */ (function () {
    function Single(name) {
        this.x = 20;
        console.log("This is Parent = " + name);
    }
    return Single;
}());
exports.Single = Single;
var InheritanceDemo1 = /** @class */ (function (_super) {
    __extends(InheritanceDemo1, _super);
    function InheritanceDemo1() {
        return _super.call(this, 'rajesh') || this;
    }
    InheritanceDemo1.prototype.display = function () {
        console.log(this.x);
    };
    return InheritanceDemo1;
}(Single));
var obj = new InheritanceDemo1();
console.log(obj.x);
obj.display();
