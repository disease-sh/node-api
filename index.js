for(const o of["all","countries"])exports[o]=(async()=>{const t=await require("node-fetch")(`https://corona.lmao.ninja/${o}`);if(200!==t.statusCode)throw new Error("Fail",res.statusCode);return await t.json()});