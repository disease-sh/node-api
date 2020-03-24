var _ = require('lodash');
/*
  Enjoy the new functions I have created! More coming soon if diced or elite makes useful updates
  - Apollo
*/
module.exports = {
    /**
     * @returns {fetch.Promise<Array.<Object>>|undefined}
     */
    all: async function () {
        // Wait why did you .toString() this function?
        const a = await require('node-fetch')(`https://corona.lmao.ninja/all`);
        return await a.json();
    },
    /**
     *
     * @param {?string} country
     * @returns {fetch.Promise<Array.<Object>>|undefined}
     */
    countries: async function (country) {
        // Wait why did you .toString() this function?
        if (!country) {
            const a = await require('node-fetch')('https://corona.lmao.ninja/countries');
            return await a.json();
        } else if (country) {
            try {
                const a = await require('node-fetch')(`https://corona.lmao.ninja/countries/${country}`);
                return await a.json();
            } catch (e) {
                return {error: 'Country not found'}
            }
        }
    },
    /**
     *
     * @param {?string} state
     * @returns {fetch.Promise<Array.<Object>>|undefined}
     */
    states: async function (state) {
        const a = await require('node-fetch')('https://corona.lmao.ninja/states');
        let data = await a.json();
        return state ? data.find(el => el.state === state) : data;
    },
    /**
     *
     * @param {?Object} filter f.e. {country : "China"}
     * @returns {fetch.Promise<Array.<Object>>|undefined}
     */
    jhucsse: async function (filter) {
        const a = await require('node-fetch')('https://corona.lmao.ninja/jhucsse');
        let data = await a.json();
        if (!filter) return data;

        filter = _.pick(filter, _(data).map(_.keys).thru(_.spread(_.union)).value());
        return _.filter(data, filter);
    }
}
