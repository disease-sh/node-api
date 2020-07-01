<div align="center">
	<h1>NovelCovid</h1>
	<h6>(aka covidapi)</h6>
	<strong> <i>A JavaScript Wrapper for the <a href="https://disease.sh">novelCOVID API</a></i></strong><br><br>

![GitHub top language](https://img.shields.io/github/languages/top/novelcovid/node-api)
![Snyk Vulnerabilities for npm scoped package](https://img.shields.io/snyk/vulnerabilities/npm/novelcovid)
![GitHub package.json version](https://img.shields.io/github/package-json/v/novelcovid/node-api)
![GitHub last commit](https://img.shields.io/github/last-commit/novelcovid/node-api)<br>
![npm bundle size](https://img.shields.io/bundlephobia/minzip/novelcovid)
![npm](https://img.shields.io/npm/dw/novelcovid)<br>
![GitHub issues](https://img.shields.io/github/issues-raw/novelcovid/node-api)
![GitHub](https://img.shields.io/github/license/novelcovid/node-api)

</div>
<br>

## Disclaimer
This wrapper is only for COVID-19 related data from the [Open Disease API](https://disease.sh).

## Installation

[![NPM](https://nodei.co/npm/novelcovid.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/novelcovid/)

Using NPM:

```bash
npm i -s novelcovid
```

## Remarks

This wrapper uses the '@aero/centra' package to send requests.
It is way faster than any other request package other than 'http.request' package.

The **allowNull** parameter is now available for the `v2/all`, `v2/countries`, `v2/continents`, `v2/states` and `v2/gov` endpoints. 

## Usage

All shown examples use Promises but can also await/async to fetch data using NovelCovid.

### Add to project 

```js
const api = require('novelcovid');

// you can choose which URL to use, this will not change the behaviour of the API
api.settings({
    baseUrl: 'https://disease.sh' | 'https://api.caw.sh' | 'https://corona.lmao.ninja'
})
```

### Summary

```js
// this prints a summary of global data
api.all().then(console.log)

// this prints a summary of global data with yesterdays data
api.yesterday.all().then(console.log)

// this prints a summary of global data with data from two days ago
api.twoDaysAgo.all().then(console.log)
```

### Countries

```js
// this prints an array of call infected countries
api.countries().then(console.log) 

// this prints an array of call infected countries sorted by cases
api.countries({sort:'cases'}).then(console.log) 

// this prints a specified country
api.countries({country:'austria'}).then(console.log) 

// this prints an array of specified countries
api.countries({country:['austria','china']}).then(console.log) 
```

### Yesterday (Countries)

```js
// this prints an array of all infected countries with yesterdays data
api.yesterday.countries().then(console.log)

// this prints an array of all infected countries with yesterdays data sorted by todays cases
api.yesterday.countries({sort:'cases'}).then(console.log)

// this prints a specified country with yesterdays data
api.yesterday.countries({country:'austria'}).then(console.log)

// this prints an array of specified countries with yesterdays data
api.yesterday.countries({country:['austria','china']}).then(console.log)
```

### Two Days Ago (Countries)

```js
// this prints an array of all infected countries with data from two days ago
api.twoDaysAgo.countries().then(console.log)

// this prints an array of all infected countries with data from two days ago sorted by todays cases
api.twoDaysAgo.countries({sort:'cases'}).then(console.log)

// this prints a specified country with data from two days ago
api.twoDaysAgo.countries({country:'austria'}).then(console.log)

// this prints an array of specified countries with data from two days ago
api.twoDaysAgo.countries({country:['austria','china']}).then(console.log)
```

### Continents

```js
// this prints an array of all infected continents
api.continents().then(console.log) 

// this prints an array of all infected continents sorted by cases
api.continents({sort:'cases'}).then(console.log) 

// this prints a specified continent
api.continents({continent:'europe'}).then(console.log)
```

### Yesterday (Continents)

```js
// this prints an array of all infected continents with yesterdays data
api.yesterday.continents().then(console.log)

// this prints an array of all infected continents with yesterdays data sorted by todays cases
api.yesterday.continents({sort:'cases'}).then(console.log)

// this prints a specified continent with yesterdays data
api.yesterday.continents({continent:'europe'}).then(console.log)
```

### Two Days Ago (Continents)

```js
// this prints an array of all infected continents with data from two days ago
api.twoDaysAgo.continents().then(console.log)

// this prints an array of all infected continents with data from two days ago sorted by todays cases
api.twoDaysAgo.continents({sort:'cases'}).then(console.log)

// this prints a specified continent with data from two days ago
api.twoDaysAgo.continents({continent:'europe'}).then(console.log)
```

### States

```js
// this prints an array of US states and their data
api.states().then(console.log)

// this prints an array of US states and their data sorted by cases
api.states({sort:'cases'}).then(console.log)

// this prints a specified state and its data
api.states({state:'michigan'}).then(console.log)

// this prints an array of specified states and their data
api.states({state:['michigan','new york']}).then(console.log)
```

### Yesterday (States)

```js
// this prints an array of US states with yesterdays data
api.yesterday.states().then(console.log)

// this prints an array of US states with yesterdays data sorted by cases
api.yesterday.states({sort:'cases'}).then(console.log)

// this prints a specified state with yesterdays data
api.yesterday.states({state:'michigan'}).then(console.log)

// this prints an array of specified states with yesterdays data
api.yesterday.states({state:['michigan','new york']}).then(console.log)
```

### JHUCSSE

```js
// this prints an array of infected countries
api.jhucsse.all().then(console.log)

// this prints an array of infected US counties 
api.jhucsse.counties().then(console.log)

// this prints an array of infected provinces of a specified US county 
api.jhucsse.counties({county:'abbeville'}).then(console.log)

// this prints an object with the counties provinces as arrays
api.jhucsse.counties({county:['abbeville','acadia']}).then(console.log)
```

### Historical

```js
// this prints the global timeline
api.historical.all().then(console.log)

// this prints the global timeline for the last 10 days (use -1 to get all data)
api.historical.all().then(console.log)

// this prints an array of infected countries and their timeline
api.historical.countries().then(console.log)

// this prints a specified country and its timeline
api.historical.countries({country:'china'}).then(console.log)

// this prints a specified country and its timeline for the last 10 days (use -1 to get all data)
api.historical.countries({country:'china', days:10}).then(console.log)

// this prints a specified province of a specified country and its timeline
api.historical.countries({country:'china', province:'hubei'}).then(console.log)

// this prints a specified province of a specified country and its timeline
api.historical.countries({country:'china', province:['hubei','anhui']}).then(console.log)
```

### New York Times Data (USA)

```js
// this prints a timeline of data from the US
api.nyt.usa().then(console.log)

// this prints an array of timelines of all infected US states
api.nyt.states().then(console.log)

// this prints a timeline of a specified US state
api.nyt.states({state:'illinois'}).then(console.log)

// this prints an array of timelines all infected US counties
api.nyt.counties().then(console.log)

// this prints an array of timelines of states of a specified US county
api.nyt.counties({county:'cook'}).then(console.log)
```

### Mobility Data (Apple)

```js
// this prints a list of available country names
api.apple.countries().then(console.log)

// this prints a list of available subregions for a specified country
api.apple.subregions('austria').then(console.log)

// this prints mobility data for a specified subregion of a country, all is used to query total data
api.apple.mobilityData({country:'austria', subregion:'all'}).then(console.log)

// this prints mobility data for multiple specified subregions of a country
api.apple.mobilityData({country:'austria', subregion:['vienna', 'salzburg']}).then(console.log)
```

### Official Government Data

```js
// this prints a list of available country names
api.gov().then(console.log)

// this prints the data for a specified country
api.gov('austria').then(console.log)
```
