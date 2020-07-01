const fetch = require('@aero/centra'),
      curSettings = { baseUrl: 'https://disease.sh' },
      fetchJson = (path) => fetch(`${curSettings.baseUrl}/${path}`).json(),
      yesterday = {}, twoDaysAgo = {}, jhucsse = {}, historical = {}, nyt = {}, apple = {}

const createPath = (opts, path) => {
  if(opts.sort || String(opts.strict) !== 'undefined' || opts.yesterday || String(opts.allowNull) !== 'undefined') {
    path += '?'
    if(opts.sort) 
      path += `sort=${opts.sort}`
    if(opts.yesterday)
      path += (opts.sort ?'&':'')+'yesterday='+opts.yesterday
    if(opts.twoDaysAgo)
      path += (opts.sort || opts.yesterday ?'&':'')+'twoDaysAgo='+opts.twoDaysAgo
    if(String(opts.allowNull) !== 'undefined')
      path += (opts.sort || opts.yesterday || opts.twoDaysAgo ?'&':'')+'allowNull='+opts.yesterday
    if(String(opts.strict) !== 'undefined') 
      path += (opts.sort || opts.yesterday || opts.twoDaysAgo || String(opts.allowNull) !== 'undefined' ?'&':'')+'strict='+opts.strict
  }
  return path
}
const _all = (opts) => fetchJson(createPath(opts, `v3/covid-19/all`))

/**
 * Specify settings to the wrapper
 * @param {object} opts         object holding the options
 * @param {string} opts.baseUrl url to use for requests
 */
const settings = (opts = {}) => (curSettings.baseUrl = opts.baseUrl)

/**
 * Retrieve a summary of global data
 * @param {object} opts             object holding the options for that request
 * @param {boolean} opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @returns {object}                summary object
 */
const all = (opts = {}) => _all({...opts, yesterday: false})

/**
 * Retrieve country specific data
 * @param {object}               opts            object holding the options for that request
 * @param {string|string[]}      opts.country    country name/s to be queried      
 * @param {boolean}              opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @param {string}               opts.sort       property name which will be used for sorting     
 * @param {boolean}              opts.strict     whether to use strict name checking or not
 * @returns {object|object[]}                    country specific data
 */
const countries = (opts = {}) => {
  let path = 'v3/covid-19/countries'
  if(opts.country) 
    path += `/${Array.isArray(opts.country) ? (opts.country.join('|')) : opts.country}`
  return fetchJson(createPath(opts, path))
}

/**
 * Retrieve continent specific data
 * @param {object}               opts            object holding the options for that request
 * @param {string|string[]}      opts.continent  continent name/s to be queried      
 * @param {boolean}              opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @param {string}               opts.sort       property name which will be used for sorting     
 * @param {boolean}              opts.strict     whether to use strict name checking or not
 * @returns {object|object[]}                    continent specific data
 */
const continents = (opts = {}) => {
  let path = 'v3/covid-19/continents'
  if(opts.continent) 
    path += `/${opts.continent}`
  return fetchJson(createPath(opts, path))
}

/**
 * Retrieve state specific data
 * @param {object}               opts            object holding the options for that request
 * @param {string|string[]}      opts.state      state name/s to be queried      
 * @param {boolean}              opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @param {string}               opts.sort       property name which will be used for sorting     
 * @param {boolean}              opts.strict     whether to use strict name checking or not
 * @returns {object|object[]}                    state specific data
 */
const states = (opts = {}) => {
  let path = 'v3/covid-19/states'
  if(opts.state) 
    path += `/${Array.isArray(opts.state) ? (opts.state.join('|')) : opts.state}`
  return fetchJson(createPath(opts, path))
}

/**
 * Retrieve a summary of yesterdays global data
 * @param {object} opts             object holding the options for that request
 * @param {boolean} opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @returns {object}                summary object
 */
yesterday.all = (opts = {}) => _all({...opts, yesterday: true})

/**
 * Retrieve yesterdays country specific data
 * @param {object}               opts            object holding the options for that request
 * @param {string|string[]}      opts.country    country name/s to be queried      
 * @param {boolean}              opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @param {string}               opts.sort       property name which will be used for sorting     
 * @param {boolean}              opts.strict     whether to use strict name checking or not
 * @returns {object|object[]}                    country specific data
 */
yesterday.countries = (opts = {}) => countries({...opts, yesterday: true})

/**
 * Retrieve yesterdays continent specific data
 * @param {object}               opts           object holding the options for that request
 * @param {string|string[]}      opts.continent continent name/s to be queried      
 * @param {string}               opts.sort      property name which will be used for sorting     
 * @param {boolean}              opts.strict    whether to use strict name checking or not
 * @returns {object|object[]}                   continent specific data
 */
yesterday.continents = (opts = {}) => continents({...opts, yesterday: true})

/**
 * Retrieve yesterdays state specific data
 * @param {object}               opts            object holding the options for that request
 * @param {string|string[]}      opts.state      state name/s to be queried      
 * @param {boolean}              opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @param {string}               opts.sort       property name which will be used for sorting     
 * @param {boolean}              opts.strict     whether to use strict name checking or not
 * @returns {object|object[]}                    state specific data
 */
yesterday.states = (opts = {}) => states({...opts, yesterday: true})

/**
 * Retrieve a summary of global data from two days ago
 * @param {object} opts             object holding the options for that request
 * @param {boolean} opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @returns {object}                summary object
 */
twoDaysAgo.all = (opts = {}) => _all({...opts, twoDaysAgo: true})

/**
 * Retrieve country specific data from two days ago
 * @param {object}               opts            object holding the options for that request
 * @param {string|string[]}      opts.country    country name/s to be queried      
 * @param {boolean}              opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @param {string}               opts.sort       property name which will be used for sorting     
 * @param {boolean}              opts.strict     whether to use strict name checking or not
 * @returns {object|object[]}                    country specific data
 */
twoDaysAgo.countries = (opts = {}) => countries({...opts, twoDaysAgo: true})

/**
 * Retrieve continent specific data from two days ago
 * @param {object}               opts           object holding the options for that request
 * @param {string|string[]}      opts.continent continent name/s to be queried      
 * @param {string}               opts.sort      property name which will be used for sorting     
 * @param {boolean}              opts.strict    whether to use strict name checking or not
 * @returns {object|object[]}                   continent specific data
 */
twoDaysAgo.continents = (opts = {}) => continents({...opts, twoDaysAgo: true})

/**
 * Retrieve an array of infected countries
 * @returns {object[]} array of infected countries
 */
jhucsse.all = () => fetchJson('v3/covid-19/jhucsse')

/**
 * Retrieve county specific data
 * @param {object}           opts        object holding the options for that request
 * @param {string|string[]}  opts.county county name/s to be queried      
 * @returns {object|object[]}            county specific data
 */
jhucsse.counties = (opts = {}) => {
  let path = 'v3/covid-19/jhucsse/counties'
  if(opts.county) 
    path += `/${Array.isArray(opts.county) ? (opts.county.join('|')) : opts.county}`
  return fetchJson(path)
}

/**
 * Retrieve an array of the global timeline
 * @param {object}        opts        object holding the options for that request
 * @param {string|number} opts.days   the number of days to get data for, or 'all'
 * @returns {object[]}           timeline data
 */
historical.all = (opts = {}) => fetchJson(`v3/covid-19/historical/all${opts.days ? `?lastdays=${opts.days}`:''}`)

/**
 * Retrieve an array of the country specific timelines
 * @param {object}               opts           object holding the options for that request
 * @param {string|string[]} opts.country   country name/s to be queried
 * @param {string|string[]} opts.province  province name/s to be queried (must have 1 country)
 * @param {string|number}        opts.days      the number of days to get data for, or 'all'
 * @returns {object[]}                     timeline data
 */
historical.countries = (opts = {}) => {
  let path = 'v3/covid-19/historical'
  if(opts.country) {
    path += `/${Array.isArray(opts.country) ? (opts.country.join('|')) : opts.country}`
    if(opts.province) 
      path += `/${Array.isArray(opts.province) ? (opts.province.join('|')) : opts.province}`
    if(opts.days) 
      path += `?lastdays=${opts.days}`
  }
  return fetchJson(path)
}

/**
 * Retrieve a timeline of USA data
 * @returns {object[]} USA timeline data
 */
nyt.usa = () => fetchJson('v3/covid-19/nyt/usa')

/**
 * Retrieve a timeline of US state specific data
 * @param {object} opts            object holding the options for that request
 * @param {string} opts.state      state name to be queried 
 * @returns {object|object[]} state specific timeline data
 */
nyt.states = (opts = {}) => {
  let path = 'v3/covid-19/nyt/states'
  if(opts.state) 
    path += `/${opts.state}`
  return fetchJson(path)
}

/**
 * Retrieve a timeline of US county specific data
 * @param {object} opts            object holding the options for that request
 * @param {string} opts.county     county name to be queried 
 * @returns {object|object[]} county specific timeline data
 */
nyt.counties = (opts = {}) => {
  let path = 'v3/covid-19/nyt/counties'
  if(opts.county) 
    path += `/${opts.county}`
  return fetchJson(path)
}

/**
 * Retrieve an array of available countries
 * @returns {string[]} country names
 */
apple.countries = () => fetchJson('v3/covid-19/apple/countries')

/**
 * Retrieve a list of available subregions for a country
 * @param {string} country country name to be queried
 * @returns {object}       object containing country name and list of subregions
 */
apple.subregions = (country) => fetchJson(`v3/covid-19/apple/countries/${country}`)

/**
 * Retrieve mobility data for a specific country and subregion
 * @param {object}               opts           object holding the options for that request
 * @param {string}               opts.country   country name to be queried      
 * @param {string|string[]}      opts.subregion subregion name/s to be queried      
 * @returns {object|object[]}                   mobility data
 */
apple.mobilityData = (opts = {}) => {
  let path = 'v3/covid-19/apple/countries'
  if(opts.country) {
    path += `/${opts.country}`
    if(opts.subregion) 
      path += `/${Array.isArray(opts.subregion) ? (opts.subregion.join('|')) : opts.subregion}`
  }
  return fetchJson(path)
}

/**
 * Retrieve official government data
 * @param {string}  country         country name to be queried (empty to get an array of names)
 * @param {boolean} opts.allowNull  whether to allow null values (true) or automatically transform them to 0 (false)
 * @returns {object}                official government data
 */
const gov = (country) => fetchJson(`v3/covid-19/gov/${country ? country : ''}`)

module.exports = {
  settings,
  all,
  countries,
  continents,
  states,
  yesterday,
  twoDaysAgo,
  jhucsse,
  historical,
  nyt,
  apple,
  gov
}