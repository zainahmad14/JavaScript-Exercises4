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

exports.createCSVObject = createCSVObject;