# CoronaVirus API
The novelcovid NPM package is an API wrapper for https://corona.lmao.ninja/ api.

there are 2 methods.
-   all
-   countries

# Usage 

You can use getanimals like this:
````
var covid = require('novelcovid');

covid.all() // you can use any other animal ex getanimals.cat() etc
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
