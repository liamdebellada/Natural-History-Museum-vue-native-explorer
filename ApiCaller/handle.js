var request = require('axios')
var getNhmDataSets = async (tag) => {
    var response = await request.get(`https://data.nhm.ac.uk/api/3/action/package_search?fq=tags:${tag}`).then(async r => {
        var validObjs = []
        r.data.result.results.forEach((d) => {
            for (var item in d.resources) {
                if (d.resources[item].datastore_active) {
                    validObjs.push({
                        "title" : d.name,
                        "resource_id" : d.resources[item].id,
                        "nhmRequestUrl" : `https://data.nhm.ac.uk/api/3/action/datastore_search?resource_id=${d.resources[item].id}`
                    })
                }
            }
        })
        for (var set in validObjs) {
            validObjs[set].dataRequest = await request.get(validObjs[set].nhmRequestUrl)
            .then(set => set.data.result)
            .catch(() => 'Error')
        }
        return validObjs
    }).catch(err => err)
    return response
};

export { getNhmDataSets }