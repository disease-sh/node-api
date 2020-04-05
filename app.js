const api = require('.')

api.countries({country:'austria', sort:'cases'}).then(r => console.log(r))