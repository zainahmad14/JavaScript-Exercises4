const { createServiceIndentification } = require('./createServiceIdentification');
const {createTransactionID} = require('./createTransactionID');
const { createRandomNumbers } = require('./createRandomNumbers');

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

exports.checkIDValid = checkIDValid;
exports.createID = createID;