// this read array of ID's from csv file
const readFromCSV = (filename) => {
    const fs = require('fs');
    const stream = fs.createReadStream(__dirname + '/../' + filename);
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

exports.readFromCSV = readFromCSV;