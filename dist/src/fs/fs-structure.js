'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var Path = require('path');
var _a = require('./fs-basic'), appendFile = _a.appendFile, createPath = _a.createPath;
var FOLDER = 'FOLDER';
var FILE = 'FILE';
/**
 * @typedef {Object.<string, structureType | string>} structureType
 */
/**
 * Return type of item (FOLDER, FILE)
 *
 * @param {structureType | string} item - item to check
 * @returns {string}
 */
var getType = function (item) {
    if (typeof item === 'string')
        return FILE;
    return FOLDER;
};
/**
 * Create folders and files
 *
 * @async
 * @param {string} path - path to root directory
 * @param {structureType} structure - structure to create
 * @returns {Promise<void>}
 */
var createFsStructure = function (path, structure) { return __awaiter(void 0, void 0, void 0, function () {
    var createFc, _a, _b, _i, item, type;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, createPath(path)];
            case 1:
                _d.sent();
                createFc = (_c = {},
                    _c[FOLDER] = createFsStructure,
                    _c[FILE] = appendFile,
                    _c);
                _a = [];
                for (_b in structure)
                    _a.push(_b);
                _i = 0;
                _d.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 5];
                item = _a[_i];
                type = getType(structure[item]);
                return [4 /*yield*/, createFc[type](Path.join(path, item), structure[item])];
            case 3:
                _d.sent();
                _d.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); };
module.exports = { createFsStructure: createFsStructure };
//# sourceMappingURL=fs-structure.js.map