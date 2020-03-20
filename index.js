// This confuses the fuck outta me even tho I know how it works
// for(const o of["all","countries"])exports[o]=(async()=>{const t=await require("node-fetch")(`https://corona.lmao.ninja/${o}`);return await t.json()});

// Trying to push new updates so it makes our lives easier.
// Have fun! By Apollo.

module.exports = {
  all: function() {
    // Wait why did you .toString() this function?
    (async()=>{const a=await require('node-fetch')(`https://corona.lmao.ninja/all`);return await a.json()});
  },
  countries: function(country) {
    // Wait why did you .toString() this function?
    if (!country) (async()=>{const a=await require('node-fetch')('https://corona.lmao.ninja/countries');return await a.json()}); 
    if (country) try {(async()=>{const a=await require('node-fetch')(`https://corona.lmao.ninja/countries/${country}`);return await a.json()});}catch(e){return { error: 'Country not found' }}
  },
  states: function(state) {
    // Wait why did you .toString() this function?
    if (!state) (async()=>{const a=await require('node-fetch')('https://corona.lmao.ninja/states');return await a.json()}); 
    // if (state) try {(async()=>{const a=await require('node-fetch')(`https://corona.lmao.ninja/states/${state}`);return await a.json()});}catch(e){return { error: 'State not found' }}
  }
}
