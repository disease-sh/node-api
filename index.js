const fetch = require('@aero/centra'),
      settings = { baseUrl: 'https://covidapi.xyz' },
      fetchJson = (path) => fetch(`${settings.baseUrl}/${path}`).json()
module.exports = {
  settings : (opts) => ['https://disease.sh', 'https://api.caw.sh', 'https://corona.lmao.ninja', 'https://covidapi.xyz'].includes(opts.baseUrl) && (settings.baseUrl = opts.baseUrl),
  all : () => fetchJson('v2/all'),
  countries : (opts = {}) => {
    let path = 'v2/countries'
    if(opts.country) 
      path += `/${Array.isArray(opts.country) ? (opts.country.join('|')) : opts.country}`
    if(opts.sort || typeof(opts.strict) === 'boolean') {
      path += '?'
      if(opts.sort) 
        path += `sort=${opts.sort}`
      if(typeof(opts.strict) === 'boolean') 
        path += (opts.sort?'&':'')+'strict='+opts.strict
    }
    return fetchJson(path)
  },
  continents: (opts = {}) => {
    let path = 'v2/continents'
    if(opts.continent) 
      path += `/${opts.continent}`
    if(opts.sort || typeof(opts.strict) === 'boolean') {
      path += '?'
      if(opts.sort) 
        path += `sort=${opts.sort}`
      if(typeof(opts.strict) === 'boolean') 
        path += (opts.sort?'&':'')+'strict='+opts.strict
    }
    return fetchJson(path)
  },
  states: (opts = {}) => {
    let path = 'v2/states'
    if(opts.state) 
      path += `/${Array.isArray(opts.state) ? (opts.state.join('|')) : opts.state}`
    if(opts.sort || typeof(opts.strict) === 'boolean') {
      path += '?'
      if(opts.sort) 
        path += `sort=${opts.sort}`
      if(typeof(opts.strict) === 'boolean') 
        path += (opts.sort?'&':'')+'strict='+opts.strict
    }
    return fetchJson(path)
  },
  yesterday: {
    all: () => fetchJson('v2/all?yesterday=true'),
    countries: (opts = {}) => {
      let path = 'v2/countries'
      if(opts.country) 
        path += `/${Array.isArray(opts.country) ? (opts.country.join('|')) : opts.country}`
      path += '?yesterday=true'
      if(opts.sort || typeof(opts.strict) === 'boolean') {
        if(opts.sort) 
          path += `&sort=${opts.sort}`
        if(typeof(opts.strict) === 'boolean') 
          path += '&strict='+opts.strict
      }
      return fetchJson(path)
    },
    continents: (opts = {}) => {
      let path = 'v2/continents'
      if(opts.continent) 
        path += `/${opts.continent}`
      path += '?yesterday=true'
      if(opts.sort || typeof(opts.strict) === 'boolean') {
        if(opts.sort) {
          path += `&sort=${opts.sort}`
        }
        if(typeof(opts.strict) === 'boolean') {
          path += '&strict='+opts.strict
        }
      }
      return fetchJson(path)
    },
    states: (opts = {}) => {
      let path = 'v2/states'
    if(opts.state) 
      path += `/${Array.isArray(opts.state) ? (opts.state.join('|')) : opts.state}`
    if(opts.sort || typeof(opts.strict) === 'boolean') {
      path += '?yesterday=true&'
      if(opts.sort)
        path += `sort=${opts.sort}`
      if(typeof(opts.strict) === 'boolean')
        path += (opts.sort?'&':'')+'strict='+opts.strict
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
        if(opts.province) 
          path += `/${Array.isArray(opts.province) ? (opts.province.join('|')) : opts.province}`
        if(opts.days) 
          path += `?lastdays=${opts.days}`
      }
      return fetchJson(path)
    }
  },
  nyt: {
    usa: () => fetchJson('v2/nyt/usa'),
    states: (opts = {}) => {
      let path = 'v2/nyt/states'
      if(opts.state) 
        path += `/${opts.state}`
      return fetchJson(path)
    },
    counties: (opts = {}) => {
      let path = 'v2/nyt/counties'
      if(opts.county) 
        path += `/${opts.county}`
      return fetchJson(path)
    }
  },
  apple: {
    countries: () => fetchJson('v2/apple/countries'),
    subregions: (country) => fetchJson(`v2/apple/countries/${country}`),
    mobilityData: (opts = {}) => {
      let path = 'v2/apple/countries'
      if(opts.country) {
        path += `/${opts.country}`
        if(opts.subregion) 
          path += `/${Array.isArray(opts.subregion) ? (opts.subregion.join('|')) : opts.subregion}`
      }
      return fetchJson(path)
    }
  }
}