async function clear(page){
    await page.deleteCookie(...(await page.cookies()));
    await page.evaluate(() => {
        localStorage.clear();
        sessionStorage.clear();
    });
}

module.exports = {
    clear
}
