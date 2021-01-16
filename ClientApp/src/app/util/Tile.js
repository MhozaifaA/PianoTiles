"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = exports.id = void 0;
exports.id = 0;
var Tile = /** @class */ (function () {
    function Tile(column) {
        var _this = this;
        this.column = "";
        this.top = -168;
        this.isCross = false;
        this.setCross = function () { return _this.isCross = true; };
        this.getCross = function () { return _this.isCross; };
        this.row = ++exports.id;
        this.column = column;
    }
    Tile.prototype.rest_id = function () {
        exports.id = 0;
    };
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=Tile.js.map