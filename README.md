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

Since 0.1.0, only /v2 endpoints are supported. Keep that in mind.

### Add to project 

```js
const api = require('covidapi');
```

### Summary

```js
// this prints a summary of global data
api.all().then(console.log)

// this prints a summary of global data with yesterdays data
api.yesterday.all().then(console.log)
```

### Countries

```js
// this prints an array of all infected countries
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

// this prints an array of infected countries and their timeline
api.historical.countries().then(console.log)

// this prints a specified country and its timeline
api.historical.countries({country:'china'}).then(console.log)

// this prints a specified country and its timeline for the last 10 days
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

// this prints an array of timelines all infected US states
api.nyt.states().then(console.log)

// this prints a timeline of a specified US state
api.nyt.states({state:'illinois'}).then(console.log)

// this prints an array of timelines all infected US counties
api.nyt.counties().then(console.log)

// this prints an array of timelines of states of a specified US county
api.nyt.counties({county:'cook'}).then(console.log)
```
