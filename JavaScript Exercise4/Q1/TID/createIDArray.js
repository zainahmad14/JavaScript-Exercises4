const { createID } = require('./createID');

// this creates array of ID's of size upto
// e.g 'H10000000123'
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

exports.createIDArray = createIDArray;