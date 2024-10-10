const { calculateDistance } = require('../utils/geolocation');

function calculateSpeed(distance, timeDifference) {
    return distance / timeDifference;
}

function checkMovementConsistency(droneData) {
    const [location1, location2] = droneData;
    const distance = calculateDistance(location1.location, location2.location);
    const timeDifference = (new Date(location2.timestamp) - new Date(location1.timestamp)) / 1000;
    const speed = calculateSpeed(distance, timeDifference);
    const maxSpeed = 50;

    if (speed > maxSpeed) {
        return `Suspicious movement detected. Speed: ${speed.toFixed(2)} m/s.`;
    } else {
        return `Movement is consistent. Speed: ${speed.toFixed(2)} m/s.`;
    }
}

module.exports = { checkMovementConsistency };
