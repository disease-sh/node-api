for(const o of["all","countries"])exports[o]=(async()=>{const t=await require("node-fetch")(`https://corona.lmao.ninja/${o}`);return await t.json()});
