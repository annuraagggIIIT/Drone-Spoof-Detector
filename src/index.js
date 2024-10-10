const fs = require('fs');
const { checkMovementConsistency } = require('./verification/movement');

const loadData = () => {
    const rawData = fs.readFileSync('./data/devices.json');
    return JSON.parse(rawData);
};

const main = () => {
    const droneData = loadData();

    const result = checkMovementConsistency(droneData);
    console.log(result);
};

main();
