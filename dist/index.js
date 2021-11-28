"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_nested_object_1 = __importDefault(require("read-nested-object"));
const edit_nested_object_1 = __importDefault(require("edit-nested-object"));
//@ts-ignore
const isEqual_1 = __importDefault(require("../../../packages/isEqual"));
class AdvancedObject extends Object {
    constructor(value) {
        super(value);
        Object.entries(value).forEach(v => this[v[0]] = v[1]);
    }
    get(key) {
        return (0, read_nested_object_1.default)(this, key);
    }
    set(key, value, force = false) {
        const newThis = (0, edit_nested_object_1.default)(this, key, value, force);
        if (force || !(0, isEqual_1.default)(this, newThis))
            Object.entries(newThis).forEach(v => this[v[0]] = v[1]);
        return this;
    }
    isEqual(object, options) {
        return (0, isEqual_1.default)(this, object, options);
    }
    concat(...objects) {
        Object.assign(this, ...objects);
        return this;
    }
    merge(...objects) {
        return this.concat(...objects);
    }
    keys() {
        return Object.keys(this);
    }
    values() {
        return Object.values(this);
    }
    toString(replacer, space) {
        return JSON.stringify(this, replacer, space);
    }
}
exports.default = AdvancedObject;
const ob = new AdvancedObject({ n: "sd", f: Object.freeze({ ff: 23 }) });
ob.concat;
