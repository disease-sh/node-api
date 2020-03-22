# Covid-19 Tracker

View information on the Coronavirus outbreak around the world.


![npm](https://flat.badgen.net/npm/v/novelcovid) ![InstallSize](https://badgen.net/packagephobia/install/novelcovid) [![Discord](https://img.shields.io/badge/Discord-600%20Online-7289da)](https://discord.gg/tTEBTxR)


[Beta NPM Package](https://www.npmjs.com/package/covidtracker)
  

## Installation

Stable Release (`v1.0.6`)

```js

npm i novelcovid

```

### Methods

>  **.getAll()**

>  **.getCountry(country, sort)**

>  **.getState(state, sort)**

  

## Loading and configuring the module

We suggest you load the module via `require`, pending the stabalizing of es modules in node:

```js

// Declare the package

const track = require('novelcovid');

```

To actually use the data, you will need an [async/await](https://javascript.info/async-await).

```js

// Declare the package

const track = require('novelcovid');

// Now we create a async/await

async () => {

// Now we await it.

let data = await track.getAll();

// Make sure you return it, this usually implies if you are using this inside a function.

return console.log(`
Cases: ${data.cases}
Deaths: ${data.deaths}
Recovered: ${data.recovered}`)

}

```

#### Sorting the data.

Some [methods](https://www.npmjs.com/package/covidtracker#methods) can be sorted.

```js

const track = require('novelcovid');

async () => {

// Sorting a specific state/country wont work, its best to leave it blank/null.

let country = await track.getCountry(null, 'recovered');

return console.log(data);

}

```
