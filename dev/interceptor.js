function startLogging(page) {
    const requestHandler = (req) => console.log('Request:', req.url());
    const responseHandler = (res) => console.log('Response:', res.url(), res.status());

    // Attach listeners to the page
    page.on('request', requestHandler);
    page.on('response', responseHandler);

    // Return functions to stop logging later
    return () => {
        page.off('request', requestHandler);
        page.off('response', responseHandler);
    };
}


module.exports = {
    startLogging
}

