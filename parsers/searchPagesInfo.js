const { pageDetail } = require("../constants")
const { getSelectData, getInputData, getAllCheckedIndexes } = require("../utils/inputs")

function getAllSearchespage(page, limit=10){
    let searches = []
    let searchQuery = pageDetail.searchInfoPage.searchItemParentSelector + "> *"
    let searchInfoPage = page.$$(searchQuery)

    for (let i = 0; i < searchInfoPage.length && searches.length < limit; i++) {
        let search = searchInfoPage[i]
        let anchor = search.$(pageDetail.searchInfoPage.searchLinkRelative)
        anchor = anchor.getAttribute("href")
        searches.push(anchor)
    }
    return searches
}

async function pageInfo(page){
    let s = pageDetail.searchInfoPage.eachPage.selector
    let name = await page.$(s.name).getAttribute("value")
    let basicData = {
        marke: await getSelectData(page, s.basicData.marke),
        modell: await getSelectData(page, s.basicData.modell),
        extraInput: await getInputData(page, s.basicData.extraInput),
        price:{
            from: await getInputData(page, s.basicData.price.from),
            until: await getInputData(page, s.basicData.price.until)
        },
        initialRegistration:{
            from: await getInputData(page, s.basicData.initialRegistration.from),
            until: await getInputData(page, s.basicData.initialRegistration.until)
        },
        mileage:{
            from: await getInputData(page, s.basicData.mileage.from),
            until: await getInputData(page, s.basicData.mileage.until)
        },

        fuelType: await getAllCheckedIndexes(page, s.basicData.fuelType.parent, s.basicData.fuelType.checkboxSelectorRelative),
        interiorMaterial: await getAllCheckedIndexes(page, s.basicData.interiorMaterial.parent, s.basicData.interiorMaterial.checkboxSelectorRelative)
    }
    return {
        name,
        basic
    }
}

module.exports = {
    getAllSearchespage,
    pageInfo
}