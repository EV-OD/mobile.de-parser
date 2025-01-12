const { pageDetail } = require("../constants")

function getAllSearchespage(page){
    let searches = []
    let searchQuery = pageDetail.searchInfoPage.searchItemParentSelector + "> *"
    let searchInfoPage = page.$$(searchQuery)
    for (let i = 0; i < searchInfoPage.length; i++){
        let search = searchInfoPage[i]
        let anchor = search.$(pageDetail.searchInfoPage.searchLinkRelative)
        anchor = anchor.getAttribute("href")
        searches.push(anchor)
    }
    return searches
}



module.exports = {
    getAllSearchespage
}