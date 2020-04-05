const fetch = require('node-fetch'),
      fetchJson = (path) => fetch(`${baseUrl}/${path}`).then(r => r.json()),
      baseUrl = 'https://corona.lmao.ninja'
module.exports = {
  all : () => fetchJson('all'),
  countries : (opts = {}) => {
    return fetchJson(`countries${opts.country?('/'+opts.country):''}${opts.sort?('?sort='+opts.sort):''}`)
  },
  states: () => fetchJson('states'),
  yesterday: () => fetchJson('yesterday'),
  jhucsse: {
    all: () => fetchJson('v2/jhucsse'),
    counties: (county) => fetchJson(`v2/jhucsse/counties${(county ? `/${county}` : '')}`)
  },
  historical: {
    all: () => fetchJson('v2/historical/all'),
    countries: (opts = {}) => {
      return fetchJson(`v2/historical${opts.country?('/'+opts.country+(opts.province?('/'+opts.province):'')):''}`)
    }
  }
}