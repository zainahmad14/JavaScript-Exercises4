// this creates transaction id
// e.g '0000000' 
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

exports.createTransactionID = createTransactionID;