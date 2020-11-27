var request = require('axios')
var getNhmDataSets = async (tag) => {
    var response = await request.get(`https://data.nhm.ac.uk/api/3/action/package_search?fq=tags:${tag}`).then(async r => {
        var validObjs = []
        r.data.result.results.forEach((d) => {
            for (var item in d.resources) {
                if (d.resources[item].datastore_active) {
                    validObjs.push({
                        "title" : d.name,
                        "displayData": false,
                        "resource_id" : d.resources[item].id,
                        "nhmRequestUrl" : `https://data.nhm.ac.uk/api/3/action/datastore_search?resource_id=${d.resources[item].id}`
                    })
                }
            }
        })
        for (var set in validObjs) {
            validObjs[set].dataRequest = await request.get(validObjs[set].nhmRequestUrl)
            .then(set => set.data.result.records)
            .catch(() => 'Error')
        }
        return validObjs
    }).catch(err => err)
    return response
};

var getDataStore = async (resourceId) => {
    var data = await request.get(`https://data.nhm.ac.uk/api/3/action/datastore_search?resource_id=${resourceId}`)
    .then(response => response.data.result.records)
    .catch(error => error)
    data = data.filter(item => item.lat != "")
    for (var item in data) {
        data[item].lat = parseFloat(data[item].lat)
        data[item].long = parseFloat(data[item].long)
    }
    return data
}

var getOceanMinerals = async () => {
    var data = await request.get(`https://data.nhm.ac.uk/api/3/action/datastore_search?resource_id=240577b2-52a2-409c-9fcf-24b671f97994`)
    .then(response => {
        var usable = []
        for (var item in response) {
            if (item.lat != "") {
                usable.push(item)
            }
        }
        return usable
    })
    .catch(error => error)
    return data
}

export { getNhmDataSets, getDataStore }