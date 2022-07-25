// this creates service identification 
const createServiceIndentification = () => {
    return 'H1';
}
// this creates transaction id
const createTransactionID = (transactionID) => {
    let index = transactionID.length - 1;
    let stop = false;
    let change = true;
    while (index >= 0 && stop == false) {
        // check whether the last digit of transactionID is Z or not
        // also check that  whether the index has reached the length or not
        if (index == 0 && transactionID[index] === 'Z') {
            console.log('All sequences have been used');
            return transactionID;
        }
        // if digit is 9 then assign that to a
        if (transactionID[index] === '9') {
            transactionID = transactionID.slice(0, index).concat('a') + transactionID.slice(index + 1);
            change = false;
            stop = true;
        }
        // if digit is z than assign that to A 
        else if (transactionID[index] === 'z') {
            transactionID = transactionID.slice(0, index).concat('A') + transactionID.slice(index + 1);
            change = false;
            stop = true;
        }
        // if digit is Z than set change = true and then move to next digit 
        else if (transactionID[index] === 'Z') {
            transactionID = transactionID.slice(0, index).concat('0') + transactionID.slice(index + 1);
            change = true;
            stop = false;
        }
        // this assigns the next value of current digit value 
        else if (transactionID[index - 1] == '0') {
            transactionID = transactionID.slice(0, index).concat(String.fromCharCode(transactionID[index].charCodeAt(0) + 1)) + transactionID.slice(index + 1);
            change = false;
            stop = true;
        }
        index--;
    }
    return transactionID;
}
// this creates random numbers
const createRandomNumbers = () => {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
}
// this checks whether id is valid or not
const checkIDValid = (ID) => {
    if (ID.length == 12 && ID.slice(0, 2) === 'H1' && parseInt(ID.slice(9)) <= 999) {
        return true;
    }
    return false;
}
// this creates id
const createID = (ID) => {
    if (checkIDValid(ID) == true) {
        return createServiceIndentification() + createTransactionID(ID.slice(2, 9)) + createRandomNumbers();
    }
    return 'ID not valid';
}
// this creates array of ID's of size upto
const createIDArray = (array, upto) => {
    let current = 0;
    const ID = 'H10000000123';
    while (current < upto) {
        if (current == 0) {
            array.push(createID(ID));
        } else {
            array.push(createID(array[current - 1]));
        }
        current++;
    }
    return array;
}
// this stores array of ID's of size upto in teXt file
const storeInFile = (array) => {
    const json = JSON.stringify(array);
    let index = 0;
    const fs = require('fs');
    while (index < array.length) {
        fs.appendFile('ID.txt', `Index is: ${index + 1}: ${array[index++]}\n`, () => {});
    }
}
// this creates csv object from array of ID's
const createCSVObject = (array) => {
    csvArray = [];
    let index = 0;
    while (index < array.length) {
        const csv = {
            'index': index + 1,
            'ID': array[index++]
        }
        csvArray.push(csv);
    }
    // this stores csvArray values in csv 
    const csv = csvArray.map((row) => Object.values(row));
    // this adds csvArray[0] to the beginning of csv
    csv.unshift(Object.keys(csvArray[0]));
    // this return csv after replaceing '\n' with ','
    return `${csv.join('\n').replace(/, /g, '\',\'')};`
}
// this places commas with token in csvObject
const placeCommas = (csvObject, token) => {
    return csvObject.replace(new RegExp(`${token}`, 'g'), ',');
}
// this stores array of ID's in csv file
const storeInCSV = (array) => {
    const csvObject = createCSVObject(array);
    const placeComma = placeCommas(csvObject);
    const fs = require('fs');
    fs.writeFile('ID.csv', placeComma, () => {});
}
// this read array of ID's from csv file
const readFromCSV = (filename) => {
    const fs = require('fs');
    const stream = fs.createReadStream('./' + filename);
    const readline = require('readline');
    const rl = readline.createInterface({input: stream});
    let array = [];
    rl.on('line', (row) => {
        const obj = {
            'index': row.slice(0, row.indexOf(',')),
            'ID': row.slice(row.indexOf(',') + 1)
        }
        array.push(obj);
    })
    rl.on('close', () => {
        console.log(array);
    });
}
console.log('createID() -> ' + createID('H1000000z123'));
console.log('createID() -> ' + createID('H10000ZZZ123'));

const array = [];

createIDArray(array, 100);

console.log('createID(array, 100) -> ', array);

storeInFile(array);

storeInCSV(array);

readFromCSV('ID.csv');