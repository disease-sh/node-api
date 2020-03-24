# CoronaVirus API
The novelcovid NPM package is an API wrapper for https://corona.lmao.ninja/ api.

there are 3 methods.
-   .all()
-   .countries()
-   .states()

# Usage 

**.all()**
```js
var covid = require('novelcovid');

covid.all() 
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

**.countries(country)**
```js
var covid = require('novelcovid');

// If no country is supplied, it will return all countries that has been affected.
covid.countries(country) 
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

**.states()**
```js
var covid = require('novelcovid');

covid.states()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

**.jhucsse(?filters)**
```js
var covid = require('novelcovid');

let covidSpain = await covid.jhucsse({country: "Spain"});;
```
