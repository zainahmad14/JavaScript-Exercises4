const { createID } = require('./TID/createID');
const { createIDArray } = require('./TID/createIDArray');
const { storeInFile } = require('./TXT/storeInTXT');
const { storeInCSV } = require('./CSV/storeInCSV');
const { readFromCSV } = require('./CSV/readFromCSV');

console.log('createID() -> ' + createID('H1000000z123'));
console.log('createID() -> ' + createID('H10000ZZZ123'));

const array = [];

createIDArray(array, 100);

console.log('createID(array, 100) -> ', array);

storeInFile(array);

storeInCSV(array);

readFromCSV('ID.csv');