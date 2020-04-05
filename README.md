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
// this prints a summary of global data
api.all().then(console.log)
```

### Countries

```js
// this prints an array of all infected countries
api.countries().then(console.log) 

// this prints an array of call infected countries sorted by todays cases
api.countries({sort:'todayCases'}).then(console.log) 

// this prints a specified country
api.countries({country:'austria'}).then(console.log) 
```

### Yesterday

```js
// this prints a summary like .all() with yesterdays data
api.yesterday.all().then(console.log)

// this prints an array of all infected countries with yesterdays data
api.yesterday.countries().then(console.log)

// this prints an array of all infected countries with yesterdays data sorted by todays cases
api.yesterday.countries({sort:'todayCases'}).then(console.log)

// this prints a specific country with yesterdays data
api.yesterday.countries({country:'austria'}).then(console.log)
```

### States

```js
// this prints an array of US states and their data
api.states().then(console.log)

// this prints an array of US states and their data
api.states({sort:'todayCases'}).then(console.log)


// this prints a specific state and its data
api.statest({state:'michigan'}).then(console.log)

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






