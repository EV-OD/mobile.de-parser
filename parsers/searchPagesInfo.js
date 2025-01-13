const { timeout } = require("puppeteer");
const { pageDetail } = require("../constants");
const {
  getSelectData,
  getInputData,
  getAllCheckedIndexes,
} = require("../utils/inputs");

async function getAllSearchespage(page, limit = 10) {
  let searches = [];
  let query = `[id^='${pageDetail.searchInfoPage.searchItemParentSelector.start}'][id$='${pageDetail.searchInfoPage.searchItemParentSelector.end}']`;
  console.log("Query:", query);

  try {
    // Wait for the selector to appear
    await page.waitForSelector(query, { visible: true,timeout: 0 });
    console.log("Selector is visible.");

    // Use $eval and ensure the querySelectorAll result is converted to an array
    const p = await page.$eval(query, (el) => {
      let aEltList = [
        ...el.querySelectorAll(
          "div > section > div > * > div.OSgOk > div > a.ueuGs.FWtU1.CCaE2.vfGGm"
        ),
      ];
      let a = aEltList.map((a) => a.getAttribute("href"));
      return a;
    }, {timeout: 0});

    for (let i = 0; i < p.length && searches.length < limit; i++) {
      let search = pageDetail.seachUrl + p[i];
      console.log("Search:", search);
      searches.push(search);
    }
    return searches;
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

async function pageInfo(page) {
  let s = pageDetail.searchInfoPage.eachPage.selector;
  let name = await page.$eval(s.name,el=>el.value);
  let basicData = {
    marke: await getSelectData(page, s.basicData.marke),
    modell: await getSelectData(page, s.basicData.modell),
    extraInput: await getInputData(page, s.basicData.extraInput),
    price: {
      from: await getInputData(page, s.basicData.price.from),
      until: await getInputData(page, s.basicData.price.until),
    },
    initialRegistration: {
      from: await getInputData(page, s.basicData.initialRegistration.from),
      until: await getInputData(page, s.basicData.initialRegistration.until),
    },
    mileage: {
      from: await getInputData(page, s.basicData.mileage.from),
      until: await getInputData(page, s.basicData.mileage.until),
    },

    fuelType: await getAllCheckedIndexes(
      page,
      s.basicData.fuelType.parent,
      s.basicData.fuelType.checkboxSelectorRelative
    ),
    interiorMaterial: await getAllCheckedIndexes(
      page,
      s.basicData.interiorMaterial.parent,
      s.basicData.interiorMaterial.checkboxSelectorRelative
    ),
  };
  return {
    name,
    basicData,
  };
}

module.exports = {
  getAllSearchespage,
  pageInfo,
};
