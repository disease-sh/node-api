const fetch = require('node-fetch'),
      fetchJson = (path) => fetch(`${baseUrl}/${path}`).then(r => r.json()),
      baseUrl = 'https://corona.lmao.ninja'
module.exports = {
  all : () => fetchJson('v2/all'),
  countries : (opts = {}) => {
    let path = 'v2/countries'
    if(opts.country) 
      path += `/${Array.isArray(opts.country) ? (opts.country.join('|')) : opts.country}`
    if(opts.sort || opts.strict) {
      path += '?'
      if(opts.sort) {
        path += `sort=${opts.sort}`
      }
      if(opts.strict) {
        path += '&strict=true'
      }
    }
    return fetchJson(path)
  },
  states: (opts = {}) => {
    let path = 'states'
    if(opts.state) 
      path += `/${Array.isArray(opts.state) ? (opts.state.join('|')) : opts.state}`
    if(opts.sort || opts.strict) {
      path += '?'
      if(opts.sort) {
        path += `sort=${opts.sort}`
      }
      if(opts.strict) {
        path += 'strict=true'
      }
    }
    return fetchJson(path)
  },
  yesterday: {
    all: () => fetchJson('v2/all?yesterday=true'),
    countries: (opts = {}) => {
      let path = 'v2/countries'
      if(opts.country) 
        path += `/${Array.isArray(opts.country) ? (opts.country.join('|')) : opts.country}`
      if(opts.sort || opts.strict) {
        path += '?yesterday=true&'
        if(opts.sort) {
          path += `sort=${opts.sort}`
        }
        if(opts.strict) {
          path += '&strict=true'
        }
      }
      return fetchJson(path)
    }
  },
  jhucsse: {
    all: () => fetchJson('v2/jhucsse'),
    counties: (opts = {}) => {
      let path = 'v2/jhucsse/counties'
      if(opts.county) 
        path += `/${Array.isArray(opts.county) ? (opts.county.join('|')) : opts.county}`
      return fetchJson(path)
    }
  },
  historical: {
    all: () => fetchJson('v2/historical/all'),
    countries: (opts = {}) => {
      let path = 'v2/historical'
      if(opts.country) {
        path += `/${Array.isArray(opts.country) ? (opts.country.join('|')) : opts.country}`
        if(opts.province) {
          path += `/${Array.isArray(opts.province) ? (opts.province.join('|')) : opts.province}`
        }
        if(opts.days) {
          path += `?lastdays=${opts.days}`
        }
      }
      return fetchJson(path)
    }
  }
}