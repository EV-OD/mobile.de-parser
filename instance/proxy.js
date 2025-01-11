const { default: axios } = require("axios");

async function getFreeProxy() {
    const response = await fetch('https://proxylist.geonode.com/api/proxy-list?limit=500&page=1&sort_by=lastChecked&sort_type=desc');
    // console.log(response);
    const data = await response.json();

    // console.log(data);

    const filteredProxies = data.data.filter(proxy => proxy.protocols.includes('socks5') && proxy.anonymityLevel === 'elite');
    
    const selectedProxy = filteredProxies[Math.floor(Math.random() * filteredProxies.length)];
    
    return `${selectedProxy.ip}:${selectedProxy.port}`;
}

async function getProxy(proxyIndex) {
    const webshareToken = 'pnqhjdvds2n2unee48lt580n2l799ykyjahzeyax';
    const webshareAPI = "https://proxy.webshare.io/api/v2/proxy/list/?mode=direct&page=1&page_size=25";
    const apiResponse = await axios.get(webshareAPI, {
        headers: {
            Authorization: "Token " + webshareToken
        }
    })
    const apiData = await apiResponse.data;
    // console.log(apiData.results.length);
    return apiData.results[proxyIndex];
}

module.exports = {
    getFreeProxy,
    getProxy
}
