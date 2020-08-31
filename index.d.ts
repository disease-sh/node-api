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
 * @param {object} opts             object holding the options for that request
 * @param {boolean} opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @returns {object}                summary object
 */
export function all(opts?: {
    allowNull: boolean;
}): Promise<object>;
/**
 * Retrieve country specific data
 * @param {object}               opts            object holding the options for that request
 * @param {string|string[]}      opts.country    country name/s to be queried
 * @param {boolean}              opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @param {string}               opts.sort       property name which will be used for sorting
 * @param {boolean}              opts.strict     whether to use strict name checking or not
 * @returns {object|object[]}                    country specific data
 */
export function countries(opts?: {
    country: string | string[];
    allowNull: boolean;
    sort: string;
    strict: boolean;
}): Promise<object> | Promise<object[]>;
/**
 * Retrieve continent specific data
 * @param {object}               opts            object holding the options for that request
 * @param {string|string[]}      opts.continent  continent name/s to be queried
 * @param {boolean}              opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @param {string}               opts.sort       property name which will be used for sorting
 * @param {boolean}              opts.strict     whether to use strict name checking or not
 * @returns {object|object[]}                    continent specific data
 */
export function continents(opts?: {
    continent: string | string[];
    allowNull: boolean;
    sort: string;
    strict: boolean;
}): Promise<object> | Promise<object[]>;
/**
 * Retrieve state specific data
 * @param {object}               opts            object holding the options for that request
 * @param {string|string[]}      opts.state      state name/s to be queried
 * @param {boolean}              opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @param {string}               opts.sort       property name which will be used for sorting
 * @param {boolean}              opts.strict     whether to use strict name checking or not
 * @returns {object|object[]}                    state specific data
 */
export function states(opts?: {
    state: string | string[];
    allowNull: boolean;
    sort: string;
    strict: boolean;
}): Promise<object> | Promise<object[]>;
export namespace yesterday {
    export function all(opts?: {
        allowNull: boolean;
    }): Promise<object>;
    export function countries(opts?: {
        country: string | string[];
        allowNull: boolean;
        sort: string;
        strict: boolean;
    }): Promise<object> | Promise<object[]>;
    export function continents(opts?: {
        continent: string | string[];
        sort: string;
        strict: boolean;
    }): Promise<object> | Promise<object[]>;
    export function states(opts?: {
        state: string | string[];
        allowNull: boolean;
        sort: string;
        strict: boolean;
    }): Promise<object> | Promise<object[]>;
}
export namespace jhucsse {
    export function all(): Promise<object[]>;
    export function counties(opts?: {
        county: string | string[];
    }): Promise<object> | Promise<object[]>;
}
export namespace historical {
    export function all(opts?: {
        days: string | number;
    }): Promise<object[]>;
    export function countries(opts?: {
        country: string | string[];
        province: string | string[];
        days: string | number;
    }): Promise<object[]>;
}
export namespace nyt {
    export function usa(): Promise<object[]>;
    export function states(opts?: {
        state: string;
    }): Promise<object> | Promise<object[]>;
    export function counties(opts?: {
        county: string;
    }): Promise<object> | Promise<object[]>;
}
export namespace apple {
    export function countries(): Promise<string[]>;
    export function subregions(country: string): Promise<object>;
    export function mobilityData(opts?: {
        country: string;
        subregion: string | string[];
    }): Promise<object> | Promise<object[]>;
}
/**
 * Retrieve official government data
 * @param {string}  country         country name to be queried (empty to get an array of names)
 * @param {boolean} opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @returns {object}                official government data
 */
export function gov(country: string): Promise<object>;
