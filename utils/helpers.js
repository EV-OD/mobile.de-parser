const fs = require('fs');


const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const saveJson = (data, fileName) => {
    fs.writeFileSync(`./parseData/${fileName}`, JSON.stringify(data, null, 2));
}

module.exports = {
    randomRange,
    saveJson
}