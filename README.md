<div align="center">
        <h1> covidapi </h1>
    <strong> <i>A NodeJs Wrapper for the <a href="https://corona.lmao.ninja">novelCOVID API</a></i></strong>
<br><br>

![GitHub top language](https://img.shields.io/github/languages/top/puf17640/covidapi)
![Snyk Vulnerabilities for npm scoped package](https://img.shields.io/snyk/vulnerabilities/npm/covidapi)
![GitHub package.json version](https://img.shields.io/github/package-json/v/puf17640/covidapi)
![GitHub last commit](https://img.shields.io/github/last-commit/puf17640/covidapi)<br>
![npm bundle size](https://img.shields.io/bundlephobia/minzip/covidapi)
![npm](https://img.shields.io/npm/dw/covidapi)<br>
![GitHub issues](https://img.shields.io/github/issues-raw/puf17640/covidapi)
![GitHub](https://img.shields.io/github/license/puf17640/covidapi)
![Keybase PGP](https://img.shields.io/keybase/pgp/julianpufler)

</div>
<br>

## Installation

Using NPM:

```bash
npm i -s covidapi
```

## Usage

All shown examples use Promises but can also await/async to fetch data using covidapi.

### Add to project 

```js
const api = require('covidapi');
```

### Summary

```js
api.all().then(console.log)

// this will print
{
  cases: 1193764,
  todayCases: 77121,
  deaths: 64384,
  todayDeaths: 5214,
  recovered: 246110,
  active: 883270,
  critical: 42066,
  casesPerOneMillion: 153,
  deathsPerOneMillion: 8.3,
  updated: 1586034307935,
  affectedCountries: 208
}
```

### Countries

```js
// this prints an array of all infected countries
api.countries().then(console.log) 

// this prints a specified country
api.countries({country:'austria'}).then(console.log) 

// this prints an array of call infected countries sorted by todays cases
api.countries({sort:'todayCases'}).then(console.log) 
```

### Yesterday

```js
// this prints an array of all infected countries with yesterdays data
api.yesterday().then(console.log)
```

### States

```js
api.states().then(console.log)

// this will print
[
  {
    state: 'New York',
    cases: 113704,
    todayCases: 10228,
    deaths: 3565,
    todayDeaths: 347,
    active: 99661
  },
  ... more items
]
```

### JHUCSSE

```js
// this prints an array of infected countries
api.jhucsse.all().then(console.log)

// this prints an array of infected US states 
api.jhucsse.counties().then(console.log)

// this prints an array of infected provinces of a specified US county 
api.jhucsse.counties('lee').then(console.log)
```

### Historical

```js
// this prints the global timeline
api.historical.all().then(console.log)

// this prints an array of infected countries and their timeline
api.historical.countries().then(console.log)

// this prints a specified country and its timeline
api.historical.countries({country:'china'}).then(console.log)

// this prints a specified province of a specified country and its timeline
api.historical.countries({country:'china', province:'hubei'}).then(console.log)
```






