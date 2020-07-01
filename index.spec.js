const api = require('./')
const should = require('chai').should()

//api.settings({baseUrl: 'http://localhost:3000'})

describe('DEFAULT', function () {
  it('/all', async function () {
    const data = await api.all()
    data.should.be.a('object')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('critical')
    data.should.have.property('tests')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('testsPerOneMillion')
    data.should.have.property('updated')
    data.should.have.property('affectedCountries')
  })
  
  it('/states', async function () {
    const data = await api.states()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('state')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('active')
    }
  })

  it('/states?sort=cases', async function () {
    const data = await api.states({sort:'cases'})
    data.should.be.a('array')
    let maxCases = 999999999;
    for(let row of data) {
      row.should.have.property('state')
      row.should.have.property('cases')
      row.cases.should.be.at.most(maxCases);
      maxCases = row.cases;
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('active')
    }
  })

  it('/states/michigan', async function () {
    const data = await api.states({state:'michigan'})
    data.should.be.a('object')
    data.should.have.property('state', 'Michigan')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('active')
  })

  it('/states/michigan|new%20york', async function () {
    const data = await api.states({state:['michigan', 'new york']})
    data.should.be.a('array').of.length(2)
    data[0].should.have.property('state', 'Michigan')
    data[1].should.have.property('state', 'New York')
    for(let row of data){
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('active')
    }
  })

  it('/countries', async function() {
    const data = await api.countries()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/countries?sort=cases', async function() {
    const data = await api.countries({sort:'cases'})
    data.should.be.a('array')
    let maxCases = 999999999;
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.cases.should.be.at.most(maxCases);
      maxCases = row.cases;
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/countries/austria', async function() {
    const data = await api.countries({country:'austria'})
    data.should.be.a('object')
    data.should.have.property('country', 'Austria')
    data.should.have.property('countryInfo')
    data.countryInfo.should.have.property('_id', 40)
    data.countryInfo.should.have.property('iso2')
    data.countryInfo.should.have.property('iso3')
    data.countryInfo.should.have.property('lat')
    data.countryInfo.should.have.property('long')
    data.countryInfo.should.have.property('flag')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
  })

  it('/countries/netherlands',async function () {
    const data = await api.countries({country:'netherlands'})
    data.should.be.a('object')
    data.should.have.property('country', 'Netherlands')
    data.should.have.property('countryInfo')
    data.countryInfo.should.have.property('_id')
    data.countryInfo.should.have.property('iso2')
    data.countryInfo.should.have.property('iso3')
    data.countryInfo.should.have.property('lat')
    data.countryInfo.should.have.property('long')
    data.countryInfo.should.have.property('flag')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
  })

  it('/countries/netherlands?strict=false',async function () {
    const data = await api.countries({country:'netherlands', strict:false})
    data.should.be.a('object')
    data.should.have.property('country', 'Caribbean Netherlands')
    data.should.have.property('countryInfo')
    data.countryInfo.should.have.property('_id')
    data.countryInfo.should.have.property('iso2')
    data.countryInfo.should.have.property('iso3')
    data.countryInfo.should.have.property('lat')
    data.countryInfo.should.have.property('long')
    data.countryInfo.should.have.property('flag')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
  })

  it('/countries/austria|usa', async function() {
    const data = await api.countries({country:['austria', 'usa']})
    data.should.be.a('array').of.length(2)
    data[0].should.have.property('country', 'Austria')
    data[1].should.have.property('country', 'USA')
    for(let row of data){
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/continents', async function() {
    const data = await api.continents()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('continent')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('updated')
    }
  })

  it('/continents/europe', async function() {
    const data = await api.continents({continent:'europe'})
    data.should.be.a('object')
    data.should.have.property('continent', 'Europe')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('updated')
  })

  it('/continents/euro?strict=false', async function() {
    const data = await api.continents({continent:'europe', strict:false})
    data.should.be.a('object')
    data.should.have.property('continent', 'Europe')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('updated')
  })

  it('/yesterday',async function () {
    const data = await api.yesterday.countries()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/yesterday?sort=cases', async function() {
    const data = await api.yesterday.countries({sort:'cases'})
    data.should.be.a('array')
    let maxCases = 999999999;
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.cases.should.be.at.most(maxCases);
      maxCases = row.cases;
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/yesterday/all', async function () {
    const data = await api.yesterday.all()
    const data2 = await api.all()
    data.should.be.a('object')
    data.should.have.property('cases')
    data2.should.have.property('cases')
    data.cases.should.be.at.most(data2.cases)
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
    data.should.have.property('affectedCountries')
  })

  it('/yesterday/austria',async function () {
    const data = await api.yesterday.countries({country:'austria'})
    data.should.be.a('object')
    data.should.have.property('country', 'Austria')
    data.should.have.property('countryInfo')
    data.countryInfo.should.have.property('_id', 40)
    data.countryInfo.should.have.property('iso2')
    data.countryInfo.should.have.property('iso3')
    data.countryInfo.should.have.property('lat')
    data.countryInfo.should.have.property('long')
    data.countryInfo.should.have.property('flag')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
  })

  it('/yesterday/netherlands?strict=true',async function () {
    const data = await api.yesterday.countries({country:'netherlands', strict:true})
    data.should.be.a('object')
    data.should.have.property('country', 'Netherlands')
    data.should.have.property('countryInfo')
    data.countryInfo.should.have.property('_id')
    data.countryInfo.should.have.property('iso2')
    data.countryInfo.should.have.property('iso3')
    data.countryInfo.should.have.property('lat')
    data.countryInfo.should.have.property('long')
    data.countryInfo.should.have.property('flag')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
  })

  it('/yesterday/austria|usa',async function () {  
    const data = await api.yesterday.countries({country:['austria', 'usa']})
    data.should.be.a('array').of.length(2)
    data[0].should.have.property('country', 'Austria')
    data[1].should.have.property('country', 'USA')
    for(let row of data){
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/yesterday/states', async function () {
    const data = await api.yesterday.states()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('state')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('active')
    }
  })

  it('/yesterday/states?sort=cases', async function () {
    const data = await api.yesterday.states({sort:'cases'})
    data.should.be.a('array')
    let maxCases = 999999999;
    for(let row of data) {
      row.should.have.property('state')
      row.should.have.property('cases')
      row.cases.should.be.at.most(maxCases);
      maxCases = row.cases;
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('active')
    }
  })

  it('/yesterday/states/michigan', async function () {
    const data = await api.yesterday.states({state:'michigan'})
    data.should.be.a('object')
    data.should.have.property('state', 'Michigan')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('active')
  })

  it('/yesterday/states/michigan|new%20york', async function () {
    const data = await api.yesterday.states({state:['michigan', 'new york']})
    data.should.be.a('array').of.length(2)
    data[0].should.have.property('state', 'Michigan')
    data[1].should.have.property('state', 'New York')
    for(let row of data){
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('active')
    }
  })

  it('/yesterday/continents', async function() {
    const data = await api.yesterday.continents()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('continent')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('updated')
    }
  })

  it('/yesterday/continents/europe', async function() {
    const data = await api.yesterday.continents({continent:'europe'})
    data.should.be.a('object')
    data.should.have.property('continent', 'Europe')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('updated')
  })

  it('/yesterday/continents/euro?strict=false', async function() {
    const data = await api.yesterday.continents({continent:'europe', strict:false})
    data.should.be.a('object')
    data.should.have.property('continent', 'Europe')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('updated')
  })

  it('/twoDaysAgo',async function () {
    const data = await api.twoDaysAgo.countries()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/twoDaysAgo?sort=cases', async function() {
    const data = await api.twoDaysAgo.countries({sort:'cases'})
    data.should.be.a('array')
    let maxCases = 999999999;
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.cases.should.be.at.most(maxCases);
      maxCases = row.cases;
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/twoDaysAgo/all', async function () {
    const data = await api.twoDaysAgo.all()
    data.should.be.a('object')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
    data.should.have.property('affectedCountries')
  })

  it('/twoDaysAgo/austria',async function () {
    const data = await api.twoDaysAgo.countries({country:'austria'})
    data.should.be.a('object')
    data.should.have.property('country', 'Austria')
    data.should.have.property('countryInfo')
    data.countryInfo.should.have.property('_id', 40)
    data.countryInfo.should.have.property('iso2')
    data.countryInfo.should.have.property('iso3')
    data.countryInfo.should.have.property('lat')
    data.countryInfo.should.have.property('long')
    data.countryInfo.should.have.property('flag')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
  })

  it('/twoDaysAgo/netherlands?strict=true',async function () {
    const data = await api.twoDaysAgo.countries({country:'netherlands', strict:true})
    data.should.be.a('object')
    data.should.have.property('country', 'Netherlands')
    data.should.have.property('countryInfo')
    data.countryInfo.should.have.property('_id')
    data.countryInfo.should.have.property('iso2')
    data.countryInfo.should.have.property('iso3')
    data.countryInfo.should.have.property('lat')
    data.countryInfo.should.have.property('long')
    data.countryInfo.should.have.property('flag')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
  })

  it('/twoDaysAgo/austria|usa',async function () {  
    const data = await api.twoDaysAgo.countries({country:['austria', 'usa']})
    data.should.be.a('array').of.length(2)
    data[0].should.have.property('country', 'Austria')
    data[1].should.have.property('country', 'USA')
    for(let row of data){
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/twoDaysAgo/continents', async function() {
    const data = await api.twoDaysAgo.continents()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('continent')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('updated')
    }
  })

  it('/twoDaysAgo/continents/europe', async function() {
    const data = await api.twoDaysAgo.continents({continent:'europe'})
    data.should.be.a('object')
    data.should.have.property('continent', 'Europe')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('updated')
  })

  it('/twoDaysAgo/continents/euro?strict=false', async function() {
    const data = await api.twoDaysAgo.continents({continent:'europe', strict:false})
    data.should.be.a('object')
    data.should.have.property('continent', 'Europe')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('updated')
  })
})

describe('JHUCSSE', function() {
  it('/v2/jhucsse', async function () {
    const data = await api.jhucsse.all()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('province')
      row.should.have.property('updatedAt')
      row.should.have.property('stats')
      row.stats.should.have.property('confirmed')
      row.stats.should.have.property('deaths')
      row.stats.should.have.property('recovered')
      row.should.have.property('coordinates')
      row.coordinates.should.have.property('longitude')
      row.coordinates.should.have.property('latitude')
    }
  })

  it('/v2/jhucsse/counties', async function () {
    const data = await api.jhucsse.counties()
    data.should.be.a('array')
    for(let row of data){
      row.should.have.property('country')
      row.should.have.property('province')
      row.should.have.property('county')
      row.should.have.property('updatedAt')
      row.should.have.property('stats')
      row.stats.should.have.property('confirmed')
      row.stats.should.have.property('deaths')
      row.stats.should.have.property('recovered')
      row.should.have.property('coordinates')
      row.coordinates.should.have.property('longitude')
      row.coordinates.should.have.property('latitude')
    }
  })

  it('/v2/jhucsse/counties/abbeville', async function () {
    let data = await api.jhucsse.counties({county:'abbeville'})
    data.should.be.a('array')
    for(let row of data){
      row.should.have.property('country', 'US')
      row.should.have.property('province', 'South Carolina')
      row.should.have.property('county', 'Abbeville')
      row.should.have.property('updatedAt')
      row.should.have.property('stats')
      row.stats.should.have.property('confirmed')
      row.stats.should.have.property('deaths')
      row.stats.should.have.property('recovered')
      row.should.have.property('coordinates')
      row.coordinates.should.have.property('longitude')
      row.coordinates.should.have.property('latitude')
    }
  })

  it('/v2/jhucsse/counties/abbeville|acadia', async function () {
    let data = await api.jhucsse.counties({county:['abbeville','acadia']})
    data.should.be.a('object')
    data.should.have.property('abbeville')
    data.should.have.property('acadia')
    data.abbeville[0].should.have.property('country', 'US')
    data.abbeville[0].should.have.property('province', 'South Carolina')
    data.abbeville[0].should.have.property('county', 'Abbeville')
    data.abbeville[0].should.have.property('updatedAt')
    data.abbeville[0].should.have.property('stats')
    data.abbeville[0].stats.should.have.property('confirmed')
    data.abbeville[0].stats.should.have.property('deaths')
    data.abbeville[0].stats.should.have.property('recovered')
    data.abbeville[0].should.have.property('coordinates')
    data.abbeville[0].coordinates.should.have.property('longitude')
    data.abbeville[0].coordinates.should.have.property('latitude')
    data.acadia[0].should.have.property('country', 'US')
    data.acadia[0].should.have.property('province', 'Louisiana')
    data.acadia[0].should.have.property('county', 'Acadia')
    data.acadia[0].should.have.property('updatedAt')
    data.acadia[0].should.have.property('stats')
    data.acadia[0].stats.should.have.property('confirmed')
    data.acadia[0].stats.should.have.property('deaths')
    data.acadia[0].stats.should.have.property('recovered')
    data.acadia[0].should.have.property('coordinates')
    data.acadia[0].coordinates.should.have.property('longitude')
    data.acadia[0].coordinates.should.have.property('latitude')
  })
})

describe('HISTORICAL', function () {
  it('/v2/historical', async function () {
    const data = await api.historical.countries()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('province')
      row.should.have.property('timeline')
      row.timeline.should.be.a('object')
      row.timeline.should.have.property('cases')
      row.timeline.cases.should.be.a('object')
      row.timeline.should.have.property('deaths')
      row.timeline.deaths.should.be.a('object')
      row.timeline.should.have.property('recovered')
      row.timeline.recovered.should.be.a('object')
    }
  })

  it('/v2/historical/all', async function () {
    const data = await api.historical.all()
    data.should.be.a('object')
    data.should.have.property('cases')
    data.cases.should.be.a('object')
    data.should.have.property('deaths')
    data.deaths.should.be.a('object')
    data.should.have.property('recovered')
    data.recovered.should.be.a('object')
  })

  it('/v2/historical/all?lastdays=10', async function () {
    const data = await api.historical.all({days:10})
    data.should.be.a('object')
    data.should.have.property('cases')
    data.cases.should.be.a('object')
    Object.keys(data.cases).length.should.be.equal(10);
    data.should.have.property('deaths')
    data.deaths.should.be.a('object')
    Object.keys(data.deaths).length.should.be.equal(10);
    data.should.have.property('recovered')
    data.recovered.should.be.a('object')
    Object.keys(data.recovered).length.should.be.equal(10);
  })

  it('/v2/historical/china', async function () {
    const data = await api.historical.countries({country:'china'})
    data.should.be.a('object')
    data.should.have.property('country', 'China')
    data.should.have.property('province')
    data.province.should.be.a('array')
    data.should.have.property('timeline')
    data.timeline.should.be.a('object')
    data.timeline.should.have.property('cases')
    data.timeline.cases.should.be.a('object')
    data.timeline.should.have.property('deaths')
    data.timeline.deaths.should.be.a('object')
    data.timeline.should.have.property('recovered')
    data.timeline.recovered.should.be.a('object')
  })

  it('/v2/historical/china?lastdays=10', async function () {
    const data = await api.historical.countries({country:'china', days:10})
    data.should.be.a('object')
    data.should.have.property('country', 'China')
    data.should.have.property('province')
    data.province.should.be.a('array')
    data.should.have.property('timeline')
    data.timeline.should.be.a('object')
    data.timeline.should.have.property('cases')
    data.timeline.cases.should.be.a('object')
    Object.keys(data.timeline.cases).length.should.be.equal(10);
    data.timeline.should.have.property('deaths')
    data.timeline.deaths.should.be.a('object')
    Object.keys(data.timeline.deaths).length.should.be.equal(10);
    data.timeline.should.have.property('recovered')
    data.timeline.recovered.should.be.a('object')
    Object.keys(data.timeline.recovered).length.should.be.equal(10);
  })

  it('/v2/historical/china/hubei', async function () {
    const data = await api.historical.countries({country:'china', province:'hubei'})
    data.should.be.a('object')
    data.should.have.property('country')
    data.should.have.property('province')
    data.should.have.property('timeline')
    data.timeline.should.be.a('object')
    data.timeline.should.have.property('cases')
    data.timeline.cases.should.be.a('object')
    data.timeline.should.have.property('deaths')
    data.timeline.deaths.should.be.a('object')
    data.timeline.should.have.property('recovered')
    data.timeline.recovered.should.be.a('object')
  })

  it('/v2/historical/china/hubei|anhui', async function () {
    const data = await api.historical.countries({country:'china', province:['hubei', 'anhui']})
    data.should.be.a('array')
    data[0].should.have.property('province', 'hubei')
    data[1].should.have.property('province', 'anhui')
    for(let row of data){
      row.should.have.property('country', 'China')
      row.should.have.property('timeline')
      row.timeline.should.be.a('object')
      row.timeline.should.have.property('cases')
      row.timeline.cases.should.be.a('object')
      row.timeline.should.have.property('deaths')
      row.timeline.deaths.should.be.a('object')
      row.timeline.should.have.property('recovered')
      row.timeline.recovered.should.be.a('object')
    }
  })
})

describe('NY TIMES', function() {
  it('/v2/nyt/states', async function () {
    const data = await api.nyt.states()
    data.should.be.a('array')
    for(let row of data){
      row.should.have.property('date')
      row.should.have.property('state')
      row.should.have.property('fips')
      row.should.have.property('cases')
      row.should.have.property('deaths')
    }
  })

  it('/v2/nyt/states/illinois', async function () {
    const data = await api.nyt.states({state:'illinois'})
    data.should.be.a('array')
    for(let row of data){
      row.should.have.property('date')
      row.should.have.property('state', 'Illinois')
      row.should.have.property('fips', '17')
      row.should.have.property('cases')
      row.should.have.property('deaths')
    }
  })

  it('/v2/nyt/counties', async function () {
    const data = await api.nyt.counties()
    data.should.be.a('array')
    for(let row of data){
      row.should.have.property('date')
      row.should.have.property('county')
      row.should.have.property('state')
      row.should.have.property('fips')
      row.should.have.property('cases')
      row.should.have.property('deaths')
    }
  })

  it('/v2/nyt/counties/cook', async function () {
    const data = await api.nyt.counties({county:'cook'})
    data.should.be.a('array')
    for(let row of data){
      row.should.have.property('date')
      row.should.have.property('county', 'Cook')
      row.should.have.property('state')
      row.should.have.property('fips')
      row.should.have.property('cases')
      row.should.have.property('deaths')
    }
  })

  it('/v2/nyt/usa', async function () {
    const data = await api.nyt.usa()
    data.should.be.a('array')
    for(let row of data){
      row.should.have.property('date')
      row.should.have.property('cases')
      row.should.have.property('deaths')
    }
  })
})

describe('APPLE MOBILITY', function() {
  it('/v2/apple/countries', async function () {
    const data = await api.apple.countries()
    data.should.be.a('array').of.length(63)
    for(let row of data) row.should.be.a('string')
  })

  it('/v2/apple/countries/austria', async function () {
    const data = await api.apple.subregions('austria')
    data.should.be.a('object')
    data.should.have.property('country', 'Austria')
    data.should.have.property('subregions')
    data.subregions.should.be.a('array').of.length(11)
    for(let row of data.subregions) row.should.be.a('string')
  })

  it('/v2/apple/countries/austria/vienna', async function () {
    const data = await api.apple.mobilityData({country:'austria', subregion: 'vienna'})
    data.should.be.a('object')
    data.should.have.property('country', 'Austria')
    data.should.have.property('subregion', 'Vienna')
    data.should.have.property('data')
    data.data.should.be.a('array')
    for(let row of data.data){
      row.should.have.property('subregion_and_city')
      row.should.have.property('geo_type')
      row.should.have.property('date')
      row.should.have.property('driving')
      row.should.have.property('transit')
      row.should.have.property('walking')
    }
  })

  it('/v2/apple/countries/austria/vienna|salzburg', async function () {
    const data = await api.apple.mobilityData({country:'austria', subregion: ['vienna', 'salzburg']})
    data.should.be.a('array')
    for(let entry of data) {
      //data.should.have.property('country')
      entry.should.have.property('subregion')
      entry.should.have.property('data')
      entry.data.should.be.a('array')
      for(let row of entry.data){
        row.should.have.property('subregion_and_city')
        row.should.have.property('geo_type')
        row.should.have.property('date')
        row.should.have.property('driving')
        row.should.have.property('transit')
        row.should.have.property('walking')
      }
    }
  })
})

describe('GOVERNMENT DATA', function() {
  it('/v2/gov', async function (){
    const data = await api.gov()
    data.should.be.a('array')
  })

  it('/v2/gov/*', async function (){
    const data = await api.gov()
    for(const country of data) {
      const govData = await api.gov(country)
      should.exist(govData)
    }
  })
})