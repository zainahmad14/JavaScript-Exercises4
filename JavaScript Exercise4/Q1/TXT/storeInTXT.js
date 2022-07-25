// this stores array of ID's of size upto in teXt file
const storeInFile = (array) => {
    const json = JSON.stringify(array);
    let index = 0;
    const fs = require('fs');
    while (index < array.length) {
        fs.appendFile('ID.txt', `Index is: ${index + 1}: ${array[index++]}\n`, () => {});
    }
}

exports.storeInFile = storeInFile;