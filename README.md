<div align="center">
        <h1> NovelCovid </h1>
    <strong> <i>View information on the Coronavirus outbreak around the world.</i></strong>
  <br>
  <br>
  <a href="https://discord.gg/EvbMshU">
    <img src="https://img.shields.io/discord/689535536934813823.svg?colorB=Blue&logo=discord&label=Support&style=for-the-badge" alt="Support"></a>

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
.all();
```

### Yesterday

```js
.yesterday();
```

### Countries

```js
.countries(); // for ALL.
```

```js
.countries('country name'); // For Specific Country
```

```js
.countries(null, 'sort by'); // For Sorting
```

### States

```js
.states(); // For ALL states
```

```js
.states('state name'); //  For specfic State
```

### Historical

```js
.historical(); // For ALL
```

```js
.historical(null, 'country name'); // Specific Country
```

```js
.historical(null, 'country name', 'province name'); // Specific Country and Province
```

```js
.historical(true); // All cases and deaths
```

### Jhucsse

```js
.jhucsse();

.jhucsee(true); // Gets all the counties

.jhucsee(true, 'countyname'); // for a countyname
```

### countryName

```js
.countryNames(); // All the country names which are effected.
```

Thanks!
