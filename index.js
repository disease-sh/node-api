const fetch = require('@aero/centra'),
      curSettings = { baseUrl: 'https://disease.sh' },
      fetchJson = (path) => fetch(`${curSettings.baseUrl}/${path}`).json(),
      yesterday = {},
      jhucsse = {},
      historical = {},
      nyt = {},
      apple = {}

const createPath = (opts, path) => {
  if(opts.sort || typeof(opts.strict) === 'boolean' || opts.yesterday) {
    path += '?'
    if(opts.sort) 
      path += `sort=${opts.sort}`
    if(opts.yesterday)
      path += (opts.sort ?'&':'')+'yesterday='+opts.yesterday
    if(typeof(opts.strict) === 'boolean') 
      path += (opts.sort || opts.yesterday ?'&':'')+'strict='+opts.strict
  }
  return path
}
const _all = (yesterday = false) => fetchJson(`v2/all?yesterday=${yesterday}`)

const settings = (opts = {}) => ['https://disease.sh', 'https://api.caw.sh', 'https://corona.lmao.ninja'].includes(opts.baseUrl) && (curSettings.baseUrl = opts.baseUrl)

const all = () => _all(false)

const countries = (opts = {}) => {
  let path = 'v2/countries'
  if(opts.country) 
    path += `/${Array.isArray(opts.country) ? (opts.country.join('|')) : opts.country}`
  return fetchJson(createPath(opts, path))
}

const continents = (opts = {}) => {
  let path = 'v2/continents'
  if(opts.continent) 
    path += `/${opts.continent}`
  return fetchJson(createPath(opts, path))
}

const states = (opts = {}) => {
  let path = 'v2/states'
  if(opts.state) 
    path += `/${Array.isArray(opts.state) ? (opts.state.join('|')) : opts.state}`
  return fetchJson(createPath(opts, path))
}

yesterday.all = () => _all(true)

yesterday.countries = (opts = {}) => countries({...opts, yesterday: true})

yesterday.continents = (opts = {}) => continents({...opts, yesterday: true})

yesterday.states = (opts = {}) => states({...opts, yesterday: true})

jhucsse.all = () => fetchJson('v2/jhucsse')

jhucsse.counties = (opts = {}) => {
  let path = 'v2/jhucsse/counties'
  if(opts.county) 
    path += `/${Array.isArray(opts.county) ? (opts.county.join('|')) : opts.county}`
  return fetchJson(path)
}

historical.all = (opts = {}) => fetchJson(`v2/historical/all${opts.days ? `?lastdays=${opts.days}`:''}`)

historical.countries = (opts = {}) => {
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

nyt.usa = () => fetchJson('v2/nyt/usa')

nyt.states = (opts = {}) => {
  let path = 'v2/nyt/states'
  if(opts.state) 
    path += `/${opts.state}`
  return fetchJson(path)
}

nyt.counties = (opts = {}) => {
  let path = 'v2/nyt/counties'
  if(opts.county) 
    path += `/${opts.county}`
  return fetchJson(path)
}

apple.countries = () => fetchJson('v2/apple/countries')

apple.subregions = (country) => fetchJson(`v2/apple/countries/${country}`)

apple.mobilityData = (opts = {}) => {
  let path = 'v2/apple/countries'
  if(opts.country) {
    path += `/${opts.country}`
    if(opts.subregion) 
      path += `/${Array.isArray(opts.subregion) ? (opts.subregion.join('|')) : opts.subregion}`
  }
  return fetchJson(path)
}

const gov = (country) => fetchJson(`v2/gov/${country ? country : ''}`)

module.exports = {
  settings,
  all,
  countries,
  continents,
  states,
  yesterday,
  jhucsse,
  historical,
  nyt,
  apple,
  gov
}