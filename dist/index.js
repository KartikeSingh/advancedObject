"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_nested_object_1 = __importDefault(require("read-nested-object"));
const edit_nested_object_1 = __importDefault(require("edit-nested-object"));
const is_object_equal_1 = __importDefault(require("is-object-equal"));
class AdvancedObject extends Object {
    constructor(value) {
        super(value);
        Object.entries(value).forEach(v => this[v[0]] = v[1]);
    }
    // Class Based Functions
    /**
     * Check whether two object are equal or not
     * @param ob1 The first object
     * @param ob2 The second object
     * @param options Options for checking equality
     * @returns Whether the two object are equal or not
     */
    static areEqual(ob1, ob2, options) {
        return (0, is_object_equal_1.default)(ob1, ob2, options);
    }
    /**
     * Change some property of any object
     * @param object The object in which you wanna change the property
     * @param key The key which you wanna change
     * @param value The new property
     * @param force Forcefully change the property
     * @returns The new edited object
     */
    static setProperty(object, key, value, force = false) {
        return (0, edit_nested_object_1.default)(object, key, value, force);
    }
    /**
     * Get some property of a object
     * @param object The object frpm which you wanna read the property
     * @param key The key of the property you wanna read
     * @returns The property
     */
    static getProperty(object, key, value, force = false) {
        return (0, read_nested_object_1.default)(object, key);
    }
    /**
     * Get stringifed version of your object
     * @param object The object which's string form you want to get
     * @param replacer The replacer function
     * @param space Extra spaces
     * @returns The stringied version of your object
     */
    static stringForm(object, replacer, space) {
        return JSON.stringify(object, replacer, space);
    }
    // Instance Based Functions
    /**
     * Get some property of the object
     * @param key The key to search for in a object
     * @returns the property you asked for
     */
    get(key) {
        return (0, read_nested_object_1.default)(this, key);
    }
    /**
     * Change property of your object
     * @param key The key which you want to change
     * @param value The value which you want to add
     * @param force Forcefully change the value
     * @returns the same object after changing the value
     */
    set(key, value, force = false) {
        const newThis = (0, edit_nested_object_1.default)(this, key, value, force);
        if (force || !(0, is_object_equal_1.default)(this, newThis))
            Object.entries(newThis).forEach(v => this[v[0]] = v[1]);
        return this;
    }
    /**
     * Check if this object is equal to some other object
     * @param object The other object
     * @param options The options for checking the equality
     * @returns whether the object is equal or not
     */
    isEqual(object, options) {
        return (0, is_object_equal_1.default)(this, object, options);
    }
    /**
     * Add new objects to your object
     * @param objects any number of objects you want to add
     * @returns The new object with merged values
     */
    concat(...objects) {
        Object.assign(this, ...objects);
        return this;
    }
    /**
     * Add new objects to your object
     * @param objects any number of objects you want to add
     * @returns The new object with merged values
     */
    merge(...objects) {
        return this.concat(...objects);
    }
    /**
     * Get array of keys of your object
     * @returns Array of the keys of the object
     */
    keys() {
        return Object.keys(this);
    }
    /**
     * Get array of values of your object
     * @returns Array of the values of the object
     */
    values() {
        return Object.values(this);
    }
    /**
     * Get stringifed version of your object
     * @param replacer The replacer function
     * @param space Extra spaces
     * @returns The stringied version of your object
     */
    toString(replacer, space) {
        return JSON.stringify(this, replacer, space);
    }
}
exports.default = AdvancedObject;
