// this creates random numbers
// e,g '123'
const createRandomNumbers = () => {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
}

exports.createRandomNumbers = createRandomNumbers;