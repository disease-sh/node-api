# CoronaVirus API
The novelcovid NPM package is an API wrapper for https://corona.lmao.ninja/ api.

there are 2 methods.
-   all
-   countries

# Usage 

You can use it like this:
````js
var covid = require('novelcovid');

covid.all() 
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
