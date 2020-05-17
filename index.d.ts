/**
 * Specify settings to the wrapper
 * @param {object} opts         object holding the options
 * @param {string} opts.baseUrl url to use for requests
 */
export function settings(opts?: {
    baseUrl: string;
}): string | false;
/**
 * Retrieve a summary of global data
 * @returns {object} summary object
 */
export function all(): object;
/**
 * Retrieve country specific data
 * @param {object}               opts         object holding the options for that request
 * @param {string|Array<string>} opts.country country name/s to be queried
 * @param {string}               opts.sort    property name which will be used for sorting
 * @param {boolean}              opts.strict  whether to use strict name checking or not
 * @returns {object|Array<object>}            country specific data
 */
export function countries(opts?: {
    country: string | Array<string>;
    sort: string;
    strict: boolean;
}): object | Array<object>;
/**
 * Retrieve continent specific data
 * @param {object}               opts           object holding the options for that request
 * @param {string|Array<string>} opts.continent continent name/s to be queried
 * @param {string}               opts.sort      property name which will be used for sorting
 * @param {boolean}              opts.strict    whether to use strict name checking or not
 * @returns {object|Array<object>}              continent specific data
 */
export function continents(opts?: {
    continent: string | Array<string>;
    sort: string;
    strict: boolean;
}): object | Array<object>;
/**
 * Retrieve state specific data
 * @param {object}               opts           object holding the options for that request
 * @param {string|Array<string>} opts.state     state name/s to be queried
 * @param {string}               opts.sort      property name which will be used for sorting
 * @param {boolean}              opts.strict    whether to use strict name checking or not
 * @returns {object|Array<object>}              state specific data
 */
export function states(opts?: {
    state: string | Array<string>;
    sort: string;
    strict: boolean;
}): object | Array<object>;
export namespace yesterday {
    export function all(): object;
    export function countries(opts?: {
        country: string | string[];
        sort: string;
        strict: boolean;
    }): object | object[];
    export function continents(opts?: {
        continent: string | string[];
        sort: string;
        strict: boolean;
    }): object | object[];
    export function states(opts?: {
        state: string | string[];
        sort: string;
        strict: boolean;
    }): object | object[];
}
export namespace jhucsse {
    export function all(): object[];
    export function counties(opts?: {
        county: string | string[];
    }): object | object[];
}
export namespace historical {
    export function all(opts?: {
        days: string | number;
    }): object[];
    export function countries(opts?: {
        country: string | string[];
        province: string | string[];
        days: string | number;
    }): object[];
}
export namespace nyt {
    export function usa(): object[];
    export function states(opts?: {
        state: string;
    }): object | object[];
    export function counties(opts?: {
        county: string;
    }): object | object[];
}
export namespace apple {
    export function countries(): string[];
    export function subregions(country: string): object;
    export function mobilityData(opts?: {
        country: string;
        subregion: string | string[];
    }): object | object[];
}
/**
 * Retrieve official government data
 * @param {string}  country country name to be queried (empty to get an array of names)
 * @returns {object}        official government data
 */
export function gov(country: string): object;
