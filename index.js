const fetch = require('node-fetch'),
      fetchJson = (path) => fetch(`${baseUrl}/${path}`).then(r => r.json()),
      baseUrl = 'https://corona.lmao.ninja'
module.exports = {
  all : () => fetchJson('all'),
  countries : (country, sort) => {
		var path = `countries`
      if(country)
        path+=`/${country}`
      if(sort)
        path+=`?sort=${sort}`
      return fetchJson(path)
  },
  states: () => fetchJson('states'),
  yesterday: () => fetchJson('yesterday'),
  jhucsse: {
    all: () => fetchJson('v2/jhucsse'),
    counties: (county) => fetchJson(`v2/jhucsse/counties${(county ? `/${county}` : '')}`)
  },
  historical: {
    all: () => fetchJson('v2/historical/all'),
    countries: (country, province) => {
      var path = `v2/historical`
      if(country){
        path+=`/${country}`
        if(province)
          path+=`/${province}`
      }
      return fetchJson(path)
    }
  }
}