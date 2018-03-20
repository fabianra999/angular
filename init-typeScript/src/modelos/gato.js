"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animales_1 = require("./animales");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, raza) {
        var _this = _super.call(this, nombre) || this;
        _this.raza = raza;
        return _this;
    }
    Gato.prototype.desplazar = function () {
        console.log(this._nombre + " camina sigiloso");
    };
    Gato.prototype.ronronea = function () {
        console.log(this._nombre + " Esta ronroneando");
    };
    return Gato;
}(animales_1.Animal));
exports.Gato = Gato;
