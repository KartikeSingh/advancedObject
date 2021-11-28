import { isEqualOptions } from './interfaces';

import reader from 'read-nested-object';
import setter from 'edit-nested-object';
//@ts-ignore
import areEqual from '../../../packages/isEqual';

export default class AdvancedObject extends Object {
    [key: string | symbol]: any;

    constructor(value?: any) {
        super(value);

        Object.entries(value).forEach(v => this[v[0]] = v[1]);
    }

    get<returnType>(key: string | symbol): returnType | undefined {
        return reader<returnType>(this, key);
    }

    set(key: string | symbol, value: any, force = false): this {
        const newThis = setter(this, key, value, force);

        if (force || !areEqual(this, newThis)) Object.entries(newThis).forEach(v => this[v[0]] = v[1]);

        return this;
    }

    isEqual(object: object, options?: isEqualOptions): boolean {
        return areEqual(this, object, options)
    }

    concat(...objects: object[]): this {
        Object.assign(this, ...objects)

        return this;
    }

    merge(...objects: object[]): this {
        return this.concat(...objects);
    }

    keys(): string[] {
        return Object.keys(this);
    }

    values<returnType>(): returnType[] {
        return Object.values<returnType>(this);
    }

    toString(replacer?: (this: any, key: string, value: any) => any | null, space?: string | number): string {
        return JSON.stringify(this, replacer, space);
    }
}

const ob = new AdvancedObject({ n: "sd", f: Object.freeze({ ff: 23 }) });


ob.concat