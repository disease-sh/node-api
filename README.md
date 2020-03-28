<div align="center">
        <h1> NovelCovid </h1>
    <strong> <i>View information on the Coronavirus outbreak around the world.</i></strong>
  <br>
  <br>
  <a href="https://discord.gg/tTEBTxR">
    <img src="https://img.shields.io/discord/502930687503106068.svg?colorB=Blue&logo=discord&label=Support&style=for-the-badge" alt="Support"></a>

<a href="https://github.com/NovelCOVID/node-api/actions?query=workflow%3ABuild">
    <img src="https://img.shields.io/github/workflow/status/NovelCOVID/node-api/Build?color=green&label=Build&logo=github&logoColor=green&style=for-the-badge" alt="Build">
</a>

<a href="https://github.com/NovelCOVID/node-api">
    <img src="https://img.shields.io/github/languages/top/NovelCOVID/node-api?logo=typescript&logoColor=blue&style=for-the-badge" alt="Languages">
</a>
<br>
<a href="https://www.npmjs.com/package/novelcovid">
    <img src="https://img.shields.io/npm/v/novelcovid?logo=npm&style=for-the-badge" alt="Version">
</a>
<a href="https://www.npmjs.com/package/novelcovid">
	<img src="https://img.shields.io/bundlephobia/min/novelcovid?color=red&label=SIZE&logo=npm&style=for-the-badge", alt="Size">
</a>
<a href="https://www.npmjs.com/package/novelcovid">
<img src="https://img.shields.io/npm/dw/novelcovid?logo=npm&style=for-the-badge", alt="Downloads">
</a>
<br>
<a href="https://github.com/NovelCOVID/node-api/issues">
    <img src="https://img.shields.io/github/issues/NovelCOVID/node-api?color=red&logo=github&logoColor=red&style=for-the-badge" alt="Issues">
</a>

<a href="https://github.com/NovelCOVID/node-api/pulls">
    <img src="https://img.shields.io/github/issues-pr/NovelCOVID/node-api?logo=github&logoColor=brightgreen&style=for-the-badge" alt="Pull Request">
</a>
<a href="https://github.com/NovelCOVID/node-api/blob/master/LICENSE"><img src="https://img.shields.io/github/license/NovelCOVID/node-api?color=37f149&style=for-the-badge" alt="LICENSE">
</a>
<br>
<br>
<hr>
</div>


[Beta NPM Package](https://www.npmjs.com/package/covidtracker)


## Installation

Npm:

```bash
npm i novelcovid
```

Yarn:

```bash
yarn add novelcovid
```

## Usage

JavaScript:

```js
const { NovelCovid } = require('novelcovid');

const track = new NovelCovid();
```

TypeScript:

```ts
import { NovelCovid } from 'novelcovid';

const track = new NovelCovid();
```

## Methods

### All
```js
<Class>.all();
```
### Countries

```js
<Class>.countries(); // for ALL.
```
```js
<Class>.countries('country name'); // For Specfic Country
```
```js
<Class>.countries(null, 'sort by'); // For Sorting
```

### States
```js
<Class>.states(); // For ALL

<Class>.states('country name');
```

### Histroical
```js
<Class>.historical(); // For ALL
```
```js
<Class>.historical('country name'); // Specific Country
```

### Jhucsse
```js
<Class>.jhucsse();
```

## Interfaces
```ts
export interface All {
	cases: number;
	deaths: number;
	recovered: number;
	updated: number;
	active: number;
}

export interface Country {
	country: string;
	countryInfo: {
		_id: number;
		latitude: number;
		longitue: number;
		flag: string;
		iso3: string;
		iso2: string;
	};
	cases: number;
	todaysCases: number;
	deaths: number;
	recovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
}

export interface State {
	state: string;
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	active: number;
}

export interface Historical {
	country: string;
	province: string | null;
	timeline: {
		cases: object;
		deaths: object;
	};
}
export interface Jhucsse {
	country: string;
	province: string | null;
	updatedAt: Date;
	stats: {
		confirmed: number;
		deaths: number;
		recovered: number;
	};
	coordinates: {
		latitude: string;
		longitude: string;
	};
}
```
