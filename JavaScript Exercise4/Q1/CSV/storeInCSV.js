const { createCSVObject } = require('./createCSVObject')

// this places commas with token in csvObject
const placeCommas = (csvObject, token) => {
    return csvObject.replace(new RegExp(`${token}`, 'g'), ',');
}
// this stores array of ID's in csv file
const storeInCSV = (array) => {
    const csvObject = createCSVObject(array);
    const placeComma = placeCommas(csvObject);
    const fs = require('fs');
    fs.writeFile(__dirname + '/..' +  '/ID.csv', placeComma, () => {});
}

exports.storeInCSV = storeInCSV;