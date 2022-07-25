import { createServiceIndentification } from "./createServiceIdentification";
import { createRandomNumbers } from "./createRandomNumbers";

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