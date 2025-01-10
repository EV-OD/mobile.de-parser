async function getFreeProxy() {
    const response = await fetch('https://www.proxy-list.download/api/v1/get?type=https');
    const proxies = await response.text();
    const proxyList = proxies.trim().split('\n');
    return proxyList[Math.floor(Math.random() * proxyList.length)]; // Select a random proxy
}

module.exports = {
    getFreeProxy
}
