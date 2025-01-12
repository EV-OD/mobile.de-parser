async function getSelectData(page, selector) {
    const selectedText = await page.evaluate((s) => {
        const element = document.querySelector(s);
        return element ? element.selectedOptions[0].text : null;
    }, selector);
    return selectedText;
}

async function getInputData(page, selector) {
    return await page.$eval(selector, (el) => el.value);
}

async function getAllCheckedIndexes(page, parentSelector, childRelative) {
    return await page.evaluate((s, c) => {
        const parent = document.querySelector(s);
        const children = parent.querySelectorAll(c);
        const indexes = [];
        children.forEach((child, index) => {
            if (child.checked) {
                indexes.push(index);
            }
        });
        return indexes;
    }, parentSelector, childRelative);    
}


module.exports = {
    getSelectData,
    getInputData,
    getAllCheckedIndexes
}
