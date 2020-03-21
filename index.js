/*
  Enjoy the new functions I have created! More coming soon if diced or elite makes useful updates
  - Apollo
*/
module.exports = {
  all: async function() {
    // Wait why did you .toString() this function?
    const a = await require('node-fetch')(`https://corona.lmao.ninja/all`);return await a.json();
  },
  countries: async function(country) {
    // Wait why did you .toString() this function?
    if (!country) {
         const a = await require('node-fetch')('https://corona.lmao.ninja/countries'); return await a.json();
    } else if (country) {
       try { const a = await require('node-fetch')(`https://corona.lmao.ninja/countries/${country}`); return await a.json();
       } catch (e) { return { error: 'Country not found' } }
    }
  },
  states: async function(state) {
    // Wait why did you .toString() this function?
    if (!state) { 
       const a = await require('node-fetch')('https://corona.lmao.ninja/states');
       return await a.json();
    }
    // Coming Soon VVV
    // else if (state) try { const a = await require('node-fetch')(`https://corona.lmao.ninja/states/${state}`); return await a.json(); } catch(e) { return { error: 'State not found' } }
  }
}
