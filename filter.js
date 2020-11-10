function cariData(arrData, keyword){
    return arrData.filter(function(arrayElement){
        return arrayElement.url.match(keyword)
    })
}

module.exports = cariData