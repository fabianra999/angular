"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    // private, public, protected
    function Animal(_nombre) {
        this._nombre = _nombre;
    }
    Object.defineProperty(Animal.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            if (nombre.length <= 2) {
                console.log("el nombre es muy corto " + nombre.length);
                return;
            }
            else {
                this._nombre = nombre;
            }
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.desplazar = function () {
    };
    return Animal;
}());
exports.Animal = Animal;
