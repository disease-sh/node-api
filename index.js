const fetch = require('node-fetch'),
      fetchJson = (path) => fetch(`${baseUrl}/${path}`).then(r => r.json()),
      baseUrl = 'https://corona.lmao.ninja'
module.exports = {
  all : () => fetchJson('all'),
  countries : (opts = {}) => {
    return fetchJson(`countries${opts.country?(`/${Array.isArray(opts.country)?(opts.country.join('|')):opts.country}`):''}${opts.sort?(`?sort=${opts.sort}`):''}`)
  },
  states: (opts = {}) => {
    return fetchJson(`states${opts.state?(`/${Array.isArray(opts.state)?(opts.state.join('|')):opts.state}`):''}${opts.sort?('?sort='+opts.sort):''}`)
  },
  yesterday: {
    all: () => fetchJson('yesterday/all'),
    countries: (opts = {}) => {
      return fetchJson(`yesterday${opts.country?(`/${Array.isArray(opts.country)?(opts.country.join('|')):opts.country}`):''}${opts.sort?('?sort='+opts.sort):''}`)
    }
  },
  jhucsse: {
    all: () => fetchJson('v2/jhucsse'),
    counties: (county) => fetchJson(`v2/jhucsse/counties${(county ? `/${Array.isArray(county)?(county.join('|')):county}`:'')}`)
  },
  historical: {
    all: () => fetchJson('v2/historical/all'),
    countries: (opts = {}) => {
      return fetchJson(`v2/historical${opts.country?('/'+opts.country+(opts.province?(`/${Array.isArray(opts.province)?(opts.province.join('|')):opts.province}`):'')):''}${opts.days? `?lastdays=${opts.days}`:''}`)
    }
  }
}