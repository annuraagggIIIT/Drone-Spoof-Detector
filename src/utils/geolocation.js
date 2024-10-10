const geolib = require('geolib');

function calculateDistance(coord1, coord2) {
    return geolib.getDistance(
        { latitude: coord1.latitude, longitude: coord1.longitude },
        { latitude: coord2.latitude, longitude: coord2.longitude }
    );
}

module.exports = { calculateDistance };
