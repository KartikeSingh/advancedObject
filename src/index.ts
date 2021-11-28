import { isEqualOptions } from './interfaces';

import reader from 'read-nested-object';
import setter from 'edit-nested-object';
import areEqual from 'is-object-equal';

export default class AdvancedObject extends Object {
    [key: string | symbol]: any;

    constructor(value?: any) {
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
    static areEqual(ob1: any, ob2: any, options: isEqualOptions): boolean {
        return areEqual(ob1, ob2, options)
    }

    /**
     * Change some property of any object
     * @param object The object in which you wanna change the property
     * @param key The key which you wanna change
     * @param value The new property
     * @param force Forcefully change the property
     * @returns The new edited object
     */
    static setProperty(object: any, key: string | symbol, value: any, force = false) {
        return setter(object, key, value, force)
    }

    /**
     * Get some property of a object
     * @param object The object frpm which you wanna read the property
     * @param key The key of the property you wanna read
     * @returns The property
     */
    static getProperty(object: any, key: string | symbol, value: any, force = false) {
        return reader(object, key)
    }

    /**
     * Get stringifed version of your object
     * @param object The object which's string form you want to get
     * @param replacer The replacer function
     * @param space Extra spaces
     * @returns The stringied version of your object
     */
    static stringForm(object: any, replacer?: (this: any, key: string, value: any) => any | null, space?: string | number): string {
        return JSON.stringify(object, replacer, space);
    }

    // Instance Based Functions

    /**
     * Get some property of the object
     * @param key The key to search for in a object
     * @returns the property you asked for
     */
    get<returnType>(key: string | symbol): returnType | undefined {
        return reader<returnType>(this, key);
    }

    /**
     * Change property of your object
     * @param key The key which you want to change
     * @param value The value which you want to add
     * @param force Forcefully change the value
     * @returns the same object after changing the value
     */
    set(key: string | symbol, value: any, force = false): this {
        const newThis = setter(this, key, value, force);

        if (force || !areEqual(this, newThis)) Object.entries(newThis).forEach(v => this[v[0]] = v[1]);

        return this;
    }

    /**
     * Check if this object is equal to some other object
     * @param object The other object
     * @param options The options for checking the equality
     * @returns whether the object is equal or not
     */
    isEqual(object: object, options?: isEqualOptions): boolean {
        return areEqual(this, object, options)
    }

    /**
     * Add new objects to your object
     * @param objects any number of objects you want to add
     * @returns The new object with merged values
     */
    concat(...objects: object[]): this {
        Object.assign(this, ...objects)

        return this;
    }

    /**
     * Add new objects to your object
     * @param objects any number of objects you want to add
     * @returns The new object with merged values
     */
    merge(...objects: object[]): this {
        return this.concat(...objects);
    }

    /**
     * Get array of keys of your object
     * @returns Array of the keys of the object
     */
    keys(): string[] {
        return Object.keys(this);
    }

    /**
     * Get array of values of your object
     * @returns Array of the values of the object
     */
    values<returnType>(): returnType[] {
        return Object.values<returnType>(this);
    }

    /**
     * Get stringifed version of your object
     * @param replacer The replacer function
     * @param space Extra spaces
     * @returns The stringied version of your object
     */
    toString(replacer?: (this: any, key: string, value: any) => any | null, space?: string | number): string {
        return JSON.stringify(this, replacer, space);
    }
}